import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const repoUrl = "https://github.com/Vladick-Pick/Nohum-studio";
const generatedAt = "2026-03-28T17:30:00Z";

const coreReplaceAgents = ["ceo", "research-lead", "launch-lead"];

const preservedAgents = [
  {
    slug: "ceo",
    name: "CEO",
    title: "Chief Executive Officer",
    role: "ceo",
    icon: "crown",
    reportsToSlug: null,
    path: "agents/ceo/AGENTS.md",
    capabilities:
      "Owns venture factory policy, WIP, budget headroom, gate approvals, and executive manager coordination.",
    budgetMonthlyCents: 25000,
    canCreateAgents: true,
    teamSlug: "control-plane",
    tools: "Paperclip API, governance docs, portfolio reviews",
    mcp: "paperclip, paperclip-knowledge, optional GitHub read",
    secrets: ["OPENAI_API_KEY"],
    restrictions: ["No board credentials in runtime", "No direct code shipping"],
    postImport: "Verify control-plane approvals and governance docs are wired.",
  },
  {
    slug: "chief-of-staff",
    name: "Chief of Staff",
    title: "Chief of Staff",
    role: "pm",
    icon: "target",
    reportsToSlug: "ceo",
    path: "agents/chief-of-staff/AGENTS.md",
    capabilities:
      "Owns cadence, blocked-work triage, cross-team sequencing, and operating review preparation.",
    budgetMonthlyCents: 18000,
    canCreateAgents: true,
    teamSlug: "studio-ops",
    tools: "Paperclip API, task/project monitoring, org docs",
    mcp: "paperclip, paperclip-knowledge, optional GitHub read",
    secrets: ["OPENAI_API_KEY"],
    restrictions: ["No production release actions", "No board-only overrides"],
    postImport: "Keep wake-on-demand available and wire cadence dashboards after import.",
  },
  {
    slug: "agent-mechanic",
    name: "Agent Mechanic",
    title: "Agent Reliability Engineer",
    role: "devops",
    icon: "wrench",
    reportsToSlug: "chief-of-staff",
    path: "agents/agent-mechanic/AGENTS.md",
    capabilities:
      "Owns runtime, prompt, tool, and workspace reliability failures plus preventive fixes.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    teamSlug: "studio-ops",
    tools: "Paperclip API, runtime logs, repo inspection, health checks",
    mcp: "paperclip, paperclip-knowledge, optional GitHub plus browser diagnostics",
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: ["No gate approvals", "No strategy overrides"],
    postImport: "Grant diagnostic-only access to runtime paths and tool health scripts.",
  },
  {
    slug: "research-lead",
    name: "Research Lead",
    title: "Head of Research",
    role: "researcher",
    icon: "search",
    reportsToSlug: "ceo",
    path: "agents/research-lead/AGENTS.md",
    capabilities:
      "Owns sourcing, market evidence, economics, queue discipline, and final QUEUE/KILL recommendations.",
    budgetMonthlyCents: 18000,
    canCreateAgents: true,
    teamSlug: "research",
    tools: "Research docs, queue package, evidence registry",
    mcp: "paperclip, paperclip-knowledge, browser research, optional memory",
    secrets: ["OPENAI_API_KEY", "APIFY_TOKEN"],
    restrictions: ["No build or release writes", "No bypass of Gate A evidence"],
    postImport: "Existing live core slug should upgrade in place.",
  },
  {
    slug: "research-synthesizer",
    name: "Research Synthesizer",
    title: "Research Synthesis Specialist",
    role: "researcher",
    icon: "brain",
    reportsToSlug: "research-lead",
    path: "agents/research-synthesizer/AGENTS.md",
    capabilities:
      "Turns raw research into canonical queue packages, assumption maps, and decision-ready summaries.",
    budgetMonthlyCents: 12000,
    canCreateAgents: false,
    teamSlug: "research",
    tools: "Knowledge docs, scorecards, queue artifacts",
    mcp: "paperclip-knowledge, optional memory",
    secrets: ["OPENAI_API_KEY"],
    restrictions: ["No decision override outside Research Lead"],
    postImport: "Pause after import until research templates are wired.",
  },
  {
    slug: "competitor-scout",
    name: "Competitor Scout",
    title: "Competitive Intelligence Specialist",
    role: "researcher",
    icon: "telescope",
    reportsToSlug: "research-lead",
    path: "agents/competitor-scout/AGENTS.md",
    capabilities:
      "Proves direct competitors, pricing surfaces, and category shape with explicit freshness and citations.",
    budgetMonthlyCents: 12000,
    canCreateAgents: false,
    teamSlug: "research",
    tools: "Browser research, pricing pages, evidence capture",
    mcp: "browser/web research, optional memory",
    secrets: ["OPENAI_API_KEY", "APIFY_TOKEN"],
    restrictions: ["No stage transitions", "Citations required on all claims"],
    postImport: "Pause after import until browser access and evidence templates are wired.",
  },
  {
    slug: "demand-validator",
    name: "Demand Validator",
    title: "Demand Signal Specialist",
    role: "researcher",
    icon: "radar",
    reportsToSlug: "research-lead",
    path: "agents/demand-validator/AGENTS.md",
    capabilities:
      "Validates search, traffic, usage, review, and community signals before queue promotion.",
    budgetMonthlyCents: 12000,
    canCreateAgents: false,
    teamSlug: "research",
    tools: "Traffic/review sources, research docs",
    mcp: "browser/web research, optional analytics read",
    secrets: ["OPENAI_API_KEY", "APIFY_TOKEN"],
    restrictions: ["No pricing decisions alone", "No queue promotion without evidence"],
    postImport: "Pause after import until demand evidence template is wired.",
  },
  {
    slug: "revenue-validator",
    name: "Revenue Validator",
    title: "Monetization and Pricing Specialist",
    role: "researcher",
    icon: "gem",
    reportsToSlug: "research-lead",
    path: "agents/revenue-validator/AGENTS.md",
    capabilities:
      "Validates pricing reality, payment plausibility, packaging, and the path to five-thousand MRR.",
    budgetMonthlyCents: 12000,
    canCreateAgents: false,
    teamSlug: "research",
    tools: "Pricing and payment proof sources",
    mcp: "browser/web research, optional payment metadata read",
    secrets: ["OPENAI_API_KEY"],
    restrictions: ["No payment acceptance decision", "Must state assumptions explicitly"],
    postImport: "Pause after import until pricing and payment evidence surfaces are wired.",
  },
];

