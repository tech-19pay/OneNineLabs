import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StudentPageClient from "@/components/StudentPageClient";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oneninelabs.com";

export const metadata = {
  title: "Student Social Media & Personal Branding Packages | OneNineLabs",
  description:
    "Affordable social media management and personal branding packages for students and campus creators. High-quality posts, reels, stories, captions, and hashtag strategies starting at ₹399/mo.",
  keywords: [
    "student social media package",
    "student personal branding",
    "campus creator marketing",
    "social media posts for students",
    "reels and stories creation",
    "student influencer branding",
    "OneNineLabs student plans",
  ],
  alternates: {
    canonical: "/services/student",
    languages: {
      "en-US": "/services/student",
      en: "/services/student",
      "hi-IN": "/services/student",
      "x-default": "/services/student",
    },
  },
  openGraph: {
    title: "Student Social Media & Personal Branding Packages | OneNineLabs",
    description:
      "Affordable monthly social media posts, reels, stories, and personal branding strategies for students and campus creators.",
    url: `${siteUrl}/services/student`,
    siteName: "OneNineLabs",
    type: "website",
    images: [{ url: "/tech_banner.png", width: 1200, height: 630, alt: "Student Social Media Packages" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Programs & Campus Accelerator — OneNineLabs",
    description: "From Campus to Production Scale. Live codebases, 1-on-1 mentorship & paid internships.",
    images: ["/tech_banner.png"],
  },
  robots: { index: true, follow: true },
};

export default function StudentPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      { "@type": "ListItem", position: 3, name: "Student Programs", item: `${siteUrl}/services/student` },
    ],
  };

  const educationalServiceLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: "OneNineLabs Student Tech Accelerator",
    description: "Industry-grade production software engineering mentorship, capstones, and paid internship program for college students.",
    provider: {
      "@type": "Organization",
      name: "OneNineLabs",
      url: siteUrl,
    },
    educationalCredentialAwarded: "Verified Industry Certificate of Completion & Letter of Recommendation",
    occupationalCategory: "Software Developer / AI Engineer",
  };

  return (
    <>
      <Header variant="light" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(educationalServiceLd) }} />
      
      <main id="main-content">
        <StudentPageClient />
      </main>

      <Footer />
    </>
  );
}
