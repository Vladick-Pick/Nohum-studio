# Product Bet Tool Cost Registry

This registry records the current cost model for tools that Product Bet
Validation may use after Gate A.

It is a cost-awareness artifact, not a spend approval. Gate A still owns the
test budget envelope through `max_test_budget_cents`, and agents must record
actual Product Bet validation costs in `validation_evidence_event.metric.cost_cents`.

Pricing changes. Reverify the source URL before a spend-bearing live run.

```yaml
registry:
  owner: launch-lead
  phase: post_gate_a_product_bet_validation
  pricing_last_verified_at: 2026-05-11
  currency: USD
```

## Spend Rules

- No spend-bearing Product Bet action may run outside Gate A constraints.
- Public validation surface publication requires explicit approval.
- Paid traffic is not part of the default Product Bet validation kernel.
- Payment collection is forbidden pre-Gate-B unless separately approved.
- `MISSING_ACCESS`, `APPROVAL_REQUIRED`, and `BLOCKED_BY_POLICY` must be
  recorded as execution states, not as weak market signals.
- Vendor pricing must be rechecked before a live run that could materially
  consume the approved test budget.

## Cost Surfaces

| Tool | Product Bet owner | Approved Product Bet use | Cost model to budget | Evidence cost field | Source |
|---|---|---|---|---|---|
| Paperclip | all Product Bet agents | task state, comments, approvals, knowledge artifacts | company/runtime platform cost, not per validation signal | usually `0` unless runtime billing exposes an incremental run cost | internal runtime |
| Host-managed `codex_local` model auth | all Product Bet agents | reasoning, drafting, internal critique, orchestration | agent runtime budget; no provider key stored in company secrets | usually `0` unless runtime exposes per-run allocation | host-managed |
| Brave Search API | Launch Lead, Organic Traffic Strategist, Competitor Deep Dive Analyst | bounded search, channel discovery, unresolved market/channel checks | Search API: listed as `$5 / 1,000` requests; Answers API has separate request and token pricing | record estimated request cost when used for a validation signal | https://brave.com/search/api/ |
| OpenRouter Sonar Pro Search | Pre-Market Autoreasoner or competitor/search workflows only when approved | web-search assisted reasoning or competitor discovery when explicitly routed | listed as `$3 / 1M` input tokens, `$15 / 1M` output tokens, plus `$18 / 1,000` requests | record request and token estimate when used | https://openrouter.ai/perplexity/sonar-pro-search |
| Firecrawl | Competitor Deep Dive Analyst, Organic Traffic Strategist, Landing Surface Builder | approved extraction of public pages when browser/manual extraction is insufficient | listed free credits plus credit-based page operations; exact plan must be checked before run | record consumed credits converted to cents when known | https://www.firecrawl.dev/pricing |
| Apify actors | Competitor Deep Dive Analyst, Organic Traffic Strategist, Research-adjacent refresh only when approved | SimilarWeb, Reddit/X/community, review, or search actors when configured | actor, proxy, compute, storage, and transfer costs vary; run a small test and inspect usage | record actor run cost or estimated usage cost | https://apify.com/pricing |
| Playwright / browser QA | Competitor Deep Dive Analyst, Landing Surface Builder, Measurement Specialist | local browser checks, onboarding inspection when allowed, surface QA | local/runtime cost; no direct API spend | `0` unless external browser runtime billing exists | local/runtime |
| Obscura-style browser automation | Competitor Deep Dive Analyst | experimental competitor/onboarding automation after smoke test and explicit approval | unknown/experimental; must be budgeted before use | record approved run cost | runtime-specific |
| Hacker News Algolia | Organic Traffic Strategist | HN thread discovery and scoring | no key in current registry; no direct API cost expected | `0` | https://hn.algolia.com/api |
| Reddit public search/pages | Organic Traffic Strategist | community prospecting and thread scoring | public browsing is no direct API cost; approved scraper/account path may cost separately | `0` for public browsing; scraper cost if used | source-specific |
| GitHub public search/API | Organic Traffic Strategist | public repo/marketplace/community signal discovery when relevant | no direct cost expected with public search; tokened API is optional | `0` unless external API billing exists | https://docs.github.com/ |
| Directories and marketplaces | Organic Traffic Strategist | discovery and draft submissions; public submission only when approved | variable; paid placement is not default Product Bet validation | record listing/submission cost when approved | source-specific |
| Static preview / local surface | Landing Surface Builder | draft validation surface and QA | local/runtime cost; no direct public hosting spend | `0` | runtime-specific |
| Public validation surface hosting | Landing Surface Builder, Launch Lead approval | approved public landing/waitlist surface | provider-specific; must fit Gate A test budget | record hosting or deployment cost when incremental | hosting-specific |
| Plausible Analytics | Product Bet Measurement Specialist, Evidence Router | analytics setup/read for live validation | subscription by pageview tier; use current company plan or approved incremental cost | `0` if covered by existing plan; otherwise allocated cents | https://plausible.io/pricing |
| PostHog Analytics | Product Bet Measurement Specialist, Evidence Router | analytics alternative only when configured and approved | plan and event-volume pricing varies; reverify before use | allocated cents or `0` if covered | https://posthog.com/pricing |
| Lava.top | Launch Lead / later payment path only | not used for default pre-Gate-B waitlist validation; payment collection is forbidden unless separately approved | provider/payment fees only relevant after approved payment test or build | not a Product Bet waitlist cost by default | provider-specific |
| Resend | Landing Surface Builder or later ops only if approved | waitlist confirmation only when approved | plan/email-volume pricing varies; usually not needed for default pre-Gate-B signal | allocated cents when used | https://resend.com/pricing |

## Per-Run Cost Record

Every spend-bearing or budget-relevant Product Bet run should record:

```yaml
tool_cost_record:
  product_bet_id:
  product_bet_revision_ref:
  surface_version_ref:
  traffic_attempt_ref:
  validation_evidence_event_ref:
  tool:
  owner:
  purpose:
  approved_budget_ref:
  approval_ref:
  pricing_verified_at:
  pricing_source_url:
  unit:
  units_used:
  estimated_cost_cents:
  actual_cost_cents:
  billing_status: estimated | actual | included_in_existing_plan | blocked
  notes:
```

## Budget Interpretation

- `included_in_existing_plan` does not mean the tool is free; it means this
  validation cycle did not create a separately attributable marginal cost.
- If a tool cost cannot be estimated, the agent must return `APPROVAL_REQUIRED`
  before using it for a live run.
- If a source requires paid placement, fake traction, or policy-unsafe access,
  route to `BLOCKED_BY_POLICY` rather than spending.
