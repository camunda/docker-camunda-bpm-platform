#!/bin/bash
set -o errexit

# prepare
echo "  OS Packages" &&\
apk add --no-cache ca-certificates bash tzdata unzip gettext tar wget curl > /dev/null
