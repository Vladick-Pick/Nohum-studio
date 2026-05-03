# Validation Evidence Event

Owner: `evidence-router`

This is the narrow pre-Gate-B validation evidence event for Product Bet Validation.

It records behavior around the validation surface, organic traffic attempts,
waitlist intent, qualitative feedback, and blocked execution states.

It does not record post-build revenue, retention, or product-usage evidence.

```yaml
validation_evidence_event:
  id: vee-YYYYMMDD-slug
  product_bet_id:
  product_bet_revision_ref:
  surface_version_ref:
  traffic_attempt_ref:
  observation_window_ref:
  created_at:
  owner: evidence-router
```

## Source

```yaml
source:
  type: analytics | traffic_attempt | waitlist_submit | CTA_click | qualitative_feedback | blocked_state
  source_url_or_ref:
  UTM:
  source_allowed: yes | no | unclear
  source_quality: low | medium | high | unknown
```

## Metric

```yaml
metric:
  name:
  observed_value:
  threshold:
  result: pass | warn | fail | inconclusive
  confidence: low | medium | high
  cost_cents:
  duration_hours:
```

## Interpretation

```yaml
interpretation:
  affected_validation_question:
    - positioning_clarity
    - CTA_intent
    - waitlist_intent
    - channel_relevance
    - source_quality
    - measurement_integrity
  what_changed:
  what_did_not_change:
  limitation:
  recommended_route: review_evidence | revise_offer | revise_landing | revise_channel | open_fork | run_more_traffic | kill
```

## Audit

```yaml
audit:
  raw_data_ref:
  reviewer:
  review_status: pending | accepted | needs_correction | rejected
```

Rules:

- Waitlist intent is not payment validation.
- Blocked states are not weak market signal; they are execution blockers.
- Evidence must cite the exact `surface_version_ref`.
- Evidence review cannot route to build without an observation-window ref.
