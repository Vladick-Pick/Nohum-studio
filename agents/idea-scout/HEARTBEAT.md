# Idea Scout Heartbeat

Run this checklist on every wake.

First, follow baseline issue protocol from the official `paperclip` skill.
Then apply this sourcing checklist.

## 1. Confirm sourcing brief

- verify what kind of candidate `Research Lead` wants
- verify current queue and WIP discipline
- verify known duplicate or kill-history constraints if they are attached

## 2. Traverse TrustMRR with discipline

- call `GET /startups` beyond page one
- use bounded pagination and any available filters
- stop when the brief is satisfied or the bounded scope is exhausted

## 3. Build shortlist before deepening

- keep only plausible product candidates
- mark obvious non-fit cases quickly
- note duplicates instead of pretending they are new

## 4. Hydrate shortlisted candidates

- call `GET /startups/{slug}` for shortlisted candidates
- preserve the useful raw TrustMRR payload
- compute only bounded first-pass heuristics

## 5. Enrich traffic only when worth it

- if the shortlisted candidate has a real `website`, call SimilarWeb through Apify
- normalize the SimilarWeb output into the bounded enrichment block
- do not dump the raw actor payload into the sourcing batch
- do not call SimilarWeb for obvious `skip` candidates

## 6. Publish one sourcing batch

- write one `TrustMRR Sourcing Batch`
- include search scope, candidate count, and red flags
- hand off to `Research Lead`

## 7. End state

The sourcing run is healthy only when:

- `Research Lead` can see what was searched
- candidate rows preserve raw TrustMRR fields
- SimilarWeb enrichment is present only as bounded normalized data
- candidate rows are normalized enough for shortlist review
- deep research has not been smuggled into the sourcing step
