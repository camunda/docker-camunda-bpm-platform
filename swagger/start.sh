#!/bin/sh
# Setup for nginx
/usr/sbin/nginx -c /etc/nginx/nginx.conf
cd /camunda/swagger; npm start &