---
name: research-competitor-discovery
description: Use when identifying direct competitors for NoHum research and you need a repeatable discovery sequence, directness test, and evidence card.
---

# Research Competitor Discovery

Use this skill before final competitor analysis and before any category is treated as real.

## Purpose

Build a direct competitor map that can survive Gate A review.

In v1, the primary discovery tool is `OpenRouter -> perplexity/sonar-pro-search` with web search enabled.

This search layer does not close the competition verdict by itself. It only builds the first retained set that must then be verified through:

- official product pages
- official pricing pages
- bounded site-analysis extraction
- SimilarWeb enrichment
- review and social evidence when useful

Main-card rule:

- the canonical idea card stores normalized competition conclusions only
- raw multi-source evidence for each retained competitor lives in a linked `Competitor Evidence Card`
- do not dump raw actor output into the main idea card

## Required Secrets

- `OPENROUTER_API_KEY`
- `APIFY_TOKEN`

Do not write either secret into repo files or durable notes.

## Discovery Stack

Use this order:

1. `OpenRouter -> perplexity/sonar-pro-search` for exact-match direct competitor discovery
2. official product and pricing pages for product truth
3. bounded site-analysis extraction for messaging, workflow, pricing, and CTA path
4. `SimilarWeb` for similar sites and traffic verification
4. `Trustpilot`, `Reddit`, and `X` for customer-voice validation on retained competitors

Actor mapping for v1:

- `SimilarWeb`: `pro100chok/similarweb-scraper`
- `Trustpilot`: `memo23/trustpilot-scraper-ppe`
- `Reddit`: `trudax/reddit-scraper-lite`
- `X`: `danek/twitter-scraper-ppr`

Source-of-truth rule:

- `Perplexity` is the discovery source, not the final authority
- official sites and pricing pages are primary truth for positioning and monetization claims
- official site analysis is primary truth for messaging, workflow, CTA, and page-structure interpretation
- `SimilarWeb` is primary truth for traffic, channels, countries, keywords, and similar-site interpretation
- review and social surfaces are primary truth for voice-of-customer patterns

If `Perplexity` says a company is direct but the official site contradicts that, the official site wins.

## Discovery Sequence

1. Lock the candidate's buyer, job, trigger, and product type from the canonical idea card.
2. Run the exact-match discovery prompt through `perplexity/sonar-pro-search`.
3. Collect a candidate pool larger than the final retained set.
4. Classify each as `direct`, `adjacent`, `substitute`, `service`, `platform`, or `dead`.
5. Keep only live direct competitors in the retained set.
6. Run bounded site analysis on each retained competitor.
7. Verify each retained competitor through SimilarWeb.
8. Add customer-voice checks for the strongest retained competitors.
9. Write the normalized `Competition` section into the idea card and link one `Competitor Evidence Card` per retained competitor.

## Directness Test

A competitor is direct only if most of these are true:

- same buyer or near-identical buyer
- same core workflow or job
- similar self-serve or SMB payment motion
- similar price neighborhood or plan structure
- product is live today

If it solves a different job, requires a different buying motion, or mainly acts as an agency/service, it is not direct.

## Exact-Match Search Standard

Use this definition when prompting `Perplexity`:

- same ICP / audience
- same main pain point
- same core use case
- same product type
- same moment of usage
- same expected user outcome
- same level of abstraction

Strict rule:

- if unsure, exclude
- if it only matches the category, exclude
- if it only matches the buyer, exclude
- if it only matches the product shape but not the job, exclude
- if it is "partially similar", exclude

Keep only `exact-match substitutes`.

Model-output guardrail:

- treat the model output as a candidate set, not as a trusted final list
- if the model includes any competitor below `90`, drop it from the retained set
- if the model cannot support `TOP-5` with `score >= 90`, keep fewer than five
- if the model mixes weak candidates into the final list, record that as a discovery-quality issue and continue with the surviving retained set only

Retention rule:

- discovery may return zero to five retained competitors
- deep verification should usually stop at `TOP-5`
- VOC checks should usually stop at the strongest `TOP-3` to `TOP-5`

## Site-Analysis Contract

Site analysis exists to recover `product truth`, `workflow truth`, `pricing truth`, and `conversion-surface truth`.

It does not exist to critique visuals or brand aesthetics.

Use a bounded page set:

1. homepage
2. pricing page
3. product / features / how-it-works page
4. up to two high-signal use-case pages if needed

Default mode:

- `HTML-first structured extraction`

Fallback mode:

- `browser-rendered extraction`

Only use browser fallback when one of these remains unresolved after HTML extraction:

- pricing visibility
- primary CTA path
- core workflow
- value proposition

Required extraction fields:

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

Runnable command:

```bash
python3 scripts/competitor_site_analysis.py https://lockedinai.com --pretty
```

Browser prerequisite:

```bash
python3 -m pip install --user playwright
python3 -m playwright install chromium
```

