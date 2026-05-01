---
kind: task
name: Bootstrap Company
description: First-run setup checklist for NoHum Studio after import
schema: agentcompanies/v1
assignee: ceo
project: studio-os
---

Complete the following in order:

1. Confirm `Bootstrap Company Access And Secrets` is complete.
2. Verify the top-level company goal exists and matches the venture factory mission.
3. Verify CEO, Research Lead, Idea Scout, and Launch Lead exist and report correctly.
4. Verify `Hypothesis Funnel` and `Studio OS` projects exist.
5. Verify budgets are present and within policy.
6. Verify the operating policy is loaded from the bundled skills and the CEO heartbeat files.
7. Confirm the company starts with no active venture and no queued venture.
8. Produce the initial CEO strategy for board approval.
9. After approval, create exactly one next task: `Start First Research Cycle`.
10. Assign that task to `Research Lead`.
11. Include the first sourcing brief, source boundaries, budget cap, language rule,
    and day-1 access readiness in the task body.
12. Do not directly wake specialist agents from bootstrap. `Research Lead` owns
    the first sourcing handoff to `Idea Scout`.
13. Do not allow any Product Bet, build, GTM, support, outreach, public deploy,
    spend, or payment work until the relevant gate opens it.

Do not attempt to build or launch a product before the company structure and policy are verified.

## Required Bootstrap Output

When complete, leave behind:

- one approved CEO strategy
- one completed access-and-secrets bring-up note
- one created `Start First Research Cycle` task assigned to `Research Lead`
- zero policy violations
- a clear note describing current company health and that the factory is now in
  the Research operating loop
