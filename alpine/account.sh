#!/bin/bash
set -o errexit

# Group
addgroup -g 1000 -S app

# User
adduser -u 1000 -S app -G app -h /app -s /bin/bash -D app
