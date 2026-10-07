import type { PagesDictionary } from "./en";

// German. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const dePages: PagesDictionary = {
  card: {
    waits: "Es wartet auf Ihre Freigabe.",
    show: "▶ Ansehen, was SafePersonalAI daraus macht",
    back: "↺ Ursprüngliche Nachricht zeigen",
  },
  waitlist: {
    placeholder: "sie@beispiel.de",
    emailLabel: "E-Mail-Adresse",
    button: "Benachrichtigen",
    loading: "Wird eingetragen …",
    done: "✓ Sie stehen auf der Liste — wir schreiben Ihnen, sobald es so weit ist.",
    error: "Das hat nicht geklappt — bitte versuchen Sie es gleich noch einmal.",
  },
  base: {
    metaTitle: "Base — aus E-Mails werden Termine und Aufgaben auf Ihrem Mac, mit Ihrer Freigabe",
    metaDescription:
      "Liest Ihre E-Mails auf Ihrem Mac und bereitet Kalendereinträge, Aufgaben, Rechnungen und Verlängerungen zur Freigabe vor. Per iMessage ansprechbar. Versendet nie E-Mails, bezahlt nie und klickt nie auf Links.",
    name: "Base",
    tagline: "Posteingang, Kalender und Aufgaben — erledigt, ohne Überraschungen.",
    intro:
      "Der Teil von SafePersonalAI, mit dem jede Installation beginnt. Er liest Ihre neuen E-Mails und die iMessages, die Sie ihm schicken, erkennt, was zu tun ist, und bereitet es vor. Was dann passiert, entscheiden Sie.",
    steps: [
      {
        title: "Es liest",
        body: "Neue E-Mails aus Gmail oder Apple Mail und Nachrichten, die Sie ihm von Ihrer eigenen Nummer schicken — in vielen Sprachen.",
      },
      {
        title: "Sie geben frei",
        body: "Jeder vorgeschlagene Kalendereintrag, jede Rechnung und jede Buchung landet in einer Prüfliste. Freigeben, ablehnen oder verschieben — im Dashboard oder in der Menüleiste.",
      },
      {
        title: "Es handelt",
        body: "Erst dann passiert es — ein Termin steht im Kalender, eine Rechnung ist vorgemerkt. E-Mails versendet es nie für Sie.",
      },
    ],
    features: [
      {
        title: "Ihr Posteingang, gelesen auf das, was er von Ihnen will",
        body: "Es liest neue E-Mails und erkennt, was sie von Ihnen verlangen — eine Aufgabe mit Frist, einen Termin, eine Terminänderung, eine Rechnung, eine Verlängerung — und bereitet es zur Freigabe vor. Ein Datum, das nicht im Text steht, wird nie erfunden.",
      },
      {
        title: "Kalendereinträge, ohne jemanden einzuladen",
        body: "Freigegebene Termine gehen in den Google Kalender, den Apple Kalender oder beide. Es kann niemanden einladen — diese Fähigkeit gibt es in der Software schlicht nicht.",
      },
      {
        title: "Aufgaben mit Datum",
        body: "Hinzufügen, abhaken, verschieben. Die Farbe zeigt, was überfällig, bald fällig oder in Ordnung ist, und eine wiederkehrende Aufgabe kommt von selbst zurück. Auf Wunsch nennt Ihnen ein Morgenüberblick die Termine des Tages und die fälligen Rechnungen.",
      },
      {
        title: "Schreiben Sie ihm von Ihrer eigenen Nummer",
        body: "Mehr als 25 iMessage-Befehle, jeder einzeln einschaltbar: „Erinnere mich, morgen den Vermieter anzurufen“, „Was steht morgen im Kalender?“, „Wo ist mein Paket?“ oder „Erkläre das:“ mit einem eingefügten Brief. Es antwortet nur Ihnen.",
      },
      {
        title: "Ihre eigenen einfachen Regeln",
        body: "„Wenn in einer E-Mail oder Nachricht X vorkommt, tue Y“: eine Aufgabe, ein Kalenderblock oder ein Einnahmen- oder Ausgabeneintrag. Über ein einfaches Formular, ohne Code.",
      },
      {
        title: "Ihr eigener KI-Schlüssel — oder gar keiner",
        body: "Ein lokales Ollama-Modell auf Ihrem Mac bedeutet: keine KI-Rechnung; es kann langsamer und ungenauer sein als ein Cloud-Modell. Lieber Anthropic, OpenAI oder Gemini? Verbinden Sie Ihren eigenen Schlüssel und bezahlen Sie den Anbieter direkt — wir stehen nie dazwischen.",
      },
    ],
    seeEyebrow: "Was Sie tatsächlich sehen",
    seeTitle: "Eine ruhige Liste für jede Entscheidung.",
    seeBody:
      "SafePersonalAI liest, was ankommt, bereitet einen klaren Vorschlag vor und lässt die letzte Entscheidung bei Ihnen.",
    casesEyebrow: "In Aktion",
    casesTitle: "Was es jeden Tag erledigt.",
    casesBody: "Drei Beispiele aus dem Alltag. Klicken Sie eines an, um zu sehen, was SafePersonalAI daraus macht.",
    cases: [
      {
        inputLabel: "E-Mail der Zahnarztpraxis",
        inputSub: "„Ihr Termin ist am Donnerstag um 15:00 Uhr.“",
        outputTitle: "„Zahnarzt — Do., 15:00“ in den Kalender eintragen",
        outputSub: "Aus der E-Mail vorbereitet, mit Anzeige der Quelle",
      },
      {
        inputLabel: "E-Mail des Schulsekretariats",
        inputSub: "„Bitte senden Sie das unterschriebene Formular bis Freitag.“",
        outputTitle: "Aufgabe: unterschriebenes Formular senden — fällig Freitag",
        outputSub: "Die Frist ist die aus der E-Mail, nie geraten",
      },
      {
        inputLabel: "E-Mail: Ihr Termin wurde verlegt",
        inputSub: "„Ihr Termin wurde von Dienstag auf Donnerstag verlegt.“",
        outputTitle: "Kalenderänderung vorbereitet: Dienstag → Donnerstag",
        outputSub: "Der bestehende Eintrag wird geändert, nicht verdoppelt",
      },
    ],
  },
  travel: {
    metaTitle: "Travel — Flugpreis-Alarm auf Ihrem Mac, mit Ihrem eigenen kostenlosen Suchschlüssel",
    metaDescription:
      "Beobachten Sie Flugpreise pro Strecke auf Ihrem Mac, mit Ihrem eigenen kostenlosen Suchschlüssel. Eine Mitteilung, wenn ein Preis unter Ihre Grenze fällt. Buchungen aus Ihren E-Mails werden zu Reisen.",
    name: "Travel",
    tagline: "Flugpreise werden für Sie beobachtet — ohne dass es Sie etwas kostet.",
    intro:
      "Sagen Sie, welche Strecken wichtig sind und was ein guter Preis ist. Es prüft leise im Hintergrund und meldet sich nur, wenn ein Preis wirklich unter Ihrer Grenze liegt.",
    steps: [
      {
        title: "Sagen Sie, was zählt",
        body: "Eine Strecke, Ihre Reisedaten und der Preis, bei dem Sie buchen würden. Tippen Sie eine Stadt oder einen Flughafen und wählen Sie aus den Vorschlägen.",
      },
      {
        title: "Es prüft leise",
        body: "Einmal am Tag, innerhalb der Suchen, die Ihr eigener Schlüssel erlaubt — keine ausufernden Kosten, kein ständiges Neuladen.",
      },
      {
        title: "Sie hören nur von einem echten Angebot",
        body: "Nur wenn eine beobachtete Strecke wirklich unter Ihre Grenze fällt — sonst stört Sie nichts.",
      },
    ],
    features: [
      {
        title: "Preisbeobachtung innerhalb Ihres Kontingents",
        body: "Jede beobachtete Strecke wird einmal am Tag geprüft, innerhalb der Suchen, die Ihr eigener Schlüssel erlaubt — keine überraschende Rechnung für eine Funktion, die Ihnen Geld sparen soll.",
      },
      {
        title: "Meldung nur bei einem echten Angebot",
        body: "Sie legen den Preis fest. Sie bekommen eine Mitteilung, wenn ein echter Preis darunter liegt — nicht bei jeder gewöhnlichen Schwankung.",
      },
      {
        title: "Ihr eigener kostenloser Suchschlüssel",
        body: "Nutzen Sie Ihren eigenen kostenlosen SerpApi-Schlüssel, gut für 250 Suchen im Monat. Der Schlüssel bleibt auf Ihrem Mac, und das Kontingent gehört ganz Ihnen.",
      },
      {
        title: "Flexible Daten und mehrere Stopps",
        body: "Vergleichen Sie Reiselängen und ein, zwei Tage davor oder danach, oder suchen Sie zwei bis vier Teilstrecken wie Hannover → Antalya → Palma → Hannover. Eine Markierung zeigt, ob die Daten in Ihrem Google Kalender frei sind.",
      },
      {
        title: "Buchungen aus Ihren E-Mails",
        body: "Flug- und Hotelbestätigungen werden zu Kalendereinträgen und einem gespeicherten Reiseplan, zusammengefasst zu Reisen mit Countdown.",
      },
      {
        title: "Packen und Check-in",
        body: "Wenn Sie eine Buchung freigeben, entsteht zwei Tage vorher eine Aufgabe zum Packen und am Tag davor eine zum Online-Check-in.",
      },
    ],
    watchEyebrow: "Was es beobachtet",
    watchTitle: "Jede Strecke, täglich geprüft, gegen Ihre eigene Grenze.",
    watchBody:
      "Sie entscheiden, was ein Angebot ist. Es meldet sich nur, wenn eine beobachtete Strecke diese Zahl wirklich unterschreitet — alles andere bleibt ruhig im Hintergrund.",
    seeEyebrow: "Was Sie tatsächlich sehen",
    seeTitle: "Eine Mitteilung, nur wenn sie Ihre Aufmerksamkeit wert ist.",
    seeBody:
      "Kein Dashboard, das Sie prüfen müssen — eine einzige Mitteilung, wenn ein Preis wirklich unter Ihrer Grenze liegt, und gar nichts, wenn nicht.",
  },
  iphone: {
    metaTitle: "iPhone",
    metaDescription:
      "SafePersonalAI vom iPhone aus sehen und steuern. Ihr Mac macht weiter die Arbeit und behält Ihre Daten; das iPhone ist ein verschlossenes Fenster darauf, über Ihre eigene iCloud.",
    name: "iPhone · kommt bald",
    tagline: "Ihr Mac macht die Arbeit. Ihr iPhone sagt Ja.",
    intro:
      "Ein optionaler Begleiter für alle, die SafePersonalAI auf einem Mac nutzen. Geben Sie frei, was wartet, sehen Sie nach Ihrem Tag und Ihrem Geld, legen Sie eine Aufgabe an — von überall. Ihre Daten bleiben auf Ihrem Mac; das iPhone zeigt eine verschlossene Kopie, die über Ihre eigene iCloud reist.",
    priceNote: "im Monat · optional · jederzeit kündbar",
    steps: [
      {
        title: "Einmal koppeln, mit der Kamera",
        body: "Ihr Mac zeigt einen Code. Richten Sie das iPhone darauf und bestätigen Sie am Mac. Beide teilen nun einen Schlüssel, der nie irgendwohin übertragen wurde.",
      },
      {
        title: "Sehen, was Ihr Mac sieht",
        body: "Was auf Ihre Freigabe wartet, Ihre Woche, Ihre Aufgaben, Ihr Geld — das letzte Bild, das Ihr Mac geschickt hat, auch während er schläft.",
      },
      {
        title: "Von überall Ja sagen",
        body: "Freigeben, ablehnen, eine Aufgabe anlegen. Ihr Mac führt es aus, sobald er wach und online ist, und meldet dem iPhone, dass es erledigt ist.",
      },
    ],
    features: [
      {
        title: "Nicht einmal Apple kann es lesen",
        body: "Alles, was die beiden austauschen, wird mit dem Kopplungsschlüssel verschlossen, bevor es das Gerät verlässt. Es reist durch den privaten Teil Ihrer eigenen iCloud. Wir betreiben keinen Server, also liegt bei uns nichts von Ihnen.",
      },
      {
        title: "Freigeben, was wartet",
        body: "Eine Mitteilung, wenn etwas Ihre Freigabe braucht, dann Freigeben oder Ablehnen. Was eine Angabe braucht, die nur der Mac erfassen kann, sagt das, statt zu raten.",
      },
      {
        title: "Ihr Tag und Ihre Woche",
        body: "Termine aus Apple Kalender und Google Kalender, anstehende Geburtstage und die Zahlungen dieser Woche.",
      },
      {
        title: "Ihr Geld, mit den Diagrammen",
        body: "Mit Wealth: Kontostand, Ausgaben nach Kategorie für einen Monat bis zu einem Jahr, Budgets, die letzten Umsätze, die nächsten 30 Tage und Ihre Geldanlagen mit Gewinn und Verlust.",
      },
      {
        title: "Das iPhone kann Ihre Schlüssel nicht ändern",
        body: "Schlüssel, E-Mail-Konten und vertrauenswürdige Absender werden nur am Mac eingestellt. Das iPhone kann um eine kurze, feste Liste von Dingen bitten — und jede Bitte wird vom Mac geprüft.",
      },
      {
        title: "Jederzeit aufhören, nichts verlieren",
        body: "Beenden Sie das Abo, und das iPhone wird am Ende des bezahlten Monats still. Auf Ihrem Mac ändert sich nichts, und die Kopplung bleibt erhalten, falls Sie zurückkommen.",
      },
    ],
    screensEyebrow: "So sieht es aus",
    screensTitle: "Drei Ansichten, die Sie jeden Tag nutzen werden.",
    screensBody:
      "Echte Ansichten der App, gefüllt mit ihren eingebauten Beispieldaten — dieselbe Vorschau mit Beispieldaten, die Sie öffnen können, bevor Sie einen Mac koppeln. Die App selbst ist auf Englisch.",
    screens: [
      {
        alt: "Die Ansicht „Today“: ein Kalendereintrag, der auf Freigabe wartet, mit den Tasten Approve und Reject, die Termine des Tages, ein Geburtstag und der Kontostand.",
        title: "Heute",
        body: "Was auf Ihre Freigabe wartet, mit Freigeben und Ablehnen, dann Ihr Tag: Termine, Geburtstage und Ihr Kontostand.",
      },
      {
        alt: "Die Ansicht „Wealth“: Summe aus Konten und Geldanlagen, die Zahlungen der nächsten 30 Tage und eine Kurve der nächsten 90 Tage.",
        title: "Wealth",
        body: "Ihre Summe, die Zahlungen der nächsten 30 Tage und wo das Geld danach steht. Benötigt das Modul Wealth.",
      },
      {
        alt: "Die Ansicht „Forecast“: eine Kurve des erwarteten Kontostands über die nächsten 90 Tage, ihr tiefster Punkt und Summen für 30, 60 und 90 Tage.",
        title: "Vorschau",
        body: "Die nächsten 90 Tage als Kurve. Tippen Sie darauf, um einen Tag zu sehen und was sich an ihm bewegt — auch das, was Sie selbst geplant haben.",
      },
    ],
    knowTitle: "Gut zu wissen, bevor Sie abonnieren",
    know: [
      {
        lead: "Es braucht die Mac-App.",
        text: "Die iPhone-App ist ein Fenster auf SafePersonalAI auf Ihrem Mac. Allein funktioniert sie nicht.",
      },
      {
        lead: "Dasselbe iCloud-Konto auf beiden.",
        text: "Mac und iPhone müssen mit demselben iCloud-Konto angemeldet sein, mit etwas freiem iCloud-Speicher.",
      },
      {
        lead: "Lesen geht, während der Mac schläft; Ausführen nicht.",
        text: "Sie sehen das letzte Bild, das Ihr Mac geschickt hat. Worum Sie bitten, wird ausgeführt, wenn der Mac wach und online ist.",
      },
      {
        lead: "Mitteilungen können sich verspäten.",
        text: "iOS entscheidet, wie oft es eine App im Hintergrund weckt. Eine Mitteilung kann Minuten später ankommen und im Stromsparmodus ganz ausbleiben.",
      },
      {
        lead: "Noch nicht im App Store.",
        text: "Die App ist gebaut und wird getestet. Hinterlassen Sie oben Ihre Adresse, und wir sagen Ihnen an dem Tag Bescheid, an dem sie da ist.",
      },
    ],
    trademark:
      "iPhone, iCloud, Face ID, Touch ID, Mac und App Store sind Marken von Apple Inc., eingetragen in den USA und anderen Ländern und Regionen. SafePersonalAI ist nicht mit Apple verbunden und wird nicht von Apple unterstützt.",
  },
};
