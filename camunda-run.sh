#!/bin/bash
# Set Password as Docker Secrets for Swarm-Mode
if [[ -z "${DB_PASSWORD:-}" && -n "${DB_PASSWORD_FILE:-}" && -f "${DB_PASSWORD_FILE:-}" ]]; then
  password="$(< "${DB_PASSWORD_FILE}")"
  export DB_PASSWORD="$password"
fi

if [[ -z "${DB_PASSWORD}" ]]; then
  export DB_PASSWORD="sa"
fi

# Set Password as Docker Secrets for Swarm-Mode
if [[ -z "${DB_PASSWORD:-}" && -n "${DB_PASSWORD_FILE:-}" && -f "${DB_PASSWORD_FILE:-}" ]]; then
  password="$(< "${DB_PASSWORD_FILE}")"
  export DB_PASSWORD="$password"
fi

if [[ -z "${DB_PASSWORD}" ]]; then
  export DB_PASSWORD="sa"
fi

export SPRING_DATASOURCE_DRIVER_CLASS_NAME=${DB_DRIVER:-org.h2.Driver}
export SPRING_DATASOURCE_PASSWORD=${DB_PASSWORD:-}
export SPRING_DATASOURCE_USERNAME=${DB_USERNAME:-}

# remove MVCC=TRUE which is set through the Dockerfile but incompatible with this distro
export SPRING_DATASOURCE_URL=${DB_URL/MVCC=TRUE;/}

CMD="/camunda/start.sh"

if [ -n "${WAIT_FOR}" ]; then
  CMD="wait-for-it.sh ${WAIT_FOR} -s -t ${WAIT_FOR_TIMEOUT} -- ${CMD}"
fi

exec ${CMD}