Interpretation rule:

- use `final.fields` as the merged site-analysis output
- use `html_first.unresolved_fields` to explain why fallback was needed
- if fallback fails, record the exact error in the `Site Analysis Appendix`

HTML-first extraction should try to recover these from:

- `title`
- `meta description`
- `h1-h3`
- nav labels
- visible CTA labels
- pricing cards
- FAQ blocks
- testimonial or review blocks
- comparison or feature sections

Do not dump full page text into the main card.
Summarize the conclusions in the evidence card and preserve raw snippets only as appendix material when needed.

## Preferred Discovery Prompt

Use this prompt shape for the first-pass direct competitor search.

Substitute the domain and source-product details from the canonical idea card.

```text
Твоя задача: по входному домену находить только direct competitors 1-в-1.

Ищи не "похожие продукты", не "альтернативы по категории" и не "adjacent tools".
Нужны только те сервисы, которые максимально совпадают с исходным продуктом по:

1. ICP / целевой аудитории,
2. основной проблеме,
3. core use case,
4. формату продукта,
5. моменту использования,
6. expected outcome для пользователя.

Определение direct competitor 1-в-1:
Сервис считается конкурентом только если пользователь реально выбирает его вместо исходного продукта в одном и том же сценарии.
Если продукт просто находится рядом в категории, но решает немного другую задачу, ориентирован на другую аудиторию или имеет другой формат использования — исключай.

Сначала сделай анализ исходного домена:
- Что именно продает продукт?
- Для кого он сделан?
- Какую конкретную боль снимает?
- Какой у него основной job-to-be-done?
- В какой момент пользователь идет именно в этот продукт?
- Чем именно продукт является: standalone SaaS, plugin, extension, API, platform, marketplace, agency tool, infrastructure layer и т.д.

После этого ищи кандидатов и применяй строгий фильтр.

Включай продукт в финальный список только если совпадает:
- тот же ICP;
- та же главная боль;
- тот же сценарий использования;
- тот же тип продукта;
- та же ценность для пользователя;
- тот же уровень abstraction.

Исключай без компромиссов:
- broad platforms;
- adjacent tools;
- indirect competitors;
- complementary tools;
- marketplaces;
- directories;
- review sites;
- agencies;
- generic AI tools;
- enterprise suites, если исходный продукт нишевый;
- niche tools, если исходный продукт широкий;
- продукты с другой ЦА;
- продукты с другой основной задачей;
- продукты с похожей технологией, но другим outcome.

Правила строгости:
- Если не уверен — исключай.
- Если совпадение только по категории, но не по problem/use case — исключай.
- Если совпадение только по аудитории, но не по продукту — исключай.
- Если совпадение только по продукту, но не по ICP — исключай.
- Если сервис можно назвать "частично похожим", он не подходит.
- Нужны только exact-match substitutes.

Система оценки:
100 = практически тот же продукт для той же аудитории и той же задачи.
90–99 = очень близкий прямой конкурент.
80–89 = близкий, но уже не 1-в-1.
Ниже 90 не включай в финальный список.

Формат ответа:
1. One-line summary исходного продукта:
   - ICP
   - pain point
   - core use case
   - product type

2. Final list:
   Верни только TOP-5 direct competitors с score >= 90.

Для каждого:
- Name
- Domain
- ICP match
- Problem match
- Product match
- Why this is a 1:1 competitor
- Confidence score (0–100)
- Evidence URLs
- Pricing URL if found
- Verification status: verified | partial | weak
- What is still unverified

3. Excluded:
   Укажи 5 кандидатов, которые кажутся похожими, но не проходят фильтр exact-match.
   Для каждого коротко напиши, что именно не совпало:
   - ICP mismatch
   - problem mismatch
   - product mismatch
   - workflow mismatch
   - too broad
   - too adjacent

Главное правило:
Лучше вернуть 0–2 результата, чем добавить хотя бы один неточный.
Никогда не подменяй direct competitors на "similar companies".
```

## OpenRouter Request Example

Endpoint:

- `POST https://openrouter.ai/api/v1/chat/completions`

Model:

- `perplexity/sonar-pro-search`

Headers:

- `Authorization: Bearer $OPENROUTER_API_KEY`
- `Content-Type: application/json`
- optional: `HTTP-Referer` and `X-Title`

Example:

```bash
curl -sS https://openrouter.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $OPENROUTER_API_KEY" \
  -H "Content-Type: application/json" \
  -H "HTTP-Referer: https://localhost" \
  -H "X-Title: NoHum Studio" \
  -d '{
    "model": "perplexity/sonar-pro-search",
    "messages": [
      {
        "role": "user",
        "content": "INPUT DOMAIN: https://capgo.app\n\n[use the full Preferred Discovery Prompt here]"
      }
    ]
  }'
```

Note:

