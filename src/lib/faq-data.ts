// The home page FAQ. Kept as data so the visible answers and the FAQ
// structured data on the home page are always the same text.
import { PRICES, TRIAL_DAYS } from "@/lib/offer";

export const faqs: { q: string; a: string }[] = [
  {
    q: "What does it cost, and is there a free trial?",
    a: `The beta is free to download, and every module — Base, Travel and Wealth — is open for ${TRIAL_DAYS} days. After that each module is a one-time purchase, not a subscription: Base €${PRICES.base}, Travel €${PRICES.travel}, Wealth €${PRICES.wealth}, or all three for €${PRICES.bundleBeta} while the beta runs (€${PRICES.bundle} afterwards). Buying is not open yet, so nothing is charged today. When the ${TRIAL_DAYS} days end, a module without a license closes and its data stays on your Mac. If you use a cloud AI provider you pay that provider directly; a local Ollama model has no AI bill.`,
  },
  {
    q: "Do I need my own Claude, OpenAI, or Gemini account?",
    a: "No. You can use Ollama locally on your Mac with no cloud account or API key. If you choose Anthropic, OpenAI, or Gemini, you bring your own account and key and pay that provider directly. SafePersonalAI stores provider credentials locally, sends requests directly to the provider you selected, and never receives or brokers your key. Local and cloud paths are held to the same approval boundary; the local option is clearly labeled if its model needs a second look at an ambiguous result.",
  },
  {
    q: "Isn't this just ChatGPT or Claude with extra steps?",
    a: "No — and it isn't trying to be. SafePersonalAI uses a supported model for understanding, then adds a local action store, deterministic validation, explicit approval, and tightly restricted tools. The initial commercial wedge is email to task or calendar action; broader modules are packaged and released separately.",
  },
  {
    q: "What if it misreads something or drafts the wrong thing?",
    a: "That's exactly what the approval step is for. You see the proposed structured result and its source before dispatch. Ambiguous dates fail closed, calendar changes require an exact reference match, and the commercial tools cannot send email, invite attendees, click links, or move money.",
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
    a: "No. The commercial runtime has no email-send, attendee, payment, cancellation, or link-clicking capability. Calendar writes explicitly use no attendee notifications, and financial features only record approved information or calculate projections.",
  },
  {
    q: "What happens to my data if I stop using it?",
    a: "It stays exactly where it always was — on your Mac and in your own Google account. Revoke SafePersonalAI's access from your Google Account's security settings at any time, and there's nothing further for it to reach.",
  },
];
