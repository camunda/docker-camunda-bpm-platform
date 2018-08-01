#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

start_container

poll_log "Listening for transport dt_socket at address: 8000" "ERROR" || _exit 1 "JPDA not started"

nc -z localhost 8000 || _exit 2 "JPDA port not open"

_exit 0 "Test successfull"