- live testing requires `OPENROUTER_API_KEY` to be present in the environment
- the live v1 request works through normal `chat/completions`; do not assume a separate plugin payload is required unless OpenRouter changes behavior
- if the key is missing, document the exact request surface but do not claim the discovery path was tested

## SimilarWeb Enrichment Surface

Endpoint:

- `POST https://api.apify.com/v2/acts/pro100chok~similarweb-scraper/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Required input shape:

```json
{
  "domains": ["lockedinai.com"],
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": ["RESIDENTIAL"]
  }
}
```

Required normalized output:

- `similarweb_visits_latest`
- `similarweb_visits_history`
- `traffic_sources`
- `top_country_shares`
- `top_keywords`
- `similar_sites`
- `global_rank`
- `country_rank`
- `category_rank`

## Trustpilot VOC Surface

Endpoint:

- `POST https://api.apify.com/v2/acts/memo23~trustpilot-scraper-ppe/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Required input shape:

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

Notes:

- the actor expects `startUrls` as objects with `url`, not plain strings
- young products often return zero rows because no Trustpilot profile exists
- zero Trustpilot results are evidence, not an execution failure

Required normalized output:

- `trustpilot_review_count`
- `trustpilot_score`
- `trustpilot_rating_distribution`
- `trustpilot_recent_positive_themes`
- `trustpilot_recent_negative_themes`
- `trustpilot_company_metadata`
- `trustpilot_raw_count`

## Reddit VOC Surface

Endpoint:

- `POST https://api.apify.com/v2/acts/trudax~reddit-scraper-lite/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Required input shape:

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

Query rules:

- run separate searches for exact product name and exact domain
- prefer quoted brand and quoted domain queries over broad boolean soup
- keep posts and comments together, then filter for genuinely relevant mentions
- if the actor returns noisy off-topic matches, record the noise and tighten the query rather than pretending the VOC layer is clean

Required normalized output:

- `reddit_relevant_mentions_count`
- `reddit_positive_themes`
- `reddit_negative_themes`
- `reddit_ethics_or_trust_issues`
- `reddit_notable_threads`
- `reddit_noise_notes`

## X VOC Surface

Endpoint:

- `POST https://api.apify.com/v2/acts/danek~twitter-scraper-ppr/run-sync-get-dataset-items?token=$APIFY_TOKEN&timeout=120`

Required input shape:

```json
{
  "query": "\"lockedin ai\"",
  "search_type": "Top",
  "max_posts": 20
}
```

Query rules:

- start with exact quoted domain or exact quoted brand
- if the brand is generic, prefer exact domain first
- use X only as a market-chatter layer, not as proof that the product works

Required normalized output:

- `x_relevant_mentions_count`
- `x_message_hooks`
- `x_creator_or_affiliate_patterns`
- `x_negative_reactions`
- `x_notable_posts`

## Minimum Output

For every retained direct competitor, capture:

- competitor name
- product URL
- pricing URL or pricing visibility note
- target buyer
- core workflow
- why it is direct
- switching friction
- freshness
- confidence
- evidence URLs
- `verification_status: verified | partial | weak`
- `what_is_still_unverified`
- SimilarWeb summary
- Trustpilot summary or explicit zero-results note
- Reddit summary
- X summary
- evidence-card path or durable reference

Discovery output must include:

- one-line summary of the source product
- `TOP-5` retained direct competitors
- `5` excluded near-matches with exclusion reason

Post-filter rule:

- the final retained set used by `Competitor Scout` may contain `0..5` competitors
- never pad the retained set with candidates below the strict threshold just to hit five

Accepted exclusion reasons:

- `ICP mismatch`
- `problem mismatch`
- `product mismatch`
- `workflow mismatch`
- `too broad`
- `too adjacent`
- `service-heavy`
- `enterprise-heavy`

## Stop Conditions

- if fewer than `3` live direct competitors remain, the category does not pass cleanly
- if only adjacent or enterprise-heavy competitors exist, mark the category as weak or exception-path
- if the market appears empty, verify that this is not just poor search quality before claiming a white space
- do not keep more than `5` retained direct competitors in the deep verification pass unless `Research Lead` explicitly asks for a broader map

## Required Artifact

Publish one competitor evidence card per retained competitor and a short category summary:

- crowded / open / unclear
- lock-in level
- visible pricing quality
- likely wedge for NoHum

Each `Competitor Evidence Card` must contain:

- normalized summary at the top
- raw `SimilarWeb` appendix
- raw `Trustpilot` appendix
- raw `Reddit` appendix
- raw `X` appendix
- query strings, source URLs, capture dates, and freshness notes

## Smoke-Test Expectations

Minimum live-test proof for this skill:

- `OpenRouter -> perplexity/sonar-pro-search` returns a retained competitor set
- `SimilarWeb` returns traffic data for at least one retained competitor
- `Trustpilot` either returns review data or a clean zero-results response
- `Reddit` returns search results, even if noisy
- `X` returns search results for an exact quoted domain or brand query
