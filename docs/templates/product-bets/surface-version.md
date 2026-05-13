# Surface Version

Owner: `landing-surface-builder`

```yaml
surface_version:
  id: sv-YYYYMMDD-slug
  product_bet_revision_ref:
  landing_design_ref:
  copy_variant_ref:
  waitlist_form_ref:
  owner: landing-surface-builder
  created_at:
```

## Version

```yaml
version:
  surface_url:
  review_preview_url:
  preferred_public_host: https://<surface-slug>.claricont.com
  environment: local | preview | public
  published_at:
  publish_approval_ref:
  active_from:
  active_until:
  status: draft | QA | approved_to_publish | live | paused | retired
```

## Change Log

```yaml
changes_from_previous:
  previous_surface_version_ref:
  changed_axes:
    - headline
    - offer
    - CTA
    - waitlist_form
    - proof
    - pricing_hint
    - layout
  reason_for_change:
  evidence_refs:
```

Rules:

- Traffic attempts must cite the exact surface version that was live.
- Do not overwrite a live surface without creating a new version.
- Board-review previews should use the same host shape as publication when
  possible. Do not use raw IP URLs for review or public traffic when the company
  validation domain is available.
- `*.claricont.com` is the default validation host pattern unless CEO/board
  configures another domain.
