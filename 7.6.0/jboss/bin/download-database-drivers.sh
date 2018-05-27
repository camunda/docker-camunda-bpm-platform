#!/bin/sh

set -e

POM="$(wget -O- $1)"
MYSQL_DIR=${LIB_DIR}/mysql/mysql-connector-java/main/
MYSQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.mysql)
POSTGRESQL_DIR=${LIB_DIR}/org/postgresql/postgresql/main/
POSTGRESQL_VERSION=$(echo $POM | xmlstarlet sel -t -v //_:version.postgresql)

GITHUB="https://raw.githubusercontent.com/camunda/camunda-bpm-platform/7.6.0"

mkdir -p $MYSQL_DIR
wget -O ${MYSQL_DIR}/mysql-connector-java-${MYSQL_VERSION}.jar "${NEXUS}?r=public&g=mysql&a=mysql-connector-java&v=${MYSQL_VERSION}&p=jar"
wget -P $MYSQL_DIR ${GITHUB}/qa/jboss7-runtime/src/main/common/modules/mysql/mysql-connector-java/main/module.xml
sed -i "s/@version.mysql@/${MYSQL_VERSION}/g" ${MYSQL_DIR}/module.xml

mkdir -p $POSTGRESQL_DIR
wget -O ${POSTGRESQL_DIR}/postgresql-${POSTGRESQL_VERSION}.jar "${NEXUS}?r=public&g=org.postgresql&a=postgresql&v=${POSTGRESQL_VERSION}&p=jar"
wget -P $POSTGRESQL_DIR ${GITHUB}/qa/jboss7-runtime/src/main/common/modules/org/postgresql/postgresql/main/module.xml
sed -i "s/@version.postgresql@/${POSTGRESQL_VERSION}/g" ${POSTGRESQL_DIR}/module.xml
