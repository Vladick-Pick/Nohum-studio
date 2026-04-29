---
name: community-search-market-signal-source
description: Use when community, forum, SEO, or search results are Product Bet Factory market-signal sources.
---

# Community Search Market Signal Source

## Purpose

Collect pain, workaround, and buyer-language signals from approved community or
search surfaces without external posting.

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

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  `GATE_A_CANDIDATE` is never treated as Gate B or build approval.
