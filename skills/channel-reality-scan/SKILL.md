---
name: channel-reality-scan
description: Use when checking whether a product bet has a plausible reachable first channel.
---

# Channel Reality Scan

## Purpose

Assess whether the buyer can be reached cheaply enough for an early RAT or
pre-Gate-A recommendation.

## Checks

- source where buyers already gather
- channel evidence from competitors
- search or community reachability
- outbound feasibility
- channel cost and reputation risk

## Output

```yaml
channel_reachability: pass | warn | fail
first_channel_hypothesis:
evidence_refs: []
risks: []
```

Do not send outreach or launch campaigns.
