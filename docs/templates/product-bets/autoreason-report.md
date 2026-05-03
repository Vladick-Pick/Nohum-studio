# Autoreason Report

Owner: `pre-market-autoreasoner`

```yaml
autoreason_run:
  id: ar-YYYYMMDD-slug
  product_bet_revision_ref:
  owner: pre-market-autoreasoner
  created_at:
```

## Immutable Context

```yaml
immutable_context:
  idea_card_ref:
  gate_a_decision_ref:
  competitor_deep_dive_ref:
  current_product_bet_ref:
  forbidden_claims:
  budget_constraints:
```

## Config

```yaml
config:
  max_rounds: 2
  avatars: 6
  variants_per_round: 3
  judges: 3
  external_actions_allowed: false
```

## Avatar Panel

```yaml
avatars:
  - skeptical_buyer
  - current_competitor_user
  - price_sensitive_buyer
  - busy_operator
  - early_adopter
  - false_positive_non_buyer
```

## Critique Axes

```yaml
critique_axes:
  - buyer_clarity
  - pain_specificity
  - payment_path
  - channel_reachability
  - activation_speed
  - differentiation
  - economics
  - trust
  - legal_safety
```

## Outputs

```yaml
outputs:
  objection_map:
  unclear_claims:
  strongest_variant:
  weakest_variant:
  recommended_revision_ref:
  fork_candidates:
  red_hypotheses_added:
  judge_disagreement:
  decision: proceed_to_test | revise | test_more | kill
  sufficiency_status: pass | retry | escalate
```

Boundary: synthetic audience findings are not market validation.