const generatedAgents = [
  {
    slug: "launch-lead",
    name: "Launch Lead",
    title: "Head of Product Launch",
    role: "pm",
    icon: "rocket",
    reportsToSlug: "ceo",
    teamSlug: "product-launch",
    capabilities:
      "Owns product-launch doctrine, Gate B readiness, launch coordination, and cross-team launch packets.",
    budgetMonthlyCents: 22000,
    canCreateAgents: true,
    skills: [
      "paperclip",
      "paperclip-create-agent",
      "paperclip-knowledge",
      "launch-gates",
      "payment-signal-policy",
      "launch-product-definition",
      "launch-gtm-readiness",
      "create-prd",
      "pricing-strategy",
      "gtm-strategy",
      "pre-mortem",
      "release-notes",
    ],
    mission:
      "Turn queue-approved ventures into definition-complete, launchable products without collapsing product, design, and marketing work into one blurred lane.",
    owns: [
      "Gate B preparation and launch readiness doctrine",
      "product-launch team sequencing and artifact quality",
      "definition quality bar across product, UX, design, and pricing",
      "cross-team launch plan quality before marketing and support go live",
    ],
    outputs: [
      "Gate B readiness packet",
      "launch-brief",
      "canonical handoff dossier",
      "launch readiness verdict: PASS / FAIL / RETRY / ESCALATE",
    ],
    upstream: [
      "Research dossier and queue recommendation from Research Lead",
      "venture policy and budget framing from CEO",
      "evidence gaps and assumptions from research specialists",
    ],
    downstream: [
      "VP of Engineering for build execution",
      "CMO for campaign and channel execution",
      "Support Lead for launch support readiness",
      "CEO for Gate B and escalation decisions",
    ],
    sources: [
      "agency-agents/product/product-manager.md",
      "pm-skills/pm-go-to-market/skills/gtm-strategy",
      "pm-skills/pm-execution/skills/pre-mortem",
    ],
    toolSurfaces: [
      "Paperclip issues and knowledge",
      "launch brief and handoff dossier",
      "pricing and launch readiness docs",
      "browser research for unresolved market or channel questions",
    ],
    evidenceSurfaces: [
      "Gate B checklist",
      "pricing proof",
      "channel plan",
      "launch measurement plan",
    ],
    secrets: ["OPENAI_API_KEY", "PAYMENT_PROVIDER_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "Does not approve board-only exceptions",
      "Does not self-execute engineering work",
      "Does not launch without payment capture and measurement",
    ],
    postImport:
      "Existing live core slug should upgrade in place and be rebound as head of Product Launch.",
    discipline: "product-launch",
  },
  {
    slug: "product-definer",
    name: "Product Definer",
    title: "Product Definition Owner",
    role: "pm",
    icon: "lightbulb",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Turns a promoted venture into a buildable product definition with explicit ICP, JTBD, offer, pricing, and MVP boundaries.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "paperclip",
      "paperclip-knowledge",
      "launch-product-definition",
      "create-prd",
      "ideal-customer-profile",
      "value-proposition",
      "customer-journey-map",
      "stakeholder-map",
      "user-stories",
      "test-scenarios",
    ],
    mission:
      "Produce the canonical definition package that engineering, marketing, and support can trust without reopening discovery from scratch.",
    owns: [
      "ICP, JTBD, offer, and value proposition clarity",
      "MVP in-scope and out-of-scope boundaries",
      "acceptance criteria and story-level decomposition input",
      "definition-quality verdicts before Gate B",
    ],
    outputs: [
      "product definition packet",
      "definition-level acceptance criteria",
      "updated launch-brief sections",
      "handoff-dossier definition chapter",
    ],
    upstream: [
      "Research dossier and assumptions log",
      "queue rationale from Research Lead",
      "launch constraints from Launch Lead",
    ],
    downstream: [
      "Launch Lead for Gate B readiness review",
      "VP of Engineering for build handoff once Gate B passes",
    ],
    sources: [
      "agency-agents/product/product-manager.md",
      "pm-skills/pm-execution/skills/create-prd",
      "pm-skills/pm-go-to-market/skills/ideal-customer-profile",
    ],
    toolSurfaces: [
      "Paperclip knowledge docs",
      "PRD and acceptance criteria artifacts",
      "customer journey and ICP docs",
    ],
    evidenceSurfaces: [
      "PRD",
      "user stories",
      "scope boundaries",
      "open assumptions list",
    ],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No vague ICP or offer language",
      "No release authority",
      "No hidden assumptions in handoff artifacts",
    ],
    postImport: "New specialist. Keep paused until Gate B artifacts and templates are wired.",
    discipline: "product-launch",
  },
  {
    slug: "ux-researcher",
    name: "UX Researcher",
    title: "UX Researcher",
    role: "designer",
    icon: "search-code",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Translates customer evidence into user workflows, friction maps, and clarity on what must be true for first-time activation.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "user-personas",
      "customer-journey-map",
      "sentiment-analysis",
      "summarize-meeting",
    ],
    mission:
      "Expose user-flow friction before build by grounding design and launch decisions in observable user behavior, not founder intuition.",
    owns: [
      "persona sharpness for the launch target segment",
      "journey mapping for activation and first-value moments",
      "qualitative synthesis from feedback and interviews",
      "UX risk callouts inside the launch packet",
    ],
    outputs: [
      "persona snapshot",
      "customer journey map",
      "UX risk memo",
      "activation-friction notes",
    ],
    upstream: [
      "Research dossier and feedback snippets",
      "definition packet from Product Definer",
    ],
    downstream: [
      "UX Architect and UI Designer for solution shaping",
      "Launch Lead for Gate B and launch-risk review",
    ],
    sources: [
      "agency-agents/design/design-ux-researcher.md",
      "pm-skills/pm-market-research/skills/user-personas",
      "pm-skills/pm-market-research/skills/customer-journey-map",
    ],
    toolSurfaces: ["Feedback docs", "journey maps", "persona artifacts", "meeting summaries"],
    evidenceSurfaces: ["persona doc", "journey map", "observed friction list"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No speculative personas without evidence",
      "No pixel decisions without user-flow rationale",
    ],
    postImport: "New specialist. Activate only after feedback and research surfaces are wired.",
    discipline: "product-launch",
  },
  {
    slug: "ux-architect",
    name: "UX Architect",
    title: "UX Architect",
    role: "designer",
    icon: "layout-template",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Turns research and definition into coherent flows, IA, states, and implementation-ready UX guidance.",
    budgetMonthlyCents: 15500,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "customer-journey-map",
      "user-stories",
      "test-scenarios",
      "pre-mortem",
    ],
    mission:
      "Protect the structure of the product experience so engineering receives clean flows instead of ambiguous design intent.",
    owns: [
      "screen and state inventory",
      "navigation and flow clarity",
      "implementation-ready UX notes",
      "UX acceptance criteria inputs",
    ],
    outputs: [
      "flow map",
      "screen/state inventory",
      "UX architecture notes",
      "implementation risks for engineering",
    ],
    upstream: [
      "Product Definer packet",
      "UX Researcher journey map and friction notes",
    ],
    downstream: [
      "UI Designer for visual system execution",
      "VP of Engineering and Software Architect for build handoff",
    ],
    sources: [
      "agency-agents/design/design-ux-architect.md",
      "pm-skills/pm-execution/skills/user-stories",
      "pm-skills/pm-execution/skills/test-scenarios",
    ],
    toolSurfaces: ["Flow maps", "story docs", "UX architecture notes"],
    evidenceSurfaces: ["screen inventory", "flow map", "acceptance notes"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No visual-system work without flow justification",
      "No hidden edge cases in handoff diagrams",
    ],
    postImport: "New specialist. Keep paused until design and engineering handoff surfaces are wired.",
    discipline: "product-launch",
  },
  {
    slug: "ui-designer",
    name: "UI Designer",
    title: "UI Designer",
    role: "designer",
    icon: "palette",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Turns approved flows into launch-ready visual interfaces, states, and component direction aligned to the product promise.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "value-proposition",
      "customer-journey-map",
      "user-stories",
      "release-notes",
    ],
    mission:
      "Make the product understandable and trustworthy at first glance without inventing new scope or hiding UX debt.",
    owns: [
      "screen-level visual clarity",
      "key empty, loading, and error states",
      "handoff-ready UI notes",
      "message-to-interface alignment",
    ],
    outputs: [
      "UI states list",
      "screen annotations",
      "design acceptance notes",
      "launch-facing visual checklist",
    ],
    upstream: [
      "UX architecture package",
      "value proposition and launch brief",
    ],
    downstream: [
      "Frontend Developer for implementation",
      "CMO and Content Creator for message alignment",
    ],
    sources: [
      "agency-agents/design/design-ui-designer.md",
      "pm-skills/pm-product-strategy/skills/value-proposition",
    ],
    toolSurfaces: ["Design notes", "screen annotations", "launch brief"],
    evidenceSurfaces: ["annotated states", "handoff notes", "state coverage checklist"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No decorative drift away from product promise",
      "No hidden states or omitted errors in design handoff",
    ],
    postImport: "New specialist. Keep paused until design handoff paths are available.",
    discipline: "product-launch",
  },
  {
    slug: "pricing-strategist",
    name: "Pricing Strategist",
    title: "Pricing Strategist",
    role: "pm",
    icon: "badge-dollar-sign",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Owns launch pricing structure, packaging logic, and first-payment plausibility before the venture ships.",
    budgetMonthlyCents: 16000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "pricing-strategy",
      "monetization-strategy",
      "competitive-battlecard",
      "beachhead-segment",
      "gtm-strategy",
    ],
    mission:
      "Make pricing explicit, credible, and testable before launch so monetization risk is visible rather than deferred.",
    owns: [
      "price point and packaging logic",
      "free/trial and upgrade path assumptions",
      "pricing risk register",
      "revenue-plausibility notes in Gate B packet",
    ],
    outputs: [
      "pricing recommendation",
      "packaging table",
      "pricing risks and experiments",
      "payment plausibility memo",
    ],
    upstream: [
      "Revenue validation evidence",
      "ICP and value proposition docs",
      "competitive context from Research and Marketing",
    ],
    downstream: [
      "Launch Lead for Gate B review",
      "CMO and Growth Lead for pricing communication",
      "Support Lead for pricing/support edge cases",
    ],
    sources: [
      "pm-skills/pm-product-strategy/skills/pricing-strategy",
      "pm-skills/pm-product-strategy/skills/monetization-strategy",
      "agency-agents/product/product-manager.md",
    ],
    toolSurfaces: ["Pricing docs", "competitor pricing pages", "launch brief"],
    evidenceSurfaces: ["pricing table", "experiment plan", "payment plausibility memo"],
    secrets: ["OPENAI_API_KEY", "PAYMENT_PROVIDER_API_KEY"],
    restrictions: [
      "No unsupported price claims",
      "No hidden discounting logic in launch packet",
    ],
    postImport: "New specialist. Keep paused until pricing and payment evidence surfaces are wired.",
    discipline: "product-launch",
  },
  {
    slug: "launch-program-manager",
    name: "Launch Program Manager",
    title: "Launch Program Manager",
    role: "pm",
    icon: "clipboard-list",
    reportsToSlug: "launch-lead",
    teamSlug: "product-launch",
    capabilities:
      "Coordinates the cross-team launch calendar, dependencies, and canonical artifact flow across product, marketing, engineering, and support.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip",
      "paperclip-knowledge",
      "stakeholder-map",
      "gtm-motions",
      "pre-mortem",
      "release-notes",
    ],
    mission:
      "Keep the launch machine synchronized so no team discovers critical dependencies at the last possible moment.",
    owns: [
      "cross-team dependency map",
      "launch timeline and readiness calls",
      "artifact completeness across teams",
      "handoff timing and escalation routing",
    ],
    outputs: [
      "launch dependency board",
      "stakeholder map",
      "launch timeline",
      "blocked-work escalation packet",
    ],
    upstream: [
      "Launch brief and Gate B packet",
      "manager status from CMO, VP Engineering, and Support Lead",
    ],
    downstream: [
      "All launch-stage teams for sequencing",
      "CEO and Chief of Staff for escalations",
    ],
    sources: [
      "agency-agents/project-management/project-management-project-shepherd.md",
      "pm-skills/pm-execution/skills/stakeholder-map",
      "pm-skills/pm-go-to-market/skills/gtm-motions",
    ],
    toolSurfaces: ["Paperclip tasks", "timeline docs", "stakeholder map", "readiness checklists"],
    evidenceSurfaces: ["dependency board", "timeline", "handoff status"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No comments-only handoffs",
      "No claiming readiness without artifact links",
    ],
    postImport: "New specialist. Activate only after team-level checklists are imported.",
    discipline: "product-launch",
  },
  {
    slug: "cmo",
    name: "CMO",
    title: "Chief Marketing Officer",
    role: "cmo",
    icon: "megaphone",
    reportsToSlug: "ceo",
    teamSlug: "marketing",
    capabilities:
      "Owns positioning, channel strategy, demand generation, measurement discipline, and marketing readiness for each launch.",
    budgetMonthlyCents: 22000,
    canCreateAgents: true,
    skills: [
      "paperclip",
      "paperclip-create-agent",
      "paperclip-knowledge",
      "launch-gtm-readiness",
      "marketing-ideas",
      "positioning-ideas",
      "growth-loops",
      "north-star-metric",
      "metrics-dashboard",
      "competitive-battlecard",
      "beachhead-segment",
      "value-prop-statements",
      "gtm-strategy",
      "gtm-motions",
    ],
    mission:
      "Turn approved launch strategy into measurable acquisition and positioning systems without drifting into vanity marketing.",
    owns: [
      "marketing strategy and readiness",
      "channel mix and campaign sequencing",
      "measurement standards and reporting",
      "message consistency across all customer touchpoints",
    ],
    outputs: [
      "marketing plan",
      "channel and campaign brief",
      "measurement framework",
      "launch messaging pack",
    ],
    upstream: [
      "Launch brief and pricing package",
      "CEO budget framing",
      "competitive and audience evidence from Research",
    ],
    downstream: [
      "Growth Lead and marketing specialists",
      "Launch Lead for launch-readiness alignment",
      "Support Lead for support-sensitive messaging",
    ],
    sources: [
      "agency-agents/marketing/marketing-growth-hacker.md",
      "pm-skills/pm-go-to-market/skills/gtm-strategy",
      "pm-skills/pm-marketing-growth/skills/positioning-ideas",
    ],
    toolSurfaces: ["Paperclip tasks", "marketing briefs", "analytics dashboards", "browser research"],
    evidenceSurfaces: ["channel plan", "message map", "metrics dashboard"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No campaign launch without measurement",
      "No promise that product/support cannot sustain",
    ],
    postImport: "New top-level manager. Keep paused until analytics and campaign destinations are wired.",
    discipline: "marketing",
  },
  {
    slug: "growth-lead",
    name: "Growth Lead",
    title: "Growth and Demand Generation Lead",
    role: "cmo",
    icon: "trending-up",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Owns launch acquisition strategy, experiment cadence, and early funnel learning for each active venture.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "paperclip",
      "paperclip-knowledge",
      "launch-gtm-readiness",
      "positioning-ideas",
      "growth-loops",
      "north-star-metric",
      "metrics-dashboard",
      "gtm-strategy",
      "gtm-motions",
    ],
    mission:
      "Find the repeatable demand path that gets the venture to first external payment and credible early conversion data.",
    owns: [
      "demand-generation hypothesis design",
      "channel experiments and funnel instrumentation",
      "weekly growth readout quality",
      "insight handoff back to Product Launch and Support",
    ],
    outputs: [
      "channel experiment plan",
      "funnel metrics readout",
      "growth risks and wins memo",
      "campaign iteration recommendations",
    ],
    upstream: [
      "Marketing strategy from CMO",
      "pricing and offer docs from Launch Lead",
    ],
    downstream: [
      "Marketing specialists for execution",
      "Launch Lead and Support Lead for loop-closing feedback",
    ],
    sources: [
      "agency-agents/marketing/marketing-growth-hacker.md",
      "pm-skills/pm-go-to-market/skills/growth-loops",
      "pm-skills/pm-marketing-growth/skills/north-star-metric",
    ],
    toolSurfaces: ["Analytics dashboards", "channel docs", "campaign experiment trackers"],
    evidenceSurfaces: ["funnel report", "experiment log", "North Star metric view"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No channel scaling without measured signal",
      "No price or promise changes without cross-team review",
    ],
    postImport: "Existing package role moves under CMO; keep paused until analytics destinations are confirmed.",
    discipline: "marketing",
  },
  {
    slug: "marketing-strategist",
    name: "Marketing Strategist",
    title: "Marketing Strategist",
    role: "cmo",
    icon: "compass",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Builds market-facing positioning, campaign architecture, and audience-specific storylines from the launch brief.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "marketing-ideas",
      "positioning-ideas",
      "value-prop-statements",
      "beachhead-segment",
      "competitive-battlecard",
      "gtm-strategy",
    ],
    mission:
      "Turn the product promise into sharp, differentiated, audience-specific market narratives that can actually be executed.",
    owns: [
      "positioning hierarchy",
      "audience storylines",
      "campaign concept framing",
      "competitive differentiation language",
    ],
    outputs: [
      "positioning memo",
      "audience-message matrix",
      "campaign concept brief",
      "competitive battle themes",
    ],
    upstream: [
      "Launch brief and value proposition",
      "research evidence and competitive insights",
    ],
    downstream: [
      "Content Creator and Growth Lead",
      "CMO for final positioning alignment",
    ],
    sources: [
      "agency-agents/marketing/marketing-social-media-strategist.md",
      "pm-skills/pm-marketing-growth/skills/positioning-ideas",
      "pm-skills/pm-marketing-growth/skills/value-prop-statements",
    ],
    toolSurfaces: ["Positioning docs", "battlecards", "campaign briefs"],
    evidenceSurfaces: ["message matrix", "battlecard", "campaign brief"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No abstract brand language detached from the offer",
      "No copying competitor positioning without differentiation",
    ],
    postImport: "New specialist. Activate once positioning and message surfaces are wired.",
    discipline: "marketing",
  },
  {
    slug: "seo-specialist",
    name: "SEO Specialist",
    title: "SEO Specialist",
    role: "cmo",
    icon: "search",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Owns search-intent capture, organic discoverability, and keyword-to-message alignment for the venture launch surface.",
    budgetMonthlyCents: 14000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "positioning-ideas",
      "value-prop-statements",
      "metrics-dashboard",
      "competitive-battlecard",
    ],
    mission:
      "Make the product easy to discover through organic intent while staying faithful to the actual offer and product boundary.",
    owns: [
      "organic search angle selection",
      "page/message alignment to search intent",
      "SEO risk callouts for launch pages",
      "query opportunity prioritization",
    ],
    outputs: [
      "SEO angle brief",
      "search-intent map",
      "page optimization checklist",
      "organic monitoring notes",
    ],
    upstream: [
      "positioning memo",
      "launch pages and content drafts",
    ],
    downstream: [
      "Content Creator for page copy",
      "Growth Lead for organic experiment tracking",
    ],
    sources: [
      "agency-agents/marketing/marketing-seo-specialist.md",
      "pm-skills/pm-marketing-growth/skills/value-prop-statements",
    ],
    toolSurfaces: ["Content drafts", "search-intent research", "metrics dashboard"],
    evidenceSurfaces: ["intent map", "optimization checklist", "organic baseline"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No keyword plans without product-message fit",
      "No unsupported SEO claims or fabricated rankings",
    ],
    postImport: "New specialist. Activate once content and analytics surfaces are wired.",
    discipline: "marketing",
  },
  {
    slug: "content-creator",
    name: "Content Creator",
    title: "Content Creator",
    role: "cmo",
    icon: "pen-square",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Creates launch content, lifecycle copy, and customer-facing narratives aligned to the offer, segment, and channel plan.",
    budgetMonthlyCents: 14500,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "marketing-ideas",
      "value-prop-statements",
      "gtm-motions",
      "release-notes",
    ],
    mission:
      "Turn positioning into concrete copy assets that make the product understandable, credible, and clickable.",
    owns: [
      "launch page copy",
      "email and social launch assets",
      "release note narrative quality",
      "content consistency with actual product scope",
    ],
    outputs: [
      "copy deck",
      "launch content calendar",
      "release note draft",
      "channel-specific content assets",
    ],
    upstream: [
      "positioning memo and message matrix",
      "launch brief and product screenshots or notes",
    ],
    downstream: [
      "Growth Lead for channel execution",
      "Support Lead for expectation-setting review",
    ],
    sources: [
      "agency-agents/marketing/marketing-content-creator.md",
      "pm-skills/pm-marketing-growth/skills/value-prop-statements",
      "pm-skills/pm-execution/skills/release-notes",
    ],
    toolSurfaces: ["Copy docs", "release notes", "message assets"],
    evidenceSurfaces: ["copy deck", "content calendar", "release notes draft"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No promise beyond approved scope",
      "No generic launch copy divorced from the ICP",
    ],
    postImport: "New specialist. Activate once content destinations and templates are wired.",
    discipline: "marketing",
  },
  {
    slug: "paid-media-strategist",
    name: "Paid Media Strategist",
    title: "Paid Media Strategist",
    role: "cmo",
    icon: "badge-percent",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Designs paid acquisition experiments, budget use, and channel-specific offers for early launch learning.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "gtm-motions",
      "growth-loops",
      "metrics-dashboard",
      "beachhead-segment",
    ],
    mission:
      "Use paid channels as a disciplined learning loop, not a vanity spend sink, during the first payment window.",
    owns: [
      "paid experiment design",
      "channel-budget hypotheses",
      "creative and targeting assumptions",
      "spend-to-learning quality bar",
    ],
    outputs: [
      "paid media test plan",
      "budget split memo",
      "creative hypothesis list",
      "paid funnel readout",
    ],
    upstream: [
      "CMO marketing plan",
      "pricing and positioning docs",
    ],
    downstream: [
      "Growth Lead for learning synthesis",
      "Tracking & Measurement Specialist for instrumentation",
    ],
    sources: [
      "agency-agents/paid-media/paid-media-ppc-strategist.md",
      "pm-skills/pm-go-to-market/skills/gtm-motions",
    ],
    toolSurfaces: ["Paid experiment docs", "analytics dashboards", "creative briefs"],
    evidenceSurfaces: ["test plan", "budget memo", "paid metrics readout"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No budget scaling without signal",
      "No opaque attribution assumptions",
    ],
    postImport: "New specialist. Keep paused until analytics destinations and campaign surfaces are wired.",
    discipline: "marketing",
  },
  {
    slug: "tracking-measurement-specialist",
    name: "Tracking & Measurement Specialist",
    title: "Tracking & Measurement Specialist",
    role: "cmo",
    icon: "activity",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Owns event definitions, launch measurement wiring, dashboard quality, and attribution sanity for marketing and product-launch teams.",
    budgetMonthlyCents: 15500,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "metrics-dashboard",
      "north-star-metric",
      "cohort-analysis",
      "analyze-feature-requests",
    ],
    mission:
      "Make launch metrics trustworthy enough that marketing, support, and leadership can act on them without guesswork.",
    owns: [
      "metric definitions",
      "dashboard integrity",
      "event and funnel sanity checks",
      "measurement-gap escalation",
    ],
    outputs: [
      "metrics definition sheet",
      "launch dashboard",
      "tracking gap list",
      "weekly measurement readout",
    ],
    upstream: [
      "North Star framing from CMO and Growth Lead",
      "launch goals from Launch Lead",
    ],
    downstream: [
      "CMO and Growth Lead",
      "Support Lead and Analytics Reporter for feedback loops",
      "CEO for executive reporting",
    ],
    sources: [
      "agency-agents/paid-media/paid-media-tracking-specialist.md",
      "pm-skills/pm-product-discovery/skills/metrics-dashboard",
      "pm-skills/pm-data-analytics/skills/cohort-analysis",
    ],
    toolSurfaces: ["Analytics dashboards", "event definitions", "measurement docs"],
    evidenceSurfaces: ["dashboard", "metric dictionary", "gap list"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No claiming attribution certainty when instrumentation is weak",
      "No metric definitions hidden in chat threads",
    ],
    postImport: "New specialist. Keep paused until analytics destinations and dashboards are wired.",
    discipline: "marketing",
  },
  {
    slug: "community-builder",
    name: "Community Builder",
    title: "Community Builder",
    role: "cmo",
    icon: "messages-square",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Builds owned and borrowed audience loops through authentic community participation, feedback collection, and launch amplification.",
    budgetMonthlyCents: 14000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "marketing-ideas",
      "gtm-motions",
      "summarize-meeting",
      "sentiment-analysis",
    ],
    mission:
      "Create durable community signal and awareness instead of one-shot announcement bursts.",
    owns: [
      "community touchpoint strategy",
      "community feedback harvesting",
      "launch amplification through trusted channels",
      "qualitative trend reporting back to the team",
    ],
    outputs: [
      "community engagement plan",
      "community feedback summary",
      "audience loop suggestions",
      "sentiment notes",
    ],
    upstream: [
      "CMO marketing plan",
      "launch timing and message pack",
    ],
    downstream: [
      "Feedback Synthesizer and Growth Lead",
      "CMO for community learnings",
    ],
    sources: [
      "agency-agents/marketing/marketing-reddit-community-builder.md",
      "pm-skills/pm-market-research/skills/sentiment-analysis",
    ],
    toolSurfaces: ["Community notes", "feedback summaries", "launch message pack"],
    evidenceSurfaces: ["engagement plan", "sentiment summary", "community report"],
    secrets: ["OPENAI_API_KEY"],
    restrictions: [
      "No astroturfing or fabricated endorsements",
      "No community claims without direct evidence",
    ],
    postImport: "New specialist. Activate once community surfaces and summaries are wired.",
    discipline: "marketing",
  },
  {
    slug: "ai-citation-strategist",
    name: "AI Citation Strategist",
    title: "AI Citation Strategist",
    role: "cmo",
    icon: "sparkles",
    reportsToSlug: "cmo",
    teamSlug: "marketing",
    capabilities:
      "Optimizes brand and product visibility in AI-assisted discovery systems through citation, mention, and source-quality strategy.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "positioning-ideas",
      "competitive-battlecard",
      "metrics-dashboard",
      "marketing-ideas",
    ],
    mission:
      "Improve AI-surface discoverability in a way that is measurable, source-backed, and consistent with the real product narrative.",
    owns: [
      "AI-discovery visibility hypotheses",
      "source and citation opportunity mapping",
      "AI-surface reporting inputs",
      "AEO-style message consistency checks",
    ],
    outputs: [
      "citation visibility memo",
      "source opportunity map",
      "AI-discovery experiment plan",
      "AI-surface monitoring notes",
    ],
    upstream: [
      "Positioning memo and content assets",
      "competitive context from Research and Marketing",
    ],
    downstream: [
      "Content Creator and SEO Specialist",
      "CMO for prioritization",
    ],
    sources: [
      "agency-agents/marketing/marketing-ai-citation-strategist.md",
      "pm-skills/pm-marketing-growth/skills/positioning-ideas",
    ],
    toolSurfaces: ["Content inventory", "AI-discovery research notes", "metrics docs"],
    evidenceSurfaces: ["visibility memo", "opportunity map", "experiment notes"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No fabricated citations or manipulated references",
      "No recommendation claims without observable source support",
    ],
    postImport: "New specialist. Activate once content inventory and measurement surfaces are wired.",
    discipline: "marketing",
  },
  {
    slug: "vp-engineering",
    name: "VP of Engineering",
    title: "VP of Engineering",
    role: "cto",
    icon: "cpu",
    reportsToSlug: "ceo",
    teamSlug: "engineering",
    capabilities:
      "Owns the engineering system for venture delivery, review, QA, release, reliability, and architectural coherence.",
    budgetMonthlyCents: 23000,
    canCreateAgents: true,
    skills: [
      "paperclip",
      "paperclip-create-agent",
      "paperclip-knowledge",
      "brainstorming",
      "writing-plans",
      "subagent-driven-development",
      "plan-eng-review",
      "review",
      "qa",
      "ship",
      "land-and-deploy",
      "benchmark",
      "canary",
      "cso",
      "document-release",
    ],
    mission:
      "Run engineering as a full system with clean role boundaries between architecture, implementation, review, QA, and release.",
    owns: [
      "engineering org design and sequencing",
      "build-lane quality bar",
      "review, QA, release, and rollback policy",
      "handoff integrity from Product Launch into engineering",
    ],
    outputs: [
      "engineering execution plan",
      "architecture and staffing decisions",
      "release readiness recommendation",
      "engineering risk register",
    ],
    upstream: [
      "approved Gate B packet and handoff dossier",
      "CEO budget and deadline framing",
      "Launch Lead launch constraints",
    ],
    downstream: [
      "engineering specialists, QA, and release roles",
      "Launch Lead and CEO for build and release status",
    ],
    sources: [
      "agency-agents/engineering/engineering-software-architect.md",
      "gstack/plan-eng-review",
      "gstack/ship",
    ],
    toolSurfaces: ["Paperclip tasks", "repo and worktree access", "CI and deploy notes"],
    evidenceSurfaces: ["execution plan", "architecture notes", "review and QA artifacts"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No bypass of review and QA gates",
      "No hidden scope expansion beyond approved handoff",
    ],
    postImport: "New top-level manager. Keep paused until repo and release tooling are wired.",
    discipline: "engineering",
  },
  {
    slug: "software-architect",
    name: "Software Architect",
    title: "Software Architect",
    role: "engineer",
    icon: "blocks",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns system shape, major trade-offs, and architectural decisions needed to implement the approved venture scope cleanly.",
    budgetMonthlyCents: 19000,
    canCreateAgents: false,
    skills: [
      "brainstorming",
      "writing-plans",
      "plan-eng-review",
      "investigate",
      "cso",
    ],
    mission:
      "Make the implementation path coherent enough that developers, QA, and release roles are not forced to invent architecture mid-flight.",
    owns: [
      "system boundaries and component decomposition",
      "architectural trade-off documentation",
      "risk surfacing for engineering leadership",
      "implementation guidance for specialists",
    ],
    outputs: [
      "architecture note",
      "component map",
      "technical risk memo",
      "implementation sequencing guidance",
    ],
    upstream: [
      "approved handoff dossier",
      "UX and product definition artifacts",
    ],
    downstream: [
      "Backend Architect, Frontend Developer, AI Engineer, Senior Developer",
      "VP of Engineering for approval and sequencing",
    ],
    sources: [
      "agency-agents/engineering/engineering-software-architect.md",
      "gstack/plan-eng-review",
    ],
    toolSurfaces: ["Repo read/write", "planning docs", "architecture notes"],
    evidenceSurfaces: ["architecture note", "risk memo", "component map"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No pseudo-architecture detached from the actual repo",
      "No release approval authority",
    ],
    postImport: "New specialist. Activate once engineering worktree access is wired.",
    discipline: "engineering",
  },
  {
    slug: "backend-architect",
    name: "Backend Architect",
    title: "Backend Architect",
    role: "engineer",
    icon: "database",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns backend service shape, data contracts, persistence choices, and server-side performance or reliability trade-offs.",
    budgetMonthlyCents: 18000,
    canCreateAgents: false,
    skills: [
      "writing-plans",
      "plan-eng-review",
      "investigate",
      "benchmark",
      "canary",
    ],
    mission:
      "Keep backend architecture simple, observable, and supportable during fast launch cycles.",
    owns: [
      "API and data model architecture",
      "performance and reliability trade-offs",
      "migration and persistence risks",
      "server-side acceptance notes",
    ],
    outputs: [
      "backend architecture note",
      "data-contract guidance",
      "performance-risk memo",
      "migration checklist",
    ],
    upstream: [
      "architecture note from Software Architect",
      "approved scope and acceptance criteria",
    ],
    downstream: [
      "Senior Developer and AI Engineer",
      "QA Director for backend risk coverage",
    ],
    sources: [
      "agency-agents/engineering/engineering-backend-architect.md",
      "gstack/benchmark",
    ],
    toolSurfaces: ["Repo and tests", "backend docs", "performance notes"],
    evidenceSurfaces: ["API notes", "migration checklist", "performance memo"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No speculative infrastructure work beyond approved scope",
      "No silent schema or contract changes",
    ],
    postImport: "New specialist. Activate once backend repo access and CI are wired.",
    discipline: "engineering",
  },
  {
    slug: "frontend-developer",
    name: "Frontend Developer",
    title: "Frontend Developer",
    role: "engineer",
    icon: "monitor-smartphone",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Implements the launch-facing product surface with clean state handling, verified UI behavior, and fidelity to the approved UX and copy.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "brainstorming",
      "test-driven-development",
      "systematic-debugging",
      "verification-before-completion",
      "requesting-code-review",
      "using-git-worktrees",
    ],
    mission:
      "Ship the actual customer-facing experience cleanly and verifiably, not a close-enough approximation.",
    owns: [
      "frontend implementation for approved scope",
      "UI state correctness",
      "frontend verification evidence",
      "clean handoff to review and QA",
    ],
    outputs: [
      "frontend code changes",
      "verification evidence",
      "review request package",
      "UI implementation notes",
    ],
    upstream: [
      "UI and UX handoff",
      "architecture guidance from Software Architect",
    ],
    downstream: [
      "Code Reviewer and QA Engineer",
      "Release Engineer after passing gates",
    ],
    sources: [
      "agency-agents/engineering/engineering-frontend-developer.md",
      "superpowers/test-driven-development",
      "superpowers/verification-before-completion",
    ],
    toolSurfaces: ["Repo/worktree", "tests", "browser if needed", "review package"],
    evidenceSurfaces: ["test output", "screens or notes", "review package"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No skipping verification",
      "No self-approval of review or release",
    ],
    postImport: "New specialist. Activate once repo access and test tooling are wired.",
    discipline: "engineering",
  },
  {
    slug: "ai-engineer",
    name: "AI Engineer",
    title: "AI Engineer",
    role: "engineer",
    icon: "bot",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Implements AI-specific product behavior, model integrations, and evaluation paths while staying inside the approved scope and reliability bar.",
    budgetMonthlyCents: 18000,
    canCreateAgents: false,
    skills: [
      "brainstorming",
      "writing-plans",
      "test-driven-development",
      "systematic-debugging",
      "benchmark",
    ],
    mission:
      "Make model-backed features reliable enough to launch without turning the venture into an uncontrolled R&D project.",
    owns: [
      "AI integration implementation",
      "model-behavior risk notes",
      "evaluation and benchmark inputs",
      "handoff quality for QA and review",
    ],
    outputs: [
      "AI feature implementation",
      "evaluation plan",
      "benchmark notes",
      "risk memo",
    ],
    upstream: [
      "approved handoff dossier",
      "backend and architecture guidance",
    ],
    downstream: [
      "Code Reviewer, QA Director, and QA Engineer",
      "VP of Engineering for risk review",
    ],
    sources: [
      "agency-agents/engineering/engineering-ai-engineer.md",
      "gstack/benchmark",
      "superpowers/test-driven-development",
    ],
    toolSurfaces: ["Repo/worktree", "tests", "evaluation docs"],
    evidenceSurfaces: ["evaluation notes", "benchmark evidence", "test output"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No opaque model behavior claims without tests or evidence",
      "No scope drift into speculative AI features",
    ],
    postImport: "New specialist. Activate once repo access and evaluation tooling are wired.",
    discipline: "engineering",
  },
  {
    slug: "senior-developer",
    name: "Senior Developer",
    title: "Senior Developer",
    role: "engineer",
    icon: "hammer",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Executes substantial implementation slices, resolves cross-cutting defects, and converts approved plans into shippable code with evidence.",
    budgetMonthlyCents: 18000,
    canCreateAgents: false,
    skills: [
      "writing-plans",
      "test-driven-development",
      "systematic-debugging",
      "requesting-code-review",
      "receiving-code-review",
      "verification-before-completion",
      "using-git-worktrees",
      "finishing-a-development-branch",
    ],
    mission:
      "Carry hard implementation work without erasing role boundaries around architecture, QA, and release.",
    owns: [
      "multi-file implementation work",
      "code-level defect resolution",
      "verification evidence quality",
      "review-ready change packages",
    ],
    outputs: [
      "code changes",
      "test evidence",
      "review package",
      "branch completion notes",
    ],
    upstream: [
      "architecture notes and accepted stories",
      "backend and frontend technical guidance",
    ],
    downstream: [
      "Code Reviewer and QA Engineer",
      "Release Engineer after approval",
    ],
    sources: [
      "agency-agents/engineering/engineering-senior-developer.md",
      "superpowers/receiving-code-review",
      "superpowers/finishing-a-development-branch",
    ],
    toolSurfaces: ["Repo/worktree", "tests", "review package"],
    evidenceSurfaces: ["diff summary", "test output", "review request"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No bypass of review and QA boundaries",
      "No completion claims without fresh evidence",
    ],
    postImport: "New specialist. Activate once repo and test access are wired.",
    discipline: "engineering",
  },
  {
    slug: "devops-automator",
    name: "DevOps Automator",
    title: "DevOps Automator",
    role: "devops",
    icon: "workflow",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns build, deploy, CI/CD, and environment automation required to ship and operate the venture safely.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "systematic-debugging",
      "benchmark",
      "canary",
      "ship",
      "land-and-deploy",
      "document-release",
    ],
    mission:
      "Make deployment and environment work boring, repeatable, and observable.",
    owns: [
      "deployment automation",
      "release pipeline integrity",
      "environment configuration risk notes",
      "release documentation inputs",
    ],
    outputs: [
      "deploy automation changes",
      "release pipeline notes",
      "canary or rollout plan",
      "environment risk memo",
    ],
    upstream: [
      "release candidate and QA verdict",
      "VP of Engineering release sequencing",
    ],
    downstream: [
      "Release Engineer and SRE",
      "Support Lead for operational readiness",
    ],
    sources: [
      "agency-agents/engineering/engineering-devops-automator.md",
      "gstack/land-and-deploy",
      "gstack/document-release",
    ],
    toolSurfaces: ["CI/CD", "deploy notes", "runtime configs", "release docs"],
    evidenceSurfaces: ["deploy checklist", "rollout plan", "release documentation"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No undocumented infra changes",
      "No release without rollback or rollout notes",
    ],
    postImport: "New specialist. Activate once deploy tooling and secrets are wired.",
    discipline: "engineering",
  },
  {
    slug: "sre",
    name: "SRE",
    title: "Site Reliability Engineer",
    role: "devops",
    icon: "shield-check",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns service reliability, observability, incident-readiness, and operational risk posture for the shipped venture.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "benchmark",
      "canary",
      "investigate",
      "systematic-debugging",
      "cso",
    ],
    mission:
      "Keep the launchable system observable enough that failures are detected and contained quickly.",
    owns: [
      "observability and alerting logic",
      "runtime reliability checks",
      "incident-risk reviews",
      "post-release reliability notes",
    ],
    outputs: [
      "reliability checklist",
      "observability gaps report",
      "incident-readiness notes",
      "runtime risk summary",
    ],
    upstream: [
      "deploy and release notes",
      "backend and infra changes",
    ],
    downstream: [
      "Support Lead and VP of Engineering",
      "Release Engineer for rollout confidence",
    ],
    sources: [
      "agency-agents/engineering/engineering-sre.md",
      "gstack/canary",
      "gstack/investigate",
    ],
    toolSurfaces: ["Observability notes", "runtime diagnostics", "release and canary plans"],
    evidenceSurfaces: ["reliability checklist", "runtime risk summary", "canary notes"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No reliability claims without signals or checks",
      "No incident readiness based on assumptions alone",
    ],
    postImport: "New specialist. Activate once observability surfaces are wired.",
    discipline: "engineering",
  },
  {
    slug: "security-engineer",
    name: "Security Engineer",
    title: "Security Engineer",
    role: "devops",
    icon: "lock",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns security review, threat assumptions, and hardening guidance across the launch-bound product surface and release path.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "review",
      "qa",
      "investigate",
      "cso",
      "benchmark",
    ],
    mission:
      "Reduce avoidable security risk before launch without inventing enterprise-grade theater beyond the venture scope.",
    owns: [
      "security threat review",
      "security acceptance notes for release",
      "hardening recommendations",
      "sensitive-path risk escalation",
    ],
    outputs: [
      "security review memo",
      "hardening checklist",
      "release security notes",
      "sensitive-path risk log",
    ],
    upstream: [
      "implementation and architecture artifacts",
      "QA findings and release candidate",
    ],
    downstream: [
      "Code Reviewer, QA Director, and Release Engineer",
      "VP of Engineering for final risk decisions",
    ],
    sources: [
      "agency-agents/engineering/engineering-security-engineer.md",
      "gstack/cso",
      "gstack/review",
    ],
    toolSurfaces: ["Diffs", "review notes", "runtime risk docs"],
    evidenceSurfaces: ["security memo", "hardening checklist", "risk log"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No vague security theater",
      "No approval of release without explicit risk framing",
    ],
    postImport: "New specialist. Activate once repo and runtime review surfaces are wired.",
    discipline: "engineering",
  },
  {
    slug: "code-reviewer",
    name: "Code Reviewer",
    title: "Engineering Code Reviewer",
    role: "qa",
    icon: "scan-eye",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Acts as the independent code-quality gate between implementation and QA or release.",
    budgetMonthlyCents: 15000,
    canCreateAgents: false,
    skills: [
      "review",
      "plan-eng-review",
      "qa-only",
      "receiving-code-review",
      "verification-before-completion",
    ],
    mission:
      "Protect engineering quality by reviewing against approved scope, architecture, correctness, and verification evidence.",
    owns: [
      "independent code and diff review",
      "spec-compliance checks",
      "clear PASS / FAIL / RETRY / ESCALATE verdicts",
      "handoff quality into QA and release",
    ],
    outputs: [
      "review verdict",
      "blocking issue list",
      "approval packet for QA or release",
      "remediation guidance",
    ],
    upstream: [
      "implementation package from developers",
      "architecture and acceptance artifacts",
    ],
    downstream: [
      "QA Director and QA Engineer on pass",
      "Release Engineer when no further QA is needed",
      "implementers on fail or retry",
    ],
    sources: [
      "agency-agents/engineering/engineering-code-reviewer.md",
      "gstack/review",
      "superpowers/receiving-code-review",
    ],
    toolSurfaces: ["Diffs", "tests", "acceptance docs", "review notes"],
    evidenceSurfaces: ["review verdict", "blocking issues", "approval packet"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No self-release authority",
      "No pass verdict without evidence",
    ],
    postImport: "Existing package role moves under VP Engineering; keep paused until repo access is wired.",
    discipline: "engineering",
  },
  {
    slug: "qa-director",
    name: "QA Director",
    title: "QA Director",
    role: "qa",
    icon: "clipboard-check",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns QA strategy, risk-based test coverage, and launch-go quality framing across the venture release train.",
    budgetMonthlyCents: 16000,
    canCreateAgents: false,
    skills: [
      "qa",
      "qa-only",
      "test-scenarios",
      "benchmark",
      "canary",
    ],
    mission:
      "Turn QA into a release-quality gate with explicit coverage decisions rather than ad-hoc spot checking.",
    owns: [
      "QA strategy and scope",
      "risk-based test coverage planning",
      "quality verdict packaging",
      "pre-release defect triage discipline",
    ],
    outputs: [
      "QA plan",
      "coverage matrix",
      "quality verdict",
      "defect-priority memo",
    ],
    upstream: [
      "review-approved implementation package",
      "acceptance criteria and test scenarios",
    ],
    downstream: [
      "QA Engineer and Release Engineer",
      "VP of Engineering for launch-go decisions",
    ],
    sources: [
      "agency-agents/testing/testing-reality-checker.md",
      "gstack/qa",
      "pm-skills/pm-execution/skills/test-scenarios",
    ],
    toolSurfaces: ["QA reports", "test scenarios", "release notes"],
    evidenceSurfaces: ["coverage matrix", "QA verdict", "defect memo"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No fuzzy QA sign-off",
      "No skipping critical-path risk coverage",
    ],
    postImport: "New specialist. Activate once QA tooling and test environments are wired.",
    discipline: "engineering",
  },
  {
    slug: "qa-engineer",
    name: "QA Engineer",
    title: "QA Engineer",
    role: "qa",
    icon: "bug",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Executes test scenarios, reproduces defects, validates fixes, and creates release-quality evidence for venture launches.",
    budgetMonthlyCents: 14500,
    canCreateAgents: false,
    skills: [
      "qa",
      "qa-only",
      "test-scenarios",
      "systematic-debugging",
      "verification-before-completion",
    ],
    mission:
      "Provide objective evidence that the approved scope behaves correctly in the ways users and the business actually care about.",
    owns: [
      "scenario execution",
      "defect reproduction and verification",
      "release-quality evidence collection",
      "regression confirmation after fixes",
    ],
    outputs: [
      "QA execution report",
      "defect reports",
      "regression verification notes",
      "release evidence bundle",
    ],
    upstream: [
      "QA plan and accepted scenarios",
      "review-approved implementation",
    ],
    downstream: [
      "QA Director and Release Engineer",
      "developers for defect fixes",
    ],
    sources: [
      "agency-agents/testing/testing-evidence-collector.md",
      "gstack/qa-only",
      "pm-skills/pm-execution/skills/test-scenarios",
    ],
    toolSurfaces: ["Tests", "QA reports", "release evidence"],
    evidenceSurfaces: ["execution report", "defect reports", "regression notes"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No approving fixes without rerunning evidence",
      "No collapsing QA findings into vague summaries",
    ],
    postImport: "New specialist. Activate once QA tooling and test environments are wired.",
    discipline: "engineering",
  },
  {
    slug: "release-engineer",
    name: "Release Engineer",
    title: "Release Engineer",
    role: "devops",
    icon: "package-check",
    reportsToSlug: "vp-engineering",
    teamSlug: "engineering",
    capabilities:
      "Owns final merge, release mechanics, rollout, rollback preparation, and final release communication quality.",
    budgetMonthlyCents: 15500,
    canCreateAgents: false,
    skills: [
      "ship",
      "land-and-deploy",
      "document-release",
      "verification-before-completion",
      "canary",
      "review",
    ],
    mission:
      "Turn approved change packages into safe releases with clear verification, rollout, and rollback logic.",
    owns: [
      "release packaging and merge discipline",
      "rollout and rollback planning",
      "release-note finalization",
      "final release verification before launch",
    ],
    outputs: [
      "release checklist",
      "release notes",
      "rollout plan",
      "post-release verification note",
    ],
    upstream: [
      "QA and review approval packets",
      "deploy automation and canary plan",
    ],
    downstream: [
      "Support Lead and SRE for launch monitoring",
      "CEO and Launch Lead for release status",
    ],
    sources: [
      "gstack/ship",
      "gstack/land-and-deploy",
      "pm-skills/pm-execution/skills/release-notes",
    ],
    toolSurfaces: ["Git and release tooling", "CI status", "release docs"],
    evidenceSurfaces: ["release checklist", "rollout plan", "verification note"],
    secrets: ["OPENAI_API_KEY", "GITHUB_TOKEN"],
    restrictions: [
      "No self-approval of unreviewed code",
      "No release without rollback and verification steps",
    ],
    postImport: "Existing package role moves under VP Engineering; keep paused until release tooling is wired.",
    discipline: "engineering",
  },
  {
    slug: "support-lead",
    name: "Support Lead",
    title: "Support Lead",
    role: "pm",
    icon: "life-buoy",
    reportsToSlug: "ceo",
    teamSlug: "support",
    capabilities:
      "Owns support readiness, feedback capture, incident routing, and support-to-product signal quality after launch.",
    budgetMonthlyCents: 17000,
    canCreateAgents: false,
    skills: [
      "paperclip",
      "paperclip-knowledge",
      "portfolio-review",
      "payment-signal-policy",
      "summarize-meeting",
      "analyze-feature-requests",
      "metrics-dashboard",
    ],
    mission:
      "Convert post-launch customer contact into structured operating signal instead of a noisy inbox.",
    owns: [
      "support operating model and escalation paths",
      "support readiness before launch",
      "cross-team feedback loop quality",
      "support load visibility after launch",
    ],
    outputs: [
      "support readiness checklist",
      "incident and escalation map",
      "weekly support signal summary",
      "post-launch feedback packet",
    ],
    upstream: [
      "Launch-to-support handoff",
      "pricing and payment expectations",
      "release notes and known issues",
    ],
    downstream: [
      "Feedback Synthesizer and Analytics Reporter",
      "Launch Lead, CMO, and VP Engineering for escalations",
    ],
    sources: [
      "agency-agents/support/support-support-responder.md",
      "pm-skills/pm-product-discovery/skills/analyze-feature-requests",
      "pm-skills/pm-execution/skills/summarize-meeting",
    ],
    toolSurfaces: ["Support logs", "feedback docs", "metrics dashboards", "Paperclip tasks"],
    evidenceSurfaces: ["support checklist", "escalation map", "weekly support packet"],
    secrets: ["OPENAI_API_KEY", "PAYMENT_PROVIDER_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No support readiness claims without escalation owners",
      "No payment ambiguity resolved without policy",
    ],
    postImport: "Existing package role becomes a top-level manager; keep paused until support tooling and escalation templates are wired.",
    discipline: "support",
  },
  {
    slug: "support-responder",
    name: "Support Responder",
    title: "Support Responder",
    role: "general",
    icon: "message-circle-reply",
    reportsToSlug: "support-lead",
    teamSlug: "support",
    capabilities:
      "Handles first-line support responses, triage, and canonical ticket capture without losing signal quality.",
    budgetMonthlyCents: 13000,
    canCreateAgents: false,
    skills: [
      "summarize-meeting",
      "sentiment-analysis",
      "payment-signal-policy",
    ],
    mission:
      "Resolve or route customer issues quickly while preserving structured evidence for the rest of the company.",
    owns: [
      "first-response quality",
      "ticket triage and categorization",
      "policy-aware handling of payment ambiguity",
      "handoff quality into support synthesis",
    ],
    outputs: [
      "triaged support responses",
      "ticket summaries",
      "escalation packets",
      "payment ambiguity notes",
    ],
    upstream: [
      "support queue and launch context",
      "known issues and policy docs",
    ],
    downstream: [
      "Feedback Synthesizer and Support Lead",
      "Engineering or Launch teams on escalations",
    ],
    sources: [
      "agency-agents/support/support-support-responder.md",
      "pm-skills/pm-execution/skills/summarize-meeting",
    ],
    toolSurfaces: ["Support queue", "response templates", "policy docs"],
    evidenceSurfaces: ["ticket summary", "escalation note", "sentiment note"],
    secrets: ["OPENAI_API_KEY", "PAYMENT_PROVIDER_API_KEY"],
    restrictions: [
      "No ad-hoc promises outside policy",
      "No unresolved critical issue closed without owner",
    ],
    postImport: "New specialist. Activate once support queue tooling is wired.",
    discipline: "support",
  },
  {
    slug: "feedback-synthesizer",
    name: "Feedback Synthesizer",
    title: "Feedback Synthesizer",
    role: "researcher",
    icon: "notebook-tabs",
    reportsToSlug: "support-lead",
    teamSlug: "support",
    capabilities:
      "Turns qualitative support and launch feedback into structured themes, product implications, and escalation-ready evidence.",
    budgetMonthlyCents: 13500,
    canCreateAgents: false,
    skills: [
      "paperclip-knowledge",
      "sentiment-analysis",
      "analyze-feature-requests",
      "summarize-meeting",
      "cohort-analysis",
    ],
    mission:
      "Normalize noisy post-launch feedback into artifacts that product, marketing, and engineering can actually act on.",
    owns: [
      "feedback normalization",
      "theme and sentiment synthesis",
      "feature request pattern detection",
      "cross-team feedback packaging",
    ],
    outputs: [
      "feedback synthesis report",
      "theme map",
      "feature-request triage memo",
      "cross-team escalation artifacts",
    ],
    upstream: [
      "ticket summaries and support logs",
      "growth and measurement context",
    ],
    downstream: [
      "Launch Lead, CMO, and VP Engineering",
      "CEO for portfolio-level feedback visibility",
    ],
    sources: [
      "agency-agents/product/product-feedback-synthesizer.md",
      "pm-skills/pm-product-discovery/skills/analyze-feature-requests",
      "pm-skills/pm-market-research/skills/sentiment-analysis",
    ],
    toolSurfaces: ["Knowledge docs", "support summaries", "feedback datasets"],
    evidenceSurfaces: ["synthesis report", "theme map", "triage memo"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No collapsing feedback into vague anecdotes",
      "No backlog recommendations without evidence clusters",
    ],
    postImport: "Existing package role moves under Support Lead; keep paused until support and analytics surfaces are wired.",
    discipline: "support",
  },
  {
    slug: "analytics-reporter",
    name: "Analytics Reporter",
    title: "Analytics Reporter",
    role: "researcher",
    icon: "bar-chart-3",
    reportsToSlug: "support-lead",
    teamSlug: "support",
    capabilities:
      "Combines product, support, and marketing metrics into readable post-launch operating reports.",
    budgetMonthlyCents: 14000,
    canCreateAgents: false,
    skills: [
      "metrics-dashboard",
      "cohort-analysis",
      "north-star-metric",
      "portfolio-review",
    ],
    mission:
      "Make post-launch performance readable fast enough that leadership can decide what to fix, scale, or kill.",
    owns: [
      "post-launch KPI reporting",
      "cohort and retention readouts",
      "cross-team metric synthesis",
      "weekly operating report quality",
    ],
    outputs: [
      "weekly operating report",
      "cohort summary",
      "North Star metric readout",
      "portfolio-health inputs",
    ],
    upstream: [
      "measurement dashboards",
      "support and growth summaries",
    ],
    downstream: [
      "CEO, Support Lead, CMO, and Launch Lead",
      "portfolio review artifacts",
    ],
    sources: [
      "agency-agents/support/support-analytics-reporter.md",
      "pm-skills/pm-data-analytics/skills/cohort-analysis",
      "pm-skills/pm-marketing-growth/skills/north-star-metric",
    ],
    toolSurfaces: ["Analytics dashboards", "cohort tables", "portfolio review docs"],
    evidenceSurfaces: ["operating report", "cohort summary", "KPI readout"],
    secrets: ["OPENAI_API_KEY", "ANALYTICS_API_KEY"],
    restrictions: [
      "No executive summaries detached from source metrics",
      "No metric certainty claims when instrumentation is weak",
    ],
    postImport: "New specialist. Activate once analytics surfaces and report templates are wired.",
    discipline: "support",
  },
];

