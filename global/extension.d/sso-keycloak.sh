#!/bin/bash
set -o errexit

export EXTENSION_DIR=$BUILD_PATH/extension.d/sso-keycloak
export KEYCLOAK_VERSION=4.8.3.Final
export KEYCLOAK_SSO_VERSION=0.0.4

# logging
echo "  Extension [SSO - Keycloak]"

if [ "${APP_SERVER_DIST}" == "tomcat" ]; then
    # keycloak libraries
    wget -q https://downloads.jboss.org/keycloak/${KEYCLOAK_VERSION}/adapters/keycloak-oidc/keycloak-tomcat8-adapter-dist-${KEYCLOAK_VERSION}.zip -P /build > /dev/null
    unzip /build/keycloak-tomcat8-adapter-dist-${KEYCLOAK_VERSION}.zip -d $EXTENSION_DIR/lib > /dev/null
    curl -L -s -o $EXTENSION_DIR/lib/keycloak-servlet-filter-adapter-${KEYCLOAK_VERSION}.jar http://central.maven.org/maven2/org/keycloak/keycloak-servlet-filter-adapter/${KEYCLOAK_VERSION}/keycloak-servlet-filter-adapter-${KEYCLOAK_VERSION}.jar
    curl -L -s -o $EXTENSION_DIR/lib/keycloak-servlet-adapter-spi-${KEYCLOAK_VERSION}.jar http://central.maven.org/maven2/org/keycloak/keycloak-servlet-adapter-spi/${KEYCLOAK_VERSION}/keycloak-servlet-adapter-spi-${KEYCLOAK_VERSION}.jar

    # camunda keycloak sso libraries
    curl -L -s -o $EXTENSION_DIR/lib/camunda-sso-common.jar https://dl.bintray.com/philippheuer/maven/com/github/philippheuer/camunda/sso/camunda-sso-common/${KEYCLOAK_SSO_VERSION}/camunda-sso-common-${KEYCLOAK_SSO_VERSION}.jar
    curl -L -s -o $EXTENSION_DIR/lib/camunda-sso-keycloak.jar https://dl.bintray.com/philippheuer/maven/com/github/philippheuer/camunda/sso/camunda-sso-keycloak/${KEYCLOAK_SSO_VERSION}/camunda-sso-keycloak-${KEYCLOAK_SSO_VERSION}.jar
    curl -L -s -o $EXTENSION_DIR/camunda-sso-keycloak-authfilter.jar https://dl.bintray.com/philippheuer/maven/com/github/philippheuer/camunda/sso/camunda-sso-keycloak-authfilter/${KEYCLOAK_SSO_VERSION}/camunda-sso-keycloak-authfilter-${KEYCLOAK_SSO_VERSION}.jar
    curl -L -s -o $EXTENSION_DIR/camunda-sso-keycloak-authprovider.jar https://dl.bintray.com/philippheuer/maven/com/github/philippheuer/camunda/sso/camunda-sso-keycloak-authprovider/${KEYCLOAK_SSO_VERSION}/camunda-sso-keycloak-authprovider-${KEYCLOAK_SSO_VERSION}.jar

    # on-start hooks for configuration
    cp $BUILD_PATH/extension.d/sso-keycloak/*.pre-start.sh $HOOKDIR_PRESTART

    # copy files to use on extension activation
    mkdir -p /ext/sso-keycloak
    cp -R $EXTENSION_DIR/* /ext/sso-keycloak
else
    echo "    Keycloak SSO not supported in ${APP_SERVER_DIST} yet."
fi
