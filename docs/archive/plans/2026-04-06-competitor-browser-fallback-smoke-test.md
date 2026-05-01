# Competitor Browser Fallback Smoke Test

## Environment

- command surface: `python3 scripts/competitor_site_analysis.py`
- browser dependency: `python3 -m pip install --user playwright`
- browser install: `python3 -m playwright install chromium`

## Smoke Test 1: HTML-first is enough

Command:

```bash
python3 scripts/competitor_site_analysis.py https://lockedinai.com --fallback-mode auto --pretty
```

Observed result:

- `browser_fallback.used = false`
- HTML-first recovered:
  - `value_proposition`
  - `pricing_visibility = visible`
  - visible prices including `$54.99`
  - `cta_to_first_payment`
  - workflow snippets

Interpretation:

- this is the expected fast-path case
- browser rendering was not needed

## Smoke Test 2: Browser fallback recovers missing pricing

Command:

```bash
python3 scripts/competitor_site_analysis.py https://vervecopilot.com --fallback-mode auto --pretty
```

Observed result:

- `html_first.unresolved_fields = ["pricing_visibility"]`
- `browser_fallback.used = true`
- browser fallback recovered:
  - `pricing_visibility = visible`
  - plan-price snippets including `$34.99` and `$16.99`

Interpretation:

- HTML-first could see the pricing page, but not enough numeric evidence to mark pricing as visible
- browser rendering recovered the missing pricing signal correctly

## Current Caveats

- the fallback improves pricing recovery more than CTA-path recovery
- some sites still expose noisy headings or nav labels that require analyst judgment in the evidence card
- this is a bounded recovery layer, not a full site crawler
