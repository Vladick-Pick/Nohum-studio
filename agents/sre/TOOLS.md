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

Restrictions:

- No reliability claims without signals or checks
- No incident readiness based on assumptions alone

Post-import note:

- New specialist. Activate once observability surfaces are wired.
- This is a newly introduced specialist or manager. Import as new and keep paused until runtime wiring is complete.
