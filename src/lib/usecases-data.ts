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
    description: "Everyday inbox, calendar, tasks, and your own rules.",
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
    description: "Statements from any bank, spending, a forecast, budgets, and investments.",
    accent: "green",
  },
} as const;

// Every scenario says only what product_features/FEATURES.md says the Mac app
// does (checked 2026-10-07). Change the catalog first, then this file.
// Taken off the site 2026-10-05: these describe things the Mac app does not
// do yet (they come from the private system it grew out of). The text is kept
// here; remove a slug from this list when its feature is in the app and in
// product_features/FEATURES.md.
const NOT_IN_THE_APP_YET = ["inbox-replies", "voice-memo-action", "document-filing", "full-reconciliation"];

const allTopics: Topic[] = [
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
      "Recognizes when an email asks you to do something, takes only the deadline the email actually states, and puts the proposed to-do in your review list.",
    module: "operational",
    cases: [
      {
        key: "report-deadline",
        inputIcon: "✉️",
        inputLabel: "Request from a colleague",
        inputSub: "“Please send the revised report by Friday afternoon.”",
        outputIcon: "✅",
        outputTitle: "Send revised report — due Friday afternoon",
        outputSub: "Waits in your review list until you approve it",
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
      "Reads the date and time out of an appointment email and prepares an entry for Google Calendar or Apple Calendar. Nothing is added until you approve it, and it never invites anyone.",
    module: "operational",
    cases: [
      {
        key: "doctor",
        inputIcon: "✉️",
        inputLabel: "Email from your dentist",
        inputSub: "“Your appointment is on Tuesday at 10:00.”",
        outputIcon: "🗓️",
        outputTitle: "Dentist, Tuesday 10:00, ready to approve",
        outputSub: "Approve it, change the day or time first, or reject it",
        accent: "violet",
      },
      {
        key: "moved",
        inputIcon: "✉️",
        inputLabel: "A second email, a week later",
        inputSub: "“Your appointment has moved to Thursday.”",
        outputIcon: "🗓️",
        outputTitle: "A change to the existing entry is proposed",
        outputSub: "The entry is updated, not added a second time",
        accent: "violet",
      },
      {
        key: "recurring",
        inputIcon: "⚙️",
        inputLabel: "A custom rule you set once",
        inputSub: "When a message mentions “tennis lesson”, prepare Saturday 11:00",
        outputIcon: "🗓️",
        outputTitle: "The next matching message prepares the calendar block",
        outputSub: "It waits for your approval like everything else",
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
      "Text yourself “remind me to…” and it becomes a to-do with the date you gave. Colours show what is fine, due soon or overdue, and a morning briefing lists what is on today.",
    module: "operational",
    cases: [
      {
        key: "handwerker",
        inputIcon: "💬",
        inputLabel: "iMessage to yourself",
        inputSub: "“remind me to call the Handwerker”",
        outputIcon: "✅",
        outputTitle: "To-do created, no deadline forced on it",
        outputSub: "Shows up on your list; add a date whenever you like",
        accent: "green",
      },
      {
        key: "repeating",
        inputIcon: "💬",
        inputLabel: "iMessage to yourself",
        inputSub: "“Remind me every Tuesday to take out the trash”",
        outputIcon: "🔁",
        outputTitle: "A to-do that comes back every Tuesday",
        outputSub: "Tick it off and next week's appears by itself",
        accent: "green",
      },
      {
        key: "deadline",
        inputIcon: "💬",
        inputLabel: "iMessage, written in Turkish",
        inputSub: "“Çıktıları al 17 ağustos'dan önce”",
        outputIcon: "⏰",
        outputTitle: "To-do due 17 August",
        outputSub: "Its colour changes when it is due soon, and again when it is overdue",
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
      "A bill that comes by email every month is proposed as a recurring bill for you to approve. A card statement's pay-by date becomes a to-do. Payments you plan yourself on the Wealth page show up in the forecast.",
    module: "wealth",
    cases: [
      {
        key: "emailed-bill",
        inputIcon: "✉️",
        inputLabel: "Monthly invoice by email",
        inputSub: "Your phone provider: this month's invoice, 44.95 EUR",
        outputIcon: "💳",
        outputTitle: "Proposed as a recurring bill, 44.95 EUR a month",
        outputSub: "You confirm the amount and the start date before it is tracked",
        accent: "green",
      },
      {
        key: "card-due",
        inputIcon: "📄",
        inputLabel: "A credit-card statement you import",
        inputSub: "It states the amount due and the pay-by date",
        outputIcon: "✅",
        outputTitle: "A to-do: pay the card by that date",
        outputSub: "With the amount due and the minimum payment from the statement",
        accent: "green",
      },
      {
        key: "instalment",
        inputIcon: "➕",
        inputLabel: "“Add payment” on the Wealth page",
        inputSub: "20 EUR every month, five times, from your current account",
        outputIcon: "📊",
        outputTitle: "Five planned payments in the forecast",
        outputSub: "Each shown with the account balance right after it",
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
      "Turns a flight or hotel confirmation email into a stored trip and proposed calendar entries. Instructions inside an email are never followed.",
    module: "travel",
    cases: [
      {
        key: "flight-confirmation",
        inputIcon: "✉️",
        inputLabel: "Airline confirmation email",
        inputSub: "Flight numbers, terminals, local departure times, and booking reference",
        outputIcon: "🧳",
        outputTitle: "A trip with proposed outbound and return calendar entries",
        outputSub: "Approving it also adds a packing to-do and a check-in to-do",
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
      "Checks the routes you track once a day and sends one notification when a price is under the limit you set. It needs your own free flight-search key.",
    module: "travel",
    cases: [
      {
        key: "alert",
        inputIcon: "📊",
        inputLabel: "A route you're tracking",
        inputSub: "Hannover → Antalya, alert set under 250 EUR",
        outputIcon: "✈️",
        outputTitle: "One notification: 187 EUR, under your limit",
        outputSub: "Several trip lengths and a day or two either side are compared in the same daily check",
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
      "Each flight deal carries a green or orange mark: are those dates free in your Google Calendar? The calendar is only read; nobody is invited and no event is changed.",
    module: "travel",
    cases: [
      {
        key: "free-dates",
        inputIcon: "✈️",
        inputLabel: "A deal on a route you track",
        inputSub: "Hannover → Antalya, 10 to 17 May",
        outputIcon: "🟢",
        outputTitle: "Green: your calendar is free on those dates",
        outputSub: "Orange when something is already planned in that week",
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
      "Learns your regular payments from your own history (rent, loans, insurance, salary), adds the ones you plan yourself, and shows the next one, two or three months day by day. It warns when an account is expected to go below zero.",
    module: "wealth",
    cases: [
      {
        key: "next-months",
        inputIcon: "📉",
        inputLabel: "The next three months",
        inputSub: "Regular payments learned from your statements, plus the ones you added",
        outputIcon: "⚠️",
        outputTitle: "A warning when an account is expected to go below zero",
        outputSub: "Every payment is listed with the account balance right after it",
        accent: "green",
      },
      {
        key: "ignore",
        inputIcon: "✋",
        inputLabel: "A payment it learned wrongly",
        inputSub: "A contract you have already cancelled",
        outputIcon: "↺",
        outputTitle: "“Ignore” takes it out of the forecast",
        outputSub: "It stays listed, greyed, with Undo to bring it back",
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
      "Finds charges that come back every month with the same amount and lists them as subscriptions. Charges that look unusual are put under “Worth a look”. It never cancels anything and never contacts a provider.",
    module: "wealth",
    cases: [
      {
        key: "subscription",
        inputIcon: "🏦",
        inputLabel: "Your imported statements",
        inputSub: "The same merchant, the same amount, every month",
        outputIcon: "🔁",
        outputTitle: "Listed under “Subscriptions we found”",
        outputSub: "One click tracks it as a bill; cancelling stays with you",
        accent: "green",
      },
      {
        key: "unusual",
        inputIcon: "🏦",
        inputLabel: "A charge that stands out",
        inputSub: "The same charge twice on one day, or far above that merchant's usual amount",
        outputIcon: "🔍",
        outputTitle: "Shown under “Worth a look”",
        outputSub: "Dismiss it once and it does not come back",
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
      "Reads Trade Republic's transaction export and shows your holdings with exact share counts and average cost. For any other broker, a screenshot of the portfolio screen is read on your Mac. You review what was read before it is added.",
    module: "wealth",
    cases: [
      {
        key: "export",
        inputIcon: "📄",
        inputLabel: "Trade Republic's transaction export",
        inputSub: "The CSV file, chosen on the Wealth page or emailed to yourself",
        outputIcon: "📈",
        outputTitle: "Holdings with shares, average cost and today's value",
        outputSub: "Buying shares counts as investing, never as spending",
        accent: "green",
      },
      {
        key: "screenshot",
        inputIcon: "🖼️",
        inputLabel: "A screenshot of your broker app",
        inputSub: "The portfolio screen with each position and its value",
        outputIcon: "📈",
        outputTitle: "Each position waits for “Add”",
        outputSub: "Read on your Mac with Apple's text recognition; never uploaded",
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

export const topics: Topic[] = allTopics.filter((t) => !NOT_IN_THE_APP_YET.includes(t.slug));

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}
