# Validation Surface Hosting Runbook

Owner: `vp-of-engineering`

Operational owner: `sre`

Process owner: `launch-lead`

This runbook defines the repeatable infrastructure contract for Product Bet
validation surfaces under `claricont.com`.

It is a runtime-hosting runbook, not a Product Bet approval. A working host only
unblocks surface review, publication approval, measurement, and traffic when the
Product Bet ontology gates also pass.

## Scope

Use this runbook when a Product Bet validation surface needs a board-review
preview or public validation host.

Default host shape:

```yaml
validation_surface_host:
  base_domain: claricont.com
  preferred_host: https://<surface-slug>.claricont.com
  wildcard_dns: "*.claricont.com"
  raw_ip_urls_allowed_for_board_or_public_traffic: false
  preview_indexing_policy: noindex
  traffic_attribution_for_preview: internal_test
```

This runbook covers DNS, TLS, reverse proxy routing, preview noindex behavior,
runtime service management, verification, and blocker routing.

It does not authorize:

- public traffic before surface publication approval
- observation evidence before tracking QA
- Gate B recommendation before Evidence Router
- build, payment, support, paid spend, or customer promises

## Current Runtime Implementation

The current NoHum validation host on `paperclip-vps` uses this shape:

```text
Timeweb DNS
  -> wildcard A record for *.claricont.com
  -> VPS public IP
  -> Traefik websecure entrypoint
  -> Let's Encrypt DNS-01 wildcard certificate
  -> host route for <surface-slug>.claricont.com
  -> local validation surface service
```

Current operational files on the VPS are runtime state, not repo source:

| Runtime file | Purpose |
|---|---|
| `/home/n8n/docker-compose.yml` | Traefik container and ACME resolver wiring |
| `/home/n8n/paperclip.yml` | Traefik dynamic routes/middlewares/services |
| `/home/n8n/.env` | DNS provider token environment, root-owned; never copy values into issues/docs |
| `/etc/systemd/system/nohum-validation-surface.service` | Keeps the current validation surface server running |

The active implementation is a shared wildcard route to the current validation
surface server. That is enough to unblock current validation hosting. It is not
yet a multi-surface publisher.

## Target Runtime Architecture

The target system should eventually separate publishing from individual surface
servers:

```text
surface_version artifact
  -> validation-surface-publisher
  -> immutable surface build/static bundle
  -> slug registry
  -> wildcard HTTPS gateway
  -> <surface-slug>.claricont.com
  -> event collector / analytics contract
```

Until that publisher/gateway exists, every hosted surface must explicitly record
whether it uses:

- `shared_wildcard_route_current_surface`
- `dedicated_surface_service`
- `static_publisher_gateway`

Do not let this ambiguity leak into Product Bet evidence. Traffic attempts must
reference the exact `surface_version` and host implementation used.

## Secrets And Access

DNS provider credentials are infrastructure secrets.

Rules:

- Do not paste DNS/API tokens into issues, approvals, docs, prompts, or git.
- Store provider tokens only in the runtime secret mechanism or root-owned
  environment files when there is no better secret store.
- If a token was pasted into chat or logs during emergency setup, rotate it
  after the surface host is stable.
- Agents may verify secret presence and provider behavior, but must not print
  secret values.

Required secret state for Timeweb-backed DNS-01:

```yaml
runtime_secret_refs:
  TIMEWEBCLOUD_AUTH_TOKEN:
    purpose: Traefik DNS-01 wildcard certificate issuance
    owner: infrastructure/operator
    visibility: runtime_only
```

## Required DNS State

For `claricont.com`, at least one of these must be true:

```yaml
dns:
  wildcard_a:
    name: "*.claricont.com"
    type: A
    value: <paperclip_vps_public_ip>
  exact_a:
    name: "<surface-slug>.claricont.com"
    type: A
    value: <paperclip_vps_public_ip>
```

Preferred setup is wildcard DNS so future validation surfaces do not require
manual DNS work for each slug.

`claricont.com` resolving alone is not enough. The exact surface host or
wildcard must resolve to the validation host.

## Required TLS State

Preferred TLS setup:

```yaml
tls:
  resolver: lets_encrypt_dns_01
  certificate_names:
    - "*.claricont.com"
    - "claricont.com"
  min_result: valid_certificate_for_surface_host
```

Do not approve publication from a raw HTTP endpoint, invalid certificate, IP
address URL, or browser-warning URL.

## Required Reverse Proxy State

The reverse proxy must have a host route for the surface.

Minimum route contract:

