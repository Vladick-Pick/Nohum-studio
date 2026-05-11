# Product Bet Memory

Product Bet Memory defines derived learning surfaces for the post-Gate-A,
pre-Gate-B Product Bet Validation loop.

It does not replace the Product Bet Card, Gate B Recommendation, or Gate B
Decision. Those remain the canonical decision artifacts.

## Canonical Rule

- Primary truth: `Product Bet Card` and its linked versioned artifacts.
- Build permission truth: `Gate B Decision`.
- Derived memory may copy, normalize, index, and label already-recorded Product
  Bet facts.
- Derived memory must not introduce new validation facts, new recommendations,
  or changed decision outcomes.

If derived memory conflicts with the Product Bet Card or Gate B Decision, the
canonical artifact wins and the derived surface is regenerated.

## Surfaces

| Surface | Artifact type | Primary purpose | Canonical dependency | Write mode |
|---|---|---|---|---|
| `Product Bet Registry` | upserted index row | fast status lookup across Product Bet cycles | Product Bet Card, selected revision, Gate B Recommendation | upsert by `product_bet_id` |
| `Channel Learning Memory` | append or upsert learning row | preserve traffic source quality, channel fit, blockers, and route outcomes | Traffic Attempts, Traffic Source Report, Validation Evidence Events | append per channel attempt; upsert rollup by channel and segment |
| `Offer Angle Memory` | append or upsert learning row | preserve offer, positioning, claim, objection, and CTA learnings | Offer Brief, Concept Revisions, Surface Versions, Evidence Events | append per tested revision; upsert rollup by angle |
| `Surface Performance Index` | upserted index row | compare landing/waitlist surface versions by observed behavior | Surface Version, Surface QA, Measurement Plan, Observation Window | upsert by `surface_version_ref` |

## Required Provenance Fields

Every derived row must carry enough provenance to trace it back to canonical
artifacts.

```yaml
provenance:
  product_bet_id:
  venture_id:
  product_bet_card_ref:
  product_bet_revision_ref:
  selected_test_revision_ref:
  surface_version_ref:
  gate_a_decision_ref:
  gate_b_recommendation_ref:
  gate_b_decision_ref:
  source_artifact_refs:
  source_artifact_updated_at_max:
  derived_updated_at:
  derived_owner:
  schema_version:
```

## Product Bet Registry

Purpose:

- show where each Product Bet is in the validation loop
- prevent hidden parallel Product Bet work for the same Gate A decision
- provide Launch Lead and CEO with a quick status surface

Minimum fields:

```yaml
product_bet_registry_row:
  product_bet_id:
  venture_id:
  source_idea_card_ref:
  gate_a_decision_ref:
  current_revision_ref:
  selected_test_revision_ref:
  current_surface_version_ref:
  status: drafted | hardening | surface_ready | traffic_running | observation | gate_b_ready | killed
  launch_lead_sufficiency_status: pending | pass | retry | escalate
  evidence_readiness: not_started | waiting_for_time | waiting_for_traffic | ready_for_review | reviewed | blocked | expired
  latest_validation_decision:
  latest_gate_b_recommendation_ref:
  blocked_execution_states:
  next_owner:
  next_artifact:
```

## Channel Learning Memory

Purpose:

- remember which free or near-free channels produced relevant traffic
- avoid rediscovering blocked, spammy, low-quality, or policy-risk channels
- provide post-build Marketing with validated seeds, not generic GTM advice

Minimum fields:

```yaml
channel_learning_row:
  product_bet_id:
  product_bet_revision_ref:
  surface_version_ref:
  channel:
  source_ref:
  traffic_attempt_ref:
  unique_visitors:
  CTA_click_rate:
  waitlist_conversion:
  qualitative_feedback_summary:
  ICP_fit: low | medium | high | unknown
  source_quality: low | medium | high | unknown
  reputation_or_policy_risk:
  cost_cents:
  execution_state: ready | missing_access | approval_required | blocked_by_policy
  recommended_reuse: avoid | retry_later | reuse_with_changes | reuse
  evidence_event_refs:
```

