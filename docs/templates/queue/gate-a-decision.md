# Gate A Decision Template

- queue candidate
- decision: PASS / FAIL / RETRY / ESCALATE
- decision owner
- rationale
- if PASS:
  - `venture_id`
  - next owner
- if FAIL or RETRY:
  - return path
  - refresh requirement
