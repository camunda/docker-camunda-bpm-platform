RETRIES=12
WAIT=5

function _log {
  >&2 echo $@
}

function stop_container {
  docker-compose kill
  docker-compose rm --force
}

function _exit {
  stop_container
  _log $2
  exit $1
}

function start_container {
  docker-compose up -d db
  sleep 10
  docker-compose up -d --no-recreate camunda || _exit 1 "Unable to start compose"
}

function container_id {
  docker-compose ps -q camunda
}

function grep_log {
  (docker logs $(container_id) 2>&1 | grep "$1")
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

function test_login {
  curl --fail -s --data 'username=demo&password=demo' -D- -o/dev/null http://localhost:8080/camunda/api/admin/auth/user/default/login/${1}
}

function test_encoding {
  curl --fail -w "\n" http://localhost:8080/engine-rest/deployment/create -F deployment-name=testEncoding -F testEncoding.bpmn=@../resources/testEncoding.bpmn
  curl --fail -w "\n" -H "Content-Type: application/json" -d '{}'  http://localhost:8080/engine-rest/process-definition/key/testEncoding/start
}
