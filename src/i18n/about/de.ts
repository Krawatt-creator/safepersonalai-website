import type { AboutDictionary } from "./en";

export const deAbout: AboutDictionary = {
  metaTitle: "Was ist SafePersonalAI? Ein privater KI-Assistent für den Mac, einmal bezahlt",
  metaDescription:
    "SafePersonalAI ist eine Mac-App, die Ihre E-Mails liest und Kalendereinträge, Aufgaben, Reisepläne und einen Überblick über Ihr Geld vorschlägt. Sie läuft auf Ihrem Mac, wartet auf Ihre Freigabe und kostet einmalig – ohne Abo.",
  footerLabel: "Was ist SafePersonalAI?",
  answersLabel: "Antworten (EN)",
  eyebrow: "In einfachen Worten",
  title: "Was ist SafePersonalAI?",
  lead: "SafePersonalAI ist ein privater KI-Assistent für den Mac. Er liest Ihre neuen E-Mails und die Notizen, die Sie sich selbst schicken, schlägt Kalendereinträge, Aufgaben, Reisen und Geldbuchungen vor und wartet auf Ihre Freigabe, bevor sich etwas ändert. Er läuft auf Ihrem eigenen Mac, arbeitet mit einem lokalen KI-Modell und wird einmal bezahlt statt jeden Monat.",
  factsTitle: "Die Fakten in Kürze",
  facts: [
    { label: "Was es ist", value: "Eine Mac-App. Keine Website und kein Chatfenster." },
    {
      label: "Läuft auf",
      value: "Macs mit Apple-Chip (M1 oder neuer). Intel-Macs und Windows werden nicht unterstützt.",
    },
    {
      label: "KI-Modell",
      value:
        "Ein lokales Ollama-Modell ohne Konto und ohne KI-Rechnung, oder Ihr eigener Schlüssel von Anthropic, OpenAI oder Gemini.",
    },
    {
      label: "Liest",
      value: "Gmail, Apple Mail und die Notizen, die Sie sich per iMessage selbst schicken.",
    },
    {
      label: "Erstellt",
      value: "Kalendereinträge in Google Kalender oder Apple Kalender und Aufgaben mit Datum.",
    },
    {
      label: "Kann nicht",
      value:
        "E-Mails senden, Personen einladen, Links anklicken, bezahlen oder Geld bewegen. Diese Fähigkeiten sind nicht eingebaut.",
    },
    {
      label: "Ihre Daten",
      value:
        "Bleiben auf Ihrem Mac. Es gibt keinen SafePersonalAI-Server, der Ihre Mails, Ihren Kalender oder Ihre Gelddaten speichert.",
    },
    {
      label: "Preis",
      value:
        "Kostenlose Beta: Jedes Modul ist {days} Tage offen. Danach ein einmaliger Kauf: Base {base} €, Travel {travel} €, Wealth {wealth} €, oder alle drei für {bundle} €.",
    },
    { label: "Abo", value: "Keines für die Mac-App." },
    {
      label: "Aktuelle Version",
      value: "{version}, von Apple notarisiert. Menüs, Überschriften und Schaltflächen auf Deutsch, Englisch, Türkisch, Spanisch, Chinesisch oder Französisch; längere Texte sind noch auf Englisch.",
    },
  ],
  sections: [
    {
      title: "Was es tut",
      paragraphs: [
        "Base ist die Grundlage. Es liest neue Mails, findet Termine, geänderte Termine, Fristen und Bitten und legt jede davon als vorgeschlagenen Kalendereintrag oder als Aufgabe in eine Liste. Sie geben frei, lehnen ab oder verschieben. Sie können der App auch kurze Notizen per iMessage schicken und eigene Regeln festlegen, zum Beispiel „wenn eine Mail dieses Wort enthält, schlage diesen Eintrag vor“.",
        "Travel beobachtet Flugpreise auf den Strecken, die Sie wählen, und meldet sich, wenn ein Preis unter Ihre Grenze fällt. Es sucht mit flexiblen Daten und über mehrere Teilstrecken, zeigt, ob die Tage in Ihrem Kalender frei sind, und baut aus Ihren Buchungsmails eine Reise.",
        "Wealth liest den Kontoauszug, den Ihre Bank Ihnen ohnehin gibt – CSV, Excel, PDF, MT940, CAMT, OFX oder QIF –, ohne sich bei Ihrer Bank anzumelden. Es zeigt Ausgaben nach Kategorie, eine Vorschau auf die nächsten ein bis drei Monate, Budgets, gefundene Abos sowie Ihre Geldanlagen und Kredite.",
      ],
    },
    {
      title: "Wie es funktioniert",
      paragraphs: [
        "Es arbeitet in drei Schritten. Zuerst liest das KI-Modell eine Nachricht und ermittelt, was sie bedeutet. Dann erscheint das vorgeschlagene Ergebnis in einer Liste, zusammen mit der Nachricht, aus der es stammt. Erst wenn Sie es freigeben, legt die App den Kalendereintrag oder die Aufgabe an.",
        "Daten und Beträge werden nach festen Regeln geprüft, nicht nur vom Modell. Ein Datum, das nicht im Text steht, wird nie erfunden.",
      ],
    },
    {
      title: "Der Unterschied zu einem Chat-Assistenten",
      paragraphs: [
        "Ein Chat-Assistent wie ChatGPT oder Claude antwortet, wenn Sie ihn etwas fragen. SafePersonalAI arbeitet selbstständig im Hintergrund: Es liest die Mails, die ankommen, und bereitet den nächsten Schritt für Sie vor.",
        "Es ist außerdem absichtlich viel stärker begrenzt. Es hat nur wenige Fähigkeiten, und Senden, Bezahlen und Anklicken gehören nicht dazu. Auch eine Freigabe schaltet sie nicht frei.",
      ],
    },
    {
      title: "Wohin Ihre Daten gehen",
      paragraphs: [
        "Mit einem lokalen Ollama-Modell wird der Text Ihrer Mails auf Ihrem Mac verarbeitet und geht nirgendwo anders hin.",
        "Wenn Sie stattdessen einen Cloud-Anbieter wählen, geht der für eine Anfrage nötige Text direkt von Ihrem Mac an diesen Anbieter – unter Ihrem eigenen Konto und zu dessen Bedingungen. Er läuft nicht über einen SafePersonalAI-Server. Ihr Schlüssel wird auf Ihrem Mac gespeichert.",
      ],
    },
    {
      title: "Was es kostet",
      paragraphs: [
        "Die Beta kann kostenlos geladen werden, und jedes Modul ist {days} Tage offen. Danach wird jedes Modul einmal gekauft: Base {base} €, Travel {travel} €, Wealth {wealth} €. Alle drei zusammen kosten {bundle} €. Der Kauf ist noch nicht möglich, heute wird also nichts berechnet.",
        "Ein Modul, das Sie nicht kaufen, schließt sich nach den {days} Tagen. Seine Daten bleiben auf Ihrem Mac und sind wieder da, wenn Sie das Modul hinzufügen.",
      ],
    },
  ],
  forTitle: "Für wen es gedacht ist",
  forItems: [
    "Für Menschen, die Termine und Fristen verpassen, weil sie in E-Mails untergegangen sind.",
    "Für Menschen, die einem KI-Dienst nicht das Recht geben wollen, Mails zu senden oder Geld auszugeben.",
    "Für Menschen, die Software lieber einmal kaufen, statt jeden Monat zu zahlen.",
    "Für Menschen, die ihre Ausgaben sehen wollen, ohne einer App ihren Bankzugang zu geben.",
  ],
  notForTitle: "Für wen es nicht gedacht ist",
  notForItems: [
    "Sie nutzen Windows oder einen Mac mit Intel-Prozessor.",
    "Sie möchten einen Assistenten, der E-Mails für Sie beantwortet und sendet.",
    "Sie möchten, dass er arbeitet, während Ihr Mac ausgeschaltet ist. Er läuft auf Ihrem Mac, also muss der Mac an sein.",
    "Sie möchten, dass Ihre Bank automatisch verbunden wird. Wealth liest Auszugsdateien, die Sie ihm geben.",
  ],
  linksTitle: "Weiterlesen",
  download: "Kostenlose Beta laden",
  pricing: "Preise ansehen",
};
