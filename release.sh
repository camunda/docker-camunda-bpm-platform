#!/bin/bash -eux

EE=${EE:-false}
VERSION=${VERSION:-$(grep VERSION= Dockerfile | head -n1 | cut -d = -f 2)}
DISTRO=${DISTRO:-$(grep DISTRO= Dockerfile | cut -d = -f 2)}
SNAPSHOT=${SNAPSHOT:-$(grep SNAPSHOT= Dockerfile | cut -d = -f 2)}
PLATFORMS=${PLATFORMS:-linux/amd64}
NEXUS_USER=${NEXUS_USER:-}
NEXUS_PASS=${NEXUS_PASS:-}
ARCH_SUFFIX=${ARCH_SUFFIX:-}

IMAGE=camunda/camunda-bpm-platform

function build_and_push {
    echo "::group::Docker build and push"
    local tags=("$@")
    local push_tags=()
    for tag in "${tags[@]}"; do
        push_tags+=("${tag}${ARCH_SUFFIX}")
    done
    printf -v tag_arguments -- "--tag $IMAGE:%s " "${push_tags[@]}"
    local rc=0
    docker buildx build .                   \
        $tag_arguments                      \
        --build-arg DISTRO=${DISTRO}        \
        --build-arg EE=${EE}                \
        --build-arg USER=${NEXUS_USER}      \
        --build-arg PASSWORD=${NEXUS_PASS}  \
        --cache-to type=gha,scope="$GITHUB_REF_NAME-$DISTRO-image"    \
        --cache-from type=gha,scope="$GITHUB_REF_NAME-$DISTRO-image"  \
        --platform $PLATFORMS               \
        --push                              \
        || rc=$?
    echo "::endgroup::"
    [ $rc -ne 0 ] && exit $rc

    echo "Tags released:" >> $GITHUB_STEP_SUMMARY
    printf -- "- $IMAGE:%s\n" "${push_tags[@]}" >> $GITHUB_STEP_SUMMARY
}

if [ "${EE}" = "true" ]; then
    echo "Not pushing EE image to docker hub"
    exit 0
fi

# check whether the CE image for distro+arch was already released and exit in that case
CHECK_TAG="${DISTRO}-${VERSION}${ARCH_SUFFIX}"
if docker manifest inspect "$IMAGE:${CHECK_TAG}" > /dev/null 2>&1; then
    echo "Not pushing already released CE image (${CHECK_TAG})"
    exit 0
fi


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

# Latest Docker image is created and pushed just once when a new version is relased.
# Latest tag refers to the latest minor release of Camunda Platform.
# https://github.com/camunda/docker-camunda-bpm-platform/blob/next/README.md#supported-tagsreleases
# The 1st condition matches only when the version branch is the same as the main branch.
git fetch origin next
if [ $(git rev-parse HEAD) = $(git rev-parse FETCH_HEAD) ] && [ "${SNAPSHOT}" = "false" ]; then
    # tagging image as latest
    tags+=("${DISTRO}-latest")
    tags+=("${DISTRO}")
    if [ "${DISTRO}" = "tomcat" ]; then
        tags+=("latest")
    fi
fi

build_and_push "${tags[@]}"
