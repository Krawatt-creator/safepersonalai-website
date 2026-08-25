import ProductPanel from "./ProductPanel";

export default function Hero() {
  return (
    <section className="bg-radial-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28 lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-raised px-3 py-1 text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Runs on your Mac · your own AI key · nothing leaves without you
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-text sm:text-5xl lg:text-6xl">
            It reads your inbox.
            <br />
            It never sends without you.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary text-pretty">
            SafePersonalAI watches your email, calendar, and iMessages, works
            out what needs doing, and drafts it — a reply, an event, a filed
            document, a tracked payment. You approve every single action.
            It never acts on its own.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="rounded-full bg-green px-6 py-3 text-sm font-semibold text-[#06110c] transition hover:brightness-110"
            >
              Get started free
            </a>
            <a
              href="#boundary"
              className="rounded-full border border-border-strong px-6 py-3 text-sm font-medium text-text transition hover:border-text-tertiary"
            >
              See how the boundary works
            </a>
          </div>
          <p className="mt-6 text-xs text-text-tertiary">
            Works out of the box with a free local Ollama model — no
            account, no API key, no cost. Prefer Gemini, Anthropic, or
            OpenAI instead? Connect your own key any time.
          </p>
        </div>

        <div className="relative lg:justify-self-end">
          <ProductPanel />
        </div>
      </div>
    </section>
  );
}
