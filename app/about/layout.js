import { pageMetadata } from "@/lib/seo";

/**
 * /about is a client component ("use client"), and client components cannot
 * export metadata — without this layout the page inherited the homepage
 * title/description/canonical (a duplicate-content signal).
 */
export const metadata = pageMetadata({
  path: "/about",
  title: "About OneNineLabs — Our Story, Mission & Team | Lucknow",
  description:
    "Meet OneNineLabs: an independent Lucknow engineering firm building web, mobile, SaaS, AI & Web3 for startups to enterprises — 80+ products, 99.9% SLA.",
  keywords: [
    "about OneNineLabs",
    "software company Lucknow",
    "custom software development team India",
    "OneNineLabs mission",
  ],
});

export default function AboutLayout({ children }) {
  return children;
}
