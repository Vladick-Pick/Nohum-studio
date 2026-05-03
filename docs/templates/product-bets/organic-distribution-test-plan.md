# Organic Distribution Test Plan

Owner: `organic-traffic-strategist`

```yaml
organic_distribution_test_plan:
  id: odtp-YYYYMMDD-slug
  product_bet_revision_ref:
  surface_version_ref:
  owner: organic-traffic-strategist
  created_at:
```

## Plan

```yaml
plan:
  objective:
  primary_channel:
  secondary_channels:
  traffic_attempts_planned:
  timebox_hours:
  max_runtime_days:
  approval_required_actions:
  forbidden_actions:
  expected_signal:
```

## Thresholds

```yaml
thresholds:
  minimum_unique_visitors:
  preferred_unique_visitors:
  minimum_channel_count:
  CTA_click_rate:
    fail_below:
    promising_at:
    strong_at:
  waitlist_submits:
    fail_below:
    promising_at:
    strong_at:
  waitlist_conversion:
    fail_below:
    promising_at:
    strong_at:
```

## Execution States

```yaml
execution_state:
  state: ready | missing_access | approval_required | blocked_by_policy
  blocker:
  approval_owner:
```
