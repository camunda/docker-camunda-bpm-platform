#!/bin/bash

# openAPI Docs version: This needs to be fixed!!
# OpenAPI docs need to be properly versioned along with the Camunda version
# so we can use the same naming convention to get the right openAPI docs.
# We should be able to use ${VERSION} here, but we can't
API_VERSION="7.15.0-alpha2"
BASE_API="https://app.camunda.com/nexus/repository/camunda-bpm/org/camunda/bpm/camunda-engine-rest-openapi/"
API_URL="${BASE_API}${API_VERSION}/camunda-engine-rest-openapi-${API_VERSION}.jar"
cp -R /tmp/swagger /camunda
cd /camunda/swagger/api
wget ${API_URL} -O tmp.jar
unzip tmp.jar openapi.json
rm tmp.jar
