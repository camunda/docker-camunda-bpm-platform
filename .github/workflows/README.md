# GitHub Actions

There are two separate workflows, which are as follows:

1. [Build, test, and publish CE](./build-test-and-publish-ce.yml) - run on every push and PR to check CE image (public) for all 3 environments (tomcat, wildfly, run). Additionally, it publishes the image on new commits to next and 7.x branches to Docker Hub. `wildfly-ee10` is not part of this automatic matrix yet - this workflow has no version-override mechanism (no `workflow_dispatch` inputs), so it always builds against the Dockerfile's fixed baseline `VERSION`, which predates WildFly 40/41 EE10 support.
2. [Build and test EE](./build-and-test-ee.yml) - only run on PRs coming from within the repository as it requires secrets, which are not part of forks. It builds and tests the EE image for the same 3 environments but does not publish it. For publishing the `ci-cambpm` Jenkins instance is used. It additionally supports `wildfly-ee10`, but only via manual `workflow_dispatch` with an explicit `version`/`snapshot` that actually has WildFly 40/41 EE10 support - `pull_request`/`push` runs skip that combination since they fall back to the same fixed baseline `VERSION`.
