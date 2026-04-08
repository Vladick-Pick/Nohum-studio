# Governance

## Scope

NoHum is an early open design project.

This repository exists to improve the design of a minimal-human venture factory:

- ontology
- workflows
- roles
- skills
- gates
- evals
- observability
- governance

It does **not** make the public a governor of the live NoHum runtime.

## Decision Rights

The repository maintainer retains final decision-making power on:

- architecture direction
- module boundaries
- governance rules
- merge decisions
- maturity labels

Community contributors are invited to:

- propose changes
- open issues
- submit pull requests
- challenge assumptions
- improve weak modules

## Public Design Boundary

Public collaboration is welcome on:

- how the company should work
- how modules should be designed
- how prompts, templates, and workflows should be tightened
- how evals and control surfaces should work

Public collaboration does not directly govern:

- live venture selection
- live budget allocation
- live board approvals
- secrets and credentials
- production customer or payment operations

## Review Rigor by Change Type

Use this rough standard:

- editorial and wording fixes: light review
- prompt, template, and task improvements: normal review
- module contract changes: heavier review
- gate, approval, or governance changes: maintainer approval required
- changes that affect multiple modules: expect discussion first

## Maturity Discipline

NoHum uses maturity labels to avoid pretending everything is equally solved.

- `Reference`: strongest current module; changes should preserve clarity and compatibility unless a break is justified
- `In Progress`: meaningful structure exists; changes should improve coherence
- `Draft`: still exploratory; changes can be more experimental, but should still be explicit and scoped

## ADR Expectation

If a change materially alters:

- ontology
- workflow stage order
- agent ownership
- governance boundaries
- approval logic

it should be explained like an architectural decision, not just merged as a wording patch.

## Live Runtime Rule

This repo is not the live runtime source of truth.

A merged PR here does not automatically mean:

- the live company changed
- a real agent gained permission
- a board policy changed in production
- a venture should be promoted or killed

The public repo and the live runtime are related, but they are not the same surface.
