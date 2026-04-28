# RAT Plan

- `rat_plan_id`: `rat-YYYYMMDD-slug`
- `product_bet_id`:
- `assumption_id`:
- `created_at`:
- `created_by`:
- `test_type`: `competitor_delta` / `landing_fake_door` / `cold_outreach` / `pricing_intent` / `checkout_intent` / `concierge_demo` / `paid_pilot_ask` / `community_test`

## Purpose

- `assumption_statement`:
- `why_this_test`:
- `expected_decision_impact`:
- `decision_after_result`:

## Payment Proximity

```yaml
payment_proximity:
  level: weak | medium | strong | decisive
  explanation:
```

Rule: if a RAT is not close to payment, it cannot by itself produce `GATE_A_CANDIDATE` unless other strong evidence exists.

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

- `on_success`: `TEST_MORE` / `RESEARCH_REQUIRED` / `GATE_A_CANDIDATE`
- `on_failure`: `KILL` / `REVISE` / `FORK`
- `on_inconclusive`: `REVISE` / `TEST_MORE` / `RESEARCH_REQUIRED`
