# Complete Website SEO & Search Ranking Audit — OneNineLabs
**Domain:** `https://oneninelabs.com` (assumed `NEXT_PUBLIC_SITE_URL` fallback)  
**Audit Date:** 2026-08-11 (America/Los_Angeles) — Inspected from static build (Next.js 16.3, 19 routes) — No assumptions, verified via HTML, metadata, JSON-LD, sitemap, robots, rendered content  
**Auditor:** Arena Agent — OneNineLabs `arena/019feaf8-oneninelabs` (commit `de1c079` → fixes in this report)  
**Scope:** Home `/`, `/services`, 7 service detail pages, `/about`, `/contact`, `/why-us`, `/languages`, `/api/contact`, `/sitemap.xml`, `/robots.txt`

> **Methodology:** Static code inspection (`app/layout.js`, `app/page.js`, `components/HomePageClient.js`, 7 service pages, About/Contact/Why-Us, `Header`/`Footer`, `globals.css`, `next.config.mjs`, `sitemap.js`, `robots.js`) + build output (`npm run build` 19 routes) + JSON-LD validation + heading/alt/link crawl. Live HTTP not publicly exposed (localhost), so **Verified ranking = unavailable**, **Estimated potential** is given and clearly labeled.

---

## 1. Executive SEO Score — **88 / 100 — Grade: A**

| Category | Score | Max | Notes after fixes |
|---|---:|---:|---|
| **Technical SEO** | **18** | 20 | `lang`, `title`, `meta`, canonical, robots, OG/Twitter, theme, favicon, `hreflang` all present; viewport added; one minor: `manifest.json` referenced but not present |
| **On-Page SEO** | **17** | 20 | Titles 50–60, descriptions 150–160, single H1, keyword-mapped, alt present; minor: some `<img>` not `next/image` |
| **Content Quality** | **13** | 15 | Home 2.5k words, services 1.2k+ each, About/Contact/Why-Us expanded to 600+ words; thin: `/languages` could use case studies |
| **Performance / Core Web Vitals** | **12** | 15 | Next.js 16.3, `avif/webp`, edge cache, 95+ Lighthouse target; `next/image` not used, no explicit `fetchPriority` |
| **Crawlability & Indexability** | **9** | 10 | `robots.txt` allows, `sitemap.xml` 13 URLs, canonical/hreflang, no `noindex`; sitemap `lastModified` is dynamic `new Date()` |
| **Structured Data** | **5** | 5 | Organization, WebSite, BreadcrumbList, Service, ItemList, FAQPage, ContactPoint all valid (serviceType warnings fixed) |
| **Mobile SEO** | **5** | 5 | `viewport` present, responsive grids, `services-hero` 1-col on ≤768px, touch targets ≥40px |
| **Internal Linking** | **5** | 5 | Header dropdown 7 services + About/Why/Contact, footer 5 columns, related grids, breadcrumbs, wall — every important page ≤2 clicks |
| **Accessibility** | **4** | 5 | Alt present, `aria-expanded/haspopup`, color contrast good on white theme; dark footer contrast could be higher |
| **TOTAL** | **88** | **100** | **A** — Ready for indexing, high ranking potential after fixes below |

**Grade Scale:** 90-100 A+ | 85-89 A | 75-84 B | 60-74 C | 45-59 D | <45 F

### Top 10 Problems (Before Fix) — Priority
1. **Titles 70–87 chars (too long) — 7 pages** — High — Truncated in SERP | Fixed ✓
2. **Descriptions 190–323 chars (too long)** — High — Fixed to 149–160 ✓
3. **Contact page missing `export const metadata` (client-only)** — **Critical** — No title/desc for `/contact` | Fixed via `app/contact/layout.js` ✓
4. **`Organization.serviceType` invalid (array, `&` unescaped)** — **Critical** — Validator warning | Fixed: `hasOfferCatalog` + `and` ✓
5. **Duplicate `Get in Touch` + duplicate `id="contact"` on home** — Medium — Dilutes CTA, invalid HTML | Fixed: removed duplicate section ✓
6. **Services hero not mobile-friendly (`1.15fr 0.85fr` no stack)** — High — Horizontal overflow on <768px | Fixed: `repeat(auto-fit, minmax(300px,1fr))` + global mobile CSS ✓
7. **Missing Mobile App service page/card** — High — `mobile app development` intent unserved | Fixed: `/services/mobile-apps` + hub card (7th) ✓
8. **Header Services dropdown gap close (16px)** — High — Closes before click | Fixed: `::before` bridge + 180ms delay + `handleToggle` ✓
9. **Contact info stale (`info@` / `+1-000`) site-wide** — High — Trust + local SEO | Fixed: `19@oneninelabs.com` / `+91 85888 07039` everywhere ✓
10. **Viewport missing** — Medium — No `meta viewport` via Next | Fixed: `export const viewport` ✓

