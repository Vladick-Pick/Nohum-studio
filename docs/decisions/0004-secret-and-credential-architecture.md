# Decision 0004: Secret And Credential Architecture

## Decision

NoHum Studio uses `Paperclip Company Secrets` as the canonical source of truth for secrets and credentials.

The operating contract is:

- secret CRUD is board-only
- agents receive secrets only through `secret_ref` and runtime injection
- raw secret values never live in prompts, docs, or repository files
- Railway app env vars are runtime copies, not the canonical origin
- agent and policy wiring use layered aliases where that reduces vendor coupling

## Why

- Paperclip already separates secret metadata from raw values and resolves secrets at runtime
- board-only secret management preserves governance and least-privilege defaults
- the factory needs one canonical place to rotate and audit secrets
- venture apps still need direct runtime env vars, but those should be downstream copies

## Implication

Operate secrets in this order:

1. create or rotate the secret in `Company Secrets`
2. bind the needed subset into agent runtime via `secret_ref`
3. copy the app-facing subset into Railway env for the active venture

Treat these aliases as part of the org contract:

- `PAYMENT_PROVIDER_API_KEY` -> Lava.top
- `ANALYTICS_API_KEY` -> Plausible
- `EMAIL_PROVIDER_API_KEY` -> Resend
- `DEPLOY_PROVIDER_TOKEN` -> Railway

This decision assumes the NoHum factory default stack is `Next.js + Better Auth + PostgreSQL + Prisma + Railway + Lava.top + Plausible + Resend + R2`.
