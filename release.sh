#!/bin/bash -eux

IMAGE=camunda/camunda-bpm-platform

function tag_and_push {
    local tag=${1}
    docker tag ${IMAGE}:${DISTRO} ${IMAGE}:${tag}
    docker push ${IMAGE}:${tag}
}


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

# TODO: how to detect latest
