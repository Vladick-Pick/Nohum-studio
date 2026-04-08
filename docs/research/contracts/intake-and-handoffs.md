# Research Intake and Handoff Contracts

This document narrows the generic company handoff language for the research module.

Inside research, artifact quality and research meaning are separate concepts. Do not overload one field to carry both.

## Idea Card

The canonical per-idea research artifact for revenue-visible raw leads is the `Idea Card`.

It is not just an intake stub. In Research v1 it is the shared document that survives from shortlist selection through final research decision.

Draft status:

- the shared-document workflow is active
- the exact specialist section schema and review language below are a working draft
- they should be refined later when each specialist agent is fully worked through

Structure:

1. intake normalization
2. preserved scout data blocks
3. specialist sections
4. selection doctrine assessment
5. final research decision

Required fields:

- `venture_id`
- `research_case_id`
- `source_url`
- `capture_date`
- `source_platform`
- `product_name`
- `product_url`
- `site_domain`
- `normalized_domain`
- `normalized_category`
- `reported_revenue_or_mrr`
- `one_line_problem`
- `likely_icp`
- `offer_type`
- `pricing_visibility`
- `proof_product_is_live`
- `monetization_hint`
- `demand_hint`
- `default_path_fit_concerns`
- `candidate_fingerprint`
- `duplicate_check`
- `duplicate_of_case_id`
- `duplicate_confidence`
- `strongest_direct_source`
- `corroborating_sources`
- `open_questions_for_specialists`
- `intake_verdict: REJECT | RESEARCH | HOLD`
- `doctrine_source`
- `doctrine_version_or_date`
- `doctrine_assessment_owner`
- `current_status_quo_workflow`
- `current_workaround_summary`
- `current_time_costs`
- `current_money_costs`
- `current_risk_costs`
- `current_cognitive_costs`
- `current_emotional_costs`
- `with_product_workflow`
- `expected_time_delta`
- `expected_money_delta`
- `expected_risk_delta`
- `expected_cognitive_delta`
- `expected_emotional_delta`
- `expected_delta_summary`
- `delta_confidence`
- `delta_weaknesses`
- `doctrine_checklist_pass_count`
- `doctrine_checklist_fail_count`
- `doctrine_checklist_inconclusive_count`
- `doctrine_completion`
- `doctrine_verdict`
- `doctrine_contradictions`
- `doctrine_unresolved_items`
- `doctrine_false_positive_risks`

Notes:

- `reported_revenue_or_mrr` stores the source-reported value exactly as observed. Do not silently normalize away uncertainty.
- `pricing_visibility` is one of `visible`, `hidden`, or `fallback-derived`.
- `duplicate_check` must make clear whether this lead matches an existing candidate under another name or URL.
- `research_case_id` is the stable canonical case id for this card and must not be recycled across different ideas.
- `normalized_domain` is the canonical hostname used for dedupe and history indexing; it should remove protocol, path, query, and `www`.
- `normalized_category` is the research-normalized category label used for cross-card grouping.
- `candidate_fingerprint` is a deterministic fingerprint for duplicate detection and should be stable across recaptures of the same idea.
- `duplicate_of_case_id` links to the canonical `research_case_id` when this card is a duplicate candidate.
- `duplicate_confidence` is `high | medium | low` and is required when `duplicate_of_case_id` is populated.
- `decision_confidence` uses `high | medium | low`.
- `evidence_completeness` uses `complete | partial | insufficient`.
- `revisit_policy` uses `none | timebox | triggered`.
- `reopen_conditions` is the machine-readable trigger list for reopening a case after `KILL FOR NOW`.
- `doctrine_completion` uses `complete | partial | insufficient`.
- `doctrine_verdict` uses `PASS | RETRY | ESCALATE`.
- `delta_confidence` uses `high | medium | low`.

Research history layer required fields:

- `decision_owner`
- `decision_confidence`
- `evidence_completeness`
- `major_unknowns_count`
- `contradiction_count`
- `final_verdict_date`
- `primary_decision_reason`
- `secondary_decision_reasons`
- `revisit_policy`
- `revisit_after`
- `reopen_conditions`

