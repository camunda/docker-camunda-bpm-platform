#!/bin/bash
set -Eeu

trap "Error on line $LINENO" ERR


# Set Password as Docker Secrets for Swarm-Mode
if [[ "$DB_PASSWORD" == "" && "$DB_PASSWORD_FILE" != "" && -e $DB_PASSWORD_FILE ]]; then
   password="$(< "${DB_PASSWORD_FILE}")"
   export DB_PASSWORD="$password"
fi

XML_JDBC="//Resource[@name='jdbc/ProcessEngine']"
XML_DRIVER="${XML_JDBC}/@driverClassName"
XML_URL="${XML_JDBC}/@url"
XML_USERNAME="${XML_JDBC}/@username"
XML_PASSWORD="${XML_JDBC}/@password"
XML_MAXACTIVE="${XML_JDBC}/@maxActive"
XML_MINIDLE="${XML_JDBC}/@minIdle"
XML_MAXIDLE="${XML_JDBC}/@maxIdle"

if [ -z "$SKIP_DB_CONFIG" ]; then
  echo "Configure database"
  xmlstarlet ed -L \
    -u "${XML_DRIVER}" -v "${DB_DRIVER}" \
    -u "${XML_URL}" -v "${DB_URL}" \
    -u "${XML_USERNAME}" -v "${DB_USERNAME}" \
    -u "${XML_PASSWORD}" -v "${DB_PASSWORD}" \
    -u "${XML_MAXACTIVE}" -v "${DB_CONN_MAXACTIVE}" \
    -u "${XML_MINIDLE}" -v "${DB_CONN_MINIDLE}" \
    -u "${XML_MAXIDLE}" -v "${DB_CONN_MAXIDLE}" \
    /camunda/conf/server.xml
fi

CMD="/camunda/bin/catalina.sh"
if [ "${DEBUG}" = "true" ]; then
  echo "Enabling debug mode, JPDA accesible under port 8000"
  export JPDA_ADDRESS="0.0.0.0:8000"
  CMD+=" jpda"
fi

CMD+=" run"

if [ -n "${WAIT_FOR}" ]; then
    CMD="wait-for-it.sh ${WAIT_FOR} -s -t ${WAIT_FOR_TIMEOUT} -- ${CMD}"
fi

exec ${CMD}
