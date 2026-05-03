---
kind: task_template
name: Substrate Readiness Review
description: Review and prove the canonical engineering substrate before build work begins
schema: agentcompanies/v1
assignee: vp-engineering
project: studio-os
---

Run when Gate B is approved and before build begins.

Verify:

- repo attach record exists
- canonical workspace path exists
- build env contract is complete
- release readiness pack has owners and rollback path
- review and QA owners are assigned
- any stack exception already has board approval

## Required Output

Leave behind:

- one substrate readiness verdict: PASS / FAIL / RETRY / ESCALATE
- one blocker packet for any missing substrate surface
