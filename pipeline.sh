#!/bin/bash

EE=${EE:-false}
IMAGE_NAME=camunda/camunda-bpm-platform:${DISTRO}-${PLATFORM}

docker buildx build .                         \
    -t "${IMAGE_NAME}"                        \
    --platform linux/${PLATFORM}              \
    --build-arg DISTRO=${DISTRO}              \
    --build-arg EE=${EE}                      \
    --build-arg USER=${NEXUS_USER}            \
    --build-arg PASSWORD=${NEXUS_PASS}        \
    --cache-to type=gha,scope="$GITHUB_RUN_ID-$DISTRO-image" \
    --cache-from type=gha,scope="$GITHUB_RUN_ID-$DISTRO-image" \
    --load

docker inspect "${IMAGE_NAME}" | grep "Architecture" -A2
