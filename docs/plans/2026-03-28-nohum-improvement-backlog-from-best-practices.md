# NoHum Improvement Backlog From Best Practices

Date: 2026-03-28

This document turns the best useful lessons from external reference systems into a concrete NoHum backlog.

Primary sources:

- `gstack`
- `agency-agents`

The goal is not to copy either system.

The goal is to import the parts that strengthen NoHum's company-first venture factory model:

- stronger workflow rigor
- stronger artifact persistence
- stronger readiness checks
- stronger runtime reliability
- stronger packaging and reuse
- stronger phase playbooks
- stronger handoff discipline
- stronger evidence-based review language
- stronger durable context transfer
- narrower role ownership
- stronger skill-first execution
- clearer implementation / review / release separation
- explicit team packaging
- team-level skill bundles
- clearer team responsibility mapping

## 1. What Changes In Agents

### A. Add one shared operating ethos to every important role

Apply to:

- `CEO`
- `Chief of Staff`
- `Research Lead`
- `Launch Lead`
- `Agent Mechanic`
- future specialist leads

Add or tighten the same core principles:

- evidence over narrative
- one queue slot discipline
- first payment over feature completeness
- no hidden state
- canonical artifacts over comments
- do not advance stages without the required artifact

Why:

- `gstack` is coherent because its ethos is coherent
- NoHum needs the same consistency across roles
- `agency-agents` also proves that role libraries only become operational when they share a doctrine

### B. Move every important agent to the four-file runtime bundle standard

For each important agent:

- `AGENTS.md`
- `SOUL.md`
- `HEARTBEAT.md`
- `TOOLS.md`

Current highest-priority gap:

- `Agent Mechanic`

Why:

- role intent, cadence, and allowed tools should not live in one overloaded file

### C. Introduce specialist research roles gradually

Do not hire all at once.

Hire in this order:

1. `Research Synthesizer`
2. `Competitor Scout`
3. `Demand Validator`
4. `Revenue Validator`

Why this order:

- first fix the output quality and handoff quality
- then split the evidence gathering functions

### D. Tighten runtime profiles per role

For each important agent define explicitly:

- skills
- permissions
- heartbeat interval
- wake rules
- budget envelope
- workspace access policy

Why:

- NoHum should not rely on prompt text alone for operational safety

### E. Keep roles narrow and stage-owned

For future hiring and org design, use this rule:

- do not create a role unless it owns a real stage, gate, or reliability surface
- each role must have a clear upstream input
- each role must produce a canonical downstream output

Apply this especially to:

- build roles
- review roles
- release roles
- support roles

Why:

- `Superpowers Dev Shop` is strong because its roles are narrow and workflow-shaped
- NoHum should avoid decorative org growth

### F. Create explicit teams as package units

Add first-class `teams/` definitions for the main NoHum operating surfaces:

- `research`
- `launch`
- `support-feedback`
- `studio-ops`

Each team package should define:

- manager
- member roles
- core skills
- team mission
- main outputs

Why:

- `Product Compass Consulting` demonstrates that `teams/` make the package legible
- NoHum should expose team structure explicitly instead of only through org charts

## 2. What Changes In Diagrams

### A. Add one master orchestration diagram first

Create and maintain:

- `Operating Sequence / Control Plane`

This should sit above all other diagrams.

It must show:

- trigger
- owner
- work
- output
- next trigger

Why:

- current diagrams are good slices
- what is still missing is the top-level sequence that ties them together

### B. Add phase playbooks for every major NoHum phase

Create short phase playbooks for:

1. `Research`
2. `Queue / Gate A`
3. `Venture Definition`
4. `Gate B`
5. `Build`
6. `Launch`
7. `Operate / Feedback`

Each playbook should define:

- trigger
- active agents
- required inputs
- canonical outputs
- gate or exit condition
- escalation path

Why:

- this is one of the strongest imports from `agency-agents`
- NoHum needs phase-level execution doctrine, not only stage labels

### F. Add a simple handoff chain inside the build subsystem

Inside the NoHum build/launch subsystem, make the delivery chain explicit:

- plan / definition
- implementation
- review
- release

Do not collapse these into one vague "launch team executes everything" box.

Why:

- `Superpowers Dev Shop` is strong because its delivery chain is simple and legible
- NoHum needs the same clarity inside venture execution