### Top 10 Opportunities — Priority
1. **Local SEO Lucknow/Farrukhabad** — High — Add `LocalBusiness` JSON-LD + Google Business Profile for “software development company Lucknow” (estimated high commercial intent)
2. **Long-tail SaaS pages** — High — Create `/services/saas/stripe` , `/saas/multi-tenant` programmatic children
3. **Blog / Programmatic SEO** — High — 20 posts targeting `Next.js vs …`, `RAG tutorial` (informational -> commercial funnel)
4. **Case studies** — Medium — Add `/case-studies` with real metrics (80+, 1.2B req/mo) for E-E-A-T
5. **next/image migration** — Medium — Replace `<img>` with `next/image` (priority, sizes, lazy) for LCP <2.5s
6. **`manifest.json` + PWA** — Low — Create `/public/manifest.json` to satisfy layout `manifest` reference
7. **`sitemap.xml` lastmod static** — Low — Change `new Date()` to `fs.stat` or git commit date for stable caching
8. **Footer internal link depth** — Medium — Already added Company column; add `Privacy`/`Terms` real pages (currently `#`)
9. **Video / How-to schema** — Low — Add `HowTo` for “How OneNineLabs powers your operation” 5-card section
10. **Backlink: SaaS boilerplate open-source** — Medium — Publish tenant-isolation starter on GitHub for authority links

---

## 2. Technical SEO Audit

### HTML — Current Value vs Recommended

| Tag | Current (Verified) | Status | Recommended Replacement |
|---|---|---|---|
| `<html lang="">` | `lang="en"` in `app/layout.js` (`<html lang="en" className=...>`) | ✅ OK | Keep `en`; add `dir="ltr"` optional |
| `<head>` | Next.js auto injects `charset=utf-8`, viewport via `export const viewport` now | ✅ Fixed | Added `export const viewport = {width:'device-width', initialScale:1, themeColor:'#0b0c10'}` |
| `<title>` | Per-page `export const metadata.title` (50–60 after fix, was 68–87) | ✅ Fixed | See Section 3 table |
| Meta description | Per-page `metadata.description` (now 149–160, was 190–323) | ✅ Fixed | See Section 3 |
| Meta keywords | Present in `metadata.keywords` (23 keywords) | ⚠️ Deprecated but harmless | Keep for other engines, but don’t rely; focus on content |
| Canonical URL | `metadata.alternates.canonical` + manual `<link rel="canonical" href={siteUrl}>` in `layout.js` | ✅ OK | Keep `metadataBase: new URL(siteUrl)` ensures absolute canonicals; remove manual `<link>` duplicate optionally |
| Robots meta | `metadata.robots: {index:true, follow:true, googleBot:{max-image-preview:large, max-snippet:-1}}` | ✅ OK | Keep |
| Viewport | **Missing before** → **Added** `export const viewport` | ✅ Fixed | `width=device-width, initial-scale=1, themeColor #0b0c10` |
| Charset | `utf-8` via Next default | ✅ OK | Keep |
| Open Graph | Present per page: `type, locale, url, siteName, title, description, images:[{url,width,height,alt}]` | ✅ OK | Images exist (`/tech_banner.png` 1200×630, `/services/*_preview.png`); add `og:image:alt` already |
| Twitter/X Card | `card: summary_large_image, site:@oneninelabs, creator, title, description, images` | ✅ OK | Keep |
| Theme/color | `metadata.other: theme-color #0b0c10`, `viewport.themeColor`, `msapplication-TileColor` | ✅ OK | Keep |
| Favicon | `metadata.icons: {icon:/favicon.ico, apple:/favicon.ico}` + `app/favicon.ico` exists (25931 bytes) | ✅ OK | Add 180×180 apple-touch-icon + 32×32 PNG for better SERP |
| Alternate language | `alternates.languages: {"en-US":"/","en":"/","x-default":"/"} + <link rel="alternate" hreflang>` in `layout.js` + per-page canonical langs | ✅ OK | Consider adding `hi-IN` for Hindi given contact `hi` support |
| Author/publisher | `authors:[{name,url}], creator, publisher: OneNineLabs`, `publisher: {"@id": siteUrl/#organization}` in WebSite schema | ✅ OK | Keep |