function defaultMcp(agent) {
  if (agent.mcp) {
    return agent.mcp;
  }
  if (agent.discipline === "engineering") {
    return "repo/worktree, git/GitHub, CI/test tooling";
  }
  if (agent.discipline === "marketing") {
    return agent.skills.includes("paperclip")
      ? "paperclip, paperclip-knowledge, browser research, analytics read"
      : "paperclip-knowledge, browser research, analytics read";
  }
  if (agent.discipline === "product-launch") {
    return agent.skills.includes("paperclip")
      ? "paperclip, paperclip-knowledge, optional browser research"
      : "paperclip-knowledge, optional browser research";
  }
  if (agent.discipline === "support") {
    return agent.skills.includes("paperclip")
      ? "paperclip, paperclip-knowledge, analytics read"
      : "paperclip-knowledge, analytics read";
  }
  return "paperclip-knowledge";
}

const allAgents = [...preservedAgents, ...generatedAgents].map((agent) => ({
  ...agent,
  path: agent.path ?? relAgentPath(agent.slug),
  tools: agent.tools ?? (agent.toolSurfaces ? agent.toolSurfaces.join(", ") : "canonical artifacts"),
  mcp: defaultMcp(agent),
}));

const teams = [
  {
    slug: "research",
    name: "Research",
    managerSlug: "research-lead",
    memberSlugs: ["research-synthesizer", "competitor-scout", "demand-validator", "revenue-validator"],
    mission:
      "Source venture candidates, prove direct evidence, and hand off only decision-grade queue packages.",
    outputs: [
      "queue package",
      "competitor, demand, and monetization evidence",
      "assumption map",
      "QUEUE / KILL / KILL FOR NOW recommendation",
    ],
    upstream: [
      "CEO sourcing priorities and policy constraints",
      "venture-policy and budget guardrails",
    ],
    downstream: [
      "Product Launch Team via research dossier and queue package",
      "CEO for Gate A and queue decisions",
    ],
    runtimeSkills: ["paperclip", "paperclip-knowledge"],
    mandatorySkills: [
      "venture-policy",
      "research-scorecard",
      "research-competitor-analysis",
      "research-demand-validation",
      "research-revenue-validation",
      "competitor-analysis",
      "market-sizing",
      "pricing-strategy",
      "monetization-strategy",
      "identify-assumptions-new",
      "prioritize-assumptions",
    ],
    optionalSkills: ["user-personas", "sentiment-analysis"],
  },
  {
    slug: "product-launch",
    name: "Product Launch",
    managerSlug: "launch-lead",
    memberSlugs: [
      "product-definer",
      "ux-researcher",
      "ux-architect",
      "ui-designer",
      "pricing-strategist",
      "launch-program-manager",
    ],
    mission:
      "Turn approved ventures into launchable products through definition, UX, pricing, and Gate B discipline.",
    outputs: [
      "launch-brief",
      "Gate B readiness packet",
      "handoff dossier",
      "launch readiness recommendation",
    ],
    upstream: [
      "Research dossier and Gate A decision",
      "CEO budget and policy constraints",
    ],
    downstream: [
      "Engineering Team for build execution",
      "Marketing Team for channel execution",
      "Support Team for support readiness",
    ],
    runtimeSkills: ["paperclip", "paperclip-knowledge"],
    mandatorySkills: [
      "launch-gates",
      "payment-signal-policy",
      "launch-product-definition",
      "launch-gtm-readiness",
      "create-prd",
      "ideal-customer-profile",
      "value-proposition",
      "customer-journey-map",
      "stakeholder-map",
      "user-stories",
      "test-scenarios",
      "pre-mortem",
      "pricing-strategy",
      "gtm-strategy",
      "release-notes",
    ],
    optionalSkills: ["gtm-motions", "user-personas", "sentiment-analysis"],
  },
  {
    slug: "marketing",
    name: "Marketing",
    managerSlug: "cmo",
    memberSlugs: [
      "growth-lead",
      "marketing-strategist",
      "seo-specialist",
      "content-creator",
      "paid-media-strategist",
      "tracking-measurement-specialist",
      "community-builder",
      "ai-citation-strategist",
    ],
    mission:
      "Own positioning, demand generation, measurement, and message quality for each venture launch.",
    outputs: [
      "marketing plan",
      "channel and campaign briefs",
      "measurement dashboard",
      "launch content and positioning assets",
    ],
    upstream: [
      "Launch brief, pricing package, and approved scope",
      "Research context and competitive insights",
    ],
    downstream: [
      "Support Team for expectation setting and feedback loops",
      "CEO and Launch Lead for launch readiness and performance reviews",
    ],
    runtimeSkills: ["paperclip", "paperclip-knowledge"],
    mandatorySkills: [
      "launch-gtm-readiness",
      "marketing-ideas",
      "positioning-ideas",
      "growth-loops",
      "north-star-metric",
      "metrics-dashboard",
      "competitive-battlecard",
      "beachhead-segment",
      "value-prop-statements",
      "gtm-strategy",
      "gtm-motions",
    ],
    optionalSkills: ["release-notes", "cohort-analysis", "sentiment-analysis"],
  },
  {
    slug: "engineering",
    name: "Engineering",
    managerSlug: "vp-engineering",
    memberSlugs: [
      "software-architect",
      "backend-architect",
      "frontend-developer",
      "ai-engineer",
      "senior-developer",
      "devops-automator",
      "sre",
      "security-engineer",
      "code-reviewer",
      "qa-director",
      "qa-engineer",
      "release-engineer",
    ],
    mission:
      "Build, review, verify, and release ventures through a full engineering system rather than a single overloaded builder role.",
    outputs: [
      "architecture notes",
      "implementation changes",
      "review and QA verdicts",
      "release checklist and rollout plan",
    ],
    upstream: [
      "approved Gate B packet and handoff dossier",
      "UX and product definition artifacts",
    ],
    downstream: [
      "Support Team and SRE for post-release monitoring",
      "Launch Lead and CEO for release status",
    ],
    runtimeSkills: ["paperclip"],
    mandatorySkills: [
      "brainstorming",
      "writing-plans",
      "subagent-driven-development",
      "test-driven-development",
      "systematic-debugging",
      "verification-before-completion",
      "requesting-code-review",
      "receiving-code-review",
      "using-git-worktrees",
      "finishing-a-development-branch",
      "dispatching-parallel-agents",
      "plan-eng-review",
      "review",
      "qa",
      "qa-only",
      "ship",
      "land-and-deploy",
      "investigate",
      "document-release",
    ],
    optionalSkills: ["benchmark", "canary", "cso"],
  },
  {
    slug: "support",
    name: "Support",
    managerSlug: "support-lead",
    memberSlugs: ["support-responder", "feedback-synthesizer", "analytics-reporter"],
    mission:
      "Convert post-launch tickets, incidents, and customer contact into structured feedback and operating signal.",
    outputs: [
      "support readiness checklist",
      "ticket summaries and escalation packets",
      "feedback synthesis report",
      "weekly operating report",
    ],
    upstream: [
      "launch-to-support handoff",
      "release notes, known issues, pricing, and measurement context",
    ],
    downstream: [
      "Launch Lead, CMO, VP of Engineering, and CEO for fixes, messaging, and portfolio decisions",
    ],
    runtimeSkills: ["paperclip", "paperclip-knowledge"],
    mandatorySkills: [
      "payment-signal-policy",
      "portfolio-review",
      "summarize-meeting",
      "sentiment-analysis",
      "metrics-dashboard",
      "analyze-feature-requests",
    ],
    optionalSkills: ["cohort-analysis", "north-star-metric"],
  },
  {
    slug: "studio-ops",
    name: "Studio Ops",
    managerSlug: "chief-of-staff",
    memberSlugs: ["agent-mechanic"],
    mission:
      "Protect operating cadence, runtime reliability, migration safety, and instruction quality while the org evolves.",
    outputs: [
      "operating reviews",
      "runtime reliability fixes",
      "migration checklists",
      "instruction and skill maintenance",
    ],
    upstream: [
      "CEO operating priorities",
      "company health and migration incidents",
    ],
    downstream: [
      "all teams through cadence, reliability, and post-import wiring support",
    ],
    runtimeSkills: ["paperclip", "paperclip-create-agent", "paperclip-knowledge"],
    mandatorySkills: [
      "studio-ops-agent-reliability",
      "writing-skills",
      "verification-before-completion",
      "systematic-debugging",
      "executing-plans",
    ],
    optionalSkills: ["dispatching-parallel-agents", "using-git-worktrees", "requesting-code-review"],
  },
];