### G. Add a clear team responsibility map

For the board map and operating atlas, publish a responsibility view that answers:

- which team owns which phase
- which team owns which artifact
- which team receives the next handoff
- where CEO only routes and synthesizes rather than executes

Why:

- `Product Compass Consulting` is easy to read because the teams map cleanly to domains
- NoHum needs the same clarity across research, launch, support, and studio operations

### C. Add trigger and handoff annotations to every machine diagram

Every machine diagram should show:

- who wakes
- what triggers the step
- what canonical artifact comes out
- who receives the handoff

Apply to:

- `Research Machine`
- `Launch Machine`
- `Venture Lifecycle`
- `Artifact Flow`

### D. Mark every box as `LIVE`, `PARTIAL`, or `TARGET`

This is already partly present and should become mandatory.

Why:

- otherwise the board starts reading aspirational design as implemented system

### E. Add one runtime settings board

A visual matrix for:

- agent
- manager
- role
- files bundle
- skills
- permissions
- heartbeat
- wakeOnDemand
- budget cap

Why:

- this is one of the easiest ways to see where the real system is still weak

## 3. What Gets Added To Studio OS

### A. Readiness check artifacts

Add four reusable readiness artifacts:

1. `Research Readiness`
2. `Gate A Readiness`
3. `Gate B Readiness`
4. `Launch Readiness`

Each one must be:

- a checklist
- a decision surface
- tied to required artifacts

Why:

- this is the closest useful import from `gstack`'s review-readiness discipline

### B. Standard handoff templates

Add reusable handoff templates for:

- research specialist -> research specialist
- research -> launch
- product definition -> build
- launch -> support
- payment ambiguity -> board

Each template should force:

- context
- deliverable needed
- acceptance criteria
- evidence required
- next receiver

Also add explicit template families for:

- specialist evidence handoff
- gate review packet
- retry / fail / escalation
- board ambiguity packet

Why:

- `agency-agents` gets real leverage from standardized handoffs
- NoHum needs this to stop context loss between research, launch, support, and board review

### C. Phase playbook documents in Studio OS

Publish reusable Studio OS playbooks for:

- `Research Playbook`
- `Gate A Playbook`
- `Venture Definition Playbook`
- `Gate B Playbook`
- `Launch Playbook`
- `Portfolio Review Playbook`

Each playbook should be short and operational:

- what starts the phase
- who wakes first
- who may work in parallel
- what artifact is canonical
- what blocks advancement
- who signs off

Why:

- this is the cleanest import from `agency-agents`' `NEXUS` doctrine
- NoHum needs reproducible execution surfaces, not only policy prose

### D. Treat skills as a real operating substrate

For every major role or team, define:

- which skills are mandatory
- which skills are optional
- which skills are disallowed
- which skills are phase-specific

This should be explicit for:

- `CEO`
- `Chief of Staff`
- `Research Lead`
- `Launch Lead`
- `Agent Mechanic`
- future build/review/release roles

Why:

- `Superpowers Dev Shop` is powerful because the package is thin but the skill substrate is strong
- NoHum should keep company structure for ownership and skills for repeatable execution

At the team layer, also define:

- team-default skills
- specialist-only skills
- shared team references and constraints

Why:

- `Product Compass Consulting` shows that team-level skill bundles improve readability and reuse

### E. Artifact logging and review logs

Create a durable `Studio OS` logging model for:

- readiness results
- gate outcomes
- failed reviews
- retries
- escalations
- postmortems

Why:

- `gstack` is strong because state survives the session
- NoHum needs the same durability for machine learning and org debugging
- `agency-agents` reinforces that memory-backed transfer is a force multiplier when the artifacts are structured

### F. Durable context transfer rules

Add a formal context-transfer model:

- no comments-only handoffs for phase transitions
- every cross-role handoff must point to a canonical artifact
- every receiving role must know the exact source-of-truth document
- failed work must preserve rollback-friendly state

Later implementation options:

- Paperclip knowledge docs
- file-backed venture artifacts
- future memory integration

Why:

- `agency-agents` is correct that manual copy-paste handoffs do not scale
- NoHum should adopt the pattern even if the implementation layer evolves later

### G. Separate implementation, review, and release in venture execution

When a venture eventually reaches build:

- implementation owner must not be the final reviewer
- reviewer must not be the release owner
- release should have its own clean completion step

