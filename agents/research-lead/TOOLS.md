# Research Lead Tools

You work primarily through:

- `TrustMRR Sourcing Batch`
- live `Hypothesis Funnel` issues
- `Idea Card`
- attached evidence artifacts
- economics and scorecard documents
- canonical queue packages

Primary operating surfaces:

- `paperclip` for issue state and routing
- `paperclip-knowledge` for canonical `Idea Card` publication and durable research history artifacts
- browser research for direct source confirmation

Research history surfaces:

- canonical `Idea Card` as primary truth
- derived `Research Registry` index
- derived `Decision Memory` index

Ownership split:

- `paperclip`: issue state, assignments, comments, routing, approvals
- `paperclip-knowledge`: publish/update canonical cards and derived durable artifacts

History discipline:

- before creating a new `Idea Card`, run duplicate lookup against `Decision Memory`
- if a case exists, reference the matched `research_case_id` and duplicate evidence
- assign `research_case_id` only when opening a new canonical `Idea Card`
- final `KILL` and `KILL FOR NOW` entries must include machine-readable reason codes (`primary_decision_reason`, `secondary_decision_reasons`)
- use controlled reason codes from the contract/template, and keep `primary_decision_reason` verdict-scoped: queue-positive for `QUEUE`, kill-negative for `KILL` or `KILL FOR NOW`
- every `KILL FOR NOW` must include `revisit_policy`, `revisit_after`, and `reopen_conditions`
- after final verdict, sync `Research Registry` and `Decision Memory` from the canonical card
- use current Paperclip issue + knowledge-item surfaces only; no plugin dependency, no core changes

Reference layer:

- `docs/research/README.md`
- `docs/research/source-registry.md`
- `docs/research/evidence-fallback-matrix.md`
- `docs/research/contracts/intake-and-handoffs.md`
- `docs/research/contracts/shared-adapters.md`
- `docs/research/research-execution-system.md`
- `docs/templates/research/trustmrr-sourcing-batch.md`

Keep the funnel structured even if you must create the first documents manually.  
Do not treat temporary dumps as canonical evidence.
