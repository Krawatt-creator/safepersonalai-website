import { faqs } from "@/lib/faq-data";

// Every answer is written into the page, folded with the browser's own
// <details> element — no script needed to read or open one, so search
// engines and AI assistants see all of them, not only the open one.
export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Questions people actually ask.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => (
            <details key={f.q} name="faq" open={i === 0} className="group">
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-medium text-text">{f.q}</h3>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-text-tertiary transition-transform group-open:rotate-45"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </summary>
              <p className="max-w-3xl pb-6 text-sm leading-relaxed text-text-secondary">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
