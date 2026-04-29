---
name: research-trustmrr-sourcing
description: Use when sourcing new venture candidates from TrustMRR for NoHum before Research Lead selects which raw leads deserve intake.
---

# Research TrustMRR Sourcing

Use this skill when `Research Lead` asks for fresh candidate discovery from TrustMRR.

## Purpose

Turn a bounded `TrustMRR API` search into one normalized sourcing batch that `Research Lead` can review quickly.

The sourcing goal is not "interesting startups". The sourcing goal is candidates that already look like `copyable default-path software products` under `docs/research/copyable-product-thesis.md`.

## Scope Boundary

In v1, TrustMRR is the only sourcing universe for this role.

This skill does not replace the canonical `Idea Card`. It only produces a scouting batch for shortlist review.

`SimilarWeb` enrichment through Apify is allowed only as a bounded strengthening layer for shortlisted candidates with a live website.

Traffic policy:

- `TrustMRR` remains primary for startup and monetization fields
- `SimilarWeb` is primary for traffic, channel mix, country mix, keyword layer, and traffic-derived heuristics
- `TrustMRR` traffic-like fields remain preserved as secondary corroboration only

## Required Secrets

- `TRUSTMRR_API_KEY`
- `APIFY_TOKEN` when running SimilarWeb enrichment

Do not write either secret into repo files or persistent notes.

## Direct Tool Usage

### TrustMRR API

Base URL:

- `https://trustmrr.com/api/v1`

Allowed endpoints:

- `GET /startups`
- `GET /startups/{slug}`

Auth header:

- `Authorization: Bearer $TRUSTMRR_API_KEY`

Rate limit reminder:

- `TrustMRR API` docs currently state `20 requests per minute`

Example list call:

```bash
curl -sS \
  -H "Authorization: Bearer $TRUSTMRR_API_KEY" \
  "https://trustmrr.com/api/v1/startups?page=1&limit=50"
```

Example detail call:

```bash
curl -sS \
  -H "Authorization: Bearer $TRUSTMRR_API_KEY" \
  "https://trustmrr.com/api/v1/startups/capgo"
```

### SimilarWeb Through Apify

Actor:

- `pro100chok/similarweb-scraper`

Endpoint:

- `POST https://api.apify.com/v2/acts/pro100chok~similarweb-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Required input shape:

```json
{
  "domains": ["capgo.app"],
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": ["RESIDENTIAL"]
  }
}
```

Use SimilarWeb only after TrustMRR has already produced a shortlist candidate with a real `website`.

## Run Order

1. Confirm the sourcing brief and any explicit exclusions.
2. Call `GET /startups` across bounded pages and bounded filter slices.
3. Build a shortlist from raw list rows.
4. Hydrate each shortlisted candidate with `GET /startups/{slug}`.
5. Enrich shortlisted candidates with SimilarWeb only when `website` is present and the candidate still looks worth review.
6. Screen obvious duplicates and obvious non-fit leads.
7. Publish one `TrustMRR Sourcing Batch`.

## Candidate Row Fields

Each candidate row should include:

- `Scout Summary`
- `Full TrustMRR Snapshot`
- `SimilarWeb Enrichment`
- `Derived Heuristics`

Do not compress the row into summary-only prose. Preserve the useful raw TrustMRR fields.

## Traversal Rules

- do not stop at the first page
- record which pages and filter slices were actually checked
- prefer breadth over deep browsing at this step
- shortlist from list results first, then hydrate by `slug`
- do not call SimilarWeb for obvious `skip` candidates
- respect TrustMRR rate limits and avoid wasteful repeated calls for the same `slug`
- if SimilarWeb returns a usable result, use it as the source of truth for traffic interpretation

## Screening Rules

Mark obvious non-fit cases for `skip` when any of these is true:

- no real product surface
- obvious service or agency model
- obvious marketplace or platform complexity outside NoHum default path
- obvious enterprise-heavy procurement requirement
- obvious duplicate of an already known candidate

Also downgrade or skip candidates when the business shape obviously conflicts with the copyable-product thesis even if the revenue signal is real:

- too broad to ship as a tight default-path product
- value appears to live mainly in manual service
- acquisition appears to require expensive or enterprise-heavy motion
- the buyer or job remains too ambiguous even after TrustMRR detail hydration

Do not pretend a weak lead is strong just to fill the batch.

## Output Contract

The sourcing batch must include:

- `batch_id`
- `source_platform: TrustMRR`
- `capture_date`
- `sourcing_brief`
- `pages_checked`
- `filters_checked`
- `duplicates_skipped`
- `search_stop_reason`
- `candidate_count`
- `tools_used`
- normalized candidate rows with:
  - short scout summary
  - full raw TrustMRR snapshot
  - bounded SimilarWeb enrichment
  - separately derived heuristics

When both TrustMRR and SimilarWeb provide traffic-like numbers:

- keep both in the artifact
- treat SimilarWeb as primary in summaries and heuristics
- mark TrustMRR traffic as corroboration, not source of truth

If `Research Lead` cannot tell what was searched and why each candidate survived first-pass screening, the sourcing batch is incomplete.
