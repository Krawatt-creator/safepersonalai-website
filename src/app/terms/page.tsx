import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

// DRAFT — reasonable placeholder terms written from the product's actual
// behavior (BYO-key, local-first, approval-gated actions). Not reviewed by
// a lawyer. Have this checked before it's the real terms customers agree to,
// especially the liability/warranty sections once paid modules are live.

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using SafePersonalAI.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="25 August 2026">
      <p>
        These terms cover your use of SafePersonalAI, software that runs
        locally on your own Mac. By downloading or running it, you agree to
        the terms below.
      </p>

      <Section title="What SafePersonalAI is">
        <p>
          SafePersonalAI is local software, not a hosted service. It connects
          to accounts and data sources you authorize (Gmail, Google Calendar,
          Google Drive, iMessage on your own Mac) and to an AI provider you
          choose and pay for directly. It proposes actions — replies, calendar
          events, filed documents, tracked payments — and takes them only
          after you approve each one.
        </p>
      </Section>

      <Section title="Your responsibilities">
        <ul className="ml-4 list-disc space-y-1.5 marker:text-text-tertiary">
          <li>
            You&apos;re responsible for reviewing what SafePersonalAI
            proposes before approving it — it drafts and suggests, you decide.
          </li>
          <li>
            You&apos;re responsible for your own AI provider account, its
            costs, and its usage terms. SafePersonalAI is not a party to
            your agreement with Anthropic, OpenAI, Google, or any other
            provider.
          </li>
          <li>
            You&apos;re responsible for keeping your Mac, your Google account,
            and any API keys you configure reasonably secure.
          </li>
        </ul>
      </Section>

      <Section title="Free and paid modules">
        <p>
          The Operational module (inbox, calendar, iMessage, to-dos, and the
          Pending Actions queue) is free. Additional modules (currently
          Travel and Wealth) may be offered as paid, one-time unlocks on top
          of the same install, processed through a third-party Merchant of
          Record. Pricing and availability for paid modules are set at
          purchase time and may change for future purchases.
        </p>
      </Section>

      <Section title="No warranty">
        <p>
          SafePersonalAI is provided &quot;as is,&quot; without warranty of
          any kind. AI-drafted content can be wrong, incomplete, or
          miscategorized — that is exactly why every action requires your
          explicit approval before anything happens. We are not liable for
          decisions you make by approving a proposed action, or for the
          accuracy of any third-party AI provider&apos;s output.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, SafePersonalAI and its
          maker are not liable for indirect, incidental, or consequential
          damages arising from use of the software. Nothing here limits
          liability where the law does not allow it to be limited.
        </p>
      </Section>

      <Section title="Changes">
        <p>
          We may update these terms as the product changes — a new module,
          a new provider integration, a new pricing mechanism. Material
          changes will be reflected by updating the date on this page.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms can be sent to the support address
          listed on your purchase receipt, or on the SafePersonalAI GitHub
          repository.
        </p>
      </Section>
    </LegalLayout>
  );
}
