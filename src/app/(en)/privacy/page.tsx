import type { Metadata } from "next";
import Link from "next/link";
import LegalLayout from "@/components/LegalLayout";
import { OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
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
    <LegalLayout title="Privacy Policy" updated="10 October 2026">
      <p>
        SafePersonalAI has two parts: local software that runs on your Mac,
        and a public website. This policy explains what each part processes,
        why, and the choices you have. The controller responsible for the
        website is {OPERATOR.name}, {OPERATOR.country}; the full details are
        in the{" "}
        <Link href="/impressum" className="text-text underline underline-offset-4">
          Impressum
        </Link>
        .
      </p>

      <Section title="We do not operate a server that stores your data">
        <p>
          SafePersonalAI is not a hosted service. There is no SafePersonalAI
          database holding your emails, messages, or financial records. Your
          data is read from the mail and calendar accounts you connect and
          from your own Mac, and written to files on your own machine (and,
          if you switch it on, copies in your own iCloud Drive or Google
          Drive). We never receive a copy.
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
          Only what you connect yourself during setup. SafePersonalAI can
          then read and act on:
        </p>
        <ul className="ml-4 list-disc space-y-1.5 marker:text-text-tertiary">
          <li>
            <span className="text-text">Gmail and Apple Mail</span> — to
            read messages. It never sends, deletes, or changes mail.
          </li>
          <li>
            <span className="text-text">Google Calendar and Apple Calendar</span>{" "}
            — to read your events and add the ones you approve. It never adds
            attendees or invites anyone.
          </li>
          <li>
            <span className="text-text">iCloud Drive or Google Drive</span>{" "}
            (optional, off until you switch it on) — to save a copy of the
            statements you import and of your tax export into its own
            SafePersonalAI folder. With Google Drive it can only see files it
            created itself.
          </li>
          <li>
            <span className="text-text">iMessage</span> (read locally on your
            Mac) — to understand messages you send yourself as reminders, or
            from senders you&apos;ve explicitly trusted.
          </li>
        </ul>
        <p>
          You grant each of these individually during setup, and you can
          take access back at any time: in your Google Account&apos;s security
          settings, or in macOS System Settings under Privacy &amp; Security.
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
          Calendar events and tasks that SafePersonalAI works out from your
          mail are staged as pending actions and wait until you click
          Approve. Three things are added directly, are clearly marked, and
          can be undone: transactions and balances from your own bank&apos;s
          alert emails, Apple Pay taps you set up yourself, and a few
          reminders (a letter&apos;s deadline, a card&apos;s payment date). You can
          also choose which kinds of action run without asking; that is off
          until you switch it on. SafePersonalAI never sends an email, pays,
          or moves money. As with any software, you should still
          review each proposal and keep your device and connected accounts
          secure.
        </p>
      </Section>

      <Section title="The iPhone app">
        <p>
          The optional iPhone app shows what your Mac prepared. The two talk
          through the private part of your own iCloud account, and everything
          stored there is locked with a key that only your Mac and your
          iPhone hold. We run no server for it and cannot read it.
        </p>
      </Section>

      <Section title="Hosting of this website">
        <p>
          This website is delivered by Cloudflare. Like every web host,
          Cloudflare processes your IP address and basic request data to
          deliver the pages and keep them secure. The website sets no
          advertising or tracking cookies.
        </p>
        <p>
          To see how many people visit and which pages they open, we use
          Cloudflare Web Analytics. It sets no cookies, stores nothing in
          your browser and does not follow you across websites. We see
          totals only, such as visits per page, per country and per
          referring website, never an individual visitor. The download
          button leads to a page of this website first, so a download is
          counted as one visit to that page.
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Under the GDPR you can ask for access to, correction of, or deletion
          of the personal data we hold about you (in practice: an email
          address you submitted and messages you sent us), object to its use,
          and complain to a data protection authority. Write to the contact
          address below.
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
          Questions about this policy or your data, and requests to remove
          what you submitted on this website, can be sent to{" "}
          <a href="mailto:support@safepersonalai.com" className="text-text underline underline-offset-4">
            support@safepersonalai.com
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
