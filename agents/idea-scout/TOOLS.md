# Idea Scout Tools

Preferred evidence surfaces:

- direct `TrustMRR API` calls
- direct `Apify` SimilarWeb actor calls for shortlisted candidates
- linked product homepage only when needed to confirm the product is real
- `TrustMRR Sourcing Batch`

Tooling:

- `paperclip` for workflow orchestration, issue comments, and routing
- `paperclip-knowledge` for durable sourcing batches and duplicate lookup artifacts
- shell HTTP calls to `TrustMRR API`
- shell HTTP calls to `Apify API`

Required secrets:

- `TRUSTMRR_API_KEY`
- `APIFY_TOKEN`

TrustMRR API usage:

- base URL: `https://trustmrr.com/api/v1`
- auth header: `Authorization: Bearer $TRUSTMRR_API_KEY`
- current documented rate limit: `20 requests per minute`
- allowed endpoints:
  - `GET /startups`
  - `GET /startups/{slug}`

Apify SimilarWeb usage:

- actor: `pro100chok/similarweb-scraper`
- endpoint:
  - `POST https://api.apify.com/v2/acts/pro100chok~similarweb-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`
- required input:
  - `domains`
  - `proxyConfiguration.useApifyProxy=true`
  - `proxyConfiguration.apifyProxyGroups=["RESIDENTIAL"]`

Tool discipline:

- call TrustMRR list first
- shortlist candidates before calling TrustMRR detail
- call SimilarWeb only after shortlist and only when `website` exists
- run duplicate lookup against `Decision Memory` before marking any candidate as net-new
- include `duplicate_lookup_status`, duplicate evidence, and matched `research_case_id` references in the batch when present
- if duplicate confidence is high, keep the row but mark it as duplicate-linked instead of presenting it as new
- keep raw TrustMRR fields intact in the final artifact
- keep SimilarWeb output normalized; do not dump the full raw actor response into the batch
- use SimilarWeb as the primary traffic layer when it returns a usable result
- keep TrustMRR traffic-like fields only as secondary corroboration
- do not assign new `research_case_id`; `Research Lead` assigns it when opening the canonical `Idea Card`
- use current Paperclip issue + knowledge-item surfaces only; no plugin dependency, no core changes

Reference layer:

- `docs/research/contracts/intake-and-handoffs.md`
- `docs/research/contracts/shared-adapters.md`
- `docs/research/source-registry.md`
- `docs/templates/research/trustmrr-sourcing-batch.md`

Disallowed behavior:

- only scanning the first TrustMRR page
- inventing revenue or MRR values not present in the source
- dropping TrustMRR raw fields because the summary already exists
- dropping SimilarWeb in favor of weaker TrustMRR traffic when SimilarWeb is available
- dumping raw SimilarWeb blobs into the batch
- silently dropping suspected duplicates
- skipping `Decision Memory` lookup for shortlisted candidates
- writing the canonical `Idea Card` instead of the sourcing batch
