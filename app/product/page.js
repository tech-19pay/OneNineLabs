import ProductPageContent from "@/components/ProductPageContent";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, siteUrl, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/product",
  title: "Products — Typing Practice & Speed Test Apps | OneNineLabs",
  description:
    "Explore OneNineLabs products: the Typing Practice & Speed Test app suite and NinteenPay Cash Point — built, shipped and maintained in-house.",
  keywords: [
    "OneNineLabs products",
    "typing practice app",
    "typing speed test app",
    "stenography practice software",
  ],
});

export default function ProductPage() {
  const breadcrumb = breadcrumbLd([{ name: "Products", path: "/product" }]);
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}/product#products`,
    name: "OneNineLabs Products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Typing Practice & Speed Test Apps",
          url: `${siteUrl}/product`,
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          creator: { "@id": `${siteUrl}/#organization` },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: "NinteenPay Cash Point",
          url: `${siteUrl}/product/cash-point`,
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
      <ProductPageContent />
    </>
  );
}
