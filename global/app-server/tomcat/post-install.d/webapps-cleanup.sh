#!/bin/bash
set -o errexit

# Remove useless webapps
echo "          [WebApp CleanUp]"
rm -rf /camunda/webapps/camunda-invoice
rm -rf /camunda/webapps/examples
rm -rf /camunda/webapps/docs
rm -rf /camunda/webapps/host-manager
rm -rf /camunda/webapps/ROOT
