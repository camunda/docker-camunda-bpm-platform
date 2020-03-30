#!/bin/bash -eu
RETRIES=12
WAIT=5
URL_PREFIX=camunda/
function _log {
  >&2 echo $@
}

function stop_container {
  docker logs $(container_id)
  docker-compose kill ${SERVICE}
  docker-compose rm --force ${SERVICE}
}

function _exit {
  stop_container
  _log $2
  exit $1
}

function start_container {
  docker-compose up -d --no-recreate ${SERVICE} || _exit 1 "Unable to start compose"
}

function container_id {
  docker-compose ps -q ${SERVICE}
}

function grep_log {
  (docker logs $(container_id) 2>&1 | grep -q "$1")
}

function poll_log {
  local good="$1"
  local bad="$2"

  for i in $(seq $RETRIES); do
    _log "Polling log for the $i. time"

    grep_log "$bad" && return 1
    grep_log "$good" && return 0

    if [ $i -eq $RETRIES ]; then
      return 1
    else
      _log "Waiting for $WAIT seconds"
      sleep $WAIT
    fi
  done
}

function create_user {
  rm -f dumped-headers.txt
  curl --dump-header dumped-headers.txt --fail -s -o/dev/null http://localhost:8080/${URL_PREFIX}app/admin/default/setup/
  curl -XPOST --cookie dumped-headers.txt -H "$(cat dumped-headers.txt | grep X-XSRF-TOKEN | tr -d '\r\n')" -H "Accept: application/json" -H "Content-Type: application/json" --fail -s --data '{"profile":{"id":"demo", "firstName":"Demo", "lastName":"Demo", "email":""}, "credentials":{"password":"demo"}}' -o/dev/null http://localhost:8080/${URL_PREFIX}api/admin/setup/default/user/create
}

function test_login {
  logger "Attempting login to http://localhost:8080/${URL_PREFIX}api/admin/auth/user/default/login/${1}"
  rm -f dumped-headers.txt
  curl --dump-header dumped-headers.txt --fail -s -o/dev/null http://localhost:8080/${URL_PREFIX}app/${1}/default/
  # dumped-headers.txt uses windows line endings, drop them
  curl --cookie dumped-headers.txt -H "$(cat dumped-headers.txt | grep X-XSRF-TOKEN | tr -d '\r\n')" -H "Accept: application/json" --fail -s --data 'username=demo&password=demo' -o/dev/null http://localhost:8080/${URL_PREFIX}api/admin/auth/user/default/login/${1}
}

function test_encoding {
  curl --fail -w "\n" http://localhost:8080/engine-rest/deployment/create -F deployment-name=testEncoding -F testEncoding.bpmn=@testEncoding.bpmn
  curl --fail -w "\n" -H "Content-Type: application/json" -d '{}'  http://localhost:8080/engine-rest/process-definition/key/testEncoding/start
}
