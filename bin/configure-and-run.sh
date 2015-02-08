#!/bin/bash

DB_DRIVER=${DB_DRIVER:-org.h2.Driver}
DB_URL=${DB_URL:-jdbc:h2:./camunda-h2-dbs/process-engine;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE}
DB_USERNAME=${DB_USERNAME:-sa}
DB_PASSWORD=${DB_PASSWORD:-sa}

XML_DRIVER="//Resource[@name='jdbc/ProcessEngine']/@driverClassName"
XML_URL="//Resource[@name='jdbc/ProcessEngine']/@url"
XML_USERNAME="//Resource[@name='jdbc/ProcessEngine']/@username"
XML_PASSWORD="//Resource[@name='jdbc/ProcessEngine']/@password"

echo "Configure database"
xmlstarlet ed -L \
  -u "${XML_DRIVER}" -v "${DB_DRIVER}" \
  -u "${XML_URL}" -v "${DB_URL}" \
  -u "${XML_USERNAME}" -v "${DB_USERNAME}" \
  -u "${XML_PASSWORD}" -v "${DB_PASSWORD}" \
  ${SERVER_CONFIG}

exec /camunda/bin/catalina.sh run
