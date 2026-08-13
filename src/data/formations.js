// Données détaillées des formations — partagé entre Pricing (PDF) et les fiches

export const formationsData = {
  epilation: {
    title: "Épilation",
    price: "990€",
    duration: "4,5 jours",
    objective: "Théorie et pratique des techniques d'épilation à la cire, de l'hygiène à la pratique sur modèles réels.",
    days: [
      {
        title: "Jour 1 — Théorie",
        sessions: [
          { time: "9h00 à 13h00", items: ["Remise des supports de cours épilation", "Anatomie du poil", "Les différents appareils", "Les principes de base, fondement, objectifs", "Les différentes cires", "L'hygiène, le matériel, l'entretien, le marketing, les tarifs", "Apprendre à reconnaître une cliente potentielle", "Les différents types d'épilation"] },
          { time: "14h00 à 17h00", items: ["Préparation de la salle et du client", "Techniques des différentes épilations", "Techniques de l'épilation visage", "Training sur poupée"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Préparation de la salle", "Révision des notions de la veille", "Installation du client", "Les différents gestes d'épilation", "Pratique"] },
          { time: "14h00 à 17h00", items: ["Pratique en binôme", "Questions / réponses", "Bilan de la journée"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique sur client", "Préparation de la salle", "Épilation jambes complètes + maillot + aisselles", "Séance de questions / réponses"] },
          { time: "14h00 à 17h00", items: ["Préparation de la salle", "Épilation visage", "Révision des notions de la veille", "Bilan de la journée"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Révisions de toutes les notions d'épilation", "Pratique sur modèles réelles", "Bilan de la formation", "Questions / réponses"] },
        ],
      },
      {
        title: "Jour 5 — Examen",
        sessions: [
          { time: "9h00 à 13h00", items: ["Examen théorique", "Examen pratique"] },
        ],
      },
    ],
  },
  "soin-visage": {
    title: "Soin du Visage",
    price: "1590€",
    duration: "4,5 jours / 32h",
    objective: "Théorie et pratique du soin visage : anatomie de la peau, cosmétologie, gestes techniques et pratique sur modèles réels.",
    days: [
      {
        title: "Jour 1 — Théorie",
        sessions: [
          { time: "9h00 à 13h00", items: ["Remise du support de cours", "La peau", "Le matériel", "Les différents types de peau", "La préparation de la cabine", "Les différents types de soins", "Le déroulement du soin", "Questions / réponses"] },
          { time: "Pratique", items: ["Préparation de la cabine", "Préparation du plan de travail", "Pratique d'un soin en binôme", "Points sur les enseignements de la journée"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique démaquillage", "Pratique d'un gommage", "Utilisation du vapozone", "Extraction des comédons", "Modelage visage", "Masque", "Pratique avec optimisation du temps de réalisation", "Séance de questions / réponses"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique en binôme", "Entraînement du modelage sur tête en silicone", "Questions / réponses"] },
          { time: "14h00 à 17h00", items: ["Programme de la matinée"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique avec optimisation du temps sur modèles réelles", "Fiche cliente", "Fiche conseil — rituel de beauté"] },
          { time: "14h00 à 17h00", items: ["Programme de la matinée", "Questions / réponses", "Bilan de la formation"] },
        ],
      },
      {
        title: "Jour 5 — Examen",
        sessions: [
          { time: "9h00 à 17h00", items: ["Questionnaire théorique", "Préparation d'une cabine", "Préparation d'une fiche cliente", "Préparation d'un plan de travail", "Diagnostic de peau", "Déroulement d'un soin"] },
        ],
      },
    ],
  },
  "soin-corps": {
    title: "Massage & Soins Corps",
    price: "1390€",
    duration: "4,5 jours",
    objective: "Théorie et pratique sur les techniques de massage relaxant, tonic et amincissant.",
    days: [
      {
        title: "Jour 1 — Théorie & Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Remise des supports de cours Massage", "Les principes de base : fondement, mécanismes, objectifs", "L'hygiène, le matériel, l'entretien, le marketing, les tarifs", "Les différentes appellations", "Le plan de travail", "Les muscles", "Le déroulement d'un massage", "Reconnaître une cliente potentielle", "Les différentes techniques de massage"] },
          { time: "14h00 à 17h00", items: ["Techniques de massage jambes et pieds", "La préparation du client"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Préparation de la salle", "Installation du client", "Récapitulatif massage jambes et pieds", "Massage ventre, bras, buste, épaules, tête"] },
          { time: "14h00 à 17h00", items: ["Récapitulatif du massage", "Pratique en binômes", "Bilan de la journée"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique jambes arrières / dos", "Finitions du massage", "Séance de questions / réponses"] },
          { time: "14h00 à 17h00", items: ["Pratique sur modèles réelles", "Bilan du massage", "Questions / réponses"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique sur modèles", "Techniques amincissantes / tonic", "Massage complet"] },
          { time: "14h00 à 17h00", items: ["Pratique massage complet", "Préparation de la cabine", "Bilan de la formation"] },
        ],
      },
      {
        title: "Jour 5 — Examen",
        sessions: [
          { time: "9h00 à 13h00", items: ["Examen théorique", "Examen pratique", "Préparation de la salle, mise en place des produits et matériels"] },
        ],
      },
    ],
  },
  "pedicure-manicure": {
    title: "Manucure & Pédicure",
    price: "990€",
    duration: "4,5 jours",
    objective: "Théorie et pratique de la manucure et pédicure : anatomie des ongles, pose vernis et vernis permanent.",
    days: [
      {
        title: "Jour 1 — Théorie",
        sessions: [
          { time: "9h00 à 13h00", items: ["Remise des supports de cours Manucure Pédicure", "Les ongles : nature et maladies", "Le matériel", "Les règles d'hygiène", "Le déroulement de la manucure", "Le déroulement de la pédicure", "Les différents vernis", "Questions / réponses"] },
          { time: "14h00 à 17h00", items: ["Préparation d'un plan de travail", "Démonstration d'une manucure pédicure", "Démonstration d'une pose vernis"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique d'une manucure en binôme", "Pratique d'une pédicure en binôme", "Pratique d'une pose vernis", "Pratique d'une pose vernis permanent"] },
          { time: "14h00 à 17h00", items: ["Pratique pose vernis", "Démonstration d'une french vernis", "Pratique d'une pose vernis permanent"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique avec optimisation du temps sur modèles réelles", "Pose vernis", "Pose vernis permanent", "Pose vernis french"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Pratique avec optimisation du temps sur modèles", "Séance de questions / réponses"] },
          { time: "14h00 à 17h00", items: ["Pratique sur modèles réelles", "Bilan de la formation"] },
        ],
      },
      {
        title: "Matinée 5 — Examen",
        sessions: [
          { time: "9h00 à 13h00", items: ["Questionnaire théorique", "Préparation du plan de travail", "Pratique sur modèle"] },
        ],
      },
    ],
  },
  onglerie: {
    title: "Prothésiste Ongulaire",
    price: "1390€",
    duration: "4,5 jours / 32h",
    objective: "Théorie et pratique de la méthode de pose de capsules, gel UV et chablon, avec décoration et finition.",
    days: [
      {
        title: "Jour 1 — Théorie & Pratique",
        sessions: [
          { time: "9h00 à 12h30 — Théorie", items: ["Remise des supports de cours onglerie", "Les ongles : cycle de vie, maladies", "L'hygiène, le matériel, l'entretien, les retouches, le marketing, les tarifs", "Reconnaître une cliente potentielle", "Le plan de travail", "Déroulement d'une pose chablon", "Déroulement d'une pose capsules + gel", "Agrément et modalité de l'examen"] },
          { time: "13h30 à 17h00 — Pratique", items: ["Pose de capsules sur doigt d'entraînement", "Collage de capsule", "Techniques de limage"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 12h30", items: ["Pose de capsules sur doigt d'entraînement", "Techniques de pose de french", "Travail du gel de modelage"] },
          { time: "13h30 à 17h00", items: ["Modelage du gel", "Technique de limage", "Pose du finish"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 12h30", items: ["Pose de capsules sur modèles vivants (qualité du travail)", "Récapitulatif des différentes techniques", "Analyse des difficultés rencontrées", "Synthèse et bilan de la pose"] },
          { time: "13h30 à 17h00", items: ["Pose chablons sur modèles vivants (qualité du travail)", "Récapitulatif des différentes techniques", "Synthèse et bilan de la pose"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 12h30", items: ["Pose de capsules sur modèles vivants (qualité et rapidité)", "Méthode de décoration (pose de strass)", "Mise en application des différentes techniques", "Synthèse et bilan de la pose"] },
          { time: "13h30 à 17h00", items: ["Pose de capsules sur modèles vivants (qualité et rapidité)", "Mise en application des différentes techniques", "Pose de strass", "Synthèse et bilan de la pose"] },
        ],
      },
      {
        title: "Jour 5 — Examen",
        sessions: [
          { time: "9h00 à 12h30", items: ["Examen théorique (1 heure)", "Examen pratique (2 heures) sur modèles vivants", "Notation de la pratique et synthèse", "Notation de la théorie et correction", "Remise des attestations"] },
        ],
      },
    ],
  },
  maquillage: {
    title: "Maquillage",
    price: "1290€",
    duration: "4,5 jours",
    objective: "Acquisition des notions élémentaires du maquillage professionnel : hygiène, outils, morphologie, colorimétrie et techniques Jour / Cocktail / Soir / Mariée.",
    days: [
      {
        title: "Jour 1 — Théorie",
        sessions: [
          { time: "9h00 à 13h00", items: ["Remise des supports de cours", "Les différents produits de maquillage", "L'hygiène, le matériel, l'entretien, le marketing, les tarifs", "Apprendre à reconnaître une cliente potentielle", "Les différentes morphologies de visages", "Les corrections des sourcils et de la bouche", "Déroulement d'un maquillage"] },
          { time: "14h00 à 17h00", items: ["Préparation de la salle et de la cliente", "Techniques des différents maquillages", "Démonstration d'un maquillage", "Questions / réponses"] },
        ],
      },
      {
        title: "Jour 2 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Préparation du plan de travail", "Démonstration des différentes techniques : dégradé, banane, halo", "La colorimétrie", "Les différentes typologies de couleur", "Maquillage jour, soirée, mariée"] },
          { time: "14h00 à 17h00", items: ["Pratique en binôme", "Séance de questions / réponses"] },
        ],
      },
      {
        title: "Jour 3 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Préparation du plan de travail", "Révision des notions de la veille", "Maquillage jour"] },
          { time: "14h00 à 17h00", items: ["Préparation du plan de travail", "Révision des notions de la veille", "Maquillage soirée", "Maquillage mariée"] },
        ],
      },
      {
        title: "Jour 4 — Pratique",
        sessions: [
          { time: "9h00 à 13h00", items: ["Préparation du plan de travail", "Révision des notions de la veille", "Maquillage soirée", "Maquillage mariée", "Bilan de la formation"] },
          { time: "14h00 à 17h00", items: ["Amélioration sur les difficultés rencontrées", "Maquillage jour à transformer en maquillage soirée", "Questions / réponses"] },
        ],
      },
      {
        title: "Jour 5 — Examen",
        sessions: [
          { time: "9h00 à 13h00", items: ["Examen théorique", "Préparation du plan de travail", "Examen pratique"] },
        ],
      },
    ],
  },
}

// Mapping entre les cartes Pricing et les données détaillées
export const formationKeyMap = {
  "Épilations": "epilation",
  "Soins du Visage": "soin-visage",
  "Massage & Soins Corps": "soin-corps",
  "Manucure & Pédicure": "pedicure-manicure",
  "Onglerie": "onglerie",
  "Maquillage": "maquillage",
}
