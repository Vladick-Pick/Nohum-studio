# Module Documentation Standard

This standard defines how NoHum factory modules are documented.

It exists because agents, humans, and architects need the same navigation
surface. A module document is not a marketing explanation. It is a runtime map:
what the module owns, who works inside it, what objects move through it, which
decisions change state, which tools are allowed, and what output proves the
module is done.

## Required Module Passport

Every major NoHum module should have a module passport. Prefer a local
`README.md` in the module directory when one exists. If a module has no
directory yet, use the factory module index until the module is promoted into
its own directory.

Required sections:

| Section | Purpose |
|---|---|
| `Purpose` | why the module exists and which factory outcome it improves |
| `Boundary` | what the module owns and what it must not do |
| `Activation` | what runtime state starts the module |
| `Doctrine` | non-negotiable rules and gate boundaries |
| `Process Map` | large Mermaid map with loops, owners, retries, approvals, and reset paths |
| `Objects` | canonical artifacts, derived artifacts, and invalid substitutes |
| `States` | state machine or state table for objects that move through the module |
| `Decisions` | allowed transition decisions, owners, evidence, and outputs |
| `Agents` | module agents, reporting line, owned outputs, and forbidden approvals |
| `Skills` | mandatory and optional skills used by the module |
| `Tools And MCP` | internal/external tools, secrets, risk classes, and approval rules |
| `Memory` | canonical truth, derived memory, retention, learning write-back |
| `Outputs` | required final artifacts and done condition |
| `Failure Modes` | common drift, invalid shortcuts, blocked states, and recovery paths |
| `Source Map` | links to playbooks, ontology, templates, runbooks, matrices, and checks |

## Source-Of-Truth Rule

Use this hierarchy:

```text
canonical module passport
-> active runtime state
-> operating ontology
-> playbook
-> task/artifact templates
-> tool/access/cost matrices
-> archive only as history
```

If documents conflict, do not merge them by prose. Mark `CONTRACT_CONFLICT`,
identify the conflicting files, and route to the module owner or CEO.

## Object Rule

Each module must name:

- primary object it mutates
- immutable inputs
- derived memory
- final output
- invalid substitutes

Examples:

| Module | Primary object | Immutable input | Final output |
|---|---|---|---|
| Research | `idea_card` | source evidence | `gate_a_packet` |
| Product Bet | `product_bet_card` | frozen `idea_card` + Gate A decision | `gate_b_recommendation` |
| Build | `build_scope` / repo implementation | Gate B decision | release-ready product |
| Support | support/feedback records | launched product and customer events | customer resolution + feedback synthesis |

## Decision Rule

Every transition decision must declare:

```yaml
transition_decision:
  name:
  from_state:
  to_state:
  owner:
  required_evidence:
  required_output:
  cannot_approve:
```

Recommendation is not approval. A module may recommend crossing a gate, but
only the gate owner can approve it.

## Tool And Permission Rule

Each module must separate:

- read-only tools
- draft-only tools
- internal write tools
- external write/publication tools
- financial/spend-bearing tools
- privileged/runtime tools

External, spend-bearing, destructive, credential, and public publication
actions require explicit approval unless an approved gate record already grants
that exact action.

## Memory Rule

Canonical artifacts own truth. Derived memory is an index, not an authority.

Every module must define:

- canonical artifact
- derived memory surfaces
- update trigger
- owner
- retention
- conflict rule

## Consequence And Cause Fix Rule

Every module incident must be fixed twice:

1. `consequence_fix`: repair the current active runtime so work returns to the
   intended process.
2. `cause_fix`: update source repo docs, agent instructions, skills,
   validators, runtime sync, or evals so the same failure is less likely to
   recur.

Do not call an incident fixed if only the consequence was patched.

## Quality Checklist

Before calling a module passport complete:

- it has one clear entrypoint
- it names current runtime activation conditions
- it distinguishes `active_runtime`, `org_library`, `templates`, `archive`,
  and `future_design`
- it links ontology states and transition decisions
- it names agents, skills, tools, MCP, secrets, and cost policy
- it includes loop diagrams and retry routes
- it states done conditions and invalid shortcuts
- it has recovery paths for common failures
- it has checks or a plan to turn repeated rules into validators
