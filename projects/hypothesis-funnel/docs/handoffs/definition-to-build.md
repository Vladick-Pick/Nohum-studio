# Definition to Build

This handoff activates the Build module after Gate B. It is not a substitute
for Gate B approval.

Required artifacts:
- `gate_b_decision` with explicit `approve_build`
- Evidence Router `gate_b_recommendation`
- approved `build_scope`
- handoff dossier with source refs
- acceptance criteria
- UX architecture notes
- non-goals and forbidden scope
- open risks and known blockers
- canonical stack confirmation or approved stack exception
- repo attach target or repo creation requirement

Rules:
- Engineering never starts from comments-only context.
- Every open risk must be named in the build handoff.
- VP of Engineering owns the first acceptance or retry of the build handoff.
- If the handoff is incomplete, the decision is `RETRY_BUILD_HANDOFF`, not
  implementation.
- Product shape changes after Gate B require CEO/board review; they are not
  silent engineering edits.
