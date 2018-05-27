#!/bin/sh

set -e

POM="$(wget -O- $1)"
MYSQL_DIR=${LIB_DIR}/mysql/mysql-connector-java/main/
MYSQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.mysql)
POSTGRESQL_DIR=${LIB_DIR}/org/postgresql/postgresql/main/
POSTGRESQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.postgresql)

mkdir -p $MYSQL_DIR
wget -O ${MYSQL_DIR}/mysql-connector-java-${MYSQL_VERSION}.jar "${NEXUS}?r=public&g=mysql&a=mysql-connector-java&v=${MYSQL_VERSION}&p=jar"
sed -i "s/@version.mysql@/${MYSQL_VERSION}/g" ${MYSQL_DIR}/module.xml

mkdir -p $POSTGRESQL_DIR
wget -O ${POSTGRESQL_DIR}/postgresql-${POSTGRESQL_VERSION}.jar "${NEXUS}?r=public&g=org.postgresql&a=postgresql&v=${POSTGRESQL_VERSION}&p=jar"
sed -i "s/@version.postgresql@/${POSTGRESQL_VERSION}/g" ${POSTGRESQL_DIR}/module.xml
