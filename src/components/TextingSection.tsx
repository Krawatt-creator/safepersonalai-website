import AppVideo from "@/components/AppVideo";
import type { Locale } from "@/i18n/config";
import type { TextingText } from "@/i18n/texting";

// Same order as the captions in src/i18n/texting.ts.
const films = ["todo", "month", "letter", "bring"] as const;

// Four short films: a message typed on an iPhone, and the app's answer.
export default function TextingSection({ lang, t }: { lang: Locale; t: TextingText }) {
  return (
    <section id="text-it" className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-green">{t.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-text-secondary text-pretty">{t.body}</p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {films.map((name, i) => (
            <div key={name}>
              <AppVideo name={name} lang={lang} label={t.films[i].title} />
              <h3 className="mt-5 text-base font-semibold text-text">{t.films[i].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{t.films[i].body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-xs text-text-tertiary">{t.note}</p>
      </div>
    </section>
  );
}
