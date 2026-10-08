import type { Locale } from "@/i18n/config";

// The iPhone page's "text it" section: five short films of a message sent from
// your own iPhone and the app's answer (marketing/studio, specs uc_*). The
// commands and answers in the films are the app's own; names, dates and
// amounts are examples. One caption per film, in the order of TextingSection.

export type TextingText = {
  eyebrow: string;
  title: string;
  body: string;
  note: string;
  films: { title: string; body: string }[];
};

export const texting: Record<Locale, TextingText> = {
  en: {
    eyebrow: "From your iPhone",
    title: "Text your Mac. It answers.",
    body: "Send a message to yourself in iMessage. The app on your Mac reads it and replies to you, and only to you. Each command is switched on separately in Settings. This works with the Mac app and Messages alone; it does not need the iPhone app below.",
    note: "Example names, dates and amounts. The app answers in English today.",
    films: [
      { title: "What is my spending this month?", body: "This month's spending by category, what changed since last month, and how fresh each account's data is." },
      { title: "A to-do, by text", body: "“Remind me to call the landlord tomorrow” becomes a to-do with its date." },
      { title: "How was my month?", body: "Spending by category, compared with last month, from your own statements." },
      { title: "Explain this letter", body: "Paste an official letter and get it in plain words. Its deadline becomes a to-do." },
      { title: "What do I need to bring?", body: "It quotes what your appointment's confirmation email asks you to bring." },
    ],
  },
  de: {
    eyebrow: "Vom iPhone aus",
    title: "Schreiben Sie Ihrem Mac. Er antwortet.",
    body: "Schicken Sie sich in iMessage selbst eine Nachricht. Die App auf Ihrem Mac liest sie und antwortet Ihnen, und nur Ihnen. Jeder Befehl wird in den Einstellungen einzeln eingeschaltet. Das funktioniert allein mit der Mac-App und Nachrichten; die iPhone-App weiter unten ist dafür nicht nötig.",
    note: "Beispielnamen, -daten und -beträge. Die App antwortet derzeit auf Englisch.",
    films: [
      { title: "Was habe ich diesen Monat ausgegeben?", body: "Die Ausgaben dieses Monats nach Kategorie, die Veränderung zum Vormonat und wie aktuell die Daten jedes Kontos sind." },
      { title: "Eine Aufgabe per Nachricht", body: "„Erinnere mich daran, morgen den Vermieter anzurufen“ wird zu einer Aufgabe mit Datum." },
      { title: "Wie war mein Monat?", body: "Ausgaben nach Kategorie, verglichen mit dem Vormonat, aus Ihren eigenen Kontoauszügen." },
      { title: "Erklär mir diesen Brief", body: "Fügen Sie einen Behördenbrief ein und erhalten Sie ihn in einfachen Worten. Seine Frist wird zur Aufgabe." },
      { title: "Was muss ich mitbringen?", body: "Es zitiert, was die Bestätigungs-E-Mail Ihres Termins von Ihnen verlangt." },
    ],
  },
  tr: {
    eyebrow: "iPhone'unuzdan",
    title: "Mac'inize yazın. Yanıt versin.",
    body: "iMessage'da kendinize bir mesaj gönderin. Mac'inizdeki uygulama onu okur ve size, yalnızca size yanıt verir. Her komut Ayarlar'da ayrı ayrı açılır. Bu yalnızca Mac uygulaması ve Mesajlar ile çalışır; aşağıdaki iPhone uygulaması gerekmez.",
    note: "Örnek adlar, tarihler ve tutarlar. Uygulama şimdilik İngilizce yanıt verir.",
    films: [
      { title: "Bu ay ne kadar harcadım?", body: "Bu ayın harcamaları kategoriye göre, geçen aya göre değişim ve her hesabın verisinin ne kadar güncel olduğu." },
      { title: "Mesajla yapılacak iş", body: "“Bana yarın ev sahibini aramamı hatırlat” tarihiyle birlikte bir yapılacak işe dönüşür." },
      { title: "Bu ay nasıl geçti?", body: "Kategoriye göre harcama, geçen ayla karşılaştırmalı; kendi hesap özetlerinizden." },
      { title: "Bu mektubu açıkla", body: "Resmi bir mektubu yapıştırın, sade bir dille anlatsın. Son tarihi yapılacak işe dönüşür." },
      { title: "Yanımda ne götürmeliyim?", body: "Randevunuzun onay e-postasında sizden istenenleri aktarır." },
    ],
  },
  es: {
    eyebrow: "Desde tu iPhone",
    title: "Escribe a tu Mac. Te responde.",
    body: "Envíate un mensaje a ti mismo en iMessage. La app de tu Mac lo lee y te responde a ti, y solo a ti. Cada comando se activa por separado en Ajustes. Funciona solo con la app para Mac y Mensajes; no necesita la app para iPhone de más abajo.",
    note: "Nombres, fechas e importes de ejemplo. Los vídeos están en inglés; la app responde hoy en inglés.",
    films: [
      { title: "¿Cuánto he gastado este mes?", body: "El gasto de este mes por categoría, lo que cambió respecto al mes anterior y lo recientes que son los datos de cada cuenta." },
      { title: "Una tarea, por mensaje", body: "«Recuérdame llamar al casero mañana» se convierte en una tarea con su fecha." },
      { title: "¿Cómo fue mi mes?", body: "Gasto por categoría, comparado con el mes anterior, a partir de tus propios extractos." },
      { title: "Explícame esta carta", body: "Pega una carta oficial y recíbela en palabras sencillas. Su plazo se convierte en una tarea." },
      { title: "¿Qué tengo que llevar?", body: "Cita lo que el correo de confirmación de tu cita te pide llevar." },
    ],
  },
  zh: {
    eyebrow: "用你的 iPhone",
    title: "给你的 Mac 发信息，它会回复。",
    body: "在 iMessage 里给自己发一条信息。Mac 上的应用读取它，并且只回复给你本人。每条指令都可以在设置中单独开启。这只需要 Mac 应用和“信息”即可使用，不需要下面介绍的 iPhone 应用。",
    note: "示例中的姓名、日期和金额均为虚构。视频为英文；应用目前以英文回复。",
    films: [
      { title: "我这个月花了多少？", body: "本月按类别的支出、与上月相比的变化，以及每个账户的数据有多新。" },
      { title: "发条信息，记下待办", body: "“提醒我明天给房东打电话”会变成一项带日期的待办。" },
      { title: "我这个月花得怎么样？", body: "按类别列出支出，并与上月比较，数据来自你自己的对账单。" },
      { title: "解释这封信", body: "粘贴一封官方信件，得到通俗易懂的说明。信中的截止日期会变成待办。" },
      { title: "我需要带什么？", body: "它会引用预约确认邮件里要求你携带的东西。" },
    ],
  },
  fr: {
    eyebrow: "Depuis votre iPhone",
    title: "Écrivez à votre Mac. Il répond.",
    body: "Envoyez-vous un message dans iMessage. L'app sur votre Mac le lit et vous répond, à vous seul. Chaque commande s'active séparément dans les Réglages. Cela fonctionne avec l'app Mac et Messages seuls ; l'app iPhone ci-dessous n'est pas nécessaire.",
    note: "Noms, dates et montants d'exemple. Les vidéos sont en anglais ; l'app répond aujourd'hui en anglais.",
    films: [
      { title: "Combien ai-je dépensé ce mois-ci ?", body: "Les dépenses du mois par catégorie, ce qui a changé depuis le mois dernier, et la fraîcheur des données de chaque compte." },
      { title: "Une tâche, par message", body: "« Rappelle-moi d'appeler le propriétaire demain » devient une tâche avec sa date." },
      { title: "Comment s'est passé mon mois ?", body: "Les dépenses par catégorie, comparées au mois précédent, à partir de vos propres relevés." },
      { title: "Explique-moi cette lettre", body: "Collez une lettre officielle et recevez-la en mots simples. Son échéance devient une tâche." },
      { title: "Que dois-je apporter ?", body: "Il cite ce que l'e-mail de confirmation de votre rendez-vous vous demande d'apporter." },
    ],
  },
};
