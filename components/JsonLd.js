/** Renders one JSON-LD <script> block. Keeps every page's markup in <head>-safe SSR output. */
export default function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
