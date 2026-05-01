# Superpowers Dev Shop Review

Date: 2026-03-28
Source: https://companies.sh/paperclipai/companies/superpowers
Catalog snapshot: companies.sh API
Package source: `paperclipai/companies/superpowers`

## What It Is

`Superpowers Dev Shop` is a compact Paperclip company package built around the `obra/superpowers` development methodology.

It is not a broad multi-division company and not a venture factory. It is a focused software delivery company whose main value is:

- disciplined software workflow
- a compact org
- strong skill-first execution
- explicit quality and release flow

The package is intentionally small:

- `CEO`
- `Lead Engineer`
- `Code Reviewer`
- `Release Engineer`

The company does not try to model every business function. It models a very specific pipeline: plan, build, review, ship.

## Package Shape

The package has:

- `COMPANY.md`
- `.paperclip.yaml`
- 4 agent folders, each with `AGENTS.md`
- 14 imported skills from `obra/superpowers`

Unlike NoHum, it currently does not use a richer per-agent file bundle such as:

- `SOUL.md`
- `HEARTBEAT.md`
- `TOOLS.md`

So the package is operationally clean, but thinner than the runtime standard we are moving toward in NoHum.

## Core Workflow

The workflow is deliberately linear:

1. `CEO`
   - brainstorms
   - turns approved design into an implementation plan

2. `Lead Engineer`
   - creates worktree
   - implements with TDD
   - may use subagents and parallel execution

3. `Code Reviewer`
   - reviews against the original plan
   - verifies quality and tests
   - approves or sends back for fixes

4. `Release Engineer`
   - handles merge / PR / cleanup
   - closes the loop

This is a very strong example of a company package whose org is intentionally shaped around one workflow instead of generic job titles.

## What It Gets Right

### 1. Extremely Clear Company Scope

This company is not trying to do everything.

It answers one question well:

"How should a disciplined coding shop operate inside Paperclip?"

That clarity is a strength.

### 2. Skills Are the Real Operating System

The main intelligence lives in the imported `superpowers` skills:

- brainstorming
- writing-plans
- test-driven-development
- systematic-debugging
- verification-before-completion
- finishing-a-development-branch
- and others

This makes the company package lean while still powerful.

### 3. The Roles Are Mapped to the Workflow, Not to Org Theater

Every role exists because it owns a stage:

- `CEO` owns intake and planning
- `Lead Engineer` owns implementation
- `Code Reviewer` owns quality gate
- `Release Engineer` owns shipping

There are no decorative roles.

### 4. The Handoff Chain Is Simple

The package avoids orchestration ambiguity.

Each role has:

- a clear input
- a clear output
- a clear next receiver

That makes the company easy to understand and easy to run.

### 5. It Uses Company Packaging the Right Way

This is an example of a company package as a reusable operating preset:

- narrow purpose
- coherent roles
- coherent skill stack
- importable into Paperclip without excess structure

That validates the packaging direction we are taking with `Nohum-studio`.

## Where It Is Weak For NoHum

### 1. It Is Not a Venture System

It has no notion of:

- sourcing
- queue discipline
- Gate A / Gate B
- venture lanes
- payment validation
- portfolio states
- retire / revisit logic

For NoHum, these are core requirements.

### 2. It Is Software-Delivery First

Its lifecycle is roughly:

- idea
- design
- implementation plan
- build
- review
- release

Our lifecycle is different:

- source
- research
- queue
- Gate A
- venture
- product definition
- Gate B
- build
- launch
- payment review
- portfolio / kill / retire

So `Superpowers Dev Shop` is a better reference for our internal build machinery than for our top-level company design.

### 3. The CEO Is More Like a Planning Lead

Their CEO is the intake and planning function.

For NoHum, our CEO must also own:

- queue discipline
- WIP discipline
- capital allocation
- board-facing gates
- company-shape integrity

So the role is much heavier in our model.

### 4. There Is No Explicit Reliability or Operating Cadence Layer

No roles like:

- `Chief of Staff`
- `Agent Mechanic`

NoHum needs those because our machine is broader and more failure-prone.

## Best Ideas To Import Into NoHum

### 1. Keep Workflows Narrow and Role-Shaped

The best lesson here is:

do not invent roles unless they own a real stage in the machine.

This is especially useful for future NoHum hiring.

### 2. Make Skills the Operational Substrate

This company proves that a small company package can be very strong if the skill layer is strong.

For NoHum this means:

- keep company structure for ownership and governance
- keep skills for repeatable specialist behavior

### 3. Preserve the Simple Handoff Chain

We should keep the same discipline in our own lanes:

- one owner per stage
- one canonical output
- one next receiver

### 4. Separate Build Execution from Review and Release

This is particularly valuable for NoHum's launch/build org.

We should import the logic that:

- implementation
- review
- release

are separate responsibilities, even if one venture is small.

### 5. Treat Package Coherence as a Feature

`Superpowers Dev Shop` is persuasive because everything inside points in the same direction.

NoHum should do the same:

- a coherent org
- a coherent skill stack
- a coherent lifecycle
- a coherent artifact model

## What NoHum Should Not Copy

Do not copy:

- the tiny org as our top-level company model
- the absence of stage/governance artifacts
- the AGENTS-only runtime bundle
- the assumption that all work is software implementation work

## Practical Conclusion

`Superpowers Dev Shop` is a very good reference for one specific layer of NoHum:

- the build/review/release subsystem

It is not a reference for:

- research machine
- venture governance
- queue management
- payment review
- portfolio logic

So the right import is narrow:

1. skill-first execution discipline
2. small, role-shaped delivery teams
3. explicit build -> review -> release chain
4. coherent package design

The wrong import would be turning all of NoHum into a software dev shop and losing the venture-factory layer.
