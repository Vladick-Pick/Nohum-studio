# Gate A Decision Template

Gate A opens product definition, not build.

Research gathers facts and writes the Gate A packet. CEO records the management
contract.

```yaml
gate_a_decision:
  id: gad-YYYYMMDD-slug
  action: approve_product_bet_definition | reject | hold | request_more_research
  idea_card_ref:
  research_case_id:
  decided_at:
  decision_owner: ceo

  approved_direction:
    market:
    buyer_segment:
    competitor_pattern:
    product_category:

  constraints:
    max_definition_time:
    max_test_budget_cents:
    allowed_external_actions:
    forbidden_external_actions:
    forbidden_claims:
    legal_platform_risks:
    stack_constraints:

  next_owner: launch_lead
  next_task: Run Product Bet Validation Sprint
```

## Field Ownership

| Field | Meaning | Source | Final owner |
|---|---|---|---|
| `action` | разрешить Product Bet Validation или вернуть назад | Research recommendation | CEO |
| `idea_card_ref` | frozen Idea Card | Research Lead | CEO records |
| `research_case_id` | ID research case | Research Lead | CEO records |
| `market` | какой рынок прошел Gate A | Research | CEO fixes |
| `buyer_segment` | какой сегмент разрешено прорабатывать | Research | CEO may narrow |
| `competitor_pattern` | какой рыночный паттерн берем | Competitor section | CEO fixes |
| `product_category` | категория продукта | Research | CEO fixes |
| `max_definition_time` | timebox до Gate B recommendation | CEO | CEO |
| `max_test_budget_cents` | бюджет тестов до Gate B | CEO | CEO |
| `allowed_external_actions` | landing, directory, public posts, pricing CTA, etc. | Launch Lead may propose later | CEO approves |
| `forbidden_external_actions` | actions blocked before later approval | policy and CEO | CEO |
| `forbidden_claims` | что нельзя обещать | Research risks | CEO fixes |
| `legal_platform_risks` | ToS/platform/legal boundaries | Research | CEO fixes |
| `stack_constraints` | canonical stack / exception needed | Operating Spec | CEO fixes |
| `next_owner` | кто ведет дальше | fixed | CEO |

## Decision Rules

- `approve_product_bet_definition`: CEO creates one Product Bet Validation Sprint assigned to Launch Lead.
- `reject`: candidate exits the queue.
- `hold`: candidate stays parked with explicit refresh requirement.
- `request_more_research`: Research Lead gets a research-delta task.

Gate A does not authorize build, public deploy, outreach send, paid spend, or
payment collection.
