# Research And Product Bet Tool Access Matrix

| Tool/source | Secret/access | Phase | Action |
|---|---|---|---|
| TrustMRR | `TRUSTMRR_API_KEY` | Research | source intake by `Idea Scout` |
| Apify SimilarWeb | `APIFY_TOKEN` | Research | enrichment for shortlisted candidates |
| Product Hunt | `PRODUCT_HUNT_TOKEN` plus commercial-use approval | Research | automated only when approved, otherwise blocked |
| GitHub | optional `GITHUB_TOKEN` | Research or Product Bet | public search/API when configured and policy-allowed |
| Firecrawl | `FIRECRAWL_API_KEY` | Research or Product Bet | web extraction when configured and allowed |
| Playwright | local/runtime browser | Product Bet | browser checks and landing QA when available |
| Obscura | experimental browser runtime | Product Bet | optional competitor/onboarding automation only after smoke test |
| Hacker News Algolia | no key | Product Bet | HN thread discovery and thread scoring |
| Reddit public search | no key or approved scraper | Product Bet | community prospecting; posting requires approval |
| Directories/marketplaces | account may be required | Product Bet | discovery and draft submissions; publish requires approval |
| Validation surface preview/publication | static preview or approved hosting path | Product Bet | public publication requires approval |
| Analytics | Plausible or PostHog access | Product Bet | required before interpreting live tests |

## Execution States

- `READY`: access exists and policy allows the action
- `MISSING_ACCESS`: required secret/account/tool is absent
- `APPROVAL_REQUIRED`: human or board approval is required
- `BLOCKED_BY_POLICY`: action is forbidden by current policy

Agents must return these states explicitly. They must not silently skip missing
access.

## Phase Rule

Research tools may create source batches, evidence, and `Idea Card` sections.
They must not create Product Bet Validation artifacts before Gate A.

Product Bet tools may create product definition, revisions/forks, landing and
waitlist surfaces, organic traffic attempts, observation-window reports, and
validation evidence artifacts only after Gate A opens product validation.

## Product Bet Agent Tooling

| Agent | Default tools/access | Writes |
|---|---|---|
| `launch-lead` | Paperclip tasks/knowledge, Product Bet docs | Gate A context, sufficiency review, Gate B packet |
| `product-bet-compiler` | Paperclip, knowledge, Product Bet templates | product identity, audience, product shape, validation risk map |
| `competitor-deep-dive-analyst` | browser/Playwright, screenshots/snapshots, public web, optional Obscura after smoke test | competitor deep dive block and pack |
| `economics-modeler` | spreadsheet-style calculations, public pricing refs | financial model block |
| `offer-positioning-strategist` | competitor pages, Product Bet context | offer, USP, objections |
| `organic-traffic-strategist` | search, HN Algolia, Reddit/community research, directories, browser | pain language map, community prospecting, traffic attempts, traffic source report |
| `pre-market-autoreasoner` | internal model calls/subroles only | autoreason report, revisions, forks |
| `landing-surface-builder` | static surface drafts, browser QA when available | landing design, waitlist form spec, surface version, surface QA |
| `product-bet-measurement-specialist` | analytics setup/read access when approved | measurement plan, observation window |
| `evidence-router` | Paperclip, knowledge | validation evidence events, validation cycle report, Gate B recommendation |
