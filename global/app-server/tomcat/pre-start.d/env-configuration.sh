#!/bin/bash
set -o errexit

# Logging
echo "[Configuring Tomcat ...]"

# Password Secrets, will overwrite the password env var
if [ -n "${DB_PASSWORD_FILE}" ]; then
    $DB_PASSWORD = value=`cat $DB_PASSWORD_FILE`
fi

# BPM Platform
envsubst < /app/conf/bpm-platform.xml > /app/conf/bpm-platform.xml.tmp
rm /app/conf/bpm-platform.xml
mv /app/conf/bpm-platform.xml.tmp /app/conf/bpm-platform.xml

# Tomcat Configuration
envsubst < /app/conf/tomcat-users.xml > /app/conf/tomcat-users.xml.tmp
rm /app/conf/tomcat-users.xml
mv /app/conf/tomcat-users.xml.tmp /app/conf/tomcat-users.xml

# Database Connection
envsubst < /app/conf/server.xml > /app/conf/server.xml.tmp
rm /app/conf/server.xml
mv /app/conf/server.xml.tmp /app/conf/server.xml
