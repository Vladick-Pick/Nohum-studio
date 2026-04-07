# Revenue Validator LLM Gateway Smoke Test

**Date:** 2026-04-07

## Objective

Run one real `Revenue Validator` pass on a smaller candidate:

- live `TrustMRR` baseline
- live `SimilarWeb` via Apify
- public pricing truth from the product site
- one direct public pricing anchor from the adjacent market
- scenario model with explicit caveats

## Candidate

- `LLM Gateway`
- website: `https://llmgateway.io`
- category: `Artificial Intelligence`
- target audience: `B2B`

## Sources Used

### Live baseline from TrustMRR

- `MRR`: `$358`
- `last30 revenue`: `$69,046.15`
- `customers`: `0`
- `activeSubscriptions`: `2`
- `growth30d`: `-10.02%`
- `growthMRR30d`: `+1134.48%`
- `visitorsLast30Days`: `null`
- `revenuePerVisitor`: `null`

### Live traffic from SimilarWeb

- latest visits: `40.3k`
- latest snapshot month: `2026-03`
- traffic mix:
  - `Direct`: `37.45%`
  - `Search`: `31.59%`
  - `Social`: `20.65%`
  - `Referrals`: `8.84%`
- top keyword: `llm gateway`

### Public pricing truth

From `https://llmgateway.io/pricing`:

- `Free`
- `$0`
- `5% on credit usage`
- `Pay per token + 5% fee`
- `Start free with no credit card`

### Public market anchor

From `https://openrouter.ai/pricing`:

- `Platform Fees`
- `5.5%`
- `No minimum spend`
- `1M free reqs/month, 5% fee after`

This is not a full competition packet. It is only a monetization anchor showing that the surrounding market also uses a low-friction usage-fee model.

## First-Payment Reading

`LLM Gateway` exposes a very low-friction first-payment path:

- free entry
- no credit card required
- pay-as-you-go token billing
- transparent usage fee language

This is a strong positive signal for first payment.

## Baseline Calculations

- `rough_arps = 358 / 2 = $179`
- `rough_revenue_per_visit = 358 / 40303 ≈ $0.0089`
- `active paid required to hit $5k at observed ARPS = 5000 / 179 ≈ 27.9`
- additional active paid required from the current baseline: `~25.9`

## Critical Contradictions

This candidate is a good smoke test precisely because the baseline is internally unstable:

- `MRR` is only `$358`
- `activeSubscriptions` is only `2`
- but `last30 revenue` is `~$69k`
- and `customers` is reported as `0`

That means the public monetization path is clear, but the preserved business metrics do not line up cleanly enough to treat `ARPS` as strong truth.

## Scenario Construction

The scenario model uses:

- live SimilarWeb visits as the traffic anchor
- public usage-fee pricing as the monetization model
- observed ARPS only as a weak starting anchor
- explicit churn assumptions because retention is not observed

Required gross new paid per month to reach the `$5k` threshold by month 6:

- at `6%` monthly churn: `~5.2`
- at `8%` monthly churn: `~5.5`
- at `12%` monthly churn: `~6.1`

That implies visitor-to-new-paid conversion in a very low range:

- `0.0129%` to `0.0151%`

## Scenario Results

### Conservative

- effective ARPS: `$149`
- visitor to new paid assumption: `0.01%`
- monthly churn assumption: `12%`
- gross new paid / month: `~4.0`
- month-1 net new paid: `~3.8`
- six-month active paid projection: `~18.9`
- six-month MRR projection: `~$2.8k`

### Base

- effective ARPS: `$179`
- visitor to new paid assumption: `0.02%`
- monthly churn assumption: `8%`
- gross new paid / month: `~8.1`
- month-1 net new paid: `~7.9`
- six-month active paid projection: `~40.9`
- six-month MRR projection: `~$7.3k`

### Aggressive

- effective ARPS: `$199`
- visitor to new paid assumption: `0.035%`
- monthly churn assumption: `6%`
- gross new paid / month: `~14.1`
- month-1 net new paid: `~14.0`
- six-month active paid projection: `~74.3`
- six-month MRR projection: `~$14.8k`

## Proposed Monetization Section Output

```md
## Monetization Section

- owner: `Revenue Validator`

- `Monetization Verdict`
  - hard-gate status: `inconclusive`
  - one-line verdict: `The first-payment path looks strong and the $5k target appears reachable under reasonable traffic assumptions, but the preserved baseline metrics are internally inconsistent enough that monetization confidence must stay capped.`

- `Current Baseline Snapshot`
  - reported mrr: `$358`
  - reported last30 revenue: `$69,046.15`
  - active subscriptions: `2`
  - customers: `0`
  - profit margin last30d: `unknown`
  - growth30d: `-10.02%`
  - growth mrr 30d: `+1134.48%`
  - similarweb visits latest: `40.3k`
  - rough arps: `$179`
  - rough revenue per visit: `$0.0089`

- `Market Pricing Reality`
  - reference price band: `free entry + 5%-5.5% usage fee`
  - reference plan shapes: `usage-based gateway pricing with no-card free start`
  - pricing model summary: `This market can monetize through low-friction pay-as-you-go fees rather than classic seat subscriptions.`
  - recommended v1 monetization model: `usage-based fee with free entry`
  - pricing fit notes: `The product pricing matches a real market pattern, but the preserved MRR/subscription baseline does not map cleanly onto that model.`

- `Path To First Payment`
  - path to first payment: `free sign-up -> usage starts -> usage fee billed`
  - first payment friction: `low`
  - first payment verdict: `strong`

- `Scenario Model`
  - `Conservative`
    - effective arps: `$149`
    - visitor to new paid assumption: `0.01%`
    - monthly churn assumption: `12%`
    - gross new paid / month: `~4.0`
    - month-1 net new paid: `~3.8`
    - six-month active paid projection: `~18.9`
    - six-month mrr projection: `~$2.8k`
  - `Base`
    - effective arps: `$179`
    - visitor to new paid assumption: `0.02%`
    - monthly churn assumption: `8%`
    - gross new paid / month: `~8.1`
    - month-1 net new paid: `~7.9`
    - six-month active paid projection: `~40.9`
    - six-month mrr projection: `~$7.3k`
  - `Aggressive`
    - effective arps: `$199`
    - visitor to new paid assumption: `0.035%`
    - monthly churn assumption: `6%`
    - gross new paid / month: `~14.1`
    - month-1 net new paid: `~14.0`
    - six-month active paid projection: `~74.3`
    - six-month mrr projection: `~$14.8k`

- `Path To $5k MRR`
  - current gap to $5k: `~$4.64k`
  - active paid required to hit $5k: `~27.9`
  - required net new paid / month: `roughly 4-6 depending on churn`
  - zero-growth break churn threshold: `not meaningful at this low baseline`
  - path to $5k verdict: `plausible but fragile`
  - time to $5k estimate: `4-6 months in base case`

- `Economics Risks And Caveats`
  - assumption sensitivity: `Very high`
  - contradictions: `MRR, last30 revenue, subscriptions, and customer count do not align cleanly`
  - unknowns: `Actual billing mix and what TrustMRR counts as a subscription`
  - false precision risks: `ARPS is weak because it is derived from only 2 reported active subscriptions`

- freshness: `2026-04-07`
- confidence: `low-to-medium`
- artifact verdict: `PASS`
- content result: `inconclusive`
```

## Outcome

This smaller-case smoke test shows the intended behavior of the upgraded `Revenue Validator`:

- it can recognize a strong first-payment path
- it can still model a plausible `$5k MRR` path
- and it can refuse to overstate confidence when the baseline economics are internally inconsistent
