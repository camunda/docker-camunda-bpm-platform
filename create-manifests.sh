#!/bin/bash -eux

# Creates multi-arch manifests by combining the per-architecture images that
# pipeline.sh pushed under per-arch source tags of the form
#
#   ${PUSH_REGISTRY}/${PUSH_REPO}:${DISTRO}-${VERSION}[-SNAPSHOT]-${arch}
#
# The set of multi-arch tags produced is identical to what the legacy Jenkins
# DSL job (jenkins-job-dsl-seed-jobs/jobs/<v>/distro/platform_docker.dsl) used
# to produce, namely:
#
#   ${DISTRO}-${VERSION}[-SNAPSHOT]                       (always)
#   ${DISTRO}-latest                                      (CE non-alpha only)
#   ${VERSION}[-SNAPSHOT]                                 (DISTRO=tomcat only)
#   latest                                                (DISTRO=tomcat AND CE non-alpha)
#
# Required env vars:
#   PUSH_REGISTRY  - registry host + project, e.g. registry.camunda.cloud/team-cambpm
#
# Optional env vars (with sensible defaults):
#   PUSH_REPO      - repository name within the project. Defaults to
#                    camunda-bpm-platform-ee when EE=true, else camunda-bpm-platform.
#   EE             - "true" or "false". Defaults to "false".
#   DISTRO         - one of tomcat / wildfly / run. Defaults to Dockerfile ARG.
#   VERSION        - Camunda BPM version. Defaults to Dockerfile ARG.
#   SNAPSHOT       - "true" or "false". Defaults to Dockerfile ARG.
#   ARCHITECTURES  - space-separated list of arches. Defaults to "amd64 arm64".
#
# The caller is expected to have performed `docker login` for PUSH_REGISTRY.

EE=${EE:-false}
VERSION=${VERSION:-$(grep '^ARG VERSION=' Dockerfile | head -n1 | cut -d = -f 2)}
DISTRO=${DISTRO:-$(grep '^ARG DISTRO=' Dockerfile | head -n1 | cut -d = -f 2)}
SNAPSHOT=${SNAPSHOT:-$(grep '^ARG SNAPSHOT=' Dockerfile | head -n1 | cut -d = -f 2)}
ARCHITECTURES=${ARCHITECTURES:-"amd64 arm64"}

if [ -z "${PUSH_REGISTRY:-}" ]; then
    echo "PUSH_REGISTRY must be set (e.g. registry.camunda.cloud/team-cambpm)" >&2
    exit 1
fi

if [ -z "${PUSH_REPO:-}" ]; then
    if [ "${EE}" = "true" ]; then
        PUSH_REPO=camunda-bpm-platform-ee
    else
        PUSH_REPO=camunda-bpm-platform
    fi
fi

IMAGE="${PUSH_REGISTRY}/${PUSH_REPO}"

VERSION_SUFFIX=""
if [ "${SNAPSHOT}" = "true" ]; then
    VERSION_SUFFIX="-SNAPSHOT"
fi

# The per-arch source tag pushed by pipeline.sh.
SOURCE_BASE_TAG="${DISTRO}-${VERSION}${VERSION_SUFFIX}"

function create_manifest {
    local tag="$1"
    local sources=""
    for arch in $ARCHITECTURES; do
        sources="$sources ${IMAGE}:${SOURCE_BASE_TAG}-${arch}"
    done
    echo "Creating manifest for ${IMAGE}:${tag} from:${sources}"
    docker buildx imagetools create -t "${IMAGE}:${tag}" $sources
}

# Compute the user-facing tag set, mirroring the Jenkins DSL exactly.
tags=()

# Always: ${DISTRO}-${VERSION}[-SNAPSHOT]
tags+=("${DISTRO}-${VERSION}${VERSION_SUFFIX}")

# CE non-alpha gets ${DISTRO}-latest. Matches Jenkins:
#   [[ "${EE}" == "false" && "${RELEASE_VERSION}" != *"alpha"* ]]
if [ "${EE}" = "false" ] && [[ "${VERSION}" != *alpha* ]]; then
    tags+=("${DISTRO}-latest")
fi

# Tomcat is the default distro and additionally gets unsuffixed tags.
if [ "${DISTRO}" = "tomcat" ]; then
    tags+=("${VERSION}${VERSION_SUFFIX}")
    if [ "${EE}" = "false" ] && [[ "${VERSION}" != *alpha* ]]; then
        tags+=("latest")
    fi
fi

echo "Creating multi-arch manifests for tags:" "${tags[@]}"

for tag in "${tags[@]}"; do
    create_manifest "$tag"
done

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
    echo "Multi-arch manifests created:" >> "$GITHUB_STEP_SUMMARY"
    printf -- "- ${IMAGE}:%s\n" "${tags[@]}" >> "$GITHUB_STEP_SUMMARY"
fi