Research history layer rules:

- the `Idea Card` is the only primary truth for a candidate case
- derived layers (indexes, reports, rollups, or dashboards) are secondary and must be reproducible from the card
- if a derived layer conflicts with the card, the card wins and the derived layer is corrected
- history fields may be present as `pending` before final decision, but they must be completed before closing the case

Controlled decision reason-code taxonomy:

Allowed reason codes:

- `strong_thesis_fit`
- `weak_demand`
- `sufficient_competitor_density`
- `insufficient_competitor_count`
- `pricing_visible`
- `pricing_hidden`
- `open_market`
- `closed_market`
- `clear_first_payment_path`
- `unclear_first_payment_path`
- `default_path_fit`
- `bad_default_path_fit`
- `economics_sound`
- `economics_fragile`
- `too_enterprise`
- `too_services_like`
- `duplicate_existing_case`
- `evidence_stale`
- `too_many_unknowns`
- `evidence_incomplete`
- `timing_not_now`

Reason-code usage rules:

- `primary_decision_reason` must contain exactly one code from the allowed list
- if `final_verdict = QUEUE`, `primary_decision_reason` must be one of:
  - `strong_thesis_fit`
  - `sufficient_competitor_density`
  - `pricing_visible`
  - `open_market`
  - `clear_first_payment_path`
  - `default_path_fit`
  - `economics_sound`
- if `final_verdict = KILL` or `KILL FOR NOW`, `primary_decision_reason` must be one of:
  - `weak_demand`
  - `insufficient_competitor_count`
  - `pricing_hidden`
  - `closed_market`
  - `unclear_first_payment_path`
  - `bad_default_path_fit`
  - `economics_fragile`
  - `too_enterprise`
  - `too_services_like`
  - `duplicate_existing_case`
  - `evidence_stale`
  - `too_many_unknowns`
  - `evidence_incomplete`
  - `timing_not_now`
- `secondary_decision_reasons` may contain zero or more additional codes from the allowed list
- `secondary_decision_reasons` may add context, but must not contradict the chosen `final_verdict`
- do not invent free-text reason codes; free-text explanation belongs in narrative `why` fields

Required preserved scout blocks:

- `Scout Summary`
- `Full TrustMRR Snapshot`
- `SimilarWeb Enrichment`
- `Derived Heuristics`

Draft specialist sections:

- `Competition`
- `Demand`
- `Monetization`
- `Selection Doctrine`
- `Final Decision`

## Competition Section Contract

The `Competition` section is the normalized decision-grade output owned by `Competitor Scout`.

It must answer:

- whether at least `3` live direct competitors were proven
- whether those competitors are truly direct rather than adjacent
- whether public pricing reality is visible enough to reason about market monetization
- whether the market looks open enough to enter
- whether the section is complete enough for `Research Lead` review

Required normalized blocks:

- `Competition Verdict`
- `Retained Direct Competitors`
- `Excluded Lookalikes`
- `Positioning And Product Summary`
- `Category And Openness`
- `Pricing Reality`
- `Traffic And VOC Summary`
- `Evidence Quality`

Minimum normalized fields:

- `direct_competitor_count`
- `hard_gate_status: pass | fail | inconclusive`
- `one_line_verdict`
- `retained_competitor_evidence_cards`
- `excluded_lookalikes`
- `target_buyer_summary`
- `value_prop_summary`
- `problem_and_jtbd_summary`
- `product_type_summary`
- `workflow_summary`
- `offer_and_cta_summary`
- `proof_and_trust_summary`
- `notable_positioning_differences`
- `category_definition`
- `what_counts_as_direct`
- `pricing_visible_count`
- `pricing_hidden_count`
- `pricing_reality_summary`
- `traffic_market_summary`
- `customer_voice_summary`
- `switching_friction_notes`
- `strongest_competitor_risk`
- `contradictions`
- `unresolved_items`
- `freshness`
- `confidence`
- `artifact_verdict: PASS | RETRY | ESCALATE`
- `content_result: positive | negative | inconclusive`

