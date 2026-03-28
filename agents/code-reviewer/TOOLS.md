# Code Reviewer Tools

Primary operating surfaces:

- Diffs
- tests
- acceptance docs
- review notes

Required evidence surfaces:

- review verdict
- blocking issues
- approval packet

Secrets usually wired after import:

- `OPENAI_API_KEY`
- `GITHUB_TOKEN`

Restrictions:

- No self-release authority
- No pass verdict without evidence

Post-import note:

- Existing package role moves under VP Engineering; keep paused until repo access is wired.
- This is a non-core slug. Preview it against the live company first: if the slug already exists, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete.
