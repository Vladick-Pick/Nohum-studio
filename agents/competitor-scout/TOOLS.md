# Competitor Scout Tools

Preferred evidence surfaces:

- `OpenRouter -> perplexity/sonar-pro-search` with web search for exact-match competitor discovery
- `pro100chok/similarweb-scraper` via Apify for traffic, channel, country, keyword, and similar-site enrichment
- official competitor product pages
- official competitor pricing pages
- bounded official-site extraction across homepage, pricing, and product/workflow pages
- `memo23/trustpilot-scraper-ppe` via Apify for Trustpilot review extraction
- `trudax/reddit-scraper-lite` via Apify for Reddit search by exact product name and exact domain
- `danek/twitter-scraper-ppr` via Apify for X search by exact product name and exact domain
- trusted public benchmark pages for category context
- `Competitor Evidence Card`

Tooling:

- `paperclip` for workflow updates
- `paperclip-knowledge` for durable competitor packets
- web research and source citation workflow

Required runtime secrets:

- `OPENROUTER_API_KEY`
- `APIFY_TOKEN`

## Source Hierarchy

Use this order of truth:

1. `Perplexity/sonar-pro-search` for discovery only
2. official site and pricing pages for product truth
3. bounded official-site extraction for messaging, workflow, pricing, and CTA truth
4. `SimilarWeb` for traffic truth
5. reviews and social surfaces for customer-voice truth

Storage rule:

- the shared idea card stores only normalized competition conclusions
- every retained direct competitor gets one linked `Competitor Evidence Card`
- raw actor output belongs in that evidence card, not in the main idea card

Never let a `Perplexity` discovery claim override contradictory evidence on the official product site.

## Official Site Analysis Surface

Use a bounded site-analysis pass on each retained competitor.

Target pages:

- homepage
- pricing page
- product / features / how-it-works page
- up to two use-case pages when they materially clarify buyer or workflow

Default extraction mode:

- standard HTTP fetch
- HTML parsing
- structured extraction from visible document content

Fallback mode:

- browser-rendered extraction only if HTML-first leaves pricing, CTA path, workflow, or value proposition unresolved

Runnable local tool:

- `python3 scripts/competitor_site_analysis.py <competitor-homepage-url> --pretty`

Browser prerequisite for fallback mode:

- `python3 -m pip install --user playwright`
- `python3 -m playwright install chromium`

Required outputs:

- `value_proposition`
- `target_buyer`
- `problem_solved`
- `jtbd_hypothesis`
- `product_type`
- `expected_outcome`
- `how_it_works_summary`
- `core_steps`
- `moment_of_use`
- `pricing_visibility`
- `plans_found`
- `billing_model`
- `free_trial_or_free_plan`
- `cta_to_first_payment`
- `hero_message`
- `primary_cta`
- `secondary_cta`
- `proof_blocks`
- `faq_or_objection_handling`
- `page_structure_notes`

Structured HTML extraction should prefer:

- `title`
- `meta description`
- `h1-h3`
- nav labels
- CTA buttons and links
- pricing cards
- FAQ sections
- testimonial and proof blocks
- feature and comparison sections

Do not turn this layer into a visual design audit.
Capture offer structure and conversion path, not aesthetics.

Expected script behavior:

- `html_first.fields` contains the first-pass structured extraction
- `html_first.unresolved_fields` lists the exact fields still missing
- `browser_fallback.used` tells whether browser recovery actually ran
- `browser_fallback.fields` contains only the recovery layer
- `final.fields` is the merged output that should feed the `Competitor Evidence Card`

## OpenRouter Discovery Surface

Endpoint:

- `https://openrouter.ai/api/v1/chat/completions`

Model:

- `perplexity/sonar-pro-search`

Expected mode:

- web search available through the model
- strict direct-competitor filtering
- retained set size: `TOP-5`

Minimal input from the canonical idea card:

- `product_name`
- `product_url`
- `site_domain`
- `one_line_problem`
- `likely_icp`
- `offer_type`
- `path_to_first_payment_hypothesis`

