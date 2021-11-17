#!/bin/bash
 
docker build .                                \
    -t camunda/camunda-bpm-platform:${DISTRO} \
    --build-arg DISTRO=${DISTRO}              \
    --build-arg EE=${EE}                      \
    --build-arg USER=${NEXUS_USER}            \
    --build-arg PASSWORD=${NEXUS_PASS}

./test/test.sh