Competition-section rules:

- every retained direct competitor must have one linked `Competitor Evidence Card`
- directness claims must be supported by official-site evidence, not only discovery output
- the main card must contain a normalized positioning and workflow summary derived from official-site analysis
- `SimilarWeb` should be used for retained competitors whenever the source returns usable data
- review and social sources may be empty, but empty results must be recorded honestly
- excluded lookalikes should be explained briefly, not ignored silently
- contradictions and unresolved items are mandatory when evidence does not align

Competition review rules for `Research Lead`:

- `PASS` means the competition artifact is complete enough to use
- `PASS` does not mean the competition content is favorable
- `RETRY` means the section is too weak, too noisy, or too incomplete to use
- `ESCALATE` means the specialist cannot stabilize the section because tools, evidence, or category boundaries are blocked

Return the section with `RETRY` when:

- direct competitors are asserted without evidence
- retained competitors are obviously adjacent, too broad, or not clearly live
- pricing claims lack official pricing proof or an explicit `pricing hidden` note
- traffic or VOC claims are narrative-only
- ambiguity is being hidden instead of recorded

Use `ESCALATE` when:

- required tools or sources are blocked repeatedly
- evidence remains contradictory after bounded verification
- category boundaries cannot be resolved without a higher-level market decision

## Demand Section Contract

The `Demand` section is the normalized decision-grade output owned by `Demand Validator`.

It must answer:

- whether at least `2` demand classes passed
- whether demand is visible beyond brand-specific competitor chatter
- whether the category shows real usage, search intent, or both
- whether the demand artifact is complete enough for `Research Lead` review

Required normalized blocks:

- `Demand Verdict`
- `Search Demand`
- `Observed Usage Demand`
- `Problem Conversation Demand`
- `Paid Acquisition Reality`
- `Demand Risks And Contradictions`
- `Evidence Quality`

Minimum normalized fields:

- `passed_demand_classes_count`
- `hard_gate_status: pass | fail | inconclusive`
- `one_line_verdict`
- `search_demand_summary`
- `problem_search_queries`
- `category_search_queries`
- `serp_intent_notes`
- `trends_notes`
- `search_signal_strength`
- `usage_demand_summary`
- `reused_competitor_evidence`
- `traffic_validation_sheets`
- `usage_signal_strength`
- `problem_reddit_query_notes`
- `problem_x_query_notes`
- `noise_and_promo_notes`
- `conversation_signal_strength`
- `google_ads_notes`
- `facebook_ads_notes`
- `paid_signal_strength`
- `contradictions`
- `unresolved_items`
- `false_positive_risks`
- `freshness`
- `confidence`
- `artifact_verdict: PASS | RETRY | ESCALATE`
- `content_result: positive | negative | inconclusive`

Demand-section rules:

- competitor `SimilarWeb` must be reused from the competition packet in v1
- competitor brand/domain chatter must be reused from the competition packet in v1
- new collection should focus on problem/category SERP and problem/category discussion
- `Search Demand` uses SERP structure and trend corroboration, not exact search volume
- `Paid Acquisition Reality` is supportive and optional in v1
- demand cannot pass on chatter alone

Demand review rules for `Research Lead`:

- `PASS` means the demand artifact is complete enough to use
- `PASS` does not mean the demand content is favorable
- `RETRY` means the section is too weak, too noisy, or too incomplete to use
- `ESCALATE` means the specialist cannot stabilize the section because tools or evidence are blocked

Return the section with `RETRY` when:

- multiple demand classes are collapsed into one weak source
- search claims rely on volume language without supporting search-volume evidence
- competitor traffic was recollected instead of being reused from the competition packet
- problem/category chatter is mostly promo noise and that noise is not called out
- the section claims demand pass without either `Search Demand` or `Observed Usage Demand`

Use `ESCALATE` when:

- required sources are blocked repeatedly
- a paid layer actor is unusable due runtime or account limits and the decision really depends on paid evidence
- the category is too ambiguous to form stable problem/category queries

## Monetization Section Contract

The `Monetization` section is the normalized decision-grade output owned by `Revenue Validator`.

