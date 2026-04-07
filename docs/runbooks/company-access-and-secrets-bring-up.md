# Company Access And Secrets Bring-Up

Use this runbook immediately after importing the company into Paperclip.

Goal:

- wire the services that the imported agents already use
- keep the right roles paused until their service stack is actually live
- avoid passing raw secrets in chat, docs, or repo files

## Source Of Truth

- `Paperclip Company Secrets` is the only canonical origin for company credentials
- agent runtime receives secrets through `secret_ref`
- venture app env vars are downstream runtime copies, not the canonical origin

Do not store plaintext keys in:

- prompts
- comments
- docs
- repository files

## Day-1 Research Secret Set

These must be present before the research lane is considered live:

- `TRUSTMRR_API_KEY`
- `APIFY_TOKEN`
- `OPENROUTER_API_KEY`
- `BRAVE_API_KEY`

Why:

- `Idea Scout` uses `TRUSTMRR_API_KEY` and `APIFY_TOKEN`
- `Competitor Scout` uses `OPENROUTER_API_KEY` and `APIFY_TOKEN`
- `Demand Validator` uses `APIFY_TOKEN`
- `Research Lead` uses `BRAVE_API_KEY` for bounded browser/search work where needed

## Company Baseline Secret Set

These are still required for the broader company runtime:

- `GITHUB_TOKEN`
- `RAILWAY_TOKEN`
- `SENTRY_AUTH_TOKEN`
- `PAYMENT_PROVIDER_API_KEY`
- `ANALYTICS_API_KEY`

Mapped provider-level secrets:

- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`

## Role Wiring Map

Research roles:

- `Idea Scout`
  - `TRUSTMRR_API_KEY`
  - `APIFY_TOKEN`
- `Competitor Scout`
  - `OPENROUTER_API_KEY`
  - `APIFY_TOKEN`
- `Demand Validator`
  - `APIFY_TOKEN`
- `Research Lead`
  - `BRAVE_API_KEY`

Engineering and operations:

- `VP of Engineering`, `Code Reviewer`, `Release Engineer`, and other repo roles
  - `GITHUB_TOKEN`
- deploy and runtime operations roles
  - `DEPLOY_PROVIDER_TOKEN`
  - `RAILWAY_TOKEN` where needed
- reliability roles
  - `SENTRY_AUTH_TOKEN`

Marketing, support, and analytics:

- `ANALYTICS_API_KEY`
- `PAYMENT_PROVIDER_API_KEY` only where payment context is required

## Service Stack Already Used By The Research Team

`Idea Scout`

- `TrustMRR API`
- `Apify SimilarWeb actor`

`Competitor Scout`

- `OpenRouter -> perplexity/sonar-pro-search`
- `Apify SimilarWeb`
- `Apify Trustpilot`
- `Apify Reddit`
- `Apify X`
- official product and pricing pages

`Demand Validator`

- reused competition packet
- `Apify Google Search`
- `Apify Google Trends`
- `Apify Reddit`
- `Apify X`
- optional `Apify Google Ads`
- optional `Apify Facebook Ads`

## Wiring Rules

1. Create or verify the secret in `Company Secrets`.
2. Bind the secret into agent runtime through `secret_ref`.
3. Keep the role paused until the secret and the service surface are both verified.
4. Do not reroute a role to a weaker substitute source just because its proper service is unwired.

## Pause Rules

Keep these paused until their required services are wired:

- `Idea Scout`
- `Competitor Scout`
- `Demand Validator`
- any newly imported non-core role whose tool stack is still incomplete

## Completion Test

Bring-up is complete only when:

- the research day-1 secret set is present
- the role-to-secret mapping is wired through `secret_ref`
- paused roles have explicit blocker notes or are ready to resume
- the CEO can state clearly whether the first sourcing cycle may begin
