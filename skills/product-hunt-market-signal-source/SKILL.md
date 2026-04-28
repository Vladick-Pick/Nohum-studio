---
name: product-hunt-market-signal-source
description: Use when Product Hunt is a configured Product Bet Factory market-signal source.
---

# Product Hunt Market Signal Source

## Source Contract

- `source_name`: `Product Hunt`
- `access_required`: `PRODUCT_HUNT_TOKEN` for API mode
- `approval_required`: commercial-use approval for automated API collection
- `allowed_modes`: `api`, `url_intake`, `manual_source_url`

## Behavior

Use API mode only when both token and commercial-use approval are documented.
Use URL intake only for explicitly provided Product Hunt URLs.

If token is missing:

```yaml
execution_status: MISSING_ACCESS
missing_access:
  - PRODUCT_HUNT_TOKEN
```

If commercial-use approval is missing:

```yaml
execution_status: APPROVAL_REQUIRED
approval_required:
  - product_hunt_commercial_use
```

## Evidence

Preserve launch URL, product URL, category, tagline, launch date, and observed
attention signals. Treat Product Hunt as attention-backed, not revenue-backed.
