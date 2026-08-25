import Reveal from "./Reveal";

type Capability = {
  icon: string;
  title: string;
  friction: string;
};

const capabilities: Capability[] = [
  {
    icon: "✉️",
    title: "Inbox replies",
    friction: "No more re-reading a thread to remember what you already said.",
  },
  {
    icon: "📅",
    title: "Calendar events",
    friction: "No more opening the calendar app just to type in a date.",
  },
  {
    icon: "✅",
    title: "To-dos & reminders",
    friction: "No more a deadline you swore you'd remember, quietly missed.",
  },
  {
    icon: "🧾",
    title: "Bill & invoice tracking",
    friction: "No more digging through your inbox the night before it's due.",
  },
  {
    icon: "🎤",
    title: "Voice memo → action",
    friction: "No more typing out a reminder you already said out loud.",
  },
  {
    icon: "✈️",
    title: "Flight deal tracking",
    friction: "No more refreshing a fare-tracking tab out of habit.",
  },
  {
    icon: "📊",
    title: "Cash-flow forecast",
    friction: "No more finding out you're low on funds after it's already happened.",
  },
  {
    icon: "🗂️",
    title: "Document filing",
    friction: "No more \"which folder does this invoice go in\" guesswork.",
  },
  {
    icon: "📈",
    title: "Portfolio import",
    friction: "No more checking a broker app separately from everything else.",
  },
  {
    icon: "🔍",
    title: "Full reconciliation",
    friction: "No more wondering if a transaction just quietly went untracked.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="border-t border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="text-sm font-medium text-green">Everything, one place</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-text sm:text-4xl">
            Stop switching between ten apps just to keep your life running.
          </h2>
          <p className="mt-4 max-w-2xl text-text-secondary text-pretty">
            Email in one app, banking in another, your calendar in a third,
            a to-do list somewhere else entirely — the constant switching is
            its own kind of exhausting, and things fall through the cracks
            in the gaps between apps. This is the one queue that already
            checked all of them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 5) * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-bg-raised p-5 transition duration-300 hover:-translate-y-1 hover:border-border-strong">
                <span className="text-xl leading-none">{c.icon}</span>
                <h3 className="mt-3 text-sm font-semibold text-text">
                  {c.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-text-tertiary">
                  {c.friction}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-xs text-text-tertiary">
            No invented "hours saved per week" claim here — there's no real
            usage data yet to back one up, and a made-up number isn't worth
            the trust it costs. Judge it against your own inbox instead.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
