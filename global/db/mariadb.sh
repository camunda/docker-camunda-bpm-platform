#!/bin/bash
set -o errexit

# Logging
echo "  MariaDB Drivers"

# Installation
mkdir -p /opt/lib
wget -q http://downloads.mariadb.com/Connectors/java/connector-java-2.2.0/mariadb-java-client-2.2.0.jar -P /opt/lib
