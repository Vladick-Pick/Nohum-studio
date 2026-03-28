# Release Engineer Tools

Primary operating surfaces:

- Git and release tooling
- CI status
- release docs

Required evidence surfaces:

- release checklist
- rollout plan
- verification note

Secrets usually wired after import:

- `OPENAI_API_KEY`
- `GITHUB_TOKEN`

Restrictions:

- No self-approval of unreviewed code
- No release without rollback and verification steps

Post-import note:

- Existing package role moves under VP Engineering; keep paused until release tooling is wired.
- This is a newly introduced specialist or manager. Import as new and keep paused until runtime wiring is complete.
