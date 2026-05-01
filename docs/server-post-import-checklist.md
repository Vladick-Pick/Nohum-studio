# Server Post-Import Checklist

## 1. Day-1 Identity Check

- confirm exactly these root-import agent slugs are present or upgraded:
  - `ceo`
  - `chief-of-staff`
  - `agent-mechanic`
  - `research-lead`
  - `idea-scout`
  - `competitor-scout`
  - `demand-validator`
  - `revenue-validator`
  - `launch-lead`
- confirm no duplicates were created for day-1 slugs
- confirm no Product Bet, Build, GTM, or Support specialist was imported from the root package

## 2. Reporting Line Check

- `Chief of Staff -> CEO`
- `Agent Mechanic -> Chief of Staff`
- `Research Lead -> CEO`
- `Idea Scout -> Research Lead`
- `Competitor Scout -> Research Lead`
- `Demand Validator -> Research Lead`
- `Revenue Validator -> Research Lead`
- `Launch Lead -> CEO`

## 3. Activation State Check

- `CEO` may run bootstrap and governance tasks
- `Research Lead` stays paused until access/secrets task is complete
- `Idea Scout`, `Competitor Scout`, `Demand Validator`, and `Revenue Validator`
  stay paused until Research Lead opens assigned work
- `Launch Lead` stays in boundary-owner mode until Gate A opens Product Bet Definition
- `Chief of Staff` and `Agent Mechanic` stay limited to bootstrap/support work

## 4. Company Secrets and Runtime Wiring Check

### 4.1 Canonical Source Of Truth

- create and rotate secrets in `Paperclip Company Secrets`, not in the repo and not in comments
- keep secret CRUD board-only
- bind agent-facing values through `secret_ref`
- treat provider env vars as runtime copies, not canonical origin

### 4.2 Day-1 Research Secret Set

- `Idea Scout` -> `TRUSTMRR_API_KEY`, `APIFY_TOKEN`
- `Competitor Scout` -> `APIFY_TOKEN`, `OPENROUTER_API_KEY`
- `Demand Validator` -> `APIFY_TOKEN`
- `Research Lead` -> `BRAVE_API_KEY`

### 4.3 Later Activation Blockers

Record these as later blockers for optional packs instead of blocking day-1
Research:

- `GITHUB_TOKEN`
- `RAILWAY_TOKEN`
- `SENTRY_AUTH_TOKEN`
- `PAYMENT_PROVIDER_API_KEY`
- `ANALYTICS_API_KEY`
- payment provider secrets
- deploy provider secrets
- per-venture app secrets

## 5. Budget Check

- company hard cap is `100000` cents per month
- sum of root-import `.paperclip.yaml` agent budgets must not exceed that cap
- optional pack budget ceilings must not be counted as active spend until the pack is imported and approved

## 6. First Work Check

Only this chain may start after import:

```text
Bootstrap Company Access And Secrets
-> Bootstrap Company
-> Start First Research Cycle
-> Research Source Batch
-> Research Proof Review
-> canonical Idea Card
-> Gate A packet
```

No Product Bet, Build, GTM, Support, outreach, public deploy, spend, or payment
collection should start from the root import.

Only the first two bootstrap tasks should exist immediately after root import.
`Start First Research Cycle` is created by CEO only after bootstrap approval.
Research Source Batch and Research Proof Review are created only inside that
Research operating loop.
