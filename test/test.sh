#!/bin/bash -xeu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

function run_test {
  echo "::group::Test '$2'"
  "$@"
  echo "::endgroup::"
}

cd ${DIR}
docker-compose up --force-recreate -d postgres mysql
run_test ./test-${DISTRO}.sh camunda
run_test ./test-${DISTRO}.sh camunda-mysql
run_test ./test-${DISTRO}.sh camunda-postgres
run_test ./test-${DISTRO}.sh camunda-password-file
run_test ./test-prometheus-jmx-${DISTRO}.sh camunda-prometheus-jmx
run_test ./test-debug.sh camunda-debug
docker-compose down -v
cd -
