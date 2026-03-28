# v1.5 Import Upgrade

This migration upgrades the previous compact package into a detailed-core org package.

## What Changed

- Product Launch is now separate from Marketing, Engineering, and Support.
- `launch-lead` is preserved as exact-parity core but narrowed to Product Launch ownership.
- new top-level managers were added: `cmo` and `vp-engineering`.
- `growth-lead` moved under `cmo`.
- `code-reviewer` and `release-engineer` moved under `vp-engineering`.
- the compact `delivery-engineer` role was removed from the package in favor of a full Engineering team.
- local skills are now vendored directly from `pm-skills`, `superpowers`, and `gstack`.

## Migration Safety Rules

- replace only the exact-parity core slugs in bulk
- import all new roles as paused
- validate reporting lines before activating any new manager or specialist
- do not rely on `teams/` auto-materializing into live runtime behavior
