#!/bin/bash -xeu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd ${DIR}
docker-compose up --force-recreate -d postgres mysql
./test-${DISTRO}.sh camunda
./test-${DISTRO}.sh camunda-mysql
./test-${DISTRO}.sh camunda-postgres
./test-${DISTRO}.sh camunda-password-file
./test-prometheus-jmx-${DISTRO}.sh camunda-prometheus-jmx
./test-debug.sh camunda-debug
docker-compose down -v
cd -