const docIncludes = [
  "docs/skill-policy.md",
  "docs/team-skill-matrix.md",
  "docs/mcp-access-matrix.md",
  "docs/atlas/org-map.md",
  "docs/playbooks/research-playbook.md",
  "docs/playbooks/queue-gate-a-playbook.md",
  "docs/playbooks/venture-definition-playbook.md",
  "docs/playbooks/gate-b-playbook.md",
  "docs/playbooks/build-playbook.md",
  "docs/playbooks/launch-playbook.md",
  "docs/playbooks/operate-feedback-playbook.md",
  "docs/readiness/research-readiness.md",
  "docs/readiness/gate-a-readiness.md",
  "docs/readiness/gate-b-readiness.md",
  "docs/readiness/launch-readiness.md",
  "docs/handoffs/specialist-to-specialist.md",
  "docs/handoffs/research-to-launch.md",
  "docs/handoffs/definition-to-build.md",
  "docs/handoffs/launch-to-support.md",
  "docs/handoffs/payment-ambiguity-to-board.md",
  "docs/handoffs/retry-fail-escalation.md",
  "docs/import-runbook.md",
  "docs/server-post-import-checklist.md",
  "docs/migration/v1-5-import-upgrade.md",
];

function abs(relPath) {
  return path.join(root, relPath);
}

