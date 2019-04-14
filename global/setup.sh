#!/bin/bash
set -o errexit

export ARCH=""
if [ "$(uname -m)" = "x86_64" ]; then
    export ARCH="amd64"
elif [ "$(uname -m)" = "aarch64" ]; then
    export ARCH="arm"
else
    export ARCH="386"
fi

echo "Build Configuration"
echo "  Base Image: ${BASE_IMAGE}"
echo "  AppServer Distribution: ${APP_SERVER_DIST}"
echo "  Db Drivers: ${DB_DRIVERS}"
echo "  Arch: ${ARCH}"

echo "Global Scripts" &&\
cp -R /build/scripts/* /usr/local/bin
chmod +x /usr/local/bin/*

echo "Prepare Tasks"
sh /usr/local/bin/run_script $BUILD_PATH/prepare.sh

echo "OS Accounts"
sh /usr/local/bin/run_script $BUILD_PATH/account.sh

echo "Database Drivers [${DB_DRIVERS}]"
sh /usr/local/bin/run_script $BUILD_PATH/db/${DB_DRIVERS}.sh

echo "Camunda"
sh /usr/local/bin/run_script $BUILD_PATH/app-server/${APP_SERVER_DIST}.sh

echo "Extensions"
sh /usr/local/bin/run_scripts $BUILD_PATH/extension.d

echo "Permissions"
chown -R app:app /app
chown -R app:app /data
mkdir -p /ext
chown -R app:app /ext

echo "CleanUp Tasks"
sh /usr/local/bin/run_script $BUILD_PATH/cleanup.sh
rm -rf /build
