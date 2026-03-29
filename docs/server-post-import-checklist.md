# Server Post-Import Checklist

## 1. Core Identity Check

- confirm `ceo`, `research-lead`, and `launch-lead` upgraded in place
- confirm no duplicates were created for core slugs
- confirm any non-core slug that already existed live was reconciled in place instead of duplicated

## 2. Reporting Line Check

- `Chief of Staff -> CEO`
- `Agent Mechanic -> Chief of Staff`
- `Research Lead -> CEO`
- `Research Synthesizer -> Research Lead`
- `Competitor Scout -> Research Lead`
- `Demand Validator -> Research Lead`
- `Revenue Validator -> Research Lead`
- `Launch Lead -> CEO`
- `Product Definer -> Launch Lead`
- `UX Researcher -> Launch Lead`
- `UX Architect -> Launch Lead`
- `UI Designer -> Launch Lead`
- `Pricing Strategist -> Launch Lead`
- `Launch Program Manager -> Launch Lead`
- `CMO -> CEO`
- `Growth Lead -> CMO`
- `Marketing Strategist -> CMO`
- `SEO Specialist -> CMO`
- `Content Creator -> CMO`
- `Paid Media Strategist -> CMO`
- `Tracking & Measurement Specialist -> CMO`
- `Community Builder -> CMO`
- `AI Citation Strategist -> CMO`
- `VP of Engineering -> CEO`
- `Software Architect -> VP of Engineering`
- `Backend Architect -> VP of Engineering`
- `Frontend Developer -> VP of Engineering`
- `AI Engineer -> VP of Engineering`
- `Senior Developer -> VP of Engineering`
- `DevOps Automator -> VP of Engineering`
- `SRE -> VP of Engineering`
- `Security Engineer -> VP of Engineering`
- `Code Reviewer -> VP of Engineering`
- `QA Director -> VP of Engineering`
- `QA Engineer -> VP of Engineering`
- `Release Engineer -> VP of Engineering`
- `Support Lead -> CEO`
- `Support Responder -> Support Lead`
- `Feedback Synthesizer -> Support Lead`
- `Analytics Reporter -> Support Lead`

## 3. Pause State Check

- all non-core roles created by this import should remain paused until runtime wiring is complete
- any non-core role reconciled from a previous package should keep the new reporting line and remain paused until its new tooling is wired
- newly introduced top-level managers `cmo` and `vp-engineering` should stay paused until their tool and secret surfaces are ready

## 4. Company Secrets and Runtime Wiring Check

### 4.1 Canonical Source Of Truth

- create and rotate secrets in `Paperclip Company Secrets`, not in the repo and not in comments
- keep secret CRUD board-only
- treat Railway env as a runtime copy, not the canonical origin

### 4.2 Minimum Viable Core Set

Company-wide agent/runtime secrets:

- `GITHUB_TOKEN`
- `BRAVE_API_KEY`
- `RAILWAY_TOKEN`
- `SENTRY_AUTH_TOKEN`
- `PAYMENT_PROVIDER_API_KEY`
- `ANALYTICS_API_KEY`

Mapped provider-level secrets:

- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`

Per-venture app secrets:

- `DATABASE_URL`
- `BETTER_AUTH_SECRET`
- `LAVA_API_KEY`
- `LAVA_WEBHOOK_SECRET`
- `PLAUSIBLE_API_KEY`
- `RESEND_API_KEY`
- `SENTRY_DSN`
- `R2_ACCESS_KEY_ID`
- `R2_SECRET_ACCESS_KEY`
- `R2_BUCKET`
- `R2_ENDPOINT`
- optional `OPENROUTER_API_KEY` only for venture apps that ship LLM functionality

### 4.3 Agent Runtime Wiring

- keep model auth host-managed for `codex_local`; do not create a company-wide `OPENAI_API_KEY` baseline
- bind agent-facing aliases through `Company Secrets`:
  - `PAYMENT_PROVIDER_API_KEY` -> Lava.top
  - `ANALYTICS_API_KEY` -> Plausible
  - `DEPLOY_PROVIDER_TOKEN` -> Railway
- wire `GITHUB_TOKEN` for engineering and ops roles that need repo, review, or release access
- wire `BRAVE_API_KEY` for research roles using Brave Search MCP
- wire `DEPLOY_PROVIDER_TOKEN` to Railway-facing engineering roles
- wire `SENTRY_AUTH_TOKEN` only to reliability roles that need observability diagnostics
- wire `ANALYTICS_API_KEY` for measurement, marketing, and analytics roles
- wire `PAYMENT_PROVIDER_API_KEY` only for roles that need payment-signal context
- verify live agent config stores `secret_ref`, not plaintext values
- keep runtime secret refs on `"version": "latest"`

### 4.4 Venture App Runtime Copies

- copy only the needed subset from `Company Secrets` into Railway env for the active venture
- use provider-specific names in app env: `LAVA_API_KEY`, `PLAUSIBLE_API_KEY`, `RESEND_API_KEY`, `SENTRY_DSN`, `DATABASE_URL`, `R2_*`, and optional `OPENROUTER_API_KEY` for LLM ventures
- when rotating a secret, update `Company Secrets` first and then update the Railway copies for affected ventures

## 5. Instruction Bundle Check

- verify every generated role has `AGENTS.md`, `SOUL.md`, `HEARTBEAT.md`, and `TOOLS.md` attached
- verify managers see the correct team bundle and downstream handoff docs

## 6. Smoke Tests

- Research: produce or refresh a queue winner artifact; pass when owner, freshness, and evidence links are explicit; approver `Research Lead`
- Product Launch: update a Gate B packet or launch brief; pass when the next owner can act from the artifact alone; approver `Launch Lead`
- Marketing: produce a measured channel brief; pass when metric, audience, and offer are explicit; approver `CMO`
- Engineering: create a substrate, review, or QA artifact; pass when verdict and verification evidence are explicit; approver `VP of Engineering`
- Support: produce a structured feedback or escalation synthesis; pass when severity, owner, and next decision are explicit; approver `Support Lead`
