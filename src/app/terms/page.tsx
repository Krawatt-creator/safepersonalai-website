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
          to accounts and data sources you authorize (Gmail, Outlook, Apple
          Mail, Google Calendar, Google Drive, iCloud Drive, local folders,
          and iMessage on your own Mac) and to an AI provider you choose and
          pay for directly. An optional, explicit one-to-three-month
          historical-mail scan recognizes recurring financial senders; it
          does not silently import historical transactions. It proposes actions — replies, calendar
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
          Pending Actions queue) is the base product. Modules are sold as
          one-time purchases, not recurring subscriptions. Current planned
          prices are Base €49, Travel €29, Finance €29, or €100 for the
          current full package (Base + Travel + Finance). Future modules may
          have their own one-time prices. The final price, taxes, refund
          terms, and availability shown at checkout control that purchase.
          Payments are processed by our Merchant of Record; we do not store
          your full payment-card details.
        </p>
      </Section>

      <Section title="License scope and trial">
        <p>
          New installs include a seven-day trial. After the trial, continued
          use requires the applicable one-time license. A purchased module is
          licensed to you for use on your own Mac(s), up to the activation
          limit shown at checkout. It is not permission to redistribute the
          application or share a license key. You agree not to circumvent,
          disable, or bypass license or trial checks. A license activates
          against a specific Mac; moving to another Mac may require
          deactivation and reactivation under the purchase&apos;s activation
          limit.
        </p>
        <p>
          If a trial ends or a module becomes unentitled, its existing local
          data is preserved and is not deleted. Access can be restored by
          activating the applicable license.
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

      <Section title="Eligibility">
        <p>
          You must be at least 18 years old, or the age of majority where
          you live, to purchase or use SafePersonalAI.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of Germany, without regard
          to its conflict-of-laws rules. If you are a consumer resident in
          the European Union, this does not deprive you of any protection
          you are entitled to under the mandatory consumer-protection laws
          of your own country of residence.
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
          listed on our website or your purchase receipt.
        </p>
      </Section>
    </LegalLayout>
  );
}
