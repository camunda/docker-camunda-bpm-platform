#!/bin/bash -ex

EE=${EE:-false}

if [ -z "$SNAPSHOT" ]; then
  SNAPSHOT_ARGUMENT=""
else
  SNAPSHOT_ARGUMENT="--build-arg SNAPSHOT=${SNAPSHOT}"
fi

if [ -z "$VERSION" ]; then
  VERSION_ARGUMENT=""
else
  VERSION_ARGUMENT="--build-arg VERSION=${VERSION}"
fi

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

# Backwards-compat alias: the unsuffixed tag (e.g. :tomcat) points at the amd64
# image, matching the convention used by the legacy Jenkins pipeline.
EXTRA_TAG_ARG=""
if [ "${PLATFORM}" = "amd64" ]; then
  EXTRA_TAG_ARG="-t ${IMAGE_BASE}"
fi

echo "Runner architecture: $(uname -m) -> PLATFORM=${PLATFORM}"

echo "::group::Docker build"
rc=0
docker build .                          \
    -t "${IMAGE_NAME}"                  \
    ${EXTRA_TAG_ARG}                    \
    --build-arg DISTRO=${DISTRO}        \
    --build-arg EE=${EE}                \
    --build-arg USER=${NEXUS_USER}      \
    --build-arg PASSWORD=${NEXUS_PASS}  \
    ${VERSION_ARGUMENT}                 \
    ${SNAPSHOT_ARGUMENT}                \
    || rc=$?
echo "::endgroup::"
[ $rc -ne 0 ] && exit $rc

docker inspect "${IMAGE_NAME}" | grep "Architecture" -A2
