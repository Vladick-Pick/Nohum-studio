# Demand Validator Tools

Preferred signal evidence:

- reused competitor usage and adoption indicators from `Competitor Scout`
- search and discovery intent indicators
- problem/category conversation indicators
- optional paid-acquisition indicators
- `Traffic Validation Sheet`
- `Evidence Gap Log` when a source class is missing

Tooling:

- `paperclip` for issue and status updates
- `paperclip-knowledge` for durable demand packets
- Apify-first source collection and source citation workflow
- optional analytics read only when a concrete datasource exists

Required runtime secret:

- `APIFY_TOKEN`

## Reuse-First Rule

Do not recollect what `Competitor Scout` already owns.

Reuse from the competition packet:

- competitor `SimilarWeb`
- competitor brand/domain Reddit
- competitor brand/domain X
- competitor review signals
- competitor positioning and site context

Do not rerun competitor `SimilarWeb` in v1. If the traffic packet is stale or contradictory, route the refresh back through `Competitor Scout` or `Research Lead`.

## Demand Source Stack

Use this order:

1. reused competition packet for `Observed Usage Demand`
2. `apify/google-search-scraper` for SERP intent and discovery surface
3. `apify/google-trends-scraper` for relative trend corroboration
4. `trudax/reddit-scraper-lite` for problem/category discussion
5. `danek/twitter-scraper-ppr` for problem/category chatter and message hooks
6. optional paid layer:
   - `dz_omar/google-ads-scraper`
   - `dz_omar/facebook-ads-scraper-pro`

## Demand Classes

Validate four classes:

- `Search Demand`
- `Observed Usage Demand`
- `Problem Conversation Demand`
- `Paid Acquisition Reality`

Hard-gate rule:

- at least `2` demand classes must pass
- at least one passed class must be either `Search Demand` or `Observed Usage Demand`
- chatter alone does not pass the demand gate

## Search Demand Surface

Primary source:

- `apify/google-search-scraper`

Tested input shape:

```json
{
  "queries": "ai interview assistant",
  "countryCode": "us",
  "languageCode": "en",
  "maxPagesPerQuery": 1,
  "resultsPerPage": 10,
  "mobileResults": false,
  "includeUnfilteredResults": false,
  "saveHtml": false,
  "saveHtmlToKeyValueStore": false
}
```

Interpretation rules:

- use SERP to detect solution-seeking intent, not exact search volume
- look at `organicResults`, `paidResults`, `relatedQueries`, and visible community results
- product/category SERP plus related queries can support `Search Demand`
- zero ads is not fatal by itself

## Google Trends Surface

Secondary corroboration source:

- `apify/google-trends-scraper`

Validated schema clues from live input checks:

- `searchTerms` accepts an array
- `geo` accepts a string like `US`
- `timeRange` accepts only:
  - `""`
  - `now 1-H`
  - `now 4-H`
  - `now 1-d`
  - `now 7-d`
  - `today 1-m`
  - `today 3-m`
  - `today 5-y`
  - `all`

Use this source as optional or slow-lane corroboration.
Do not block the whole demand section on a slow sync run.

## Problem Conversation Surfaces

Use the same actors already present in the competitor stack, but change the query layer.

Reddit:

- actor: `trudax/reddit-scraper-lite`
- use problem/category queries, not competitor-brand queries

Tested input shape:

```json
{
  "searches": ["\"ai interview assistant\"", "\"real time interview help\""],
  "searchPosts": true,
  "searchComments": true,
  "maxItems": 10,
  "sort": "relevance",
  "time": "year",
  "proxy": {
    "useApifyProxy": true
  }
}
```

X:

- actor: `danek/twitter-scraper-ppr`
- use problem/category queries, not competitor-brand queries

Tested input shape:

```json
{
  "query": "\"ai interview assistant\"",
  "search_type": "Top",
  "max_posts": 10
}
```

Interpretation rules:

- prefer genuine user questions, complaints, or comparisons
- creator-promo noise must be called out explicitly
- a noisy result set does not count as a passed class

## Paid Acquisition Reality

Optional corroboration only.

Google Ads:

- actor: `dz_omar/google-ads-scraper`
- validated input constraints:
  - `searchTargets` is an array
  - `resultsPerQuery` must be `>= 10`
- current account caveat: broad live runs may fail on Apify memory-limit exhaustion

Facebook Ads:

- actor: `dz_omar/facebook-ads-scraper-pro`
- tested input shape:

```json
{
  "searchQueries": ["ai interview assistant"],
  "maxResultsPerQuery": 10,
  "countries": "US",
  "activeStatus": "ALL"
}
```

Interpretation rules:

- use paid data to show observable advertiser behavior, not exact category size
- broad irrelevant advertisers should be counted as noise, not as demand proof
- paid proof is supportive; it is not required for a demand pass in v1

Minimum documentation standard:

- each signal class has at least one evidence link
- each evidence line includes confidence and freshness
- reused competition evidence must cite the upstream evidence card or competition block it came from

Reference layer:

- `docs/research/source-registry.md`
- `docs/research/traffic-interpretation-bands.md`
- `docs/research/evidence-fallback-matrix.md`
- `docs/templates/research/traffic-validation-sheet.md`
- `docs/templates/research/evidence-gap-log.md`

Disallowed behavior:

- collapsing multiple classes into one weak source
- stale links marked as fresh
- unsupported claims like "demand is obvious"
- rerunning competitor traffic collection just because the result is low
- treating SERP snapshots as exact search volume
