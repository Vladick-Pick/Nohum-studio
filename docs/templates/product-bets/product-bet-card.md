# Product Bet Card

- `product_bet_id`: `pb-YYYYMMDD-slug`
- `created_at`:
- `created_by`:
- `origin_market_signals`:
- `research_case_refs`:
- `status`: `drafted` / `testing` / `revised` / `killed` / `gate_a_candidate`

## One-Line Bet

If NoHum offers `product_shape` to `buyer`, they will pay because `painful_job` is urgent, recurring, and poorly solved by `current_workaround`.

## Buyer And Job

- `buyer`:
- `painful_job`:
- `current_workaround`:
- `switching_trigger`:
- `frequency_or_recurrence`:
- `paying_audience_evidence`:

## Product Shape

- `proposed_solution`:
- `product_shape`:
- `first_value_moment`:
- `activation_path`:
- `first_payment_path`:
- `pricing_hypothesis`:
- `channel_wedge`:
- `reusable_engine_or_pattern`:
- `default_stack_fit`: `pass` / `warn` / `fail`
- `support_load_estimate`: `low` / `medium` / `high`

## Market Grounding

- `direct_competitors`:
- `pricing_evidence`:
- `demand_evidence`:
- `channel_evidence`:
- `legal_or_commercial_risks`:
- `strongest_evidence_refs`:
- `weakest_evidence_refs`:

## EV Band

- `payment_probability`: `low` / `medium` / `high`
- `retention_probability`: `unknown` / `low` / `medium` / `high`
- `contribution_potential`: `low` / `medium` / `high`
- `cost_risk`: `low` / `medium` / `high`
- `support_risk`: `low` / `medium` / `high`
- `confidence`: `low` / `medium` / `high`

## Riskiest Assumption

- `riskiest_assumption_id`:
- `why_this_is_riskiest`:
- `recommended_next_step`: `KILL` / `REVISE` / `FORK` / `TEST_MORE` / `RESEARCH_REQUIRED` / `GATE_A_CANDIDATE`
- `decision_notes`:

## Governance Boundary

`GATE_A_CANDIDATE` is not Gate B and is not build approval. It only means the bet may be prepared for existing Gate A governance review.