function ensureDir(relPath) {
  fs.mkdirSync(abs(relPath), { recursive: true });
}

function write(relPath, content) {
  ensureDir(path.dirname(relPath));
  fs.writeFileSync(abs(relPath), `${content.trim()}\n`, "utf8");
}

function remove(relPath) {
  fs.rmSync(abs(relPath), { recursive: true, force: true });
}

function unique(items) {
  return [...new Set(items)];
}

function relAgentPath(slug) {
  return `agents/${slug}/AGENTS.md`;
}

function agentPath(agent) {
  return agent.path || relAgentPath(agent.slug);
}

function agentTools(agent) {
  return agent.tools || (agent.toolSurfaces ? agent.toolSurfaces.join(", ") : "canonical artifacts");
}

function agentMcp(agent) {
  return agent.mcp || defaultMcp(agent);
}

function relTeamPath(slug) {
  return `teams/${slug}/TEAM.md`;
}

function quote(text) {
  return JSON.stringify(text);
}

function yamlList(items, indent = 0) {
  const pad = " ".repeat(indent);
  return items.map((item) => `${pad}- ${item}`).join("\n");
}

function mdList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function managerPathForFrontmatter(agent) {
  if (!agent.reportsToSlug) {
    return "null";
  }
  return quote(agent.reportsToSlug);
}

