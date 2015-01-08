#!/bin/bash

DB_DRIVER=${DB_DRIVER:-org.h2.Driver}
DB_URL=${DB_URL:-jdbc:h2:./camunda-h2-dbs/process-engine;MVCC=TRUE;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE}
DB_USERNAME=${DB_USERNAME:-sa}
DB_PASSWORD=${DB_PASSWORD:-sa}

XML_DRIVER="/Server/GlobalNamingResources/Resource[@name='jdbc/ProcessEngine']/@driverClassName"
XML_URL="/Server/GlobalNamingResources/Resource[@name='jdbc/ProcessEngine']/@url"
XML_USERNAME="/Server/GlobalNamingResources/Resource[@name='jdbc/ProcessEngine']/@username"
XML_PASSWORD="/Server/GlobalNamingResources/Resource[@name='jdbc/ProcessEngine']/@password"

XML_ED="xmlstarlet ed -S -L -u"

${XML_ED} "${XML_DRIVER}" -v "${DB_DRIVER}" ${SERVER_CONFIG}
${XML_ED} "${XML_URL}" -v "${DB_URL}" ${SERVER_CONFIG}
${XML_ED} "${XML_USERNAME}" -v "${DB_USERNAME}" ${SERVER_CONFIG}
${XML_ED} "${XML_PASSWORD}" -v "${DB_PASSWORD}" ${SERVER_CONFIG}

exec /camunda/bin/catalina.sh run