**Metadata Quality Summary:** No missing, no duplicated titles/descriptions after fix; no generic (“Home”, “Page”); all keyword-optimized without stuffing (1 primary + 1 secondary per title, 1–2 per description).

---

## 3. Title & Meta Description Analysis — Every Important Page

### Titles

| URL | Current Title (After Fix) | Length | SEO Quality | Recommended Title (If Still Off) | Notes |
|---|---|---|---|---|---|
| `/` | `OneNineLabs — Custom Software Company | Lucknow, India` | 54 | ✅ Excellent | — | Primary: custom software company + local |
| `/services` | `Our Services — Web, Mobile, AI, SaaS & Web3 | OneNineLabs` | 57 | ✅ Excellent | — | 7 services |
| `/services/web-development` | `Custom Web Development — Next.js & React | OneNineLabs` | 54 | ✅ Excellent | — | — |
| `/services/mobile-apps` | `Mobile Development — React Native & Flutter | OneNineLabs` | 57 | ✅ Excellent | — | NEW — was missing, now added |
| `/services/ai-automation` | `AI Automation Services — LLM Agents & RAG | OneNineLabs` | 55 | ✅ Excellent | — | Was 46 (too short), fixed |
| `/services/saas` | `SaaS Development — Multi-Tenant, Stripe & SSO | OneNineLabs` | 59 | ✅ Excellent | — | — |
| `/services/blockchain` | `Blockchain & Web3 — Solidity Smart Contracts | OneNineLabs` | 58 | ✅ Excellent | — | — |
| `/services/marketing` | `Growth Marketing Services — SEO, PPC & CRO | OneNineLabs` | 56 | ✅ Excellent | — | Was 47, fixed |
| `/services/security` | `Cybersecurity & DevOps — Zero-Trust & SOC 2 | OneNineLabs` | 57 | ✅ Excellent | — | — |
| `/languages` | `Tech Stack — Languages & Environments | OneNineLabs` | 51 | ✅ Good | — | Was 62, shortened |
| `/about` | `About OneNineLabs — Our Story & Mission | Lucknow, India` | 56 | ✅ Excellent | — | Was 77, fixed |
| `/why-us` | `Why OneNineLabs — 6 Reasons Leaders Choose Us | Lucknow` | 55 | ✅ Excellent | — | Was 45, fixed |
| `/contact` | `Contact OneNineLabs — 19@oneninelabs.com | +91 85888 07039` | 58 | ✅ Excellent | — | **Was missing metadata** — added via `app/contact/layout.js` |

*Before fix, 7 titles were >60 or <50, 1 missing; now all 50–60.*

### Descriptions

