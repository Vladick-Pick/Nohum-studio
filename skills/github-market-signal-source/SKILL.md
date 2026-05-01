---
name: github-market-signal-source
description: Use when GitHub or open-source repositories are Research market-signal sources.
---

# GitHub Market Signal Source

## Purpose

Collect developer-interest and product-pattern signals from GitHub without
treating stars or forks as payment proof.

## Source Contract

- `source_name`: `GitHub`
- `access_required`: optional `GITHUB_TOKEN`
- `allowed_modes`: `api`, `public_search`, `provided_url`

## Behavior

Use public search when token is absent and rate limits allow it. Use token-backed
API only when `GITHUB_TOKEN` is configured.

If rate limits prevent useful collection, return `MISSING_ACCESS` with
`GITHUB_TOKEN` as the missing access.

## Evidence

Preserve:

- repo URL
- description
- license if visible
- stars/forks/issues when available
- productizable workflow hint

GitHub evidence is a developer-interest or product-pattern signal. It is not
payment proof.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
