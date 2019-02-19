#!/bin/sh -ex

# Determine nexus URL parameters
if [ ${EE} = "true" ]; then
    echo "Downloading Camunda ${VERSION} Enterprise Edition for ${DISTRO}"
    REPO="camunda-bpm-ee"
    NEXUS_GROUP="private"
    ARTIFACT="camunda-bpm-ee-${DISTRO}"
    ARTIFACT_VERSION="${VERSION}-ee"
else
    echo "Downloading Camunda ${VERSION} Community Edition for ${DISTRO}"
    REPO="camunda-bpm"
    NEXUS_GROUP="public"
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
mvn dependency:get -B --global-settings /tmp/settings.xml \
    -DremoteRepositories="camunda-nexus::::https://app.camunda.com/nexus/content/repositories/${REPO}" \
    -DgroupId="${ARTIFACT_GROUP}" -DartifactId="${ARTIFACT}" \
    -Dversion="${ARTIFACT_VERSION}" -Dpackaging="tar.gz" -Dtransitive=false
cambpm_distro_file=$(find /m2-repository -name "${ARTIFACT}-${ARTIFACT_VERSION}.tar.gz" -print | head -n 1)

# Unpack distro to /camunda directory
mkdir -p /camunda
tar xzf "$cambpm_distro_file" -C /camunda server --strip 2

cp /tmp/camunda-${GROUP}.sh /camunda/camunda.sh


# download and register database drivers
mvn dependency:get -B --global-settings /tmp/settings.xml \
    -DremoteRepositories="camunda-nexus::::https://app.camunda.com/nexus/content/groups/${NEXUS_GROUP}" \
    -DgroupId="org.camunda.bpm" -DartifactId="camunda-database-settings" \
    -Dversion="${ARTIFACT_VERSION}" -Dpackaging="pom" -Dtransitive=false
cambpmdbsettings_pom_file=$(find /m2-repository -name "camunda-database-settings-${ARTIFACT_VERSION}.pom" -print | head -n 1)
MYSQL_VERSION=$(xmlstarlet sel -t -v //_:version.mysql $cambpmdbsettings_pom_file)
POSTGRESQL_VERSION=$(xmlstarlet sel -t -v //_:version.postgresql $cambpmdbsettings_pom_file)

mvn dependency:copy -B \
    -Dartifact="mysql:mysql-connector-java:${MYSQL_VERSION}:jar" \
    -DoutputDirectory=/tmp/
mvn dependency:copy -B \
    -Dartifact="org.postgresql:postgresql:${POSTGRESQL_VERSION}:jar" \
    -DoutputDirectory=/tmp/

case ${DISTRO} in
    wildfly*)
        cat <<-EOF > batch.cli
batch
embed-server --std-out=echo

module add --name=mysql.mysql-connector-java --slot=main --resources=/tmp/mysql-connector-java-${MYSQL_VERSION}.jar --dependencies=javax.api,javax.transaction.api
/subsystem=datasources/jdbc-driver=mysql:add(driver-name="mysql",driver-module-name="mysql.mysql-connector-java",driver-xa-datasource-class-name=com.mysql.jdbc.jdbc2.optional.MysqlXADataSource)

module add --name=org.postgresql.postgresql --slot=main --resources=/tmp/postgresql-${POSTGRESQL_VERSION}.jar --dependencies=javax.api,javax.transaction.api
/subsystem=datasources/jdbc-driver=postgresql:add(driver-name="postgresql",driver-module-name="org.postgresql.postgresql",driver-xa-datasource-class-name=org.postgresql.xa.PGXADataSource)

run-batch
EOF
        /camunda/bin/jboss-cli.sh --file=batch.cli
        rm -rf /camunda/standalone/configuration/standalone_xml_history/current/*
        ;;
    *)
        cp /tmp/mysql-connector-java-${MYSQL_VERSION}.jar /camunda/lib
        cp /tmp/postgresql-${POSTGRESQL_VERSION}.jar /camunda/lib
        # remove default CATALINA_OPTS from environment settings
        echo "" > /camunda/bin/setenv.sh
        ;;
esac