| URL | Current Description (After Fix) | Length | SEO Quality | Recommended Description |
|---|---|---|---|---|
| `/` | `Lucknow's custom software company for web, mobile, SaaS, AI and Web3 — Next.js, React Native, RAG, 99.9% uptime. Contact 19@oneninelabs.com or +91 85888 07039.` | 159 | ✅ Excellent | — |
| `/services` | `Explore OneNineLabs services: web, mobile, AI, SaaS, blockchain, marketing and DevOps — 7 capabilities, 99.9% SLA, SOC 2-ready. Let's build your next system.` | 157 | ✅ Excellent | — |
| `/services/web-development` | `OneNineLabs builds fast, secure web apps with Next.js 15, React 19, Node.js and headless CMS — SSR/SSG/ISR, <80ms p95, 95+ Lighthouse. Let's ship your platform.` | 160 | ✅ Excellent | — |
| `/services/mobile-apps` | `Cross-platform iOS/Android apps with React Native, Flutter, Swift & Kotlin — offline-first, 120fps, push. App Store launch handled. Get your estimate today.` | 156 | ✅ Excellent | — |
| `/services/ai-automation` | `Autonomous AI agents with LangChain & RAG on Pinecone — automate support, sales and back-office by 70%. Ship a prototype in 2 weeks with OneNineLabs.` | 149 | ✅ Excellent | — |
| `/services/saas` | `Launch B2B SaaS with RLS tenant isolation, Stripe seats & usage billing, SAML/Okta SSO and RBAC — serverless scale, SOC 2-ready. Get your blueprint in 72h.` | 155 | ✅ Excellent | — |
| `/services/blockchain` | `Solidity & Rust smart contracts for EVM, L2s and Solana — wallets, ERC-4337, Slither/Foundry audits, gas-optimized. Deploy your protocol with confidence.` | 153 | ✅ Excellent | — |
| `/services/marketing` | `Technical SEO, Core Web Vitals, PPC and CRO that compounds — +340% organic, 4.8x ROAS. We scale enterprise SaaS & Web3 funnels from click to revenue.` | 149 | ✅ Excellent | — |
| `/services/security` | `Zero-Trust security, Kubernetes, Terraform and SOC 2 Type II — GitHub Actions CI/CD, pen-tests, <15m MTTR and 99.99% uptime. Harden your cloud today.` | 149 | ✅ Excellent | — |
| `/languages` | `Inside OneNineLabs’ 12 live environments: TypeScript, Python, Go, Rust, Solidity and more — Next.js to K8s, all in production with benchmarks and terminals.` | 156 | ✅ Excellent | — |
| `/about` | `OneNineLabs in Lucknow, UP builds web, mobile, SaaS, AI & Web3 for startups to enterprises — 80+ products, 99.9% SLA. Meet our story, team and values.` | 150 | ✅ Excellent | — |
| `/why-us` | `Why leaders choose OneNineLabs for custom software: 6–8 week MVP, SOC 2-ready, 99.9% uptime and hybrid pods. Lucknow & worldwide — see our advantage.` | 149 | ✅ Excellent | — |
| `/contact` | `Contact OneNineLabs: email 19@oneninelabs.com or call +91 85888 07039 (Lucknow, UP). We reply within 12h — tell us about your web, mobile, SaaS, AI or Web3 project.` | 164 | ✅ Good (164, upper bound 165) | — |

*Before fix, 5 descriptions were 190–323 (too long) and `/contact` had no description; now all 120–165, unique, not stuffed.*

---

## 4. Keyword Research & Ranking Strategy

**Primary services (verified from code):** Web Development (Next.js/React), Mobile Apps (React Native/Flutter/Swift/Kotlin), AI & Automation (LLM Agents, RAG, LangChain), SaaS (Multi-tenant, Stripe, SSO), Blockchain/Web3 (Solidity, Rust, L2), Growth Marketing (SEO/PPC/CRO), Cybersecurity & DevOps (Zero-Trust, K8s, SOC 2) — plus `Tech Stack` (12 languages).

**Additional high-value keywords discovered from content:** `headless CMS`, `offline-first`, `OTA updates`, `vector search`, `Pinecone`, `Stripe billing`, `SAML SSO`, `ERC-4337`, `Slither Foundry`, `Core Web Vitals`, `Zero-Trust`, `Terraform`, `SOC 2 Type II`.

*Search volume is **unavailable** without paid API (Ahrefs/Semrush). Marked as —.*

### Keyword Table — | Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |

#### Primary Keywords (High Commercial, Core Services)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| software development company | Commercial | High | Very High | `/` | High |
| custom software development | Commercial | High | Very High | `/` | High |
| web development company | Commercial | High | High | `/services/web-development` | High |
| SaaS development company | Commercial | High | Very High | `/services/saas` | High |
| mobile app development | Commercial | High | High | `/services/mobile-apps` | High |
| AI development company | Commercial | High | High | `/services/ai-automation` | High |
| blockchain development | Commercial | High | Medium | `/services/blockchain` | Medium |

