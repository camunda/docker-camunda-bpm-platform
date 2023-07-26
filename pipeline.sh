#!/bin/bash -ex

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

docker build .                                \
    -t camunda/camunda-bpm-platform:${DISTRO} \
    --build-arg DISTRO=${DISTRO}              \
    --build-arg EE=${EE}                      \
    --build-arg USER=${NEXUS_USER}            \
    --build-arg PASSWORD=${NEXUS_PASS}        \
    ${VERSION_ARGUMENT}                       \
    ${SNAPSHOT_ARGUMENT}

./test/test.sh
