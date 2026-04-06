#!/usr/bin/env python3

import argparse
import json
import re
import sys
from dataclasses import dataclass
from typing import Any
from urllib.parse import urljoin, urlparse

import requests
from bs4 import BeautifulSoup

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
)

FIELD_NAMES = [
    "hero_message",
    "value_proposition",
    "target_buyer",
    "problem_solved",
    "jtbd_hypothesis",
    "product_type",
    "expected_outcome",
    "how_it_works_summary",
    "core_steps",
    "moment_of_use",
    "pricing_visibility",
    "plans_found",
    "billing_model",
    "free_trial_or_free_plan",
    "cta_to_first_payment",
    "primary_cta",
    "secondary_cta",
    "proof_blocks",
    "faq_or_objection_handling",
    "page_structure_notes",
]

REQUIRED_FALLBACK_FIELDS = [
    "value_proposition",
    "pricing_visibility",
    "cta_to_first_payment",
    "how_it_works_summary",
]

GENERIC_NAV_CTAS = {
    "home",
    "features",
    "feature",
    "pricing",
    "resources",
    "docs",
    "blog",
    "about",
    "contact",
    "login",
    "log in",
    "sign in",
}

PRODUCT_TYPE_KEYWORDS = [
    ("copilot", "copilot"),
    ("plugin", "plugin"),
    ("extension", "extension"),
    ("api", "api"),
    ("marketplace", "marketplace"),
    ("platform", "platform"),
    ("assistant", "assistant"),
    ("tool", "tool"),
    ("software", "software"),
    ("saas", "saas"),
]


@dataclass
class PageCapture:
    label: str
    url: str
    final_url: str
    status_code: int | None
    title: str
    meta_description: str
    headings: list[str]
    ctas: list[str]
    pricing_snippets: list[str]
    workflow_snippets: list[str]
    proof_snippets: list[str]
    faq_snippets: list[str]
    text_lines: list[str]
    notes: list[str]


def fetch_html(url: str, timeout: int = 20) -> tuple[str, str, int]:
    response = requests.get(
        url,
        timeout=timeout,
        headers={"User-Agent": USER_AGENT, "Accept-Language": "en-US,en;q=0.9"},
    )
    response.raise_for_status()
    return response.text, response.url, response.status_code


def normalize_space(text: str) -> str:
    return re.sub(r"\s+", " ", text or "").strip()


def same_domain(base_url: str, candidate_url: str) -> bool:
    base = urlparse(base_url).netloc.replace("www.", "")
    candidate = urlparse(candidate_url).netloc.replace("www.", "")
    return base == candidate


def unique_preserve(items: list[str]) -> list[str]:
    seen: set[str] = set()
    result: list[str] = []
    for item in items:
        cleaned = normalize_space(item)
        if not cleaned or cleaned in seen:
            continue
        seen.add(cleaned)
        result.append(cleaned)
    return result


def rank_candidate_links(base_url: str, links: list[tuple[str, str]]) -> dict[str, list[str]]:
    pricing_patterns = ["/pricing", "pricing", "plans", "plan"]
    product_patterns = ["/features", "/feature", "/product", "/how-it-works", "/solutions", "/platform"]
    use_case_patterns = ["/use-case", "/usecase", "/for-", "/industry", "/industries", "/role", "/roles"]

    buckets = {"pricing": [], "product": [], "use_case": []}

    for href, text in links:
        if not href:
            continue
        url = urljoin(base_url, href)
        if not same_domain(base_url, url):
            continue
        lowered = f"{url} {text}".lower()
        if any(pattern in lowered for pattern in pricing_patterns):
            buckets["pricing"].append(url)
        if any(pattern in lowered for pattern in product_patterns):
            buckets["product"].append(url)
        if any(pattern in lowered for pattern in use_case_patterns):
            buckets["use_case"].append(url)

    return {
        "pricing": unique_preserve(buckets["pricing"])[:1],
        "product": unique_preserve(buckets["product"])[:1],
        "use_case": unique_preserve(buckets["use_case"])[:2],
    }


def extract_links(soup: BeautifulSoup) -> list[tuple[str, str]]:
    links: list[tuple[str, str]] = []
    for anchor in soup.select("a[href]"):
        href = anchor.get("href", "")
        text = normalize_space(anchor.get_text(" ", strip=True))
        links.append((href, text))
    return links


