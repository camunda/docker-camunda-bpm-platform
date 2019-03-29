#!/bin/bash
set -o errexit

# Wait for DB-Connection
if [ -z "$DB_WAIT" ]; then
    echo "[Not waiting for database]"
else
    echo "[Waiting for Database - $DB_WAIT - Timeout ${DB_WAIT_TIMEOUT:-300}]"
    wait_for_it $DB_WAIT --timeout=${DB_WAIT_TIMEOUT:-300} --strict
fi
