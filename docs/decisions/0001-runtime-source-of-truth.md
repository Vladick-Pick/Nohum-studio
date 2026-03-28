# Decision 0001: Live Runtime Truth After Import

## Decision

After the bootstrap package is imported, the live source of truth becomes the Paperclip company runtime, not this repository.

## Why

- the real org state lives in agents, approvals, tasks, and budgets inside Paperclip
- day-to-day venture operations happen on the live system
- this repository exists to bootstrap, document, and rebuild the company if needed

## Implication

Treat this repository as:

- bootstrap artifact
- design archive
- recovery seed

Do not mistake it for the always-live runtime dashboard.
