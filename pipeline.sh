#!/bin/bash

# do not build EE for PRs from forks (Nexus EE credentials are not available)
if [[ "${EE}" == "true" && "${NEXUS_USER}" == "" ]]; then
    echo "Skipping EE build in a fork PR"
    exit 0
fi

echo y2"${TRAVIS_PULL_REQUEST_SLUG}"
echo z2"${TRAVIS_REPO_SLUG}"
echo u1"${NEXUS_USER}" p1"${NEXUS_PASS}"
  
docker build .                                \
    -t camunda/camunda-bpm-platform:${DISTRO} \
    --build-arg DISTRO=${DISTRO}              \
    --build-arg EE=${EE}                      \
    --build-arg USER=${NEXUS_USER}            \
    --build-arg PASSWORD=${NEXUS_PASS}
 
./test/test.sh
./release.sh
