#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

start_container

poll_log "org.apache.catalina.startup.Catalina.start Server startup in" "^SEVERE" || _exit 1 "Server not started"

_log "Server started"

grep_log "Enabling Prometheus JMX Exporter on port" || _exit 2 "Prometheus JMX Exporter not enabled"

curl -s http://localhost:9404/metrics | grep -q "jvm_info" || _exit 3 "Prometheus metrics not available"

_exit 0 "Test successfull"
