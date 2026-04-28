---
name: marketplace-market-signal-source
description: Use when app, plugin, extension, template, or tool marketplaces are Product Bet Factory sources.
---

# Marketplace Market Signal Source

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