It must answer:

- whether public pricing reality is visible enough to reason about monetization
- whether the first-payment path is plausible for a v1 venture
- whether the path to `$5k MRR <= 6 months` looks plausible, already achieved, or too fragile
- whether the monetization artifact is complete enough for `Research Lead` review

Required normalized blocks:

- `Monetization Verdict`
- `Current Baseline Snapshot`
- `Market Pricing Reality`
- `Path To First Payment`
- `Scenario Model`
- `Path To $5k MRR`
- `Economics Risks And Caveats`
- `Evidence Quality`

Minimum normalized fields:

- `hard_gate_status: pass | fail | inconclusive`
- `one_line_verdict`
- `reported_mrr`
- `reported_last30_revenue`
- `active_subscriptions`
- `customers`
- `profit_margin_last30d`
- `growth30d`
- `growth_mrr_30d`
- `similarweb_visits_latest`
- `rough_arps`
- `rough_revenue_per_visit`
- `reference_price_band`
- `reference_plan_shapes`
- `pricing_model_summary`
- `recommended_v1_monetization_model`
- `pricing_fit_notes`
- `path_to_first_payment`
- `first_payment_friction`
- `first_payment_verdict`
- `conservative_case_notes`
- `base_case_notes`
- `aggressive_case_notes`
- `current_gap_to_5k`
- `active_paid_required_to_hit_5k`
- `required_net_new_paid_per_month`
- `zero_growth_break_churn_threshold`
- `path_to_5k_verdict`
- `time_to_5k_estimate`
- `assumption_sensitivity`
- `contradictions`
- `unknowns`
- `false_precision_risks`
- `freshness`
- `confidence`
- `artifact_verdict: PASS | RETRY | ESCALATE`
- `content_result: positive | negative | inconclusive`

Monetization-section rules:

- reuse preserved `TrustMRR` and upstream `SimilarWeb` in the `Idea Card`
- if upstream `SimilarWeb` is absent, `TrustMRR` traffic-like fields may be used only as secondary corroboration and must cap confidence
- reuse competition pricing context before collecting new market references
- public pricing and billing surfaces are the primary truth for monetization claims
- clearly label values as `observed`, `inferred`, or `assumed`
- churn and conversion should be expressed as assumptions or ranges unless directly observed
- scenario modeling must not collapse into one fake-precise forecast
- a venture already above `$5k MRR` should still show its safety margin and deterioration risk
- do not invent CAC, LTV, or precise retention curves without sourced evidence

Monetization review rules for `Research Lead`:

- `PASS` means the monetization artifact is complete enough to use
- `PASS` does not mean the monetization content is favorable
- `RETRY` means the section is too weak, too assumption-heavy, or too incomplete to use
- `ESCALATE` means the specialist cannot stabilize the section because the core pricing or baseline evidence is blocked or contradictory

Return the section with `RETRY` when:

- pricing claims are made without direct public pricing proof or an explicit `pricing hidden` note
- scenario math hides churn or conversion assumptions
- assumed churn or conversion is presented as observed fact
- the section claims a plausible `$5k MRR` path without tying it to ARPS, payment path, and retained subscription logic
- baseline metrics are used without stating whether they are observed or inferred

Use `ESCALATE` when:

- public pricing is blocked or contradictory across the retained market set
- preserved source metrics are missing or materially contradictory
- the first-payment path cannot be stabilized without a higher-level product or GTM decision

## Selection Doctrine Section Contract

The `Selection Doctrine` section is the normalized decision-grade synthesis owned by `Research Lead`.

It must convert the shared doctrine from `docs/research/copyable-product-thesis.md` into an explicit per-idea assessment, including structured value-delta analysis.

It must answer:

- whether the candidate passes the shared 11-point venture-selection doctrine
- whether value delta versus status quo is explicit and structured
- whether doctrine-level evidence is complete enough for final research decision
- whether remaining doctrine ambiguity should force `RETRY`, `ESCALATE`, or conservative verdicting

Required normalized blocks:

