# Company World Model Delta: exp-001-skill-instruction-quality

## Delta

- resolved validator drift between package skill policy and deterministic skill checker
- reduced false-positive runtime drift for Paperclip base skills
- preserved dead local skill reference detection

## Affected Surfaces

- `skill_instruction_quality`
- `runtime_reliability`

## Follow-Up

- keep runtime base skills allowlisted in validators
- do not vendor runtime base skills into `skills/`
- use this experiment as the reference pattern for future skill/instruction drift fixes
