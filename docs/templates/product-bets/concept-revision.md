# Concept Revision

Owner: `launch-lead`

```yaml
concept_revision:
  id: cr-YYYYMMDD-slug-v001
  product_bet_id:
  parent_revision_id:
  version:
  product_bet_card_ref:
  trigger:
    type: baseline | autoreason | test_result | research_delta | human_review
    source_ref:
  changed_axes:
    - buyer
    - positioning
    - offer
    - pricing
    - channel
    - product_shape
    - activation
    - payment_path
  change_summary:
  why_changed:
  evidence_refs:
  promoted: true | false
  rejected_reason:
  created_by:
  created_at:
```

Rules:

- No silent rewrites.
- Every meaningful Product Bet Card change gets a revision record.
- Gate B must reference the exact revision it approves, revises, or kills.
