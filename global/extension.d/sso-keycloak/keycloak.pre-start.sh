#!/bin/bash
set -o errexit

export EXT_DIR=/ext/sso-keycloak

# Wait for DB-Connection
if [ -z "$KEYCLOAK_SERVER" ]; then
    echo "[SSO - Keycloak: Disabled]"
else
    echo "[SSO - Keycloak: Enabling]"

    # Libraries
    mv $EXT_DIR/lib/*.jar /app/lib/
    mv $EXT_DIR/camunda-sso-keycloak-authfilter.jar /app/webapps/camunda/WEB-INF/lib/
    mv $EXT_DIR/camunda-sso-keycloak-authprovider.jar /app/webapps/engine-rest/WEB-INF/lib/

    # WebApp Configuration
    cp $EXT_DIR/web-frontend.xml /app/webapps/camunda/WEB-INF/web.xml
    cp $EXT_DIR/web-engine.xml /app/webapps/engine-rest/WEB-INF/web.xml

    # Keycloak Configuration File
    cp $EXT_DIR/keycloak.json /app/conf/keycloak.json
    envsubst < /app/conf/keycloak.json > /app/conf/keycloak.json.tmp
    rm /app/conf/keycloak.json
    mv /app/conf/keycloak.json.tmp /app/conf/keycloak.json
fi
