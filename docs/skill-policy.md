# Skill Policy

This document explains how NoHum Studio agents should combine runtime/base skills with bundled NoHum overlays.

## Principle

Do not replace official Paperclip control-plane behavior with custom local instructions.

Use:

- runtime/base skills for control-plane and specialist execution behavior
- NoHum bundled overlay skills for venture-factory-specific doctrine

## Import Reality

On current official main, company portability imports company metadata and agent prompt bodies.

That means:

- official shared skills such as `paperclip` and `paperclip-create-agent` remain valid runtime assumptions
- local NoHum `skills/` in this repository are bootstrap references and post-import wiring targets, not automatically installed runtime skills
- imported agent prompts must stay self-contained and not depend on local file lookups succeeding

## Mandatory Base Skills

These are the runtime/base skills that define how agents execute work:

- `paperclip`

Why:

- heartbeat procedure
- issue workflow
- checkout discipline
- comments and status updates
- approvals follow-up
- control-plane API usage

Delivery roles also rely on runtime/base engineering skills supplied by the execution environment:

- `writing-plans`
- `test-driven-development`
- `systematic-debugging`
- `verification-before-completion`
- `using-git-worktrees`
- `subagent-driven-development`
- `dispatching-parallel-agents`
- `requesting-code-review`
- `receiving-code-review`
- `finishing-a-development-branch`

These are not bundled in this repository; they are runtime prerequisites for the delivery lane.

## Manager And Ops Runtime Skills

These are required for roles that manage org capacity or keep the company operable:

- `paperclip-create-agent`
- `paperclip-knowledge`

In v1.5 this applies to:

- CEO
- Chief of Staff
- Research Lead
- Launch Lead

## Bundled NoHum Overlay Skills

These skills live in [`skills/`](../skills/) and are the package-local behavior layer:

- `venture-policy`
- `research-scorecard`
- `launch-gates`
- `payment-signal-policy`
- `portfolio-review`
- `research-competitor-analysis`
- `research-demand-validation`
- `research-revenue-validation`
- `launch-product-definition`
- `launch-gtm-readiness`
- `delivery-implementation-loop`
- `delivery-code-review-gate`
- `studio-ops-agent-reliability`

## Per-Role Skill Map

### CEO

- `paperclip`
- `paperclip-create-agent`
- `venture-policy`
- `launch-gates`
- `portfolio-review`

### Chief Of Staff

- `paperclip`
- `paperclip-create-agent`
- `paperclip-knowledge`
- `verification-before-completion`
- `studio-ops-agent-reliability`

### Agent Mechanic

- `paperclip`
- `paperclip-knowledge`
- `systematic-debugging`
- `verification-before-completion`
- `studio-ops-agent-reliability`

### Research Lead

- `paperclip`
- `paperclip-create-agent`
- `venture-policy`
- `research-scorecard`
- `research-competitor-analysis`
- `research-demand-validation`
- `research-revenue-validation`

### Research Specialists

- `Research Synthesizer`: `venture-policy`, `research-scorecard`
- `Competitor Scout`: `research-competitor-analysis`
- `Demand Validator`: `research-demand-validation`
- `Revenue Validator`: `research-revenue-validation`

### Launch Lead

- `paperclip`
- `paperclip-create-agent`
- `venture-policy`
- `launch-gates`
- `payment-signal-policy`
- `portfolio-review`
- `launch-product-definition`
- `launch-gtm-readiness`

### Launch Specialists

- `Product Definer`: `launch-product-definition`
- `Growth Lead`: `launch-gtm-readiness`

### Delivery Specialists

- `Delivery Engineer`: `delivery-implementation-loop` plus runtime delivery skills
- `Code Reviewer`: `delivery-code-review-gate` plus runtime review skills
- `Release Engineer`: runtime release discipline plus `verification-before-completion`

### Support-Feedback

- `Support Lead`: `payment-signal-policy`, `portfolio-review`
- `Feedback Synthesizer`: `portfolio-review`

## Rule of Interpretation

When there is tension between runtime/base skills and a NoHum local note:

1. follow the official `paperclip` control-plane procedure
2. apply NoHum policy on top of it
3. escalate to board if the conflict changes governance, budgets, or approval semantics
