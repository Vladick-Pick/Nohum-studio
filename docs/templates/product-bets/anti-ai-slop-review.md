# Anti AI Slop Review

Owner: `landing-surface-builder`

```yaml
anti_ai_slop_review:
  id: aisr-YYYYMMDD-slug
  surface_version_ref:
  owner: landing-surface-builder
  created_at:
```

## Checks

```yaml
checks:
  promotional_puffery:
    status: pass | warn | fail
    examples:
  vague_superlatives:
    status: pass | warn | fail
    examples:
  generic_AI_phrasing:
    status: pass | warn | fail
    examples:
  unsupported_specific_claims:
    status: pass | warn | fail
    examples:
  fake_or_unverifiable_proof:
    status: pass | warn | fail
    examples:
  broken_or_suspicious_citations:
    status: pass | warn | fail
    examples:
  audience_language_match:
    status: pass | warn | fail
    examples:
```

## Rewrite Notes

```yaml
rewrite_notes:
  lines_to_remove:
  lines_to_rewrite:
  stronger_customer_language:
  claims_to_downgrade:
  final_status: pass | retry | escalate
```

Rule: this is a copy quality lint, not an AI detector.
