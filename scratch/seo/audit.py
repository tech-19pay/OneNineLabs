import re, json, os, glob, html as htmllib

ROOT = "/home/user/OneNineLabs/.next/server/app"
files = {
 "/": "index.html", "/about":"about.html", "/contact":"contact.html",
 "/how-we-work":"how-we-work.html", "/languages":"languages.html", "/privacy":"privacy.html",
 "/product":"product.html", "/product/cash-point":"product/cash-point.html",
 "/services":"services.html", "/services/ai-automation":"services/ai-automation.html",
 "/services/blockchain":"services/blockchain.html", "/services/marketing":"services/marketing.html",
 "/services/mobile-apps":"services/mobile-apps.html", "/services/saas":"services/saas.html",
 "/services/security":"services/security.html", "/services/student":"services/student.html",
 "/services/web-development":"services/web-development.html", "/terms":"terms.html",
 "/why-us":"why-us.html", "/404":"_not-found.html",
}

def tags(doc, name):
    return re.findall(r'<%s\b[^>]*>' % name, doc, re.I)

def attr(tag, a):
    m = re.search(r'%s="([^"]*)"' % a, tag, re.I)
    return htmllib.unescape(m.group(1)) if m else None

def metas(doc):
    out = {}
    for t in tags(doc, "meta"):
        k = attr(t,"name") or attr(t,"property") or attr(t,"http-equiv")
        if k: out.setdefault(k.lower(), []).append(attr(t,"content"))
    return out

def links(doc, rel):
    res=[]
    for t in tags(doc,"link"):
        if (attr(t,"rel") or "").lower()==rel:
            res.append((attr(t,"href"), attr(t,"hreflang"), attr(t,"media"), attr(t,"sizes"), attr(t,"type")))
    return res

def jsonld(doc):
    blocks=[]
    for m in re.finditer(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', doc, re.S|re.I):
        raw = m.group(1).strip()
        try:
            blocks.append(json.loads(raw))
        except Exception as e:
            blocks.append({"__parse_error__": str(e), "__raw__": raw[:200]})
    return blocks

def types(o, acc):
    if isinstance(o, dict):
        t = o.get("@type")
        if t:
            acc.extend(t if isinstance(t,list) else [t])
        for v in o.values(): types(v, acc)
    elif isinstance(o, list):
        for v in o: types(v, acc)
    return acc

report={}
for route, f in files.items():
    p=os.path.join(ROOT,f)
    doc=open(p,encoding="utf-8").read()
    m=metas(doc)
    t=re.search(r'<title[^>]*>(.*?)</title>', doc, re.S)
    h1s=re.findall(r'<h1\b[^>]*>(.*?)</h1>', doc, re.S)
    h2s=re.findall(r'<h2\b[^>]*>', doc, re.I)
    imgs=re.findall(r'<img\b[^>]*>', doc, re.I)
    imgs_noalt=[i for i in imgs if not attr(i,'alt')]
    ld=jsonld(doc)
    report[route]={
      "title": (htmllib.unescape(t.group(1)).strip() if t else None),
      "title_len": len(htmllib.unescape(t.group(1)).strip()) if t else 0,
      "desc": (m.get("description") or [None])[0],
      "desc_len": len((m.get("description") or [""])[0] or ""),
      "canonical": [x[0] for x in links(doc,"canonical")],
      "hreflang": [(x[1],x[0]) for x in links(doc,"alternate") if x[1]],
      "og": {k:v for k,v in m.items() if k.startswith("og:")},
      "tw": {k:v for k,v in m.items() if k.startswith("twitter:")},
      "robots": (m.get("robots") or [None])[0],
      "icons": links(doc,"icon")+links(doc,"apple-touch-icon")+links(doc,"shortcut icon"),
      "manifest": [x[0] for x in links(doc,"manifest")],
      "h1_count": len(h1s), "h1": [re.sub('<[^>]+>','',x).strip()[:80] for x in h1s],
      "h2_count": len(h2s), "img_count": len(imgs), "img_noalt": len(imgs_noalt),
      "ld_types": sorted(set(types(ld,[]))),
      "ld_errors": [b["__parse_error__"] for b in ld if "__parse_error__" in b],
      "ld_count": len(ld),
      "lang": attr(re.search(r'<html\b[^>]*>',doc).group(0),'lang'),
      "viewport": (m.get("viewport") or [None])[0],
      "keywords_present": bool(m.get("keywords")),
      "word_count": len(re.sub(r'<script.*?</script>|<style.*?</style>','',doc,flags=re.S).split()),
    }

json.dump(report, open("/home/user/OneNineLabs/scratch/seo/report.json","w"), indent=1)

for route in files:
    r=report[route]
    print("="*100)
    print(route)
    print("  lang=%s viewport=%s robots=%s" % (r["lang"], (r["viewport"] or "")[:40], r["robots"]))
    print("  TITLE (%d): %s" % (r["title_len"], r["title"]))
    print("  DESC  (%d): %s" % (r["desc_len"], (r["desc"] or "")[:170]))
    print("  CANONICAL: %s" % r["canonical"])
    print("  HREFLANG : %s" % r["hreflang"])
    print("  OG       : %s" % json.dumps({k:v for k,v in r["og"].items() if k!='og:description'}, ensure_ascii=False)[:300])
    print("  TW       : %s" % json.dumps(r["tw"], ensure_ascii=False)[:220])
    print("  ICONS    : %s   MANIFEST: %s" % (r["icons"], r["manifest"]))
    print("  H1=%d %s | H2=%d | img=%d noalt=%d | words=%d" % (r["h1_count"], r["h1"], r["h2_count"], r["img_count"], r["img_noalt"], r["word_count"]))
    print("  LD(%d): %s %s" % (r["ld_count"], r["ld_types"], ("PARSE ERRORS: "+str(r["ld_errors"])) if r["ld_errors"] else ""))
