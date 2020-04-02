#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

test "${DISTRO}" = "run" && _log "skipping test of DEBUG socket: not supported for camunda-run" && exit 0

start_container

poll_log "Listening for transport dt_socket at address: 8000" "ERROR" || _exit 1 "JPDA not started"

timeout 1 bash -c 'cat < /dev/null > /dev/tcp/localhost/8000' || _exit 2 "JPDA port not open"

_exit 0 "Test successfull"
