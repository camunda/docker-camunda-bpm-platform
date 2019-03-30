#!/bin/bash
set -o errexit

# logging
echo "  Extension [Goss]"

# install
curl -fsSL https://goss.rocks/install | GOSS_VER=v0.3.6 sh 2>&1 /dev/null