```yaml
reverse_proxy:
  surface_route:
    match: Host(`<surface-slug>.claricont.com`) or wildcard HostRegexp
    service: current_validation_surface
    priority: higher_than_generic_fallback_when_exact
  noindex_middleware:
    X-Robots-Tag: noindex, nofollow, noarchive
  paperclip_route:
    match: Host(`paperclip.claricont.com`)
    priority: higher_than_wildcard_surface
```

If the wildcard route exists, exact product routes must not accidentally capture
Paperclip, n8n, or other operational subdomains.

## Required Surface Service State

The surface server must be supervised.

Minimum service contract:

```yaml
service:
  name: nohum-validation-surface.service
  supervisor: systemd
  restart_policy: always
  health:
    local_port_returns_200: true
    public_host_returns_200: true
```

A manually started `node` or preview server is acceptable only for short local
QA. It is not acceptable for board-review preview or public validation traffic.

## Verification Checklist

Before `validation_hosting_ready: PASS`, record all checks:

```yaml
validation_hosting_check:
  public_url:
  surface_slug:
  surface_version_ref:
  host_implementation:
    one_of:
      - shared_wildcard_route_current_surface
      - dedicated_surface_service
      - static_publisher_gateway
  dns_resolves: pass | fail
  tls_valid: pass | fail
  certificate_covers_host: pass | fail
  reverse_proxy_routes_to_surface: pass | fail
  noindex_present_for_preview: pass | fail
  robots_or_header_policy:
  paperclip_operational_routes_unaffected: pass | fail
  service_supervised: pass | fail
  local_health_check: pass | fail
  public_health_check: pass | fail
  internal_test_attribution_for_preview: pass | fail | not_applicable
  checked_by:
  checked_at:
  status: pass | blocked
```

Recommended command probes for an operator or SRE:

```bash
dig +short <surface-slug>.claricont.com
curl -I https://<surface-slug>.claricont.com
openssl s_client -connect <surface-slug>.claricont.com:443 -servername <surface-slug>.claricont.com </dev/null
systemctl is-active nohum-validation-surface.service
```

Do not paste command output containing secrets. Certificate SANs, status codes,
headers, and service status are safe to summarize.

## Product Bet Runtime Routing

Validation hosting is a dependency gate, not a Product Bet decision.

State transitions:

| Current state | Condition | Decision |
|---|---|---|
| `surface_version` exists but host is missing | DNS/TLS/proxy/service check fails | record `validation_hosting_blocked`; create/keep SRE or VP Engineering blocker |
| Host exists but surface quality gates failed | `surface_conversion_quality_review` or `visual_conversion_review` is not `PASS` | route `RETRY` to Landing Surface Builder / UI / UX owner |
| Host and surface quality pass | preview is noindex and internal-test attributed | request board-review preview/publication approval |
| Publication approved and tracking QA passes | measurement contract exists | unblock organic traffic attempts |

Invalid shortcuts:

- closing Product Bet sprint because a host works
- starting traffic from an IP URL when the validation domain is available
- treating board-review visits as market evidence
- letting SRE or VP Engineering approve Product Bet publication
- treating a shared wildcard route as an immutable surface registry

## Blocker Comment Template

Use this shape when hosting is not ready:

```md
## validation_hosting_blocked

- Surface: `<surface_version_ref>`
- Intended URL: `https://<surface-slug>.claricont.com`
- Failing check: `dns_resolves | tls_valid | reverse_proxy_routes_to_surface | noindex_present | service_supervised`
- Evidence: `<short non-secret evidence>`
- Required owner: `SRE | VP of Engineering | Board/operator`
- Product Bet boundary: no publication, traffic, observation, Evidence Router, Gate B, build, payment, support, or spend until this passes.
```

Use this shape when hosting is ready:

```md
## validation_hosting_ready

- Surface: `<surface_version_ref>`
- Public/review URL: `https://<surface-slug>.claricont.com`
- DNS: PASS
- TLS: PASS
- Reverse proxy: PASS
- Preview noindex/internal-test attribution: PASS
- Service supervision: PASS
- Remaining gate: Launch Lead must still verify surface quality, visual conversion, board approval, measurement, and tracking QA before traffic.
```

## Incident Learning

If hosting blocked an active Product Bet sprint, preserve the incident as
process evidence:

- what gate caught or missed the missing host
- whether runtime tasks were created out of order
- whether board approval requested a raw IP URL
- whether the surface was served by supervised infrastructure
- whether an operator token was exposed and needs rotation

Do not solve repeated hosting failures with ad hoc comments. Promote repeated
failures into this runbook, checks, importer docs, or runtime automation.
