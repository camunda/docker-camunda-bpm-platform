#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

# Override the default camunda/ prefix
URL_PREFIX=""

start_container

WAIT=10 poll_log "starting to acquire jobs" "Application run failed" || _exit 1 "Server not started"

_log "Server started"

create_user || echo "Unable to create demo user (maybe it already exists)"

test_login admin || _exit 3 "Unable to login to admin"
test_login cockpit || _exit 4 "Unable to login to cockpit"
test_login tasklist || _exit 5 "Unable to login to tasklist"

_log "Login successfull"

# Disabled encoding test ...
# test_encoding || _exit 6 "Wrong encoding detected"

_exit 0 "Test successfull"
