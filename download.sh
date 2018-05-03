#!/bin/sh

NEXUS="https://app.camunda.com/nexus/service/local/artifact/maven/redirect"

# Configure username and password for EE download (ignored for CE)
echo "machine app.camunda.com login ${USER} password ${PASSWORD}" >> ~/.netrc

# Determine nexus URL parameters
if [ ${EE} = "true" ]; then
    echo "Downloading Camunda ${VERSION} Enterprise Edition for ${DISTRO}"
    REPO="camunda-bpm-ee"
    ARTIFACT="camunda-bpm-ee-${DISTRO}"
	ARTIFACT_VERSION="${VERSION}-ee"
else
    echo "Downloading Camunda ${VERSION} Comunity Edition"
    REPO="camunda-bpm"
    ARTIFACT="camunda-bpm-${DISTRO}"
    ARTIFACT_VERSION="${VERSION}"
fi

# Determine if SNAPSHOT repo and version should be used
if [ ${SNAPSHOT} = "true" ]; then
	REPO="${REPO}-snapshots"
	ARTIFACT_VERSION="${VERSION}-SNAPSHOT"
fi

# Determine artifact group, all wildfly version have the same group
case ${DISTRO} in
    wildfly*) GROUP="wildfly" ;;
    *) GROUP="${DISTRO}" ;;
esac
ARTIFACT_GROUP="org.camunda.bpm.${GROUP}"

# Download distro from nexus
wget --progress=bar:force:noscroll -O /tmp/camunda.tar.gz "${NEXUS}?r=${REPO}&g=${ARTIFACT_GROUP}&a=${ARTIFACT}&v=${ARTIFACT_VERSION}&p=tar.gz"

# Unpack distro to /camunda directory
mkdir -p /camunda
tar xzf /tmp/camunda.tar.gz -C /camunda server --strip 2

cp /tmp/camunda-${GROUP}.sh /camunda/camunda.sh


# TODO: download and register database drivers
wget --progress=bar:force:noscroll -O /tmp/pom.xml "${NEXUS}?r=${REPO}&g=org.camunda.bpm&a=camunda-database-settings&v=${ARTIFACT_VERSION}&p=pom"
MYSQL_VERSION=$(xmlstarlet sel -t -v //_:version.mysql /tmp/pom.xml)
POSTGRESQL_VERSION=$(xmlstarlet sel -t -v //_:version.postgresql /tmp/pom.xml)

wget -O /tmp/mysql-connector-java-${MYSQL_VERSION}.jar "${NEXUS}?r=public&g=mysql&a=mysql-connector-java&v=${MYSQL_VERSION}&p=jar"
wget -O /tmp/postgresql-${POSTGRESQL_VERSION}.jar "${NEXUS}?r=public&g=org.postgresql&a=postgresql&v=${POSTGRESQL_VERSION}&p=jar"

case ${DISTRO} in
    wildfly*)
        cp /tmp/mysql-connector-java-${MYSQL_VERSION}.jar /tmp/mysql/mysql-connector-java/main/
        sed -i "s/@version.mysql@/${MYSQL_VERSION}/g" /tmp/mysql/mysql-connector-java/main/module.xml
        cp /tmp/postgresql-${POSTGRESQL_VERSION}.jar /tmp/org/postgresql/postgresql/main/
        sed -i "s/@version.postgresql@/${POSTGRESQL_VERSION}/g" /tmp/org/postgresql/postgresql/main/module.xml

        cp -R /tmp/mysql /camunda/modules/
        cp -R /tmp/org/postgresql /camunda/modules/org/
        ;;
    *)
        cp /tmp/mysql-connector-java-${MYSQL_VERSION}.jar /camunda/lib
        cp /tmp/postgresql-${POSTGRESQL_VERSION}.jar /camunda/lib
        ;;
esac

