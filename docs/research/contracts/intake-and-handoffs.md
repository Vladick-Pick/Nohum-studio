# Research Intake and Handoff Contracts

This document narrows the generic company handoff language for the research module.

Inside research, artifact quality and research meaning are separate concepts. Do not overload one field to carry both.

## TrustMRR Intake Card

The canonical per-idea research artifact for revenue-visible raw leads is the `TrustMRR Intake Card`.

It is not just an intake stub. In Research v1 it is the shared document that survives from shortlist selection through final research decision.

Draft status:

- the shared-document workflow is active
- the exact specialist section schema and review language below are a working draft
- they should be refined later when each specialist agent is fully worked through

Structure:

1. intake normalization
2. preserved scout data blocks
3. specialist sections
4. final research decision

Required fields:

- `venture_id`
- `source_url`
- `capture_date`
- `source_platform`
- `product_name`
- `product_url`
- `site_domain`
- `reported_revenue_or_mrr`
- `one_line_problem`
- `likely_icp`
- `offer_type`
- `pricing_visibility`
- `proof_product_is_live`
- `monetization_hint`
- `demand_hint`
- `default_path_fit_concerns`
- `duplicate_check`
- `strongest_direct_source`
- `corroborating_sources`
- `open_questions_for_specialists`
- `intake_verdict: REJECT | RESEARCH | HOLD`

Notes:

- `reported_revenue_or_mrr` stores the source-reported value exactly as observed. Do not silently normalize away uncertainty.
- `pricing_visibility` is one of `visible`, `hidden`, or `fallback-derived`.
- `duplicate_check` must make clear whether this lead matches an existing candidate under another name or URL.

Required preserved scout blocks:

- `Scout Summary`
- `Full TrustMRR Snapshot`
- `SimilarWeb Enrichment`
- `Derived Heuristics`

Draft specialist sections:

- `Competition`
- `Demand`
- `Monetization`
- `Final Decision`

Stage-discipline rule:

- `intake_verdict` is the only decision field allowed before specialist work
- allowed intake values are `REJECT | HOLD | RESEARCH`
- `QUEUE | KILL | KILL FOR NOW` are final research verdicts, not intake verdicts
- final research verdicts may be written only after specialist sections are complete enough to review
- if specialist sections are incomplete, the final-decision block must stay explicitly pending

Shared-document rule:

- one selected idea gets one canonical intake card
- specialists update their own section inside that same document
- supporting evidence cards may exist, but they do not replace the shared idea card
- for competition work, each retained direct competitor may have one linked `Competitor Evidence Card`
- `Research Lead` reviews the sections and issues the final verdict from the same canonical artifact
- `Research Lead` may open and maintain the final-decision block early, but must not populate the final verdict until specialist review is complete

Drafting rule:

- treat the section names and current subsection shape as provisional
- preserve the shared-document model even if later section fields or review phrasing change

## TrustMRR Sourcing Batch

The scouting artifact upstream of the intake card is the `TrustMRR Sourcing Batch`.

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
- it does not replace the canonical intake card
- `Research Lead` decides which row becomes an intake card
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
- in Research v1, the canonical artifact is the per-idea intake card, not a separate synthesizer package
