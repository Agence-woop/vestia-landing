/* ----------------------------------------------------------------
   VESTIA — dictionnaire français (langue par défaut).

   Toute chaîne visible du site vit ici ou dans en.ts : plus aucun
   texte en dur dans les composants. Les textes reprennent verbatim
   assets-source/vestia-landing-textes-vf.md (source de vérité).
   Le fichier miroir en.ts suit exactement la même structure.
---------------------------------------------------------------- */

export const fr = {
  meta: {
    accueil: {
      titre: 'Vestia — Repassage et cueillette à domicile, Montréal',
      description:
        'Vos vêtements cueillis à votre porte, repassés à la main, rendus sur cintre. Griffintown, Cité du Multimédia, Vieux-Montréal.',
    },
    reserver: {
      titre: 'Réserver une cueillette — Vestia',
      description:
        'Choisissez votre créneau de cueillette et le soir de votre retour. Confirmation par message texte.',
    },
    conditions: {
      titre: "Conditions d'utilisation — Vestia",
      description: 'Les conditions du service de repassage et de cueillette à domicile Vestia.',
    },
    politique: {
      titre: 'Politique de confidentialité — Vestia',
      description:
        'Comment Vestia recueille, utilise et protège vos renseignements personnels, conformément à la Loi 25.',
    },
    altPartage: 'Vestia — Repassage et cueillette à domicile',
  },

  hero: {
    kicker: 'Repassage · Cueillette à domicile',
    tagline: "L'intendance de votre quotidien",
    cta: 'Réserver une cueillette',
    quartiers: 'Griffintown · Cité du Multimédia · Vieux-Montréal',
  },

  manifeste: {
    phrase1:
      "Il y a des heures qu'on ne rattrape pas. Celles passées derrière une planche à repasser en font partie.",
    phrase2:
      'Vestia les reprend pour vous : votre garde-robe, prise en charge de la porte à la penderie.',
  },

  rituel: {
    titre: 'Le rituel Vestia',
    gestes: [
      {
        titre: 'La cueillette',
        texte:
          'Choisissez votre créneau. Nous passons à votre porte, comptons chaque pièce avec vous, et prenons le relais.',
      },
      {
        titre: 'Le soin',
        texte: "Chaque vêtement est repassé à la main, un à un, avec la minutie d'un atelier.",
      },
      {
        titre: 'Le retour',
        texte:
          "Vos pièces reviennent sur cintre et sous housse de protection, à l'abri jusqu'à votre penderie. Vous choisissez le soir du retour; un message annonce notre arrivée.",
      },
    ],
  },

  grille: {
    titre: 'La clarté, jusque dans les prix',
    paliers: [
      { nom: 'Pièce simple', prix: 6, detail: 'T-shirt, coton ouaté, camisole, polo, legging, pantalon de jogging' },
      { nom: 'Pièce standard', prix: 9, detail: 'Chemise, blouse, pantalon, jean, jupe, short' },
      { nom: 'Pièce complexe', prix: 15, detail: 'Robe, pièce en lin, jupe ou robe plissée' },
      { nom: 'Veston', prix: 20, detail: 'Veston, blazer' },
    ],
    condition1: 'Minimum de 8 pièces',
    condition2: 'Cueillette et livraison toujours incluses',
    horsListe:
      'Ces exemples situent chaque palier; votre intendant classe les autres pièces à la cueillette.',
    egards:
      'Nous déclinons avec égards la laine, le cachemire et les tricots à mailles lâches ou faits main, ainsi que les pièces de haute couture. Ces étoffes méritent leur propre spécialiste.',
  },

  quartier: {
    titre: 'Un territoire choisi, des délais tenus',
    propos1:
      "Un service de cette précision ne s'étend que là où il peut tenir parole. Vestia dessert Griffintown, la Cité du Multimédia, le Vieux-Montréal et le Vieux-Port.",
    propos2:
      'Du lundi au vendredi, cueillette au moment convenu, retour le jour même ou le lendemain; jamais plus tard.',
    etiquetteCodePostal: 'Votre code postal',
    verifier: 'Vérifier',
    erreurCodePostal: 'Veuillez saisir un code postal valide.',
    desservi: 'Vestia dessert votre adresse.',
    promesse: "Votre quartier n'y est pas encore. Laissez-nous votre courriel, il viendra.",
    votreCourriel: 'Votre courriel',
    prevenezMoi: 'Prévenez-moi',
    erreurCourriel: 'Veuillez saisir un courriel valide.',
    note: 'C’est noté. Vestia vous écrira.',
    echecEnvoi: 'L’envoi n’a pas abouti. Veuillez réessayer.',
    sujetListeAttente: "LISTE D'ATTENTE",
    altCarte:
      'Carte de la zone desservie par Vestia : Griffintown, Cité du Multimédia, Vieux-Montréal et Vieux-Port, entre le canal de Lachine et le fleuve Saint-Laurent',
  },

  engagements: {
    titre: 'Ce que Vestia vous doit',
    clauses: [
      {
        titre: 'Compté, contresigné',
        texte: 'Chaque pièce est comptée avec vous à la cueillette, recomptée avec vous au retour.',
      },
      {
        titre: 'Le soir qui vous convient',
        texte:
          'Votre créneau de cueillette est un rendez-vous, pas une estimation. Cueillette avant 9 h : vos pièces peuvent revenir le soir même. Sinon, vous choisissez le soir qui vous arrange.',
      },
      {
        titre: 'Payez à la livraison',
        texte:
          'Virement Interac une fois vos vêtements rendus. Aucune carte, aucun prépaiement, aucune surprise.',
      },
    ],
  },

  questions: {
    titre: "Questions d'usage",
    entrees: [
      {
        question: 'Que se passe-t-il si une pièce est abîmée?',
        reponse:
          "Chaque pièce est comptée avec vous à la cueillette et recomptée au retour. Si un dommage survenait de notre fait, signalez-le dans les 24 heures, photos à l'appui, par courriel ou message texte. Notre responsabilité va jusqu'à dix fois le tarif de traitement de la pièce.",
      },
      {
        question: 'Comment se fait le paiement?',
        reponse:
          "À la livraison, par virement Interac ou en argent comptant. Prévoyez le montant exact: votre intendant n'a pas de monnaie. Le pourboire reste à votre entière discrétion et n'est jamais attendu.",
      },
      {
        question: 'Et si je ne suis pas là au moment du retour?',
        reponse:
          "Vous choisissez le soir de votre retour au moment de la réservation, et un message vous annonce notre arrivée. Si un imprévu survient, écrivez-nous: nous convenons d'un autre moment.",
      },
      {
        question: 'Faut-il que mes vêtements soient lavés?',
        reponse:
          'Oui. Vestia repasse, mais ne lave pas. Vos pièces nous sont remises propres, prêtes à être pressées.',
      },
    ],
  },

  final: {
    mot: 'Prêt-à-porter.',
    cta: 'Réserver une cueillette',
  },

  footer: {
    nom: 'Vestia — Repassage · Cueillette à domicile',
    lieux: 'Griffintown · Cité du Multimédia · Vieux-Montréal',
    horaires: 'Du lundi au vendredi',
    conditions: "Conditions d'utilisation",
    politique: 'Politique de confidentialité',
    gererTemoins: 'Gérer les témoins',
  },

  temoins: {
    titreBanniere: 'Témoins de navigation',
    texteBanniere:
      'Vestia utilise des témoins essentiels au fonctionnement du site, ainsi que des témoins de mesure d’audience et de publicité, déposés uniquement avec votre consentement. Vous pouvez modifier votre choix en tout temps depuis le lien « Gérer les témoins » au bas de la page.',
    lienPolitique: 'Politique de confidentialité',
    toutAccepter: 'Tout accepter',
    toutRefuser: 'Tout refuser',
    personnaliser: 'Personnaliser',
    fermer: 'Fermer',
    titreModale: 'Gérer les témoins',
    essentielsTitre: 'Témoins essentiels',
    essentielsTexte:
      'Nécessaires au fonctionnement du site, dont la mémorisation de vos préférences de témoins. Toujours actifs.',
    analyticsTitre: "Mesure d'audience",
    analyticsTexte:
      'Nous aident à comprendre la fréquentation du site (Google Analytics). Désactivé par défaut.',
    marketingTitre: 'Publicité et médias sociaux',
    marketingTexte:
      "Permettent de mesurer l'efficacité de nos communications (Meta). Désactivé par défaut.",
    noteRetrait: 'Le retrait prend effet au prochain chargement de page.',
    enregistrer: 'Enregistrer mes choix',
  },

  reserver: {
    retourBouton: '‹ Retour',
    ecran1Titre: 'Votre adresse',
    etiquetteCodePostal: 'Votre code postal',
    verifier: 'Vérifier',
    erreurCodePostal: 'Veuillez saisir un code postal valide.',
    desservi: 'Vestia dessert votre adresse.',
    promesse: "Votre quartier n'y est pas encore. Laissez-nous votre courriel, il viendra.",
    votreCourriel: 'Votre courriel',
    prevenezMoi: 'Prévenez-moi',
    etiquetteRue: 'Numéro et rue',
    erreurRue: 'Veuillez indiquer votre numéro et votre rue.',
    etiquetteApp: 'Appartement',
    optionnel: '(optionnel)',
    aideApp: "Sans numéro d'appartement, votre intendant vous retrouve dans le hall d'entrée.",
    etiquetteAcces: "Instructions d'accès",
    placeholderAcces: "Code d'entrée, concierge, remarques…",
    continuer: 'Continuer',

    ecran2Titre: 'Votre cueillette',
    etiquetteJour: 'Le jour',
    ariaMoisPrecedent: 'Mois précédent',
    ariaMoisSuivant: 'Mois suivant',
    ariaCalendrier: 'Choisissez le jour de votre cueillette',
    voileMois: 'Ouverture des cueillettes prochainement',
    legendeComplet: 'Complet',
    legendeCompletTexte: 'la limite de cueillettes est atteinte',
    legendeFerie: 'Fin de semaine ou férié',
    legendeFerieTexte: 'Vestia ne circule pas',
    ferie: 'férié',
    complet: 'complet',
    erreurJour: 'Veuillez choisir un jour de cueillette.',
    verrou: "Choisissez d'abord un jour",
    etiquetteFenetres: 'La fenêtre de cueillette',
    matin: 'Matin',
    finDeJournee: 'Fin de journée',
    erreurFenetre: 'Veuillez choisir une fenêtre de cueillette.',
    etiquetteRetour: 'Le retour',
    rappelRetour:
      'Retour entre 17 h 30 et 19 h 30. Un message vous annonce notre arrivée.',
    erreurRetour: 'Veuillez choisir un moment de retour.',
    etiquettePieces: 'Combien de pièces avez-vous, environ?',
    rappelPieces: 'Minimum de 8 pièces. Le compte exact se fait avec vous, à la cueillette.',
    erreurTranche: 'Veuillez choisir une tranche de pièces.',
    etiquetteNotes: 'Une précision pour votre intendant?',

    ecran3Titre: 'Vos coordonnées',
    etiquettePrenom: 'Prénom',
    erreurPrenom: 'Veuillez indiquer votre prénom.',
    etiquetteNom: 'Nom',
    erreurNom: 'Veuillez indiquer votre nom.',
    etiquetteCourriel: 'Courriel',
    erreurCourriel: 'Veuillez saisir un courriel valide.',
    etiquetteMobile: 'Cellulaire',
    aideMobile: 'Votre confirmation arrive par message texte.',
    erreurMobile: 'Veuillez saisir un numéro de mobile valide.',
    recapTitre: 'Votre demande',
    recapAdresse: 'Adresse',
    recapCueillette: 'Cueillette',
    recapRetour: 'Retour',
    recapVolume: 'Volume',
    pieces: 'pièces',
    conditionsAvant: "J'ai lu et j'accepte les ",
    conditionsLien: "conditions d'utilisation",
    erreurConditions: "Veuillez accepter les conditions d'utilisation.",
    infolettre: 'Tenez-moi informé des nouveautés Vestia',
    envoyer: 'Envoyer ma demande',
    discretEnvoi: "Confirmation par message texte d'ici 2 heures.",
    echecEnvoi: 'L’envoi n’a pas fonctionné. Réessayez, ou écrivez-nous à info@vestia.ca.',
    noteAttente: 'C’est noté. Vestia vous écrira.',

    confirmationTitre: 'Votre demande nous est parvenue.',
    confirmationSuite:
      "Votre intendant Vestia vous confirme votre créneau par message texte d'ici 2 heures.",
    confirmationSouhait: 'Cueillette souhaitée',
    confirmationRetour: 'Retour',
    confirmationSoir: 'Demande envoyée en soirée? Votre confirmation arrive dès 7 h.',
    retourAccueil: "‹ Retour à l'accueil",

    aConvenir: 'à convenir ensemble',
    fenetresMatin: ['7 h – 7 h 30', '7 h 30 – 8 h', '8 h – 8 h 30', '8 h 30 – 9 h'],
    fenetresSoir: ['17 h 30 – 18 h', '18 h – 18 h 30', '18 h 30 – 19 h', '19 h – 19 h 30'],
    tranches: ['8 – 10', '11 – 15', '16 – 20', '21 et plus'],
    creneauRetour: '17 h 30 – 19 h 30',
    sujetCueillette: 'CUEILLETTE',
    sujetListeAttente: "LISTE D'ATTENTE",
    infolettreOui: 'oui',
    infolettreNon: 'non',
  },
} as const;
