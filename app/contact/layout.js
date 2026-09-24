import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact OneNineLabs — 19@oneninelabs.com | +91 85888 07039",
  description:
    "Contact OneNineLabs in Lucknow: email 19@oneninelabs.com or call +91 85888 07039. We reply within 12h about your web, mobile, SaaS, AI or Web3 project.",
  keywords: [
    "contact OneNineLabs",
    "OneNineLabs email",
    "OneNineLabs phone",
    "software development contact Lucknow",
    "19@oneninelabs.com",
  ],
  ogTitle: "Contact OneNineLabs — Let's Build Together",
  ogDescription: "Email 19@oneninelabs.com or call +91 85888 07039 — Lucknow, UP. We reply within 12h.",
});

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