function importMode(agent) {
  return coreReplaceAgents.includes(agent.slug) ? "replace-core" : "reconcile-or-new-paused";
}

function disciplineSoul(agent) {
  const souls = {
    "product-launch": [
      "Prefer clarity over momentum theater.",
      "Do not smuggle unresolved market questions into engineering.",
      "Treat design and pricing artifacts as decision instruments, not decoration.",
      "Optimize for first-payment plausibility, not feature sprawl.",
    ],
    marketing: [
      "Demand generation without measurement is noise.",
      "Prefer channel learning and positioning clarity over vanity motion.",
      "Do not promise what product or support cannot sustain.",
      "Keep every campaign anchored to the real offer and target segment.",
    ],
    engineering: [
      "Shipping without verification, review, and rollback logic is failure.",
      "Protect architectural clarity and evidence quality.",
      "Do not collapse implementation, review, QA, and release into one blurred role.",
      "Optimize for reliable scope, not heroic overbuild.",
    ],
    support: [
      "Support is signal extraction, not ticket theater.",
      "Prefer structured evidence and escalation timing over ad-hoc reassurance.",
      "Do not hide payment or retention ambiguity inside vague summaries.",
      "Tie support work back to product, marketing, and portfolio decisions.",
    ],
  };
  return souls[agent.discipline] ?? ["Protect clarity, ownership, and evidence quality."];
}

function disciplineHeartbeat(agent) {
  const heartbeats = {
    "product-launch": [
      "Re-open the venture brief, research dossier, and latest Gate B gaps.",
      "Verify ICP, offer, pricing, UX, and scope preconditions before producing anything new.",
      "Update the canonical launch packet, not just an isolated note.",
      "Escalate unresolved definition gaps to `Launch Lead` early.",
      "Stop only when the next owner and artifact are explicit.",
    ],
    marketing: [
      "Re-open the launch brief, audience definition, and current measurement plan.",
      "Verify offer, audience, channel, and metric before producing campaign work.",
      "Refresh the canonical campaign or measurement artifact instead of leaving comments-only notes.",
      "Escalate instrumentation gaps immediately and record the owner responsible for fixing them.",
      "Escalate if product definition or pricing is still unstable.",
    ],
    engineering: [
      "Re-open the approved handoff dossier and current acceptance criteria.",
      "Verify repo state, dependencies, and test strategy before editing or approving.",
      "Produce evidence alongside implementation, review, QA, or release work.",
      "Hand off to the next quality gate with explicit PASS / FAIL / RETRY / ESCALATE language.",
      "Leave fresh verification proof before claiming success.",
    ],
    support: [
      "Re-open the support queue, launch context, and recent escalation rules.",
      "Verify severity, customer impact, and payment or retention implications.",
      "Produce a canonical response, summary, or report artifact rather than chat-only notes.",
      "Escalate product, marketing, or engineering issues with evidence attached.",
      "Close the loop only when the next owner and follow-up moment are explicit.",
    ],
  };
  return heartbeats[agent.discipline] ?? ["Review the assigned artifact, act, and leave a canonical handoff."];
}

function agentIntro(agent) {
  const repoOverlayPaths = [
    `agents/${agent.slug}/SOUL.md`,
    `agents/${agent.slug}/HEARTBEAT.md`,
    `agents/${agent.slug}/TOOLS.md`,
  ];
  const lines = [
    `You are the ${agent.name} for NoHum Studio's ${teams.find((team) => team.slug === agent.teamSlug)?.name ?? agent.teamSlug} team.`,
    "",
    "Before every run, load these companion files and treat them as binding instructions:",
    "",
    `- \`${repoOverlayPaths[0]}\``,
    `- \`${repoOverlayPaths[1]}\``,
    `- \`${repoOverlayPaths[2]}\``,
    "",
    "These paths are repo-root relative. Do not interpret `./SOUL.md`, `./HEARTBEAT.md`, or `./TOOLS.md` relative to the current workspace root.",
    "If one of the companion files is missing, note that once and continue with the remaining instruction set.",
    "",
  ];
  if (agent.skills.includes("paperclip")) {
    lines.push(
      "Always use the official `paperclip` skill for control-plane workflow, issue handling, assignments, and state mutations. These NoHum instructions refine your role-specific behavior on top of that base."
    );
  } else if (agent.skills.includes("paperclip-knowledge")) {
    lines.push(
      "Use `paperclip-knowledge` whenever you need to turn work into a canonical artifact. Treat linked artifacts, not chat summaries, as the real handoff surface."
    );
  } else {
    lines.push(
      "Treat canonical artifacts and manager-approved handoffs as your source of truth. Do not rely on comments-only transitions."
    );
  }
  lines.push(
    "",
    "Treat this prompt as self-contained. Do not assume local bootstrap repository files are available at runtime unless the live company exposes them explicitly."
  );
  return lines.join("\n");
}

function renderAgent(agent) {
  return `---
kind: agent
name: ${agent.name}
title: ${agent.title}
schema: agentcompanies/v1
slug: ${agent.slug}
role: ${quote(agent.role)}
reportsTo: ${managerPathForFrontmatter(agent)}
docs:
  - HEARTBEAT.md
  - SOUL.md
  - TOOLS.md
skills:
${yamlList(agent.skills, 2)}
---

${agentIntro(agent)}

## Mission

${agent.mission}

## What You Own

${mdList(agent.owns)}

## Outputs

${mdList(agent.outputs)}

## Handoffs

Upstream inputs:
${mdList(agent.upstream)}

Downstream handoffs:
${mdList(agent.downstream)}

## Non-Board Permissions

- can create or update canonical artifacts in the owned lane
- can recommend \`PASS\`, \`FAIL\`, \`RETRY\`, or \`ESCALATE\` within role scope
- cannot bypass board-only approvals, company policy, or manager reporting lines

## Reference Lineage

${mdList(agent.sources.map((source) => `adapted from \`${source}\``))}
`;
}

function renderSoul(agent) {
  return `# ${agent.name} Soul

Your quality bar for this role:

${mdList(disciplineSoul(agent))}

Role-specific focus:

${mdList(agent.owns.map((item) => `protect ${item.charAt(0).toLowerCase()}${item.slice(1)}`))}
`;
}

function renderHeartbeat(agent) {
  return `# ${agent.name} Heartbeat

Run this checklist on every wake.

${disciplineHeartbeat(agent)
  .map((line, index) => `${index + 1}. ${line}`)
  .join("\n")}
`;
}

function renderTools(agent) {
  const importNote =
    importMode(agent) === "replace-core"
      ? "This slug is part of the exact-parity core upgrade path. Upgrade in place and rebind runtime wiring carefully."
      : "This is a non-core slug. Preview it against the live company first: if the slug already exists, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete.";
  return `# ${agent.name} Tools

Primary operating surfaces:

${mdList(agent.toolSurfaces)}

Required evidence surfaces:

${mdList(agent.evidenceSurfaces)}

Secrets usually wired after import:

${mdList(agent.secrets.map((secret) => `\`${secret}\``))}

Restrictions:

${mdList(agent.restrictions)}

Post-import note:

- ${agent.postImport}
- ${importNote}
`;
}

function renderTeam(team) {
  const includes = [
    `../../agents/${team.managerSlug}/AGENTS.md`,
    ...team.memberSlugs.map((slug) => `../../agents/${slug}/AGENTS.md`),
    ...team.mandatorySkills.map((skill) => `../../skills/${skill}/SKILL.md`),
  ];
  return `---
name: ${team.name}
slug: ${team.slug}
description: ${team.mission}
manager: ../../agents/${team.managerSlug}/AGENTS.md
includes:
${yamlList(includes, 2)}
tags:
  - nohum
  - venture-factory
  - bootstrap-layer
---

## Manager

\`${allAgents.find((agent) => agent.slug === team.managerSlug)?.name}\`

## Member Agents

${mdList(team.memberSlugs.map((slug) => `\`${allAgents.find((agent) => agent.slug === slug)?.name}\``))}

## Core Skills

Runtime base skills:
${mdList(team.runtimeSkills.map((skill) => `\`${skill}\``))}

Vendored local skills:
${mdList(team.mandatorySkills.map((skill) => `\`${skill}\``))}

## Mission

${team.mission}

## Main Outputs

${mdList(team.outputs)}

## Upstream Inputs

${mdList(team.upstream)}

## Downstream Handoffs

${mdList(team.downstream)}

## Team Notes

- \`teams/\` remains a bootstrap/package layer; live runtime behavior must still be represented through reporting lines, artifacts, and skills.
- Every cross-team handoff must point to a canonical artifact, never comments-only status.
`;
}

