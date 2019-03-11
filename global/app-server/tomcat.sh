#!/bin/bash
set -o errexit

# Logging
echo '  Tomcat'

# Pre Install Hook
echo '      Hooks `tomcat.pre-install`'
run_scripts $BUILD_PATH/app-server/tomcat/pre-install.d

# Camunda
## Download
echo "      Downloading camunda release ${CAMUNDA_VERSION}"
wget -q https://app.camunda.com/nexus/content/repositories/public/org/camunda/bpm/tomcat/camunda-bpm-tomcat/${CAMUNDA_VERSION}/camunda-bpm-tomcat-${CAMUNDA_VERSION}.zip -P /build > /dev/null
echo "      Extracting camunda release ${CAMUNDA_VERSION}"
unzip /build/camunda-bpm-tomcat-${CAMUNDA_VERSION}.zip -d /build/camunda > /dev/null
cp -r /build/camunda/server/apache-tomcat-*/* /app
## WebApps Directory
mkdir -p /data/webapps
ln -sf /app/webapps/engine-rest /data/webapps/engine-rest
ln -sf /app/webapps/camunda /data/webapps/camunda
ln -sf /app/webapps/camunda-welcome /data/webapps/camunda-welcome
ln -sf /app/webapps/manager /data/webapps/manager
## Pre-Start Scripts
cp -r $BUILD_PATH/app-server/tomcat/pre-start.d/. /app/hook.pre-start.d
## Start Script
cp -r $BUILD_PATH/app-server/tomcat/files/run.sh /app/run.sh
## Configuration Files
cp -rf $BUILD_PATH/app-server/tomcat/files/bpm-platform.xml /app/conf/bpm-platform.xml
cp -rf $BUILD_PATH/app-server/tomcat/files/server.xml /app/conf/server.xml
cp -rf $BUILD_PATH/app-server/tomcat/files/tomcat-users.xml /app/conf/tomcat-users.xml
cp -rf $BUILD_PATH/app-server/tomcat/files/logging.properties /app/conf/logging.properties

# Post Install Hook
echo '      Hooks `tomcat.post-install`'
run_scripts $BUILD_PATH/app-server/tomcat/post-install.d

# CleanUp
rm /build/camunda-bpm-tomcat-${CAMUNDA_VERSION}.zip