def soup_without_noise(html: str) -> BeautifulSoup:
    soup = BeautifulSoup(html, "html.parser")
    for tag in soup(["script", "style", "noscript", "svg", "template"]):
        tag.decompose()
    return soup


def text_lines_from_soup(soup: BeautifulSoup) -> list[str]:
    lines = [normalize_space(text) for text in soup.stripped_strings]
    filtered = []
    for line in lines:
        if len(line) < 4:
            continue
        if line in filtered:
            continue
        filtered.append(line)
    return filtered


def pick_snippets(lines: list[str], patterns: list[str], limit: int = 5) -> list[str]:
    regexes = [re.compile(pattern, re.IGNORECASE) for pattern in patterns]
    results: list[str] = []
    for line in lines:
        if any(regex.search(line) for regex in regexes):
            results.append(line)
        if len(results) >= limit:
            break
    return unique_preserve(results)


def capture_page(label: str, url: str) -> PageCapture:
    html, final_url, status_code = fetch_html(url)
    soup = soup_without_noise(html)
    title = normalize_space(soup.title.string if soup.title and soup.title.string else "")

    meta = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    if meta is None:
        meta = soup.find("meta", attrs={"property": re.compile("description", re.I)})
    meta_description = normalize_space(meta.get("content", "") if meta else "")

    headings = unique_preserve([node.get_text(" ", strip=True) for node in soup.select("h1, h2, h3")])[:20]

    ctas: list[str] = []
    for node in soup.select("a, button"):
        text = normalize_space(node.get_text(" ", strip=True))
        if not text:
            continue
        if len(text) > 80:
            continue
        ctas.append(text)
    ctas = unique_preserve(ctas)[:20]

    lines = text_lines_from_soup(soup)

    pricing_snippets = pick_snippets(
        lines,
        [
            r"\$[0-9]",
            r"€[0-9]",
            r"£[0-9]",
            r"/month",
            r"/year",
            r"monthly",
            r"annual",
            r"free trial",
            r"start for free",
            r"subscribe",
            r"pricing",
        ],
        limit=8,
    )
    workflow_snippets = pick_snippets(
        lines,
        [
            r"how it works",
            r"works",
            r"listen",
            r"generate",
            r"step",
            r"workflow",
            r"automatically",
            r"during",
            r"real-time",
            r"update",
            r"sync",
        ],
        limit=8,
    )
    proof_snippets = pick_snippets(
        lines,
        [
            r"review",
            r"users",
            r"customers",
            r"trusted",
            r"teams",
            r"companies",
            r"rating",
            r"case study",
            r"testimonial",
        ],
        limit=8,
    )
    faq_snippets = pick_snippets(lines, [r"faq", r"questions", r"money back", r"no credit card"], limit=6)

    notes: list[str] = []
    if not headings:
        notes.append("no headings found")
    if not ctas:
        notes.append("no visible CTA labels found in HTML")

    return PageCapture(
        label=label,
        url=url,
        final_url=final_url,
        status_code=status_code,
        title=title,
        meta_description=meta_description,
        headings=headings,
        ctas=ctas,
        pricing_snippets=pricing_snippets,
        workflow_snippets=workflow_snippets,
        proof_snippets=proof_snippets,
        faq_snippets=faq_snippets,
        text_lines=lines[:200],
        notes=notes,
    )


def find_first_line(lines: list[str], patterns: list[str]) -> str:
    snippets = pick_snippets(lines, patterns, limit=1)
    return snippets[0] if snippets else ""


def classify_product_type(text: str) -> str:
    lowered = text.lower()
    for needle, label in PRODUCT_TYPE_KEYWORDS:
        if needle in lowered:
            return label
    return ""


def is_pricing_evidence(text: str) -> bool:
    lowered = text.lower()
    currency = bool(re.search(r"[$€£]\s*\d", text))
    numbered_plan = bool(re.search(r"\b\d+\b", text)) and any(
        token in lowered for token in ["month", "monthly", "year", "annual", "plan", "trial", "seat", "credits"]
    )
    return currency or numbered_plan


def is_generic_cta(text: str) -> bool:
    lowered = normalize_space(text).lower()
    if lowered in GENERIC_NAV_CTAS:
        return True
    return not bool(re.search(r"[a-z0-9]", lowered))


