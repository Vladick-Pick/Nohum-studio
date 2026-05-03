# NoHum Operating Cadence

NoHum autonomy depends on recurring management, not on one-off issue bursts.

## Daily Cadence

- `CEO`
  - task: `docs/templates/tasks/daily-ceo-operating-review.md`
  - output: operating review note with WIP, queue, budget, escalation state, and human-boundary queue
- `Chief of Staff`
  - task: `docs/templates/tasks/daily-chief-of-staff-blocked-work-review.md`
  - output: blocked-work packet or reroute note plus company-world-model delta
- `Research Lead`
  - task: `docs/templates/tasks/daily-research-lead-queue-refresh.md`
  - output: queue freshness update, queue winner state, and customer-world-model delta for research surfaces
- `Launch Lead`
  - task: `docs/templates/tasks/daily-launch-lead-readiness-review.md`
  - output: Gate B or launch packet readiness note plus customer-world-model delta for launch surfaces
- `VP of Engineering`
  - task: `docs/templates/tasks/daily-vp-engineering-substrate-review.md`
  - output: substrate readiness verdict or build-lane exception plus company-world-model delta for build surfaces
- `Support Lead`
  - task: `docs/templates/tasks/daily-support-lead-signal-review.md`
  - output: support signal summary, escalation packet, and customer-world-model delta for support surfaces
- `Agent Mechanic`
  - task: `docs/templates/tasks/daily-agent-mechanic-runtime-audit.md`
  - output: runtime audit note, remediation queue, and runtime-reliability surface delta

## Weekly Cadence

- `CEO`
  - task: `docs/templates/tasks/weekly-board-review.md`
  - output: board review note
- `Launch Lead`
  - task: `docs/templates/tasks/portfolio-health-review.md`
  - output: portfolio keep/grow/retire review and customer-world-model synthesis
- `Chief of Staff`
  - task: `docs/templates/tasks/weekly-factory-health-review.md`
  - output: factory health report and company-world-model synthesis
- `Chief of Staff`
  - task: `docs/templates/tasks/weekly-org-hygiene-review.md`
  - output: org hygiene report
- `Chief of Staff`
  - task: `docs/templates/tasks/weekly-self-improvement-review.md`
  - output: ranked self-improvement backlog and promotion decisions
- `Agent Mechanic`
  - task: `docs/templates/tasks/weekly-self-improvement-failed-experiment-audit.md`
  - output: failed-experiment audit and prevention notes
- `Agent Mechanic`
  - task: `docs/templates/tasks/weekly-skill-instruction-drift-review.md`
  - output: skill and instruction drift report

## Rules

- every cadence task must leave a durable artifact or structured issue update
- comments-only status updates do not count as cadence output
- every escalation must name a decision owner and next artifact
- cadence never overrides WIP policy: one active venture plus one queued venture
- if a recurring task ends without a named artifact, the run counts as a failure
- cadence outputs must reference canonical templates when a template exists
