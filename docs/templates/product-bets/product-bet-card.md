# Product Bet Card

Product Bet Card is the canonical post-Gate-A validation artifact.

It is a shared card. Specialists write owned sections directly into this card
and link detailed packs when needed. Launch Lead reviews section sufficiency.

```yaml
product_bet_card:
  product_bet_id: pb-YYYYMMDD-slug
  venture_id:
  source_idea_card_ref:
  gate_a_decision_ref:
  current_revision_ref:
  status: drafted | hardening | surface_ready | traffic_running | observation | gate_b_ready | killed
  created_at:
  created_by: launch-lead
```

## Gate A Context

Owner: `launch-lead`

```yaml
gate_a_context:
  approved_direction:
    market:
    buyer_segment:
    competitor_pattern:
    product_category:
  constraints:
    max_definition_time:
    max_test_budget_cents:
    allowed_external_actions:
    forbidden_claims:
    legal_platform_risks:
    stack_constraints:
  frozen_research_refs:
    idea_card_ref:
    research_case_id:
    gate_a_packet_ref:
  launch_lead_sufficiency_status: pending | pass | retry | escalate
```

Rules:

- Do not edit the Idea Card after Gate A.
- If product definition needs new market facts, create a research-delta request.
- Gate A opens product definition, not build.

## Product Identity

Owner: `product-bet-compiler`

```yaml
product_identity:
  name:
  one_liner:
  short_description:
  category:
  positioning_statement:
  default_stack_fit: pass | warn | fail
  support_load_estimate: low | medium | high
  sufficiency_status: pending | pass | retry | escalate
```

## Audience

Owner: `product-bet-compiler`

```yaml
audience:
  ICP:
  buyer:
  user:
  payer:
  segment_variants:
  excluded_segments:
  boundary_from_gate_a:
  drift_from_gate_a: none | minor | major
  sufficiency_status: pending | pass | retry | escalate
```

## Problem And Workflow

Owner: `product-bet-compiler`

```yaml
problem_and_workflow:
  painful_job:
  current_workaround:
  urgency:
  recurrence:
  switching_trigger:
  proposed_solution:
  core_workflow:
  first_value_moment:
  activation_path:
  MVP_features:
  non_MVP_features:
  later_features:
  non_goals:
  required_integrations:
  data_inputs:
  user_outputs:
  first_payment_path:
  sufficiency_status: pending | pass | retry | escalate
```

## Competitor Deep Dive

Owner: `competitor-deep-dive-analyst`

```yaml
competitor_deep_dive:
  pack_ref:
  direct_competitors_retained:
  adjacent_competitors_retained:
  summary:
  copyable_patterns:
  not_copyable:
  differentiation_gaps:
  pricing_anchors:
  onboarding_patterns:
  SEO_and_distribution_patterns:
  trust_patterns:
  browser_or_screenshot_refs:
  blockers:
  sufficiency_status: pending | pass | retry | escalate
```

## Offer Positioning

Owner: `offer-positioning-strategist`

```yaml
offer_positioning:
  offer_brief_ref:
  USP:
  value_prop:
  offer_angle:
  pricing_frame:
  packaging:
  trial_or_free_plan:
  guarantee_or_no_guarantee:
  main_objections:
  objection_responses:
  competitor_alternative_angle:
  forbidden_claims_check:
    status: pass | warn | fail
    notes:
  sufficiency_status: pending | pass | retry | escalate
```

## Economics

Owner: `economics-modeler`

```yaml
economics:
  financial_model_ref:
  conservative:
    summary:
    break_even_month:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
  base:
    summary:
    break_even_month:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
  aggressive:
    summary:
    break_even_month:
    month_to_5000_mrr:
    month_to_5000_net_contribution:
  unit_economics:
    expected_price_monthly:
    gross_margin:
    contribution_margin:
    AI_API_cost_per_active_user:
    support_minutes_per_paid_user:
  sensitivity:
    most_sensitive_variable:
    kill_thresholds:
  sufficiency_status: pending | pass | retry | escalate
```

## Organic Traffic

Owner: `organic-traffic-strategist`

```yaml
organic_traffic:
  strategy_ref:
  pain_language_map_ref:
  search_intent_map_ref:
  community_prospecting_map_ref:
  thread_scorecard_refs:
  free_value_wedge_ref:
  organic_distribution_test_plan_ref:
  primary_free_channel:
  secondary_channels:
  search_intents:
  competitor_alternative_targets:
  directories:
  communities:
  free_tool_or_template_wedge:
  minimum_viable_distribution_test:
  expected_signal:
  pass_threshold:
  fail_threshold:
  traffic_attempt_refs:
  traffic_source_report_ref:
  blockers:
  handoff_to_post_build_marketing:
  sufficiency_status: pending | pass | retry | escalate
```

## Validation Risks

Owner: `product-bet-compiler`

```yaml
validation_risks:
  validation_risk_map_ref:
  top_risks:
  required_signals_before_gate_b:
  accepted_risks:
  unresolved_risks:
  risks_requiring_ceo_or_board_acceptance:
  sufficiency_status: pending | pass | retry | escalate
```

## Autoreason

Owner: `pre-market-autoreasoner`

```yaml
autoreason:
  report_ref:
  avatar_panel:
  objection_map:
  variant_scores:
  recommended_revision:
  fork_candidates:
  red_hypotheses_added:
  internal_evidence_limit:
  sufficiency_status: pending | pass | retry | escalate
```