Rules:

- a blocked channel is not a weak market signal
- a low-quality traffic source cannot support a build recommendation by itself
- public posting and directory submissions must preserve approval refs

## Offer Angle Memory

Purpose:

- preserve what buyers reacted to or ignored
- separate offer weakness from landing weakness and channel weakness
- make later Product Bet cycles reuse concrete wording lessons

Minimum fields:

```yaml
offer_angle_row:
  product_bet_id:
  concept_revision_ref:
  offer_brief_ref:
  surface_version_ref:
  buyer_segment:
  painful_job:
  headline_angle:
  USP:
  pricing_frame:
  main_objection:
  claim_safety_status: pass | warn | fail
  observed_behavior_summary:
  CTA_click_rate:
  waitlist_conversion:
  qualitative_feedback_summary:
  route: keep | revise_offer | revise_landing | revise_channel | open_fork | kill
  evidence_event_refs:
```

Rules:

- do not promote an angle from synthetic audience output alone
- every promoted angle must cite behavior or an explicit accepted-risk decision
- unsupported claims stay prohibited even when they appear persuasive

## Surface Performance Index

Purpose:

- keep landing and waitlist surface performance attributable to exact versions
- avoid overwriting live surfaces without preserving decision history
- support later comparison between revision, surface, and channel quality

Minimum fields:

```yaml
surface_performance_row:
  surface_version_ref:
  product_bet_revision_ref:
  landing_design_ref:
  copy_variant_ref:
  waitlist_form_ref:
  environment: local | preview | public
  status: draft | QA | approved_to_publish | live | paused | retired
  browser_QA_status: pass | retry | escalate | blocked
  measurement_QA_status: pass | fail | blocked
  unique_visitors:
  CTA_click_rate:
  pricing_click_rate:
  waitlist_submits:
  waitlist_conversion:
  source_quality_summary:
  strongest_issue:
  recommended_next_action:
  evidence_event_refs:
```

Rules:

- each traffic attempt must cite the exact `surface_version_ref`
- a live surface is never overwritten; a new version is created instead
- evidence review cannot route to build without a fixed surface version

## Ownership

| Surface | Steward | Consumers |
|---|---|---|
| `Product Bet Registry` | `launch-lead` | CEO, Launch Lead, Evidence Router |
| `Channel Learning Memory` | `organic-traffic-strategist` and `evidence-router` | Launch Lead, future Marketing team |
| `Offer Angle Memory` | `offer-positioning-strategist` and `evidence-router` | Launch Lead, Landing Surface Builder, future Marketing team |
| `Surface Performance Index` | `landing-surface-builder` and `product-bet-measurement-specialist` | Evidence Router, Launch Lead |

Specialists update canonical artifacts first. Derived memory is written only
after the canonical artifact contains the underlying fact.

## Update Triggers

- Product Bet Card created or status changed
- concept revision promoted, rejected, or tested
- fork candidate opened, ignored, or promoted
- surface version created, published, paused, or retired
- traffic attempt completed, blocked, removed, or rerouted
- observation window status changed
- validation evidence event accepted or corrected
- Gate B Recommendation written or superseded
- Gate B Decision recorded

## Update Order

1. Write or update the canonical artifact.
2. Write or update validation evidence events when behavior or blockers were
   observed.
3. Regenerate the relevant derived memory rows.
4. Check provenance timestamps and source refs.

Manual edits to derived memory may only correct housekeeping fields. If a
business fact is wrong, fix the canonical artifact and regenerate.

## Retention

- `Product Bet Registry`: retain while the venture exists; archive 24 months
  after final kill or retirement.
- `Channel Learning Memory`: retain indefinitely for channel learning unless
  source policy requires removal.
- `Offer Angle Memory`: retain indefinitely for product and positioning reuse.
- `Surface Performance Index`: retain at least 36 months after final Gate B
  decision.

## Boundary

Product Bet Memory is a derived learning layer. It is not:

- Gate B approval
- product build permission
- payment validation
- a replacement for the Product Bet Card
- a place to rewrite Research market truth
