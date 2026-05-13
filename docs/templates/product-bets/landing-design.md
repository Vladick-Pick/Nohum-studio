# Landing Design

Owner: `landing-surface-builder`

```yaml
landing_design:
  id: ld-YYYYMMDD-slug
  product_bet_revision_ref:
  owner: landing-surface-builder
  created_at:
```

## Purpose

Define the validation landing surface before implementation or publication.
This is a measurement instrument for positioning and signup intent, not the
product itself.

## Page Contract

```yaml
page_contract:
  product_concept_name:
  source_reference_name:
  target_market:
  target_market_language:
  target_audience:
  primary_job:
  one_sentence_offer:
  primary_CTA:
  secondary_CTA:
  waitlist_promise:
  pricing_or_availability_hint:
  claims_boundary_ref:
  design_standard_ref:
  competitor_landing_benchmark_refs:
```

## Sections

```yaml
sections:
  hero:
    headline:
    subheadline:
    CTA:
    above_fold_objection:
  problem:
    pain_language:
    old_way:
    cost_of_status_quo:
  solution:
    new_way:
    core_workflow:
    first_value_moment:
  proof_or_proxy:
    allowed_proof:
    unavailable_proof_to_avoid:
  use_cases:
  sample_output_or_demo:
  pricing_or_waitlist:
  FAQ:
  objections:
```

## Design Constraints

```yaml
design_constraints:
  mobile_first: yes
  english_first_for_global_us_eu_targets: yes
  product_name_visible_above_fold: yes
  no_competitor_or_source_name_as_product_identity: yes
  one_primary_CTA: yes
  text_must_fit: yes
  primary_copy_must_not_say_validation_or_test: yes
  no_fake_logos: yes
  no_fake_customer_quotes: yes
  no_unapproved_security_claims: yes
  no_payment_collection: yes
```

## Acceptance

```yaml
acceptance:
  target_market_language_matches: pass | fail
  product_concept_name_visible: pass | fail
  competitor_landing_benchmark_done: pass | fail
  design_standard_applied: pass | fail
  no_test_framing_in_primary_copy: pass | fail
  offer_understandable_in_5_seconds: pass | fail
  CTA_visible_above_fold: pass | fail
  waitlist_form_path_defined: pass | fail
  measurement_events_defined: pass | fail
  claims_review_required: yes | no
  sufficiency_status: pass | retry | escalate
```