function renderCompany() {
  const agentIncludes = allAgents.map((agent) => agentPath(agent));
  const teamIncludes = teams.map((team) => relTeamPath(team.slug));
  const skillIncludes = unique(
    fs
      .readdirSync(abs("skills"), { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && fs.existsSync(abs(path.join("skills", entry.name, "SKILL.md"))))
      .map((entry) => `skills/${entry.name}/SKILL.md`)
  ).sort();
  const includes = [
    ...agentIncludes,
    "projects/hypothesis-funnel/PROJECT.md",
    "projects/studio-os/PROJECT.md",
    "tasks/bootstrap-company/TASK.md",
    "tasks/weekly-board-review/TASK.md",
    "tasks/portfolio-health-review/TASK.md",
    ...teamIncludes,
    ...skillIncludes,
    ...docIncludes,
  ];
  return `---
kind: company
name: NoHum Studio
description: AI-only venture factory import package for upgrading the live NoHum Studio runtime
slug: nohum-studio
schema: agentcompanies/v1
version: 1.5.0
goals:
  - Build and operate an AI-only venture factory that repeatedly sources, evaluates, launches, kills, and maintains fast-cycle microproducts.
includes:
${yamlList(includes, 2)}
requirements:
  secrets: []
---

NoHum Studio is a venture factory, not a single-product company.

This repository is the detailed-core v1.5 source package for upgrading the current live NoHum Studio company rather than creating a greenfield organization.

The package is intentionally layered:

- import-safe layer: \`COMPANY.md\`, \`paperclip.manifest.json\`, \`.paperclip.yaml\`, and stable agent identities
- richer bootstrap layer: team docs, playbooks, handoffs, readiness artifacts, vendored skills, and migration runbooks

## Detailed-Core Org Scope

- Control plane: \`CEO\`, \`Chief of Staff\`, \`Agent Mechanic\`
- Research: \`Research Lead\`, \`Research Synthesizer\`, \`Competitor Scout\`, \`Demand Validator\`, \`Revenue Validator\`
- Product Launch: \`Launch Lead\`, \`Product Definer\`, \`UX Researcher\`, \`UX Architect\`, \`UI Designer\`, \`Pricing Strategist\`, \`Launch Program Manager\`
- Marketing: \`CMO\`, \`Growth Lead\`, \`Marketing Strategist\`, \`SEO Specialist\`, \`Content Creator\`, \`Paid Media Strategist\`, \`Tracking & Measurement Specialist\`, \`Community Builder\`, \`AI Citation Strategist\`
- Engineering: \`VP of Engineering\`, \`Software Architect\`, \`Backend Architect\`, \`Frontend Developer\`, \`AI Engineer\`, \`Senior Developer\`, \`DevOps Automator\`, \`SRE\`, \`Security Engineer\`, \`Code Reviewer\`, \`QA Director\`, \`QA Engineer\`, \`Release Engineer\`
- Support: \`Support Lead\`, \`Support Responder\`, \`Feedback Synthesizer\`, \`Analytics Reporter\`
- Studio Ops remains a bootstrap/control layer through \`Chief of Staff\` and \`Agent Mechanic\`

## Live Upgrade Rules

- existing live identities with exact parity are upgraded in place: \`ceo\`, \`research-lead\`, \`launch-lead\`
- newly introduced managers and specialists are imported as new agents and remain paused until runtime wiring is complete
- \`teams/\` is a bootstrap/package layer and must also be represented through reporting lines, docs, and skills
- cross-role phase transitions require canonical artifacts, never comments-only handoffs
`;
}

function renderManifest() {
  const manifest = {
    schemaVersion: 1,
    generatedAt,
    source: null,
    includes: {
      company: true,
      agents: true,
    },
    company: {
      path: "COMPANY.md",
      name: "NoHum Studio",
      description: "AI-only venture factory import package for upgrading the live NoHum Studio runtime",
      brandColor: null,
      requireBoardApprovalForNewAgents: true,
    },
    agents: allAgents.map((agent) => ({
      slug: agent.slug,
      name: agent.name,
      path: agentPath(agent),
      role: agent.role,
      title: agent.title,
      icon: agent.icon,
      capabilities: agent.capabilities,
      reportsToSlug: agent.reportsToSlug,
      adapterType: "codex_local",
      adapterConfig: {
        model: "gpt-5.4",
        modelReasoningEffort: "high",
      },
      runtimeConfig: {},
      permissions: {
        canCreateAgents: agent.canCreateAgents,
      },
      budgetMonthlyCents: agent.budgetMonthlyCents,
      metadata: null,
    })),
  };
  return JSON.stringify(manifest, null, 2);
}

function renderPaperclipYaml() {
  const lines = [
    "schema: paperclip/v1",
    "description: Bootstrap runtime defaults for NoHum Studio v1.5 detailed-core org package.",
    "",
    "company:",
    "  budgetMonthlyCents: 650000",
    "",
    "agents:",
  ];
  for (const agent of allAgents) {
    lines.push(`  ${agent.slug}:`);
    lines.push(`    role: ${quote(agent.role)}`);
    lines.push(`    icon: ${quote(agent.icon)}`);
    lines.push(`    capabilities: ${quote(agent.capabilities)}`);
    lines.push(`    reportsTo: ${agent.reportsToSlug ? quote(agent.reportsToSlug) : "null"}`);
    lines.push("    adapter:");
    lines.push("      type: codex_local");
    lines.push("      config:");
    lines.push("        model: gpt-5.4");
    lines.push("        modelReasoningEffort: high");
    lines.push("        dangerouslyBypassApprovalsAndSandbox: true");
    lines.push(`    budgetMonthlyCents: ${agent.budgetMonthlyCents}`);
    lines.push("    permissions:");
    lines.push(`      canCreateAgents: ${agent.canCreateAgents ? "true" : "false"}`);
    lines.push("    inputs:");
    lines.push("      env:");
    for (const secret of unique(agent.secrets)) {
      lines.push(`        ${secret}:`);
      lines.push("          kind: secret");
      lines.push("          requirement: optional");
    }
    lines.push("    notes:");
    lines.push(`      - ${agent.postImport}`);
    if (importMode(agent) === "replace-core") {
      lines.push("      - Exact-parity core slug. Upgrade in place and validate reporting lines after import.");
    } else {
      lines.push(
        "      - Non-core slug. Preview first: if the slug already exists live, reconcile or update it in place; if it is absent, import it as new and keep it paused until runtime wiring is complete."
      );
    }
  }
  return lines.join("\n");
}

function renderReadme() {
  return `# NoHum Studio v1.5 Detailed-Core

Public source package for upgrading the live NoHum Studio company inside Paperclip.

This repository is not the live runtime source of truth. It is the import-safe package and richer bootstrap layer used to evolve the current live company without rebuilding it from zero.

## Package Contract

Import-safe layer:

- \`COMPANY.md\`
- \`paperclip.manifest.json\`
- \`.paperclip.yaml\`
- stable agent identities in \`agents/*/AGENTS.md\`

Richer bootstrap layer:

- \`agents/*/{SOUL,HEARTBEAT,TOOLS}.md\`
- \`teams/*/TEAM.md\`
- vendored \`skills/\`
- \`docs/playbooks/\`
- \`docs/readiness/\`
- \`docs/handoffs/\`
- \`docs/migration/\`

## Detailed Org Scope

- Product Launch is now separate from Marketing, Engineering, and Support.
- Marketing has its own top-level manager: \`CMO\`.
- Engineering has its own top-level manager: \`VP of Engineering\`.
- Support is a standalone team under \`Support Lead\`.
- Research and Studio Ops remain separate.

## Vendored Skill Strategy

This package now vendors selected local skills from four sources:

- \`agency-agents\` for role topology and deliverable-first prompt shape
- \`pm-skills\` for PM, GTM, marketing, research, and support frameworks
- \`superpowers\` for engineering execution discipline
- \`gstack\` for engineering review, QA, release, and security pipeline

The base operating skills \`paperclip\`, \`paperclip-create-agent\`, \`paperclip-knowledge\`, and \`para-memory-files\` are vendored in this repository so import-time skill references resolve inside the package. They still require live runtime wiring after import: Paperclip API env vars for the control-plane skills, and a writable adapter memory path for \`para-memory-files\`. For gstack-derived engineering skills, the local \`SKILL.md\` files in this repo are the source of truth; upstream templates remain lineage only.

## Import Policy

Default target is the existing live \`NoHum Studio\` company.

Safe migration path:

1. replace only the exact-parity core agents:
   - \`ceo\`
   - \`research-lead\`
   - \`launch-lead\`
2. preview every non-core slug against the live company before import
3. if a non-core slug already exists live, reconcile or update it in place instead of creating a duplicate
4. import only absent non-core roles as new records and keep them paused until secrets, tools, and runtime instructions are wired

If preview shows rename or duplicate behavior for any preexisting slug, stop the bulk import and switch to manual package-driven migration.

## Repository Map

- \`agents/\`: four-file bundle per role
- \`teams/\`: team responsibility maps
- \`skills/\`: vendored local skills plus NoHum overlays
- \`docs/team-skill-matrix.md\`: team-level runtime and vendored skill policy
- \`docs/mcp-access-matrix.md\`: tool, MCP, and secret policy by role
- \`docs/import-runbook.md\`: package-driven import sequence
- \`docs/server-post-import-checklist.md\`: server-side validation checklist
`;
}

function renderSkillPolicy() {
  return `# NoHum Skill Policy

NoHum skill policy is now explicit: role ownership lives in the org structure, repeatable specialist behavior lives in local skills, and the package must physically contain every skill referenced by agent bundles.

## Skill Layers

1. Base operating skills vendored in this repo
   - \`paperclip\`
   - \`paperclip-create-agent\`
   - \`paperclip-knowledge\`
   - \`para-memory-files\`
2. Vendored local skills inside this repo
   - imported and normalized from \`pm-skills\`, \`superpowers\`, and \`gstack\`
3. NoHum overlay skills
   - \`venture-policy\`
   - \`research-scorecard\`
   - \`research-competitor-analysis\`
   - \`research-demand-validation\`
   - \`research-revenue-validation\`
   - \`launch-gates\`
   - \`launch-product-definition\`
   - \`launch-gtm-readiness\`
   - \`payment-signal-policy\`
   - \`portfolio-review\`
   - \`studio-ops-agent-reliability\`

## Vendor Sources

- \`agency-agents\`: source of role topology and deliverable-first behavior, not direct runtime skill files
- \`pm-skills\`: source of research, product, GTM, marketing, support, and analytics skill files
- \`superpowers\`: source of engineering execution workflow skills
- \`gstack\`: source lineage for review, QA, release, and security pipeline skills, but local NoHum-adapted files are authoritative

## Rules

- No core team should rely on prompt prose alone for its operating behavior.
- Team docs must reference actual local skill directories when a behavior is part of the package contract.
- Base operating skills are part of the package contract and must exist locally under \`skills/\`, even when they depend on post-import runtime wiring.
- If an upstream skill conflicts with local runtime reality, adapt or quarantine it before calling it package-ready.
- If a local skill becomes outdated, either refresh it from source lineage or remove it from the team matrix. Do not leave dead references.
- Cross-team handoffs must point to canonical artifacts generated under these skill contracts.

## Detailed-Core Outcome

The previous compact delivery layer is no longer the primary execution substrate. Engineering, Marketing, Product Launch, and Support now each have their own local skill bundles and separate ownership boundaries.
`;
}

function renderTeamSkillMatrix() {
  const sections = teams.map((team) => {
    const manager = allAgents.find((agent) => agent.slug === team.managerSlug)?.name;
    const members = team.memberSlugs.map((slug) => allAgents.find((agent) => agent.slug === slug)?.name);
    return `## ${team.name} Team

Manager: \`${manager}\`
Members: ${members.map((member) => `\`${member}\``).join(", ")}

Runtime base skills:
${mdList(team.runtimeSkills.map((skill) => `\`${skill}\``))}

Mandatory local skills:
${mdList(team.mandatorySkills.map((skill) => `\`${skill}\``))}

Optional local skills:
${mdList(team.optionalSkills.map((skill) => `\`${skill}\``))}

Why:
- ${team.mission}
`;
  });
  return `# NoHum v1.5 Detailed-Core Team Skill Matrix

This matrix defines team-level skill bundles for the detailed-core package.

Rules:
- Base operating skills are listed separately from team-specific local skills.
- Base operating skills must also exist locally in \`skills/\` so agent references resolve during import preview.
- Mandatory local skills must exist in \`skills/\`.
- Optional skills are still local to this repository when listed here.
- No role should rely on prompt prose only for core behavior.
- When an engineering skill comes from gstack lineage, the local NoHum \`SKILL.md\` is authoritative.

${sections.join("\n")}

## Role-to-Team Assignment

- Control plane: \`CEO\`, \`Chief of Staff\`, \`Agent Mechanic\`
- Research: \`Research Lead\`, \`Research Synthesizer\`, \`Competitor Scout\`, \`Demand Validator\`, \`Revenue Validator\`
- Product Launch: \`Launch Lead\`, \`Product Definer\`, \`UX Researcher\`, \`UX Architect\`, \`UI Designer\`, \`Pricing Strategist\`, \`Launch Program Manager\`
- Marketing: \`CMO\`, \`Growth Lead\`, \`Marketing Strategist\`, \`SEO Specialist\`, \`Content Creator\`, \`Paid Media Strategist\`, \`Tracking & Measurement Specialist\`, \`Community Builder\`, \`AI Citation Strategist\`
- Engineering: \`VP of Engineering\`, \`Software Architect\`, \`Backend Architect\`, \`Frontend Developer\`, \`AI Engineer\`, \`Senior Developer\`, \`DevOps Automator\`, \`SRE\`, \`Security Engineer\`, \`Code Reviewer\`, \`QA Director\`, \`QA Engineer\`, \`Release Engineer\`
- Support: \`Support Lead\`, \`Support Responder\`, \`Feedback Synthesizer\`, \`Analytics Reporter\`
- Studio Ops: \`Chief of Staff\`, \`Agent Mechanic\`
`;
}

function renderMcpAccessMatrix() {
  const rows = allAgents
    .map(
      (agent) =>
        `| ${agent.name} | ${agentTools(agent)} | ${agentMcp(agent)} | ${agent.secrets.map((secret) => `\`${secret}\``).join(", ")} | ${agent.restrictions.join("; ")} | ${agent.postImport} |`
    )
    .join("\n");
  return `# NoHum v1.5 Detailed-Core MCP and Tool Access Matrix

This document defines per-role access profiles for tools, MCP surfaces, secrets, restrictions, and post-import wiring.

Important:
- This is a package/bootstrap contract.
- Access is enforced via runtime adapter config, environment wiring, and policy docs.
- Never embed board credentials in agent configs.

| Role | Primary tool surfaces | MCP access profile | Required secrets | Restrictions | Post-import wiring notes |
|---|---|---|---|---|---|
${rows}

## Restriction Baseline

- Board-only decisions remain outside agent runtime credentials.
- Cross-role handoffs must point to canonical artifacts, never comments-only updates.
- No role can bypass Gate A, Gate B, review, QA, or release requirements.
- Engineering roles cannot self-approve implementation, review, QA, and release in one step.
- Marketing and Support roles cannot rewrite pricing or product promises unilaterally.
`;
}

function renderOrgMap() {
  return `# NoHum Detailed-Core Org Map

\`\`\`mermaid
graph TD
  CEO["CEO"]
  COS["Chief of Staff"]
  AM["Agent Mechanic"]
  RL["Research Lead"]
  LL["Launch Lead"]
  CMO["CMO"]
  VPE["VP of Engineering"]
  SL["Support Lead"]

  CEO --> COS
  CEO --> RL
  CEO --> LL
  CEO --> CMO
  CEO --> VPE
  CEO --> SL
  COS --> AM

  RL --> RS["Research Synthesizer"]
  RL --> CS["Competitor Scout"]
  RL --> DV["Demand Validator"]
  RL --> RV["Revenue Validator"]

  LL --> PD["Product Definer"]
  LL --> UXR["UX Researcher"]
  LL --> UXA["UX Architect"]
  LL --> UID["UI Designer"]
  LL --> PS["Pricing Strategist"]
  LL --> LPM["Launch Program Manager"]

  CMO --> GL["Growth Lead"]
  CMO --> MS["Marketing Strategist"]
  CMO --> SEO["SEO Specialist"]
  CMO --> CC["Content Creator"]
  CMO --> PMS["Paid Media Strategist"]
  CMO --> TMS["Tracking & Measurement Specialist"]
  CMO --> CB["Community Builder"]
  CMO --> AIC["AI Citation Strategist"]

  VPE --> SA["Software Architect"]
  VPE --> BA["Backend Architect"]
  VPE --> FD["Frontend Developer"]
  VPE --> AIE["AI Engineer"]
  VPE --> SD["Senior Developer"]
  VPE --> DO["DevOps Automator"]
  VPE --> SRE["SRE"]
  VPE --> SEC["Security Engineer"]
  VPE --> CR["Code Reviewer"]
  VPE --> QAD["QA Director"]
  VPE --> QAE["QA Engineer"]
  VPE --> RE["Release Engineer"]

  SL --> SR["Support Responder"]
  SL --> FS["Feedback Synthesizer"]
  SL --> AR["Analytics Reporter"]
\`\`\`

## Notes

- \`launch-lead\` remains exact-parity import-safe core but now owns only Product Launch.
- \`growth-lead\` now reports to \`cmo\`.
- \`code-reviewer\` and \`release-engineer\` now report to \`vp-engineering\`.
- Design stays inside Product Launch instead of becoming a standalone department.
`;
}

