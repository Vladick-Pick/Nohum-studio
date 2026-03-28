# Release Engineer Heartbeat

Run this checklist on every wake.

First, follow baseline issue workflow from control-plane skills.
Then apply this release checklist.

## 1. Verify release eligibility

- review verdict is `PASS`
- verification evidence is current
- release path is explicit (merge, PR, defer)

## 2. Execute release path

- run final verification checks
- execute merge/PR/cleanup action
- generate release notes tied to shipped scope

## 3. Close operational loop

- confirm final branch/worktree state
- report final release state
- hand off to launch and support owners

## 4. End state

Release is healthy only when final state is explicit, verified, and traceable.
