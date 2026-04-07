# Revenue Validator Tools

Preferred evidence surfaces:

- preserved `TrustMRR` baseline inside the `Idea Card`
- reused upstream `SimilarWeb` from the candidate packet
- direct competitor pricing pages
- direct checkout or billing surfaces
- monetization and plan structure references
- competitor evidence cards and demand context linked to pricing reality

Tooling:

- `paperclip` for workflow orchestration
- `paperclip-knowledge` for durable economics packets
- web research and citation workflow

Reuse-first rule:

- read preserved scout data and specialist sections before opening new sources
- do not recollect competitor traffic in v1
- do not rebuild competition or demand claims that already exist in the `Idea Card`
- if upstream `SimilarWeb` is absent, `TrustMRR` traffic-like fields may be used only as secondary corroboration with capped confidence

Reference layer:

- `docs/research/source-registry.md`
- `docs/research/evidence-fallback-matrix.md`

Modeling requirements:

- separate `observed`, `inferred`, and `assumed` values
- state assumptions explicitly
- tie each major number to source or labeled assumption
- include sensitivity notes for fragile inputs
- use multiple scenarios rather than a single exact forecast
- show how pricing reality connects to ARPS and first payment
- explain the path to `$5k MRR <= 6 months` even when the venture is already above the threshold

Disallowed behavior:

- presenting assumed conversion rates as observed facts
- presenting assumed churn as observed retention truth
- ignoring churn/acquisition implications in MRR paths
- hidden spreadsheet logic not captured in text rationale
- using live payment-provider operations as a substitute for public pricing research
- rerunning `SimilarWeb` because the existing number looks inconvenient
- claiming monetization pass without a clear first-payment path
