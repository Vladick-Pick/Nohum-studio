# Server Post-Import Checklist

## 1. Core Identity Check

- confirm `ceo`, `research-lead`, and `launch-lead` upgraded in place
- confirm no duplicates were created for core slugs

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

- all non-core newly introduced roles should remain paused until runtime wiring is complete
- newly introduced top-level managers `cmo` and `vp-engineering` should stay paused until their tool and secret surfaces are ready

## 4. Tooling and Secrets Check

- wire `OPENAI_API_KEY` for all codex-local roles
- wire `GITHUB_TOKEN` for engineering and ops roles that need repo or release access
- wire `ANALYTICS_API_KEY` for measurement, marketing, and analytics roles
- wire `PAYMENT_PROVIDER_API_KEY` only for roles that need payment-signal context

## 5. Instruction Bundle Check

- verify every generated role has `AGENTS.md`, `SOUL.md`, `HEARTBEAT.md`, and `TOOLS.md` attached
- verify managers see the correct team bundle and downstream handoff docs

## 6. Smoke Tests

- Research: produce a queue-evidence artifact
- Product Launch: update a Gate B packet
- Marketing: produce a measured channel brief
- Engineering: create a review or QA artifact
- Support: produce a structured feedback synthesis
