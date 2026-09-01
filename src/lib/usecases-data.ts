import type { Case } from "@/components/UseCaseCard";

export type Topic = {
  slug: string;
  icon: string;
  title: string;
  friction: string;
  intro: string;
  module: "operational" | "travel" | "wealth";
  cases: Case[];
};

export const moduleMeta = {
  operational: {
    name: "Base",
    label: "Base module",
    description: "Everyday inbox, calendar, task, voice, and rule-based workflows.",
    accent: "green",
  },
  travel: {
    name: "Travel",
    label: "Add-on module",
    description: "Bookings, fare monitoring, and calendar-aware trip planning.",
    accent: "violet",
  },
  wealth: {
    name: "Wealth",
    label: "Add-on module",
    description: "Bills, cash-flow visibility, recurring costs, and portfolio records.",
    accent: "green",
  },
} as const;

// Grounded in real product capabilities, not invented — same discipline
// CapabilitiesSection.tsx's own "no invented hours-saved number" note
// already establishes for this site. Every scenario here mirrors an
// actual pipeline this product runs (see the main agent's own CLAUDE.md
// for the underlying mechanics), rewritten as a concrete before/after a
// visitor can picture themselves in.
export const topics: Topic[] = [
  {
    slug: "inbox-replies",
    icon: "✉️",
    title: "Inbox replies",
    friction: "No more re-reading a thread to remember what you already said.",
    intro:
      "Drafts a reply in the same language the message arrived in, matching how you actually write to that kind of person — never sends on its own.",
    module: "operational",
    cases: [
      {
        key: "professor",
        inputIcon: "🎓",
        inputLabel: "Email from your professor",
        inputSub:
          "“Could you resend the report with the corrected figures by Friday?”",
        outputIcon: "📝",
        outputTitle: "A formal reply drafted, attachment noted",
        outputSub: "Matches the register you actually use for academic email",
        accent: "green",
      },
      {
        key: "government",
        inputIcon: "🏛️",
        inputLabel: "Letter from the Finanzamt",
        inputSub: "A routine request for a missing document, in German",
        outputIcon: "📝",
        outputTitle: "A formal German reply drafted, right terms used",
        outputSub: "Same careful register you'd use for official mail",
        accent: "green",
      },
      {
        key: "personal",
        inputIcon: "💬",
        inputLabel: "Message from a friend",
        inputSub: "“Can we move Saturday to Sunday instead?”",
        outputIcon: "📝",
        outputTitle: "A quick, casual reply drafted",
        outputSub: "Sits in your drafts — sends only if you hit send",
        accent: "green",
      },
    ],
  },
  {
    slug: "email-to-task",
    icon: "📥",
    title: "Email → task",
    friction: "No more important request disappearing underneath newer email.",
    intro:
      "Recognizes when an email asks you to do something, extracts only the deadline that was actually stated, and places the proposed task in one review queue.",
    module: "operational",
    cases: [
      {
        key: "report-deadline",
        inputIcon: "✉️",
        inputLabel: "Request from a colleague",
        inputSub: "“Please send the revised report by Friday afternoon.”",
        outputIcon: "✅",
        outputTitle: "Send revised report — due Friday afternoon",
        outputSub: "Source email stays linked so you can return to the context",
        accent: "green",
      },
      {
        key: "no-invented-deadline",
        inputIcon: "✉️",
        inputLabel: "A request with no date",
        inputSub: "“Could you review this when you have a moment?”",
        outputIcon: "✅",
        outputTitle: "Review the document — no deadline",
        outputSub: "The assistant does not invent urgency the sender never stated",
        accent: "green",
      },
    ],
  },
  {
    slug: "calendar-events",
    icon: "📅",
    title: "Calendar events",
    friction: "No more opening the calendar app just to type in a date.",
    intro:
      "Reads a date and time out of an ordinary message — in English, German, or Turkish — and stages a calendar block on your own calendar. Never invites anyone; there's no attendees field to misuse.",
    module: "operational",
    cases: [
      {
        key: "doctor",
        inputIcon: "💬",
        inputLabel: "iMessage to yourself",
        inputSub: "“Yarın 19:10 dişçi randevusu” (a typo'd “tomorrow” in Turkish)",
        outputIcon: "🗓️",
        outputTitle: "Dentist appointment added, tomorrow at 19:10",
        outputSub: "Understood despite the misspelling",
        accent: "violet",
      },
      {
        key: "recurring",
        inputIcon: "💬",
        inputLabel: "A custom rule you set once",
        inputSub: "“When I see 'my son tennis', block Saturday 11:00”",
        outputIcon: "🗓️",
        outputTitle: "This week's tennis block created automatically",
        outputSub: "Defaults to Saturday of the week the message arrives — you can override it",
        accent: "violet",
      },
    ],
  },
  {
    slug: "todos-reminders",
    icon: "✅",
    title: "To-dos & reminders",
    friction: "No more a deadline you swore you'd remember, quietly missed.",
    intro:
      "Turns an offhand “remind me to...” into a tracked to-do with a real deadline, and nudges you again as that deadline gets close — never more than once per cooldown.",
    module: "operational",
    cases: [
      {
        key: "handwerker",
        inputIcon: "💬",
        inputLabel: "iMessage to yourself",
        inputSub: "“remind me to call the Handwerker”",
        outputIcon: "✅",
        outputTitle: "To-do created, no deadline forced on it",
        outputSub: "Shows up on your list — nudges you only if you add a date",
        accent: "green",
      },
      {
        key: "deadline",
        inputIcon: "💬",
        inputLabel: "iMessage, written in Turkish",
        inputSub: "“Çıktıları al 17 ağustos'dan önce”",
        outputIcon: "⏰",
        outputTitle: "To-do due 17 August, color-coded as it nears",
        outputSub: "Turns yellow then red automatically as the date approaches",
        accent: "green",
      },
    ],
  },
  {
    slug: "bill-invoice-tracking",
    icon: "🧾",
    title: "Bill & invoice tracking",
    friction: "No more digging through your inbox the night before it's due.",
    intro:
      "A photographed bill, an emailed invoice, or an instalment plan you mention — all become a tracked payment with a real due date, feeding your cash-flow forecast automatically.",
    module: "wealth",
    cases: [
      {
        key: "parking",
        inputIcon: "📷",
        inputLabel: "Photo, no caption",
        inputSub: "A parking fine, dated, “payable within one week”",
        outputIcon: "💳",
        outputTitle: "Tracked, due date computed from the payment term",
        outputSub: "Deadline math done in code, never guessed by a model",
        accent: "green",
      },
      {
        key: "instalment",
        inputIcon: "💬",
        inputLabel: "iMessage to yourself",
        inputSub: "“amazon 5 months 20 euro each from TR starting 20.08”",
        outputIcon: "💳",
        outputTitle: "Five instalments scheduled, spaced a month apart",
        outputSub: "Each one lands on the cash-flow timeline on its own date",
        accent: "green",
      },
    ],
  },
  {
    slug: "voice-memo-action",
    icon: "🎤",
    title: "Voice memo → action",
    friction: "No more typing out a reminder you already said out loud.",
    intro:
      "Transcribes a voice message entirely on your own Mac — nothing uploaded anywhere for this step — then reads the transcript the same way a typed message is read.",
    module: "operational",
    cases: [
      {
        key: "voice",
        inputIcon: "🎤",
        inputLabel: "Voice message · 0:14",
        inputSub: "“Reminder to myself — doctor Thursday, three o'clock…”",
        outputIcon: "📅",
        outputTitle: "“Dr. Kaya — Thu, 15:00” added to your calendar",
        outputSub: "Transcribed locally, understood, staged for your approval",
        accent: "violet",
      },
      {
        key: "unclear-word",
        inputIcon: "🎤",
        inputLabel: "Voice message, noisy background",
        inputSub: "A real clinic recording, one drug name hard to catch",
        outputIcon: "🔍",
        outputTitle: "Transcript kept, that one word flagged [unclear]",
        outputSub: "Confident words stay plain text — only genuine doubt gets flagged",
        accent: "violet",
      },
    ],
  },
  {
    slug: "custom-rules",
    icon: "⚙️",
    title: "Your own simple rules",
    friction: "No more changing your routine to fit someone else's automation template.",
    intro:
      "Lets you teach the assistant a small, understandable rule in your own words. Every match remains visible and follows the same approval boundary as the rest of the product.",
    module: "operational",
    cases: [
      {
        key: "family-activity",
        inputIcon: "⚙️",
        inputLabel: "Rule you create once",
        inputSub: "When a message contains “tennis lesson”, prepare Saturday at 11:00",
        outputIcon: "📅",
        outputTitle: "The next matching message prepares the calendar block",
        outputSub: "You can inspect, change, disable, or remove the rule at any time",
        accent: "violet",
      },
    ],
  },
  {
    slug: "booking-to-itinerary",
    icon: "🧳",
    title: "Booking → itinerary",
    friction: "No more copying flight and hotel details into three different places.",
    intro:
      "Turns a genuine booking confirmation into a readable trip summary and proposed calendar entries, while treating every email body as untrusted input.",
    module: "travel",
    cases: [
      {
        key: "flight-confirmation",
        inputIcon: "✉️",
        inputLabel: "Airline confirmation email",
        inputSub: "Flight numbers, terminals, local departure times, and booking reference",
        outputIcon: "🧳",
        outputTitle: "A clean itinerary with proposed outbound and return events",
        outputSub: "Original time zones and source details remain visible for review",
        accent: "violet",
      },
    ],
  },
  {
    slug: "flight-deal-tracking",
    icon: "✈️",
    title: "Flight deal tracking",
    friction: "No more refreshing a fare-tracking tab out of habit.",
    intro:
      "Watches routes you've told it to care about and only ever messages you when a real fare drops under the price you set — silence means nothing changed, not that it's broken.",
    module: "travel",
    cases: [
      {
        key: "alert",
        inputIcon: "📊",
        inputLabel: "A route you're tracking",
        inputSub: "Hannover → Antalya, alert set under 250 EUR",
        outputIcon: "✈️",
        outputTitle: "“187 EUR — under your alert”, sent once, not repeated",
        outputSub: "Compared against the typical range for that route, not just a raw price",
        accent: "green",
      },
    ],
  },
  {
    slug: "calendar-aware-travel",
    icon: "🗓️",
    title: "Calendar-aware travel",
    friction: "No more finding a good fare and then discovering the dates do not work.",
    intro:
      "Checks the travel window against your own calendar before presenting an option, without inviting anyone or changing existing events.",
    module: "travel",
    cases: [
      {
        key: "free-weekend",
        inputIcon: "📅",
        inputLabel: "A flexible weekend trip",
        inputSub: "Berlin or Hamburg, any free weekend next month",
        outputIcon: "✈️",
        outputTitle: "Options shown only for weekends that are actually open",
        outputSub: "Calendar access is used for availability, not to notify other people",
        accent: "violet",
      },
    ],
  },
  {
    slug: "cashflow-forecast",
    icon: "📊",
    title: "Cash-flow forecast",
    friction: "No more finding out you're low on funds after it's already happened.",
    intro:
      "Projects your accounts forward using only payments you've actually scheduled — never an assumed return, never a guessed number — and warns you before a real shortfall, not after.",
    module: "wealth",
    cases: [
      {
        key: "guardrail",
        inputIcon: "📉",
        inputLabel: "A 6-month projection, recomputed automatically",
        inputSub: "Your safety threshold, and every scheduled payment between now and then",
        outputIcon: "⚠️",
        outputTitle: "“Guardrail breach projected in October”",
        outputSub: "Flagged months ahead of time, not the week it happens",
        accent: "green",
      },
    ],
  },
  {
    slug: "recurring-cost-watch",
    icon: "🔁",
    title: "Recurring cost watch",
    friction: "No more subscriptions quietly blending into the background.",
    intro:
      "Groups repeating charges, shows what they cost over time, and highlights a meaningful change for review without cancelling or contacting a provider.",
    module: "wealth",
    cases: [
      {
        key: "price-change",
        inputIcon: "🏦",
        inputLabel: "A recurring monthly charge",
        inputSub: "The same provider rises from 9.99 EUR to 14.99 EUR",
        outputIcon: "🔁",
        outputTitle: "Price increase highlighted in your recurring-cost view",
        outputSub: "You decide whether to keep, investigate, or cancel it yourself",
        accent: "green",
      },
    ],
  },
  {
    slug: "document-filing",
    icon: "🗂️",
    title: "Document filing",
    friction: "No more “which folder does this invoice go in” guesswork.",
    intro:
      "Reads a document, works out which of your own Drive folders it belongs in, and asks before it ever writes anything there — a document it can't confidently place goes to one clearly-labeled holding folder, never lost.",
    module: "wealth",
    cases: [
      {
        key: "utility",
        inputIcon: "🧾",
        inputLabel: "An electricity bill, emailed as a PDF",
        inputSub: "From your utility provider, this month's statement",
        outputIcon: "📁",
        outputTitle: "Filed to your own “Electricity” folder, on approval",
        outputSub: "You see exactly where it landed before it's ever moved",
        accent: "violet",
      },
      {
        key: "unsorted",
        inputIcon: "🧾",
        inputLabel: "A document that matches no known category",
        inputSub: "Something genuinely new, no existing rule fits",
        outputIcon: "📥",
        outputTitle: "Filed to a plain “Unsorted Inbox” folder",
        outputSub: "Never dropped — just waiting for you to move it once",
        accent: "violet",
      },
    ],
  },
  {
    slug: "portfolio-import",
    icon: "📈",
    title: "Portfolio import",
    friction: "No more checking a broker app separately from everything else.",
    intro:
      "Reads a transaction export you already have and folds it into one view, deduplicated against what it already knows — re-importing the same export twice changes nothing.",
    module: "wealth",
    cases: [
      {
        key: "export",
        inputIcon: "📄",
        inputLabel: "A transaction export, sent to yourself",
        inputSub: "Your broker's own CSV, emailed as an attachment",
        outputIcon: "📈",
        outputTitle: "Holdings and transactions merged into one dashboard",
        outputSub: "Every entry deduped by its own transaction id",
        accent: "green",
      },
    ],
  },
  {
    slug: "full-reconciliation",
    icon: "🔍",
    title: "Full reconciliation",
    friction: "No more wondering if a transaction just quietly went untracked.",
    intro:
      "Every inflow and outflow gets bucketed — nothing dropped, nothing double-counted. The deep-dive ledger stays collapsed by default; it's detail, not the headline, but it's always there.",
    module: "wealth",
    cases: [
      {
        key: "reconcile",
        inputIcon: "🏦",
        inputLabel: "A month's worth of transactions",
        inputSub: "Every euro in, every euro out, across every account",
        outputIcon: "✅",
        outputTitle: "250 distinct payees, every one bucketed",
        outputSub: "One collapsed ledger — expand it any time you want the receipts",
        accent: "violet",
      },
    ],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
