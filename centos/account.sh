#!/bin/bash
set -o errexit

# Group
groupadd -r app -g 1000

# User
useradd -u 1000 -r -g app -m -d /app -s /bin/bash app
