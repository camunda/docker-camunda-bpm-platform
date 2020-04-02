#!/bin/bash -eu

SERVICE=${1}

source test_helper.sh

_log "skipping test of JMX Prometheus exporter: not supported for camunda-run"
