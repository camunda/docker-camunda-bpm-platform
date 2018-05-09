#!/bin/bash -xeu

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd ${DIR}
docker-compose up -d postgres mysql
./test-${DISTRO}.sh camunda
./test-${DISTRO}.sh camunda-mysql
./test-${DISTRO}.sh camunda-postgres
docker-compose down -v
cd -
