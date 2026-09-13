/* ----------------------------------------------------------------
   VESTIA — English dictionary. Mirror structure of fr.ts.

   Base translation: faithful and correct, no attempt at brand
   voice. Strings that call for editorial rewriting in the second
   mission are flagged with the comment « ÉDITORIAL » on the line
   above — headlines, taglines, calls to action, any sentence whose
   value lies in its wording rather than its information.
---------------------------------------------------------------- */

export const en = {
  meta: {
    accueil: {
      /* ÉDITORIAL */
      titre: 'Vestia — Ironing with home pickup and delivery, Montreal',
      /* ÉDITORIAL */
      description:
        'Your clothes picked up at your door, hand-ironed, returned on hangers. Griffintown, Cité du Multimédia, Old Montreal.',
    },
    reserver: {
      titre: 'Book a pickup — Vestia',
      description:
        'Choose your pickup window and your return evening. Confirmation by text message.',
    },
    conditions: {
      titre: 'Terms of use — Vestia',
      description: 'The terms of the Vestia ironing and home pickup service.',
    },
    politique: {
      titre: 'Privacy policy — Vestia',
      description:
        'How Vestia collects, uses and protects your personal information, in accordance with Law 25.',
    },
    altPartage: 'Vestia — Ironing with home pickup and delivery',
  },

  hero: {
    /* ÉDITORIAL */
    kicker: 'Ironing · Home pickup and delivery',
    /* ÉDITORIAL */
    tagline: 'Stewardship for your everyday',
    /* ÉDITORIAL */
    cta: 'Book a pickup',
    quartiers: 'Griffintown · Cité du Multimédia · Old Montreal',
  },

  manifeste: {
    /* ÉDITORIAL */
    phrase1:
      'Some hours can never be won back. The ones spent behind an ironing board are among them.',
    /* ÉDITORIAL */
    phrase2:
      'Vestia takes them back for you: your wardrobe, looked after from your door to your closet.',
  },

  rituel: {
    /* ÉDITORIAL */
    titre: 'The Vestia ritual',
    gestes: [
      {
        titre: 'The pickup',
        texte:
          'Choose your window. We come to your door, count every piece with you, and take it from there.',
      },
      {
        titre: 'The care',
        texte: 'Every garment is ironed by hand, one at a time, with the precision of an atelier.',
      },
      {
        titre: 'The return',
        texte:
          'Your pieces come back on hangers, under a protective cover, sheltered all the way to your closet. You choose the return evening; a message announces our arrival.',
      },
    ],
  },

  grille: {
    /* ÉDITORIAL */
    titre: 'Clarity, down to the prices',
    paliers: [
      /* ÉDITORIAL (noms de paliers) */
      { nom: 'Simple piece', prix: 6, detail: 'T-shirt, sweatshirt, camisole, polo, leggings, jogging pants' },
      { nom: 'Standard piece', prix: 9, detail: 'Shirt, blouse, pants, jeans, skirt, shorts' },
      { nom: 'Complex piece', prix: 15, detail: 'Dress, linen piece, pleated skirt or dress' },
      { nom: 'Suit jacket', prix: 20, detail: 'Suit jacket, blazer' },
    ],
    condition1: 'Minimum of 8 pieces',
    condition2: 'Pickup and delivery always included',
    horsListe:
      'These examples situate each tier; your steward sorts the other pieces at pickup.',
    /* ÉDITORIAL */
    egards:
      'We respectfully decline wool, cashmere and loose-knit or handmade knits, as well as haute couture pieces. These fabrics deserve their own specialist.',
  },

  quartier: {
    /* ÉDITORIAL */
    titre: 'A chosen territory, deadlines kept',
    /* ÉDITORIAL */
    propos1:
      'A service this precise only extends where it can keep its word. Vestia serves Griffintown, the Cité du Multimédia, Old Montreal and the Old Port.',
    propos2:
      'Monday to Friday, pickup at the agreed time, return the same day or the next; never later.',
    etiquetteCodePostal: 'Your postal code',
    verifier: 'Check',
    erreurCodePostal: 'Please enter a valid postal code.',
    desservi: 'Vestia serves your address.',
    /* ÉDITORIAL */
    promesse: 'Your neighbourhood is not covered yet. Leave us your email — it will be.',
    votreCourriel: 'Your email',
    prevenezMoi: 'Notify me',
    erreurCourriel: 'Please enter a valid email address.',
    note: 'Noted. Vestia will write to you.',
    echecEnvoi: 'The submission did not go through. Please try again.',
    sujetListeAttente: 'WAITLIST',
    altCarte:
      'Map of the area served by Vestia: Griffintown, Cité du Multimédia, Old Montreal and the Old Port, between the Lachine Canal and the St. Lawrence River',
  },

  engagements: {
    /* ÉDITORIAL */
    titre: 'What Vestia owes you',
    clauses: [
      {
        /* ÉDITORIAL */
        titre: 'Counted, countersigned',
        texte: 'Every piece is counted with you at pickup, and recounted with you at return.',
      },
      {
        /* ÉDITORIAL */
        titre: 'The evening that suits you',
        texte:
          'Your pickup window is an appointment, not an estimate. Pickup before 9 a.m.: your pieces can come back the same evening. Otherwise, you choose the evening that works for you.',
      },
      {
        /* ÉDITORIAL */
        titre: 'Pay on delivery',
        texte:
          'Interac transfer once your clothes are returned. No card, no prepayment, no surprises.',
      },
    ],
  },

  questions: {
    titre: 'Common questions',
    entrees: [
      {
        question: 'What happens if a piece is damaged?',
        reponse:
          'Every piece is counted with you at pickup and recounted at return. If damage were to occur through our fault, report it within 24 hours, with photos, by email or text message. Our liability extends up to ten times the processing price of the piece.',
      },
      {
        question: 'How does payment work?',
        reponse:
          'On delivery, by Interac transfer or in cash. Please have the exact amount: your steward carries no change. Tipping remains entirely at your discretion and is never expected.',
      },
      {
        question: 'What if I am not home at return time?',
        reponse:
          'You choose your return evening when you book, and a message announces our arrival. If something comes up, write to us: we will arrange another time.',
      },
      {
        question: 'Do my clothes need to be washed?',
        reponse:
          'Yes. Vestia irons, but does not wash. Your pieces come to us clean, ready to be pressed.',
      },
    ],
  },

  final: {
    /* ÉDITORIAL */
    mot: 'Ready-to-wear.',
    /* ÉDITORIAL */
    cta: 'Book a pickup',
  },

  footer: {
    nom: 'Vestia — Ironing · Home pickup and delivery',
    lieux: 'Griffintown · Cité du Multimédia · Old Montreal',
    horaires: 'Monday to Friday',
    conditions: 'Terms of use',
    politique: 'Privacy policy',
    gererTemoins: 'Manage cookies',
  },

  temoins: {
    titreBanniere: 'Cookies',
    texteBanniere:
      'Vestia uses cookies that are essential to the operation of the site, as well as audience measurement and advertising cookies, set only with your consent. You can change your choice at any time through the “Manage cookies” link at the bottom of the page.',
    lienPolitique: 'Privacy policy',
    toutAccepter: 'Accept all',
    toutRefuser: 'Refuse all',
    personnaliser: 'Customize',
    fermer: 'Close',
    titreModale: 'Manage cookies',
    essentielsTitre: 'Essential cookies',
    essentielsTexte:
      'Required for the site to work, including remembering your cookie preferences. Always active.',
    analyticsTitre: 'Audience measurement',
    analyticsTexte:
      'Help us understand how the site is visited (Google Analytics). Off by default.',
    marketingTitre: 'Advertising and social media',
    marketingTexte:
      'Allow us to measure the effectiveness of our communications (Meta). Off by default.',
    noteRetrait: 'Withdrawal takes effect on the next page load.',
    enregistrer: 'Save my choices',
  },

  reserver: {
    retourBouton: '‹ Back',
    ecran1Titre: 'Your address',
    etiquetteCodePostal: 'Your postal code',
    verifier: 'Check',
    erreurCodePostal: 'Please enter a valid postal code.',
    desservi: 'Vestia serves your address.',
    /* ÉDITORIAL */
    promesse: 'Your neighbourhood is not covered yet. Leave us your email — it will be.',
    votreCourriel: 'Your email',
    prevenezMoi: 'Notify me',
    etiquetteRue: 'Number and street',
    erreurRue: 'Please enter your number and street.',
    etiquetteApp: 'Apartment',
    optionnel: '(optional)',
    aideApp: 'Without an apartment number, your steward meets you in the entrance hall.',
    etiquetteAcces: 'Access instructions',
    placeholderAcces: 'Entry code, concierge, remarks…',
    continuer: 'Continue',

    ecran2Titre: 'Your pickup',
    etiquetteJour: 'The day',
    ariaMoisPrecedent: 'Previous month',
    ariaMoisSuivant: 'Next month',
    ariaCalendrier: 'Choose your pickup day',
    voileMois: 'Pickups opening soon',
    legendeComplet: 'Full',
    legendeCompletTexte: 'the pickup limit has been reached',
    legendeFerie: 'Weekend or holiday',
    legendeFerieTexte: 'Vestia does not operate',
    ferie: 'holiday',
    complet: 'full',
    erreurJour: 'Please choose a pickup day.',
    verrou: 'Choose a day first',
    etiquetteFenetres: 'The pickup window',
    matin: 'Morning',
    finDeJournee: 'End of day',
    erreurFenetre: 'Please choose a pickup window.',
    etiquetteRetour: 'The return',
    rappelRetour: 'Return between 5:30 and 7:30 p.m. A message announces our arrival.',
    erreurRetour: 'Please choose a return time.',
    etiquettePieces: 'Roughly how many pieces do you have?',
    rappelPieces: 'Minimum of 8 pieces. The exact count is done with you, at pickup.',
    erreurTranche: 'Please choose a quantity range.',
    etiquetteNotes: 'Anything your steward should know?',

    ecran3Titre: 'Your contact information',
    etiquettePrenom: 'First name',
    erreurPrenom: 'Please enter your first name.',
    etiquetteNom: 'Last name',
    erreurNom: 'Please enter your last name.',
    etiquetteCourriel: 'Email',
    erreurCourriel: 'Please enter a valid email address.',
    etiquetteMobile: 'Mobile',
    aideMobile: 'Your confirmation arrives by text message.',
    erreurMobile: 'Please enter a valid mobile number.',
    recapTitre: 'Your request',
    recapAdresse: 'Address',
    recapCueillette: 'Pickup',
    recapRetour: 'Return',
    recapVolume: 'Volume',
    pieces: 'pieces',
    conditionsAvant: 'I have read and accept the ',
    conditionsLien: 'terms of use',
    erreurConditions: 'Please accept the terms of use.',
    infolettre: 'Keep me informed of Vestia news',
    envoyer: 'Send my request',
    discretEnvoi: 'Confirmation by text message within 2 hours.',
    echecEnvoi: 'The submission did not go through. Try again, or write to us at info@vestia.ca.',
    noteAttente: 'Noted. Vestia will write to you.',

    confirmationTitre: 'We have received your request.',
    confirmationSuite:
      'Your Vestia steward will confirm your window by text message within 2 hours.',
    confirmationSouhait: 'Requested pickup',
    confirmationRetour: 'Return',
    confirmationSoir: 'Sent in the evening? Your confirmation arrives from 7 a.m.',
    retourAccueil: '‹ Back to home',

    aConvenir: 'to be arranged together',
    fenetresMatin: ['7 – 7:30 a.m.', '7:30 – 8 a.m.', '8 – 8:30 a.m.', '8:30 – 9 a.m.'],
    fenetresSoir: ['5:30 – 6 p.m.', '6 – 6:30 p.m.', '6:30 – 7 p.m.', '7 – 7:30 p.m.'],
    tranches: ['8 – 10', '11 – 15', '16 – 20', '21 or more'],
    creneauRetour: '5:30 – 7:30 p.m.',
    sujetCueillette: 'PICKUP',
    sujetListeAttente: 'WAITLIST',
    infolettreOui: 'yes',
    infolettreNon: 'no',
  },
} as const;
