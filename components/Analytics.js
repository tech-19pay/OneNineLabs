import Script from "next/script";

/**
 * Marketing / measurement stack for OneNineLabs.
 *
 * Every tag is opt-in through an environment variable, so the component
 * renders NOTHING until you set the IDs (no dead pixels, no console
 * errors, no consent/privacy noise on builds without IDs).
 *
 *   NEXT_PUBLIC_GA_ID                -> Google Analytics 4 (gtag.js)
 *   NEXT_PUBLIC_GTM_ID               -> Google Tag Manager (recommended:
 *                                       manages GA4 + pixels server-side)
 *   NEXT_PUBLIC_META_PIXEL_ID        -> Meta (Facebook/Instagram) Pixel
 *   NEXT_PUBLIC_LINKEDIN_INSIGHT_ID  -> LinkedIn Insight Tag (B2B retargeting)
 *   NEXT_PUBLIC_CLARITY_ID           -> Microsoft Clarity (heatmaps, session
 *                                       replay — free, GDPR-friendly)
 *
 * CSP note: the matching domains are allow-listed in next.config.mjs.
 */

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const LINKEDIN_ID = process.env.NEXT_PUBLIC_LINKEDIN_INSIGHT_ID || "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || "";

export default function Analytics() {
  return (
    <>
      {GTM_ID && (
        <>
          <Script id="gtm-head" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      )}

      {GA_ID && !GTM_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { send_page_view: true });`}
          </Script>
        </>
      )}

      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`}
        </Script>
      )}

      {LINKEDIN_ID && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`_linkedin_partner_id = '${LINKEDIN_ID}';
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}var s=document.createElement("script");
            s.type="text/javascript";s.async=true;s.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";
            var t=document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(s,t);})(window.lintrk);`}
        </Script>
      )}

      {CLARITY_ID && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", '${CLARITY_ID}');`}
        </Script>
      )}
    </>
  );
}