Rule: autoreason and synthetic audience are product-shaping inputs, not market
validation.

## Test Surfaces

Owner: `landing-surface-builder`

```yaml
test_surfaces:
  surface_pack_ref:
  landing_design_ref:
  copy_variant_matrix_ref:
  waitlist_form_spec_ref:
  anti_ai_slop_review_ref:
  surface_version_ref:
  surface_QA_ref:
  main_landing:
  comparison_page:
  pricing_intent_page:
  waitlist_form:
  directory_blurbs:
  community_post_variants:
  x_thread_variants:
  seo_pages:
  claims_review_status: pending | pass | fail
  browser_QA_status: not_run | pass | fail | blocked
  publish_approval_required: yes | no
  sufficiency_status: pending | pass | retry | escalate
```

## Measurement

Owner: `product-bet-measurement-specialist`

```yaml
measurement:
  measurement_plan_ref:
  observation_window_ref:
  events:
  analytics_destination:
  UTM_policy:
  dashboard_ref:
  pass_thresholds:
  fail_thresholds:
  QA_status:
  blockers:
  sufficiency_status: pending | pass | retry | escalate
```

## Observation Window

Owner: `product-bet-measurement-specialist`

```yaml
observation_window:
  observation_window_ref:
  started_at:
  min_runtime_hours:
  max_runtime_days:
  min_unique_visitors:
  preferred_unique_visitors:
  min_channel_count:
  status: not_started | waiting_for_time | waiting_for_traffic | ready_for_review | expired
  current_runtime_hours:
  current_unique_visitors:
  current_channel_count:
  decision_readiness:
    enough_time: yes | no
    enough_traffic: yes | no
    enough_channel_diversity: yes | no
  next_action: wait | run_more_traffic | review_evidence | escalate
  sufficiency_status: pending | pass | retry | escalate
```

Rule: evidence review cannot route `build` unless the observation window is
`ready_for_review` or CEO/board explicitly accepts a data-risk exception.

## Evidence

Owner: `evidence-router`

```yaml
evidence:
  evidence_event_refs:
  traffic_attempt_refs:
  validation_cycle_report_ref:
  passed_hypotheses:
  failed_hypotheses:
  inconclusive_hypotheses:
  blocked_execution_states:
  behavior_signals:
    unique_visitors:
    CTA_clicks:
    CTA_click_rate:
    waitlist_submits:
    waitlist_conversion:
    pricing_clicks:
    source_quality:
    qualitative_feedback:
  interpretation_notes:
  sufficiency_status: pending | pass | retry | escalate
```

## Revision Ledger

Owner: `launch-lead`

```yaml
revision_ledger:
  concept_revision_refs:
  fork_candidate_refs:
  current_revision_ref:
  baseline_revision_ref:
  selected_test_revision_ref:
  selected_test_revision_reason:
  rejected_variant_refs:
```

Rules:

- No silent rewrites.
- Every meaningful change is a `concept_revision`.
- Every alternate direction is a `fork_candidate`.
- Gate B references an exact `product_bet_revision_ref`.

## Selected Test Revision

Owner: `launch-lead`

```yaml
selected_test_revision:
  revision_ref:
  selected_at:
  selected_by: launch-lead
  why_selected:
  competing_forks:
  rejected_variants:
  required_surface_refs:
  required_traffic_test_refs:
  accepted_internal_risks:
  sufficiency_status: pending | pass | retry | escalate
```

## Gate B Recommendation

Owner: `evidence-router`

```yaml
gate_b_recommendation:
  recommendation_ref:
  action: build | revise | fork | test_more | kill
  required_artifacts_complete: yes | no
  unresolved_hard_blockers:
  next_owner:
```

## Validation Decision

Owner: `evidence-router`

```yaml
validation_decision:
  action: build | revise_offer | revise_landing | revise_channel | open_fork | test_more | kill
  target_owner:
  reason_codes:
  evidence_refs:
  observation_window_ref:
  traffic_source_report_ref:
  selected_test_revision_ref:
  next_artifact:
  retry_instruction:
```

## Launch Lead Sufficiency Review

Owner: `launch-lead`

```yaml
launch_lead_sufficiency_review:
  overall_status: pass | retry | escalate
  section_results:
    product_identity:
    audience:
    problem_and_workflow:
    competitor_deep_dive:
    offer_positioning:
    economics:
    organic_traffic:
    red_hypotheses:
    autoreason:
    test_surfaces:
    measurement:
    observation_window:
    evidence:
  retry_requests:
    product_shape:
      target_owner: product-bet-compiler
      missing_fields:
      required_revision:
    offer:
      target_owner: offer-positioning-strategist
      missing_fields:
      required_revision:
    landing:
      target_owner: landing-surface-builder
      missing_fields:
      required_revision:
    traffic:
      target_owner: organic-traffic-strategist
      missing_fields:
      required_revision:
    measurement:
      target_owner: product-bet-measurement-specialist
      missing_fields:
      required_revision:
    fork:
      target_owner: pre-market-autoreasoner
      source_ref:
      required_revision:
  escalations:
  gate_b_ready: yes | no
```

## Governance Boundary

This artifact is a recommendation package for Gate B.

It is not Gate B approval and it is not build approval.
