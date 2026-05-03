# Validation Risk Map

Owner: `product-bet-compiler`

This map records the product, positioning, channel, surface, and measurement
risks that can invalidate a Product Bet before Gate B.

It is a pre-Gate-B risk map, not a general external-test planner.

```yaml
validation_risk_map:
  id: vrm-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  created_at:
  owner: product-bet-compiler
```

## Risks

Repeat this block for each risk:

```yaml
risk:
  id: vr-001
  type: segment | positioning | USP | channel | landing | waitlist | measurement | economics | build | legal | trust
  statement:
  why_it_can_kill_the_bet:
  risk_level: low | medium | high | existential
  current_evidence_status: untested | weak | supported | contradicted
  evidence_refs:
  validation_surface_needed: yes | no
  organic_traffic_needed: yes | no
  observation_window_needed: yes | no
  pass_signal:
  fail_signal:
  owner:
  notes:
```

## Priority

```yaml
priority:
  top_risks:
  selected_test_revision_ref:
  why_these_risks_matter_before_gate_b:
  accepted_risks:
  risks_that_require_ceo_or_board_acceptance:
```

## Routing

```yaml
routing:
  revise_offer_if:
  revise_landing_if:
  revise_channel_if:
  open_fork_if:
  run_more_traffic_if:
  kill_if:
```

Rules:

- Do not add validation methods outside the landing/waitlist/organic
  observation kernel without a separate approval path.
- If a risk cannot be tested by the default validation kernel, mark it as
  `requires_future_stage_or_board_decision`.
- Gate B must reference which risks were tested, accepted, or left unresolved.
