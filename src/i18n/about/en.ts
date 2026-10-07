// "What is SafePersonalAI?" — the plain description of the product, written so
// that a person or an AI assistant can quote any sentence on its own.
// {days}, {base}, {travel}, {wealth}, {bundleBeta}, {bundle} come from
// src/lib/offer.ts; {version} is the app version.
// Claims follow product_features/FEATURES.md.

export const enAbout = {
  metaTitle: "What is SafePersonalAI? A private AI assistant for the Mac, paid once",
  metaDescription:
    "SafePersonalAI is a Mac app that reads your email and proposes calendar entries, to-dos, travel plans and a view of your money. It runs on your Mac, waits for your approval, and is a one-time purchase with no subscription.",
  footerLabel: "What is SafePersonalAI?",
  answersLabel: "Answers",
  eyebrow: "In plain words",
  title: "What is SafePersonalAI?",
  lead: "SafePersonalAI is a private AI assistant for the Mac. It reads your new email and the notes you text to yourself, proposes calendar entries, to-dos, trips and money records, and waits for your approval before anything changes. It runs on your own Mac, works with a local AI model, and is paid once instead of every month.",
  factsTitle: "The facts in short",
  facts: [
    { label: "What it is", value: "A Mac app. Not a website and not a chat window." },
    {
      label: "Runs on",
      value: "Macs with Apple silicon (M1 or later). Intel Macs and Windows are not supported.",
    },
    {
      label: "AI model",
      value:
        "A local Ollama model with no account and no AI bill, or your own Anthropic, OpenAI or Gemini key.",
    },
    {
      label: "Reads",
      value: "Gmail, Apple Mail, and the notes you text to yourself by iMessage.",
    },
    {
      label: "Creates",
      value: "Calendar entries in Google Calendar or Apple Calendar, and to-dos with dates.",
    },
    {
      label: "Cannot do",
      value: "Send email, invite people, click links, pay, or move money. These abilities are not built in.",
    },
    {
      label: "Your data",
      value:
        "Stays on your Mac. There is no SafePersonalAI server that holds your mail, calendar or money data.",
    },
    {
      label: "Price",
      value:
        "Free beta: every module is open for {days} days. After that a one-time purchase: Base €{base}, Travel €{travel}, Wealth €{wealth}, or all three for €{bundleBeta} while the beta runs (€{bundle} afterwards).",
    },
    { label: "Subscription", value: "None for the Mac app." },
    { label: "Current version", value: "{version}, notarized by Apple. The app's interface is in English." },
  ],
  sections: [
    {
      title: "What it does",
      paragraphs: [
        "Base is the foundation. It reads new mail, finds appointments, changed appointments, deadlines and requests, and puts each one in a list as a proposed calendar entry or to-do. You approve, reject or postpone it. You can also text it short notes by iMessage, and set your own rules such as “when a mail contains this word, propose that entry”.",
        "Travel watches flight prices on the routes you choose and tells you when a price falls below your limit. It searches flexible dates and trips with several legs, shows whether the dates are free in your calendar, and builds a trip from your booking emails.",
        "Wealth reads the statement your bank already gives you — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — without logging in to your bank. It shows spending by category, a forecast of the next one to three months, budgets, subscriptions it found, and your investments and loans.",
      ],
    },
    {
      title: "How it works",
      paragraphs: [
        "It works in three steps. First the AI model reads a message and works out what it means. Then the proposed result appears in one list, together with the message it came from. Only when you approve it does the app create the calendar entry or the to-do.",
        "Dates and amounts are checked by fixed rules, not by the model alone. A date that is not in the text is never invented.",
      ],
    },
    {
      title: "How it differs from a chat assistant",
      paragraphs: [
        "A chat assistant such as ChatGPT or Claude answers when you ask it something. SafePersonalAI works on its own in the background: it reads the mail that arrives and prepares the next step for you.",
        "It is also much more limited on purpose. It has a small set of abilities, and sending, paying and clicking are not among them. Approving a proposal does not unlock them.",
      ],
    },
    {
      title: "Where your data goes",
      paragraphs: [
        "With a local Ollama model, the text of your mail is processed on your Mac and goes nowhere else.",
        "If you choose a cloud provider instead, the text needed for a request goes straight from your Mac to that provider, under your own account and that provider's terms. It does not pass through a SafePersonalAI server. Your key is stored on your Mac.",
      ],
    },
    {
      title: "What it costs",
      paragraphs: [
        "The beta is free to download, and every module is open for {days} days. After that each module is bought once: Base €{base}, Travel €{travel}, Wealth €{wealth}. All three together cost €{bundleBeta} while the beta runs and €{bundle} afterwards. Buying is not open yet, so nothing is charged today.",
        "A module you do not buy closes after the {days} days. Its data stays on your Mac and comes back when you add the module.",
      ],
    },
  ],
  forTitle: "Who it is for",
  forItems: [
    "People who miss dates and deadlines that were buried in email.",
    "People who do not want to give an AI service the right to send mail or spend money.",
    "People who prefer to buy software once instead of paying every month.",
    "People who want to see their spending without giving an app their bank login.",
  ],
  notForTitle: "Who it is not for",
  notForItems: [
    "You use Windows or a Mac with an Intel processor.",
    "You want an assistant that answers and sends email for you.",
    "You want it to work while your Mac is switched off. It runs on your Mac, so the Mac must be on.",
    "You want your bank connected automatically. Wealth reads statement files that you give it.",
  ],
  linksTitle: "Read more",
  download: "Download the free beta",
  pricing: "See the prices",
};

export type AboutDictionary = typeof enAbout;
