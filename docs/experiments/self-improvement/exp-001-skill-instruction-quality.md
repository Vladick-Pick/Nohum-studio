# Experiment: exp-001-skill-instruction-quality

## Surface

- `surface_id`: `skill_instruction_quality`
- owner: `Agent Mechanic`
- risk class: `low`
- mutation class: deterministic validator rule

## Signal

`scripts/check-agent-skills.mjs` treated runtime-provided skills as missing local skills.

This conflicted with `docs/skill-policy.md`, where the following skills are explicitly runtime-provided:

- `paperclip`
- `paperclip-create-agent`
- `paperclip-knowledge`
- `para-memory-files`

## Hypothesis

If the validator allowlists approved runtime skills while still checking all vendored local skills, package validation becomes accurate without weakening dead-reference detection.

## Primary Metric

- `skill_reference_validation_accuracy`

Baseline:

- `0`
- validator failed on valid runtime skills

Candidate:

- `1`
- validator accepts approved runtime skills and still checks local skills

## Guardrails

- no dead local skill reference may pass
- runtime base skills must not be vendored
- validator output must remain deterministic

## Decision

- `roll_out`

## Write-Back

- updated `scripts/check-agent-skills.mjs`
- updated `docs/skill-policy.md` with self-improvement linkage
- recorded this experiment as the first pilot for `skill_instruction_quality`

## Prevention Note

Validators that inspect agent skill references must distinguish runtime base skills from local package skills. Do not fix this by vendoring runtime skills into `skills/`.
