# GitHub Actions

7.13 is a special exception as only the ee workflow exists.
See the following ticket: [INFRA-2878](https://jira.camunda.com/browse/INFRA-2878)
Essentially the mysql driver was updated but it's only compatible with >=7.13.10 and as CE versions are not patched, the builds would never work.

[Build and test EE](./build-and-test-ee.yml) - will fail on public PRs. It builds and tests the EE image for 3 environments but does not publish it. For publishing the `ci-cambpm` Jenkins instance is used.
