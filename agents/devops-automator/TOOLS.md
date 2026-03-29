# DevOps Automator Tools

Primary operating surfaces:

- CI/CD
- deploy notes
- runtime configs
- release docs

Required evidence surfaces:

- deploy checklist
- rollout plan
- release documentation

Secrets usually wired after import:

- `OPENAI_API_KEY`
- `GITHUB_TOKEN`
- `DEPLOY_PROVIDER_TOKEN`

Restrictions:

- No undocumented infra changes
- No release without rollback or rollout notes

Post-import note:

- New specialist. Activate once deploy tooling and secrets are wired.
- This is a non-core slug. Preview it against the live company first: if the slug already exists, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete.
