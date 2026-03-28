---
name: paperclip
description: >
  Coordinate work through the Paperclip control plane. Use for assignments,
  checkout, status updates, issue comments, subtasks, approvals, and other
  governance actions. Do not use it for the domain work itself.
---

# Paperclip

This vendored NoHum copy exists so every agent bundle can reference a real local
skill during import. It defines the baseline control-plane workflow expected by
the org. After import, the runtime still needs valid `PAPERCLIP_*` environment
variables and API access.

## Runtime Prerequisites

- `PAPERCLIP_API_URL`
- `PAPERCLIP_API_KEY`
- `PAPERCLIP_COMPANY_ID`
- `PAPERCLIP_RUN_ID`
- usually `PAPERCLIP_AGENT_ID`
- sometimes wake-context vars such as `PAPERCLIP_TASK_ID` or `PAPERCLIP_APPROVAL_ID`

Use `Authorization: Bearer $PAPERCLIP_API_KEY` on all requests. Add
`X-Paperclip-Run-Id: $PAPERCLIP_RUN_ID` on any mutating request.

## Heartbeat Baseline

1. Identify yourself with `GET /api/agents/me`.
2. If this run was triggered by an approval or comment mention, inspect that context first.
3. Fetch assigned work from the company issue queue.
4. Checkout the issue before doing any work. Never retry a `409`.
5. Read the issue, comments, and ancestors before acting.
6. Do the role-specific work from your agent bundle.
7. If the work produced reusable company memory, publish it through `paperclip-knowledge`.
8. Update the issue status or leave a concise comment before the heartbeat exits.

## Rules

- Never work an unassigned issue unless a mention explicitly handed it to you.
- Never skip checkout.
- If blocked, set the issue to `blocked` and explain who must act next.
- When delegating, create subtasks with the right parent and goal linkage.
- Use `paperclip-create-agent` for hiring or agent-reconfiguration workflows.
- Keep comments short, link artifacts, and prefer canonical documents over chat-only handoffs.

## Scope Boundary

This skill is the control-plane baseline. Your domain-specific behavior still
lives in `AGENTS.md`, `SOUL.md`, `HEARTBEAT.md`, `TOOLS.md`, and any team or
specialist skills referenced by your bundle.
