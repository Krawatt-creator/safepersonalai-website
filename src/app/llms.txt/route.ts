import { answers } from "@/lib/answers-data";
import { APP_VERSION, OFFER_VARS, SITE_URL } from "@/lib/offer";
import { fill, localeNames, localePath, translatedLocales } from "@/i18n/config";
import { enAbout } from "@/i18n/about/en";

export const dynamic = "force-static";

// /llms.txt: the product in plain text for AI assistants. It is built from the
// same sentences and numbers as the "What is SafePersonalAI?" page, so the
// two cannot disagree.
export function GET() {
  const vars = { ...OFFER_VARS, version: APP_VERSION };
  const about = "/what-is-safepersonalai";
  const lines = [
    "# SafePersonalAI",
    "",
    `> ${enAbout.lead}`,
    "",
    "## Facts",
    "",
    ...enAbout.facts.map((f) => `- ${f.label}: ${fill(f.value, vars)}`),
    "",
    ...enAbout.sections.flatMap((s) => [
      `## ${s.title}`,
      "",
      ...s.paragraphs.flatMap((p) => [fill(p, vars), ""]),
    ]),
    `## ${enAbout.notForTitle}`,
    "",
    ...enAbout.notForItems.map((i) => `- ${i}`),
    "",
    "## Pages",
    "",
    `- [What is SafePersonalAI?](${SITE_URL}${about}): the full description`,
    `- [Home](${SITE_URL}/): overview, prices and frequently asked questions`,
    `- [Base module](${SITE_URL}/modules/operational): email, calendar, to-dos, iMessage notes, your own rules`,
    `- [Travel module](${SITE_URL}/modules/travel): flight price tracking and trips from booking emails`,
    `- [Wealth module](${SITE_URL}/modules/wealth): any bank's statement, spending, forecast, budgets, investments`,
    `- [iPhone app](${SITE_URL}/iphone): companion app, not yet released`,
    `- [Privacy policy](${SITE_URL}/privacy)`,
    `- [Terms](${SITE_URL}/terms)`,
    "",
    "## Answers",
    "",
    ...answers.map((a) => `- [${a.question}](${SITE_URL}/answers/${a.slug}): ${a.description}`),
    "",
    "## Other languages",
    "",
    ...translatedLocales.map(
      (l) => `- [${localeNames[l]}](${SITE_URL}${localePath(l, about)})`,
    ),
    "",
    "## Contact",
    "",
    "- support@safepersonalai.com",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
