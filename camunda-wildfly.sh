#!/bin/bash -eu

DB_DRIVER=${DB_DRIVER:-org.h2.Driver}

function modify_datasource {
	cat <<-EOF > batch.cli
batch
embed-server
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=user-name, value=\${env.DB_USERNAME})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=password, value=\${env.DB_PASSWORD})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=connection-url, value=\${env.DB_URL})
/subsystem=datasources/data-source=ProcessEngine: write-attribute(name=driver-name, value=${DB_DRIVER})
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

# Ensure wildfly binds to public interface, preferes IPv4 and runs in the background
export PREPEND_JAVA_OPTS="-Djboss.bind.address=0.0.0.0 -Djboss.bind.address.management=0.0.0.0"
export LAUNCH_JBOSS_IN_BACKGROUND=TRUE

exec /camunda/bin/standalone.sh
