---
name: github-market-signal-source
description: Use when GitHub or open-source repositories are Product Bet Factory market-signal sources.
---

# GitHub Market Signal Source

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
