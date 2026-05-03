# NoHum v1.8 Single-Import Team Skill Matrix

This matrix defines team-level skill bundles for the single-import company
package.

Rules:
- Base operating skills are listed separately from team-specific local skills.
- Base operating skills must resolve from the live Paperclip runtime, not from vendored local copies in this repository.
- Mandatory local skills must exist in `skills/`.
- Optional skills are still local to this repository when listed here.
- No role should rely on prompt prose only for core behavior.
- When an engineering skill comes from gstack lineage, the local NoHum `SKILL.md` is authoritative.

## Factory Default Stack Assumption

All teams should assume the default venture stack is fixed:

- `Next.js 16`
- `React 19.2`
- `TypeScript`
- `Tailwind CSS`
- `Better Auth`
- `PostgreSQL`
- `Prisma`
- `Railway`
- `Lava.top`
- `Plausible`
- `Resend`
- `pg-boss`
- `Cloudflare R2`
- `Sentry`

Teams do not reopen framework, payment, analytics, or deploy choices per venture. If a venture needs a different stack, that is a board exception before Gate B.

## Research Team

Manager: `Research Lead`
Members: `Idea Scout`, `Competitor Scout`, `Demand Validator`, `Revenue Validator`

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Mandatory local skills:
- `venture-policy`
- `research-scorecard`
- `research-trustmrr-intake`
- `research-source-registry`
- `research-competitor-discovery`
- `research-competitor-analysis`
- `research-demand-validation`
- `research-traffic-validation`
- `research-revenue-validation`
- `research-evidence-fallbacks`
- `research-canonical-package`
- `competitor-analysis`
- `market-sizing`
- `pricing-strategy`
- `monetization-strategy`
- `identify-assumptions-new`
- `prioritize-assumptions`

Optional local skills:
- `user-personas`
- `sentiment-analysis`

Why:
- Source venture candidates, build one canonical idea card per selected lead, and prove direct evidence before the final research decision.

## Product Launch Team

Manager: `Launch Lead`
Members: `Product Definer`, `UX Researcher`, `UX Architect`, `UI Designer`, `Pricing Strategist`, `Launch Program Manager`

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Mandatory local skills:
- `launch-gates`
- `payment-signal-policy`
- `launch-product-definition`
- `launch-gtm-readiness`
- `create-prd`
- `ideal-customer-profile`
- `value-proposition`
- `customer-journey-map`
- `stakeholder-map`
- `user-stories`
- `test-scenarios`
- `pre-mortem`
- `pricing-strategy`
- `gtm-strategy`
- `release-notes`

Optional local skills:
- `gtm-motions`
- `user-personas`
- `sentiment-analysis`

Why:
- Turn approved ventures into launchable products through definition, UX, pricing, and Gate B discipline.

## Product Bet Validation Team

Manager: `Launch Lead`
Members: `Product Bet Compiler`, `Competitor Deep Dive Analyst`, `Economics Modeler`, `Offer & Positioning Strategist`, `Organic Traffic Strategist`, `Pre-Market Autoreasoner`, `Landing Surface Builder`, `Product Bet Measurement Specialist`, `Evidence Router`

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Mandatory local skills:
- `product-bet-validation-loop`
- `product-bet-compilation`
- `validation-risk-mapping`
- `ev-band-estimation`
- `competitor-analysis`
- `competitor-pricing-scan`
- `channel-reality-scan`
- `legal-commercial-boundary-scan`
- `pricing-strategy`
- `monetization-strategy`
- `market-sizing`
- `positioning-ideas`
- `value-prop-statements`
- `competitive-battlecard`
- `organic-distribution-testing`
- `community-prospecting`
- `engineering-as-marketing-wedge`
- `pre-market-autoreason-lite`
- `product-bet-critique`
- `blind-variant-generation`
- `product-bet-judge`
- `launch-gtm-readiness`
- `validation-surface-factory`
- `landing-cro-review`
- `anti-ai-slop-copy-review`
- `test-scenarios`
- `metrics-dashboard`
- `observation-window-evaluation`
- `validation-evidence-writing`
- `decision-routing-lite`
- `weekly-learning-report`

Optional local skills:
- `browser-use`
- `playwright-interactive`
- `sentiment-analysis`

Why:
- After Gate A, turn a frozen Idea Card into a concrete Product Bet Card,
  specialist-owned sections, revisions/forks, landing/waitlist surface,
  organic traffic attempts, observation-window evidence, and Gate B
  recommendation. This team is imported with the company but stays dormant
  until CEO creates the sprint from a Gate A decision.

