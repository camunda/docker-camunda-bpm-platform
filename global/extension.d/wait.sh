#!/bin/bash
set -o errexit

# logging
echo "  Extension [Wait for Service]"

# install pre-start script
cp $BUILD_PATH/extension.d/wait/wait.pre-start.sh $HOOKDIR_PRESTART
