"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY, GA_MEASUREMENT_ID, loadAnalytics } from "@/lib/analytics";

type Texts = { body: string; app: string; allow: string; deny: string; more: string; settings: string };

// Short and plain; the last sentence says the website is not the app.
const TEXTS: Record<string, Texts> = {
  en: {
    body: "May this website use Google Analytics cookies to count visits and downloads (by country and city, never by name)? You can change your choice any time under “Cookie settings” at the bottom of every page.",
    app: "This only concerns this website. The SafePersonalAI app you download is separate: it sends nothing to Google Analytics or to us.",
    allow: "Allow",
    deny: "No thanks",
    more: "Privacy policy",
    settings: "Cookie settings",
  },
  de: {
    body: "Darf diese Website Cookies von Google Analytics verwenden, um Besuche und Downloads zu zählen (nach Land und Stadt, nie nach Namen)? Du kannst deine Wahl jederzeit unter „Cookie-Einstellungen“ unten auf jeder Seite ändern.",
    app: "Das betrifft nur diese Website. Die SafePersonalAI-App, die du herunterlädst, ist davon getrennt: Sie sendet nichts an Google Analytics oder an uns.",
    allow: "Erlauben",
    deny: "Nein, danke",
    more: "Datenschutzerklärung",
    settings: "Cookie-Einstellungen",
  },
  tr: {
    body: "Bu web sitesi, ziyaretleri ve indirmeleri saymak için Google Analytics çerezlerini kullanabilir mi (ülke ve şehre göre, asla isimle değil)? Seçimini her sayfanın altındaki “Çerez ayarları” ile istediğin zaman değiştirebilirsin.",
    app: "Bu yalnızca bu web sitesini ilgilendirir. İndirdiğin SafePersonalAI uygulaması ayrıdır: Google Analytics'e veya bize hiçbir şey göndermez.",
    allow: "İzin ver",
    deny: "Hayır, teşekkürler",
    more: "Gizlilik politikası",
    settings: "Çerez ayarları",
  },
  es: {
    body: "¿Puede este sitio web usar cookies de Google Analytics para contar visitas y descargas (por país y ciudad, nunca por nombre)? Puedes cambiar tu elección en cualquier momento en «Configuración de cookies», al pie de cada página.",
    app: "Esto solo afecta a este sitio web. La app SafePersonalAI que descargas es independiente: no envía nada a Google Analytics ni a nosotros.",
    allow: "Permitir",
    deny: "No, gracias",
    more: "Política de privacidad",
    settings: "Configuración de cookies",
  },
  zh: {
    body: "本网站可以使用 Google Analytics Cookie 统计访问量和下载量吗（按国家和城市，从不按姓名）？你可以随时在每页底部的“Cookie 设置”中更改选择。",
    app: "这只涉及本网站。你下载的 SafePersonalAI 应用是分开的：它不会向 Google Analytics 或我们发送任何内容。",
    allow: "允许",
    deny: "不用了",
    more: "隐私政策",
    settings: "Cookie 设置",
  },
  fr: {
    body: "Ce site peut-il utiliser des cookies Google Analytics pour compter les visites et les téléchargements (par pays et par ville, jamais par nom) ? Vous pouvez changer d'avis à tout moment via « Paramètres des cookies » en bas de chaque page.",
    app: "Cela ne concerne que ce site. L'app SafePersonalAI que vous téléchargez est distincte : elle n'envoie rien à Google Analytics ni à nous.",
    allow: "Autoriser",
    deny: "Non merci",
    more: "Politique de confidentialité",
    settings: "Paramètres des cookies",
  },
};

export const OPEN_EVENT = "spa-open-cookie-settings";

function read(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function write(value: string) {
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* private window: the notice comes back next visit */
  }
}

export default function CookieConsent({ lang = "en" }: { lang?: string }) {
  const [open, setOpen] = useState(false);
  const t = TEXTS[lang] ?? TEXTS.en;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    const choice = read();
    if (choice === "yes") loadAnalytics();
    else if (choice !== "no") setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  if (!GA_MEASUREMENT_ID || !open) return null;

  const choose = (yes: boolean) => {
    const was = read();
    write(yes ? "yes" : "no");
    setOpen(false);
    if (yes) loadAnalytics();
    else if (was === "yes") window.location.reload(); // stops Analytics already loaded on this page
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t.settings}
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-2xl border border-border bg-bg/95 p-5 text-sm text-text-secondary shadow-2xl backdrop-blur"
    >
      <p className="text-text">{t.body}</p>
      <p className="mt-2">{t.app}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => choose(true)}
          className="rounded-full border border-border px-5 py-2 font-medium text-text transition hover:bg-white/5"
        >
          {t.allow}
        </button>
        <button
          type="button"
          onClick={() => choose(false)}
          className="rounded-full border border-border px-5 py-2 font-medium text-text transition hover:bg-white/5"
        >
          {t.deny}
        </button>
        <a href="/privacy" className="ml-auto text-xs underline underline-offset-2 hover:text-text">
          {t.more}
        </a>
      </div>
    </div>
  );
}

// The footer link that brings the notice back.
export function CookieSettingsLink({ lang = "en" }: { lang?: string }) {
  if (!GA_MEASUREMENT_ID) return null;
  const t = TEXTS[lang] ?? TEXTS.en;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className="transition hover:text-text-secondary"
    >
      {t.settings}
    </button>
  );
}