- `Doctrine Basis`
- `Status Quo And Value Delta`
- `Selection Doctrine Assessment`
- `Doctrine Risks And Contradictions`
- `Evidence Quality`

Minimum normalized fields:

- `doctrine_source`
- `doctrine_version_or_date`
- `doctrine_assessment_owner`
- `current_status_quo_workflow`
- `current_workaround_summary`
- `current_time_costs`
- `current_money_costs`
- `current_risk_costs`
- `current_cognitive_costs`
- `current_emotional_costs`
- `with_product_workflow`
- `expected_time_delta`
- `expected_money_delta`
- `expected_risk_delta`
- `expected_cognitive_delta`
- `expected_emotional_delta`
- `expected_delta_summary`
- `delta_confidence`
- `delta_weaknesses`
- `criterion_1_clear_primary_audience_status: pass | fail | inconclusive`
- `criterion_2_clear_problem_and_jtbd_status: pass | fail | inconclusive`
- `criterion_3_recurring_problem_for_subscription_status: pass | fail | inconclusive`
- `criterion_4_three_live_direct_competitors_status: pass | fail | inconclusive`
- `criterion_5_path_to_5k_mrr_status: pass | fail | inconclusive`
- `criterion_6_paying_audience_exists_status: pass | fail | inconclusive`
- `criterion_7_explicit_value_delta_status: pass | fail | inconclusive`
- `criterion_8_reachable_audience_status: pass | fail | inconclusive`
- `criterion_9_plausible_conversion_story_status: pass | fail | inconclusive`
- `criterion_10_fast_default_path_build_status: pass | fail | inconclusive`
- `criterion_11_non_fatal_switching_friction_status: pass | fail | inconclusive`
- `criterion_1_evidence_refs`
- `criterion_2_evidence_refs`
- `criterion_3_evidence_refs`
- `criterion_4_evidence_refs`
- `criterion_5_evidence_refs`
- `criterion_6_evidence_refs`
- `criterion_7_evidence_refs`
- `criterion_8_evidence_refs`
- `criterion_9_evidence_refs`
- `criterion_10_evidence_refs`
- `criterion_11_evidence_refs`
- `criterion_1_rationale`
- `criterion_2_rationale`
- `criterion_3_rationale`
- `criterion_4_rationale`
- `criterion_5_rationale`
- `criterion_6_rationale`
- `criterion_7_rationale`
- `criterion_8_rationale`
- `criterion_9_rationale`
- `criterion_10_rationale`
- `criterion_11_rationale`
- `doctrine_checklist_pass_count`
- `doctrine_checklist_fail_count`
- `doctrine_checklist_inconclusive_count`
- `doctrine_completion: complete | partial | insufficient`
- `doctrine_verdict: PASS | RETRY | ESCALATE`
- `doctrine_contradictions`
- `doctrine_unresolved_items`
- `doctrine_false_positive_risks`
- `evidence_index`
- `freshness`
- `confidence`

Selection-doctrine rules:

- criterion statuses must be explicit; do not collapse all doctrine conclusions into one prose paragraph
- each doctrine criterion must include evidence references and short rationale
- value delta must be structured as `status quo -> with-product workflow -> expected delta`; prose-only value claims are not acceptable
- value delta should explicitly cover time, money, risk, cognitive load, and emotional load where evidence allows
- conversion must be handled as a plausible conversion story with labeled assumptions and confidence; do not force one global numeric threshold
- if evidence is missing, use `inconclusive` rather than silently treating the criterion as passed

Selection-doctrine review rules for `Research Lead`:

- `PASS` means doctrine assessment is complete enough for final decision use
- `PASS` does not mean the final research verdict must be favorable
- `RETRY` means the doctrine assessment is too incomplete, weak, or ambiguous to support final decision
- `ESCALATE` means the doctrine cannot be stabilized without higher-level policy or market-boundary resolution

Return the section with `RETRY` when:

- value delta is narrative-only and lacks structured status quo versus with-product comparison
- multiple doctrine criteria have no evidence refs or no rationale
- conversion claims are asserted as facts without labeled assumptions
- doctrine checklist counts and criterion statuses do not align