## Marketing Team

Manager: `CMO`
Members: `Growth Lead`, `Marketing Strategist`, `SEO Specialist`, `Content Creator`, `Paid Media Strategist`, `Tracking & Measurement Specialist`, `Community Builder`, `AI Citation Strategist`

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Mandatory local skills:
- `launch-gtm-readiness`
- `marketing-ideas`
- `positioning-ideas`
- `growth-loops`
- `metrics-dashboard`
- `competitive-battlecard`
- `beachhead-segment`
- `value-prop-statements`
- `gtm-strategy`
- `gtm-motions`

Optional local skills:
- `release-notes`
- `sentiment-analysis`

Why:
- Own positioning, demand generation, measurement, and message quality for each venture launch.

## Engineering Team

Manager: `VP of Engineering`
Members: `Software Architect`, `Backend Architect`, `Frontend Developer`, `AI Engineer`, `Senior Developer`, `DevOps Automator`, `SRE`, `Security Engineer`, `Code Reviewer`, `QA Director`, `QA Engineer`, `Release Engineer`

Runtime base skills:
- `paperclip`

Mandatory local skills:
- `brainstorming`
- `writing-plans`
- `subagent-driven-development`
- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`
- `requesting-code-review`
- `receiving-code-review`
- `using-git-worktrees`
- `finishing-a-development-branch`
- `dispatching-parallel-agents`
- `plan-eng-review`
- `review`
- `qa`
- `qa-only`
- `ship`
- `land-and-deploy`
- `investigate`
- `document-release`

Optional local skills:
- `benchmark`
- `canary`
- `cso`

Why:
- Build, review, verify, and release ventures through a full engineering system rather than a single overloaded builder role.

## Support Team

Manager: `Support Lead`
Members: `Support Responder`, `Feedback Synthesizer`, `Analytics Reporter`

Runtime base skills:
- `paperclip`
- `paperclip-knowledge`

Mandatory local skills:
- `payment-signal-policy`
- `portfolio-review`
- `summarize-meeting`
- `sentiment-analysis`
- `metrics-dashboard`
- `analyze-feature-requests`

Optional local skills:

Why:
- Convert post-launch tickets, incidents, and customer contact into structured feedback and operating signal.

## Studio Ops Team

Manager: `Chief of Staff`
Members: `Agent Mechanic`

Runtime base skills:
- `paperclip`
- `paperclip-create-agent`
- `paperclip-knowledge`

Mandatory local skills:
- `studio-ops-agent-reliability`
- `writing-skills`
- `verification-before-completion`
- `systematic-debugging`
- `executing-plans`

Optional local skills:
- `dispatching-parallel-agents`
- `using-git-worktrees`
- `requesting-code-review`

Why:
- Protect operating cadence, runtime reliability, migration safety, and instruction quality while the org evolves.


## Role-to-Team Assignment

- Control plane: `CEO`, `Chief of Staff`, `Agent Mechanic`
- Research: `Idea Scout`, `Research Lead`, `Competitor Scout`, `Demand Validator`, `Revenue Validator`
- Product Bet Validation: `Product Bet Compiler`, `Competitor Deep Dive Analyst`, `Economics Modeler`, `Offer & Positioning Strategist`, `Organic Traffic Strategist`, `Pre-Market Autoreasoner`, `Landing Surface Builder`, `Product Bet Measurement Specialist`, `Evidence Router`
- Product Launch: `Launch Lead`, `Product Definer`, `UX Researcher`, `UX Architect`, `UI Designer`, `Pricing Strategist`, `Launch Program Manager`
- Marketing: `CMO`, `Growth Lead`, `Marketing Strategist`, `SEO Specialist`, `Content Creator`, `Paid Media Strategist`, `Tracking & Measurement Specialist`, `Community Builder`, `AI Citation Strategist`
- Engineering: `VP of Engineering`, `Software Architect`, `Backend Architect`, `Frontend Developer`, `AI Engineer`, `Senior Developer`, `DevOps Automator`, `SRE`, `Security Engineer`, `Code Reviewer`, `QA Director`, `QA Engineer`, `Release Engineer`
- Support: `Support Lead`, `Support Responder`, `Feedback Synthesizer`, `Analytics Reporter`
- Studio Ops: `Chief of Staff`, `Agent Mechanic`
