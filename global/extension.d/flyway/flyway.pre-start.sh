#!/bin/bash
set -o errexit

# Logging
echo "[FlyWay Migration]"

# Run Db Migration
if [ "$DB_MIGRATION" = true ] ; then
    echo "  Running db migrations for camunda $CAMUNDA_VERSION ..."
    flyway \
        -user=$DB_USERNAME \
        -password=$DB_PASSWORD \
        -url=$DB_URL \
        -table=flyway \
        -connectRetries=3 \
        -baselineVersion=$CAMUNDA_VERSION \
        -baselineOnMigrate=true \
        -baselineDescription=$CAMUNDA_VERSION \
        -locations=filesystem:/sql/h2 \
        -cleanDisabled=true \
        migrate
fi
