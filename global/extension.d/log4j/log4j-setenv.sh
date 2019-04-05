#!/bin/bash

# log4j config file
export CATALINA_OPTS="$CATALINA_OPTS -Dlog4j.configurationFile=file:/app/conf/log4j.xml"
