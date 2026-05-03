# Gate B Decision

Owner: `CEO` / board

```yaml
gate_b_decision:
  id: gbd-YYYYMMDD-slug
  action: approve_build | revise_product_bet | run_more_tests | kill
  product_bet_id:
  product_bet_revision_ref:
  evidence_packet_ref:
  gate_b_recommendation_ref:
  decision_owner:
  decided_at:
```

## Decision Contract

```yaml
decision_contract:
  approved_build_scope:
  forbidden_scope:
  accepted_risks:
  unresolved_red_hypotheses:
  financial_model_ref:
  organic_traffic_ref:
  measurement_plan_ref:
  budget_cap:
  next_owner:
  next_task:
```

## Rationale

```yaml
rationale:
  reason_codes:
  evidence_refs:
  why_now:
  why_not_other_options:
  reopen_policy:
```

Gate B is the build permission boundary. A Product Bet Validation Sprint can
recommend Gate B action, but only this decision can approve build.
