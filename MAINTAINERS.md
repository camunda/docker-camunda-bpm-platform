# Maintainers

This document contains information relevant to maintainers of this repository.

## Release pipelines

### Secret management (Vault migration)

The release credentials for this repository have been migrated to HashiCorp Vault.

**Important:** The legacy GitHub Actions secrets have been intentionally retained and **should not be deleted** for the following reasons:

- There are **6 active release pipelines** covering Camunda Platform 7 versions 7.19 through 7.24.
- **4 of those pipelines** are in extended support and, while not actively releasing at this time, may still produce releases until 2030.
- Migrating all pipelines is out of scope for the current work cycle.
- Retaining the old secrets preserves the ability to **roll back** to the pre-Vault configuration if the current changes are found to break any release pipeline. Given the age and release-driven nature of these pipelines, this cannot be verified immediately.

Until all pipelines are verified and fully migrated, please **do not remove the existing GitHub Actions secrets**.

