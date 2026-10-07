import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Impressum (Legal notice)",
  alternates: { canonical: "/impressum" },
  description: "Who operates SafePersonalAI and how to reach them.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Operator() {
  return (
    <address className="not-italic text-text">
      {OPERATOR.name}
      {OPERATOR.address.map((line) => (
        <span key={line}>
          <br />
          {line}
        </span>
      ))}
      <br />
      {OPERATOR.country}
    </address>
  );
}

function Mail() {
  return (
    <a href={`mailto:${OPERATOR.email}`} className="text-text underline underline-offset-4">
      {OPERATOR.email}
    </a>
  );
}

// English first, then the same in German: the notice is a German legal
// requirement, and most visitors read English.
export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum (Legal notice)" updated="7 October 2026">
      <Section title="Operator of this website and provider of SafePersonalAI">
        <Operator />
        <p>
          SafePersonalAI is offered by a private individual, not by a company.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Email: <Mail />
        </p>
      </Section>

      <Section title="Responsible for the content">
        <p>{OPERATOR.name}, at the address above.</p>
      </Section>

      <Section title="Purchases">
        <p>
          When buying opens, purchases are handled by Lemon Squeezy as the
          Merchant of Record: Lemon Squeezy is the seller of the transaction
          and issues the invoice. The iPhone app is sold through Apple&apos;s
          App Store.
        </p>
      </Section>

      <Section title="Consumer dispute resolution">
        <p>
          We are neither obliged nor willing to take part in dispute
          resolution proceedings before a consumer arbitration board. Please
          write to us first; we answer every message.
        </p>
      </Section>

      <Section title="Trademarks">
        <p>
          Mac, macOS, iPhone, iMessage, Apple Mail and Apple Calendar are
          trademarks of Apple Inc. Gmail, Google Calendar and Google Drive
          are trademarks of Google LLC. SafePersonalAI is not affiliated with
          or endorsed by Apple or Google.
        </p>
      </Section>

      <div lang="de" className="space-y-8 border-t border-border pt-8">
        <Section title="Angaben gemäß § 5 DDG">
          <Operator />
          <p>
            SafePersonalAI wird von einer Privatperson angeboten, nicht von
            einer Gesellschaft.
          </p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail: <Mail />
          </p>
        </Section>

        <Section title="Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)">
          <p>{OPERATOR.name}, Anschrift wie oben.</p>
        </Section>

        <Section title="Verbraucherstreitbeilegung">
          <p>
            Wir sind nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen. Schreiben Sie uns
            bitte zuerst; wir beantworten jede Nachricht.
          </p>
        </Section>
      </div>
    </LegalLayout>
  );
}
