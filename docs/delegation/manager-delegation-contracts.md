# Manager Delegation Contracts

Managers in NoHum should delegate through artifacts, not through vague instructions.

## Contract Shape

Each delegation must define:

- trigger
- assignee
- required output artifact
- SLA or expected timing
- escalation owner
- target `process_surface` when the work is an improvement or mutation

## Contracts

| Manager | Trigger | Assignee | Required artifact | SLA / timing | Escalation owner |
|---|---|---|---|---|---|
| `CEO` | queue candidate needs Gate A or a live venture needs board action | `Research Lead` or `Launch Lead` | queue package or Gate A packet | same operating day | board |
| `Chief of Staff` | blocked, stale, or ownerless work appears | relevant team manager | `docs/templates/operations/blocked-work-packet.md` or `docs/templates/operations/reroute-note.md` | within 4 hours for active venture work, same day otherwise | `CEO` |
| `Research Lead` | raw idea enters research or queued item needs refresh | `Idea Scout`, `Competitor Scout`, `Demand Validator`, `Revenue Validator` | sourcing batch, canonical idea card updates, and final queue recommendation | same day for queue refresh, within 48 hours for new research | `CEO` on queue-quality ambiguity |
| `Launch Lead` | Gate A winner approved or launch packet has unresolved readiness gaps | `Product Definer`, `Pricing Strategist`, `UX Researcher`, `Launch Program Manager` | launch brief, handoff dossier, Gate B packet | same operating day while venture is active | `CEO` and board on Gate B ambiguity |
| `CMO` | launch packet approved and channel execution is ready to start | marketing specialists | channel brief, campaign brief, measurement dashboard | within 24 hours of approved launch packet | `Launch Lead` when message and product reality diverge |
| `VP of Engineering` | Gate B packet approved and repo/build lane should open | engineering and QA specialists | implementation plan, review verdict, QA verdict, release readiness pack | same operating day once substrate is ready | `Launch Lead` and `CEO` when build substrate is not ready |
| `Support Lead` | release candidate approaches launch or live support load changes materially | support responders and feedback specialists | support readiness map, escalation packet, weekly support report | within 24 hours before launch traffic ramps; same day for critical escalations | `CEO` when support burden threatens portfolio quality |
| `Agent Mechanic` | repeated runtime failure, failing recurring task, or config drift is detected | relevant failing role owner or infra specialist | runtime audit note, remediation packet, reroute note | within 4 hours for blocking runtime failures, same day otherwise | `Chief of Staff` for sequencing issues, `CEO` for policy or budget changes |

## Self-Improvement Delegation

Experiments are first-class delegation units.

When a manager delegates a process mutation or evaluation run, the required artifact is:

- `docs/templates/operations/process-experiment-record.md`

When an agent proposes a change to its own harness, the required artifact is:

- `docs/templates/operations/agent-self-review.md`

## Rule

If the next owner cannot act from the artifact alone, the delegation is incomplete.
