#!/bin/bash
set -o errexit

# Link db drivers
echo "          [Database Drivers]"
ln -s /opt/lib/* /app/lib/
