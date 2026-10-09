import type { Dictionary } from "./en";

// German. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const de: Dictionary = {
  meta: {
    homeTitle: "SafePersonalAI — Privater KI-Assistent für den Mac, ohne Abo",
    homeDescription:
      "SafePersonalAI läuft auf Ihrem Mac, macht aus E-Mails Aufgaben und Kalendereinträge, die auf Ihre Freigabe warten, und arbeitet mit lokalem Ollama oder Ihrem eigenen KI-Anbieter-Konto.",
    wealthTitle: "Wealth — Kontoauszüge jeder Bank auf dem Mac, ohne Bankzugang",
    wealthDescription:
      "Lesen Sie den Kontoauszug jeder Bank auf Ihrem Mac ein — CSV, Excel, PDF, MT940, CAMT, OFX oder QIF — ohne sich bei Ihrer Bank anzumelden. Ausgaben nach Kategorie, eine Vorschau auf die nächsten Monate, Budgets und Ihre Geldanlagen.",
    appDescription:
      "Eine Mac-App, die Ihre E-Mails liest und daraus Kalendereinträge, Aufgaben, Reisepläne und einen klaren Überblick über Ihr Geld macht. Alles, was sie vorschlägt, wartet auf Ihre Freigabe. Sie versendet nie E-Mails, bezahlt nie und klickt nie auf Links. Sie läuft auf Ihrem Mac mit einem lokalen Ollama-Modell oder Ihrem eigenen Schlüssel eines KI-Anbieters.",
    offerDescription: "Kostenloser Beta-Download. Alle Module (Base, Travel, Wealth) sind {days} Tage lang freigeschaltet.",
  },
  nav: {
    useCases: "Anwendungsfälle",
    modules: "Module",
    howItWorks: "So funktioniert es",
    pricing: "Preise",
    faq: "FAQ",
    account: "Konto",
    download: "Beta laden",
    appleSilicon: "Apple Silicon (M1+)",
    appleSiliconRequired: "Apple Silicon (M1+) erforderlich",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    language: "Sprache",
  },
  offer: {
    trialLine: "Während der Beta kostenlos: Alle Module sind {days} Tage lang freigeschaltet.",
    priceLine:
      "Danach ein einmaliger Kauf: Base {base} €, Travel {travel} €, Wealth {wealth} € — oder alle drei für {bundle} €. Der Kauf wird in Kürze möglich.",
    priceNote: "einmalig · in der Beta {days} Tage kostenlos",
    downloadNote:
      "{days} Tage kostenlos, alle Module inklusive · von Apple notarisiert · Apple Silicon (M1 oder neuer)",
  },
  hero: {
    badge: "Der KI-Assistent, der erst fragt · kostenlose Beta",
    titleLine1: "Ein privater KI-Assistent, direkt auf Ihrem Mac.",
    titleLine2: "Nichts geschieht ohne Ihr Ja.",
    body: "SafePersonalAI liest Ihre E-Mails, Nachrichten und Kontoauszüge auf Ihrem eigenen Mac und bereitet Aufgaben, Kalendereinträge und die Finanzübersicht vor. Sie geben jeden Schritt frei. Ihre Daten werden nie an uns gesendet: Sie bleiben auf Ihrem Mac, und die KI läuft ebenfalls dort mit Ollama oder über Ihr eigenes Konto bei einem KI-Anbieter. Einmal zahlen, kein Abo.",
    ctaDownload: "Kostenlose Beta laden",
    ctaUseCases: "Echte Anwendungsfälle ansehen",
    ctaDemo: "Demo ausprobieren",
    ctaDemoHint: "Öffnet die echte App mit erfundenen Daten. Nichts zu installieren. Die Demo ist auf Englisch.",
    finePrint:
      "Für Macs mit Apple Silicon (M1 oder neuer). Nutzen Sie ein lokales Ollama-Modell ohne Cloud-Konto oder Ihren eigenen Schlüssel von Anthropic, OpenAI oder Gemini.",
  },
  panel: {
    title: "Wartende Aktionen",
    preview: "Beispielansicht",
    rows: [
      {
        title: "Aufgabe: unterschriebenes Formular bis Freitag senden",
        detail: "Aus einer E-Mail des Schulsekretariats, mit der Frist",
      },
      {
        title: "„Zahnarzt — 3. Sept., 15:00“ in den Kalender eintragen",
        detail: "Aus einer iMessage, die Sie sich selbst geschickt haben",
      },
      {
        title: "Stromrechnung vormerken — 84,00 €, fällig am 28. Okt.",
        detail: "Aus der Rechnungs-E-Mail gelesen; Erinnerung vor der Fälligkeit",
      },
    ],
    approve: "Freigeben",
    reject: "Ablehnen",
    approved: "✓ Freigegeben",
    rejected: "✕ Abgelehnt",
    allDone: "Alles erledigt — nichts wartet auf Sie.",
    replay: "↺ Demo noch einmal",
    footer: "Diese warten auf Ihre Freigabe. Die App versendet nie E-Mails und bezahlt nie.",
    waiting: "{n} wartend",
  },
  laptop: {
    eyebrow: "Leise, im Hintergrund",
    title: "Es meldet sich nur, wenn es etwas für Sie zu sehen gibt.",
    body: "Kein Ladekreis, kein Dashboard, das Sie beaufsichtigen müssen — nur ein ruhiges Licht, wenn etwas wirklich Ihre Entscheidung braucht.",
  },
  ownership: {
    eyebrow: "Besitzen statt mieten",
    title: "Ihr eigener privater Assistent. Nicht noch ein Abo.",
    intro:
      "SafePersonalAI macht den Mac, der schon auf Ihrem Schreibtisch steht, zu einer privaten Automatisierung. Ihre Arbeitsdaten bleiben lokal, die Beziehung zu Ihrem KI-Anbieter bleibt Ihre, und die Kaufbedingungen sind vor dem Kauf sichtbar.",
    points: [
      {
        title: "Für die Apple-Welt gebaut, die Sie schon besitzen",
        body: "Keine neue Hardware, kein gemieteter Server, kein fremdes Unternehmen, das Ihr Leben speichert. Es läuft ruhig auf Ihrem eigenen Mac — mit dem Gerät, das Sie schon haben.",
      },
      {
        title: "Ihr KI-Anbieter, Ihre Grenze",
        body: "Nutzen Sie Ollama lokal ohne Konto oder verbinden Sie einen unterstützten Cloud-Anbieter mit Ihrem eigenen Schlüssel und bezahlen Sie ihn direkt. Zugangsdaten bleiben auf Ihrem Mac; SafePersonalAI versteckt keine KI-Kosten in einem zweiten Abo und wechselt nie stillschweigend auf ein von uns bezahltes Modell.",
      },
      {
        title: "Als Software gedacht, die Ihnen gehört",
        body: "Jedes Modul ist eine einmalige, an die Version gebundene Lizenz und keine dauerhafte Monatsmiete.",
      },
    ],
    counter: {
      typical: "Ein typisches KI-Abo",
      running: "${cost}/Monat × {n} Monate — und es läuft immer weiter.",
      runningOne: "${cost}/Monat × 1 Monat — und es läuft immer weiter.",
      perMonth: "/Monat",
      ours: "Einmalig pro Modul. Ihr Mac, Ihr KI-Schlüssel — keine Plattformgebühr.",
    },
  },
  boundary: {
    eyebrow: "Die Grenze",
    title: "Eine klare Linie zwischen Denken und Handeln.",
    intro:
      "Die meisten KI-Werkzeuge vermischen Verstehen und Handeln zu einem Schritt. Wir nicht. Was SafePersonalAI aus Ihren E-Mails herausliest, ist ein Vorschlag, bis Sie ihn freigeben. Nur was Ihre eigene Bank meldet, und einige Erinnerungen, werden direkt eingetragen — gekennzeichnet und mit einem Klick rückgängig zu machen.",
    steps: [
      {
        title: "Die KI versteht",
        body: "Sie liest die eingegangene E-Mail als nicht vertrauenswürdige Daten und leitet daraus einen Vorschlag ab: eine Aufgabe, einen Kalendereintrag, eine Verlängerungserinnerung oder eine Aktion eines Moduls.",
      },
      {
        title: "Sie geben frei",
        body: "Jeder Vorschlag landet in einer einzigen Prüfliste. Sie können freigeben, ablehnen, verschieben oder fehlende Angaben ergänzen. Aus Unklarheit wird nie eine Erlaubnis.",
      },
      {
        title: "Die Software handelt",
        body: "Nur die freigegebenen Angaben werden ausgeführt. Kalendereinträge können niemanden einladen; die Finanzfunktionen erfassen und rechnen voraus, können aber kein Geld bewegen.",
      },
    ],
  },
  useCases: {
    eyebrow: "Was es kann",
    title: "Beginnen Sie mit dem Alltag. Ergänzen Sie nur, was Sie brauchen.",
    intro:
      "Base ist die Grundlage für den Alltag. Travel und Wealth erweitern denselben privaten Assistenten, ohne dass Ihre Daten umziehen oder ein weiteres Konto nötig wird.",
    exploreAll: "Alle Anwendungsfälle ansehen →",
    tabsLabel: "Produktmodule",
    queueTitle: "Eine Prüfliste",
    queueBody: "Jedes installierte Modul nutzt dieselbe sichtbare Freigabe. Keine versteckte Automatik.",
    practicalUses: "{n} Anwendungen",
    note: "Die ausführlichen Beispiele hinter jeder Karte sind derzeit auf Englisch.",
    modules: {
      operational: {
        name: "Base",
        label: "Basismodul",
        description: "Posteingang, Kalender, Aufgaben und eigene Regeln für den Alltag.",
      },
      travel: {
        name: "Travel",
        label: "Zusatzmodul",
        description: "Buchungen, Flugpreisbeobachtung und Reiseplanung mit Blick in den Kalender.",
      },
      wealth: {
        name: "Wealth",
        label: "Zusatzmodul",
        description: "Kontoauszüge jeder Bank, Ausgaben, eine Vorschau, Budgets und Geldanlagen.",
      },
    },
    topics: {
      "email-to-task": {
        title: "E-Mail → Aufgabe",
        friction: "Keine wichtige Bitte mehr, die unter neueren E-Mails verschwindet.",
      },
      "calendar-events": {
        title: "Kalendereinträge",
        friction: "Nie wieder den Kalender öffnen, nur um ein Datum einzutippen.",
      },
      "todos-reminders": {
        title: "Aufgaben & Erinnerungen",
        friction: "Keine Frist mehr, die Sie sich fest merken wollten und dann doch verpasst haben.",
      },
      "bill-invoice-tracking": {
        title: "Rechnungen im Blick",
        friction: "Kein Suchen im Posteingang mehr am Abend vor der Fälligkeit.",
      },
      "custom-rules": {
        title: "Ihre eigenen einfachen Regeln",
        friction: "Sie müssen Ihre Gewohnheiten nicht mehr an fremde Automatisierungsvorlagen anpassen.",
      },
      "booking-to-itinerary": {
        title: "Buchung → Reiseplan",
        friction: "Flug- und Hoteldaten nicht mehr an drei Stellen abtippen.",
      },
      "flight-deal-tracking": {
        title: "Flugpreise beobachten",
        friction: "Nicht mehr aus Gewohnheit die Preisseite neu laden.",
      },
      "calendar-aware-travel": {
        title: "Reisen mit Blick in den Kalender",
        friction: "Kein guter Preis mehr, bei dem sich dann herausstellt, dass die Termine nicht passen.",
      },
      "cashflow-forecast": {
        title: "Kontostand-Vorschau",
        friction: "Nicht erst merken, dass das Geld knapp wird, wenn es schon passiert ist.",
      },
      "recurring-cost-watch": {
        title: "Laufende Kosten im Blick",
        friction: "Keine Abos mehr, die unbemerkt im Hintergrund weiterlaufen.",
      },
      "portfolio-import": {
        title: "Depot-Import",
        friction: "Die Broker-App nicht mehr getrennt von allem anderen prüfen.",
      },
    },
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "Eine Installation. {days} Tage kostenlos. Dann einmal zahlen.",
    intro:
      "Laden Sie die Beta, und alle Module sind {days} Tage lang kostenlos freigeschaltet. Danach ist jedes Modul ein einmaliger Kauf — die Mac-App hat kein Abo. Ein Modul, das Sie nicht kaufen, wird geschlossen; seine Daten bleiben auf Ihrem Mac und sind wieder da, wenn Sie es hinzunehmen. Der Kauf wird in Kürze möglich, heute wird nichts berechnet.",
    bundleLead: "Alle drei zusammen:",
    bundleStrong: "einmalig {bundle} €",
    bundleRest: ". Der Kauf wird in Kürze möglich — bis dahin gibt es nichts zu bezahlen.",
    learnMore: "Mehr erfahren →",
    download: "Beta laden",
    included: "In den {days} Testtagen enthalten",
    modules: {
      operational: {
        name: "Base",
        tagline: "Die Grundlage für den Alltag: Posteingang, Kalender, iMessage und Aufgaben.",
        features: [
          "Versteht Ihren Posteingang und bereitet Aufgaben zur Freigabe vor",
          "Kalendereinträge aus E-Mails, ohne Einladungen an andere",
          "Aufgaben mit Fristen und Erinnerungen",
          "Eine Liste wartender Aktionen — freigeben, verschieben oder ablehnen",
          "Läuft auf Ihrem Mac mit lokalem Ollama oder Ihrem eigenen Cloud-Schlüssel",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "Flugpreisbeobachtung, die ihr eigenes Suchkontingent nie überzieht.",
        features: [
          "Tägliche Preisprüfung pro Strecke, innerhalb Ihres Suchkontingents",
          "Hinweis nur, wenn ein Preis wirklich unter Ihre Grenze fällt",
          "Flexible Daten und Gabelflüge",
          "Zeigt, ob die Reisedaten in Ihrem Kalender frei sind",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "Ihr Geld, gelesen aus dem Kontoauszug jeder Bank. Ohne Bankzugang.",
        features: [
          "Kontoauszüge jeder Bank: CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
          "Ausgaben nach Kategorie, für jeden Zeitraum",
          "Vorschau auf die nächsten 1–3 Monate, mit Warnung vor einem Minus",
          "Budgets, gefundene Abos, auffällige Abbuchungen markiert",
          "Geldanlagen und Kredite, mit Import aus Trade Republic",
        ],
      },
    },
  },
  trust: {
    eyebrow: "Vertrauen",
    title: "Für Menschen, die einer KI ihren Posteingang nicht anvertrauen.",
    points: [
      {
        title: "Ihre Daten bleiben auf Ihrem Mac",
        body: "Die Aktionen, Aufgaben, Einstellungen und Moduldaten bleiben auf Ihrem Mac. Inhalte, die an einen Cloud-KI-Anbieter gehen, gehen direkt über das Anbieterkonto, das Sie gewählt haben; SafePersonalAI erhält sie nicht.",
      },
      {
        title: "Lokal oder mit eigenem Schlüssel",
        body: "Ollama kann vollständig auf Ihrem Mac laufen, ohne Konto und ohne Schlüssel. Cloud-Optionen nutzen Ihr eigenes Anbieterkonto; SafePersonalAI speichert den Schlüssel lokal und sendet Anfragen direkt an den gewählten Anbieter, nie über einen Server von SafePersonalAI.",
      },
      {
        title: "Gefährliche Fähigkeiten gibt es nicht",
        body: "Die App kann keine E-Mails versenden, niemanden einladen, keine Links anklicken, nichts kündigen und kein Geld bewegen. Auch eine Freigabe öffnet keinen versteckten Weg dorthin.",
      },
      {
        title: "Jederzeit ins Trust Center schauen",
        body: "Eine Seite zeigt genau, was verbunden ist, was die App kann und nicht kann und wo Ihre Daten tatsächlich liegen — kein Versprechen, das Sie einfach glauben müssen.",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "Nur lesen — kann nicht senden" },
        { label: "Google Kalender", detail: "Lesen + Einträge anlegen" },
        { label: "Google Drive", detail: "Kopien importierter Kontoauszüge" },
        { label: "iMessage", detail: "Wird nur lokal auf Ihrem Mac gelesen" },
        { label: "KI-Anbieter", detail: "Ihr eigener Schlüssel — nie bei uns" },
      ],
      connected: "Verbunden",
      local: "Nur lokal",
      footer: "Gerade geprüft — Sie können jederzeit nachsehen.",
      items: "5 Einträge",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen, die wirklich gestellt werden.",
    items: [
      {
        q: "Was kostet es, und gibt es eine kostenlose Testphase?",
        a: "Die Beta ist kostenlos zu laden, und alle Module — Base, Travel und Wealth — sind {days} Tage lang freigeschaltet. Danach ist jedes Modul ein einmaliger Kauf, kein Abo: Base {base} €, Travel {travel} €, Wealth {wealth} € oder alle drei für {bundle} €. Der Kauf ist noch nicht möglich, heute wird also nichts berechnet. Nach den {days} Tagen wird ein Modul ohne Lizenz geschlossen; seine Daten bleiben auf Ihrem Mac. Wenn Sie einen Cloud-KI-Anbieter nutzen, bezahlen Sie diesen direkt; ein lokales Ollama-Modell verursacht keine KI-Kosten.",
      },
      {
        q: "Brauche ich ein eigenes Konto bei Claude, OpenAI oder Gemini?",
        a: "Nein. Sie können Ollama lokal auf Ihrem Mac nutzen, ohne Cloud-Konto und ohne Schlüssel. Wenn Sie Anthropic, OpenAI oder Gemini wählen, bringen Sie Ihr eigenes Konto und Ihren Schlüssel mit und bezahlen den Anbieter direkt. Manche Anbieter haben ein kostenloses Kontingent: Derzeit bietet Google für Gemini eine kostenlose Stufe mit Tageslimits an, bei der Google Ihre Eingaben zur Verbesserung seiner Modelle verwenden darf. Preise, Freikontingente und Datenbedingungen legt der Anbieter selbst fest, und sie ändern sich — bitte prüfen Sie vor Ihrer Wahl dessen offizielle Website. SafePersonalAI speichert den Schlüssel auf Ihrem Mac, sendet Anfragen direkt an den gewählten Anbieter und erhält Ihren Schlüssel nie und gibt ihn nie weiter. Lokale und Cloud-Modelle arbeiten hinter derselben Freigabe.",
      },
      {
        q: "Ist das nicht einfach ChatGPT oder Claude mit Umwegen?",
        a: "Nein — und das will es auch nicht sein. Ein Chat-Assistent antwortet, wenn Sie fragen. SafePersonalAI liest Ihre neuen E-Mails von selbst, versteht sie mit einem Modell Ihrer Wahl, prüft Daten und Beträge nach festen Regeln und legt jeden vorgeschlagenen Kalendereintrag und jede Aufgabe in eine Liste zu Ihrer Freigabe. Seine Werkzeuge sind bewusst eng: Es kann keine E-Mails versenden, nicht bezahlen und keine Links anklicken.",
      },
      {
        q: "Was, wenn es etwas falsch liest oder das Falsche vorschlägt?",
        a: "Genau dafür gibt es die Freigabe. Sie sehen den Vorschlag und die Nachricht, aus der er stammt, bevor etwas passiert. Ein Datum, das nicht im Text steht, wird nie erfunden, eine Kalenderänderung braucht eine genaue Übereinstimmung mit dem bestehenden Eintrag, und die App kann keine E-Mails versenden, niemanden einladen, keine Links anklicken und kein Geld bewegen.",
      },
      {
        q: "Werden mit meinen Daten KI-Modelle trainiert?",
        a: "SafePersonalAI trainiert kein Modell und erhält den Inhalt Ihres Posteingangs nicht. Wenn Sie einen Cloud-KI-Anbieter wählen, gehen die nötigen Inhalte direkt von Ihrem Mac an diesen Anbieter, zu dessen API-Bedingungen. Lesen Sie dessen aktuelle Regeln zu Datennutzung und Speicherdauer, bevor Sie ihn verbinden.",
      },
      {
        q: "Läuft es in der Cloud oder auf meinem Gerät?",
        a: "Auf Ihrem Gerät. SafePersonalAI ist heute Mac-Software, keine gehostete Web-App — Ihr Mac muss eingeschaltet sein, damit neue Nachrichten geprüft und Ihre Freigaben ausgeführt werden. Es gibt keinen Server von SafePersonalAI, der in der Zwischenzeit Ihre Daten hält.",
      },
      {
        q: "Welchen Mac brauche ich für SafePersonalAI?",
        a: "Die aktuelle Beta braucht einen Mac mit Apple Silicon (M1 oder neuer — also MacBook Air, MacBook Pro, Mac mini, iMac und Mac Studio mit M1/M2/M3/M4). Macs mit Intel-Prozessor werden von dieser Version nicht unterstützt. Die Berechtigungsabfragen stellt macOS bei der Einrichtung selbst; ein eigenes SafePersonalAI-Konto ist nicht nötig.",
      },
      {
        q: "Kann es ohne mich eine Nachricht senden, jemanden einladen oder Geld bewegen?",
        a: "Nein. Die App hat keine Möglichkeit, E-Mails zu versenden, Teilnehmer einzuladen, zu bezahlen, einen Dienst zu kündigen oder einen Link anzuklicken. Kalendereinträge werden ohne Benachrichtigung an andere angelegt, und die Geldfunktionen erfassen nur, was Sie freigeben, und berechnen Vorschauen.",
      },
      {
        q: "Was passiert mit meinen Daten, wenn ich aufhöre, es zu nutzen?",
        a: "Sie bleiben genau dort, wo sie immer waren — auf Ihrem Mac und in Ihren eigenen E-Mail- und Kalenderkonten. Den Zugriff von SafePersonalAI können Sie jederzeit in den Sicherheitseinstellungen des jeweiligen Kontos entfernen; danach gibt es nichts mehr, was es erreichen könnte.",
      },
    ],
  },
  footer: {
    tagline: "Versteht, schlägt vor, wartet auf Ihre Freigabe. Versendet nie E-Mails, bezahlt nie.",
    account: "Konto",
    privacy: "Datenschutz (EN)",
    terms: "Bedingungen (EN)",
  },
  shell: {
    allModules: "← Alle Module",
    whatYouGet: "Was Sie bekommen",
    ready: "Bereit für {name}?",
    required: "Apple Silicon (M1+) erforderlich",
    download: "Beta laden",
  },
  wealth: {
    name: "Wealth",
    tagline: "Ihr Geld, gelesen aus dem Kontoauszug jeder Bank. Ohne Bankzugang.",
    intro:
      "Wealth liest den Kontoauszug, den Ihre Bank Ihnen ohnehin gibt — CSV, Excel, PDF, MT940, CAMT, OFX oder QIF —, erkennt die Spalten selbst und zeigt Ihnen, was es gelesen hat, bevor etwas übernommen wird. Daraus entstehen Ausgaben nach Kategorie, eine Vorschau auf die nächsten Monate, Budgets und Ihre Geldanlagen — alles auf Ihrem Mac.",
    steps: [
      {
        title: "Geben Sie ihm einen Kontoauszug",
        body: "Wählen Sie eine Datei auf der Wealth-Seite oder schicken Sie sie sich selbst per iMessage. Jede Bank, jeder Zeitraum — auch ein ganzes Jahr. Ein Screenshot Ihrer Banking-App funktioniert ebenfalls.",
      },
      {
        title: "Prüfen Sie, was gelesen wurde",
        body: "Sie sehen die Umsätze, das zugehörige Konto und jede Annahme, bevor Sie auf Importieren klicken. Ohne Sie wird nichts übernommen.",
      },
      {
        title: "Sehen Sie, wohin es geht und was kommt",
        body: "Ausgaben nach Kategorie für jeden Zeitraum, die regelmäßigen Zahlungen, die es aus Ihrem Verlauf gelernt hat, und der erwartete Kontostand für die nächsten ein bis drei Monate.",
      },
    ],
    features: [
      {
        title: "Jede Bank, jedes Format",
        body: "CSV, Excel, PDF, MT940, CAMT.053, OFX und QIF. Keine Vorlagen und keine Spaltenzuordnung: Spalten, Daten, Vorzeichen und Währung erkennt es selbst. Getestet mit echten PDF-Auszügen der İş Bankası. Ein PDF muss Text enthalten; ein gescanntes Bild wird mit einer klaren Meldung abgelehnt.",
      },
      {
        title: "Screenshots, auf Ihrem Mac gelesen",
        body: "Ein Screenshot Ihrer Banking- oder Karten-App wird auf Ihrem Mac mit Apples eigener Texterkennung gelesen und nie hochgeladen. Umsätze kommen in die Prüfliste; ein Kontostand wartet, bis Sie ihn einem Konto zuweisen.",
      },
      {
        title: "Ausgaben, die man lesen kann",
        body: "Automatische Kategorien, ein Diagramm nach Kategorie und Einnahmen und Ausgaben Monat für Monat — für einen Monat, die letzten 3, 6 oder 12 oder ein ganzes Jahr. Ändern Sie die Kategorie eines Händlers einmal, und sie bleibt.",
      },
      {
        title: "Eine Vorschau aus Ihrem eigenen Verlauf",
        body: "Es lernt, was jeden Monat wiederkommt — Miete, Kredite, Versicherungen, Abos, Gehalt — und listet die nächsten ein, zwei oder drei Monate mit dem Kontostand nach jeder Zahlung. Es warnt, wenn ein Konto voraussichtlich ins Minus gerät, und Sie können geplante Zahlungen ergänzen.",
      },
      {
        title: "Budgets",
        body: "Ein Monatslimit pro Kategorie, mit einer Nachricht bei 80 % und einer bei 100 % — keine tägliche Erinnerung.",
      },
      {
        title: "Abos und auffällige Abbuchungen",
        body: "Derselbe Händler mit demselben Betrag jeden Monat wird als Abo aufgeführt. Dieselbe Abbuchung zweimal an einem Tag oder ein Betrag weit über dem Üblichen wird als „einen Blick wert“ markiert.",
      },
      {
        title: "Geldanlagen auf einer eigenen Seite",
        body: "Aktien, ETFs, Gold und Krypto: was sie heute wert sind, was Sie eingezahlt haben und Gewinn oder Verlust. Der Transaktionsexport von Trade Republic wird direkt gelesen; Kurse werden aktualisiert, wo es möglich ist.",
      },
      {
        title: "Kredite, durchgerechnet",
        body: "Geben Sie drei der vier Werte Betrag, Zins, Laufzeit und Monatsrate ein, und der vierte wird berechnet. Sie sehen die Restschuld, den Monat der Tilgung und die Gesamtkosten.",
      },
      {
        title: "Alle Konten in einem Saldo",
        body: "Giro-, Spar-, Karten- und Anlagekonten zusammen, angezeigt in einer von 15 Währungen. Jeder Betrag behält seine eigene Währung; umgerechnet wird mit den täglichen EZB-Kursen.",
      },
      {
        title: "Steuerhinweise für Deutschland",
        body: "Sobald Sie Ihr Land gewählt haben, erhalten Umsätze, die für Ihre Steuererklärung wichtig sein könnten, einen kurzen Hinweis, und ein Klick exportiert das Jahr für Ihre Steuerberatung. Nur Hinweise — nie Steuerberatung.",
      },
    ],
    readsEyebrow: "Was es liest",
    readsTitle: "Den Kontoauszug, den Ihre Bank Ihnen ohnehin gibt.",
    readsBody:
      "Wealth verbindet sich nie mit Ihrer Bank und fragt nie nach Ihrem Banking-Passwort. Sie geben ihm eine Auszugsdatei oder einen Screenshot; es liest sie auf Ihrem Mac, ordnet sie dem richtigen Konto zu und wartet, bis Sie auf Importieren klicken.",
    investEyebrow: "Geldanlagen",
    investTitle: "Was Sie besitzen und was es heute wert ist.",
    investBody:
      "Tragen Sie Ihre Aktien, ETFs, Ihr Gold oder Ihre Kryptowerte selbst ein, oder importieren Sie den Transaktionsexport von Trade Republic und lassen Sie Stückzahl und Durchschnittspreis berechnen. Eine Position ohne aktuellen Kurs zählt mit dem, was Sie bezahlt haben — nie mit einem erfundenen Wert.",
    provenTitle: "In der Beta, noch in der Erprobung",
    provenBody:
      "Drei Dinge sind gebaut und lassen sich einschalten, sind aber noch nicht lange genug mit echten Postfächern gelaufen, um sie zu versprechen: Kontoauszüge, die aus den E-Mails Ihrer Bank übernommen werden, Benachrichtigungs-E-Mails der Bank, die ein Konto aktualisieren, und Apple-Pay-Zahlungen über einen einmalig eingerichteten iPhone-Kurzbefehl. Sehen Sie sie als Extras. Der Import eines Auszugs von Hand hängt von keinem davon ab.",
    limitsTitle: "Was Wealth nicht tut",
    limitsBody:
      "Es meldet sich nicht bei Ihrer Bank an, bezahlt nichts und bewegt kein Geld. Es liest keine gescannten PDFs, die nur aus Bildern bestehen — ein Screenshot funktioniert stattdessen. Es gibt keine Steuerberatung; das entscheidet Ihre Steuerberatung. Und es läuft auf Ihrem Mac, Ihre Zahlen liegen also nicht auf einem Server von uns.",
  },
};
