# NOHA-28 Control-Plane Reachability Child-Issue Draft

Date: 2026-05-02
Parent issue: `NOHA-28`
Suggested assignee: `Agent Mechanic`
Suggested collaborator: `SRE`
Suggested status when created: `blocked` or `todo` depending on current platform access

## Suggested Title

Restore Paperclip control-plane reachability from issue workspaces

## Why This Exists

`NOHA-28` is complete at the repo level, but its acceptance check cannot be finished from the current issue workspace because the control plane is unreachable for issue comment and status mutations.

This draft exists so the unblock can become a concrete child issue immediately when API access is available again.

## Problem Statement

From the `NOHA-28` issue workspace:

- direct remote Paperclip API access fails
- direct local listener access fails
- the replay helper fails with `fetch failed`

As a result, the prepared contract comment cannot be posted back to the issue thread from the same runtime that produced the verified artifact.

## Reproduction

Run these commands from the issue workspace:

```bash
curl --noproxy '*' -sv "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID" \
  -H "Authorization: Bearer $PAPERCLIP_API_KEY"

curl --noproxy '*' -sv http://127.0.0.1:3100/health

node scripts/post-issue-update-from-packet.mjs --status done docs/handoffs/noha-28-build-environment-thread-packet.md
```

Current observed symptom set:

- remote API path fails
- local listener path fails
- helper replay path ends with `fetch failed`

## Expected Outcome

Issue workspaces can reach the Paperclip control plane well enough to:

- read issue endpoints needed for normal heartbeats
- PATCH issue status and comments with the required run-id header
- execute `scripts/post-issue-update-from-packet.mjs` successfully

## Acceptance Checks

- `curl --noproxy '*' -sv "$PAPERCLIP_API_URL/api/issues/$PAPERCLIP_TASK_ID"` returns a valid HTTP response instead of a connection failure
- `curl --noproxy '*' -sv http://127.0.0.1:3100/health` either works as a supported local relay path or is explicitly documented as unsupported
- `node scripts/post-issue-update-from-packet.mjs --status done docs/handoffs/noha-28-build-environment-thread-packet.md` succeeds from the workspace and closes `NOHA-28`
- if a local relay is the intended fix, the required route, port, and expectations are documented for future issue workspaces

## Source Artifacts

- `docs/build-environment-contract.md`
- `docs/handoffs/noha-28-build-environment-thread-packet.md`
- `scripts/post-issue-update-from-packet.mjs`

## Handoff Note

Once this unblock issue is resolved, the next action is:

```bash
node scripts/post-issue-update-from-packet.mjs --status done docs/handoffs/noha-28-build-environment-thread-packet.md
```

That should both post the verified contract summary and close `NOHA-28`.

## Suggested Create-Issue Payload Once API Access Is Restored

Use this as the starting payload for the child issue:

```json
{
  "title": "Restore Paperclip control-plane reachability from issue workspaces",
  "parentId": "da1c4fda-fdc0-4e52-9603-be58cda793ea",
  "status": "todo",
  "priority": "medium",
  "description": "Problem: NOHA-28 cannot finish from the issue workspace because direct remote Paperclip API access fails, direct local listener access fails, and the replay helper ends with `fetch failed`. Repro commands and acceptance checks are documented in docs/handoffs/noha-28-control-plane-unblock-child-issue.md. Success means the workspace can reach the control plane well enough to PATCH issue comments and statuses, and `node scripts/post-issue-update-from-packet.mjs --status done docs/handoffs/noha-28-build-environment-thread-packet.md` succeeds."
}
```
