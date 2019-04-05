#!/bin/bash
set -o errexit

export LOG4J2_VERSION=2.11.2

# logging
echo "  Extension [Log4J2]"

if [ "${APP_SERVER_DIST}" == "tomcat" ]; then
    # install
    # - log4j
    curl -L -s -o /app/lib/log4j-core-2.11.2.jar http://central.maven.org/maven2/org/apache/logging/log4j/log4j-core/${LOG4J2_VERSION}/log4j-core-${LOG4J2_VERSION}.jar
    curl -L -s -o /app/lib/log4j-api-2.11.2.jar http://central.maven.org/maven2/org/apache/logging/log4j/log4j-api/${LOG4J2_VERSION}/log4j-api-${LOG4J2_VERSION}.jar
    # - x over slf4j
    curl -L -s -o /app/lib/jcl-over-slf4j-1.7.26.jar http://central.maven.org/maven2/org/slf4j/jcl-over-slf4j/1.7.26/jcl-over-slf4j-1.7.26.jar
    curl -L -s -o /app/lib/jul-to-slf4j-1.7.26.jar http://central.maven.org/maven2/org/slf4j/jul-to-slf4j/1.7.26/jul-to-slf4j-1.7.26.jar
    # - slf4j implementation
    curl -L -s -o /app/lib/log4j-slf4j-impl-2.11.2.jar http://central.maven.org/maven2/org/apache/logging/log4j/log4j-slf4j-impl/${LOG4J2_VERSION}/log4j-slf4j-impl-${LOG4J2_VERSION}.jar
    # - remove other logging libraries
    rm /app/lib/slf4j-jdk14-*.jar

    # tomcat configuration
    cp -rf $BUILD_PATH/extension.d/log4j/log4j-setenv.sh /app/bin/log4j-setenv.sh

    # copy configuration
    cp -rf $BUILD_PATH/extension.d/log4j/log4j.xml /app/conf/log4j.xml
else
    echo "    Log4J not supported in ${APP_SERVER_DIST} yet."
fi
