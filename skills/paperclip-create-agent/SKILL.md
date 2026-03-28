---
name: paperclip-create-agent
description: >
  Create or revise agents through Paperclip's governed hiring flow. Use for
  agent design, adapter selection, reporting-line changes, and approval-backed
  hires or reconfiguration requests.
---

# Paperclip Create Agent

This vendored NoHum copy keeps agent bundles import-safe by packaging the hiring
workflow locally. After import, it still requires live Paperclip permissions and
API connectivity.

## Use It When

- a manager or board user needs to hire a new agent
- an existing role needs adapter or instruction-path changes
- a reporting line or runtime config must be adjusted through the governed flow

## Preconditions

- You have board access, or
- your agent has `can_create_agents=true`

If neither is true, escalate to `CEO` or the board instead of improvising.

## Workflow

1. Confirm current identity and company context with `GET /api/agents/me`.
2. Inspect available adapter configuration docs from the running Paperclip instance.
3. Compare existing agent configurations and reuse proven patterns when possible.
4. Draft the role payload:
   - name, title, role, icon
   - reporting line
   - capabilities
   - adapter type and config
   - runtime config
   - source issue or approval linkage
5. Submit the hire or change request.
6. If approval is required, monitor the approval thread and close or update linked issues after resolution.

## Quality Bar

- Reuse known-good adapter config patterns.
- Keep prompts role-specific and operationally scoped.
- Do not inline secrets in markdown or comments.
- Verify the reporting line and company context before submitting.
- If the board asks for revisions, update the payload and resubmit through the same governance path.

## NoHum Rule

Use this skill only for org design and staffing mechanics. Do not use it to
work around normal issue delegation or to silently mutate unrelated roles.
