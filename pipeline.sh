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

IMAGE_NAME=camunda/camunda-bpm-platform:${DISTRO}

echo "Runner architecture: $(uname -m)"

docker build .                          \
    -t "${IMAGE_NAME}"                  \
    --build-arg DISTRO=${DISTRO}        \
    --build-arg EE=${EE}                \
    --build-arg USER=${NEXUS_USER}      \
    --build-arg PASSWORD=${NEXUS_PASS}  \
    ${VERSION_ARGUMENT}                 \
    ${SNAPSHOT_ARGUMENT}

docker inspect "${IMAGE_NAME}" | grep "Architecture" -A2
