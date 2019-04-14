############################################################
# Arguments
############################################################
ARG BASE_IMAGE=openjdk:13-alpine
ARG OS_FAMILY=alpine
ARG APP_SERVER_DIST=tomcat
ARG DB_DRIVERS=postgres
ARG EE_USERNAME=
ARG EE_PASSWORD=

############################################################
# Base Image
############################################################

# OpenJDK
# See Tags: https://hub.docker.com/_/openjdk?tab=tags
FROM ${BASE_IMAGE}

############################################################
# Configuration
############################################################

# Arguments (inject into ENV command)
ARG BASE_IMAGE
ARG OS_FAMILY
ARG APP_SERVER_DIST
ARG DB_DRIVERS

# Environment
ENV BASE_IMAGE=${BASE_IMAGE} \
	OS_FAMILY=${OS_FAMILY} \
	# App Server Dist
	APP_SERVER_DIST=${APP_SERVER_DIST} \
	# Db Connection
	DB_DRIVERS=${DB_DRIVERS} \
	DB_DRIVER=org.h2.Driver \
	DB_URL=jdbc:h2:/data/camunda-h2-dbs/process-engine;SCHEMA=PUBLIC;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE \
	# DB Username
	DB_USERNAME=sa \
	# DB Password
	DB_PASSWORD=sa \
	# DB Secret File Support
	DB_PASSWORD_FILE= \
	# Connection Pooling
	DB_CONN_INITIAL=15 \
	DB_CONN_MAXACTIVE=40 \
	DB_CONN_MAXIDLE=5 \
	DB_CONN_MINIDLE=5 \
	# Db - Wait
	DB_WAIT= \
	DB_WAIT_TIMEOUT=60 \
	# BPMN Platform Configuration
	EXECUTOR_ACQUISITION_MAX_JOBS=10 \
	EXECUTOR_ACQUISITION_WAIT_TIME_IN_MILLIS=8000 \
	EXECUTOR_ACQUISITION_LOCK_TIME_IN_MILLIS=400000 \
	EXECUTOR_QUEUE_SIZE=3 \
	EXECUTOR_CORE_POOL_SIZE=15 \
	EXECUTOR_MAX_POOL_SIZE=30 \
	EXECUTOR_KEEP_ALIVE_TIME=10 \
	ENGINE_HISTORY=audit \
	ENGINE_HISTORY_CLEANUP_BATCH_WINDOW_START_TIME=00:01 \
	ENGINE_JOB_EXECUTOR_DEPLOYMENT_AWARE=true \
	# Engine Conf - Whitelists
	ENGINE_GENERAL_RESOURCE_WHITELIST_PATTERN=.+ \
	ENGINE_USER_RESOURCE_WHITELIST_PATTERN=.+ \
	ENGINE_GROUP_RESOURCE_WHITELIST_PATTERN=.+ \
	ENGINE_TENANT_RESOURCE_WHITELIST_PATTERN=.+ \
	ENGINE_DEFAULT_SERIALIZATION_FORMAT=application/json \
	# Deployment User (to upload webapps)
	MANAGEMENT_USERNAME=tomcat \
	MANAGEMENT_PASSWORD=tomcat \
	MANAGEMENT_ROLES=manager-script,manager-gui \
	# Automtic Db-Migrations
	DB_MIGRATION=true \
	# Timezone
	TZ=UTC \
	# SSO - Keycloak
	KEYCLOAK_SERVER= \
	KEYCLOAK_REALM=master \
	KEYCLOAK_CLIENT_ID=any \
	KEYCLOAK_CLIENT_SECRET= \
	KEYCLOAK_PUBLIC_CLIENT=true \
	KEYCLOAK_USE_RESOURCE_ROLE_MAPPING=true \
	KEYCLOAK_SSL_REQUIRED=none \
	KEYCLOAK_CONFIDENTIAL_PORT=443 \
	KEYCLOAK_DISABLE_TRUST_MANAGER=false \
	# Camunda Version
	CAMUNDA_VERSION=7.10.0 \
	# Directories
	HOOKDIR_PRESTART=/app/hook.pre-start.d \
	BUILD_PATH=/build

############################################################
# Installation
############################################################

# use root for installation
USER root

# copy files from rootfs to the container
COPY global $BUILD_PATH
COPY ${OS_FAMILY} $BUILD_PATH
COPY *.yml $BUILD_PATH/

# build time only arguments
ARG EE_USERNAME
ARG EE_PASSWORD

# setup
RUN	sh $BUILD_PATH/setup.sh

############################################################
# Execution
############################################################

# Working Directory
WORKDIR /app

# User
USER app

# Command (includes pre-start hook for modifications)
CMD bash -c "run_scripts $HOOKDIR_PRESTART && /app/run.sh"
