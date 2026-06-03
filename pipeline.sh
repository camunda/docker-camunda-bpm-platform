#!/bin/bash -ex

EE=${EE:-false}

# Always resolve VERSION / SNAPSHOT / DISTRO and forward them as build args.
# The Dockerfile has hardcoded defaults (e.g. VERSION=7.24.0, SNAPSHOT=false)
# that are also baked into the image's CAMUNDA_VERSION env and used by
# download.sh to pick the Nexus artifact + repository. If we don't pass these
# as --build-arg, the image silently gets the Dockerfile defaults regardless
# of what the workflow / caller intended (this matches the behaviour of the
# legacy Jenkins DSL, which always passed VERSION=${RELEASE_VERSION} and
# SNAPSHOT=${SNAPSHOT}). release.sh and create-manifests.sh already use this
# same fallback strategy.
VERSION=${VERSION:-$(grep '^ARG VERSION=' Dockerfile | head -n1 | cut -d = -f 2)}
SNAPSHOT=${SNAPSHOT:-$(grep '^ARG SNAPSHOT=' Dockerfile | head -n1 | cut -d = -f 2)}
DISTRO=${DISTRO:?DISTRO must be set}

echo "Build configuration: DISTRO=${DISTRO} EE=${EE} VERSION=${VERSION} SNAPSHOT=${SNAPSHOT}"

# Detect architecture if PLATFORM is not already provided.
# Maps Docker-style platform names (amd64/arm64) regardless of host (x86_64/aarch64).
if [ -z "${PLATFORM:-}" ]; then
  case "$(uname -m)" in
    x86_64|amd64)   PLATFORM=amd64 ;;
    aarch64|arm64)  PLATFORM=arm64 ;;
    *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
  esac
fi

IMAGE_BASE=camunda/camunda-bpm-platform:${DISTRO}
IMAGE_NAME="${IMAGE_BASE}-${PLATFORM}"

echo "Runner architecture: $(uname -m) -> PLATFORM=${PLATFORM}"

echo "::group::Docker build"
rc=0
docker build .                            \
    -t "${IMAGE_NAME}"                    \
    --build-arg "DISTRO=${DISTRO}"        \
    --build-arg "EE=${EE}"                \
    --build-arg "VERSION=${VERSION}"      \
    --build-arg "SNAPSHOT=${SNAPSHOT}"    \
    --build-arg "USER=${NEXUS_USER}"      \
    --build-arg "PASSWORD=${NEXUS_PASS}"  \
    || rc=$?
echo "::endgroup::"
if [ $rc -ne 0 ]; then
  echo "Docker build failed with exit code $rc" >&2
  exit $rc
fi

docker inspect "${IMAGE_NAME}" | grep "Architecture" -A2

# Optionally push the freshly built per-arch image to a remote registry (e.g.
# Harbor). Triggered when PUSH_REGISTRY is set. Expects the caller to have
# already performed `docker login` against that registry.
#
# Only the per-arch source tag is pushed here; create-manifests.sh consumes
# these per-arch tags and produces the multi-arch manifests with the final
# user-facing tag layout (see Jenkins-DSL parity logic in that script).
#
#   PUSH_REGISTRY  - registry host + project, e.g. registry.camunda.cloud/cambpm-ee
#   PUSH_REPO      - repository name within the project (default: camunda-bpm-platform,
#                    or camunda-bpm-platform-ee when EE=true)
if [ -n "${PUSH_REGISTRY:-}" ]; then
  if [ -z "${PUSH_REPO:-}" ]; then
    if [ "${EE}" = "true" ]; then
      PUSH_REPO=camunda-bpm-platform-ee
    else
      PUSH_REPO=camunda-bpm-platform
    fi
  fi

  VERSION_SUFFIX=""
  if [ "${SNAPSHOT}" = "true" ]; then
    VERSION_SUFFIX="-SNAPSHOT"
  fi

  REMOTE_BASE="${PUSH_REGISTRY}/${PUSH_REPO}"
  REMOTE_PLATFORM_TAG="${REMOTE_BASE}:${DISTRO}-${VERSION}${VERSION_SUFFIX}-${PLATFORM}"

  echo "::group::Docker push ${REMOTE_PLATFORM_TAG}"
  docker tag "${IMAGE_NAME}" "${REMOTE_PLATFORM_TAG}"
  docker push "${REMOTE_PLATFORM_TAG}"
  echo "::endgroup::"
fi

