// English: the source text. Every other language file has exactly this shape.
// {days}, {base}, {travel}, {wealth}, {bundleBeta}, {bundle} are filled from
// src/lib/offer.ts, so a price is never typed into a sentence by hand.
// Claims follow product_features/FEATURES.md.

export const en = {
  meta: {
    homeTitle: "SafePersonalAI — Private actions from your inbox, approved by you",
    homeDescription:
      "SafePersonalAI runs on your Mac, turns email into approval-ready tasks and calendar actions, and supports local Ollama or your own AI provider account.",
    wealthTitle: "Wealth — any bank's statement on your Mac, no bank login",
    wealthDescription:
      "Read any bank's statement on your Mac — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — without logging in to your bank. Spending by category, a forecast of the coming months, budgets and your investments.",
    appDescription:
      "A Mac app that reads your email and turns it into calendar entries, to-dos, travel plans and a clear view of your money. Everything it proposes waits for your OK. It never sends email, never pays and never clicks links. It runs on your Mac with a local Ollama model or your own AI provider key.",
    offerDescription: "Free beta download. Every module (Base, Travel, Wealth) is open for {days} days.",
  },
  nav: {
    useCases: "Use cases",
    modules: "Modules",
    howItWorks: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    account: "Account",
    download: "Download beta",
    appleSilicon: "Apple Silicon (M1+)",
    appleSiliconRequired: "Apple Silicon (M1+) required",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
  },
  offer: {
    trialLine: "Free during the beta: every module is open for {days} days.",
    priceLine:
      "After that, a one-time purchase: Base €{base}, Travel €{travel}, Wealth €{wealth} — or all three for €{bundleBeta} while the beta runs (€{bundle} afterwards). Buying opens soon.",
    priceNote: "one time · free for {days} days in the beta",
    downloadNote:
      "Free for {days} days, every module included · notarized by Apple · Apple silicon (M1 or later)",
  },
  hero: {
    badge: "Private Mac assistant · free beta",
    titleLine1: "It turns your inbox into actions.",
    titleLine2: "It waits for your approval.",
    body: "SafePersonalAI reads new email, prepares the task or calendar action it found, and shows you exactly what will happen before anything changes. It runs on your Mac with Ollama locally or your own cloud-provider account.",
    ctaDownload: "Download the free beta",
    ctaUseCases: "Explore real use cases",
    finePrint:
      "For Macs with Apple silicon (M1 or later). Use a local Ollama model with no cloud account, or your own Anthropic, OpenAI, or Gemini key.",
  },
  panel: {
    title: "Pending Actions",
    preview: "Illustrative preview",
    rows: [
      {
        title: "To-do: send the signed form by Friday",
        detail: "Found in an email from the school office, with its deadline",
      },
      {
        title: "Add “Dentist — 3 Sep, 15:00” to your calendar",
        detail: "Parsed from an iMessage you sent yourself",
      },
      {
        title: "Track the electricity bill — €84.00, due 28 Oct",
        detail: "Read from the invoice email; a reminder comes before it is due",
      },
    ],
    approve: "Approve",
    reject: "Reject",
    approved: "✓ Approved",
    rejected: "✕ Rejected",
    allDone: "All caught up — nothing waiting on you.",
    replay: "↺ Replay the demo",
    footer: "These wait for your OK. It never sends email or pays.",
    waiting: "{n} waiting",
  },
  laptop: {
    eyebrow: "Quietly, in the background",
    title: "It only wakes up when there's something for you to see.",
    body: "No spinner, no dashboard you have to babysit — just a quiet light when something actually needs your say-so.",
  },
  ownership: {
    eyebrow: "Own it, don't rent it",
    title: "Your own private agent. Not another subscription.",
    intro:
      "SafePersonalAI turns the Mac already sitting on your desk into a private automation layer. Your working data stays local, your AI provider relationship stays yours, and the commercial terms stay visible before purchase.",
    points: [
      {
        title: "Built for the Apple ecosystem you already own",
        body: "No new hardware, no rented server, no third-party company hosting your life. It runs quietly on your own Mac, using the machine you already have.",
      },
      {
        title: "Your AI provider, your boundary",
        body: "Use Ollama locally with no account, or connect a supported cloud provider with your own key and pay them directly. Credentials stay on your Mac; SafePersonalAI never hides inference cost in a second subscription or silently falls back to a company-paid model.",
      },
      {
        title: "Designed as software you own",
        body: "Each module is a one-time, version-bound license rather than a permanent monthly rental.",
      },
    ],
    counter: {
      typical: "A typical AI subscription",
      running: "${cost}/mo × {n} months — and counting, forever.",
      runningOne: "${cost}/mo × 1 month — and counting, forever.",
      perMonth: "/mo",
      ours: "One-time per module. Your Mac, your AI key — no platform fee, ever.",
    },
  },
  boundary: {
    eyebrow: "The boundary",
    title: "A hard line between thinking and doing.",
    intro:
      "Most AI tools blur understanding and action into one step. We don't. What SafePersonalAI works out from your mail is a proposal until you approve it. Only what your own bank reports, and a few reminders, are added directly — marked, and undone with one click.",
    steps: [
      {
        title: "AI understands",
        body: "It reads the email that arrived as untrusted data and extracts a proposed task, calendar event, renewal reminder, or supported module action.",
      },
      {
        title: "You approve",
        body: "Every proposed action lands in one review queue. You can approve, reject, delay, or provide missing information. Ambiguity never becomes permission.",
      },
      {
        title: "Software acts",
        body: "Only the approved fields are dispatched. Calendar actions cannot invite attendees; finance features record and forecast but cannot move money.",
      },
    ],
  },
  useCases: {
    eyebrow: "What it does",
    title: "Start with everyday work. Add only what you need.",
    intro:
      "Base is the Operational foundation. Travel and Wealth extend the same private assistant without moving your history or creating another account.",
    exploreAll: "Explore all use cases →",
    tabsLabel: "Product modules",
    queueTitle: "One review queue",
    queueBody: "Every installed module uses the same visible approval boundary. No hidden automation layer.",
    practicalUses: "{n} practical uses",
    note: "These scenarios are grounded in working personal-system pipelines. The release page confirms exactly which capabilities are included in each commercial version.",
    modules: {
      operational: {
        name: "Base",
        label: "Base module",
        description: "Everyday inbox, calendar, task, voice, and rule-based workflows.",
      },
      travel: {
        name: "Travel",
        label: "Add-on module",
        description: "Bookings, fare monitoring, and calendar-aware trip planning.",
      },
      wealth: {
        name: "Wealth",
        label: "Add-on module",
        description: "Statements from any bank, spending, a forecast, budgets, and investments.",
      },
    },
    topics: {
      "email-to-task": {
        title: "Email → task",
        friction: "No more important request disappearing underneath newer email.",
      },
      "calendar-events": {
        title: "Calendar events",
        friction: "No more opening the calendar app just to type in a date.",
      },
      "todos-reminders": {
        title: "To-dos & reminders",
        friction: "No more a deadline you swore you'd remember, quietly missed.",
      },
      "bill-invoice-tracking": {
        title: "Bill & invoice tracking",
        friction: "No more digging through your inbox the night before it's due.",
      },
      "custom-rules": {
        title: "Your own simple rules",
        friction: "No more changing your routine to fit someone else's automation template.",
      },
      "booking-to-itinerary": {
        title: "Booking → itinerary",
        friction: "No more copying flight and hotel details into three different places.",
      },
      "flight-deal-tracking": {
        title: "Flight deal tracking",
        friction: "No more refreshing a fare-tracking tab out of habit.",
      },
      "calendar-aware-travel": {
        title: "Calendar-aware travel",
        friction: "No more finding a good fare and then discovering the dates do not work.",
      },
      "cashflow-forecast": {
        title: "Cash-flow forecast",
        friction: "No more finding out you're low on funds after it's already happened.",
      },
      "recurring-cost-watch": {
        title: "Recurring cost watch",
        friction: "No more subscriptions quietly blending into the background.",
      },
      "portfolio-import": {
        title: "Portfolio import",
        friction: "No more checking a broker app separately from everything else.",
      },
    } as Record<string, { title: string; friction: string }>,
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "One install. Free for {days} days. Then pay once.",
    intro:
      "Download the beta and every module is open for {days} days, free. After that each module is a one-time purchase — the Mac app has no subscription. A module you do not buy closes; its data stays on your Mac and comes back when you add it. Buying opens soon, and nothing is charged today.",
    bundleLead: "All three together:",
    bundleStrong: "€{bundleBeta} one time while the beta runs",
    bundleRest: ", instead of €{bundle} afterwards. Buying opens soon — until then there is nothing to pay.",
    learnMore: "Learn more →",
    download: "Download beta",
    included: "Included in the {days}-day trial",
    modules: {
      operational: {
        name: "Base",
        tagline: "Operational foundation: inbox, calendar, iMessage, and to-dos.",
        features: [
          "Inbox understanding with approval-ready tasks",
          "Calendar events from email, with no attendee invitations",
          "To-dos with deadline reminders",
          "One Pending Actions queue — approve, snooze, or correct anything",
          "Runs on your Mac with local Ollama or your own cloud-provider key",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "Flight price tracking that never overspends its own budget.",
        features: [
          "Daily quota-guarded fare tracking, per route",
          "Deal alerts only when a price actually clears your threshold",
          "Flexible-date and open-jaw search",
          "Calendar-aware — cross-checked against your free weekends",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "Your money, read from any bank's statement. No bank login.",
        features: [
          "Any bank's statement: CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
          "Spending by category, for any period",
          "Forecast of the next 1–3 months, with a below-zero warning",
          "Budgets, subscriptions found, unusual charges marked",
          "Investments and loans, with a Trade Republic import",
        ],
      },
    },
  },
  trust: {
    eyebrow: "Trust",
    title: "Built for people who don't trust AI with their inbox.",
    points: [
      {
        title: "Your data stays on your Mac",
        body: "The local action store, tasks, settings, and module data remain on your Mac. Content sent to a cloud AI provider goes directly under the provider account you chose; SafePersonalAI does not receive it.",
      },
      {
        title: "Choose local or bring your own key",
        body: "Ollama can run entirely on your Mac with no account or API key. Cloud options use your own provider account and key; SafePersonalAI stores that credential locally and sends requests directly to the provider you chose, never through a SafePersonalAI server.",
      },
      {
        title: "Dangerous capabilities are absent",
        body: "The commercial runtime cannot send email, invite attendees, click links, cancel services, or move money. Approval does not unlock a hidden path to those actions.",
      },
      {
        title: "Check the Trust Center, any time",
        body: "One page shows exactly what's connected, what it can and can't do, and where your data actually lives — not a promise you have to take on faith.",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "Read only — cannot send" },
        { label: "Google Calendar", detail: "Read + create events" },
        { label: "Google Drive", detail: "Copies of statements you import" },
        { label: "iMessage", detail: "Read locally on your Mac only" },
        { label: "AI provider", detail: "Your own key — never shared with us" },
      ],
      connected: "Connected",
      local: "Local only",
      footer: "Checked just now — you can look any time.",
      items: "5 items",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions people actually ask.",
    items: [
      {
        q: "What does it cost, and is there a free trial?",
        a: "The beta is free to download, and every module — Base, Travel and Wealth — is open for {days} days. After that each module is a one-time purchase, not a subscription: Base €{base}, Travel €{travel}, Wealth €{wealth}, or all three for €{bundleBeta} while the beta runs (€{bundle} afterwards). Buying is not open yet, so nothing is charged today. When the {days} days end, a module without a license closes and its data stays on your Mac. If you use a cloud AI provider you pay that provider directly; a local Ollama model has no AI bill.",
      },
      {
        q: "Do I need my own Claude, OpenAI, or Gemini account?",
        a: "No. You can use Ollama locally on your Mac with no cloud account or API key. If you choose Anthropic, OpenAI, or Gemini, you bring your own account and key and pay that provider directly. SafePersonalAI stores the key on your Mac, sends requests directly to the provider you selected, and never receives or passes on your key. Local and cloud models work behind the same approval step.",
      },
      {
        q: "Isn't this just ChatGPT or Claude with extra steps?",
        a: "No — and it isn't trying to be. A chat assistant answers when you ask. SafePersonalAI reads your new mail on its own, uses a model you choose to understand it, checks dates and amounts by fixed rules, and puts each proposed calendar entry or to-do in a list for you to approve. Its tools are deliberately narrow: it cannot send email, pay or click links.",
      },
      {
        q: "What if it misreads something or proposes the wrong thing?",
        a: "That's exactly what the approval step is for. You see the proposed result and the message it came from before anything happens. A date that isn't in the text is never invented, a calendar change needs an exact match with the existing entry, and the app cannot send email, invite attendees, click links, or move money.",
      },
      {
        q: "Does my data train anyone's AI model?",
        a: "SafePersonalAI does not train a model or receive your inbox content. When you choose a cloud AI provider, the relevant content goes directly from your Mac to that provider under its API terms. Review the provider's current data-use and retention policy before connecting it.",
      },
      {
        q: "Does it run in the cloud, or on my machine?",
        a: "On your machine. SafePersonalAI is Mac software today, not a hosted web app — it needs your Mac to be on to check for new messages and act on your approvals. There's no SafePersonalAI server holding your data in the meantime.",
      },
      {
        q: "What Mac do I need to run SafePersonalAI?",
        a: "The current beta requires a Mac with Apple silicon (M1 or later — including M1/M2/M3/M4 MacBook Air, MacBook Pro, Mac mini, iMac, and Mac Studio). Intel-based Macs are not supported by this build. macOS permission prompts are handled by macOS during setup; no separate SafePersonalAI account is required.",
      },
      {
        q: "Can it send a message, invite someone, or move money without me?",
        a: "No. The app has no way to send email, invite attendees, pay, cancel a service or click a link. Calendar entries are created without attendee notifications, and the money features only record what you approve and calculate forecasts.",
      },
      {
        q: "What happens to my data if I stop using it?",
        a: "It stays exactly where it always was — on your Mac and in your own mail and calendar accounts. You can remove SafePersonalAI's access in each account's security settings at any time, and there's nothing further for it to reach.",
      },
    ],
  },
  footer: {
    tagline: "Understands, proposes, waits for your OK. Never sends email, never pays.",
    account: "Account",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  shell: {
    allModules: "← All modules",
    whatYouGet: "What you get",
    ready: "Ready for {name}?",
    required: "Apple Silicon (M1+) required",
    download: "Download beta",
  },
  wealth: {
    name: "Wealth",
    tagline: "Your money, read from any bank's statement. No bank login.",
    intro:
      "Wealth reads the statement your bank already gives you — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — works out the columns itself, and shows you what it read before anything is added. From there you get spending by category, a forecast of the coming months, budgets and your investments, all kept on your Mac.",
    steps: [
      {
        title: "Give it a statement",
        body: "Choose a file on the Wealth page, or text it to yourself by iMessage. Any bank, any period — a whole year of history works. A screenshot of your banking app works too.",
      },
      {
        title: "Check what it read",
        body: "You see the transactions, the account they belong to and every assumption it made, before you click Import. Nothing is added without you.",
      },
      {
        title: "See where it goes and what is coming",
        body: "Spending by category for any period, the regular payments it learned from your history, and the expected balance for the next one to three months.",
      },
    ],
    features: [
      {
        title: "Any bank, any format",
        body: "CSV, Excel, PDF, MT940, CAMT.053, OFX and QIF. No templates and no column mapping: it works out columns, dates, signs and currency itself. Tested on real İş Bankası PDF statements. A PDF must contain text; a scanned image is refused with a clear message.",
      },
      {
        title: "Screenshots, read on your Mac",
        body: "A screenshot of your banking or card app is read on your Mac with Apple's own text recognition and never uploaded. Transactions go to the review list; a balance waits for you to apply it to an account.",
      },
      {
        title: "Spending you can read",
        body: "Automatic categories, a chart by category, and money in and out month by month — for one month, the last 3, 6 or 12, or a whole year. Change a merchant's category once and it sticks.",
      },
      {
        title: "A forecast from your own history",
        body: "It learns what comes back every month — rent, loans, insurance, subscriptions, salary — and lists the next one, two or three months with the account balance after each payment. It warns when an account is expected to go below zero, and you can add payments you are planning.",
      },
      {
        title: "Budgets",
        body: "A monthly limit per category, with one message at 80% and one at 100% — not a reminder every day.",
      },
      {
        title: "Subscriptions and unusual charges",
        body: "The same merchant and amount every month is listed as a subscription. The same charge twice on one day, or one far above that merchant's usual amount, is marked as worth a look.",
      },
      {
        title: "Investments on their own page",
        body: "Shares, ETFs, gold and crypto: what they are worth today, what you put in, and the gain or loss. Trade Republic's transaction export is read directly; prices are updated where possible.",
      },
      {
        title: "Loans, worked out",
        body: "Enter any three of amount, rate, term and monthly payment and the fourth is calculated. You see the remaining balance, the payoff month and the total cost.",
      },
      {
        title: "Every account in one balance",
        body: "Checking, savings, card and investment accounts together, shown in any of 15 currencies. Each amount keeps its own currency; the conversion uses the daily ECB rates.",
      },
      {
        title: "Tax hints for Germany",
        body: "Once you choose your country, transactions that may matter for your tax return get a short hint, and one click exports the year for your tax advisor. Hints only — never tax advice.",
      },
    ],
    readsEyebrow: "What it reads",
    readsTitle: "The statement your bank already gives you.",
    readsBody:
      "Wealth never connects to your bank and never asks for your banking password. You give it a statement file or a screenshot; it reads it on your Mac, puts it on the right account, and waits for you to click Import.",
    investEyebrow: "Investments",
    investTitle: "What you hold, and what it is worth today.",
    investBody:
      "Enter your shares, ETFs, gold or crypto yourself, or import Trade Republic's transaction export and let it work out the shares and average cost. A holding with no current price counts at what you paid — never at a made-up value.",
    provenTitle: "In the beta, still being proven",
    provenBody:
      "Three things are built and can be switched on, but have not yet run long enough on real mailboxes for us to promise them: statements picked up from your bank's emails, bank alert emails that update an account, and Apple Pay spending through a one-time iPhone Shortcut. Treat them as extras. Importing a statement yourself does not depend on any of them.",
    limitsTitle: "What Wealth does not do",
    limitsBody:
      "It does not log in to your bank, pay anything or move money. It does not read scanned, image-only PDFs — a screenshot works instead. It does not give tax advice; your advisor decides. And it runs on your Mac, so your figures are not stored on a server of ours.",
  },
};

export type Dictionary = typeof en;
