---
name: community-search-market-signal-source
description: Use when community, forum, SEO, or search results are Product Bet Factory market-signal sources.
---

# Community Search Market Signal Source

## Source Contract

- `source_name`: `community_search`
- `access_required`: optional search/browser tooling
- `allowed_modes`: `search`, `provided_url`, `browser`

## Behavior

Collect repeated pain, workaround, and buyer-language signals from approved
communities or search surfaces. Do not post or interact externally.

If a community forbids automated access, return `BLOCKED_BY_POLICY`.

## Evidence

Preserve:

- query
- source URL
- observed pain language
- workaround description
- buyer or role hint
- timestamp or freshness

Treat community signals as pain evidence, not payment evidence.
