#!/bin/bash
set -o errexit

export FLYWAY_VERSION=5.2.4

# logging
echo "  Extension [FlyWay Db Migrator]"

# download
echo "      Downloading FlyWay ${FLYWAY_VERSION}"
wget -q https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/${FLYWAY_VERSION}/flyway-commandline-${FLYWAY_VERSION}-linux-x64.tar.gz -P /build > /dev/null

# extract
echo "      Extracting FlyWay ${FLYWAY_VERSION}"
mkdir -p /opt/flyway
tar -zxvf /build/flyway-commandline-${FLYWAY_VERSION}-linux-x64.tar.gz --strip 1 -C /opt/flyway > /dev/null

# remove jre, use openjdk
rm -rf /opt/flyway/jre

# remove all shipped jdbc drivers
rm -rf /opt/flyway/drivers/*

# link camunda shipped drivers
ln -s /app/lib/h2-*.jar /opt/flyway/drivers/h2.jar

# link binary into path
ln -sf /opt/flyway/flyway /usr/local/bin/flyway
chmod +x /usr/local/bin/flyway

# install pre-start script
cp /build/extension.d/flyway/flyway.pre-start.sh $HOOKDIR_PRESTART

# copy db migration scripts
cp -R /build/extension.d/flyway/sql /sql
chown -R app:app /sql

# clean up
rm -rf /build/flyway-commandline-${FLYWAY_VERSION}-linux-x64.tar.gz
rm -rf /build/flyway-${FLYWAY_VERSION}
