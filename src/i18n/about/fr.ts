import type { AboutDictionary } from "./en";

export const frAbout: AboutDictionary = {
  metaTitle: "Qu'est-ce que SafePersonalAI ? Un assistant IA privé pour Mac, payé une seule fois",
  metaDescription:
    "SafePersonalAI est une app Mac qui lit vos e-mails et propose des événements de calendrier, des tâches, des projets de voyage et une vue de votre argent. Elle fonctionne sur votre Mac, attend votre accord et s'achète une seule fois, sans abonnement.",
  footerLabel: "Qu'est-ce que SafePersonalAI ?",
  answersLabel: "Réponses (EN)",
  eyebrow: "En mots simples",
  title: "Qu'est-ce que SafePersonalAI ?",
  lead: "SafePersonalAI est un assistant IA privé pour Mac. Il lit vos nouveaux e-mails et les notes que vous vous envoyez, propose des événements de calendrier, des tâches, des voyages et des écritures d'argent, et attend votre accord avant que quoi que ce soit ne change. Il fonctionne sur votre propre Mac, peut utiliser un modèle d'IA local et se paie une fois, pas chaque mois.",
  factsTitle: "L'essentiel en bref",
  facts: [
    { label: "Ce que c'est", value: "Une app Mac. Ni un site web ni une fenêtre de discussion." },
    {
      label: "Fonctionne sur",
      value: "Les Mac avec puce Apple (M1 ou plus récent). Les Mac Intel et Windows ne sont pas pris en charge.",
    },
    {
      label: "Modèle d'IA",
      value:
        "Un modèle Ollama local, sans compte et sans facture d'IA, ou votre propre clé Anthropic, OpenAI ou Gemini.",
    },
    {
      label: "Lit",
      value: "Gmail, Apple Mail et les notes que vous vous envoyez par iMessage.",
    },
    {
      label: "Crée",
      value: "Des événements dans Google Agenda ou le Calendrier d'Apple, et des tâches datées.",
    },
    {
      label: "Ne peut pas",
      value:
        "Envoyer des e-mails, inviter des personnes, cliquer sur des liens, payer ou déplacer de l'argent. Ces capacités ne sont pas intégrées.",
    },
    {
      label: "Vos données",
      value:
        "Restent sur votre Mac. Aucun serveur SafePersonalAI ne conserve vos e-mails, votre calendrier ou vos données d'argent.",
    },
    {
      label: "Prix",
      value:
        "Bêta gratuite : chaque module est ouvert pendant {days} jours. Ensuite, un achat unique : Base {base} €, Travel {travel} €, Wealth {wealth} €, ou les trois pour {bundleBeta} € tant que dure la bêta ({bundle} € ensuite).",
    },
    { label: "Abonnement", value: "Aucun pour l'app Mac." },
    {
      label: "Version actuelle",
      value: "{version}, notarisée par Apple. L'interface de l'app est en anglais.",
    },
  ],
  sections: [
    {
      title: "Ce qu'il fait",
      paragraphs: [
        "Base est le socle. Il lit les nouveaux e-mails, repère les rendez-vous, les rendez-vous modifiés, les échéances et les demandes, et place chacun dans une liste sous forme d'événement ou de tâche proposés. Vous approuvez, refusez ou reportez. Vous pouvez aussi lui envoyer de courtes notes par iMessage et définir vos propres règles, par exemple « quand un e-mail contient ce mot, propose cet événement ».",
        "Travel surveille les prix des vols sur les trajets que vous choisissez et vous prévient quand un prix passe sous votre limite. Il cherche avec des dates flexibles et des voyages en plusieurs étapes, indique si les dates sont libres dans votre calendrier et construit un voyage à partir de vos e-mails de réservation.",
        "Wealth lit le relevé que votre banque vous fournit déjà — CSV, Excel, PDF, MT940, CAMT, OFX ou QIF — sans se connecter à votre banque. Il montre les dépenses par catégorie, une prévision des un à trois prochains mois, des budgets, les abonnements trouvés, ainsi que vos placements et vos prêts.",
      ],
    },
    {
      title: "Comment ça marche",
      paragraphs: [
        "Il travaille en trois étapes. D'abord, le modèle d'IA lit un message et en déduit le sens. Ensuite, le résultat proposé apparaît dans une liste, avec le message dont il provient. C'est seulement quand vous l'approuvez que l'app crée l'événement ou la tâche.",
        "Les dates et les montants sont vérifiés par des règles fixes, pas seulement par le modèle. Une date absente du texte n'est jamais inventée.",
      ],
    },
    {
      title: "La différence avec un assistant de discussion",
      paragraphs: [
        "Un assistant de discussion comme ChatGPT ou Claude répond quand vous lui posez une question. SafePersonalAI travaille seul en arrière-plan : il lit les e-mails qui arrivent et prépare l'étape suivante pour vous.",
        "Il est aussi volontairement beaucoup plus limité. Il a peu de capacités, et envoyer, payer et cliquer n'en font pas partie. Approuver une proposition ne les débloque pas.",
      ],
    },
    {
      title: "Où vont vos données",
      paragraphs: [
        "Avec un modèle Ollama local, le texte de vos e-mails est traité sur votre Mac et ne va nulle part ailleurs.",
        "Si vous choisissez un fournisseur cloud, le texte nécessaire à une requête va directement de votre Mac à ce fournisseur, sous votre propre compte et selon ses conditions. Il ne passe pas par un serveur SafePersonalAI. Votre clé est enregistrée sur votre Mac.",
      ],
    },
    {
      title: "Ce que ça coûte",
      paragraphs: [
        "La bêta se télécharge gratuitement et chaque module est ouvert pendant {days} jours. Ensuite, chaque module s'achète une fois : Base {base} €, Travel {travel} €, Wealth {wealth} €. Les trois ensemble coûtent {bundleBeta} € tant que dure la bêta et {bundle} € ensuite. L'achat n'est pas encore ouvert : rien n'est facturé aujourd'hui.",
        "Un module que vous n'achetez pas se ferme à la fin des {days} jours. Ses données restent sur votre Mac et reviennent quand vous ajoutez le module.",
      ],
    },
  ],
  forTitle: "Pour qui",
  forItems: [
    "Pour ceux qui manquent des dates et des échéances enfouies dans leurs e-mails.",
    "Pour ceux qui ne veulent pas donner à un service d'IA le droit d'envoyer des e-mails ou de dépenser de l'argent.",
    "Pour ceux qui préfèrent acheter un logiciel une fois plutôt que payer chaque mois.",
    "Pour ceux qui veulent voir leurs dépenses sans donner leurs identifiants bancaires à une app.",
  ],
  notForTitle: "Pour qui ce n'est pas fait",
  notForItems: [
    "Vous utilisez Windows ou un Mac avec processeur Intel.",
    "Vous voulez un assistant qui répond et envoie des e-mails à votre place.",
    "Vous voulez qu'il travaille quand votre Mac est éteint. Il fonctionne sur votre Mac, qui doit donc être allumé.",
    "Vous voulez que votre banque soit connectée automatiquement. Wealth lit les fichiers de relevé que vous lui donnez.",
  ],
  linksTitle: "Pour aller plus loin",
  download: "Télécharger la bêta gratuite",
  pricing: "Voir les prix",
};
