import Link from "next/link";

const PRIMARY = "#2563eb";

const marqueeItems = [
  "Next.js 15", "React 19", "Vue 3", "Svelte", "TypeScript", "Tailwind",
  "Node.js", "NestJS", "FastAPI", "PostgreSQL", "Prisma", "Redis",
  "Sanity", "Contentful", "Vercel", "Cloudflare",
];

const services = [
  { icon: "⚡", title: "Next.js & React Apps", desc: "App Router, React Server Components and edge rendering — marketing sites, dashboards and product UIs that stay fast as they grow.", tags: ["RSC", "App Router", "SSR / SSG"] },
  { icon: "🎨", title: "Design Systems & UI Kits", desc: "Tokenized component libraries in React, Vue or Svelte so every screen ships from one source of truth — not a folder of one-offs.", tags: ["Tokens", "Storybook", "Tailwind"] },
  { icon: "📝", title: "Headless CMS Websites", desc: "Sanity, Contentful and Strapi with visual editing, preview URLs and instant edge rebuilds when marketing hits publish.", tags: ["Sanity", "Contentful", "ISR"] },
  { icon: "⚙️", title: "API & Backend Platforms", desc: "NestJS, Express and FastAPI services with Prisma, PostgreSQL and Redis — typed contracts your frontend can trust.", tags: ["NestJS", "Prisma", "REST / GraphQL"] },
  { icon: "🛒", title: "Commerce & Booking UIs", desc: "Catalogs, checkout, subscriptions and scheduling wired to Stripe, inventory and CRM — conversion-first, not template-first.", tags: ["Stripe", "Checkout", "CRM"] },
  { icon: "🤖", title: "AI-Powered Web Features", desc: "Streaming chat, search-over-docs and copilots on your own content — OpenAI, Claude or Gemini with citations, not a black box.", tags: ["Streaming", "RAG", "pgvector"] },
  { icon: "🔍", title: "SEO & Core Web Vitals", desc: "Crawlable architecture, metadata, sitemaps and a Lighthouse 95+ budget so organic traffic is a design constraint, not a later fix.", tags: ["CWV", "SSR", "Metadata"] },
  { icon: "🚀", title: "Migration & Rebuilds", desc: "Move off WordPress, legacy SPAs or slow CMSs onto a typed Next.js stack without a big-bang cutover — staged, measured, reversible.", tags: ["Incremental", "Redirects", "Parity"] },
];

const processSteps = [
  { num: "01", title: "Discovery & IA", desc: "We map users, content, SEO targets and integrations, then return a fixed architecture and itemized proposal.", metric: "48h proposal" },
  { num: "02", title: "UX & Design System", desc: "Figma flows, tokens and a component inventory signed off before we write production UI code.", metric: "Design tokens" },
  { num: "03", title: "Build Sprints", desc: "Weekly demos of real pages, APIs and CMS schemas — staging on Vercel from week one.", metric: "Weekly demos" },
  { num: "04", title: "Performance & QA", desc: "Lighthouse, Playwright and visual regression on every PR. We do not ship a page that fails the CWV budget.", metric: "Lighthouse 95+" },
  { num: "05", title: "Content & Preview", desc: "Editors train on the CMS with live preview. Redirects, metadata and sitemap land before launch day.", metric: "Editor-ready" },
  { num: "06", title: "Launch & Operate", desc: "Edge deploy, analytics, error tracking and a support SLA for iterations after go-live.", metric: "99.9% SLA" },
];

const industries = [
  { icon: "🏦", name: "Fintech & SaaS", desc: "Dashboards, billing portals and authenticated product UIs that stay fast under real data." },
  { icon: "🏥", name: "Healthcare", desc: "HIPAA-aware booking, patient portals and content sites with access control baked in." },
  { icon: "🛍️", name: "Commerce & DTC", desc: "Catalog, checkout and post-purchase flows wired to Stripe, inventory and email." },
  { icon: "🎓", name: "Education", desc: "Course catalogs, enrollment and member areas with CMS-managed curricula." },
  { icon: "📰", name: "Media & Publishers", desc: "High-volume article sites with ISR, paywalls and editorial preview." },
  { icon: "🏗️", name: "Real Estate & Services", desc: "Listings, lead capture and booking funnels that convert on mobile first." },
];

