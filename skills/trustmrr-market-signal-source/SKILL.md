---
name: trustmrr-market-signal-source
description: Use when TrustMRR is a configured Product Bet Factory market-signal source.
---

# TrustMRR Market Signal Source

## Source Contract

- `source_name`: `TrustMRR`
- `access_required`: `TRUSTMRR_API_KEY`
- `allowed_modes`: `api`
- `rate_limit`: `20 requests per minute`
- `max_list_limit`: `50`

## Behavior

If `TRUSTMRR_API_KEY` exists, run bounded list and detail calls and normalize
records into `market_signal` artifacts.

If the secret is missing, return:

```yaml
execution_status: MISSING_ACCESS
missing_access:
  - TRUSTMRR_API_KEY
```

## Evidence

Preserve:

- TrustMRR source URL
- raw startup fields
- revenue or MRR fields as reported
- detail endpoint snapshot when called

Do not treat TrustMRR as proof that NoHum can copy the channel, support load,
or retention path.
