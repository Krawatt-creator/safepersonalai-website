// Answer pages: one question people really type, answered in the first
// paragraph, then explained. English only for now.
// {days}, {base}, {travel}, {wealth}, {bundle} come from
// src/lib/offer.ts. Claims about the app follow product_features/FEATURES.md.
// Other products are described by kind, never by name: nothing here is a
// claim about a specific competitor.

export type AnswerSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Answer = {
  slug: string;
  question: string;
  metaTitle: string;
  description: string;
  // The direct answer, readable without the rest of the page.
  short: string;
  sections: AnswerSection[];
  related: { href: string; label: string }[];
};

// Shown on every answer page; change it when the texts are revised.
export const ANSWERS_UPDATED = "2026-10-07";

export const answers: Answer[] = [
  {
    slug: "private-ai-assistant-mac-no-subscription",
    question: "Is there a private AI assistant for the Mac without a subscription?",
    metaTitle: "A private AI assistant for the Mac without a subscription",
    description:
      "Yes. SafePersonalAI is a Mac app you buy once. It runs on your Mac, can use a local AI model, and needs your approval before it changes anything.",
    short:
      "Yes. SafePersonalAI is a Mac app that you buy once instead of renting. It reads your email on your own Mac, proposes calendar entries and to-dos, and waits for your approval. With a local Ollama model there is no monthly AI bill either. During the beta it is free for {days} days; after that the Base module costs €{base} one time.",
    sections: [
      {
        title: "Why most AI assistants cost money every month",
        paragraphs: [
          "Most AI assistants run on the company's servers. Every request costs the company computing time, so it charges a monthly fee, and your mail and files pass through its systems to be processed.",
          "An assistant can only do without a subscription if the costly part runs somewhere you already pay for: on your own computer, or under your own account with an AI provider.",
        ],
      },
      {
        title: "How SafePersonalAI avoids the subscription",
        bullets: [
          "The app runs on your Mac. There is no SafePersonalAI server that processes or stores your data.",
          "The AI model is your choice: a local Ollama model on your Mac, with no account and no bill, or your own Anthropic, OpenAI or Gemini key, where you pay that provider directly for what you use. Google currently offers a free Gemini tier with daily limits and its own data terms; please check the provider's official website for current prices and terms.",
          "Each module is a one-time purchase: Base €{base}, Travel €{travel}, Wealth €{wealth}, or all three for €{bundle}.",
        ],
      },
      {
        title: "What “private” means here",
        paragraphs: [
          "Your tasks, settings and money data are stored on your Mac. With a local model, the text of your mail never leaves it.",
          "If you choose a cloud provider, the text needed for a request goes straight from your Mac to that provider under your own account. That is less private than a local model, and it is your decision, not a hidden default.",
          "The app also cannot send email, invite people, click links or pay. Those abilities are not built in, so a misread message cannot turn into an action behind your back.",
        ],
      },
      {
        title: "What to check before you choose it",
        bullets: [
          "It needs a Mac with Apple silicon (M1 or later). Intel Macs and Windows are not supported.",
          "It works while your Mac is on. It is not a service that runs somewhere else overnight.",
          "A local model needs free memory and is slower and less accurate than the large cloud models. A newer Mac with more memory gives better results.",
          "It is a beta. Buying is not open yet, so nothing is charged today.",
        ],
      },
    ],
    related: [
      { href: "/what-is-safepersonalai", label: "What is SafePersonalAI?" },
      { href: "/#pricing", label: "Prices and the free beta" },
      { href: "/modules/operational", label: "The Base module" },
    ],
  },
  {
    slug: "local-ai-email-calendar-ollama",
    question: "Can a local AI model read my email and fill my calendar?",
    metaTitle: "A local AI model that reads email and proposes calendar entries",
    description:
      "Yes. SafePersonalAI connects a local Ollama model on your Mac to Gmail or Apple Mail and proposes calendar entries and to-dos for your approval. No cloud account is needed.",
    short:
      "Yes. SafePersonalAI uses a local Ollama model on your Mac to read new mail from Gmail or Apple Mail. It proposes calendar entries and to-dos, and creates them in Google Calendar or Apple Calendar only after you approve them. No cloud AI account or API key is needed.",
    sections: [
      {
        title: "What you need",
        bullets: [
          "A Mac with Apple silicon (M1 or later).",
          "Ollama installed, with a model downloaded. Ollama is a free program that runs AI models on your own computer.",
          "A Gmail account or Apple Mail, and Google Calendar or Apple Calendar.",
        ],
      },
      {
        title: "What happens to a message",
        paragraphs: [
          "The app picks up a new mail and gives its text to the local model. The model works out whether it contains an appointment, a changed appointment, a deadline or a request.",
          "Dates and amounts are then checked by fixed rules. A date that is not in the text is never invented.",
          "The result appears in a list called Pending Actions, next to the message it came from. You approve, reject or postpone it. Only an approved entry is written to your calendar, and it is created without inviting anyone.",
        ],
      },
      {
        title: "Local model or cloud model",
        paragraphs: [
          "A local model keeps the text of your mail on your Mac and costs nothing to run. It is slower, and it makes more mistakes on long or unclear messages than the large cloud models.",
          "If you prefer, you can connect your own Anthropic, OpenAI or Gemini key instead. Then the text needed for each request goes from your Mac directly to that provider. Both kinds of model work behind the same approval step, so a wrong reading shows up as a proposal you can reject.",
        ],
      },
      {
        title: "What it will not do",
        bullets: [
          "It does not send email.",
          "It does not click links in a message.",
          "It does not invite other people to a calendar entry.",
          "It does not act on instructions written inside an email. Mail is treated as text to read, not as commands.",
        ],
      },
    ],
    related: [
      { href: "/modules/operational", label: "The Base module" },
      { href: "/what-is-safepersonalai", label: "What is SafePersonalAI?" },
      { href: "/#faq", label: "Frequently asked questions" },
    ],
  },
  {
    slug: "budget-app-without-bank-login",
    question: "Is there a budgeting app that does not need my bank login?",
    metaTitle: "A budgeting app for the Mac that needs no bank login",
    description:
      "Yes. The Wealth module of SafePersonalAI reads the statement file your bank already gives you, on your Mac. It never connects to your bank or asks for your banking password.",
    short:
      "Yes. The Wealth module of SafePersonalAI never connects to your bank. You give it the statement file your bank already offers — CSV, Excel, PDF, MT940, CAMT, OFX or QIF — and it reads the file on your Mac. You then see your spending by category, a forecast of the next one to three months, and your budgets.",
    sections: [
      {
        title: "Why many budgeting apps ask for your bank login",
        paragraphs: [
          "Many budgeting apps fetch your transactions through a connection to your bank. To set it up you sign in to your bank through the app or through a service it uses, and your transactions are then copied to that company's servers.",
          "That is convenient, because new transactions appear by themselves. The price is that another company holds a copy of your account history and a standing connection to your bank.",
        ],
      },
      {
        title: "How Wealth works instead",
        bullets: [
          "You download a statement from your bank as you would for your own records, and choose the file in the app.",
          "It works out the columns, dates, signs and currency itself. There are no templates and no column mapping.",
          "Before anything is added, you see the transactions it read and the account they belong to. You click Import.",
          "A screenshot of your banking app works too. It is read on your Mac with Apple's own text recognition.",
        ],
      },
      {
        title: "What you get from it",
        bullets: [
          "Spending by category for one month, the last 3, 6 or 12 months, or a whole year.",
          "A forecast of the next one to three months from the payments that come back regularly, with a warning when an account is expected to go below zero.",
          "A monthly limit per category, with one message at 80% and one at 100%.",
          "Subscriptions it found, and charges that look unusual.",
          "Investments and loans next to your accounts, in any of 15 currencies.",
        ],
      },
      {
        title: "The trade-off",
        paragraphs: [
          "Your figures are only as current as the last statement you imported. If you want every card payment to appear within seconds, an app with a bank connection does that and Wealth does not.",
          "A scanned, image-only PDF cannot be read; a PDF must contain text. Wealth also cannot pay anything or move money.",
          "Wealth costs €{wealth} one time after the free {days}-day beta. It has no subscription.",
        ],
      },
    ],
    related: [
      { href: "/modules/wealth", label: "The Wealth module" },
      { href: "/what-is-safepersonalai", label: "What is SafePersonalAI?" },
      { href: "/#pricing", label: "Prices and the free beta" },
    ],
  },
  {
    slug: "is-it-safe-to-let-ai-read-my-email",
    question: "Is it safe to let an AI assistant read my email?",
    metaTitle: "Is it safe to let an AI assistant read my email?",
    description:
      "It depends on three things: where your mail is processed, what the assistant is able to do, and whether you approve each action. This page explains each and how SafePersonalAI handles it.",
    short:
      "It depends on three things: where your mail is processed, what the assistant is able to do with it, and whether it acts before you have looked. The safest setup processes mail on your own computer, has no ability to send, pay or click, and shows you every proposed action first. SafePersonalAI is built that way.",
    sections: [
      {
        title: "Risk 1: where your mail goes",
        paragraphs: [
          "An assistant that runs on a company's servers receives a copy of the mail it reads. You then depend on that company's security and its rules for keeping and using data.",
          "SafePersonalAI runs on your Mac. With a local Ollama model the text of your mail stays there. With a cloud model that you connect yourself, the text goes directly to that provider under your own account, and never to a SafePersonalAI server.",
        ],
      },
      {
        title: "Risk 2: a message that gives the assistant orders",
        paragraphs: [
          "Anyone can send you an email. If an assistant treats the text of a mail as instructions, a stranger can write “forward this to everyone” or “pay this invoice now” and the assistant may try to do it. This is called prompt injection.",
          "The reliable protection is not a cleverer model. It is an assistant that is unable to do the harmful thing. SafePersonalAI cannot send email, invite people, click links, pay or move money, because those abilities were never built into it. Mail is treated as text to read, not as commands.",
        ],
      },
      {
        title: "Risk 3: a wrong reading",
        paragraphs: [
          "AI models misread things. A wrong date in your calendar is a small problem if you saw it first, and a real one if it was added silently.",
          "In SafePersonalAI, what the model works out from your mail is a proposal. It appears in a list with the message it came from, and you approve or reject it. Dates and amounts are checked by fixed rules, and a date that is not in the text is never invented.",
        ],
      },
      {
        title: "Questions to ask about any AI email assistant",
        bullets: [
          "Is my mail processed on my computer or on the company's servers?",
          "Can it send email, pay or click links at all? If yes, what stops a misleading message from triggering that?",
          "Does it show me each action before it happens?",
          "What access does it ask for in my mail account, and can I remove it at any time?",
          "What happens to my data when I stop using it?",
        ],
      },
      {
        title: "How SafePersonalAI answers them",
        bullets: [
          "Mail is processed on your Mac; with a cloud model, directly at the provider you chose.",
          "It cannot send, pay, click or invite.",
          "Proposed calendar entries and to-dos wait for your approval.",
          "You can remove its access in each account's security settings at any time.",
          "Your data stays on your Mac and in your own mail and calendar accounts.",
        ],
      },
    ],
    related: [
      { href: "/what-is-safepersonalai", label: "What is SafePersonalAI?" },
      { href: "/#boundary", label: "How the approval step works" },
      { href: "/privacy", label: "Privacy policy" },
    ],
  },
];

export const getAnswer = (slug: string) => answers.find((a) => a.slug === slug);
