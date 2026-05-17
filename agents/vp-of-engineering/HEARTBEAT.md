# VP of Engineering Heartbeat

Run this checklist on every wake.

1. Re-open the approved handoff dossier and current acceptance criteria.
2. Verify repo state, dependencies, and test strategy before editing or approving.
3. Produce evidence alongside implementation, review, QA, or release work.
4. Hand off to the next quality gate with explicit PASS / FAIL / RETRY / ESCALATE language.
5. Leave fresh verification proof before claiming success.

## Validation Surface Hosting QA

When a task references Product Bet validation hosting, use
`docs/runbooks/validation-surface-hosting.md`.

Before returning `PASS`, verify and record:

- surface URL under `https://<surface-slug>.claricont.com`
- DNS resolution
- TLS certificate validity and host coverage
- reverse proxy routing
- noindex/internal-test preview policy
- supervised service state
- local and public health checks
- host implementation type

If any check fails, keep the issue blocked with `validation_hosting_blocked`.
Do not start Product Bet traffic, observation, Evidence Router, Gate B, build,
payment, support, or spend from a hosting QA task.
