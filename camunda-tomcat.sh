#!/bin/bash
set -Eeu

trap "Error on line $LINENO" ERR

# Use exising tomcat ditribution if present..
CATALINA_HOME="${CATALINA_HOME:-/camunda}"

# Set Password as Docker Secrets for Swarm-Mode
if [[ -z "${DB_PASSWORD:-}" && -n "${DB_PASSWORD_FILE:-}" && -f "${DB_PASSWORD_FILE:-}" ]]; then
  password="$(< "${DB_PASSWORD_FILE}")"
  export DB_PASSWORD="$password"
fi

if [[ -z "${DB_PASSWORD}" ]]; then
  export DB_PASSWORD="sa"
fi

XML_JDBC="//Resource[@name='jdbc/ProcessEngine']"
XML_DRIVER="${XML_JDBC}/@driverClassName"
XML_URL="${XML_JDBC}/@url"
XML_USERNAME="${XML_JDBC}/@username"
XML_PASSWORD="${XML_JDBC}/@password"
XML_MAXTOTAL="${XML_JDBC}/@maxTotal"
XML_MINIDLE="${XML_JDBC}/@minIdle"
XML_MAXIDLE="${XML_JDBC}/@maxIdle"

if [ -z "$SKIP_DB_CONFIG" ]; then
  echo "Configure database"
  xmlstarlet ed -L \
    -u "${XML_DRIVER}" -v "${DB_DRIVER}" \
    -u "${XML_URL}" -v "${DB_URL}" \
    -u "${XML_USERNAME}" -v "${DB_USERNAME}" \
    -u "${XML_PASSWORD}" -v "${DB_PASSWORD}" \
    -u "${XML_MAXTOTAL}" -v "${DB_CONN_MAXACTIVE}" \
    -u "${XML_MINIDLE}" -v "${DB_CONN_MINIDLE}" \
    -u "${XML_MAXIDLE}" -v "${DB_CONN_MAXIDLE}" \
    -u "${XML_JDBC}/@testOnBorrow" -v "${DB_VALIDATE_ON_BORROW}" \
    -i "${XML_JDBC}[not(@testOnBorrow)]" -t attr -n "testOnBorrow" -v "${DB_VALIDATE_ON_BORROW}" \
    -u "${XML_JDBC}/@validationQuery" -v "${DB_VALIDATION_QUERY}" \
    -i "${XML_JDBC}[not(@validationQuery)]" -t attr -n "validationQuery" -v "${DB_VALIDATION_QUERY}" \
    ${CATALINA_HOME}/conf/server.xml
fi


/camunda/scripts/camunda-engine-rest-enable-auth.sh \
    /camunda/webapps/engine-rest/WEB-INF/web.xml \
    /camunda/data/camunda-engine-rest-enable-auth.xsl \
    /camunda/data/camunda-engine-rest-enable-auth.xml
if [ $? -ne 0 ] ; then
    echo "ERROR: /camunda/scripts/camunda-engine-rest-enable-auth.sh"
    exit 1
fi

CMD="${CATALINA_HOME}/bin/catalina.sh"
if [ "${DEBUG}" = "true" ]; then
  echo "Enabling debug mode, JPDA accesible under port 8000"
  export JPDA_ADDRESS="0.0.0.0:8000"
  CMD+=" jpda"
fi

if [ "$JMX_PROMETHEUS" = "true" ] ; then
  echo "Enabling Prometheus JMX Exporter on port ${JMX_PROMETHEUS_PORT}"
  [ ! -f "$JMX_PROMETHEUS_CONF" ] && touch $JMX_PROMETHEUS_CONF
  export CATALINA_OPTS="-javaagent:/camunda/javaagent/jmx_prometheus_javaagent.jar=${JMX_PROMETHEUS_PORT}:${JMX_PROMETHEUS_CONF}"
fi

CMD+=" run"

if [ -n "${WAIT_FOR}" ]; then
  CMD="wait-for-it.sh ${WAIT_FOR} -s -t ${WAIT_FOR_TIMEOUT} -- ${CMD}"
fi

exec ${CMD}
