# v1.5 Import Upgrade

This migration upgrades the previous compact package into a detailed-core org package.

## What Changed

- Product Launch is now separate from Marketing, Engineering, and Support.
- `launch-lead` is preserved as exact-parity core but narrowed to Product Launch ownership.
- new top-level managers were added: `cmo` and `vp-engineering`.
- `growth-lead` moved under `cmo`.
- `code-reviewer` and `release-engineer` moved under `vp-engineering`.
- the compact `delivery-engineer` role was removed from the package in favor of a full Engineering team.
- local skills are now vendored directly from `pm-skills` and `superpowers`, plus NoHum-adapted `gstack`-derived engineering skills.

## Migration Safety Rules

- replace only the exact-parity core slugs in bulk
- preview every non-core slug individually before import
- if a non-core slug already exists live, reconcile or update it in place instead of duplicating it
- only absent non-core roles should import as new and remain paused
- validate reporting lines before activating any new manager or specialist
- do not rely on `teams/` auto-materializing into live runtime behavior