const cmsPoints = [
  { title: "Visual editing, not a form farm", desc: "Portable text, live preview and field-level validation so marketers ship without a ticket." },
  { title: "Preview URLs on every draft", desc: "Branch previews on Vercel so stakeholders review the real page, not a screenshot." },
  { title: "Instant edge rebuilds", desc: "ISR / on-demand revalidation — publish in the CMS, the edge updates in seconds." },
  { title: "Typed content contracts", desc: "Generated TypeScript types from the schema so the frontend cannot drift from the CMS." },
];

const apiPoints = [
  { title: "Typed end to end", desc: "Prisma models, Zod validators and OpenAPI / GraphQL schemas — the UI never guesses a field." },
  { title: "Auth that auditors accept", desc: "Session, SSO or magic-link with RBAC, rate limits and audit logs on every mutation." },
  { title: "Fast under load", desc: "Redis cache, connection pooling and edge-friendly reads so p95 stays in the tens of milliseconds." },
  { title: "Jobs, webhooks, queues", desc: "Stripe, CRM and email events processed out of the request path — no lost webhooks." },
];

const nextPoints = [
  { title: "App Router, done properly", desc: "Server Components by default, client islands where they earn their keep, streaming where it helps LCP." },
  { title: "One design system", desc: "Tokens, accessible primitives and Storybook so new pages are composition, not invention." },
  { title: "SEO is architecture", desc: "Metadata, sitemap, structured data and crawlable HTML from day one — not a plugin later." },
  { title: "Measured, not hoped", desc: "Lighthouse CI on every pull request. A page that misses the CWV budget does not merge." },
];

function CmsStudio() {
  return (
    <div className="wd-desk">
      <div className="wd-desk-bar">
        <span className="d r" />
        <span className="d y" />
        <span className="d g" />
        <div className="wd-url">studio.oneninelabs.com</div>
      </div>
      <div className="wd-cms">
        <aside>
          <b>Content</b>
          {["Pages", "Posts", "Authors", "Settings"].map((i, n) => (
            <span key={i} className={n === 1 ? "on" : ""}>{i}</span>
          ))}
        </aside>
        <main>
          <div className="cms-h">
            <strong>Edit post</strong>
            <em>Published</em>
          </div>
          <label>Title</label>
          <div className="field">Shipping a 98 Lighthouse marketing site</div>
          <label>Body</label>
          <div className="field tall">
            Edge-rendered Next.js with Sanity preview…
            <i />
          </div>
          <div className="cms-foot">
            <span>Preview ↗</span>
            <span className="ok">Publish</span>
          </div>
        </main>
      </div>
    </div>
  );
}

function ApiConsole() {
  return (
    <div className="wd-desk dark">
      <div className="wd-desk-bar dark">
        <span className="d r" />
        <span className="d y" />
        <span className="d g" />
        <div className="wd-url dark">api.oneninelabs.com/v1</div>
      </div>
      <pre>
        <span className="c">GET</span> /users?limit=20{"\n"}
        <span className="g">200 OK</span>  ·  12ms  ·  cache HIT{"\n\n"}
        {`{
  "data": [
    { "id": "usr_19", "plan": "pro" },
    { "id": "usr_20", "plan": "team" }
  ],
  "page": { "next": "cur_8f" }
}`}
      </pre>
      <div className="api-pills">
        {["Prisma", "NestJS", "Redis", "Zod"].map((p) => <span key={p}>{p}</span>)}
      </div>
    </div>
  );
}

function NextBoard() {
  return (
    <div className="wd-desk">
      <div className="wd-desk-bar">
        <span className="d r" />
        <span className="d y" />
        <span className="d g" />
        <div className="wd-url">app.oneninelabs.com</div>
      </div>
      <div className="wd-app">
        <header>
          <b>OneNine</b>
          <nav><span>Product</span><span>Docs</span><span>Pricing</span></nav>
          <em>Get started</em>
        </header>
        <div className="hero-mini">
          <small>NEXT.JS · EDGE</small>
          <h4>Ship pages that stay fast.</h4>
          <p>RSC + ISR on a global edge. Editors publish; Lighthouse stays green.</p>
        </div>
        <div className="mini-cards">
          <div><b>0.4s</b><span>LCP</span></div>
          <div><b>98</b><span>Lighthouse</span></div>
          <div><b>12ms</b><span>API p95</span></div>
        </div>
      </div>
    </div>
  );
}

