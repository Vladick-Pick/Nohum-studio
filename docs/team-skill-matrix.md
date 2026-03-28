# NoHum v1.5 Team Skill Matrix

This matrix defines team-level mandatory and optional skills for the v1.5 package.

Design rules:
- Team skill bundles are bootstrap/package truth and may require post-import wiring.
- Mandatory skills define the minimum operating substrate.
- Package-local overlays and runtime/base skills are both listed explicitly.
- Optional skills are enabled by workload, phase, or budget.
- No role should rely on prompt prose only for core behavior.

## Research Team

Manager: `Research Lead`
Members: `Research Synthesizer`, `Competitor Scout`, `Demand Validator`, `Revenue Validator`

Mandatory skills:
- `paperclip`: control-plane issue and handoff protocol
- `paperclip-knowledge`: durable publication of research artifacts
- `venture-policy`: hard gate and queue discipline alignment
- `research-scorecard`: weighted score and anti-gaming structure
- `research-competitor-analysis`: packaged NoHum contract for direct competitor proof
- `research-demand-validation`: packaged NoHum contract for demand signal proof
- `research-revenue-validation`: packaged NoHum contract for price and first-payment plausibility

Optional skills:
- `competitor-analysis`: richer external competitor analysis if available at runtime
- `market-sizing`: TAM/SAM/SOM and volume sanity checks
- `pricing-strategy`: price-band and packaging validation
- `monetization-strategy`: path-to-payment and monetization options
- `identify-assumptions-new`: identify high-risk assumptions early
- `prioritize-assumptions`: rank assumptions by impact and risk
- `user-personas`: sharper ICP segmentation when demand signals are ambiguous
- `sentiment-analysis`: weak-signal extraction from review/feedback datasets
- `interview-script`: only when qualitative interviews are part of the cycle
- `summarize-interview`: normalize transcript output into structured artifacts

Why:
- This team produces the canonical queue package and must prove `QUEUE/KILL/KILL FOR NOW` with explicit evidence.

## Launch Team

Manager: `Launch Lead`
Members: `Product Definer`, `Growth Lead`, `Delivery Engineer`, `Code Reviewer`, `Release Engineer`

Mandatory skills:
- `paperclip`: workflow discipline across definition, build, and launch lanes
- `paperclip-knowledge`: publish launch artifacts as canonical docs
- `launch-gates`: Gate B readiness and fail conditions
- `payment-signal-policy`: first-payment trust semantics and ambiguity handling
- `launch-product-definition`: packaged NoHum definition contract
- `launch-gtm-readiness`: packaged NoHum GTM and measurement contract
- `delivery-implementation-loop`: packaged NoHum build-lane execution contract
- `delivery-code-review-gate`: packaged NoHum independent review gate

Optional skills:
- `create-prd`: structured product definition baseline
- `ideal-customer-profile`: explicit ICP framing
- `value-proposition`: offer clarity and differentiation
- `gtm-strategy`: launch motion and channel plan
- `growth-loops`: sustainable acquisition loops
- `north-star-metric`: top-line value metric and input metrics
- `user-stories`: implementation-ready story slices
- `test-scenarios`: verification baseline for release readiness
- `pre-mortem`: risk surfacing before build/launch commitment
- `release-notes`: release communication contract
- `writing-plans`: delivery planning discipline
- `test-driven-development`: implementation correctness
- `systematic-debugging`: failure diagnosis
- `verification-before-completion`: evidence-first closeout
- `requesting-code-review`: review request discipline
- `receiving-code-review`: review intake discipline
- `finishing-a-development-branch`: release cleanup discipline
- `using-git-worktrees`: isolated delivery execution
- `subagent-driven-development`: parallel implementation controller
- `positioning-ideas`: when message differentiation is weak
- `competitive-battlecard`: competitive launch contexts
- `stakeholder-map`: multi-party launch coordination
- `retro`: post-launch learning loop

Why:
- This team owns `Product Definition -> Gate B -> Build -> Launch` and must preserve clean handoffs and quality boundaries.

## Support-Feedback Team

Manager: `Support Lead`
Members: `Feedback Synthesizer`

Mandatory skills:
- `paperclip`: issue-state and escalation discipline
- `paperclip-knowledge`: feedback and incident documentation
- `portfolio-review`: weekly health review structure
- `payment-signal-policy`: align support outcomes with payment review semantics

Optional skills:
- `summarize-meeting`: normalize support calls and async reports
- `sentiment-analysis`: trend detection across customer feedback
- `cohort-analysis`: behavior deltas post-launch
- `grammar-check`: customer-facing response polish where needed

Why:
- This team converts raw support traffic into decision-grade feedback and portfolio signals.

## Studio Ops Team

Manager: `Chief of Staff`
Members: `Agent Mechanic` (`CEO` as executive owner)

Mandatory skills:
- `paperclip`: control-plane execution and assignment flows
- `paperclip-create-agent`: governed hiring and org expansion
- `paperclip-knowledge`: maintain durable operational docs
- `studio-ops-agent-reliability`: packaged NoHum reliability doctrine
- `verification-before-completion`: evidence-first ops changes
- `systematic-debugging`: reliability incident diagnosis
- `writing-skills`: maintain internal skill quality and consistency

Optional skills:
- `dispatching-parallel-agents`: independent ops streams
- `executing-plans`: plan-driven rollout execution
- `requesting-code-review`: policy and tooling review gates

Why:
- This team protects operating cadence, org reliability, and migration safety during package evolution.

## Role-to-Team Assignment (v1.5)

- Control plane: `CEO`, `Chief of Staff`, `Agent Mechanic`
- Research: `Research Lead`, `Research Synthesizer`, `Competitor Scout`, `Demand Validator`, `Revenue Validator`
- Launch and delivery lane: `Launch Lead`, `Product Definer`, `Growth Lead`, `Delivery Engineer`, `Code Reviewer`, `Release Engineer`
- Support-feedback: `Support Lead`, `Feedback Synthesizer`

## Notes for Import Behavior

- If importer materializes only `company + agents`, this matrix remains the package source of truth.
- Post-import, apply team skill bundles through role-level config and runtime docs.
