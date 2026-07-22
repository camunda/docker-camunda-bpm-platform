#!/bin/bash -eux

# Creates multi-arch manifests by combining per-architecture images
# that were pushed by release.sh with ARCH_SUFFIX.

VERSION=${VERSION:-$(grep VERSION= Dockerfile | head -n1 | cut -d = -f 2)}
DISTRO=${DISTRO:-$(grep DISTRO= Dockerfile | cut -d = -f 2)}
SNAPSHOT=${SNAPSHOT:-$(grep SNAPSHOT= Dockerfile | cut -d = -f 2)}
ARCHITECTURES=${ARCHITECTURES:-"amd64 arm64"}

IMAGE=camunda/camunda-bpm-platform

function create_manifest {
    local tag="$1"
    local sources=""
    for arch in $ARCHITECTURES; do
        sources="$sources $IMAGE:${tag}-${arch}"
    done
    echo "Creating manifest for $IMAGE:$tag from:$sources"
    docker buildx imagetools create -t "$IMAGE:$tag" $sources
}

# Compute tags — same logic as release.sh
tags=()

if [ "${SNAPSHOT}" = "true" ]; then
    tags+=("${DISTRO}-${VERSION}-SNAPSHOT")
    tags+=("${DISTRO}-SNAPSHOT")

    if [ "${DISTRO}" = "tomcat" ]; then
        tags+=("${VERSION}-SNAPSHOT")
        tags+=("SNAPSHOT")
    fi
else
    tags+=("${DISTRO}-${VERSION}")
    if [ "${DISTRO}" = "tomcat" ]; then
        tags+=("${VERSION}")
    fi
fi

# Latest Docker image is created and pushed just once when a new version is released.
# Latest tag refers to the latest minor release of Camunda Platform.
# The 1st condition matches only when the version branch is the same as the main branch.
git fetch origin next
if [ $(git rev-parse HEAD) = $(git rev-parse FETCH_HEAD) ] && [ "${SNAPSHOT}" = "false" ]; then
    tags+=("${DISTRO}-latest")
    tags+=("${DISTRO}")
    if [ "${DISTRO}" = "tomcat" ]; then
        tags+=("latest")
    fi
fi

echo "Creating multi-arch manifests for tags:" "${tags[@]}"

for tag in "${tags[@]}"; do
    create_manifest "$tag"
done

echo "Multi-arch manifests created:" >> $GITHUB_STEP_SUMMARY
printf -- "- $IMAGE:%s\n" "${tags[@]}" >> $GITHUB_STEP_SUMMARY
