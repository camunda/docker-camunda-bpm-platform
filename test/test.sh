#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

source ${DIR}/test_helper.sh

start_container

poll_log "^INFO: Server startup in" "^SEVERE" || _exit 1 "Server not started"

_log "Server started"

grep_log "INFO: Process Application camunda-invoice successfully deployed" || _exit 2 "Process application not deployed"

_log "Process application deployed"

test_login admin || _exit 3 "Unable to login to admin"
test_login cockpit || _exit 4 "Unable to login to cockpit"
test_login tasklist || _exit 5 "Unable to login to tasklist"

_log "Login successfull"

_exit 0 "Test successfull"
