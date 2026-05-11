# Experiment: exp-001-skill-instruction-quality

## Surface

- `surface_id`: `skill_instruction_quality`
- owner: `Agent Mechanic`
- risk class: `low`
- mutation class: deterministic validator rule

## Signal

`scripts/check-agent-skills.mjs` once treated runtime-provided skills as missing local skills, then overcorrected by allowlisting them even when the import package did not contain matching `skills/<slug>/SKILL.md` files.

This conflicted with `docs/skill-policy.md`, where the following skills are explicitly runtime-provided:

- `paperclip`
- `paperclip-create-agent`
- `paperclip-knowledge`
- `para-memory-files`

## Hypothesis

If the package mirrors every agent-referenced base skill and the validator requires a physical `skills/<slug>/SKILL.md`, package validation matches the import contract without weakening dead-reference detection.

## Primary Metric

- `skill_reference_validation_accuracy`

Baseline:

- `0`
- validator failed on valid runtime skills

Candidate:

- `1`
- validator requires package skill files for base and local skills

## Guardrails

- no dead local skill reference may pass
- runtime base skill mirrors must stay source-aligned and narrow
- validator output must remain deterministic

## Decision

- `roll_out`

## Write-Back

- updated `scripts/check-agent-skills.mjs`
- mirrored runtime base skills required by agent frontmatter into `skills/`
- updated `docs/skill-policy.md` with self-improvement linkage
- recorded this experiment as the first pilot for `skill_instruction_quality`

## Prevention Note

Validators that inspect agent skill references must enforce the import contract: if an agent references a skill shortname, the package needs a matching `skills/<slug>/SKILL.md` or an explicitly supported external reference mechanism.