def infer_fields(captures: list[PageCapture]) -> dict[str, Any]:
    homepage = captures[0] if captures else None
    all_lines = unique_preserve([line for capture in captures for line in capture.text_lines])
    all_ctas = unique_preserve([cta for capture in captures for cta in capture.ctas])
    all_pricing = unique_preserve([line for capture in captures for line in capture.pricing_snippets])
    all_workflow = unique_preserve([line for capture in captures for line in capture.workflow_snippets])
    all_proof = unique_preserve([line for capture in captures for line in capture.proof_snippets])
    all_faq = unique_preserve([line for capture in captures for line in capture.faq_snippets])
    strong_ctas = [cta for cta in all_ctas if not is_generic_cta(cta)]

    hero_message = homepage.headings[0] if homepage and homepage.headings else ""
    value_proposition = ""
    if homepage and homepage.meta_description:
        value_proposition = homepage.meta_description
    elif len(homepage.headings) > 1 if homepage else False:
        value_proposition = homepage.headings[1]
    elif hero_message:
        value_proposition = hero_message

    target_buyer = find_first_line(all_lines, [r"\bfor\b", r"\bjob seekers\b", r"\bteams\b", r"\bdevelopers\b", r"\bmarketers\b"])
    problem_solved = find_first_line(
        all_lines,
        [r"help", r"without", r"real-time", r"answers", r"save", r"ship", r"update", r"interview", r"automatically"],
    )
    product_type = classify_product_type(" ".join(filter(None, [hero_message, value_proposition] + all_lines[:30])))
    expected_outcome = find_first_line(
        all_lines,
        [r"land", r"improve", r"faster", r"better", r"confidence", r"save time", r"ship", r"pass", r"ace"],
    )
    how_it_works_summary = " ".join(all_workflow[:3]).strip()
    moment_of_use = find_first_line(all_lines, [r"during", r"when", r"before", r"after", r"while"])

    pricing_visibility = ""
    strong_pricing = [line for line in all_pricing if is_pricing_evidence(line)]
    if strong_pricing:
        pricing_visibility = "visible"
    elif any("pricing" in capture.final_url.lower() for capture in captures):
        pricing_visibility = ""

    plans_found = (strong_pricing or all_pricing)[:5]

    billing_model = ""
    pricing_blob = " ".join(all_pricing).lower()
    if any(token in pricing_blob for token in ["month", "monthly"]):
        billing_model = "monthly subscription"
    elif any(token in pricing_blob for token in ["year", "annual"]):
        billing_model = "annual subscription"
    elif pricing_visibility == "hidden":
        billing_model = "hidden or sales-led"

    free_trial_or_free_plan = ""
    cta_blob = " ".join(all_ctas + all_pricing).lower()
    if "free trial" in cta_blob:
        free_trial_or_free_plan = "free trial"
    elif "start for free" in cta_blob or "get started for free" in cta_blob or "free" in cta_blob:
        free_trial_or_free_plan = "free plan or free entry"

    primary_cta = strong_ctas[0] if strong_ctas else ""
    secondary_cta = strong_ctas[1] if len(strong_ctas) > 1 else ""

    cta_to_first_payment_parts = [
        part
        for part in [
            primary_cta,
            "Pricing" if any("pricing" in c.final_url.lower() for c in captures) else "",
            "Subscribe" if strong_pricing else "",
        ]
        if part
    ]
    cta_to_first_payment = " -> ".join(cta_to_first_payment_parts)

    page_structure_notes = " -> ".join([capture.label for capture in captures])

    return {
        "hero_message": hero_message,
        "value_proposition": value_proposition,
        "target_buyer": target_buyer,
        "problem_solved": problem_solved,
        "jtbd_hypothesis": how_it_works_summary or problem_solved,
        "product_type": product_type,
        "expected_outcome": expected_outcome,
        "how_it_works_summary": how_it_works_summary,
        "core_steps": all_workflow[:3],
        "moment_of_use": moment_of_use,
        "pricing_visibility": pricing_visibility,
        "plans_found": plans_found,
        "billing_model": billing_model,
        "free_trial_or_free_plan": free_trial_or_free_plan,
        "cta_to_first_payment": cta_to_first_payment,
        "primary_cta": primary_cta,
        "secondary_cta": secondary_cta,
        "proof_blocks": all_proof[:5],
        "faq_or_objection_handling": all_faq[:5],
        "page_structure_notes": page_structure_notes,
    }