Even if one person or one small pod temporarily fills multiple roles, the workflow must preserve these as distinct stages.

Why:

- this is one of the best imports from `Superpowers Dev Shop`
- NoHum needs clean quality boundaries inside the venture lane

### H. Keep CEO as routing and synthesis layer

Strengthen the CEO contract so it stays explicit that the CEO:

- receives new work
- routes it to the right team
- sequences cross-team work
- synthesizes results for decisions
- owns gates and escalation

and does not become the default domain worker.

Why:

- `Product Compass Consulting` gets this right
- NoHum's CEO must stay an allocator and synthesizer, not a generalist executor

### I. First two production routines

Build these before the rest:

1. `Promote To Venture`
2. `Record Payment Signal`

Why these two first:

- they convert policy into real stage movement
- they eliminate the biggest current manual gaps

### J. Reliability loop owned by Agent Mechanic

Add a `Studio OS` queue for:

- agent non-execution
- stale instructions
- broken workspace or tools
- repeated run-without-output failures

Why:

- reliability must become a first-class system surface

## 4. What Gets Added To Governance

### A. Explicit readiness gates

Before a stage transition, require the relevant readiness artifact.

That means:

- no `research -> queued` without a finished queue package
- no `queued -> venture` without `Gate A Readiness`
- no `venture -> build` without `Gate B Readiness`
- no launch acceptance without `Launch Readiness`

Add review language requirements:

- `PASS`
- `FAIL`
- `RETRY`
- `ESCALATE`

Every decision must include:

- artifact reviewed
- evidence referenced
- blocking gaps
- next owner

Why:

- `gstack` contributes review rigor
- `agency-agents` contributes concrete pass/fail/escalation language

### B. Escalation ladder

Add a formal escalation chain:

1. role owner
2. team lead
3. `Chief of Staff`
4. `CEO`
5. board if needed

Why:

- blocked work should not bounce around informally

### C. Reliability ownership

Assign explicitly:

- `Chief of Staff` owns org health and cadence
- `Agent Mechanic` owns agent reliability failures
- `CEO` owns allocation, gates, and queue discipline

### D. Weekly operating review

Add one weekly governance loop with:

- queue status
- venture status
- blocked agents
- readiness failures
- payment ambiguity
- support burden
- portfolio health

This should later become the NoHum equivalent of a runtime retro.

## 5. Priority Order

Do the backlog in this order:

1. `Agent Mechanic` full runtime bundle
2. master orchestration diagram
3. phase playbooks
4. handoff templates
5. readiness artifacts
6. durable context transfer rules
7. skill matrix per role
8. explicit `teams/` packaging
9. team responsibility map
10. build subsystem separation: implementation / review / release
11. `Promote To Venture` routine
12. `Record Payment Signal` routine
13. specialist research pod hiring
14. weekly operating review

## 6. Immediate Next Tasks

If turning this into live work, create these `Studio OS` tasks:

1. `Standardize Agent Mechanic runtime bundle`
2. `Design master operating-sequence diagram`
3. `Write phase playbooks for Research, Gate A, Venture Definition, Gate B, Launch, and Portfolio`
4. `Design readiness artifacts for Research, Gate A, Gate B, and Launch`
5. `Create canonical NoHum handoff templates`
6. `Define durable context-transfer rules for cross-role work`
7. `Define skill matrix and allowed tool substrate per major role`
8. `Define explicit NoHum teams packages and team-level skill bundles`
9. `Publish a team responsibility map across phases and artifacts`
10. `Design venture execution split: implementation, review, and release`
11. `Implement Promote To Venture routine`
12. `Implement Record Payment Signal routine`

## 7. Final Principle

The correct import from these references is:

- stronger workflow rigor
- stronger artifact durability
- stronger readiness discipline
- stronger tool and reliability substrate
- stronger phase doctrine
- stronger handoff formalization
- stronger evidence language
- narrower role ownership
- stronger skill-first execution
- cleaner implementation / review / release boundaries
- explicit team packaging
- team-level skill bundles
- clearer routing and team ownership

The wrong import would be:

- collapsing NoHum into a slash-command toolkit for one operator
- importing a giant undisciplined roster of decorative roles

NoHum should stay:

- company-first
- gate-driven
- artifact-driven
- venture-native
