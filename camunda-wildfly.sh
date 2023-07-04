#!/bin/bash
set -Eeu

trap 'Error on line $LINENO' ERR

source $(dirname "$0")/camunda-lib.sh

# Set default values for DB_ variables
# Set Password as Docker Secrets for Swarm-Mode
if [[ -z "${DB_PASSWORD:-}" && -n "${DB_PASSWORD_FILE:-}" && -f "${DB_PASSWORD_FILE:-}" ]]; then
  export DB_PASSWORD="$(< "${DB_PASSWORD_FILE}")"
fi

DB_DRIVER=${DB_DRIVER:-org.h2.Driver}
DB_PASSWORD=${DB_PASSWORD:-sa}
DB_URL=${DB_URL:-jdbc:h2:./camunda-h2-dbs/process-engine;TRACE_LEVEL_FILE=0;DB_CLOSE_ON_EXIT=FALSE}
DB_USERNAME=${DB_USERNAME:-sa}

function modify_datasource {
  cat <<-EOF > batch.cli
batch
embed-server
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=user-name, value=\${env.DB_USERNAME})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=password, value=\${env.DB_PASSWORD})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=connection-url, value=\${env.DB_URL})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=driver-name, value=${DB_DRIVER})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=max-pool-size, value=\${env.DB_CONN_MAXACTIVE})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=min-pool-size, value=\${env.DB_CONN_MINIDLE})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=validate-on-match, value=\${env.DB_VALIDATE_ON_BORROW})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=check-valid-connection-sql, value=\${env.DB_VALIDATION_QUERY})
run-batch
stop-embedded-server
EOF
  /camunda/bin/jboss-cli.sh --file=batch.cli
  rm -rf /camunda/standalone/configuration/standalone_xml_history/current/* batch.cli
}

# support legacy DB_DRVIER short names
case ${DB_DRIVER} in
  *h2* )
    DB_DRIVER=h2
  ;;
  *mysql* )
    DB_DRIVER=mysql
  ;;
  *postgresql* )
    DB_DRIVER=postgresql
  ;;
  * ) echo "Unsupported DB_DRIVER ${DB_DRIVER}"; exit 1;
  ;;
esac

if [ -z "$SKIP_DB_CONFIG" ]; then
  modify_datasource
fi

if [ "$JMX_PROMETHEUS" = "true" ] ; then
  # See https://issues.jboss.org/browse/LOGMGR-218
  export JBOSS_MODULES_SYSTEM_PKGS=${JBOSS_MODULES_SYSTEM_PKGS:-"org.jboss.byteman,org.jboss.logmanager"}
else
  export JBOSS_MODULES_SYSTEM_PKGS=${JBOSS_MODULES_SYSTEM_PKGS:-"org.jboss.byteman"}
fi

# Ensure wildfly binds to public interface, preferes IPv4 and runs in the background
export PREPEND_JAVA_OPTS="-Djboss.bind.address=0.0.0.0 -Djboss.bind.address.management=0.0.0.0 -Djava.net.preferIPv4Stack=true -Djava.awt.headless=true -Djboss.modules.system.pkgs=${JBOSS_MODULES_SYSTEM_PKGS}"
export LAUNCH_JBOSS_IN_BACKGROUND=TRUE

CMD="/camunda/bin/standalone.sh"

if [ "${DEBUG}" = "true" ]; then
  echo "Enabling debug mode, JPDA accesible under port 8000"
  CMD+=" --debug *:8000"
fi

if [ "$JMX_PROMETHEUS" = "true" ] ; then
  echo "Enabling Prometheus JMX Exporter on port ${JMX_PROMETHEUS_PORT}"
  [ ! -f "$JMX_PROMETHEUS_CONF" ] && touch "$JMX_PROMETHEUS_CONF"
  # See https://github.com/prometheus/jmx_exporter/issues/344
  LOG_MANAGER_PATH=$(find /camunda/modules -name "jboss-logmanager*.jar")
  COMMON_PATH=$(find /camunda/modules -name "wildfly-common*.jar")
  export PREPEND_JAVA_OPTS="${PREPEND_JAVA_OPTS} -Dsun.util.logging.disableCallerCheck=true -Djava.util.logging.manager=org.jboss.logmanager.LogManager -Xbootclasspath/a:$LOG_MANAGER_PATH:$COMMON_PATH"
  export PREPEND_JAVA_OPTS="${PREPEND_JAVA_OPTS} -javaagent:/camunda/javaagent/jmx_prometheus_javaagent.jar=${JMX_PROMETHEUS_PORT}:${JMX_PROMETHEUS_CONF}"
fi

wait_for_it

# shellcheck disable=SC2086
exec ${CMD}
