import type { Metadata } from "next";
import ModulePageShell from "@/components/ModulePageShell";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "iPhone",
  alternates: { canonical: "/iphone" },
  description:
    "See and steer SafePersonalAI from your iPhone. Your Mac keeps doing the work and keeps your data; the phone is a locked window onto it, through your own iCloud.",
};

// Every claim here matches product_features/FEATURES.md ("iPhone app"). The app is
// built and runs on a test phone but is NOT in the App Store yet: this page says
// "coming" and collects interest. Change the call to action when it is released.
export default function IPhonePage() {
  return (
    <ModulePageShell
      accent="green"
      name="iPhone · coming soon"
      tagline="Your Mac does the work. Your iPhone says yes."
      intro="An optional companion for people who use SafePersonalAI on a Mac. Approve what is waiting, check your day and your money, add a to-do — from anywhere. Your data stays on your Mac; the phone shows a locked copy that travels through your own iCloud."
      priceLabel="€1.99"
      priceNote="a month · optional · cancel any time"
      ctaLabel="Notify me"
      ctaHref="/#pricing"
      waitlistModule="iphone"
      steps={[
        {
          title: "Pair once, with the camera",
          body: "Your Mac shows a code. Point the iPhone at it, confirm on the Mac. The two now share a key that never travelled anywhere.",
        },
        {
          title: "See what your Mac sees",
          body: "What is waiting for your OK, your week, your to-dos, your money — the last picture your Mac sent, even while the Mac sleeps.",
        },
        {
          title: "Say yes from anywhere",
          body: "Approve, reject, add, search. Your Mac carries it out as soon as it is awake and online, and tells the phone it is done.",
        },
      ]}
      features={[
        {
          title: "Not even Apple can read it",
          body: "Everything the two exchange is locked with the pairing key before it leaves the device. It travels through the private part of your own iCloud. We run no server, so there is nothing of yours on ours.",
        },
        {
          title: "Approve what is waiting",
          body: "A notification when something needs your OK, then Approve or Reject. Anything that needs a detail only the Mac can collect says so, instead of guessing.",
        },
        {
          title: "Your day and your week",
          body: "Events from Apple and Google Calendar, coming birthdays, and payments due this week.",
        },
        {
          title: "Your money, with the charts",
          body: "With Wealth: balance, spending by category for a month up to a year, budgets, the latest transactions, the next 30 days, and your investments with gain and loss.",
        },
        {
          title: "The phone cannot change your keys",
          body: "Keys, mail accounts and trusted senders are set on the Mac only. The phone can ask for a short, fixed list of things — and each request is checked by the Mac.",
        },
        {
          title: "Stop any time, lose nothing",
          body: "End the subscription and the phone goes quiet at the end of the paid month. Nothing on your Mac changes, and your pairing is kept if you come back.",
        },
      ]}
    >
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight text-text">Good to know before you subscribe</h2>
            <ul className="mt-6 space-y-4 text-text-secondary">
              <li>
                <span className="font-medium text-text">It needs the Mac app.</span> The iPhone app is a window onto
                SafePersonalAI on your Mac. It does not work on its own.
              </li>
              <li>
                <span className="font-medium text-text">Same iCloud account on both.</span> Mac and iPhone must be
                signed in to the same iCloud account, with a little free iCloud space.
              </li>
              <li>
                <span className="font-medium text-text">Reading works while the Mac sleeps; doing does not.</span>{" "}
                You see the last picture your Mac sent. What you ask for is carried out when the Mac is awake and
                online.
              </li>
              <li>
                <span className="font-medium text-text">Notifications can be late.</span> iOS decides how often it
                wakes an app in the background. A notification can arrive minutes after the fact, and may not come
                in Low Power Mode.
              </li>
              <li>
                <span className="font-medium text-text">Not in the App Store yet.</span> The app is built and being
                tested. Leave your address above and we tell you the day it is there.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </ModulePageShell>
  );
}
