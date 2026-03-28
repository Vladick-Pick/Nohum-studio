# NoHum Skill Policy

NoHum skill policy is now explicit: role ownership lives in the org structure, repeatable specialist behavior lives in local skills, and runtime platform skills remain a separate base layer.

## Skill Layers

1. Runtime base skills
   - `paperclip`
   - `paperclip-create-agent`
   - `paperclip-knowledge`
2. Vendored local skills inside this repo
   - imported from `pm-skills`, `superpowers`, and `gstack`
3. NoHum overlay skills
   - `venture-policy`
   - `research-scorecard`
   - `research-competitor-analysis`
   - `research-demand-validation`
   - `research-revenue-validation`
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
- `gstack`: source of review, QA, release, and security pipeline skills

## Rules

- No core team should rely on prompt prose alone for its operating behavior.
- Team docs must reference actual local skill directories when a behavior is part of the package contract.
- Runtime base skills are required in live environments but are not assumed to auto-import from this repo.
- If a local skill becomes outdated, either refresh it from source lineage or remove it from the team matrix. Do not leave dead references.
- Cross-team handoffs must point to canonical artifacts generated under these skill contracts.

## Detailed-Core Outcome

The previous compact delivery layer is no longer the primary execution substrate. Engineering, Marketing, Product Launch, and Support now each have their own local skill bundles and separate ownership boundaries.
