# Idea Scout Tools

Preferred evidence surfaces:

- direct `TrustMRR API` calls
- direct `Apify` SimilarWeb actor calls for shortlisted candidates
- linked product homepage only when needed to confirm the product is real
- `TrustMRR Sourcing Batch`

Tooling:

- `paperclip` for workflow orchestration
- `paperclip-knowledge` for durable sourcing batches
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
- keep raw TrustMRR fields intact in the final artifact
- keep SimilarWeb output normalized; do not dump the full raw actor response into the batch
- use SimilarWeb as the primary traffic layer when it returns a usable result
- keep TrustMRR traffic-like fields only as secondary corroboration

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
- writing the canonical `Idea Card` instead of the sourcing batch
