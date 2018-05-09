#!/bin/bash -xeu

cd test/h2
../test-${DISTRO}.sh
cd -

cd test/postgresql
../test-${DISTRO}.sh
cd -

cd test/mysql
../test-${DISTRO}.sh
cd -