Use `ESCALATE` when:

- doctrine-level evidence is materially contradictory across sections and cannot be reconciled
- policy-sensitive doctrine interpretation is required beyond research authority
- core market definition is too unstable to score the doctrine honestly

Stage-discipline rule:

- `intake_verdict` is the only decision field allowed before specialist work
- allowed intake values are `REJECT | HOLD | RESEARCH`
- `QUEUE | KILL | KILL FOR NOW` are final research verdicts, not intake verdicts
- final research verdicts may be written only after specialist sections and `Selection Doctrine` are complete enough to review
- if specialist sections are incomplete, the final-decision block must stay explicitly pending

Shared-document rule:

- one selected idea gets one canonical `Idea Card`
- specialists update their own section inside that same document
- `Research Lead` owns and updates the `Selection Doctrine` section inside that same document
- supporting evidence cards may exist, but they do not replace the shared idea card
- for competition work, each retained direct competitor may have one linked `Competitor Evidence Card`
- `Research Lead` reviews the sections and issues the final verdict from the same canonical artifact
- `Research Lead` may open and maintain the final-decision block early, but must not populate the final verdict until specialist review is complete

Drafting rule:

- treat the section names and current subsection shape as provisional
- preserve the shared-document model even if later section fields or review phrasing change

## TrustMRR Sourcing Batch

The scouting artifact upstream of the `Idea Card` is the `TrustMRR Sourcing Batch`.

Required metadata:

- `batch_id`
- `source_platform`
- `capture_date`
- `sourcing_brief`
- `pages_checked`
- `filters_checked`
- `duplicates_skipped`
- `search_stop_reason`
- `candidate_count`
- `tools_used`

Each candidate row must include:

- `Scout Summary`
- `Full TrustMRR Snapshot`
- `SimilarWeb Enrichment`
- `Derived Heuristics`

`Scout Summary` fields:

- `product_name`
- `trustmrr_slug`
- `product_url`
- `trustmrr_source_url`
- `recommended_next_step: review | skip`
- `one_line_hypothesis`
- `why_this_might_fit`
- `obvious_red_flags`
- `duplicate_note`

`Full TrustMRR Snapshot` fields:

- `name`
- `slug`
- `url`
- `icon`
- `description`
- `website`
- `country`
- `foundedDate`
- `category`
- `paymentProvider`
- `targetAudience`
- `revenue.last30Days`
- `revenue.mrr`
- `revenue.total`
- `customers`
- `activeSubscriptions`
- `askingPrice`
- `profitMarginLast30Days`
- `growth30d`
- `growthMRR30d`
- `multiple`
- `rank`
- `visitorsLast30Days`
- `googleSearchImpressionsLast30Days`
- `revenuePerVisitor`
- `onSale`
- `firstListedForSaleAt`
- `xHandle`
- `xFollowerCount`
- `isMerchantOfRecord`
- `techStack`
- `cofounders`

`SimilarWeb Enrichment` fields:

- `similarweb_site_name`
- `similarweb_snapshot_date`
- `similarweb_visits_latest`
- `similarweb_visits_history`
- `traffic_sources`
- `top_country_shares`
- `global_rank`
- `country_rank`
- `category_rank`
- `top_keywords`
- `similar_sites`
- `ai_traffic_total_visits`
- `ai_traffic_top_sources`
- `similarweb_confidence`

`Derived Heuristics` fields:

- `has_live_website`
- `has_subscription_signal`
- `traffic_confidence`
- `trustmrr_to_similarweb_visit_gap`
- `rough_mrr_per_active_subscription`
- `rough_mrr_per_trustmrr_visit`
- `rough_mrr_per_similarweb_visit`
- `rough_business_shape`
- `api_data_completeness`

Rule:

- the sourcing batch is for shortlist review only
- it does not replace the canonical `Idea Card`
- `Research Lead` decides which row becomes an `Idea Card`
- if no candidate survives shortlist review, `Research Lead` requests a new sourcing batch
- all useful raw fields returned by the TrustMRR detail endpoint must be preserved in the sourcing batch
- SimilarWeb enrichment is a bounded normalized subset, not a raw actor dump
- raw fields and derived heuristics must stay separate
- for traffic interpretation in `Idea Scout` v1, `SimilarWeb` is the primary source of truth
- `TrustMRR` traffic-like fields remain preserved as secondary corroboration only

