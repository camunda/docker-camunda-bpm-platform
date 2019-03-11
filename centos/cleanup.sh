#!/bin/bash
set -o errexit

# clean up unused packages
echo "  OS Packages"
yum remove -y unzip tar wget > /dev/null
yum clean all > /dev/null
