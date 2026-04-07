# Agency Agents Review

Date: 2026-03-28
Source: https://github.com/msitarzewski/agency-agents
Local snapshot: `4feb0cd`

## What It Is

`agency-agents` is not a company runtime in the Paperclip sense. It is a large, well-packaged library of role-specialized agent prompts plus an orchestration doctrine called `NEXUS`.

The repo combines four layers:

1. A large roster of specialist roles across many divisions.
2. A phase-based operating doctrine (`NEXUS`) for multi-agent coordination.
3. Standardized handoff templates and scenario playbooks.
4. Optional memory integration via MCP to reduce copy-paste handoffs.

This makes it much more systematic than a plain prompt library, but it is still primarily a tool-agnostic coordination system rather than a live company operating substrate with enforced state, approvals, or runtime containers.

## Core Operating Model

The strongest architectural idea in `agency-agents` is `NEXUS`:

- `Phase 0`: Discovery
- `Phase 1`: Strategy
- `Phase 2`: Foundation
- `Phase 3`: Build
- `Phase 4`: Harden
- `Phase 5`: Launch
- `Phase 6`: Operate

Important coordination principles:

- no phase advances without a quality gate
- evidence over claims
- handoffs are standardized
- parallel workstreams are first-class
- maximum 3 retries before escalation
- one canonical spec / task list / architecture doc

The repo also defines deployment modes:

- `NEXUS-Full`
- `NEXUS-Sprint`
- `NEXUS-Micro`

This is useful because it turns a giant roster of agents into a usable operating pattern instead of "pick random experts and hope they align".

## What It Gets Right

### 1. Division-Based Org Design

The repo has a very clear division model:

- engineering
- design
- marketing
- product
- project management
- testing
- support
- specialized operations

This is stronger than a flat roster because it gives each role a context and a likely place in a pipeline.

### 2. Deliverable-First Thinking

Their agents are usually defined by:

- what they own
- when to activate them
- what deliverable they hand over

This is the right shape for multi-agent execution.

### 3. Explicit Handoff Protocols

The handoff templates are one of the best parts of the repo.

They standardize:

- metadata
- current context
- deliverable request
- acceptance criteria
- evidence required
- next receiver

This is directly relevant to NoHum because handoff failure is one of the main failure modes in our machine too.

### 4. Evidence-Based QA Loop

The `PASS / FAIL / retry / escalate` loop is strong.

Especially good ideas:

- evidence required for verdicts
- max 3 retries
- escalation report when loops fail
- phase gates with named gatekeepers

### 5. Memory as a Handoff Layer

The MCP memory integration is not deeply enforced, but the pattern is correct:

- agents remember deliverables
- receiving agents recall prior context
- rollback is used for recovery

This is a much better model than copy-paste relay between agents.

## Where It Is Weak For NoHum's Use Case

### 1. It Is Not Company-First

`agency-agents` is built as a portable expert library plus coordination playbooks.

It does not natively model:

- company-scoped approvals
- venture lanes
- queue discipline
- portfolio state
- board-only decisions
- payment review states
- build timers tied to revenue outcomes

For NoHum, these are not optional details. They are the machine.

### 2. It Is Product Delivery Centric, Not Venture Factory Centric

Their pipeline is:

- discover
- strategize
- scaffold
- build
- harden
- launch
- operate

Our pipeline is different:

- source
- research
- queue
- Gate A
- venture
- Product Definition
- Gate B
- build
- launch
- payment review
- portfolio / kill / retire

Theirs is better for building products. Ours must be better at capital allocation and venture selection.

### 3. The Orchestrator Is Too Abstract

They rely heavily on an `Agents Orchestrator`.

This is useful as a conceptual controller, but it risks hiding too much in a generic "controller role" instead of making ownership, gates, and escalation explicit in the company structure.

NoHum should not collapse into a single universal orchestrator.

### 4. The Roster Is Extremely Broad

The repo contains a huge number of roles. That makes it impressive, but also noisy.

For NoHum this would be dangerous if copied directly:

- too many decorative roles
- too much context dilution
- too many possible activation paths
- weak operating discipline

We need a smaller, machine-shaped org around our actual lifecycle.

## Best Ideas To Import Into NoHum

### 1. Phase Playbooks

We should keep our venture lifecycle, but each major phase should have a short playbook:

- research
- queue / Gate A
- venture definition
- Gate B
- build
- launch
- operate / feedback

### 2. Handoff Templates

We should adopt formal handoff templates for:

- Research specialist -> Research Lead via the canonical idea card
- Research Lead -> Launch Lead
- Product Definition -> Build team
- Launch -> Support / Feedback
- Payment ambiguity -> Board
- Retry / fail / escalation

### 3. Readiness and Gate Artifacts

We should create durable readiness artifacts:

- Research Readiness
- Gate A Readiness
- Gate B Readiness
- Launch Readiness

### 4. Evidence-Based Review Language

We should copy the spirit of:

- pass / fail
- evidence required
- retry caps
- escalation after repeated failure

### 5. Memory-Backed Context Transfer

We should not depend only on comments and long threads.

Even if we do not adopt MCP memory immediately, we should preserve the same pattern:

- durable artifacts
- role-tagged handoffs
- recoverable context
- rollback-friendly history

## What NoHum Should Not Copy

Do not copy these directly:

- the giant roster as-is
- a generic `Agents Orchestrator` as the main control plane
- product-delivery-first sequencing as a substitute for venture selection
- an unconstrained parallel swarm without queue and budget discipline

## Comparison With NoHum

### `agency-agents` is stronger at:

- packaging
- breadth of specialists
- playbooks
- handoff templates
- evidence-based QA language

### NoHum must be stronger at:

- company runtime structure
- venture selection and kill discipline
- board-governed approvals
- portfolio state
- payment signal review
- queue and WIP limits
- capital allocation logic

## Practical Conclusion

`agency-agents` is a strong reference for how to make a multi-agent system feel operational instead of ad hoc.

For NoHum, the right move is not to imitate it wholesale.

The right move is to import four things:

1. phase playbooks
2. handoff templates
3. evidence-based gate language
4. memory-backed context transfer patterns

And then fit them inside NoHum's company-first venture-factory model.