Expected output from discovery:

- source-product summary
- `TOP-5` retained direct competitors
- `5` excluded lookalikes
- evidence URLs
- pricing URLs when found
- confidence score
- verification status
- unresolved ambiguities

Use the strict exact-match discovery prompt from:

- `skills/research-competitor-discovery/SKILL.md`

## SimilarWeb Verification Surface

Use `pro100chok/similarweb-scraper` through Apify to enrich each retained competitor with:

- latest visits
- visits history
- channel mix
- country mix
- top keywords
- similar sites
- rank surfaces

Request surface:

- `POST https://api.apify.com/v2/acts/pro100chok~similarweb-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Expected input:

```json
{
  "domains": ["lockedinai.com"],
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": ["RESIDENTIAL"]
  }
}
```

Deep verification should usually stop at `5` retained competitors unless `Research Lead` asks for a wider market map.

## Trustpilot VOC Surface

Use `memo23/trustpilot-scraper-ppe` through Apify to check whether a retained competitor has public Trustpilot evidence.

Request surface:

- `POST https://api.apify.com/v2/acts/memo23~trustpilot-scraper-ppe/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Expected input:

```json
{
  "startUrls": [
    {
      "url": "https://www.trustpilot.com/review/lockedinai.com"
    }
  ],
  "scrapeAllReviews": true,
  "includeCompanyDetails": true,
  "includeStats": true,
  "maxItems": 20
}
```

Interpretation rules:

- the actor expects `startUrls` as objects with `url`, not plain strings
- if the actor returns reviews, summarize score, distribution, and recurring themes
- if the actor returns zero rows, record `no public Trustpilot profile found`
- do not fabricate review sentiment when Trustpilot is empty

## Reddit VOC Surface

Use `trudax/reddit-scraper-lite` through Apify for product-name and domain search.

Request surface:

- `POST https://api.apify.com/v2/acts/trudax~reddit-scraper-lite/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Expected input:

```json
{
  "searches": [
    "\"LockedIn AI\"",
    "\"lockedinai.com\""
  ],
  "searchPosts": true,
  "searchComments": true,
  "maxItems": 20,
  "sort": "relevance",
  "time": "year",
  "proxy": {
    "useApifyProxy": true
  }
}
```

Interpretation rules:

- search exact quoted product name and exact quoted domain as separate queries
- combine posts and comments, then filter for genuinely relevant mentions
- if search quality is noisy, record that explicitly in `reddit_noise_notes`
- do not treat generic career or job-board chatter as product VOC

## X VOC Surface

Use `danek/twitter-scraper-ppr` through Apify for market chatter and message-hook discovery.

Request surface:

- `POST https://api.apify.com/v2/acts/danek~twitter-scraper-ppr/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Expected input:

```json
{
  "query": "\"lockedin ai\"",
  "search_type": "Top",
  "max_posts": 20
}
```

Interpretation rules:

- start with exact quoted domain or exact quoted brand
- if the brand is generic, prefer exact domain first
- use X as a chatter layer for hooks, creators, and objections
- do not treat X alone as proof of directness or market quality

## Live Test Procedure

1. Confirm `OPENROUTER_API_KEY` is present.
2. Run one exact-match discovery request through `perplexity/sonar-pro-search`.
3. Keep only `TOP-5` retained direct competitors.
4. Verify each retained competitor through:
   - official site
   - pricing page
   - bounded site analysis
   - SimilarWeb
5. Run VOC checks only on the strongest retained competitors:
   - `Trustpilot`
   - `Reddit`
   - `X`
6. Write normalized conclusions into the idea card and store raw source outputs in linked `Competitor Evidence Card` appendices.

If `OPENROUTER_API_KEY` is missing, the discovery path is not live-testable from this environment.

Reference layer:

- `docs/research/source-registry.md`
- `docs/templates/research/competitor-evidence-card.md`

Disallowed behavior:

- treating old cached snapshots as current pricing
- passing indirect competitors as direct alternatives
- inventing pricing when pricing is hidden
- treating `Perplexity` output as final proof without verification
