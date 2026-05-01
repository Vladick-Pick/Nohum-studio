# Research Source Adapter Registry

Source adapters define how Research may collect market signals before Gate A.

The outputs of these adapters feed sourcing batches and `Idea Card` intake. They
do not create product bets directly.

## TrustMRR

- `source`: `trustmrr`
- `skill`: `trustmrr-market-signal-source`
- `access`: `TRUSTMRR_API_KEY`
- `mode`: automated API if access exists
- `blocked_state`: `MISSING_ACCESS`
- `confidence`: revenue-backed Tier A source
- `owner`: `Idea Scout`

## Product Hunt

- `source`: `product_hunt`
- `skill`: `product-hunt-market-signal-source`
- `access`: `PRODUCT_HUNT_TOKEN`
- `approval`: commercial-use approval
- `mode`: API only when token and approval exist
- `fallback`: URL intake for explicitly provided URLs
- `blocked_state`: `MISSING_ACCESS` or `APPROVAL_REQUIRED`
- `confidence`: attention-backed Tier B source
- `owner`: `Idea Scout` or `Research Lead`

## GitHub

- `source`: `github`
- `skill`: `github-market-signal-source`
- `access`: optional `GITHUB_TOKEN`
- `mode`: public search, API, provided URL
- `blocked_state`: `MISSING_ACCESS` when rate limits block useful collection
- `confidence`: developer-interest and product-pattern signal
- `owner`: `Idea Scout` or `Research Lead`

## Marketplaces

- `source`: `marketplace`
- `skill`: `marketplace-market-signal-source`
- `access`: source-specific
- `mode`: provided URL, search, browser, extract
- `blocked_state`: `BLOCKED_BY_POLICY` when source terms disallow automation
- `owner`: `Idea Scout` or `Research Lead`

## Community Search

- `source`: `community_search`
- `skill`: `community-search-market-signal-source`
- `access`: optional search/browser tooling
- `mode`: search, provided URL, browser
- `blocked_state`: `BLOCKED_BY_POLICY` when community rules disallow automation
- `owner`: `Demand Validator` or `Research Lead`
