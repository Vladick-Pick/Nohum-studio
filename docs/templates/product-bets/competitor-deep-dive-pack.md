# Competitor Deep Dive Pack

Owner: `competitor-deep-dive-analyst`

```yaml
competitor_deep_dive_pack:
  id: cdd-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  owner: competitor-deep-dive-analyst
  created_at:
  source_idea_card_ref:
  gate_a_decision_ref:
```

## Competitors

Repeat this block for each competitor.

```yaml
competitor:
  name:
  url:
  category:
  directness: direct | adjacent | excluded
  reason_for_inclusion:
  source_refs:

  homepage:
    headline:
    subheadline:
    primary_cta:
    secondary_cta:
    promise:
    target_segment:
    screenshots:

  pricing:
    pricing_url:
    plans:
      - name:
        price:
        billing_period:
        usage_limits:
        notable_features:
    free_tier:
    trial:
    checkout_steps_if_visible:
    pricing_objections:

  onboarding:
    signup_allowed: yes | no | blocked
    account_created: yes | no
    blocker:
    steps:
    first_screen:
    empty_state:
    first_value_moment:
    required_integrations:
    screenshots:

  workflow:
    inputs:
    outputs:
    core_steps:
    required_integrations:
    time_to_first_value_estimate:

  trust:
    logos:
    testimonials:
    reviews:
    security_claims:
    compliance_claims:
    proof_quality: weak | medium | strong

  distribution:
    SEO_pages:
    comparison_pages:
    directories:
    communities:
    integrations:
    content_clusters:
    social_surfaces:

  weaknesses:
    friction:
    unclear_claims:
    missing_features:
    price_objections:
    onboarding_dropoff_risks:
    support_or_complexity_risks:

  reusable_patterns:
    copyable_legally:
    not_copyable:
    pattern_confidence:

  differentiation_gap:
    wedge:
    why_we_can_win:
    risk_to_wedge:
```

## Summary

```yaml
summary:
  direct_competitors_retained:
  strongest_patterns:
  strongest_gaps:
  pricing_anchors:
  onboarding_lessons:
  traffic_lessons:
  trust_lessons:
  legal_or_platform_risks:
  recommended_product_constraints:
  missing_data:
  sufficiency_status: pass | retry | escalate
```
