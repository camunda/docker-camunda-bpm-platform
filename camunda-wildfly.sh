#!/bin/bash -ue

NAMESPACES="-N d=urn:jboss:domain:datasources:4.0"

H2_NAME=org.h2.Driver
H2_MODULE=com.h2database.h2
H2_XA_CLASS=org.h2.jdbcx.JdbcDataSource

MYSQL_NAME=com.mysql.jdbc.Driver
MYSQL_MODULE=mysql.mysql-connector-java
MYSQL_XA_CLASS=com.mysql.jdbc.jdbc2.optional.MysqlXADataSource

POSTGRESQL_NAME=org.postgresql.Driver
POSTGRESQL_MODULE=org.postgresql.postgresql
POSTGRESQL_XA_CLASS=org.postgresql.xa.PGXADataSource

DB_DRIVER=${DB_DRIVER:-${H2_NAME}}
DB_URL=${DB_URL:-jdbc:h2:./camunda-h2-dbs/process-engine;DB_CLOSE_DELAY=-1;MVCC=TRUE;DB_CLOSE_ON_EXIT=FALSE}
DB_USERNAME=${DB_USERNAME:-sa}
DB_PASSWORD=${DB_PASSWORD:-sa}

SKIP_DB_CONFIG=${SKIP_DB_CONFIG:-}

SERVER_CONFIG=/camunda/standalone/configuration/standalone.xml

XML_CONFIG="//d:datasource[@jndi-name='java:jboss/datasources/ProcessEngine']"
XML_DRIVER="${XML_CONFIG}/d:driver"
XML_URL="${XML_CONFIG}/d:connection-url"
XML_USERNAME="${XML_CONFIG}/d:security/d:user-name"
XML_PASSWORD="${XML_CONFIG}/d:security/d:password"

function element_definied {
	return $(test $(xmlstarlet sel $NAMESPACES -T -t -v "count($1)" $SERVER_CONFIG) -gt 0 )
}

function driver_defined {
	return $(element_definied "//d:driver[@module='$1']")
}

function add_driver {
	if ! element_definied "//d:drivers"; then
		xmlstarlet ed -L $NAMESPACES -s //d:datasources -t elem -n drivers -v "" $SERVER_CONFIG
	fi

	xmlstarlet ed -L $NAMESPACES -s //d:drivers -t elem -n driverTMP -v ""\
		-i //driverTMP -t attr -n "name" -v "$1" \
		-i //driverTMP -t attr -n "module" -v "$2" \
		-s //driverTMP -t elem -n xa-datasource-class -v "$3" \
		-r //driverTMP -v driver \
		$SERVER_CONFIG
}

if [ -z "$SKIP_DB_CONFIG" ]; then
	# adding drivers if needed
	if ! driver_defined $H2_MODULE; then
		echo "Adding H2 driver to $SERVER_CONFIG"
		add_driver $H2_NAME $H2_MODULE $H2_XA_CLASS
	else
		echo "H2 driver already defined in $SERVER_CONFIG"
	fi

	if ! driver_defined $MYSQL_MODULE; then
		echo "Adding MySQL driver to $SERVER_CONFIG"
		add_driver $MYSQL_NAME $MYSQL_MODULE $MYSQL_XA_CLASS
	else
		echo "MySQL driver already defined in $SERVER_CONFIG"
	fi

	if ! driver_defined $POSTGRESQL_MODULE; then
		echo "Adding PostgreSQL driver to $SERVER_CONFIG"
		add_driver $POSTGRESQL_NAME $POSTGRESQL_MODULE $POSTGRESQL_XA_CLASS
	else
		echo "PostgreSQL driver already defined in $SERVER_CONFIG"
	fi

	# configure database
	echo "Configuring database"
	xmlstarlet ed -L $NAMESPACES \
		-u "${XML_DRIVER}" -v "${DB_DRIVER}" \
		-u "${XML_URL}" -v "${DB_URL}" \
		-u "${XML_USERNAME}" -v "${DB_USERNAME}" \
		-u "${XML_PASSWORD}" -v "${DB_PASSWORD}" \
		${SERVER_CONFIG}
fi

# Ensure wildfly binds to public interface, preferes IPv4 and runs in the background
export PREPEND_JAVA_OPTS="-Djboss.bind.address=0.0.0.0 -Djboss.bind.address.management=0.0.0.0 -Djava.net.preferIPv4Stack=true"
export LAUNCH_JBOSS_IN_BACKGROUND=TRUE

exec /camunda/bin/standalone.sh
