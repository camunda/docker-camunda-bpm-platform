#!/bin/bash
set -o errexit

# logging
echo "  Extension [Wait for Service]"

# install pre-start script
cp /build/extension.d/wait/wait.pre-start.sh $HOOKDIR_PRESTART
