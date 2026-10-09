import type { Dictionary } from "./en";

// French. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const fr: Dictionary = {
  meta: {
    homeTitle: "SafePersonalAI — Assistant IA privé pour Mac, sans abonnement",
    homeDescription:
      "SafePersonalAI fonctionne sur votre Mac, transforme vos e-mails en tâches et en événements de calendrier qui attendent votre accord, et travaille avec Ollama en local ou avec votre propre compte de fournisseur d’IA.",
    wealthTitle: "Wealth — le relevé de n’importe quelle banque sur votre Mac, sans accès bancaire",
    wealthDescription:
      "Lisez sur votre Mac le relevé de n’importe quelle banque — CSV, Excel, PDF, MT940, CAMT, OFX ou QIF — sans vous connecter à votre banque. Dépenses par catégorie, prévision des prochains mois, budgets et placements.",
    appDescription:
      "Une app Mac qui lit vos e-mails et en fait des événements de calendrier, des tâches, des plans de voyage et une vue claire de votre argent. Tout ce qu’elle propose attend votre accord. Elle n’envoie jamais d’e-mail, ne paie jamais et ne clique jamais sur un lien. Elle fonctionne sur votre Mac avec un modèle Ollama local ou votre propre clé de fournisseur d’IA.",
    offerDescription: "Téléchargement gratuit de la bêta. Tous les modules (Base, Travel, Wealth) sont ouverts pendant {days} jours.",
  },
  nav: {
    useCases: "Cas d’usage",
    modules: "Modules",
    howItWorks: "Fonctionnement",
    pricing: "Tarifs",
    faq: "FAQ",
    account: "Compte",
    download: "Télécharger la bêta",
    appleSilicon: "Apple Silicon (M1+)",
    appleSiliconRequired: "Apple Silicon (M1+) requis",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
  },
  offer: {
    trialLine: "Gratuit pendant la bêta : tous les modules sont ouverts pendant {days} jours.",
    priceLine:
      "Ensuite, un achat unique : Base {base} €, Travel {travel} €, Wealth {wealth} € — ou les trois pour {bundle} €. L’achat ouvrira bientôt.",
    priceNote: "paiement unique · gratuit {days} jours pendant la bêta",
    downloadNote:
      "Gratuit pendant {days} jours, tous modules inclus · notarisé par Apple · Apple Silicon (M1 ou plus récent)",
  },
  hero: {
    badge: "L’assistant IA qui demande d’abord · bêta gratuite",
    titleLine1: "Un assistant IA privé qui vit sur votre Mac.",
    titleLine2: "Rien ne se passe sans votre oui.",
    body: "SafePersonalAI lit vos e-mails, vos messages et vos relevés bancaires sur votre propre Mac et prépare les tâches, les événements de calendrier et la vue d’ensemble de votre argent. Vous approuvez chacun d’eux. Vos données ne nous sont jamais envoyées : elles restent sur votre Mac, et l’IA y fonctionne aussi avec Ollama, ou passe par votre propre compte de fournisseur d’IA. Un seul paiement, sans abonnement.",
    ctaDownload: "Télécharger la bêta gratuite",
    ctaUseCases: "Voir des cas d’usage réels",
    finePrint:
      "Pour les Mac avec Apple Silicon (M1 ou plus récent). Utilisez un modèle Ollama local sans compte cloud, ou votre propre clé Anthropic, OpenAI ou Gemini.",
  },
  panel: {
    title: "Actions en attente",
    preview: "Aperçu d’exemple",
    rows: [
      {
        title: "Tâche : envoyer le formulaire signé d’ici vendredi",
        detail: "Trouvée dans un e-mail du secrétariat de l’école, avec son échéance",
      },
      {
        title: "Ajouter « Dentiste — 3 sept., 15:00 » à votre calendrier",
        detail: "Lu dans un iMessage que vous vous êtes envoyé",
      },
      {
        title: "Suivre la facture d’électricité — 84,00 €, échéance le 28 oct.",
        detail: "Lue dans l’e-mail de facture ; un rappel arrive avant l’échéance",
      },
    ],
    approve: "Approuver",
    reject: "Refuser",
    approved: "✓ Approuvé",
    rejected: "✕ Refusé",
    allDone: "Tout est à jour — rien ne vous attend.",
    replay: "↺ Rejouer la démonstration",
    footer: "Elles attendent votre accord. L’app n’envoie jamais d’e-mail et ne paie jamais.",
    waiting: "{n} en attente",
  },
  laptop: {
    eyebrow: "Discrètement, en arrière-plan",
    title: "Il ne se réveille que lorsqu’il y a quelque chose à vous montrer.",
    body: "Pas d’indicateur qui tourne, pas de tableau de bord à surveiller — juste une lumière discrète quand quelque chose demande vraiment votre décision.",
  },
  ownership: {
    eyebrow: "Possédez-le, ne le louez pas",
    title: "Votre propre assistant privé. Pas un abonnement de plus.",
    intro:
      "SafePersonalAI fait du Mac déjà posé sur votre bureau une couche d’automatisation privée. Vos données de travail restent en local, la relation avec votre fournisseur d’IA reste la vôtre, et les conditions commerciales sont visibles avant l’achat.",
    points: [
      {
        title: "Conçu pour l’univers Apple que vous possédez déjà",
        body: "Pas de nouveau matériel, pas de serveur loué, pas d’entreprise tierce qui héberge votre vie. Il tourne discrètement sur votre propre Mac, avec la machine que vous avez déjà.",
      },
      {
        title: "Votre fournisseur d’IA, votre limite",
        body: "Utilisez Ollama en local sans compte, ou connectez un fournisseur cloud pris en charge avec votre propre clé et payez-le directement. Les identifiants restent sur votre Mac ; SafePersonalAI ne cache jamais le coût de l’IA dans un second abonnement et ne bascule jamais en silence vers un modèle payé par nous.",
      },
      {
        title: "Pensé comme un logiciel qui vous appartient",
        body: "Chaque module est une licence à paiement unique, liée à la version, et non une location mensuelle permanente.",
      },
    ],
    counter: {
      typical: "Un abonnement IA classique",
      running: "${cost}/mois × {n} mois — et le compteur continue.",
      runningOne: "${cost}/mois × 1 mois — et le compteur continue.",
      perMonth: "/mois",
      ours: "Paiement unique par module. Votre Mac, votre clé d’IA — aucuns frais de plateforme.",
    },
  },
  boundary: {
    eyebrow: "La limite",
    title: "Une ligne nette entre réfléchir et agir.",
    intro:
      "La plupart des outils d’IA confondent comprendre et agir en une seule étape. Pas nous. Ce que SafePersonalAI déduit de vos e-mails reste une proposition tant que vous ne l’avez pas approuvée. Seul ce que signale votre propre banque, et quelques rappels, sont ajoutés directement — signalés, et annulables en un clic.",
    steps: [
      {
        title: "L’IA comprend",
        body: "Elle lit l’e-mail reçu comme une donnée non fiable et en tire une proposition : une tâche, un événement de calendrier, un rappel de renouvellement ou une action d’un module.",
      },
      {
        title: "Vous approuvez",
        body: "Chaque proposition arrive dans une seule liste de vérification. Vous pouvez approuver, refuser, reporter ou compléter une information manquante. Une ambiguïté ne devient jamais une autorisation.",
      },
      {
        title: "Le logiciel agit",
        body: "Seuls les champs approuvés sont exécutés. Les événements de calendrier ne peuvent inviter personne ; les fonctions financières enregistrent et prévoient, mais ne peuvent pas déplacer d’argent.",
      },
    ],
  },
  useCases: {
    eyebrow: "Ce qu’il fait",
    title: "Commencez par le quotidien. N’ajoutez que ce dont vous avez besoin.",
    intro:
      "Base est le socle du quotidien. Travel et Wealth prolongent le même assistant privé, sans déplacer votre historique ni créer un autre compte.",
    exploreAll: "Voir tous les cas d’usage →",
    tabsLabel: "Modules du produit",
    queueTitle: "Une seule liste de vérification",
    queueBody: "Chaque module installé utilise la même étape d’approbation visible. Aucune automatisation cachée.",
    practicalUses: "{n} usages concrets",
    note: "Les exemples détaillés derrière chaque carte sont pour l’instant en anglais.",
    modules: {
      operational: {
        name: "Base",
        label: "Module de base",
        description: "E-mails, calendrier, tâches et vos propres règles pour le quotidien.",
      },
      travel: {
        name: "Travel",
        label: "Module complémentaire",
        description: "Réservations, suivi des prix des vols et voyages qui tiennent compte de votre calendrier.",
      },
      wealth: {
        name: "Wealth",
        label: "Module complémentaire",
        description: "Relevés de n’importe quelle banque, dépenses, prévision, budgets et placements.",
      },
    },
    topics: {
      "email-to-task": {
        title: "E-mail → tâche",
        friction: "Fini la demande importante qui disparaît sous les e-mails plus récents.",
      },
      "calendar-events": {
        title: "Événements de calendrier",
        friction: "Fini d’ouvrir le calendrier juste pour saisir une date.",
      },
      "todos-reminders": {
        title: "Tâches et rappels",
        friction: "Fini l’échéance que vous étiez sûr de retenir et qui passe sans bruit.",
      },
      "bill-invoice-tracking": {
        title: "Suivi des factures",
        friction: "Fini de fouiller votre boîte la veille de l’échéance.",
      },
      "custom-rules": {
        title: "Vos propres règles simples",
        friction: "Fini d’adapter vos habitudes au modèle d’automatisation de quelqu’un d’autre.",
      },
      "booking-to-itinerary": {
        title: "Réservation → itinéraire",
        friction: "Fini de recopier les détails du vol et de l’hôtel à trois endroits.",
      },
      "flight-deal-tracking": {
        title: "Suivi des prix des vols",
        friction: "Fini de recharger la page des prix par habitude.",
      },
      "calendar-aware-travel": {
        title: "Voyages qui regardent votre calendrier",
        friction: "Fini le bon prix dont les dates ne conviennent finalement pas.",
      },
      "cashflow-forecast": {
        title: "Prévision de trésorerie",
        friction: "Fini de découvrir que le compte est juste une fois que c’est arrivé.",
      },
      "recurring-cost-watch": {
        title: "Suivi des dépenses récurrentes",
        friction: "Fini les abonnements qui se fondent dans le décor.",
      },
      "portfolio-import": {
        title: "Import du portefeuille",
        friction: "Fini de consulter l’app du courtier à part de tout le reste.",
      },
    },
  },
  pricing: {
    eyebrow: "SafePersonalAI v1",
    title: "Une installation. {days} jours gratuits. Puis un seul paiement.",
    intro:
      "Téléchargez la bêta : tous les modules sont ouverts pendant {days} jours, gratuitement. Ensuite, chaque module est un achat unique — l’app Mac n’a pas d’abonnement. Un module que vous n’achetez pas se ferme ; ses données restent sur votre Mac et reviennent quand vous l’ajoutez. L’achat ouvrira bientôt, et rien n’est facturé aujourd’hui.",
    bundleLead: "Les trois ensemble :",
    bundleStrong: "{bundle} € en une fois",
    bundleRest: ". L’achat ouvrira bientôt — d’ici là, il n’y a rien à payer.",
    learnMore: "En savoir plus →",
    download: "Télécharger la bêta",
    included: "Inclus dans l’essai de {days} jours",
    modules: {
      operational: {
        name: "Base",
        tagline: "Le socle du quotidien : e-mails, calendrier, iMessage et tâches.",
        features: [
          "Comprend vos e-mails et prépare des tâches à approuver",
          "Événements de calendrier à partir des e-mails, sans inviter personne",
          "Tâches avec échéances et rappels",
          "Une liste d’actions en attente — approuvez, reportez ou refusez",
          "Fonctionne sur votre Mac avec Ollama en local ou votre propre clé cloud",
        ],
      },
      travel: {
        name: "Travel",
        tagline: "Un suivi des prix des vols qui ne dépasse jamais son propre quota de recherches.",
        features: [
          "Vérification quotidienne du prix par trajet, dans votre quota de recherches",
          "Alerte uniquement quand un prix passe vraiment sous votre seuil",
          "Dates flexibles et vols multi-destinations",
          "Indique si les dates du voyage sont libres dans votre calendrier",
        ],
      },
      wealth: {
        name: "Wealth",
        tagline: "Votre argent, lu dans le relevé de n’importe quelle banque. Sans accès bancaire.",
        features: [
          "Relevés de n’importe quelle banque : CSV, Excel, PDF, MT940, CAMT, OFX, QIF",
          "Dépenses par catégorie, sur n’importe quelle période",
          "Prévision des 1 à 3 prochains mois, avec alerte de découvert",
          "Budgets, abonnements repérés, prélèvements inhabituels signalés",
          "Placements et prêts, avec import depuis Trade Republic",
        ],
      },
    },
  },
  trust: {
    eyebrow: "Confiance",
    title: "Conçu pour ceux qui ne confient pas leur boîte de réception à une IA.",
    points: [
      {
        title: "Vos données restent sur votre Mac",
        body: "Les actions, les tâches, les réglages et les données des modules restent sur votre Mac. Le contenu envoyé à un fournisseur d’IA cloud part directement avec le compte fournisseur que vous avez choisi ; SafePersonalAI ne le reçoit pas.",
      },
      {
        title: "En local, ou avec votre propre clé",
        body: "Ollama peut fonctionner entièrement sur votre Mac, sans compte ni clé. Les options cloud utilisent votre propre compte et votre clé ; SafePersonalAI conserve cette clé en local et envoie les requêtes directement au fournisseur choisi, jamais via un serveur SafePersonalAI.",
      },
      {
        title: "Les capacités dangereuses n’existent pas",
        body: "L’app ne peut pas envoyer d’e-mail, inviter des participants, cliquer sur des liens, résilier un service ni déplacer d’argent. Une approbation n’ouvre aucun chemin caché vers ces actions.",
      },
      {
        title: "Consultez le Trust Center à tout moment",
        body: "Une page montre exactement ce qui est connecté, ce que l’app peut et ne peut pas faire, et où se trouvent réellement vos données — pas une promesse à croire sur parole.",
      },
    ],
    panel: {
      title: "Trust Center",
      rows: [
        { label: "Gmail", detail: "Lecture seule — envoi impossible" },
        { label: "Google Agenda", detail: "Lecture + création d’événements" },
        { label: "Google Drive", detail: "Copies des relevés que vous importez" },
        { label: "iMessage", detail: "Lu uniquement en local, sur votre Mac" },
        { label: "Fournisseur d’IA", detail: "Votre propre clé — jamais chez nous" },
      ],
      connected: "Connecté",
      local: "Local uniquement",
      footer: "Vérifié à l’instant — vous pouvez regarder quand vous voulez.",
      items: "5 éléments",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Les questions que l’on nous pose vraiment.",
    items: [
      {
        q: "Combien ça coûte, et y a-t-il un essai gratuit ?",
        a: "La bêta se télécharge gratuitement, et tous les modules — Base, Travel et Wealth — sont ouverts pendant {days} jours. Ensuite, chaque module est un achat unique, pas un abonnement : Base {base} €, Travel {travel} €, Wealth {wealth} €, ou les trois pour {bundle} €. L’achat n’est pas encore ouvert, rien n’est donc facturé aujourd’hui. À la fin des {days} jours, un module sans licence se ferme et ses données restent sur votre Mac. Si vous utilisez un fournisseur d’IA cloud, vous le payez directement ; un modèle Ollama local n’entraîne aucun coût d’IA.",
      },
      {
        q: "Ai-je besoin de mon propre compte Claude, OpenAI ou Gemini ?",
        a: "Non. Vous pouvez utiliser Ollama en local sur votre Mac, sans compte cloud ni clé. Si vous choisissez Anthropic, OpenAI ou Gemini, vous apportez votre propre compte et votre clé, et vous payez ce fournisseur directement. Certains fournisseurs proposent une offre gratuite : à ce jour, Google propose pour Gemini un niveau gratuit avec des limites quotidiennes, pour lequel Google peut utiliser ce que vous envoyez afin d’améliorer ses modèles. Les prix, les offres gratuites et les conditions sur les données relèvent du fournisseur et changent : merci de vérifier son site officiel avant de choisir. SafePersonalAI conserve la clé sur votre Mac, envoie les requêtes directement au fournisseur choisi, et ne reçoit ni ne transmet jamais votre clé. Les modèles locaux et cloud fonctionnent derrière la même étape d’approbation.",
      },
      {
        q: "N’est-ce pas simplement ChatGPT ou Claude avec des étapes en plus ?",
        a: "Non — et ce n’est pas le but. Un assistant de discussion répond quand vous le sollicitez. SafePersonalAI lit vos nouveaux e-mails de lui-même, les comprend avec le modèle de votre choix, vérifie les dates et les montants selon des règles fixes, et place chaque événement de calendrier ou tâche proposés dans une liste à approuver. Ses outils sont volontairement limités : il ne peut pas envoyer d’e-mail, payer ni cliquer sur des liens.",
      },
      {
        q: "Et s’il lit mal quelque chose ou propose la mauvaise action ?",
        a: "C’est précisément à cela que sert l’étape d’approbation. Vous voyez la proposition et le message dont elle provient avant que quoi que ce soit ne se passe. Une date absente du texte n’est jamais inventée, une modification de calendrier exige une correspondance exacte avec l’événement existant, et l’app ne peut pas envoyer d’e-mail, inviter des participants, cliquer sur des liens ni déplacer d’argent.",
      },
      {
        q: "Mes données servent-elles à entraîner un modèle d’IA ?",
        a: "SafePersonalAI n’entraîne aucun modèle et ne reçoit pas le contenu de votre boîte de réception. Si vous choisissez un fournisseur d’IA cloud, le contenu nécessaire part directement de votre Mac vers ce fournisseur, selon ses conditions d’API. Consultez sa politique actuelle d’utilisation et de conservation des données avant de le connecter.",
      },
      {
        q: "Est-ce que ça tourne dans le cloud ou sur ma machine ?",
        a: "Sur votre machine. SafePersonalAI est aujourd’hui un logiciel Mac, pas une application web hébergée — votre Mac doit être allumé pour vérifier les nouveaux messages et exécuter ce que vous approuvez. Aucun serveur SafePersonalAI ne conserve vos données entre-temps.",
      },
      {
        q: "Quel Mac faut-il pour SafePersonalAI ?",
        a: "La bêta actuelle nécessite un Mac avec Apple Silicon (M1 ou plus récent — MacBook Air, MacBook Pro, Mac mini, iMac et Mac Studio en M1/M2/M3/M4). Les Mac à processeur Intel ne sont pas pris en charge par cette version. Les demandes d’autorisation sont affichées par macOS lors de l’installation ; aucun compte SafePersonalAI n’est nécessaire.",
      },
      {
        q: "Peut-il envoyer un message, inviter quelqu’un ou déplacer de l’argent sans moi ?",
        a: "Non. L’app n’a aucun moyen d’envoyer un e-mail, d’inviter des participants, de payer, de résilier un service ou de cliquer sur un lien. Les événements de calendrier sont créés sans notifier personne, et les fonctions financières ne font qu’enregistrer ce que vous approuvez et calculer des prévisions.",
      },
      {
        q: "Que deviennent mes données si j’arrête de l’utiliser ?",
        a: "Elles restent exactement là où elles ont toujours été — sur votre Mac et dans vos propres comptes de messagerie et de calendrier. Vous pouvez retirer l’accès de SafePersonalAI dans les réglages de sécurité de chaque compte à tout moment ; il n’aura alors plus rien à atteindre.",
      },
    ],
  },
  footer: {
    tagline: "Comprend, propose, attend votre accord. N’envoie jamais d’e-mail, ne paie jamais.",
    account: "Compte",
    privacy: "Confidentialité (EN)",
    terms: "Conditions (EN)",
  },
  shell: {
    allModules: "← Tous les modules",
    whatYouGet: "Ce que vous obtenez",
    ready: "Prêt pour {name} ?",
    required: "Apple Silicon (M1+) requis",
    download: "Télécharger la bêta",
  },
  wealth: {
    name: "Wealth",
    tagline: "Votre argent, lu dans le relevé de n’importe quelle banque. Sans accès bancaire.",
    intro:
      "Wealth lit le relevé que votre banque vous fournit déjà — CSV, Excel, PDF, MT940, CAMT, OFX ou QIF —, reconnaît les colonnes de lui-même et vous montre ce qu’il a lu avant d’ajouter quoi que ce soit. Vous obtenez ensuite vos dépenses par catégorie, une prévision des prochains mois, des budgets et vos placements, le tout conservé sur votre Mac.",
    steps: [
      {
        title: "Donnez-lui un relevé",
        body: "Choisissez un fichier sur la page Wealth, ou envoyez-le-vous par iMessage. N’importe quelle banque, n’importe quelle période — une année entière d’historique convient. Une capture d’écran de votre app bancaire fonctionne aussi.",
      },
      {
        title: "Vérifiez ce qu’il a lu",
        body: "Vous voyez les opérations, le compte auquel elles appartiennent et chaque hypothèse qu’il a faite avant de cliquer sur Importer. Rien n’est ajouté sans vous.",
      },
      {
        title: "Voyez où va l’argent et ce qui arrive",
        body: "Les dépenses par catégorie sur n’importe quelle période, les paiements réguliers appris à partir de votre historique, et le solde prévu pour les un à trois prochains mois.",
      },
    ],
    features: [
      {
        title: "Toute banque, tout format",
        body: "CSV, Excel, PDF, MT940, CAMT.053, OFX et QIF. Pas de modèle ni de correspondance de colonnes : il reconnaît lui-même les colonnes, les dates, les signes et la devise. Testé sur de vrais relevés PDF d’İş Bankası. Un PDF doit contenir du texte ; une image scannée est refusée avec un message clair.",
      },
      {
        title: "Captures d’écran, lues sur votre Mac",
        body: "Une capture d’écran de votre app bancaire ou de carte est lue sur votre Mac avec la reconnaissance de texte d’Apple et n’est jamais envoyée ailleurs. Les opérations vont dans la liste de vérification ; un solde attend que vous l’appliquiez à un compte.",
      },
      {
        title: "Des dépenses lisibles",
        body: "Catégories automatiques, graphique par catégorie, et entrées et sorties mois par mois — pour un mois, les 3, 6 ou 12 derniers, ou une année entière. Changez une fois la catégorie d’un commerçant, et elle reste.",
      },
      {
        title: "Une prévision tirée de votre propre historique",
        body: "Il apprend ce qui revient chaque mois — loyer, prêts, assurances, abonnements, salaire — et liste les un, deux ou trois prochains mois avec le solde du compte après chaque paiement. Il vous prévient lorsqu’un compte devrait passer sous zéro, et vous pouvez ajouter les paiements que vous prévoyez.",
      },
      {
        title: "Budgets",
        body: "Une limite mensuelle par catégorie, avec un message à 80 % et un autre à 100 % — pas un rappel chaque jour.",
      },
      {
        title: "Abonnements et prélèvements inhabituels",
        body: "Le même commerçant et le même montant chaque mois sont listés comme un abonnement. Le même prélèvement deux fois le même jour, ou un montant bien au-dessus de l’habituel, est signalé comme « à regarder ».",
      },
      {
        title: "Les placements sur leur propre page",
        body: "Actions, ETF, or et crypto : ce qu’ils valent aujourd’hui, ce que vous avez investi, et le gain ou la perte. L’export des transactions de Trade Republic est lu directement ; les cours sont mis à jour lorsque c’est possible.",
      },
      {
        title: "Les prêts, calculés",
        body: "Saisissez trois des quatre valeurs — montant, taux, durée et mensualité — et la quatrième est calculée. Vous voyez le capital restant dû, le mois de fin de remboursement et le coût total.",
      },
      {
        title: "Tous les comptes dans un seul solde",
        body: "Comptes courants, d’épargne, de carte et de placement réunis, affichés dans l’une des 15 devises. Chaque montant conserve sa devise ; la conversion utilise les taux quotidiens de la BCE.",
      },
      {
        title: "Indications fiscales pour l’Allemagne",
        body: "Une fois votre pays choisi, les opérations susceptibles de compter pour votre déclaration reçoivent une courte indication, et un clic exporte l’année pour votre conseiller fiscal. De simples indications — jamais un conseil fiscal.",
      },
    ],
    readsEyebrow: "Ce qu’il lit",
    readsTitle: "Le relevé que votre banque vous fournit déjà.",
    readsBody:
      "Wealth ne se connecte jamais à votre banque et ne demande jamais votre mot de passe bancaire. Vous lui donnez un fichier de relevé ou une capture d’écran ; il le lit sur votre Mac, le place sur le bon compte et attend que vous cliquiez sur Importer.",
    investEyebrow: "Placements",
    investTitle: "Ce que vous détenez, et ce que cela vaut aujourd’hui.",
    investBody:
      "Saisissez vous-même vos actions, ETF, votre or ou vos cryptos, ou importez l’export des transactions de Trade Republic et laissez-le calculer les parts et le prix de revient moyen. Une position sans cours actuel compte pour ce que vous avez payé — jamais pour une valeur inventée.",
    provenTitle: "Dans la bêta, encore à l’épreuve",
    provenBody:
      "Trois fonctions sont développées et peuvent être activées, mais n’ont pas encore tourné assez longtemps sur de vraies boîtes aux lettres pour que nous les promettions : les relevés récupérés dans les e-mails de votre banque, les e-mails d’alerte bancaire qui mettent à jour un compte, et les dépenses Apple Pay via un Raccourci iPhone configuré une fois. Considérez-les comme des extras. L’import d’un relevé par vos soins ne dépend d’aucune d’elles.",
    limitsTitle: "Ce que Wealth ne fait pas",
    limitsBody:
      "Il ne se connecte pas à votre banque, ne paie rien et ne déplace pas d’argent. Il ne lit pas les PDF scannés composés uniquement d’images — une capture d’écran fonctionne à la place. Il ne donne pas de conseil fiscal ; c’est votre conseiller qui décide. Et il fonctionne sur votre Mac : vos chiffres ne sont donc pas stockés sur un serveur chez nous.",
  },
};
