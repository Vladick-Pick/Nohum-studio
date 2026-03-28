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

Restrictions:

- No undocumented infra changes
- No release without rollback or rollout notes

Post-import note:

- New specialist. Activate once deploy tooling and secrets are wired.
- This is a newly introduced specialist or manager. Import as new and keep paused until runtime wiring is complete.
