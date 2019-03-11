#!/bin/bash
set -o errexit

# clean up unused packages
echo "  OS Packages"
apk del --no-cache unzip tar wget curl > /dev/null
