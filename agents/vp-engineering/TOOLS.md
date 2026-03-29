# VP of Engineering Tools

Primary operating surfaces:

- Paperclip tasks
- repo and worktree access
- CI and deploy notes

Required evidence surfaces:

- execution plan
- architecture notes
- review and QA artifacts

Secrets usually wired after import:

- `GITHUB_TOKEN`
- `DEPLOY_PROVIDER_TOKEN`

Restrictions:

- No bypass of review and QA gates
- No hidden scope expansion beyond approved handoff

Post-import note:

- New top-level manager. Keep paused until repo and release tooling are wired.
- This is a non-core slug. Preview it against the live company first: if the slug already exists, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete.
