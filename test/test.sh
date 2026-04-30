#!/bin/bash -xeu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd ${DIR}

# Detect architecture if PLATFORM is not already provided.
# Must be exported so docker-compose.yml ${PLATFORM} interpolation resolves.
if [ -z "${PLATFORM:-}" ]; then
  case "$(uname -m)" in
    x86_64|amd64)   PLATFORM=amd64 ;;
    aarch64|arm64)  PLATFORM=arm64 ;;
    *) echo "Unsupported architecture: $(uname -m)" >&2; exit 1 ;;
  esac
fi
export PLATFORM

# Ensure compose teardown runs even on failures, preserving the original exit code
trap 'rc=$?; docker compose down -v || true; exit $rc' EXIT

function run_test {
  echo "::group::Test '$2'"
  local rc=0
  "$@" || rc=$?
  echo "::endgroup::"
  return $rc
}

docker compose up --force-recreate -d postgres mysql
run_test ./test-${DISTRO}.sh camunda
run_test ./test-${DISTRO}.sh camunda-mysql
run_test ./test-${DISTRO}.sh camunda-postgres
run_test ./test-${DISTRO}.sh camunda-password-file
run_test ./test-prometheus-jmx-${DISTRO}.sh camunda-prometheus-jmx
run_test ./test-debug.sh camunda-debug
