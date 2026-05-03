# Test GTM Surface Pack

Owner: `landing-surface-builder`

```yaml
test_gtm_surface_pack:
  id: tgsp-YYYYMMDD-slug
  product_bet_revision_ref:
  landing_design_ref:
  copy_variant_matrix_ref:
  waitlist_form_spec_ref:
  surface_version_ref:
  owner: landing-surface-builder
  created_at:
```

## Surfaces

```yaml
surfaces:
  main_landing:
    headline:
    subheadline:
    primary_CTA:
    secondary_CTA:
    sections:
      problem:
      old_way:
      new_way:
      how_it_works:
      sample_output:
      features:
      pricing:
      FAQ:
      objections:
    pricing_block:
    objection_blocks:
  comparison_page:
    competitor:
    angle:
    claims:
    proof_needed:
  pricing_intent_page:
    CTA:
    no_charge_policy:
    copy:
  waitlist_form:
    CTA:
    fields:
    success_message:
    qualitative_question:
  directory_blurbs:
  community_post_variants:
  x_thread_variants:
  seo_pages:
```

## QA And Approval

```yaml
approval:
  anti_ai_slop_review_ref:
  surface_QA_ref:
  claims_review_status: pending | pass | fail
  browser_QA_status: not_run | pass | fail | blocked
  measurement_QA_required: yes | no
  public_publish_required: yes | no
  approval_owner:
  forbidden_claims_removed: yes | no
  sufficiency_status: pass | retry | escalate
```

This pack prepares validation surfaces. It is not product build scope.
