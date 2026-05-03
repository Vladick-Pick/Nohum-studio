# Validation Risk Test Plan

- `test_plan_id`: `rt-YYYYMMDD-slug`
- `product_bet_id`:
- `venture_id`:
- `red_hypothesis_id`:
- `created_at`:
- `created_by`:
- `test_type`: `internal_autoreason` / `synthetic_audience` /
  `competitor_delta` / `landing_fake_door` / `pricing_intent` /
  `checkout_intent` / `community_test` / `directory_test` /
  `concierge_demo` / `paid_pilot_ask` / `build_spike`

## Purpose

- `hypothesis_statement`:
- `why_this_test`:
- `expected_decision_impact`:
- `decision_after_result`:

## Payment Proximity

```yaml
payment_proximity:
  level: weak | medium | strong | decisive
  explanation:
```

Rule: internal or weak evidence cannot by itself justify Gate B build approval.

## Thresholds

- `success_threshold`:
- `failure_threshold`:
- `inconclusive_threshold`:
- `minimum_sample_or_attempts`:
- `max_cost_cents`:
- `max_time_hours`:

## Actions

- `allowed_external_actions`:
- `forbidden_external_actions`:
- `requires_budget_envelope`: `yes` / `no`
- `requires_human_or_board_review`: `yes` / `no`
- `source_or_channel_risks`:

## Measurement

- `primary_metric`:
- `secondary_metrics`:
- `tracking_method`:
- `evidence_event_expected`: `yes` / `no`

## Result Routing

- `on_success`: `gate_b_ready` / `test_more` / `revise`
- `on_failure`: `kill` / `revise` / `fork`
- `on_inconclusive`: `revise` / `test_more`
