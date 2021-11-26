# GitHub Actions

There are two separate workflows, which are as follows:

1. [Build, test, and publish CE](./build-test-and-publish-ce.yml) - run on every push and PR to check CE image (public) for all 3 environments (tomcat, wildfly, run). Additionally, it publishes the image on new commits to next and 7.x branches to Docker Hub.
2. [Build and test EE](./build-and-test-ee.yml) - only run on PRs coming from within the repository as it requires secrets, which are not part of forks. It builds and tests the EE image for the same 3 environments but does not publish it. For publishing the `ci-cambpm` Jenkins instance is used.
