#!/bin/bash
set -o errexit

# logging
GOSS_VERSION="0.3.6"
echo "  Extension [Goss]"

# install goss
curl -L -s "https://github.com/aelsabbahy/goss/releases/download/v${GOSS_VERSION}/goss-linux-${ARCH}" -o /usr/local/bin/goss
chmod +rx /usr/local/bin/goss
echo "    GOSS v${GOSS_VERSION} has been installed to /usr/local/bin/goss"

# install dgoss
curl -L -s "https://raw.githubusercontent.com/aelsabbahy/goss/v${GOSS_VERSION}/extras/dgoss/dgoss" -o /usr/local/bin/dgoss
chmod +rx /usr/local/bin/dgoss
echo "    DGOSS v${GOSS_VERSION} has been installed to /usr/local/bin/dgoss"

# copy configuration
mkdir -p /goss
cp $BUILD_PATH/goss.yml /goss/goss.yml
