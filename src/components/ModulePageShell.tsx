import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";
import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";
import ModuleHowItWorks from "./ModuleHowItWorks";

type Feature = { title: string; body: string };
type Step = { title: string; body: string };

export default function ModulePageShell({
  accent,
  name,
  tagline,
  intro,
  steps,
  features,
  priceLabel,
  priceNote,
  ctaLabel,
  ctaHref,
  waitlistModule,
  children,
}: {
  accent: "green" | "violet";
  name: string;
  tagline: string;
  intro: string;
  steps: [Step, Step, Step];
  features: Feature[];
  priceLabel: string;
  priceNote: string;
  ctaLabel: string;
  ctaHref: string;
  waitlistModule?: string;
  children?: React.ReactNode;
}) {
  const dot = accent === "green" ? "bg-green" : "bg-violet";
  const accentText = accent === "green" ? "text-green" : "text-violet";
  const ctaClass = accent === "green" ? "site-cta-primary" : "site-cta-secondary";

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-radial-glow border-b border-border py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/#modules"
              className="text-sm text-text-secondary transition hover:text-text"
            >
              ← All modules
            </Link>
            <div className="mt-6 flex items-center gap-2">
              <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
              <p className={`text-sm font-medium ${accentText}`}>{name}</p>
            </div>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
              {tagline}
            </h1>
            <p className="mt-5 max-w-xl text-text-secondary text-pretty">
              {intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {waitlistModule ? (
                <WaitlistForm module={waitlistModule} accent={accent} />
              ) : (
                <>
                  <a
                    href={ctaHref}
                    className={ctaClass}
                  >
                    {ctaLabel}
                  </a>
                  <span className="rounded-full border border-border px-3 py-1.5 text-xs text-text-tertiary">
                    {priceLabel} · {priceNote}
                  </span>
                  {ctaLabel === "Download beta" && (
                    <span className="text-[11px] text-text-tertiary">Apple Silicon (M1+) required</span>
                  )}
                </>
              )}
            </div>
          </div>
        </section>

        <ModuleHowItWorks accent={accent} steps={steps} />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6">
            <p className="mb-8 text-sm font-medium text-text-tertiary">What you get</p>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 60}>
                  <h3 className="text-base font-semibold text-text">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {f.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {children}

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-semibold text-text">
              Ready for {name}?
            </h2>
            {waitlistModule ? (
              <div className="mt-6 flex justify-center">
                <WaitlistForm module={waitlistModule} accent={accent} />
              </div>
            ) : (
              <>
                <a
                  href={ctaHref}
                  className={`mt-6 ${ctaClass}`}
                >
                  {ctaLabel}
                </a>
                {ctaLabel === "Download beta" && (
                  <p className="mt-2 text-xs text-text-tertiary">Apple Silicon (M1+) required</p>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
