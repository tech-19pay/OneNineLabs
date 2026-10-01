import CrmPageContent from "@/components/CrmPageContent";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, siteUrl, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/crm",
  title: "CRM System — Customer Relationship Management | OneNineLabs",
  description:
    "Explore OneNineLabs CRM System: Streamline your sales pipeline, manage contacts, and boost your business growth with our powerful CRM software.",
  keywords: [
    "OneNineLabs CRM",
    "Customer Relationship Management",
    "CRM System",
    "Sales Tracking Software",
  ],
});

export default function CrmPage() {
  const breadcrumb = breadcrumbLd([{ name: "CRM", path: "/crm" }]);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/crm#products`,
    name: "OneNineLabs CRM System",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "OneNineLabs CRM",
          url: `${siteUrl}/crm`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          creator: { "@id": `${siteUrl}/#organization` },
        },
      },
    ],
  };
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={itemListLd} />
      <CrmPageContent />
    </>
  );
}
