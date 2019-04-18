# Camunda BPM Docker Image

This Camunda BPM community project provides docker images of the latest Camunda BPM platform releases. The images can be used to demonstrate and test the Camunda BPM platform or can be extended with own process applications. It is planned to provide images on the official docker registry for every upcoming release, which includes alpha releases.

## Features

- supports fully automatic db migrations (using flyway)
- process engine fully configurable via ENV variables
- build any image of your choice by providing build args
- self-contained, does not load any db drivers from the internet on startup
- non-privilgied execution to support kubernetes/openshift deployments
- all persistent data in the `/data` directory
- wait_for_it to wait for the db to be ready before starting

## Build Args

Build a camunda image specifically for your needs:

| Build Argument | Default Value | Description |
| ------ | ------ | ------ |
| BASE_IMAGE | openjdk:13-alpine | the base image used when installing camunda |
| OS_FAMILY | alpine | the os family of the base image, needed to pick the right commands |
| APP_SERVER_DIST | tomcat | application server used to run camunda |
| DB_DRIVERS | postgres | db drivers that should be installed |
| EE_USERNAME | | enterprise edition username (optional for ee)|
| EE_PASSWORD | | enterprise edition password (optional for ee)|

## Environment Variables

Configure your camunda instance and extensions witih the following environment variables, every value is optional - the image can be run without specifying anything with the default configuration.

### Global

| Env Variable | Default Value |
| ------ | ------ |
| TZ | UTC |

### Database

| Env Variable | Default Value | Description |
| ------ | ------ | ------ |
| DB_DRIVER | org.h2.Driver | db driver |
| DB_URL | jdbc:h2:/data/camunda-h2-dbs/process-engine;SCHEMA=PUBLIC;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE | db jdbc url |
| DB_USERNAME | sa | db username|
| DB_PASSWORD | sa | db password |
| DB_PASSWORD_FILE | | password file, takes precedence over DB_PASSWORD - useful for docker/kubernetes secrets |
| DB_CONN_INITIAL | 15 | initial connection pool size|
| DB_CONN_MAXACTIVE | 40 | connection pool max active |
| DB_CONN_MAXIDLE | 5 | connection pool max idle |
| DB_CONN_MINIDLE | 5 | connection pool min idle |

### Engine

| Env Variable | Default Value |
| ------ | ------ |
| ENGINE_GENERAL_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_USER_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_GROUP_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_TENANT_RESOURCE_WHITELIST_PATTERN | .+ |

### Runtime: Tomcat

| Env Variable | Default Value |
| ------ | ------ |
| MANAGEMENT_USERNAME | tomcat |
| MANAGEMENT_PASSWORD | tomcat |
| MANAGEMENT_ROLES | manager-script,manager-gui |

### Extension: Db Migration (FlyWay)

| Env Variable | Default Value | Description |
| ------ | ------ | ------ |
| DB_MIGRATION | true | run automatic db migrations for upgrades |

### Extension: Wait

| Env Variable | Default Value | Description |
| ------ | ------ | ------ |
| DB_WAIT | | wait for a host:port to be available over TCP before starting |
| DB_WAIT_TIMEOUT | 60 | how long to wait for the service to be avaiable - defaults to 60 seconds |

### Extension: Keycloak SSO

The Keycloak SSO Module will be enabled on startup if `KEYCLOAK_SERVER` is set.

| Env Variable | Default Value | Description |
| ------ | ------ | ------ |
| KEYCLOAK_SERVER | | keycloak sso server |
| KEYCLOAK_REALM | master | keycloak realm |
| KEYCLOAK_CLIENT_ID | app-camunda | client id |
| KEYCLOAK_PUBLIC_CLIENT | true | public client? |
| KEYCLOAK_CLIENT_SECRET | any | client secret (for confidential clients) |
| KEYCLOAK_USE_RESOURCE_ROLE_MAPPING | true | should use resource roles |
| KEYCLOAK_SSL_REQUIRED | none | require ssl (should prob. be always in most cases) |
| KEYCLOAK_CONFIDENTIAL_PORT | 443 | port for confidential clients |
| KEYCLOAK_DISABLE_TRUST_MANAGER | false | set to true to accept any ssl cert (don't do this) |
