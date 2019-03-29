#!/bin/bash
set -o errexit

# Logging
echo "[FlyWay Migration: $DB_MIGRATION]"

# Run Db Migration
if [ "$DB_MIGRATION" = true ]; then
    # determinate the correct db type for flyway
    DB_TYPE=h2

    if [ "$DB_DRIVER" = "COM.ibm.db2.jdbc.app.DB2Driver" ]; then
        DB_TYPE=db2
    fi
    if [ "$DB_DRIVER" = "com.mysql.cj.jdbc.Driver" ]; then
        DB_TYPE=mysql
    fi
    if [ "$DB_DRIVER" = "com.mariadb.jdbc.Driver" ]; then
        DB_TYPE=mariadb
    fi
    if [ "$DB_DRIVER" = "com.microsoft.sqlserver.jdbc.SQLServerDriver" ]; then
        DB_TYPE=mssql
    fi
    if [ "$DB_DRIVER" = "org.postgresql.Driver" ]; then
        DB_TYPE=postgres
    fi
    if [ "$DB_DRIVER" = "oracle.jdbc.driver.OracleDriver" ]; then
        DB_TYPE=oracle
    fi

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
        -locations=filesystem:/sql/$DB_TYPE \
        -cleanDisabled=true \
        migrate
fi
