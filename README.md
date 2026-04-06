# NoHum Studio v1.5 Detailed-Core

Public source package for upgrading the live NoHum Studio company inside Paperclip.

This repository is not the live runtime source of truth. It is the import-safe package and richer bootstrap layer used to evolve the current live company without rebuilding it from zero.

## Research System v1

Research is now packaged as a staged, GitHub-importable workflow rather than a loose collection of prompts.

Current research flow:

1. `Idea Scout` sources revenue-visible candidates from `TrustMRR`.
2. `Idea Scout` enriches traffic through `SimilarWeb`.
3. `Research Lead` reviews the sourcing batch and either requests a new batch or creates one canonical intake card per selected idea.
4. Specialists update sections inside that same shared idea card:
   - `Competitor Scout`
   - `Demand Validator`
   - `Revenue Validator`
5. `Research Lead` reviews section quality, requests revisions when needed, and only then issues the final research verdict.

Key design rules:

- one selected idea = one shared canonical idea card
- `Idea Scout` is sourcing-only, not a final decision-maker
- `Research Lead` owns intake quality and stage discipline
- final verdicts (`QUEUE | KILL | KILL FOR NOW`) are not allowed at intake time
- raw scout and competitor-source evidence is preserved in linked evidence artifacts, not dumped into the main card

Research source hierarchy in v1:

- `TrustMRR` is primary for revenue, subscriptions, and startup-level business signals
- `SimilarWeb` is primary for traffic, channel, country, and keyword interpretation
- `OpenRouter -> perplexity/sonar-pro-search` is used for competitor discovery only
- official competitor sites and pricing pages are the source of truth for product and pricing claims
- `Trustpilot`, `Reddit`, and `X` are bounded voice-of-customer layers

See:

- `docs/research/README.md`
- `docs/research/copyable-product-thesis.md`
- `docs/research/research-execution-system.md`
- `docs/research/contracts/intake-and-handoffs.md`
- `docs/templates/research/trustmrr-sourcing-batch.md`
- `docs/templates/research/trustmrr-intake-card.md`
- `docs/templates/research/competitor-evidence-card.md`

## Package Contract

Import-safe layer:

- `COMPANY.md`
- `paperclip.manifest.json`
- `.paperclip.yaml`
- stable agent identities in `agents/*/AGENTS.md`

Richer bootstrap layer:

- `agents/*/{SOUL,HEARTBEAT,TOOLS}.md`
- `teams/*/TEAM.md`
- vendored `skills/`
- `docs/playbooks/`
- `docs/readiness/`
- `docs/handoffs/`
- `docs/migration/`

## Detailed Org Scope

- Product Launch is now separate from Marketing, Engineering, and Support.
- Marketing has its own top-level manager: `CMO`.
- Engineering has its own top-level manager: `VP of Engineering`.
- Support is a standalone team under `Support Lead`.
- Research and Studio Ops remain separate.

## Vendored Skill Strategy

This package now vendors selected local skills from four sources:

- `agency-agents` for role topology and deliverable-first prompt shape
- `pm-skills` for PM, GTM, marketing, research, and support frameworks
- `superpowers` for engineering execution discipline
- `gstack` for engineering review, QA, release, and security pipeline

The base operating skills `paperclip`, `paperclip-create-agent`, `paperclip-knowledge`, and `para-memory-files` are vendored in this repository so import-time skill references resolve inside the package. They still require live runtime wiring after import: Paperclip API env vars for the control-plane skills, and a writable adapter memory path for `para-memory-files`. For gstack-derived engineering skills, the local `SKILL.md` files in this repo are the source of truth; upstream templates remain lineage only.

## Secret And Credential Model

`Paperclip Company Secrets` are the canonical source of truth for NoHum credentials.

Rules:

- secret CRUD is board-only
- raw values never live in prompts, docs, or repository files
- agents receive only scoped runtime env via `secret_ref`
- model auth for `codex_local` is host-managed and outside company secret scope
- `OPENAI_API_KEY` is not part of the NoHum company-wide baseline secret set
- `OPENROUTER_API_KEY` is optional and belongs only to venture app runtime when a shipped product actually uses LLM features
- Railway app env vars are manual runtime copies, not the canonical origin
- agent and policy wiring use layered aliases such as `PAYMENT_PROVIDER_API_KEY`, `ANALYTICS_API_KEY`, and `DEPLOY_PROVIDER_TOKEN`

See:

- `docs/decisions/0004-secret-and-credential-architecture.md`
- `docs/mcp-access-matrix.md`
- `docs/server-post-import-checklist.md`

## Factory Default Stack

NoHum does not choose a fresh tech stack per venture. The default path is fixed to:

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

When a subsystem is needed, the provider choice is fixed. A venture may diverge only through an explicit board exception before Gate B.

See:

- `docs/decisions/0005-factory-default-stack-and-mcp.md`
- `docs/factory-default-stack.md`
- `docs/mcp-access-matrix.md`

## Import Policy

Default target is the existing live `NoHum Studio` company.

Safe migration path:

1. replace only the exact-parity core agents:
   - `ceo`
   - `research-lead`
   - `launch-lead`
2. preview every non-core slug against the live company before import
3. if a non-core slug already exists live, reconcile or update it in place instead of creating a duplicate
4. import only absent non-core roles as new records and keep them paused until secrets, tools, and runtime instructions are wired

If preview shows rename or duplicate behavior for any preexisting slug, stop the bulk import and switch to manual package-driven migration.

## Repository Map

- `agents/`: four-file bundle per role
- `teams/`: team responsibility maps
- `skills/`: vendored local skills plus NoHum overlays
- `docs/research/`: research-module contracts, decisions, execution model, and thesis
- `docs/team-skill-matrix.md`: team-level runtime and vendored skill policy
- `docs/mcp-access-matrix.md`: tool, MCP, and secret policy by role
- `docs/decisions/0004-secret-and-credential-architecture.md`: canonical secret and credential model
- `docs/decisions/0005-factory-default-stack-and-mcp.md`: canonical product stack and MCP decision
- `docs/factory-default-stack.md`: operational stack contract for default ventures
- `docs/import-runbook.md`: package-driven import sequence
- `docs/server-post-import-checklist.md`: server-side validation checklist
- `docs/operating-cadence.md`: recurring manager operating cycle
- `docs/automation/`: queue and venture transition surfaces
- `docs/observability/`: factory health and hygiene rules
- `docs/templates/`: canonical artifact templates for queue, venture, engineering, and operations
