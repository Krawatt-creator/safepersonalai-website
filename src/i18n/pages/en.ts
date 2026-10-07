// English text of the Base, Travel and iPhone pages. Every other language
// file in this folder has exactly this shape. Claims follow
// product_features/FEATURES.md (sections 2, 3, 5, 6 and "iPhone app").

export const enPages = {
  card: {
    waits: "It waits for your OK.",
    show: "▶ See what SafePersonalAI does",
    back: "↺ Show the original message",
  },
  waitlist: {
    placeholder: "you@example.com",
    emailLabel: "Email address",
    button: "Notify me",
    loading: "Joining…",
    done: "✓ You're on the list — we'll email you when it's ready.",
    error: "Something went wrong — try again in a moment.",
  },
  base: {
    metaTitle: "Base — email to calendar and to-dos on your Mac, with your approval",
    metaDescription:
      "Reads your email on your Mac and prepares calendar entries, to-dos, bills and renewals for your OK. Text it by iMessage. It never sends email, pays or clicks links.",
    name: "Base",
    tagline: "Your inbox, calendar, and to-dos — handled, never surprised.",
    intro:
      "The part of SafePersonalAI every install starts with. It reads your new email and the iMessages you send it, works out what needs doing, and prepares it. You decide what happens next.",
    steps: [
      {
        title: "It reads",
        body: "New email from Gmail or Apple Mail, and messages you text it from your own number — understood in many languages.",
      },
      {
        title: "You approve",
        body: "Every proposed calendar entry, bill or booking lands in one review list. Approve, reject or snooze it — on the dashboard or from the menu bar.",
      },
      {
        title: "It acts",
        body: "Only then does it happen — an event lands on your calendar, a bill is tracked. It never sends an email for you.",
      },
    ],
    features: [
      {
        title: "Your inbox, read for what it asks of you",
        body: "It reads new mail and works out what it asks of you — a task with its deadline, an appointment, a changed appointment, a bill, a renewal — and prepares it for your OK. A date that is not in the text is never invented.",
      },
      {
        title: "Calendar entries, without inviting anyone",
        body: "Approved events go to Google Calendar, Apple Calendar or both. It cannot invite anyone else — that capability simply is not in the software.",
      },
      {
        title: "To-dos with dates",
        body: "Add, tick off, snooze. Colour shows what is overdue, due soon or fine, and a repeating to-do comes back on its own. If you like, a morning briefing tells you today's agenda and the bills due.",
      },
      {
        title: "Text it from your own number",
        body: "More than 25 iMessage commands, each switched on separately: “Remind me to call the landlord tomorrow”, “What's on my calendar tomorrow?”, “Where's my package?”, or “Explain this:” with a pasted letter. It answers only you.",
      },
      {
        title: "Your own simple rules",
        body: "“When an email or message mentions X, do Y”: a to-do, a calendar block, or an income or expense entry. Built on a simple form, no code.",
      },
      {
        title: "Your own AI key — or none at all",
        body: "A local Ollama model on your Mac means no AI bill; it can be slower and less exact than a cloud model. Prefer Anthropic, OpenAI or Gemini? Connect your own key and pay them directly — we are never in the middle.",
      },
    ],
    seeEyebrow: "What you actually see",
    seeTitle: "One calm queue for every decision.",
    seeBody:
      "SafePersonalAI reads what arrives, prepares a clear suggestion, and keeps the final decision in your hands.",
    casesEyebrow: "See it in action",
    casesTitle: "The kind of thing it handles every day.",
    casesBody: "Three everyday examples. Click one to see what SafePersonalAI does with it.",
    cases: [
      {
        inputLabel: "Email from the dental practice",
        inputSub: "“Your appointment is on Thursday at 15:00.”",
        outputTitle: "Add “Dentist — Thu, 15:00” to your calendar",
        outputSub: "Prepared from the email, with its source shown",
      },
      {
        inputLabel: "Email from the school office",
        inputSub: "“Please send the signed form by Friday.”",
        outputTitle: "To-do: send the signed form — due Friday",
        outputSub: "The deadline is the one stated in the email, never a guess",
      },
      {
        inputLabel: "Email: your appointment has moved",
        inputSub: "“Your appointment has moved from Tuesday to Thursday.”",
        outputTitle: "Calendar change prepared: Tuesday → Thursday",
        outputSub: "The existing entry is updated, not duplicated",
      },
    ],
  },
  travel: {
    metaTitle: "Travel — flight price alerts on your Mac, with your own free search key",
    metaDescription:
      "Track flight prices per route on your Mac with your own free search key. One notification when a price drops under your limit. Bookings from your email become trips.",
    name: "Travel",
    tagline: "Flight deals watched for you, never watching your wallet drain.",
    intro:
      "Tell it which routes matter and what a good price looks like. It checks quietly in the background and only interrupts you when a price is really under your limit.",
    steps: [
      {
        title: "Tell it what matters",
        body: "A route, your dates, and the price that would make you book. Type a city or an airport and pick from the suggestions.",
      },
      {
        title: "It checks quietly",
        body: "Once a day, inside the searches your own key allows — no runaway costs, no constant refreshing on your end.",
      },
      {
        title: "You hear about a real deal",
        body: "Only when a tracked route actually clears your own limit — nothing else interrupts you.",
      },
    ],
    features: [
      {
        title: "Fare tracking inside your own quota",
        body: "Each tracked route is checked once a day, inside the searches your own key allows — no surprise bill for a feature that is meant to save you money.",
      },
      {
        title: "Alerts only when it is a deal",
        body: "You set the price. You get one notification when a real price clears it — not every ordinary movement dressed up as urgent.",
      },
      {
        title: "Your own free search key",
        body: "Bring your own free SerpApi key, good for 250 searches a month. The key stays on your Mac and the budget is entirely yours.",
      },
      {
        title: "Flexible dates and several stops",
        body: "Compare trip lengths and a day or two either side, or search two to four legs such as Hanover → Antalya → Palma → Hanover. A mark shows whether the dates are free in your Google Calendar.",
      },
      {
        title: "Bookings from your email",
        body: "Flight and hotel confirmations become calendar entries and a stored itinerary, grouped into trips with a countdown.",
      },
      {
        title: "Packing and check-in",
        body: "Approving a booking adds a packing to-do two days before and an online check-in to-do the day before.",
      },
    ],
    watchEyebrow: "What it watches",
    watchTitle: "Every route, checked daily, against your own limit.",
    watchBody:
      "You decide what counts as a deal. It only interrupts you when a tracked route actually clears that number — everything else stays quiet in the background.",
    seeEyebrow: "What you actually see",
    seeTitle: "One notification, only when it's worth your attention.",
    seeBody:
      "Not a dashboard you have to check — a single notification when a price actually clears your limit, and nothing at all when it doesn't.",
  },
  iphone: {
    metaTitle: "iPhone",
    metaDescription:
      "See and steer SafePersonalAI from your iPhone. Your Mac keeps doing the work and keeps your data; the phone is a locked window onto it, through your own iCloud.",
    name: "iPhone · coming soon",
    tagline: "Your Mac does the work. Your iPhone says yes.",
    intro:
      "An optional companion for people who use SafePersonalAI on a Mac. Approve what is waiting, check your day and your money, add a to-do — from anywhere. Your data stays on your Mac; the phone shows a locked copy that travels through your own iCloud.",
    priceNote: "a month · optional · cancel any time",
    steps: [
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
        body: "Approve, reject, add a to-do. Your Mac carries it out as soon as it is awake and online, and tells the phone it is done.",
      },
    ],
    features: [
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
    ],
    screensEyebrow: "What it looks like",
    screensTitle: "Three screens you will use every day.",
    screensBody:
      "Real screens of the app, filled with its built-in sample data — the same “Look around with sample data” you can open before pairing a Mac. The app itself is in English.",
    screens: [
      {
        alt: "The Today screen: a calendar event waiting for approval with Approve and Reject buttons, today's events, a birthday and the balance.",
        title: "Today",
        body: "What is waiting for your OK, with Approve and Reject, then your day: events, birthdays and your balance.",
      },
      {
        alt: "The Wealth screen: total of accounts and investments, the payments of the next 30 days and a curve of the next 90 days.",
        title: "Wealth",
        body: "Your total, the payments of the next 30 days and where the money stands after them. Needs the Wealth module.",
      },
      {
        alt: "The Forecast screen: a curve of the expected balance over the next 90 days, its lowest point, and totals for 30, 60 and 90 days.",
        title: "Forecast",
        body: "The next 90 days as a curve. Touch it to see a day and what moves on it, including what you planned yourself.",
      },
    ],
    knowTitle: "Good to know before you subscribe",
    know: [
      {
        lead: "It needs the Mac app.",
        text: "The iPhone app is a window onto SafePersonalAI on your Mac. It does not work on its own.",
      },
      {
        lead: "Same iCloud account on both.",
        text: "Mac and iPhone must be signed in to the same iCloud account, with a little free iCloud space.",
      },
      {
        lead: "Reading works while the Mac sleeps; doing does not.",
        text: "You see the last picture your Mac sent. What you ask for is carried out when the Mac is awake and online.",
      },
      {
        lead: "Notifications can be late.",
        text: "iOS decides how often it wakes an app in the background. A notification can arrive minutes after the fact, and may not come in Low Power Mode.",
      },
      {
        lead: "Not in the App Store yet.",
        text: "The app is built and being tested. Leave your address above and we tell you the day it is there.",
      },
    ],
    trademark:
      "iPhone, iCloud, Face ID, Touch ID, Mac and App Store are trademarks of Apple Inc., registered in the U.S. and other countries and regions. SafePersonalAI is not affiliated with or endorsed by Apple.",
  },
};

export type PagesDictionary = typeof enPages;
