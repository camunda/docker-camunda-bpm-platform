#!/bin/sh

set -e

POM="$(wget -O- $1)"
MYSQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.mysql)
POSTGRESQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.postgresql)

wget -O ${LIB_DIR}/mysql-connector-java-${MYSQL_VERSION}.jar "${NEXUS}?r=public&g=mysql&a=mysql-connector-java&v=${MYSQL_VERSION}&p=jar"
wget -O ${LIB_DIR}/postgresql-${POSTGRESQL_VERSION}.jar "${NEXUS}?r=public&g=org.postgresql&a=postgresql&v=${POSTGRESQL_VERSION}&p=jar"
