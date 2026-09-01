import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SafePersonalAI handles your email, calendar, and financial data — and what it never does with it.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="25 August 2026">
      <p>
        SafePersonalAI has two parts: local software that runs on your Mac,
        and a public website. This policy explains what each part processes,
        why, and the choices you have.
      </p>

      <Section title="We do not operate a server that stores your data">
        <p>
          SafePersonalAI is not a hosted service. There is no SafePersonalAI
          database holding your emails, messages, or financial records. Your
          data is read from your own Google account and your own Mac, and
          written back to files on your own machine (and, if you choose, your
          own Google Drive). We — the people who make SafePersonalAI — never
          receive a copy.
        </p>
      </Section>

      <Section title="Information submitted on our website">
        <p>
          If you join a product waitlist or contact us through the website,
          we receive the information you choose to submit (such as your
          email address and message). We use it only to operate the waitlist,
          respond to you, and send product updates where permitted. We do not
          sell it or use it for targeted advertising. You may ask us to remove
          it at any time using the contact address below.
        </p>
      </Section>

      <Section title="What it connects to, and why">
        <p>
          With your explicit Google authorization, SafePersonalAI can read
          and act on:
        </p>
        <ul className="ml-4 list-disc space-y-1.5 marker:text-text-tertiary">
          <li>
            <span className="text-text">Gmail</span> — to read messages and
            draft replies. It never sends a reply without you approving it.
          </li>
          <li>
            <span className="text-text">Google Calendar</span> — to read and
            create events on your own calendar. It never adds attendees or
            invites anyone.
          </li>
          <li>
            <span className="text-text">Google Drive</span> — to file
            documents (statements, invoices) into folders you control.
          </li>
          <li>
            <span className="text-text">iMessage</span> (read locally on your
            Mac) — to understand messages you send yourself as reminders, or
            from senders you&apos;ve explicitly trusted.
          </li>
        </ul>
        <p>
          You grant each of these individually during setup, and you can
          revoke access at any time from your Google Account&apos;s security
          settings — SafePersonalAI has no separate mechanism that survives
          that revocation.
        </p>
      </Section>

      <Section title="Bring-your-own AI key">
        <p>
          Understanding your messages requires sending their content to an
          AI provider — Anthropic, OpenAI, Google, or a model you run
          locally via Ollama. Ollama needs no account or API key; cloud options
          use your own key, and that content goes directly from your Mac to the provider you chose, under their
          own privacy policy and data-handling terms. We do not proxy,
          inspect, or retain a copy of anything sent that way.
        </p>
      </Section>

      <Section title="Nothing acts without your approval">
        <p>
          Every reply, calendar event, filed document, or payment record
          SafePersonalAI proposes is staged as a pending action. Nothing is
          sent, filed, or scheduled until you click Approve. This isn&apos;t
          a policy we ask you to trust blindly — it&apos;s a hard boundary
          in the local application. As with any software, you should still
          review each proposal and keep your device and connected accounts
          secure.
        </p>
      </Section>

      <Section title="No advertising, no analytics resale, no data brokers">
        <p>
          SafePersonalAI does not run ad tracking and does not sell, rent, or
          share your data with third parties for marketing purposes. If you
          purchase a paid module, payment is handled entirely by our
          Merchant of Record (e.g. Lemon Squeezy) — we receive confirmation
          that a purchase was made, not your card details.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If this policy changes in a way that matters — a new data
          connection, a new third party in the processing chain — we&apos;ll
          update this page and change the date above. Continuing to use
          SafePersonalAI after a change means you&apos;ve seen the update.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy or your data can be sent to the
          support address listed on our website or your purchase receipt.
        </p>
      </Section>
    </LegalLayout>
  );
}
