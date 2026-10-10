import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { ANSWERS_UPDATED, answers, getAnswer } from "@/lib/answers-data";
import { downloadPage, DOWNLOAD_NOTE, OFFER_VARS, SITE_URL } from "@/lib/offer";
import { fill } from "@/i18n/config";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return answers.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const answer = getAnswer(slug);
  if (!answer) return { title: "Answers" };
  return {
    title: { absolute: `${answer.metaTitle} — SafePersonalAI` },
    description: answer.description,
    alternates: { canonical: `/answers/${answer.slug}` },
  };
}

export default async function AnswerPage({ params }: Props) {
  const { slug } = await params;
  const answer = getAnswer(slug);
  if (!answer) notFound();
  const url = `${SITE_URL}/answers/${answer.slug}`;
  const short = fill(answer.short, OFFER_VARS);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": url,
          url,
          inLanguage: "en",
          headline: answer.question,
          description: answer.description,
          abstract: short,
          dateModified: ANSWERS_UPDATED,
          author: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          about: { "@id": `${SITE_URL}/#app` },
        }}
      />
      <Nav />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-20">
          <Link href="/answers" className="text-sm text-text-secondary transition hover:text-text">
            ← All answers
          </Link>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {answer.question}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text text-pretty">{short}</p>

          {answer.sections.map((s) => (
            <section key={s.title} className="mt-12">
              <h2 className="text-2xl font-semibold tracking-tight text-text">{s.title}</h2>
              {s.paragraphs && (
                <div className="mt-4 space-y-4 leading-relaxed text-text-secondary">
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{fill(p, OFFER_VARS)}</p>
                  ))}
                </div>
              )}
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-text-secondary">
                  {s.bullets.map((b, i) => (
                    <li key={i}>{fill(b, OFFER_VARS)}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-14 border-t border-border pt-10">
            <h2 className="text-xl font-semibold tracking-tight text-text">Read more</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {answer.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="font-medium text-text underline-offset-4 hover:underline">
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a href={downloadPage()} className="site-cta-primary">
                Download the free beta
              </a>
              <p className="mt-3 text-xs text-text-tertiary">{DOWNLOAD_NOTE}</p>
            </div>
            <p className="mt-10 text-xs text-text-tertiary">
              Written by the makers of SafePersonalAI. Last updated {ANSWERS_UPDATED}.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
