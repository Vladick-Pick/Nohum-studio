# NoHum Skill Policy

NoHum skill policy is now explicit: role ownership lives in the org structure, repeatable specialist behavior lives in local skills, and the package must physically contain every skill referenced by agent bundles.

## Skill Layers

1. Base operating skills provided by the live Paperclip runtime
   - `paperclip`
   - `paperclip-create-agent`
   - `paperclip-knowledge`
   - `para-memory-files`
2. Vendored local skills inside this repo
   - imported and normalized from `pm-skills`, `superpowers`, and `gstack`
3. NoHum overlay skills
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
   - `launch-gates`
   - `launch-product-definition`
   - `launch-gtm-readiness`
   - `payment-signal-policy`
   - `portfolio-review`
   - `studio-ops-agent-reliability`

## Vendor Sources

- `agency-agents`: source of role topology and deliverable-first behavior, not direct runtime skill files
- `pm-skills`: source of research, product, GTM, marketing, support, and analytics skill files
- `superpowers`: source of engineering execution workflow skills
- `gstack`: source lineage for review, QA, release, and security pipeline skills, but local NoHum-adapted files are authoritative

## Rules

- No core team should rely on prompt prose alone for its operating behavior.
- Team docs must reference actual local skill directories when a behavior is part of the package contract.
- Base operating skills are part of the package contract, but they must resolve from the live Paperclip runtime rather than from vendored local copies.
- Do not vendor local skills with the same names as runtime-provided base skills; that creates import-time shadow copies and binds agents to the wrong skill records.
- If an upstream skill conflicts with local runtime reality, adapt or quarantine it before calling it package-ready.
- If a local skill becomes outdated, either refresh it from source lineage or remove it from the team matrix. Do not leave dead references.
- Cross-team handoffs must point to canonical artifacts generated under these skill contracts.

## Factory Stack Coupling

NoHum local skills are written for one default venture stack:

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

That means:

- `launch-gates`, `launch-product-definition`, and `venture-policy` should reject default-path ventures that do not fit this stack
- `payment-signal-policy` should assume `Lava.top` as the default provider
- `launch` and `support` skills should assume `Plausible` as the default measurement surface
- engineering skills should treat `Next.js + Railway + PostgreSQL + Prisma` as the baseline build substrate, not as one option among many

Stack deviations are allowed only through an explicit board exception before Gate B.

## Detailed-Core Outcome

The previous compact delivery layer is no longer the primary execution substrate. Engineering, Marketing, Product Launch, and Support now each have their own local skill bundles and separate ownership boundaries.
