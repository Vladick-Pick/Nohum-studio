# Waitlist Form Spec

Owner: `landing-surface-builder`

```yaml
waitlist_form_spec:
  id: wfs-YYYYMMDD-slug
  product_bet_revision_ref:
  owner: landing-surface-builder
  created_at:
```

## Form

```yaml
form:
  form_id:
  CTA_text:
  fields:
    - name: email
      required: true
    - name:
      required:
    - company_or_role:
      required:
    - pain_or_use_case:
      required:
  success_message:
  privacy_note:
  no_charge_policy:
  double_opt_in_required: yes | no
```

## Intent Quality

```yaml
intent_quality:
  minimum_quality_fields:
  ICP_quality_tags:
    - target_icp
    - adjacent
    - unclear
    - non_icp
  qualitative_prompt:
  spam_filter_notes:
```

## Events

```yaml
events:
  form_view:
  form_submit:
  submit_success:
  submit_error:
```

Rules:

- Waitlist intent is not payment validation.
- Do not promise delivery dates or discounts unless approved.
- Do not collect payment details in pre-Gate-B validation.