function renderImportRunbook() {
  const newAgents = allAgents.map((agent) => agent.slug).filter((slug) => !coreReplaceAgents.includes(slug));
  return `# Import Runbook

## Default Target

Existing live \`NoHum Studio\` company.

## Collision Policy

- Replace in place only for exact-parity core slugs:
${mdList(coreReplaceAgents.map((slug) => `\`${slug}\``))}
- Preview every non-core slug before import and classify it one of two ways:
- already present live: reconcile or update in place, do not create a duplicate
- absent live: import as new and keep it paused until runtime wiring is complete
- Non-core slugs that must be checked individually:
${mdList(newAgents.map((slug) => `\`${slug}\``))}

## Dry-Run Sequence

1. Preview the repository import against the current Paperclip runtime.
2. Confirm that \`ceo\`, \`research-lead\`, and \`launch-lead\` map 1:1 without rename or duplicate behavior.
3. For each non-core slug, determine whether it is already present live or absent.
4. If the non-core slug is already present live, verify that preview preserves the slug and updates the reporting line without producing a second record.
5. If the non-core slug is absent live, verify it appears as a new paused record.
6. Abort bulk import if any preexisting slug is about to rename or duplicate.

## Post-Preview Expectations

- \`launch-lead\` remains the same slug but now owns only Product Launch.
- \`growth-lead\` must report to \`cmo\` after import.
- \`code-reviewer\` and \`release-engineer\` must report to \`vp-engineering\`.
- any non-core role that already existed live should be rebound in place, not duplicated.
- any non-core role created by this import should remain paused until secrets, tools, and instruction bundles are wired.

## Mandatory Follow-Up

After import, run the checklist in \`docs/server-post-import-checklist.md\` before resuming new roles.
`;
}

function renderServerChecklist() {
  const directReports = allAgents
    .filter((agent) => agent.reportsToSlug)
    .map((agent) => `\`${agent.name} -> ${allAgents.find((candidate) => candidate.slug === agent.reportsToSlug)?.name}\``)
    .join("\n- ");
  return `# Server Post-Import Checklist

## 1. Core Identity Check

- confirm \`ceo\`, \`research-lead\`, and \`launch-lead\` upgraded in place
- confirm no duplicates were created for core slugs
- confirm any non-core slug that already existed live was reconciled in place instead of duplicated

## 2. Reporting Line Check

- ${directReports}

## 3. Pause State Check

- all non-core roles created by this import should remain paused until runtime wiring is complete
- any non-core role reconciled from a previous package should keep the new reporting line and remain paused until its new tooling is wired
- newly introduced top-level managers \`cmo\` and \`vp-engineering\` should stay paused until their tool and secret surfaces are ready

## 4. Tooling and Secrets Check

- wire \`OPENAI_API_KEY\` for all codex-local roles
- wire \`GITHUB_TOKEN\` for engineering and ops roles that need repo or release access
- wire \`ANALYTICS_API_KEY\` for measurement, marketing, and analytics roles
- wire \`PAYMENT_PROVIDER_API_KEY\` only for roles that need payment-signal context

## 5. Instruction Bundle Check

- verify every generated role has \`AGENTS.md\`, \`SOUL.md\`, \`HEARTBEAT.md\`, and \`TOOLS.md\` attached
- verify managers see the correct team bundle and downstream handoff docs

## 6. Smoke Tests

- Research: produce a queue-evidence artifact
- Product Launch: update a Gate B packet
- Marketing: produce a measured channel brief
- Engineering: create a review or QA artifact
- Support: produce a structured feedback synthesis
`;
}

function renderMigrationDoc() {
  return `# v1.5 Import Upgrade

This migration upgrades the previous compact package into a detailed-core org package.

## What Changed

- Product Launch is now separate from Marketing, Engineering, and Support.
- \`launch-lead\` is preserved as exact-parity core but narrowed to Product Launch ownership.
- new top-level managers were added: \`cmo\` and \`vp-engineering\`.
- \`growth-lead\` moved under \`cmo\`.
- \`code-reviewer\` and \`release-engineer\` moved under \`vp-engineering\`.
- the compact \`delivery-engineer\` role was removed from the package in favor of a full Engineering team.
- local skills are now vendored directly from \`pm-skills\` and \`superpowers\`, plus NoHum-adapted \`gstack\`-derived engineering skills.

## Migration Safety Rules

- replace only the exact-parity core slugs in bulk
- preview every non-core slug individually before import
- if a non-core slug already exists live, reconcile or update it in place instead of duplicating it
- only absent non-core roles should import as new and remain paused
- validate reporting lines before activating any new manager or specialist
- do not rely on \`teams/\` auto-materializing into live runtime behavior
`;
}

function renderPlaybook(title, owners, outputs, steps) {
  return `# ${title}

Owners:
${mdList(owners.map((owner) => `\`${owner}\``))}

Expected outputs:
${mdList(outputs)}

Operating sequence:
${steps.map((step, index) => `${index + 1}. ${step}`).join("\n")}
`;
}

function renderHandoff(title, requiredArtifacts, rules) {
  return `# ${title}

Required artifacts:
${mdList(requiredArtifacts)}

Rules:
${mdList(rules)}
`;
}

function renderReadiness(title, checks) {
  return `# ${title}

Checklist:
${mdList(checks.map((check) => `[ ] ${check}`))}
`;
}

function writeGeneratedAgents() {
  for (const agent of generatedAgents) {
    const agentDir = `agents/${agent.slug}`;
    ensureDir(agentDir);
    write(`${agentDir}/AGENTS.md`, renderAgent(agent));
    write(`${agentDir}/SOUL.md`, renderSoul(agent));
    write(`${agentDir}/HEARTBEAT.md`, renderHeartbeat(agent));
    write(`${agentDir}/TOOLS.md`, renderTools(agent));
  }
}

function writeTeams() {
  for (const team of teams) {
    write(relTeamPath(team.slug), renderTeam(team));
  }
}

function writeDocs() {
  write("COMPANY.md", renderCompany());
  write("paperclip.manifest.json", renderManifest());
  write(".paperclip.yaml", renderPaperclipYaml());
  write("README.md", renderReadme());
  write("docs/skill-policy.md", renderSkillPolicy());
  write("docs/team-skill-matrix.md", renderTeamSkillMatrix());
  write("docs/mcp-access-matrix.md", renderMcpAccessMatrix());
  write("docs/atlas/org-map.md", renderOrgMap());
  write("docs/import-runbook.md", renderImportRunbook());
  write("docs/server-post-import-checklist.md", renderServerChecklist());
  write("docs/migration/v1-5-import-upgrade.md", renderMigrationDoc());

  write(
    "docs/playbooks/venture-definition-playbook.md",
    renderPlaybook(
      "Venture Definition Playbook",
      ["Launch Lead", "Product Definer", "UX Researcher", "UX Architect", "UI Designer", "Pricing Strategist"],
      ["definition packet", "launch-brief", "handoff dossier", "Gate B recommendation"],
      [
        "Start from the research dossier and queue decision, not from a blank page.",
        "Lock ICP, JTBD, offer, pricing, UX flow, and MVP boundary into canonical artifacts.",
        "Surface unresolved assumptions explicitly and route them before Gate B.",
        "Do not hand work to Engineering until the definition packet and acceptance criteria are coherent.",
      ]
    )
  );
  write(
    "docs/playbooks/gate-b-playbook.md",
    renderPlaybook(
      "Gate B Playbook",
      ["Launch Lead", "Product Launch Team", "CEO"],
      ["Gate B packet", "PASS / FAIL / RETRY / ESCALATE verdict"],
      [
        "Verify product definition, UX flow, pricing, measurement, and support-readiness prerequisites.",
        "Ensure Engineering, Marketing, and Support all have explicit downstream artifacts to consume.",
        "Escalate unresolved payment, pricing, or launch-readiness ambiguity before build starts.",
      ]
    )
  );
  write(
    "docs/playbooks/build-playbook.md",
    renderPlaybook(
      "Build Playbook",
      ["VP of Engineering", "Software Architect", "Senior Developer", "Code Reviewer", "QA Director", "Release Engineer"],
      ["implementation plan", "review verdict", "QA verdict", "release checklist"],
      [
        "Begin only from an approved Gate B packet and definition-to-build handoff dossier.",
        "Keep architecture, implementation, review, QA, and release as separate gates.",
        "Require fresh verification evidence before review, QA, and release claims.",
        "Use rollback-aware release packaging, not one-shot shipping.",
      ]
    )
  );
  write(
    "docs/playbooks/launch-playbook.md",
    renderPlaybook(
      "Launch Playbook",
      ["Launch Lead", "CMO", "Growth Lead", "Launch Program Manager"],
      ["launch plan", "campaign brief", "measurement dashboard", "launch status readout"],
      [
        "Freeze the launch brief before channel execution begins.",
        "Ensure pricing, messaging, analytics, and support readiness match the actual product and release status.",
        "Run channel execution through measurable experiments, not vanity activity.",
        "Keep Support and Engineering informed of launch-day expectations and risks.",
      ]
    )
  );
  write(
    "docs/playbooks/operate-feedback-playbook.md",
    renderPlaybook(
      "Operate and Feedback Playbook",
      ["Support Lead", "Feedback Synthesizer", "Analytics Reporter", "SRE"],
      ["weekly operating report", "feedback synthesis", "incident escalation artifacts"],
      [
        "Capture support traffic, incidents, and user feedback in canonical artifacts.",
        "Synthesize patterns into product, marketing, and engineering implications.",
        "Keep payment, retention, and support load visible in the weekly operating report.",
        "Escalate issues with evidence, owner, and urgency instead of narrative-only summaries.",
      ]
    )
  );

  write(
    "docs/handoffs/research-to-launch.md",
    renderHandoff("Research to Product Launch", ["research dossier", "queue package", "assumption map", "pricing evidence"], [
      "No venture enters Product Launch without a canonical research dossier.",
      "Research must state what is proven, what is assumed, and what still needs launch-stage validation.",
      "Launch Lead must explicitly accept or reject the dossier before definition work begins.",
    ])
  );
  write(
    "docs/handoffs/definition-to-build.md",
    renderHandoff("Definition to Build", ["approved definition packet", "handoff dossier", "acceptance criteria", "UX architecture notes"], [
      "Engineering never starts from comments-only context.",
      "Every open risk must be named in the build handoff.",
      "VP of Engineering owns the first acceptance or retry of the build handoff.",
    ])
  );
  write(
    "docs/handoffs/launch-to-support.md",
    renderHandoff("Launch to Support", ["release notes", "known-issues list", "pricing and policy notes", "support escalation map"], [
      "Support must know what shipped, what is fragile, and how to escalate before launch goes live.",
      "Marketing promises and pricing language must match support guidance.",
      "Payment ambiguity always routes through policy, never ad-hoc support judgment.",
    ])
  );
  write(
    "docs/handoffs/specialist-to-specialist.md",
    renderHandoff("Specialist to Specialist", ["canonical artifact link", "current verdict", "open risks", "next owner"], [
      "No phase transition is valid without a durable artifact.",
      "Use PASS / FAIL / RETRY / ESCALATE language, not vague optimism.",
      "If the next owner cannot act from the artifact alone, the handoff is incomplete.",
    ])
  );

  write(
    "docs/readiness/gate-b-readiness.md",
    renderReadiness("Gate B Readiness", [
      "Product definition packet exists and is coherent",
      "ICP, offer, pricing, and MVP boundary are explicit",
      "UX flow and key states are documented",
      "Engineering has a clean definition-to-build handoff dossier",
      "Marketing has a measurable launch plan",
      "Support has a readiness and escalation outline",
    ])
  );
  write(
    "docs/readiness/launch-readiness.md",
    renderReadiness("Launch Readiness", [
      "Release candidate passed review and QA gates",
      "Launch brief, pricing, and message pack are aligned",
      "Analytics and measurement dashboards are live enough to trust",
      "Support lead accepted the launch-to-support handoff",
      "Release and rollback notes exist",
      "First-payment handling and ambiguity policy are explicit",
    ])
  );
}

function main() {
  remove("agents/delivery-engineer");
  remove("teams/launch");
  remove("teams/support-feedback");
  remove("skills/delivery-implementation-loop");
  remove("skills/delivery-code-review-gate");

  writeGeneratedAgents();
  writeTeams();
  writeDocs();
}

main();
