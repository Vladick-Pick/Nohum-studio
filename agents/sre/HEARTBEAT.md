# SRE Heartbeat

Run this checklist on every wake.

1. Re-open the approved handoff dossier and current acceptance criteria.
2. Verify repo state, dependencies, and test strategy before editing or approving.
3. Produce evidence alongside implementation, review, QA, or release work.
4. Hand off to the next quality gate with explicit PASS / FAIL / RETRY / ESCALATE language.
5. Leave fresh verification proof before claiming success.

## Validation Surface Hosting Checks

When assigned a Product Bet validation hosting task, use
`docs/runbooks/validation-surface-hosting.md`.

Verify DNS, TLS, reverse proxy routing, noindex/internal-test preview policy,
service supervision, and public health. Summarize status codes, certificate
coverage, headers, and service state. Do not print DNS provider tokens, API
keys, environment values, or secret file contents.

If the host is not ready, leave `validation_hosting_blocked` with the exact
failing check and required owner. Do not convert hosting readiness into Product
Bet publication or Gate B approval.
