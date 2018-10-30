#!/bin/bash -eux

EE=${EE:-false}
VERSION=${VERSION:-$(grep VERSION= Dockerfile | head -n1 | cut -d = -f 2)}
DISTRO=${DISTRO:-$(grep DISTRO= Dockerfile | cut -d = -f 2)}
SNAPSHOT=${SNAPSHOT:-$(grep SNAPSHOT= Dockerfile | cut -d = -f 2)}

IMAGE=camunda/camunda-bpm-platform

function tag_and_push {
    local tag=${1}
    docker tag ${IMAGE}:${DISTRO} ${IMAGE}:${tag}
    docker push ${IMAGE}:${tag}
}

if [ "${TRAVIS_PULL_REQUEST}" != "false" ]; then
    echo "Not pushing pull request to docker hub"
    exit 0
fi

if ! [[ "${TRAVIS_BRANCH}" =~ master|7.[0-9]+|next ]]; then
    echo "Not pushing development branch to docker hub"
    exit 0
fi

if [ "${EE}" = "true" ]; then
    echo "Not pushing EE image to docker hub"
    exit 0
fi

docker login -u "${DOCKER_HUB_USERNAME}" -p "${DOCKER_HUB_PASSWORD}"

if [ "${SNAPSHOT}" = "true" ]; then
    tag_and_push "${DISTRO}-${VERSION}-SNAPSHOT"
    tag_and_push "${DISTRO}-SNAPSHOT"

    if [ "${DISTRO}" = "tomcat" ]; then
        tag_and_push "${VERSION}-SNAPSHOT"
        tag_and_push "SNAPSHOT"
    fi
else
    tag_and_push "${DISTRO}-${VERSION}"
    if [ "${DISTRO}" = "tomcat" ]; then
        tag_and_push "${VERSION}"
    fi
fi

git fetch origin master
if [ $(git rev-parse HEAD) = $(git rev-parse FETCH_HEAD) ]; then
    # tagging image as latest
    tag_and_push "${DISTRO}-latest"
    tag_and_push "${DISTRO}"
    if [ "${DISTRO}" = "tomcat" ]; then
        tag_and_push "latest"
    fi
fi
