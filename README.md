# Camunda BPM Docker Image

This Camunda BPM community project provides docker images of the latest Camunda BPM platform releases. The images can be used to demonstrate and test the Camunda BPM platform or can be extended with own process applications. It is planned to provide images on the official docker registry for every upcoming release, which includes alpha releases.

## Features

- supports fully automatic db migrations (using flyway)
- process engine fully configurable via ENV variables
- build any image of your choice by providing build args
- self-contained, does not load any db drivers from the internet on startup
- non-privilgied execution to support kubernetes/openshift deployments
- all persistent data in the `/data` directory

## Build Args

*Build a image specifically for your needs*

| Build Argument | Default Value | Description |
| ------ | ------ | ------ |
| BASE_IMAGE | openjdk:13-alpine | the base image used when installing camunda |
| OS_FAMILY | alpine | the os family of the base image, needed to pick the right commands |
| APP_SERVER_DIST | tomcat | application server used to run camunda |
| DB_DRIVERS | postgres | db drivers that should be installed |

## Environment Variables

Configure your process engine using environment variables.

### Database

| Env Variable | Default Value |
| ------ | ------ |
| DB_DRIVER | org.h2.Driver |
| DB_URL | jdbc:h2:/data/camunda-h2-dbs/process-engine;SCHEMA=PUBLIC;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE |
| DB_USERNAME | sa |
| DB_PASSWORD | sa |
| DB_PASSWORD_FILE | |
| DB_CONN_INITIAL | 15 |
| DB_CONN_MAXACTIVE | 40 |
| DB_CONN_MAXIDLE | 5 |
| DB_CONN_MINIDLE | 5 |
| DB_MIGRATION | true |

### Engine

| Env Variable | Default Value |
| ------ | ------ |
| ENGINE_GENERAL_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_USER_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_GROUP_RESOURCE_WHITELIST_PATTERN | .+ |
| ENGINE_TENANT_RESOURCE_WHITELIST_PATTERN | .+ |

### Global

| Env Variable | Default Value |
| ------ | ------ |
| TZ | UTC |

### Tomcat

| Env Variable | Default Value |
| ------ | ------ |
| MANAGEMENT_USERNAME | tomcat |
| MANAGEMENT_PASSWORD | tomcat |
| MANAGEMENT_ROLES | manager-script,manager-gui |
