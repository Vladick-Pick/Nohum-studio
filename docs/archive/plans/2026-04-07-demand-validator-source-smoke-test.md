# Demand Validator Source Smoke Test

## Problem Space

- test theme: `ai interview assistant`

## Google Search Results Scraper

Source:

- `apify/google-search-scraper`

Tested input:

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

Observed result:

- actor returned a valid SERP snapshot
- `organicResults` included:
  - `lockedinai.com`
  - `linkjob.ai`
  - Reddit discussion results
- `relatedQueries` included:
  - `real-time ai interview assistant free`
  - `ai interview assistant real-time`
  - `ai interview assistant reddit`
- `paidResults` were empty for this query

Interpretation:

- the actor is good for SERP intent and query expansion
- this is not search-volume truth

## Google Trends Scraper

Source:

- `apify/google-trends-scraper`

Validated input clues:

- `searchTerms` accepts an array
- `geo` accepts a string like `US`
- `timeRange` rejects unsupported values and accepts only:
  - `""`
  - `now 1-H`
  - `now 4-H`
  - `now 1-d`
  - `now 7-d`
  - `today 1-m`
  - `today 3-m`
  - `today 5-y`
  - `all`

Observed caveat:

- sync runs were too slow or unstable for this session

Interpretation:

- treat this source as optional or slow-lane corroboration in v1
- do not block the whole demand section on this actor

## Reddit Problem-Level Search

Source:

- `trudax/reddit-scraper-lite`

Tested input:

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

Observed result:

- actor returned `11` items
- useful signal included:
  - user asking whether AI interview assistants are worth paying for
  - replies warning about detectability and ethics

Interpretation:

- good for problem/category discussion
- query layer must stay problem-level, not competitor-brand level

## X Problem-Level Search

Source:

- `danek/twitter-scraper-ppr`

Tested input:

```json
{
  "query": "\"ai interview assistant\"",
  "search_type": "Top",
  "max_posts": 10
}
```

Observed result:

- actor returned `19` items
- most visible signal was creator or product-promo chatter

Interpretation:

- usable for message-hook discovery
- noisy for genuine demand on its own
- must be marked as noisy when promo-heavy

## Google Ads Scraper

Source:

- `dz_omar/google-ads-scraper`

Validated input clues:

- `searchTargets` accepts an array
- `resultsPerQuery` must be `>= 10`

Observed caveat:

- broad live runs hit Apify account memory-limit exhaustion in this session

Interpretation:

- keep this source optional in v1
- do not make demand pass depend on it

## Facebook Ads Scraper Pro

Source:

- `dz_omar/facebook-ads-scraper-pro`

Tested input:

```json
{
  "searchQueries": ["ai interview assistant"],
  "maxResultsPerQuery": 10,
  "countries": "US",
  "activeStatus": "ALL"
}
```

Observed result:

- actor returned results successfully
- returned ads were broad and partly irrelevant to the niche query

Interpretation:

- usable as optional paid-surface evidence
- noisy broad matches must be counted as noise, not as demand proof
