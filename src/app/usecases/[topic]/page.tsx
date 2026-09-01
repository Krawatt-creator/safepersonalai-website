import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import UseCaseCard from "@/components/UseCaseCard";
import { getTopic, moduleMeta, topics } from "@/lib/usecases-data";

// Static export needs every dynamic-route value known at build time — see
// node_modules/next/dist/docs/01-app/02-guides/static-exports.md's own
// "Unsupported Features" list (a dynamic route without generateStaticParams
// isn't supported under output:'export'). 10 topics today; adding an 11th
// to usecases-data.ts is the only change needed to grow this list.
export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

// params is a Promise in this Next version (15+) — see node_modules/next/
// dist/docs/01-app/03-api-reference/03-file-conventions/dynamic-routes.md's
// own "Behavior" section, one of the breaking-from-training-data changes
// AGENTS.md warns about. Both this and the page component below must
// await it rather than destructure it synchronously.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) return { title: "Use Cases" };
  return {
    title: `${topic.title} — Use Cases`,
    description: topic.intro,
  };
}

export default async function UseCaseTopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic: slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const moduleInfo = moduleMeta[topic.module];

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="bg-radial-glow border-b border-border py-20">
          <div className="mx-auto max-w-4xl px-6">
            <Link
              href="/usecases"
              className="text-sm text-text-secondary transition hover:text-text"
            >
              ← All use cases
            </Link>
            <div className="mt-6 flex items-center gap-2">
              <span className="text-2xl leading-none">{topic.icon}</span>
              <p className="text-sm font-medium text-violet">
                {moduleInfo.name} · {moduleInfo.label}
              </p>
            </div>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-balance text-text sm:text-5xl">
              {topic.friction}
            </h1>
            <p className="mt-5 max-w-xl text-text-secondary text-pretty">
              {topic.intro}
            </p>
            <p className="mt-5 max-w-xl text-xs leading-relaxed text-text-tertiary">
              Grounded in a working personal-system pipeline. Inclusion in a
              commercial release is confirmed in that release&apos;s module list.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {topic.cases.map((c, i) => (
                <Reveal key={c.key} delay={i * 90}>
                  <UseCaseCard c={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border py-16 text-center">
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="text-2xl font-semibold text-text">
              See what it does with your own inbox.
            </h2>
            <Link
              href="/#pricing"
              className="site-cta-primary mt-6"
            >
              Get SafePersonalAI
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