def unresolved_fields(fields: dict[str, Any]) -> list[str]:
    unresolved: list[str] = []
    for name in REQUIRED_FALLBACK_FIELDS:
        value = fields.get(name)
        if isinstance(value, list):
            if not value:
                unresolved.append(name)
        elif not value:
            unresolved.append(name)
    primary_cta = fields.get("primary_cta", "")
    cta_path = fields.get("cta_to_first_payment", "")
    if "cta_to_first_payment" not in unresolved and (not cta_path or not primary_cta or is_generic_cta(primary_cta)):
        unresolved.append("cta_to_first_payment")
    return unresolved


def browser_capture_page(url: str) -> dict[str, Any]:
    try:
        from playwright.sync_api import sync_playwright
    except ImportError as exc:
        raise RuntimeError(
            "Playwright is not installed. Run `python3 -m pip install --user playwright` and "
            "`python3 -m playwright install chromium`."
        ) from exc

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(url, wait_until="networkidle", timeout=30000)
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(400)
        data = page.evaluate(
            """
            () => {
              const visible = (el) => {
                if (!el) return false;
                const style = window.getComputedStyle(el);
                return style && style.visibility !== 'hidden' && style.display !== 'none';
              };
              const textList = (selector, limit = 20) =>
                Array.from(document.querySelectorAll(selector))
                  .filter(visible)
                  .map((el) => (el.innerText || el.textContent || '').trim())
                  .filter(Boolean)
                  .map((text) => text.replace(/\\s+/g, ' ').trim())
                  .filter((text) => text.length > 1)
                  .slice(0, limit);
              const bodyLines = (document.body?.innerText || '')
                .split(/\\n+/)
                .map((line) => line.replace(/\\s+/g, ' ').trim())
                .filter((line) => line.length > 3)
                .slice(0, 250);
              const meta = document.querySelector('meta[name="description"], meta[property*="description"]');
              return {
                title: document.title || '',
                metaDescription: meta ? (meta.content || '').trim() : '',
                headings: textList('h1, h2, h3', 30),
                ctas: textList('a, button', 30).filter((text) => text.length <= 80),
                bodyLines
              };
            }
            """
        )
        browser.close()
    return data


def infer_fields_from_browser(captures: list[dict[str, Any]]) -> dict[str, Any]:
    pseudo_captures: list[PageCapture] = []
    for index, capture in enumerate(captures):
        lines = capture["bodyLines"]
        pseudo_captures.append(
            PageCapture(
                label=f"fallback-page-{index + 1}",
                url="",
                final_url="",
                status_code=None,
                title=normalize_space(capture["title"]),
                meta_description=normalize_space(capture["metaDescription"]),
                headings=unique_preserve(capture["headings"]),
                ctas=unique_preserve(capture["ctas"]),
                pricing_snippets=pick_snippets(lines, [r"\$[0-9]", r"/month", r"/year", r"free trial", r"pricing"], limit=8),
                workflow_snippets=pick_snippets(lines, [r"how it works", r"works", r"real-time", r"step", r"workflow", r"listen", r"generate"], limit=8),
                proof_snippets=pick_snippets(lines, [r"users", r"reviews", r"trusted", r"customers", r"companies"], limit=8),
                faq_snippets=pick_snippets(lines, [r"faq", r"questions", r"money back", r"no credit card"], limit=6),
                text_lines=lines,
                notes=[],
            )
        )
    return infer_fields(pseudo_captures)


def merge_fields(primary: dict[str, Any], fallback: dict[str, Any], unresolved_primary: list[str]) -> dict[str, Any]:
    merged: dict[str, Any] = {}
    for name in FIELD_NAMES:
        current = primary.get(name)
        replacement = fallback.get(name)
        should_override = name in unresolved_primary
        if name in {"plans_found", "billing_model"} and "pricing_visibility" in unresolved_primary:
            should_override = True
        if name in {"primary_cta", "secondary_cta"} and "cta_to_first_payment" in unresolved_primary:
            should_override = True

        if isinstance(current, list):
            merged[name] = (replacement if should_override else current) or current or replacement or []
        else:
            merged[name] = (replacement if should_override else current) or current or replacement or ""
    return merged


