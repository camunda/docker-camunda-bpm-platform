#!/bin/bash
set -Eeu

trap 'Error on line $LINENO' ERR

# Set Password as Docker Secrets for Swarm-Mode
if [[ -z "${DB_PASSWORD:-}" && -n "${DB_PASSWORD_FILE:-}" && -f "${DB_PASSWORD_FILE:-}" ]]; then
  export DB_PASSWORD="$(< "${DB_PASSWORD_FILE}")"
fi

# For compatibility: when DB_ variables are set, translate them to SPRING_ variables.
# Otherwise [defaults](https://github.com/camunda/camunda-bpm-platform/blob/master/distro/run/assembly/resources/default.yml)
# will be used.

if [[ -z "${SPRING_DATASOURCE_DRIVER_CLASS_NAME:-}" && -n "${DB_DRIVER:-}" ]]; then
  export SPRING_DATASOURCE_DRIVER_CLASS_NAME="${DB_DRIVER}"
fi

if [[ -z "${SPRING_DATASOURCE_PASSWORD:-}" && -n "${DB_PASSWORD:-}" ]]; then
  export SPRING_DATASOURCE_PASSWORD="${DB_PASSWORD}"
fi

if [[ -z "${SPRING_DATASOURCE_USERNAME:-}" && -n "${DB_USERNAME:-}" ]]; then
  export SPRING_DATASOURCE_USERNAME="${DB_USERNAME}"
fi

if [[ -z "${SPRING_DATASOURCE_URL:-}" && -n "${DB_URL:-}" ]]; then
  export SPRING_DATASOURCE_URL="${DB_URL}"
fi

CMD="/camunda/internal/run.sh start"

if [ -n "${WAIT_FOR}" ]; then
  found=0
  for tmp in $(echo "${WAIT_FOR}" | tr ',' '\n'); do
    if wait-for-it.sh "$tmp" -s -t ${WAIT_FOR_TIMEOUT} ; then
      echo "$tmp up"
      found=1
      break
    else
      echo "$tmp down"
    fi
  done
  if [ "$found" -eq 0 ] ; then
    echo "nothing up in WAIT_FOR=$WAIT_FOR"
    exit 1
  fi
fi

# shellcheck disable=SC2086
exec ${CMD} "$@"
