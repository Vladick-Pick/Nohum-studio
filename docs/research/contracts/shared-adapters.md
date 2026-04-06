# Shared Research Adapters

This document freezes the shared research substrate as contracts, not as hidden logic inside individual agents.

The adapter names here are interface names. Implementation details may evolve later without reopening the research operating model.

## `trustmrr_sourcing_adapter`

Purpose:

- traverse TrustMRR as the v1 sourcing universe
- extract revenue-visible leads
- support one-batch-many-candidates normalization

Contracted capabilities:

- direct `TrustMRR API` operation, not browser-only browsing
- allowed endpoints:
  - `GET https://trustmrr.com/api/v1/startups`
  - `GET https://trustmrr.com/api/v1/startups/{slug}`
- traversal across pages, not only the first page
- bounded pagination and depth policy
- filter iteration policy where filters are available
- detail hydration for shortlisted `slug`s
- lead extraction into sourcing-batch-ready inputs
- duplicate detection against already known candidates
- sourcing-batch assembly inputs for the `TrustMRR Sourcing Batch`

Current State:

- execution sits with `Idea Scout`

Target State:

- `Idea Scout` remains the primary consumer for top-of-funnel TrustMRR sourcing

## `domain_enrichment_adapter`

Purpose:

- normalize domain-level traffic evidence into a stable research shape

Contracted capabilities:

- direct actor operation through `Apify API`
- actor for v1: `pro100chok/similarweb-scraper`
- input contract:
  - `domains`
  - `proxyConfiguration.useApifyProxy`
  - `proxyConfiguration.apifyProxyGroups=["RESIDENTIAL"]`
- domain to traffic snapshot
- country mix
- channel mix
- top keywords
- similar sites
- visit history
- rank surfaces
- AI-referral surfaces where available
- normalized confidence capture

Provider policy:

- initial provider for v1 is Apify/SimilarWeb
- the contract is provider-neutral so the backend can change later without rewriting research reasoning

Primary consumers:

- current state: `Research Lead` and specialists as needed
- target state: `Research Lead` and specialists remain the semantic owners of enrichment usage
- `Idea Scout` may call this adapter in v1 only for bounded shortlist enrichment on candidates with a live website

## `site_pricing_parser`

Purpose:

- turn a product surface into normalized product and pricing evidence

Contracted capabilities:

- homepage summary
- pricing surface discovery
- plan extraction when visible
- `pricing_visibility` classification as `visible`, `hidden`, or `fallback-derived`

Usage rule:

- this parser supports research evidence collection
- it does not replace direct source judgment by the consuming agent

## Ownership

- `Research Lead` owns research semantic substrate quality and contract evolution
- `Agent Mechanic` owns runtime and tool reliability for the substrate
- specialist agents consume the substrate and report incidents
- `Idea Scout` is the primary consumer of `trustmrr_sourcing_adapter`

## Incident Routing

Classify incidents before routing:

- `runtime`: auth failure, provider outage, timeout, malformed raw response, tool invocation breakage
- `semantic`: wrong field mapping, broken duplicate logic, bad pricing classification, misleading normalization

Reporting rule:

- specialists report incidents; they do not silently redefine shared substrate contracts inside their own prompts
