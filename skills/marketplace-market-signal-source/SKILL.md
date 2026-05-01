---
name: marketplace-market-signal-source
description: Use when app, plugin, extension, template, or tool marketplaces are Research sources.
---

# Marketplace Market Signal Source

## Purpose

Collect marketplace, app, plugin, extension, or template listing signals when
source terms and access allow it.

## Source Contract

- `source_name`: `marketplace`
- `access_required`: source-specific
- `allowed_modes`: `provided_url`, `search`, `browser`, `extract`

## Behavior

Use only sources allowed by the source registry and terms boundary. If scraping
or automated extraction is not allowed, return `BLOCKED_BY_POLICY`.

## Evidence

Preserve:

- listing URL
- category
- pricing or monetization hints
- review/rating signals when visible
- update recency
- install or usage hints when visible

Marketplace signals are demand and distribution hints, not proof of NoHum's
ability to win the channel.

## Readiness Contract

- `inputs`: cycle context plus the upstream artifact named by this skill.
- `outputs`: the artifact or execution state named by this skill.
- `permission_boundary`: no spend, outreach send, public deploy, payment
  collection, Gate A approval, Gate B approval, or build approval.
- `checks`: required refs are present, blocked states are machine-readable, and
  Gate B recommendation is never treated as Gate B approval or build approval.
