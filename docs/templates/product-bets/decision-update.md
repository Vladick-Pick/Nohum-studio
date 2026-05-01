# Gate B Recommendation

- `gate_b_recommendation_id`: `gbr-YYYYMMDD-slug`
- `product_bet_id`:
- `venture_id`:
- `created_at`:
- `owner`:

## Recommendation

- `action`: `build` / `revise` / `test_more` / `kill`
- `reason_codes`:
  - `positioning_clear`
  - `positioning_weak`
  - `USP_clear`
  - `USP_weak`
  - `payment_intent_strong`
  - `payment_intent_weak`
  - `channel_signal_strong`
  - `channel_signal_weak`
  - `activation_unclear`
  - `build_too_complex`
  - `support_load_risk`
  - `price_not_plausible`
  - `evidence_contradicted`
  - `stack_fit_risk`
- `rationale`:
- `evidence_refs`:

## EV Band Before

```yaml
ev_band_before:
  payment_probability: low | medium | high
  retention_probability: unknown | low | medium | high
  contribution_potential: low | medium | high
  cost_risk: low | medium | high
  support_risk: low | medium | high
  confidence: low | medium | high
```

## EV Band After

```yaml
ev_band_after:
  payment_probability: low | medium | high
  retention_probability: unknown | low | medium | high
  contribution_potential: low | medium | high
  cost_risk: low | medium | high
  support_risk: low | medium | high
  confidence: low | medium | high
```

## Build Boundary

- `approved_build_scope`:
- `forbidden_scope`:
- `required_assets`:
- `required_tracking`:
- `accepted_risks`:
- `unresolved_red_hypotheses`:
- `budget_cap`:

## Next Step

- `next_owner`:
- `deadline`:
- `next_artifact`:
- `escalation_needed`: `yes` / `no`
- `escalation_owner`:

## Governance Boundary

This is a recommendation for Gate B review.

It is not Gate B approval and it is not build approval.