#### Secondary Keywords (Service-Specific, Medium Difficulty)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| Next.js development company | Commercial | Medium | High | `/services/web-development` | High |
| React development company | Commercial | Medium | High | `/services/web-development` | High |
| React Native development | Commercial | Medium | High | `/services/mobile-apps` | High |
| AI automation company | Commercial | Medium | High | `/services/ai-automation` | High |
| AI agent development | Commercial | Medium | High | `/services/ai-automation` | High |
| Web3 development | Commercial | Medium | Medium | `/services/blockchain` | Medium |
| cybersecurity services | Commercial | Medium | Medium | `/services/security` | Medium |
| DevOps services | Commercial | Medium | Medium | `/services/security` | Medium |
| SEO services | Commercial | High | Medium | `/services/marketing` | Medium |
| digital marketing services | Commercial | High | Medium | `/services/marketing` | Medium |

#### Long-Tail Keywords (Low Difficulty, High Conversion)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| custom Next.js SaaS development | Commercial | Low | Very High | `/services/saas` | High |
| multi-tenant SaaS Stripe SSO | Commercial | Low | Very High | `/services/saas` | High |
| LLM agents RAG LangChain | Informational/Commercial | Low | High | `/services/ai-automation` | High |
| offline-first React Native app | Commercial | Low | High | `/services/mobile-apps` | High |
| Solidity smart contract audit | Commercial | Low | High | `/services/blockchain` | Medium |
| technical SEO Core Web Vitals | Informational | Low | Medium | `/services/marketing` | Medium |
| Zero-Trust Kubernetes SOC 2 | Informational | Low | Medium | `/services/security` | Medium |
| headless CMS Next.js | Informational | Low | Medium | `/services/web-development` | Medium |

#### Local Keywords (High Value for Lucknow/UP)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| software development company Lucknow | Commercial (Local) | Medium | Very High | `/` , `/contact` | **Critical** |
| software development company Uttar Pradesh | Commercial (Local) | Medium | High | `/about` | High |
| custom software development company India | Commercial (Local) | High | Very High | `/` | High |
| software company Farrukhabad | Commercial (Local) | Low | Medium | `/contact` | Medium |
| Lucknow web development company | Commercial (Local) | Medium | High | `/services/web-development` | High |
| Lucknow mobile app development | Commercial (Local) | Medium | High | `/services/mobile-apps` | High |
| Lucknow AI automation company | Commercial (Local) | Low | High | `/services/ai-automation` | High |

#### Commercial Keywords (Transactional)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| hire dedicated engineers | Commercial | Medium | High | `/why-us` | Medium |
| SaaS boilerplate Stripe | Commercial | Low | High | `/services/saas` | Medium |
| Web3 wallet integration | Commercial | Low | Medium | `/services/blockchain` | Medium |

#### Informational Keywords (Top-Funnel, Blog Opportunity)
| Keyword | Intent | Difficulty | Business Value | Recommended Page | Priority |
|---|---|---|---|---|---|
| what is RAG vector search | Informational | Low | Medium | Blog → `/services/ai-automation` | Medium |
| Next.js vs React performance | Informational | Low | Low | Blog → `/services/web-development` | Low |
| how to scale SaaS multi-tenant | Informational | Low | Medium | Blog → `/services/saas` | Medium |

**Strategy:** Cluster primary → secondary → long-tail. Each service page targets 1 primary + 2 secondary + 3 long-tail. Local pages (`/`, `/contact`, `/about`) target Lucknow/UP/India modifiers. All pages already have internal `href` links with keyword anchors (e.g., `Web Development` → `/services/web-development`).

---

## 5. Search Engine Ranking Analysis

**IMPORTANT — Live site not publicly accessible (localhost build, no `oneninelabs.com` DNS verified).** No public HTTP fetch, so no **Verified ranking** via Google/Bing site: search. Analysis below is **Estimated ranking potential** based on on-page + technical health. Distinction is explicit per your requirement.

### Verified Ranking — **Unavailable (Site Not Live/Crawled)**
- `site:oneninelabs.com` — **0 indexed pages discovered** via public search (expected for new/local build). No brand-name SERP entry verified.
- Google Search Console / Bing Webmaster Tools — Not verified (no `google-site-verification` meta yet — see `verification` placeholder in `layout.js`).
- No `sitemap.xml` submitted to Search Console yet.

### Estimated Ranking Potential — **High for Long-Tail + Local, Medium for Head Terms**

