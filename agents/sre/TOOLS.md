# SRE Tools

Primary operating surfaces:

- Observability notes
- runtime diagnostics
- release and canary plans

Required evidence surfaces:

- reliability checklist
- runtime risk summary
- canary notes

Secrets usually wired after import:

- `OPENAI_API_KEY`
- `GITHUB_TOKEN`
- `DEPLOY_PROVIDER_TOKEN`
- `SENTRY_AUTH_TOKEN`

Restrictions:

- No reliability claims without signals or checks
- No incident readiness based on assumptions alone

Post-import note:

- New specialist. Activate once observability surfaces are wired.
- This is a non-core slug. Preview it against the live company first: if the slug already exists, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete.
