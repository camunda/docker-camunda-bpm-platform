wait_for_it() {
  if [ -n "${WAIT_FOR}" ]; then
    found=0
    for host_port in $(echo "${WAIT_FOR}" | tr ',' '\n'); do
      if wait-for-it.sh "$host_port" -s -t ${WAIT_FOR_TIMEOUT} ; then
        echo "$host_port available"
        found=1
        break
      else
        echo "$host_port not available"
      fi
    done
    if [ "$found" -eq 0 ] ; then
      echo "No connection available in WAIT_FOR=$WAIT_FOR"
      exit 1
    fi
  fi
}
