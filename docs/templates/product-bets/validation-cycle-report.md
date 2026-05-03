# Validation Cycle Report

Owner: `evidence-router`

```yaml
validation_cycle_report:
  id: vcr-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  surface_version_ref:
  owner: evidence-router
  created_at:
```

## Cycle Inputs

```yaml
inputs:
  gate_a_decision_ref:
  selected_test_revision_ref:
  landing_design_ref:
  organic_distribution_test_plan_ref:
  measurement_plan_ref:
  observation_window_ref:
```

## Observed Behavior

```yaml
observed_behavior:
  unique_visitors:
  channel_count:
  CTA_clicks:
  CTA_click_rate:
  waitlist_submits:
  waitlist_conversion:
  pricing_clicks:
  source_quality:
  qualitative_feedback:
```

## Interpretation

```yaml
interpretation:
  traffic_viability: pass | warn | fail | inconclusive
  positioning_clarity: pass | warn | fail | inconclusive
  waitlist_intent: pass | warn | fail | inconclusive
  strongest_learning:
  weakest_learning:
  misleading_signals:
```

## Decision

```yaml
decision:
  action: build | revise_offer | revise_landing | revise_channel | open_fork | test_more | kill
  target_owner:
  reason_codes:
  evidence_event_refs:
  next_artifact:
```