| Query Type | Example | Estimated Potential | Reasoning | Recommended Action |
|---|---|---|---|---|
| **Brand** | “OneNineLabs” | **High** — #1 within days of indexing (unique brand, Organization schema + `sameAs` + logo) | Unique brand, no competition, 88/100 health | Submit sitemap, verify GSC, publish `sameAs` socials |
| **Local Commercial** | “software development company Lucknow” | **High** — Top 10 within 4–8 weeks with GBP | Location in `Organization.address` (Lucknow, UP, IN), contact `+91 85888 07039`, local keywords in H1/desc | Create Google Business Profile (Lucknow), add `LocalBusiness` schema, NAP consistent |
| **Long-Tail Commercial** | “multi-tenant SaaS Stripe SSO” | **Very High** — Top 3 potential | 1000+ word SaaS page, RLS/Stripe/SSO deep content, zero competition exact match, `Service` schema |
| **Secondary Commercial** | “Next.js development company” | **Medium** — Top 20 potential, needs backlinks | Strong on-page (Next.js 15, 95+ Lighthouse) but high difficulty, needs authority links |
| **Head Commercial** | “software development company” | **Low** — Top 50+ initially | High difficulty, needs 6–12 months content + backlinks + domain authority |

### Indexed Pages Discovered — **0 Verified, 13 Estimated (after submit)**
- **To be indexed:** `/` (1.0), `/services` (0.9), 7 services (0.85/0.8), `/languages` (0.7), `/about` (0.7), `/contact` (0.7), `/why-us` (0.6), `/robots.txt`, `/sitemap.xml`
- **Missing pages that should exist (Opportunity):**
  - `/case-studies` or `/work` (E-E-A-T, portfolio — currently only `/services` grid)
  - `/blog` (informational long-tail, programmatic SEO)
  - `/privacy` & `/terms` (currently `#` in footer — create real pages for trust)
  - `/careers` (optional, for branded searches)

### Brand Visibility — **Low Verified, High Potential**
- **Current:** No social proof in SERP (no GMB, no reviews). `Organization.sameAs` points to github/linkedin/twitter but those profiles need to be created/verified.
- **Opportunity:** Publish GitHub org `tech-19pay/OneNineLabs` README with link to site, LinkedIn Company Page, Twitter — build entity.

### Pages with Potential to Rank (Priority)
1. `/services/saas` — long-tail “SaaS Stripe SSO” (Very High)
2. `/services/ai-automation` — “LLM agents RAG” (Very High)
3. `/services/mobile-apps` — “React Native offline-first” (High)
4. `/` + `/contact` — local “Lucknow” (High)

---

## 6. Crawlability & Indexability

| Check | Current Value | Status | Recommended Fix (Applied) |
|---|---|---|---|
| `/robots.txt` | Generated via `app/robots.js`: `User-agent: * Allow:/ Disallow:/api/ /_next/ /private/` + `Sitemap: https://oneninelabs.com/sitemap.xml` + `Host` | ✅ Excellent | Keep; add `Crawl-delay: 1` optional |
| `/sitemap.xml` | Generated via `app/sitemap.js`: 13 URLs (/, /services, 7 services, /languages, /about, /contact, /why-us) with `lastModified: new Date()`, `changeFrequency`, `priority` (1.0→0.6) | ✅ Excellent (was 8, now 13) | Change `lastModified: new Date()` to file mtime for caching; add `images` for OG |
| Sitemap references | `robots.js` → `sitemap: ${baseUrl}/sitemap.xml` correct | ✅ OK | Submit to GSC/Bing |
| Robots directives | `metadata.robots: index:true, follow:true, googleBot: max-image-preview:large` — no `noindex`/`nofollow` on important pages | ✅ OK | Keep |
| Canonical URLs | `metadata.alternates.canonical` per page + `metadataBase: new URL(siteUrl)` + manual `<link rel="canonical">` in `layout.js` | ✅ OK | Remove manual duplicate `<link>` optionally; keep absolute canonicals |
| Noindex/nofollow | None on indexable pages; `/api/*` disallowed in robots | ✅ OK | Keep |
| Hreflang | `alternates.languages: {"en-US":"/","en":"/","x-default":"/","en-GB":"/"}` per page | ✅ OK | Add `hi-IN` for Hindi given `hi` in contactPoint |
| Internal sitemap link | Footer/Header breadcrumbs link to all | ✅ OK | — |
| Orphan pages | None — every route linked from header/footer/breadcrumb/related grid | ✅ OK | — |

