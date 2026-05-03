# Gate B Recommendation

Owner: `evidence-router`

```yaml
gate_b_recommendation:
  gate_b_recommendation_id: gbr-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  venture_id:
  created_at:
  owner: evidence-router
```

## Recommendation

```yaml
recommendation:
  action: build | revise | fork | test_more | kill
  reason_codes:
    - positioning_clear
    - positioning_weak
    - USP_clear
    - USP_weak
    - payment_intent_strong
    - payment_intent_weak
    - channel_signal_strong
    - channel_signal_weak
    - organic_channel_missing
    - traffic_insufficient
    - waitlist_intent_strong
    - waitlist_intent_weak
    - observation_window_not_ready
    - activation_unclear
    - build_too_complex
    - support_load_risk
    - price_not_plausible
    - evidence_contradicted
    - stack_fit_risk
    - measurement_not_ready
  rationale:
  evidence_refs:
  blocked_execution_states:
```

## Required Artifact Checklist

```yaml
required_artifact_checklist:
  frozen_idea_card_linked: pass | fail
  gate_a_decision_linked: pass | fail
  product_bet_revision_linked: pass | fail
  competitor_deep_dive_complete: pass | fail
  product_shape_concrete: pass | fail
  ICP_buyer_user_payer_specific: pass | fail
  offer_and_USP_clear: pass | fail
  organic_free_traffic_path_exists: pass | fail
  selected_test_revision_exists: pass | fail
  landing_waitlist_surface_ready: pass | fail
  financial_model_complete: pass | fail
  break_even_modeled: pass | fail
  path_to_5000_mrr_modeled: pass | fail
  path_to_5000_net_contribution_modeled: pass | fail
  red_hypotheses_mapped: pass | fail
  top_risks_tested_or_accepted: pass | fail
  test_surfaces_ready_or_tested: pass | fail
  organic_traffic_attempts_complete: pass | fail
  observation_window_complete: pass | fail
  waitlist_or_signup_intent_measured: pass | fail
  analytics_events_working: pass | fail
  claims_policy_safe: pass | fail
  stack_fit_checked: pass | fail
  build_scope_bounded: pass | fail
  kill_criteria_defined: pass | fail
```

## EV Band

```yaml
ev_band:
  before:
    payment_probability: low | medium | high
    retention_probability: unknown | low | medium | high
    contribution_potential: low | medium | high
    cost_risk: low | medium | high
    support_risk: low | medium | high
    confidence: low | medium | high
  after:
    payment_probability: low | medium | high
    retention_probability: unknown | low | medium | high
    contribution_potential: low | medium | high
    cost_risk: low | medium | high
    support_risk: low | medium | high
    confidence: low | medium | high
```

## Build Boundary

```yaml
build_boundary:
  approved_build_scope:
  forbidden_scope:
  required_assets:
  required_tracking:
  accepted_risks:
  unresolved_red_hypotheses:
  financial_model_ref:
  organic_traffic_ref:
  organic_distribution_test_plan_ref:
  traffic_source_report_ref:
  observation_window_ref:
  validation_cycle_report_ref:
  measurement_plan_ref:
  budget_cap:
  kill_criteria:
```

## Next Step

```yaml
next_step:
  next_owner:
  deadline:
  next_artifact:
  escalation_needed: yes | no
  escalation_owner:
```

This is a recommendation for Gate B review. It is not Gate B approval and it is
not build approval.
