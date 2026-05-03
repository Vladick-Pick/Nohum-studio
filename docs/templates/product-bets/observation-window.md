# Observation Window

Owner: `product-bet-measurement-specialist`

```yaml
observation_window:
  id: ow-YYYYMMDD-slug
  product_bet_revision_ref:
  surface_version_ref:
  owner: product-bet-measurement-specialist
  created_at:
```

## Policy

```yaml
policy:
  min_runtime_hours: 72
  max_runtime_days: 14
  min_unique_visitors: 300
  preferred_unique_visitors: 1000
  min_channel_count: 2
  waitlist_submits:
    weak: 10
    promising: 30
    strong: 50
  CTA_click_rate:
    weak: 1%
    promising: 3%
    strong: 5%
  waitlist_conversion:
    weak: 1%
    promising: 3%
    strong: 5%
```

## Current State

```yaml
current_state:
  started_at:
  reviewed_at:
  runtime_hours:
  unique_visitors:
  channel_count:
  CTA_click_rate:
  waitlist_submits:
  waitlist_conversion:
  source_quality:
```

## Readiness

```yaml
readiness:
  enough_time: yes | no
  enough_traffic: yes | no
  enough_channel_diversity: yes | no
  status: waiting_for_time | waiting_for_traffic | ready_for_review | expired
  next_action: wait | run_more_traffic | review_evidence | escalate
  sufficiency_status: pass | retry | escalate
```