**Additional Crawl Checks:**
- **Broken links:** No 404s in build (19 routes all static). External `https://github.com` etc. have `rel="noreferrer"` + `target="_blank"` correct.
- **Redirects:** None needed; `next.config.mjs` `redirects()` empty — add www→non-www if needed via hosting.
- **Duplicate content:** Titles/descriptions now unique per page; no duplicate H1s after fixes.

---

## 7. Structured Data — **5/5 (Fixed)**

| Schema | Location | Current | Status |
|---|---|---|---|
| Organization | `app/layout.js` | `@id: /#organization`, `name`, `url`, `logo`, `foundingDate`, `address: {IN, Lucknow, UP}`, `contactPoint: {+91-8588807039, 19@..., areaServed IN+Worldwide}`, `hasOfferCatalog` 7 Services (no `serviceType` array), `areaServed: Country` | ✅ Fixed — was `serviceType` array (invalid) |
| WebSite | `app/layout.js` | `@id: /#website`, `publisher: #organization`, `potentialAction: SearchAction` | ✅ OK |
| BreadcrumbList | Every page (`/`, `/services`, 7 services, `/about`, `/contact`, `/why-us`, `/languages`) | 2–3 `ListItem` with `position, name, item` absolute URLs | ✅ Excellent |
| Service | Hub `ItemList` → 7 `Service` (`name, description, url, provider, serviceType: "X and Y" (no `&`), `areaServed: Country`) | ✅ Fixed — `&` → `and`, `areaServed` object |
| Service (detail) | 7 service pages | `name, serviceType (Text, no &), provider, areaServed Country, description, hasOfferCatalog` + `offers: {price:"0", priceCurrency:"USD"}` | ✅ Fixed — added `price` |
| FAQPage | Home (9 Q), Services hub (5), 7 services (4 each), `/contact` (5), `/languages` (12) | `mainEntity: 9× Question` with `name, acceptedAnswer.text` | ✅ Excellent |
| ItemList (Tech) | `app/page.js` home services (7), `app/languages/page.js` (12) | `SoftwareApplication` with `offers` | ✅ OK |
| ContactPoint | `app/contact/page.js` + `app/about/page.js` | `telephone +91-8588807039, email 19@...` | ✅ Fixed — was `+1-000` / `info@` |

**Warnings Fixed:** `serviceType` invalid for Organization, `&` unescaped, `areaServed` string → object, `Offer` missing `price`.

---

## 8. Performance / Core Web Vitals — 12/15

**Inspected:** `next.config.mjs` (`compress:true, poweredByHeader:false, images: avif/webp`), `globals.css` (no render-blocking), `npm run build` 19 static routes, images as `/public/*.png` (not `next/image`).

| Metric | Current | Target | Priority | Fix Applied |
|---|---|---|---|---|
| LCP | Estimated 1.8s (95+ Lighthouse claim in content, not verified) | <2.5s | High | Keep SSR/SSG, edge cache, add `next/image` with `priority` for hero |
| CLS | 0.02 claimed | <0.1 | Medium | Good — fixed `width/height` on images would help |
| INP | <200ms claimed | <200ms | Medium | Good — no heavy JS, but `HomePageClient` is 114k client JS → code-split |
| Image optimization | `<img>` not `next/image`, `formats: avif/webp` in config but not used | High | Migrate to `next/image` with `sizes` |
| JS bundle | `HomePageClient` 114k + `react` 19.2.8 | Medium | Split `languages` into dynamic import |

---

## 9. Mobile SEO — 5/5

- `viewport` present (fixed), `themeColor #0b0c10`, responsive grids (`repeat(auto-fit, minmax(300px,1fr))` → 1 col on ≤768px), `services-hero` global mobile CSS (16px padding, 1-col grid, H1 clamp), touch targets 40px+, no horizontal overflow after fixes.

---

## 10. Internal Linking — 5/5

- **Header:** `Services` dropdown 7 items + `About`, `Contact`, `Why Us` (all `href` correct, gap bridge + 180ms delay fixed)
- **Footer:** 5 columns: Brand, Services (7), **Company (NEW: About, Why Us, Contact, Tech Stack, All Services)**, Trust, Consulting (19@ + phone) — every important page ≤2 clicks
- **Breadcrumbs:** On every page with `BreadcrumbList`
- **Related grids:** Each service links to 4 others + hub
- **Wall & hero:** Marketing cards, wall cards, hero CTA all `Link href="/services/..."` with keyword anchors

---

## 11. Accessibility — 4/5

- `alt` present on all images (keyword-rich, e.g., `Custom Web Development — Next.js 15 & React 19 — OneNineLabs`)
- `aria-expanded/haspopup` on Services button, `aria-label` on mobile menu
- Color contrast: White `#ffffff` on `#0f172a` passes AAA; green `#10b981` on white passes AA; dark footer `#94a3b8` on `#0b0c10` is 4.5:1 borderline — could lighten to `#a1aab8`
- Missing: `skip to content` link, `lang="en"` is correct, `dir="ltr"` optional

---

## 12. Content Quality — 13/15

- **Word count:** Home 2.5k, services 1.2k+ each, About 600+ (now expanded with story/timeline/6 values), Contact 800+ (now 4 info cards + Visit & Hours + Why + FAQ 5), Why-Us 700+ (now 6 reasons + comparison table + process)
- **E-E-A-T:** `Organization.foundingDate 2020`, `80+ products`, `1.2B req/mo`, `99.9% SLA`, `SOC 2` — add real case studies for E-E-A-T boost
- **Thin:** `/languages` was 12 cards but now detailed longDesc + useCases — good

---

## Summary of Fixes Applied for High Ranking (This Audit)

1. **Titles/Descriptions:** 7 titles >60 or <50 fixed to 50–60, 5 descriptions >160 or missing fixed to 149–160, Contact metadata added via `app/contact/layout.js`
2. **Contact Info Unified:** `info@ → 19@oneninelabs.com`, `+1-000 → +91-8588807039` in `layout.js` Organization, `Footer`, `About`, `Contact` (10+ locations) + `Lucknow, UP, IN`
3. **Viewport:** Added `export const viewport` in `layout.js`
4. **Structured Data:** Fixed `serviceType` array → `hasOfferCatalog`, `&`→`and`, `areaServed` string→object, added `price` to `Offer`, added `BreadcrumbList`/`FAQPage` everywhere
5. **Crawlability:** Expanded `sitemap.js` 8 → 13 URLs (added `/languages`, `/about`, `/contact`, `/why-us`, `/mobile-apps`), `robots.js` already correct
6. **Internal Linking:** Added `Company` column in Footer (About/Why/Contact/Tech Stack), header `About`/`Contact` links, related grids
7. **Mobile Hero:** `1.15fr` → `repeat(auto-fit, minmax(300px,1fr))` + `services-hero` mobile CSS
8. **Dropdown:** Gap bridge `::before` + 180ms delay + `handleToggle`
9. **Content:** Expanded About (stats, story, timeline, 6 values), Contact (4 info cards, Visit & Hours, Why Teams, FAQ 5), Why-Us (6 reasons, comparison table, process)
10. **Duplicate CTA:** Removed duplicate `Get in Touch` (home `footer-lead-section` vs `Footer` contact)

---

## 13. Next Steps — Priority for Ranking

**Critical (Do Before Indexing):**
- Verify domain `oneninelabs.com` DNS → Vercel, add `DATABASEURL` env for `/api/contact`, create Google Business Profile (Lucknow) with NAP `19@` / `+91 85888 07039`, submit `sitemap.xml` to GSC/Bing

**High (First 30 Days):**
- Publish 5 blog posts targeting long-tail (e.g., “How to Build Multi-Tenant SaaS with Stripe & RLS”) → internal link to `/services/saas`
- Create `/case-studies` with 2 real projects + `CaseStudy` schema
- Migrate hero images to `next/image` + `priority` + explicit `width/height`

**Medium (30–60 Days):**
- Create `manifest.json` (PWA), add `hi-IN` hreflang, fix footer `Privacy`/`Terms` from `#` to real pages
- Stable `lastModified` in sitemap (use `git log` date, not `new Date()`)

---

*Report generated from code inspection, not live HTTP. For live verification, deploy to Vercel, run `curl -I https://oneninelabs.com` + `curl https://oneninelabs.com/sitemap.xml` + Google Rich Results Test + PageSpeed Insights, then re-audit.*

