---
kind: task_template
name: Promote Queued Venture
description: Idempotent venture-promotion routine that converts the single queued winner into a venture lane after Gate A passes
schema: agentcompanies/v1
assignee: chief-of-staff
project: studio-os
---

Run only when all of the following are true:

- one queue winner record exists
- Gate A decision is `PASS`
- no other active venture occupies the build and launch lane
- `venture_id` has been assigned

Steps:

1. Re-open the queue winner record and Gate A decision.
2. Confirm the same `venture_id` will be reused across all generated artifacts.
3. Create or update the venture manifest, launch brief, handoff dossier, and phase transition log.
4. Confirm the candidate leaves `queued` and enters `venture` exactly once.
5. If any precondition fails, stop and leave an explicit retry or escalation note.

## Required Output

Leave behind:

- one venture bootstrap packet rooted in a single `venture_id`
- one phase transition log entry for `queued -> venture`
