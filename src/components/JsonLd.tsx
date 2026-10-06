// Structured data for search engines and AI assistants. A plain <script>
// tag, as node_modules/next/dist/docs/01-app/02-guides/json-ld.md recommends;
// "<" is escaped so no text in the data can close the tag.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
