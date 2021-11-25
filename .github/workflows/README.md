# GitHub Actions

The previous Travis setup of:

```
env:
  - DISTRO=tomcat EE=false
  - DISTRO=wildfly EE=false
  - DISTRO=run EE=false

jobs:
  include:  # do not run EE builds for forks (they don't have access to EE credentials)
    - if: head_repo = repo
      env: DISTRO=tomcat EE=true
    - if: head_repo = repo
      env: DISTRO=wildfly EE=true
    - if: head_repo = repo
      env: DISTRO=run EE=true

script:
  - ./pipeline.sh # contained release.sh that checked everytime whether certain conditions apply
```

Is split into 2 separate actions:
1. [Build, test, and release CE](./build-test-and-deploy-ce.yml) <-- run on every push and PR to check CE image (public), also releases the image on push to next and 7.x branches.
It's the same as the previous definition of the 3 envs in Travis.
2. [Build and test EE](./build-and-test-ee.yml) <-- only run on PRs coming from within the repository (requires secrets).
Represents the job include part of Travis to not run on forks due to requirement of EE credentials.
