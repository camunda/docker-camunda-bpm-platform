#!/bin/bash
set -o errexit

# Logging
echo "[Configuring Tomcat ...]"

# Password Secrets, will overwrite the password env var
if [ -n "${VAR}" ]; then
    $DB_PASSWORD = value=`cat $DB_PASSWORD_FILE`
fi

# BPM Platform
envsubst < /app/conf/bpm-platform.xml > /app/conf/bpm-platform.xml

# Tomcat Configuration
envsubst < /app/conf/tomcat-users.xml > /app/conf/tomcat-users.xml

# Database Connection
envsubst < /app/conf/server.xml > /app/conf/server.xml
