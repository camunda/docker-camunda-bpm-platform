#!/bin/bash
set -o errexit

# Logging
echo "  PostgresDb Drivers"

# Installation
mkdir -p /opt/lib
wget -q http://central.maven.org/maven2/org/postgresql/postgresql/42.2.2/postgresql-42.2.2.jar -P /opt/lib
