import type { PagesDictionary } from "./en";

// French. Same shape as en.ts. Not yet checked by a native-speaking editor.
export const frPages: PagesDictionary = {
  card: {
    waits: "Il attend votre accord.",
    show: "▶ Voir ce que fait SafePersonalAI",
    back: "↺ Afficher le message d’origine",
  },
  waitlist: {
    placeholder: "vous@exemple.fr",
    emailLabel: "Adresse e-mail",
    button: "Me prévenir",
    loading: "Inscription…",
    done: "✓ Vous êtes sur la liste — nous vous écrirons dès que ce sera prêt.",
    error: "Un problème est survenu — réessayez dans un instant.",
  },
  base: {
    metaTitle: "Base — de l’e-mail au calendrier et aux tâches sur votre Mac, avec votre accord",
    metaDescription:
      "Lit vos e-mails sur votre Mac et prépare événements de calendrier, tâches, factures et renouvellements pour que vous les approuviez. Vous pouvez lui écrire par iMessage. Il n’envoie jamais d’e-mail, ne paie jamais et ne clique jamais sur un lien.",
    name: "Base",
    tagline: "Votre boîte de réception, votre calendrier et vos tâches — gérés, sans surprise.",
    intro:
      "La partie de SafePersonalAI par laquelle toute installation commence. Elle lit vos nouveaux e-mails et les iMessage que vous lui envoyez, en déduit ce qu’il y a à faire et le prépare. C’est vous qui décidez de la suite.",
    steps: [
      {
        title: "Il lit",
        body: "Les nouveaux e-mails de Gmail ou d’Apple Mail, et les messages que vous lui écrivez depuis votre propre numéro — compris dans de nombreuses langues.",
      },
      {
        title: "Vous approuvez",
        body: "Chaque événement de calendrier, facture ou réservation proposés arrive dans une seule liste de vérification. Approuvez, refusez ou reportez — dans le tableau de bord ou depuis la barre des menus.",
      },
      {
        title: "Il agit",
        body: "C’est seulement alors que cela se produit — un événement apparaît dans votre calendrier, une facture est suivie. Il n’envoie jamais d’e-mail à votre place.",
      },
    ],
    features: [
      {
        title: "Votre boîte de réception, lue pour ce qu’elle vous demande",
        body: "Il lit les nouveaux e-mails et en déduit ce qu’ils attendent de vous — une tâche avec son échéance, un rendez-vous, un rendez-vous déplacé, une facture, un renouvellement — et le prépare pour votre accord. Une date absente du texte n’est jamais inventée.",
      },
      {
        title: "Des événements de calendrier, sans inviter personne",
        body: "Les événements approuvés vont dans Google Agenda, le Calendrier d’Apple ou les deux. Il ne peut inviter personne d’autre — cette capacité n’existe tout simplement pas dans le logiciel.",
      },
      {
        title: "Des tâches avec des dates",
        body: "Ajoutez, cochez, reportez. La couleur indique ce qui est en retard, bientôt dû ou en ordre, et une tâche récurrente revient d’elle-même. Si vous le souhaitez, un point du matin vous donne l’agenda du jour et les factures à payer.",
      },
      {
        title: "Écrivez-lui depuis votre propre numéro",
        body: "Plus de 25 commandes iMessage, chacune activable séparément : « Rappelle-moi d’appeler le propriétaire demain », « Qu’ai-je dans mon calendrier demain ? », « Où est mon colis ? » ou « Explique ceci : » suivi d’une lettre collée. Il ne répond qu’à vous.",
      },
      {
        title: "Vos propres règles simples",
        body: "« Quand un e-mail ou un message mentionne X, fais Y » : une tâche, un créneau de calendrier, ou une écriture de recette ou de dépense. Avec un simple formulaire, sans code.",
      },
      {
        title: "Votre propre clé d’IA — ou aucune",
        body: "Un modèle Ollama local sur votre Mac signifie aucune facture d’IA ; il peut être plus lent et moins précis qu’un modèle cloud. Vous préférez Anthropic, OpenAI ou Gemini ? Connectez votre propre clé et payez-les directement — nous ne sommes jamais entre les deux.",
      },
    ],
    seeEyebrow: "Ce que vous voyez vraiment",
    seeTitle: "Une liste calme pour chaque décision.",
    seeBody: "SafePersonalAI lit ce qui arrive, prépare une proposition claire et vous laisse la décision finale.",
    casesEyebrow: "En action",
    casesTitle: "Le genre de choses qu’il traite chaque jour.",
    casesBody: "Trois exemples du quotidien. Cliquez sur l’un d’eux pour voir ce que SafePersonalAI en fait.",
    cases: [
      {
        inputLabel: "E-mail du cabinet dentaire",
        inputSub: "« Votre rendez-vous est fixé à jeudi, 15 h. »",
        outputTitle: "Ajouter « Dentiste — jeu., 15:00 » à votre calendrier",
        outputSub: "Préparé à partir de l’e-mail, avec sa source affichée",
      },
      {
        inputLabel: "E-mail du secrétariat de l’école",
        inputSub: "« Merci d’envoyer le formulaire signé d’ici vendredi. »",
        outputTitle: "Tâche : envoyer le formulaire signé — pour vendredi",
        outputSub: "L’échéance est celle indiquée dans l’e-mail, jamais une supposition",
      },
      {
        inputLabel: "E-mail : votre rendez-vous a été déplacé",
        inputSub: "« Votre rendez-vous est déplacé de mardi à jeudi. »",
        outputTitle: "Modification de calendrier préparée : mardi → jeudi",
        outputSub: "L’événement existant est mis à jour, pas dupliqué",
      },
    ],
  },
  travel: {
    metaTitle: "Travel — alertes de prix des vols sur votre Mac, avec votre propre clé de recherche gratuite",
    metaDescription:
      "Suivez les prix des vols par trajet sur votre Mac avec votre propre clé de recherche gratuite. Une notification quand un prix passe sous votre seuil. Les réservations reçues par e-mail deviennent des voyages.",
    name: "Travel",
    tagline: "Les bons prix surveillés pour vous, sans que votre portefeuille se vide.",
    intro:
      "Dites-lui quels trajets comptent et ce qu’est un bon prix. Il vérifie discrètement en arrière-plan et ne vous interrompt que lorsqu’un prix est réellement sous votre seuil.",
    steps: [
      {
        title: "Dites-lui ce qui compte",
        body: "Un trajet, vos dates et le prix qui vous ferait réserver. Saisissez une ville ou un aéroport et choisissez parmi les suggestions.",
      },
      {
        title: "Il vérifie discrètement",
        body: "Une fois par jour, dans la limite des recherches autorisées par votre propre clé — pas de coûts qui s’emballent, pas de page à recharger sans cesse.",
      },
      {
        title: "Vous n’entendez parler que d’une vraie affaire",
        body: "Uniquement lorsqu’un trajet suivi passe réellement sous votre seuil — rien d’autre ne vous interrompt.",
      },
    ],
    features: [
      {
        title: "Un suivi des prix dans votre propre quota",
        body: "Chaque trajet suivi est vérifié une fois par jour, dans la limite des recherches autorisées par votre propre clé — pas de facture surprise pour une fonction censée vous faire économiser.",
      },
      {
        title: "Des alertes seulement quand c’est une affaire",
        body: "Vous fixez le prix. Vous recevez une notification lorsqu’un prix réel passe en dessous — pas à chaque variation ordinaire.",
      },
      {
        title: "Votre propre clé de recherche gratuite",
        body: "Utilisez votre propre clé SerpApi gratuite, valable pour 250 recherches par mois. La clé reste sur votre Mac et le quota est entièrement le vôtre.",
      },
      {
        title: "Dates flexibles et plusieurs étapes",
        body: "Comparez des durées de séjour et un jour ou deux avant ou après, ou cherchez deux à quatre segments comme Hanovre → Antalya → Palma → Hanovre. Un repère indique si les dates sont libres dans votre Google Agenda.",
      },
      {
        title: "Les réservations reçues par e-mail",
        body: "Les confirmations de vol et d’hôtel deviennent des événements de calendrier et un itinéraire enregistré, regroupés en voyages avec un compte à rebours.",
      },
      {
        title: "Bagages et enregistrement",
        body: "Approuver une réservation ajoute une tâche pour faire les bagages deux jours avant et une autre pour l’enregistrement en ligne la veille.",
      },
    ],
    watchEyebrow: "Ce qu’il surveille",
    watchTitle: "Chaque trajet, vérifié chaque jour, par rapport à votre propre seuil.",
    watchBody:
      "C’est vous qui décidez de ce qu’est une affaire. Il ne vous interrompt que lorsqu’un trajet suivi passe réellement sous ce chiffre — tout le reste reste silencieux en arrière-plan.",
    seeEyebrow: "Ce que vous voyez vraiment",
    seeTitle: "Une notification, seulement quand elle mérite votre attention.",
    seeBody:
      "Pas un tableau de bord à consulter — une seule notification lorsqu’un prix passe réellement sous votre seuil, et rien du tout sinon.",
  },
  iphone: {
    metaTitle: "iPhone",
    metaDescription:
      "Consultez et pilotez SafePersonalAI depuis votre iPhone. Votre Mac continue de faire le travail et de garder vos données ; le téléphone est une fenêtre verrouillée sur lui, via votre propre iCloud.",
    name: "iPhone · bientôt",
    tagline: "Votre Mac fait le travail. Votre iPhone dit oui.",
    intro:
      "Un compagnon facultatif pour ceux qui utilisent SafePersonalAI sur un Mac. Approuvez ce qui attend, regardez votre journée et votre argent, ajoutez une tâche — où que vous soyez. Vos données restent sur votre Mac ; le téléphone affiche une copie verrouillée qui voyage par votre propre iCloud.",
    priceNote: "par mois · facultatif · résiliable à tout moment",
    steps: [
      {
        title: "Jumelez une fois, avec l’appareil photo",
        body: "Votre Mac affiche un code. Pointez l’iPhone dessus, confirmez sur le Mac. Les deux partagent désormais une clé qui n’a jamais voyagé nulle part.",
      },
      {
        title: "Voyez ce que voit votre Mac",
        body: "Ce qui attend votre accord, votre semaine, vos tâches, votre argent — la dernière image envoyée par votre Mac, même pendant qu’il dort.",
      },
      {
        title: "Dites oui où que vous soyez",
        body: "Approuvez, refusez, ajoutez une tâche. Votre Mac l’exécute dès qu’il est réveillé et en ligne, et prévient le téléphone que c’est fait.",
      },
    ],
    features: [
      {
        title: "Même Apple ne peut pas le lire",
        body: "Tout ce que les deux échangent est verrouillé avec la clé de jumelage avant de quitter l’appareil. Cela passe par la partie privée de votre propre iCloud. Nous n’exploitons aucun serveur : il n’y a donc rien à vous chez nous.",
      },
      {
        title: "Approuvez ce qui attend",
        body: "Une notification quand quelque chose demande votre accord, puis Approuver ou Refuser. Ce qui nécessite un détail que seul le Mac peut recueillir le dit, au lieu de deviner.",
      },
      {
        title: "Votre journée et votre semaine",
        body: "Les événements du Calendrier d’Apple et de Google Agenda, les anniversaires à venir et les paiements dus cette semaine.",
      },
      {
        title: "Votre argent, avec les graphiques",
        body: "Avec Wealth : solde, dépenses par catégorie sur un mois jusqu’à un an, budgets, dernières opérations, les 30 prochains jours, et vos placements avec gains et pertes.",
      },
      {
        title: "Le téléphone ne peut pas modifier vos clés",
        body: "Les clés, les comptes de messagerie et les expéditeurs de confiance se règlent uniquement sur le Mac. Le téléphone peut demander une courte liste fixe de choses — et chaque demande est vérifiée par le Mac.",
      },
      {
        title: "Arrêtez quand vous voulez, sans rien perdre",
        body: "Résiliez l’abonnement et le téléphone se tait à la fin du mois payé. Rien ne change sur votre Mac, et votre jumelage est conservé si vous revenez.",
      },
    ],
    screensEyebrow: "À quoi cela ressemble",
    screensTitle: "Six écrans que vous utiliserez chaque jour.",
    screensBody:
      "De vrais écrans de l’app, remplis de ses données d’exemple intégrées — la même visite avec données d’exemple que vous pouvez ouvrir avant de jumeler un Mac. L’app elle-même est en anglais.",
    screens: [
      {
        alt: "L’écran « Today » : un événement de calendrier en attente d’approbation avec les boutons Approve et Reject, les événements du jour, un anniversaire et le solde.",
        title: "Aujourd’hui",
        body: "Ce qui attend votre accord, avec Approuver et Refuser, puis votre journée : événements, anniversaires et votre solde.",
      },
      {
        alt: "L’écran « Wealth » : total des comptes et des placements, les paiements des 30 prochains jours et une courbe des 90 prochains jours.",
        title: "Wealth",
        body: "Votre total, les paiements des 30 prochains jours et où en est l’argent ensuite. Nécessite le module Wealth.",
      },
      {
        alt: "L’écran « Forecast » : une courbe du solde prévu sur les 90 prochains jours, son point le plus bas et les totaux à 30, 60 et 90 jours.",
        title: "Prévision",
        body: "Les 90 prochains jours sous forme de courbe. Touchez-la pour voir un jour et ce qui s’y passe, y compris ce que vous avez prévu vous-même.",
      },
      {
        alt: "L'écran Investments : ce que tout vaut aujourd'hui, le gain, un anneau par type et chaque position avec son gain ou sa perte.",
        title: "Placements",
        body: "Ce que tout vaut aujourd'hui, ce que vous avez payé, et chaque position avec son gain ou sa perte.",
      },
      {
        alt: "L'écran To-do : les tâches ouvertes avec leurs dates et un champ pour en ajouter une.",
        title: "Tâches",
        body: "Vos tâches ouvertes avec leurs dates. Ajoutez-en une, cochez-en une ou reportez-la à demain.",
      },
      {
        alt: "L'écran Events : les anniversaires, les événements d'aujourd'hui et de demain, et les paiements de la semaine.",
        title: "Événements",
        body: "La semaine à venir depuis Apple et Google Agenda, les anniversaires à venir et les paiements de la semaine.",
      },
    ],
    knowTitle: "Bon à savoir avant de vous abonner",
    know: [
      {
        lead: "Il faut l’app Mac.",
        text: "L’app iPhone est une fenêtre sur SafePersonalAI sur votre Mac. Elle ne fonctionne pas seule.",
      },
      {
        lead: "Le même compte iCloud sur les deux.",
        text: "Le Mac et l’iPhone doivent être connectés au même compte iCloud, avec un peu d’espace iCloud libre.",
      },
      {
        lead: "Consulter fonctionne quand le Mac dort ; agir, non.",
        text: "Vous voyez la dernière image envoyée par votre Mac. Ce que vous demandez est exécuté lorsque le Mac est réveillé et en ligne.",
      },
      {
        lead: "Les notifications peuvent arriver en retard.",
        text: "C’est iOS qui décide de la fréquence à laquelle il réveille une app en arrière-plan. Une notification peut arriver quelques minutes plus tard, et ne pas arriver en mode économie d’énergie.",
      },
      {
        lead: "Pas encore sur l’App Store.",
        text: "L’app est développée et en cours de test. Laissez votre adresse ci-dessus et nous vous préviendrons le jour où elle sera disponible.",
      },
    ],
    trademark:
      "iPhone, iCloud, Face ID, Touch ID, Mac et App Store sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays et régions. SafePersonalAI n’est ni affilié à Apple ni approuvé par Apple.",
  },
};
