---
kind: task
name: Bootstrap Company Access And Secrets
description: First mandatory post-import task for wiring services, secrets, and role access
schema: agentcompanies/v1
assignee: ceo
project: studio-os
---

Run this task immediately after company import and before any paused specialist is resumed.

The CEO owns the decision and completion state. Operational verification may be delegated to `Agent Mechanic`, but secret creation and final approval remain board-only.

Complete the following in order:

1. Verify that `Paperclip Company Secrets` is the canonical source of truth for company credentials.
2. Create or verify the day-1 research secret set:
   - `TRUSTMRR_API_KEY`
   - `APIFY_TOKEN`
   - `OPENROUTER_API_KEY`
   - `BRAVE_API_KEY`
3. Create or verify the company baseline secret set:
   - `GITHUB_TOKEN`
   - `RAILWAY_TOKEN`
   - `SENTRY_AUTH_TOKEN`
   - `PAYMENT_PROVIDER_API_KEY`
   - `ANALYTICS_API_KEY`
4. Verify provider-level mappings and aliases are wired correctly:
   - `PAYMENT_PROVIDER_API_KEY` -> Lava.top
   - `ANALYTICS_API_KEY` -> Plausible
   - `DEPLOY_PROVIDER_TOKEN` -> Railway
5. Verify research-role runtime wiring:
   - `Idea Scout` -> `TRUSTMRR_API_KEY`, `APIFY_TOKEN`
   - `Competitor Scout` -> `OPENROUTER_API_KEY`, `APIFY_TOKEN`
   - `Demand Validator` -> `APIFY_TOKEN`
   - `Research Lead` -> `BRAVE_API_KEY`
6. Keep non-core roles paused until their required services and instruction bundles are verified.
7. Verify that no agent config stores plaintext credentials and that runtime wiring uses `secret_ref`.
8. Verify `version: latest` is used for live secret refs where rotation should propagate automatically.
9. Run the post-import wiring checks from:
   - `docs/server-post-import-checklist.md`
   - `docs/mcp-access-matrix.md`
   - `docs/runbooks/company-access-and-secrets-bring-up.md`
10. Leave one explicit bring-up note that states:
   - which services are wired
   - which roles are still paused
   - which missing secret or tool is blocking each paused role
   - whether the research lane is ready to start sourcing

Do not allow the first sourcing cycle to start until the research-lane services above are wired.

## Required Output

When complete, leave behind:

- one explicit access-and-secrets bring-up note
- a list of wired day-1 services
- a list of paused roles with blockers
- a clear yes/no decision on whether research can start