## Domain Enrichment Snapshot

This is the normalized contract for domain-level traffic enrichment.

Core fields:

- `domain`
- `provider`
- `snapshot_date`
- `monthly_visits`
- `monthly_visits_history`
- `country_mix`
- `channel_mix`
- `top_keywords`
- `similar_sites`
- `global_rank`
- `country_rank`
- `category_rank`
- `ai_traffic_total_visits`
- `ai_traffic_top_sources`
- `confidence`

Appendix rule:

- provider-specific extras may exist, but only in appendix fields outside the core schema
- the core schema must stay stable even if the provider changes later
- in v1 the provider is Apify running `pro100chok/similarweb-scraper`
- in `Idea Scout` v1, this enrichment is the primary traffic layer whenever SimilarWeb returns a usable result

## Competitor Evidence Card

This is the retained-competitor appendix artifact used by `Competitor Scout`.

Purpose:

- keep the main idea card readable
- preserve raw multi-source evidence per retained competitor
- make later review and re-checks possible without re-running every source

Required normalized blocks:

- `Competitor Summary`
- `Official Site And Pricing Summary`
- `SimilarWeb Summary`
- `Trustpilot Summary`
- `Reddit Summary`
- `X Summary`
- `Open Issues`

Required raw appendices:

- `SimilarWeb Raw Appendix`
- `Trustpilot Raw Appendix`
- `Reddit Raw Appendix`
- `X Raw Appendix`

Required metadata:

- `competitor_name`
- `competitor_domain`
- `classification: direct | adjacent | substitute | excluded`
- `discovery_sources`
- `queries_used`
- `capture_date`
- `freshness`
- `confidence`

Site-analysis rule:

- official-site analysis must be bounded to homepage, pricing, product/workflow, and at most two use-case pages
- HTML-first extraction is the default mode
- browser rendering is a fallback only when pricing, CTA path, workflow, or value proposition remain unresolved
- normalized site-analysis conclusions belong in `Official Site And Pricing Summary`
- raw page snippets or capture notes may be preserved as appendix material when needed, but raw HTML should not be dumped into the shared idea card

Rule:

- the main idea card should link to competitor evidence cards through an evidence index
- raw appendices live in the evidence card, not in the shared idea card body

## Artifact Verdict

`Artifact Verdict` is used only for handoff quality.

Allowed values:

- `PASS`
- `RETRY`
- `ESCALATE`

Meaning:

- `PASS`: the next owner can work from the artifact alone
- `RETRY`: the artifact is incomplete or low-quality but salvageable with a targeted rework pass
- `ESCALATE`: the artifact cannot be safely resolved inside the current lane without a higher-order decision

`FAIL` is not the default research handoff term. Use the more precise distinction between artifact quality and content result.

## Content Result

`Content Result` is used only for the meaning of the research output.

Allowed values:

- `positive`
- `negative`
- `inconclusive`

Meaning:

- `positive`: the evidence currently supports moving forward
- `negative`: the evidence currently supports rejection or sharp de-prioritization
- `inconclusive`: the evidence remains too weak or contradictory for a clean directional call

A `negative` content result may still come with an `Artifact Verdict` of `PASS`.

## Incident Classification

Every research incident must be classified first.

Allowed values:

- `runtime`
- `semantic`

Routing rule:

- `runtime` incidents go to the runtime/tool reliability owner
- `semantic` incidents go to the research semantic owner

## Research Handoff Rule

Within research:

- handoff quality uses `Artifact Verdict`
- research meaning uses `Content Result`
- negative findings are acceptable when the artifact is strong
- retry is for weak artifacts, not for disliked conclusions
- if the next owner cannot act from the artifact alone, the handoff is incomplete
- in Research v1, the canonical artifact is the per-idea `Idea Card`, not a separate synthesizer package
