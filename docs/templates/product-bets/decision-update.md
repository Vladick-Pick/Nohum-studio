# Decision Update

- `decision_update_id`: `du-YYYYMMDD-slug`
- `product_bet_id`:
- `created_at`:
- `owner`:

## Decision

- `action`: `KILL` / `REVISE` / `FORK` / `TEST_MORE` / `RESEARCH_REQUIRED` / `GATE_A_CANDIDATE`
- `reason_codes`:
  - `no_clear_buyer`
  - `weak_payment_path`
  - `channel_unclear`
  - `promising_but_needs_research`
  - `checkout_intent_strong`
  - `paid_pilot_signal`
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
  contribution_potential: low | medium | high
  cost_risk: low | medium | high
  support_risk: low | medium | high
  confidence: low | medium | high
```

## EV Band After

```yaml
ev_band_after:
  payment_probability: low | medium | high
  contribution_potential: low | medium | high
  cost_risk: low | medium | high
  support_risk: low | medium | high
  confidence: low | medium | high
```

## Decision Logic

- `next_step_expected_value`: `negative` / `unclear` / `positive`
- `why_now`:
- `what_would_change_the_decision`:
- `cost_or_risk_notes`:

## Next Step

- `next_owner`:
- `deadline`:
- `next_artifact`:
- `escalation_needed`: `yes` / `no`
- `escalation_owner`:

## Governance Boundary

`GATE_A_CANDIDATE` means candidate for existing Gate A governance review.

`GATE_A_CANDIDATE` is not Gate B.

`GATE_A_CANDIDATE` is not build approval.
