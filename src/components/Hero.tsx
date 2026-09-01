import ProductPanel from "./ProductPanel";

export default function Hero() {
  return (
    <section className="bg-radial-glow relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 pt-20 pb-24 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:pt-28 lg:pb-32">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-bg-raised px-3 py-1 text-xs text-text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Private Mac assistant · early access in preparation
          </div>
          <h1 className="text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-text sm:text-5xl lg:text-6xl">
            It turns your inbox into actions.
            <br />
            It waits for your approval.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-text-secondary text-pretty">
            SafePersonalAI reads new email, prepares the task or calendar
            action it found, and shows you exactly what will happen before
            anything changes. It runs on your Mac with Ollama locally or your
            own cloud-provider account.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#use-cases"
              className="site-cta-primary"
            >
              Explore real use cases
            </a>
            <a
              href="#boundary"
              className="site-cta-secondary"
            >
              See how the boundary works
            </a>
          </div>
          <p className="mt-6 text-xs text-text-tertiary">
            Paid early access is not open yet. Choose a local Ollama model with
            no cloud account, or connect your own Anthropic, OpenAI, or Gemini
            key when you want cloud inference.
          </p>
        </div>

        <div className="relative lg:justify-self-end">
          <ProductPanel />
        </div>
      </div>
    </section>
  );
}
