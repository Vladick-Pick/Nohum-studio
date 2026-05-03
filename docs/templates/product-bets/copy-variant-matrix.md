# Copy Variant Matrix

Owner: `landing-surface-builder`

```yaml
copy_variant_matrix:
  id: cvm-YYYYMMDD-slug
  product_bet_revision_ref:
  owner: landing-surface-builder
  created_at:
```

## Variants

```yaml
variants:
  - variant_id:
    hypothesis:
    audience_angle:
    pain_angle:
    headline:
    subheadline:
    primary_CTA:
    waitlist_promise:
    pricing_hint:
    objection_block:
    proof_block:
    risk:
    expected_behavior_signal:
```

## Selection

```yaml
selected_variant:
  variant_id:
  why_selected:
  rejected_variants:
    - variant_id:
      rejected_reason:
  claims_review_status: pending | pass | fail
  anti_ai_slop_status: pending | pass | fail
```

Rules:

- Do not invent proof.
- Do not use inflated generic promises.
- Every variant must map to a product-bet revision or fork.
- The selected variant is the one used by the surface version.
