#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

start_container

poll_log "org.apache.catalina.startup.Catalina.start Server startup in" "^SEVERE" || _exit 1 "Server not started"

_log "Server started"

grep_log "Deployment.*camunda-invoice.*finished" || _exit 2 "Process application not deployed"

_log "Process application deployed"

test_login admin || _exit 3 "Unable to login to admin"
test_login cockpit || _exit 4 "Unable to login to cockpit"
test_login tasklist || _exit 5 "Unable to login to tasklist"

_log "Login successfull"

test_encoding || _exit 6 "Wrong encoding detected"

_exit 0 "Test successfull"
