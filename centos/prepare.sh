#!/bin/bash
set -o errexit

# prepare
echo "  OS Packages" &&\
yum update -y > /dev/null
yum install -y ca-certificates bash tzdata unzip gettext tar wget curl tomcat-native > /dev/null

echo "  Symmlinks" &&\
ln -s /usr/sbin/groupadd /usr/sbin/addgroup
