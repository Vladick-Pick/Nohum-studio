# Competitor Scout Multi-Source Enrichment v1

## Goal

Extend `Competitor Scout` from discovery-only work to a repeatable multi-source verification stack:

- `OpenRouter -> perplexity/sonar-pro-search` for exact-match discovery
- `SimilarWeb` for traffic truth
- `Trustpilot` for review truth when available
- `Reddit` for public customer chatter
- `X` for message-hook and creator-chatter signals

## Workflow

1. Discover retained direct competitors through `Perplexity`.
2. Verify product and pricing on official sites.
3. Enrich traffic through `SimilarWeb`.
4. Run bounded VOC checks through:
   - `Trustpilot`
   - `Reddit`
   - `X`
5. Write normalized competition conclusions into the shared idea card.
6. Store raw source outputs in linked `Competitor Evidence Card` appendices.

## Smoke Test Findings

### OpenRouter

- `perplexity/sonar-pro-search` worked through normal `chat/completions`
- strict prompt on `jobbridge.io` returned a usable retained set
- model still needs agent-side post-filtering and verification

### SimilarWeb

- `pro100chok/similarweb-scraper` returned usable traffic data for:
  - `jobbridge.io`
  - `lockedinai.com`
- `lockedinai.com` returned meaningful `similarSites`, which is useful as a secondary competitor-discovery surface

### Trustpilot

- `memo23/trustpilot-scraper-ppe` requires `startUrls` as objects with `url`
- zero-result response on a young product is clean and usable
- positive proof run on `wise.com` returned rich review and company metadata

### Reddit

- `trudax/reddit-scraper-lite` accepts:
  - `searches`
  - `searchPosts`
  - `searchComments`
  - `sort`
  - `time`
  - `maxItems`
  - `proxy`
- actor works, but search quality can be noisy; exact quoted brand/domain queries are required

### X

- `danek/twitter-scraper-ppr` accepts:
  - `query`
  - `search_type`
  - `max_posts`
- exact quoted domain queries returned relevant public chatter for `jobbridge.io`

## v1 Rule

Treat `Trustpilot`, `Reddit`, and `X` as bounded VOC layers, not as endless search surfaces.

If a source is empty or noisy:

- preserve that as evidence
- record the query used
- do not silently invent a clean story