def summarize_capture(capture: PageCapture) -> dict[str, Any]:
    return {
        "label": capture.label,
        "url": capture.url,
        "final_url": capture.final_url,
        "status_code": capture.status_code,
        "title": capture.title,
        "meta_description": capture.meta_description,
        "headings": capture.headings[:8],
        "ctas": capture.ctas[:8],
        "pricing_snippets": capture.pricing_snippets[:6],
        "workflow_snippets": capture.workflow_snippets[:6],
        "proof_snippets": capture.proof_snippets[:6],
        "faq_snippets": capture.faq_snippets[:6],
        "notes": capture.notes,
    }


def build_page_plan(base_url: str) -> list[tuple[str, str]]:
    homepage_html, homepage_final_url, homepage_status = fetch_html(base_url)
    homepage_soup = soup_without_noise(homepage_html)
    link_buckets = rank_candidate_links(homepage_final_url, extract_links(homepage_soup))
    pages: list[tuple[str, str]] = [("homepage", homepage_final_url)]
    if link_buckets["pricing"]:
        pages.append(("pricing", link_buckets["pricing"][0]))
    if link_buckets["product"]:
        pages.append(("product", link_buckets["product"][0]))
    for index, page in enumerate(link_buckets["use_case"], start=1):
        pages.append((f"use_case_{index}", page))
    return unique_page_plan(pages, homepage_status)


def unique_page_plan(pages: list[tuple[str, str]], homepage_status: int | None = None) -> list[tuple[str, str]]:
    seen: set[str] = set()
    result: list[tuple[str, str]] = []
    for label, url in pages:
        if url in seen:
            continue
        seen.add(url)
        result.append((label, url))
    return result[:5]


def analyze(url: str, fallback_mode: str) -> dict[str, Any]:
    page_plan = build_page_plan(url)
    captures: list[PageCapture] = [capture_page(label, page_url) for label, page_url in page_plan]
    html_fields = infer_fields(captures)
    missing = unresolved_fields(html_fields)

    use_fallback = fallback_mode == "always" or (fallback_mode == "auto" and bool(missing))
    fallback_fields: dict[str, Any] = {}
    fallback_pages: list[dict[str, Any]] = []
    fallback_error = ""

    if use_fallback:
        try:
            fallback_pages = [browser_capture_page(page_url) for _, page_url in page_plan]
            fallback_fields = infer_fields_from_browser(fallback_pages)
        except Exception as exc:
            fallback_error = str(exc)

    final_fields = merge_fields(html_fields, fallback_fields, missing)

    return {
        "input_url": url,
        "page_plan": [{"label": label, "url": page_url} for label, page_url in page_plan],
        "html_first": {
            "fields": html_fields,
            "unresolved_fields": missing,
            "page_summaries": [summarize_capture(capture) for capture in captures],
        },
        "browser_fallback": {
            "mode": fallback_mode,
            "used": use_fallback,
            "error": fallback_error,
            "fields": fallback_fields,
            "page_summaries": [
                {
                    "title": page.get("title", ""),
                    "meta_description": page.get("metaDescription", ""),
                    "headings": page.get("headings", [])[:8],
                    "ctas": page.get("ctas", [])[:8],
                    "body_lines": page.get("bodyLines", [])[:20],
                }
                for page in fallback_pages
            ],
        },
        "final": {
            "fields": final_fields,
            "unresolved_fields": unresolved_fields(final_fields),
        },
    }


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Bounded competitor site analysis with HTML-first extraction and optional browser fallback."
    )
    parser.add_argument("url", help="Competitor homepage URL")
    parser.add_argument(
        "--fallback-mode",
        choices=["auto", "always", "never"],
        default="auto",
        help="When to use browser fallback. Default: auto.",
    )
    parser.add_argument(
        "--pretty",
        action="store_true",
        help="Pretty-print the JSON output.",
    )
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    try:
        result = analyze(args.url, args.fallback_mode)
    except requests.RequestException as exc:
        print(json.dumps({"error": f"request failed: {exc}"}), file=sys.stderr)
        return 1
    except Exception as exc:
        print(json.dumps({"error": str(exc)}), file=sys.stderr)
        return 1

    if args.pretty:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