function Spotlight({ id, eyebrow, title, lead, points, flip, cta, visual }) {
  return (
    <section id={id} className={`wd-spot ${flip ? "flip" : ""}`}>
      <div className="wd-spot-inner">
        <div className="wd-spot-copy">
          <span className="wd-eye">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{lead}</p>
          <ul>
            {points.map((p) => (
              <li key={p.title}>
                <span className="chk">✓</span>
                <div>
                  <strong>{p.title}</strong>
                  <span>{p.desc}</span>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="wd-btn">{cta}</Link>
        </div>
        <div className="wd-spot-visual">{visual}</div>
      </div>
    </section>
  );
}

const pill = {
  background: "#f8fafc", color: "#475569", border: "1px solid #e2e8f0",
  padding: "3px 9px", borderRadius: "99px", fontSize: "11px", fontWeight: "700",
};

export default function WebDevMoreSections() {
  return (
    <>
      <section className="vd-marquee-section">
        <div className="vd-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span className="vd-marquee-item" key={`${item}-${i}`}><span className="sep">◆</span>{item}</span>
          ))}
        </div>
      </section>

      <section id="all-services" style={{ background: "#ffffff", padding: "96px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Full-Stack Web</div>
        <h2 className="vd-section-h2">Complete Web Development Services</h2>
        <p className="vd-section-p" style={{ maxWidth: "640px", marginLeft: "auto", marginRight: "auto" }}>
          Frontends, CMS, APIs and launch ops — one senior team, one typed codebase, one Lighthouse budget.
        </p>
        <div className="vd-results-grid">
          {services.map((s, i) => (
            <div className="vd-result-card" key={s.title} style={{ textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div className="vd-result-num" style={{ marginBottom: 0 }}>{String(i + 1).padStart(2, "0")}</div>
                <div style={{ fontSize: "22px" }}>{s.icon}</div>
              </div>
              <div className="vd-result-label">{s.title}</div>
              <div className="vd-result-desc">
                {s.desc}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "16px", paddingTop: "16px", borderTop: "1px dashed #e2e8f0" }}>
                  {s.tags.map((t) => <span key={t} style={pill}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Spotlight
        id="nextjs"
        eyebrow="Service Spotlight · Product Web Apps"
        title="Next.js product & marketing sites"
        lead="App Router, React Server Components and a design system — so your marketing site and your product UI share one stack, one deploy and one performance budget."
        points={nextPoints}
        cta="Scope a Next.js build →"
        visual={<NextBoard />}
      />
      <Spotlight
        id="cms"
        eyebrow="Service Spotlight · Headless CMS"
        title="CMS websites editors actually use"
        lead="Sanity, Contentful or Strapi with live preview and edge revalidation. Marketing publishes. Engineering keeps the types and the Lighthouse score."
        points={cmsPoints}
        flip
        cta="Scope a CMS site →"
        visual={<CmsStudio />}
      />
      <Spotlight
        id="apis"
        eyebrow="Service Spotlight · APIs & Data"
        title="APIs your frontend can trust"
        lead="NestJS or FastAPI with Prisma, Redis and typed contracts. Auth, webhooks and jobs included — not bolted on after the first demo."
        points={apiPoints}
        cta="Scope an API →"
        visual={<ApiConsole />}
      />

      <section style={{ background: "#f8fafc", padding: "96px 24px", borderBottom: "1px solid #f1f5f9", textAlign: "center" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Use Cases</div>
        <h2 className="vd-section-h2">Industries We Build For</h2>
        <p className="vd-section-p" style={{ maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
          Same stack, different constraints. We have shipped this architecture into these rooms.
        </p>
        <div className="wd-ind-grid">
          {industries.map((ind) => (
            <div key={ind.name} className="wd-ind-card">
              <span className="wd-ind-ic">{ind.icon}</span>
              <div>
                <h4>{ind.name}</h4>
                <p>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="vd-process-section" style={{ padding: "104px 24px 90px", background: "#ffffff" }}>
        <div className="vd-badge-tag" style={{ marginLeft: "auto", marginRight: "auto", color: PRIMARY, background: "rgba(37,99,235,0.1)", borderColor: "rgba(37,99,235,0.25)" }}>Delivery Process</div>
        <h2 className="vd-section-h2">How We Ship Web Products</h2>
        <p className="vd-section-p" style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          Fixed milestones from information architecture to a green Lighthouse score — no hourly surprises.
        </p>
        <div className="vd-process-timeline-v2">
          <div className="vt-line" />
          {processSteps.map((step, idx) => {
            const isRight = idx % 2 === 1;
            return (
              <div className={`vt-item ${isRight ? "vt-right" : "vt-left"}`} key={step.num}>
                <div className="vt-dot" />
                <div className="vt-content">
                  <span className="vt-step-badge">Step {step.num}</span>
                  <h3 className="vt-title">{step.title}</h3>
                  <p className="vt-desc">{step.desc}</p>
                </div>
                <div className="vt-visual">
                  <div className="vt-image-container">
                    <div style={{ background: "#ffffff", borderRadius: "16px", border: "1px solid #e2e8f0", padding: "20px", width: "100%", maxWidth: "300px", boxShadow: "0 10px 30px rgba(15,23,42,0.06)" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: "#0f172a" }}>{step.title}</span>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                      </div>
                      <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: "11px", color: "#64748b", fontWeight: "600" }}>Milestone</span>
                        <span style={{ fontSize: "12px", fontWeight: "900", color: PRIMARY }}>{step.metric}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
        .wd-eye {
          display: inline-block; font-size: 12px; font-weight: 800; letter-spacing: 1.4px;
          text-transform: uppercase; color: ${PRIMARY}; background: rgba(37,99,235,0.08);
          padding: 6px 14px; border-radius: 99px; margin-bottom: 16px;
        }
        .wd-spot { background: #ffffff; padding: 96px 24px; border-bottom: 1px solid #f1f5f9; }
        .wd-spot.flip { background: #f8fafc; }
        .wd-spot-inner {
          max-width: 1180px; margin: 0 auto; display: grid;
          grid-template-columns: 1fr 1.05fr; gap: 56px; align-items: center;
        }
        .wd-spot.flip .wd-spot-inner { grid-template-columns: 1.05fr 1fr; }
        .wd-spot.flip .wd-spot-copy { order: 2; }
        .wd-spot.flip .wd-spot-visual { order: 1; }
        .wd-spot-copy h2 {
          font-size: clamp(28px, 3.4vw, 40px); font-weight: 900; color: #0f172a;
          letter-spacing: -1.2px; line-height: 1.15; margin: 0 0 14px;
        }
        .wd-spot-copy > p { font-size: 15.5px; color: #475569; line-height: 1.7; font-weight: 500; margin: 0 0 26px; }
        .wd-spot-copy ul { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 16px; }
        .wd-spot-copy li { display: flex; gap: 12px; align-items: flex-start; }
        .wd-spot-copy .chk {
          width: 26px; height: 26px; border-radius: 8px; background: #ecfdf5; color: #059669;
          font-weight: 900; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; font-size: 13px; margin-top: 1px;
        }
        .wd-spot-copy li strong { display: block; font-size: 14.5px; color: #0f172a; font-weight: 800; margin-bottom: 3px; }
        .wd-spot-copy li span:last-child { font-size: 13px; color: #64748b; line-height: 1.55; }
        .wd-btn {
          background: #0f172a; color: #fff; font-weight: 700; border-radius: 12px;
          padding: 14px 28px; font-size: 15px; text-decoration: none;
          display: inline-flex; border: 1.5px solid #0f172a; transition: all 0.25s ease;
        }
        .wd-btn:hover { background: #fff; color: #0f172a; transform: translateY(-2px); }

        .wd-desk {
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; overflow: hidden;
          box-shadow: 0 24px 50px rgba(15,23,42,0.08);
        }
        .wd-desk.dark { background: #0f172a; border-color: #1e293b; }
        .wd-desk-bar {
          height: 34px; background: #f1f5f9; display: flex; align-items: center;
          padding: 0 12px; gap: 6px; border-bottom: 1px solid #e5e7eb;
        }
        .wd-desk-bar.dark { background: #1e293b; border-bottom-color: #334155; }
        .d { width: 10px; height: 10px; border-radius: 50%; display: inline-block; }
        .d.r { background: #ef4444; } .d.y { background: #f59e0b; } .d.g { background: #10b981; }
        .wd-url { margin: 0 auto; background: #fff; color: #94a3b8; font-size: 10px; padding: 3px 22px; border-radius: 6px; }
        .wd-url.dark { background: #0f172a; color: #64748b; }

        .wd-cms { display: grid; grid-template-columns: 140px 1fr; min-height: 280px; }
        .wd-cms aside { background: #f8fafc; border-right: 1px solid #e2e8f0; padding: 16px 12px; display: flex; flex-direction: column; gap: 6px; }
        .wd-cms aside b { font-size: 11px; color: #94a3b8; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 6px; }
        .wd-cms aside span { font-size: 12px; font-weight: 700; color: #475569; padding: 7px 10px; border-radius: 8px; }
        .wd-cms aside .on { background: #fff; color: ${PRIMARY}; box-shadow: 0 1px 4px rgba(15,23,42,0.06); }
        .wd-cms main { padding: 18px; text-align: left; }
        .cms-h { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .cms-h strong { font-size: 14px; color: #0f172a; }
        .cms-h em { font-style: normal; font-size: 10px; font-weight: 800; color: #059669; background: #ecfdf5; padding: 3px 8px; border-radius: 99px; }
        .wd-cms label { display: block; font-size: 10px; font-weight: 800; color: #94a3b8; text-transform: uppercase; margin: 8px 0 4px; }
        .field { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; font-size: 12px; font-weight: 600; color: #0f172a; }
        .field.tall { min-height: 72px; color: #64748b; font-weight: 500; position: relative; }
        .field.tall i { position: absolute; bottom: 8px; left: 10px; width: 2px; height: 12px; background: ${PRIMARY}; animation: blink 1s step-end infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .cms-foot { display: flex; justify-content: flex-end; gap: 8px; margin-top: 14px; }
        .cms-foot span { font-size: 11px; font-weight: 800; padding: 7px 12px; border-radius: 8px; border: 1px solid #e2e8f0; color: #334155; }
        .cms-foot .ok { background: #0f172a; color: #fff; border-color: #0f172a; }

        .wd-desk.dark pre {
          margin: 0; padding: 20px 22px; font-family: ui-monospace, Menlo, Consolas, monospace;
          font-size: 12px; line-height: 1.7; color: #cbd5e1; text-align: left; white-space: pre-wrap;
        }
        .wd-desk.dark .c { color: #38bdf8; font-weight: 800; }
        .wd-desk.dark .g { color: #34d399; font-weight: 700; }
        .api-pills { display: flex; flex-wrap: wrap; gap: 8px; padding: 0 22px 18px; }
        .api-pills span { font-size: 11px; font-weight: 700; color: #cbd5e1; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.35); padding: 4px 12px; border-radius: 99px; }

        .wd-app { padding: 16px; background: #fafafa; }
        .wd-app header { display: flex; align-items: center; gap: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px; }
        .wd-app header b { font-size: 13px; color: #0f172a; }
        .wd-app header nav { display: flex; gap: 12px; font-size: 11px; font-weight: 700; color: #64748b; }
        .wd-app header em { margin-left: auto; font-style: normal; font-size: 10px; font-weight: 800; background: #0f172a; color: #fff; padding: 5px 10px; border-radius: 8px; }
        .hero-mini { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; text-align: left; margin-bottom: 12px; }
        .hero-mini small { font-size: 10px; font-weight: 800; letter-spacing: 1px; color: #b45309; }
        .hero-mini h4 { font-size: 18px; font-weight: 900; color: #0f172a; margin: 6px 0 6px; letter-spacing: -0.4px; }
        .hero-mini p { font-size: 12px; color: #64748b; margin: 0; line-height: 1.5; }
        .mini-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .mini-cards div { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px; text-align: center; }
        .mini-cards b { display: block; font-size: 16px; font-weight: 900; color: #0f172a; }
        .mini-cards span { font-size: 10px; color: #94a3b8; font-weight: 700; }

        .wd-ind-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; max-width: 1150px; margin: 52px auto 0; text-align: left; }
        .wd-ind-card {
          background: #fff; border: 1.5px solid #e2e8f0; border-radius: 16px; padding: 22px 24px;
          display: flex; align-items: center; gap: 18px; transition: all 0.25s ease;
        }
        .wd-ind-card:hover { transform: translateY(-3px); border-color: #93c5fd; box-shadow: 0 14px 30px rgba(15,23,42,0.07); }
        .wd-ind-ic {
          width: 50px; height: 50px; flex-shrink: 0; border-radius: 14px;
          background: linear-gradient(135deg, #eff6ff, #dbeafe); border: 1px solid #bfdbfe;
          display: flex; align-items: center; justify-content: center; font-size: 23px;
        }
        .wd-ind-card h4 { font-size: 15.5px; font-weight: 800; color: #0f172a; margin: 0 0 4px; }
        .wd-ind-card p { font-size: 13px; color: #64748b; line-height: 1.55; margin: 0; }

        @media (max-width: 1024px) {
          .wd-spot-inner, .wd-spot.flip .wd-spot-inner { grid-template-columns: 1fr !important; }
          .wd-spot.flip .wd-spot-copy, .wd-spot.flip .wd-spot-visual { order: unset; }
          .wd-ind-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
