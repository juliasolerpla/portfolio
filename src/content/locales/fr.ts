import type { Dictionary } from "../types";

// French typography puts a non-breaking space ( ) before : ; ? and !
export const fr: Dictionary = {
  meta: {
    title: "Júlia Soler — Ingénieure aérospatiale",
    description:
      "Portfolio de Júlia Soler i Pla, ingénieure en aérospatial et en télécommunications, en MSc d’ingénierie des systèmes spatiaux à l’ISAE-SUPAERO (Toulouse).",
    ogRole: "Ingénieure aérospatiale.",
    ogTagline: "MSc Ingénierie des systèmes spatiaux · ISAE-SUPAERO",
  },
  nav: {
    home: "Accueil",
    resume: "CV",
    projects: "Projets",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    language: "Langue",
    skipToContent: "Aller au contenu",
    main: "Navigation principale",
  },
  hero: {
    greeting: "Je suis Júlia Soler,",
    role: "ingénieure aérospatiale.",
    intro:
      "Diplômée d’un double cursus en ingénierie aérospatiale et en télécommunications, je termine un MSc en ingénierie des systèmes spatiaux à l’ISAE-SUPAERO, à Toulouse.",
    outro:
      "Faites défiler pour découvrir mes projets : des mécanismes pour CubeSat à l’avionique d’une fusée.",
    photoAlt: "Portrait de Júlia Soler",
    linkedin: "LinkedIn",
    projects: "Projets",
    resume: "CV",
  },
  home: {
    projectsTitle: "Projets phares.",
    allProjects: "Tous les projets",
    previous: "Projet précédent",
    next: "Projet suivant",
    learnMore: "En savoir plus",
    glanceTitle: "En bref.",
    stats: [
      { value: "3,9/4", label: "Moyenne (GPA) en MSc à l’ISAE-SUPAERO" },
      { value: "10/10", label: "Note de mon travail de fin d’études de bachelor" },
      {
        value: "9 000 m",
        label: "Apogée visé par la fusée de compétition sur laquelle je travaille",
      },
      { value: "4", label: "Langues : catalan, espagnol, anglais et français" },
    ],
  },
  contact: {
    title: "Parlons-en.",
    text: "Envie d’échanger sur les systèmes spatiaux, un projet ou une opportunité ? Le plus simple est de m’écrire par e-mail.",
    email: "M’écrire",
    linkedin: "LinkedIn",
  },
  resume: {
    title: "CV.",
    description:
      "Formation, expérience, projets et compétences de Júlia Soler i Pla, ingénieure en aérospatial et en télécommunications.",
    headline: "MSc en ingénierie aérospatiale — ISAE-SUPAERO",
    summary:
      "Ingénieure issue d’un double cursus en aérospatial et en télécommunications, je termine actuellement un MSc en ingénierie des systèmes spatiaux à l’ISAE-SUPAERO. Cinq années d’études universitaires et de recherche en master m’ont apporté une large base technique couvrant tout le cycle de vie de l’ingénierie — de la conception et la modélisation au prototypage, aux essais et à la validation — ainsi que la rigueur analytique nécessaire pour aborder des problèmes complexes. Méthodique et sincèrement passionnée par l’espace, j’ai fait mes preuves aussi bien en entreprise qu’en recherche.",
    download: "Télécharger le PDF",
    sections: {
      education: "Formation",
      experience: "Expérience",
      research: "Projets académiques et de recherche",
      extracurricular: "Vie associative",
      languages: "Langues",
      skills: "Compétences",
      interests: "Centres d’intérêt",
      contact: "Contact",
    },
    present: "aujourd’hui",
    gpa: "GPA",
    grade: "Note",
    native: "Langue maternelle",
    viewProject: "Voir le projet",
  },
  projectsPage: {
    title: "Projets.",
    description:
      "Projets d’ingénierie et de recherche de Júlia Soler : mécanismes pour CubeSat, avionique de fusée, GNC orbital et magnétosphères des planètes géantes.",
    intro:
      "Une sélection de ce que j’ai conçu, construit et étudié, en formation comme au sein d’équipes étudiantes.",
  },
  project: {
    back: "Tous les projets",
    highlights: "Points clés",
    tools: "Outils et méthodes",
    role: "Rôle",
    framework: "Cadre",
    period: "Période",
    location: "Lieu",
    result: "Résultat",
    previous: "Projet précédent",
    next: "Projet suivant",
  },
  notFound: {
    title: "Hors orbite.",
    text: "La page que vous cherchez n’existe pas ou a été déplacée.",
    back: "Retour à l’accueil",
  },
  places: {
    toulouse: "Toulouse",
    barcelona: "Barcelone, Espagne",
    palafolls: "Palafolls, Espagne",
  },
  education: {
    isae: {
      degree: "Master of Science en ingénierie aérospatiale",
      detail: "Spécialisation en systèmes spatiaux.",
    },
    upcAerospace: {
      degree: "Bachelor en ingénierie aérospatiale",
      detail: "Solides bases en mécanique du vol, ingénierie système et structures aérospatiales.",
    },
    upcTelecom: {
      degree: "Bachelor en ingénierie des télécommunications",
      detail: "Solides bases en traitement du signal, conception RF, antennes et électronique.",
    },
  },
  experience: {
    aimsun: {
      role: "Ingénieure QA logiciel",
      type: "Stage",
      bullets: [
        "Conception et exécution de plans de tests fonctionnels, de non-régression et d’intégration pour Aimsun Next ; suivi des anomalies dans Jira.",
        "Renforcement des pipelines d’intégration continue (CI), pour des livraisons plus stables et une détection plus rapide des bugs critiques.",
      ],
    },
    iziRecord: {
      role: "Ingénieure multimédia",
      type: "Stage",
      bullets: [
        "Développement d’un service backend de montage vidéo intégré aux chaînes de traitement multimédia en production.",
      ],
    },
    summerCamps: {
      role: "Animatrice de colonies de vacances",
      period: "Étés 2018–2022",
      bullets: [
        "Organisation et animation d’activités éducatives et de loisirs pour enfants et adolescents.",
      ],
    },
  },
  languages: {
    catalan: "Catalan",
    spanish: "Espagnol",
    english: "Anglais",
    french: "Français",
  },
  skills: {
    design: "Conception mécanique et aérodynamique",
    programming: "Programmation",
    simulation: "Modélisation et simulation",
    rf: "RF et électronique",
    tools: "Outils",
  },
  interests: [
    "Castells (tours humaines catalanes)",
    "Sport : triathlon, escalade et plongée (niveau Open Water)",
    "Musique : piano et saxophone",
    "Astronomie amateur",
  ],
  projects: {
    "cubesat-hdrm": {
      shortTitle: "Mécanisme de libération pour CubeSat.",
      title: "Mécanisme de maintien et de libération (HDRM) imprimé en 3D pour missions CubeSat",
      kind: "Travail de fin d’études (bachelor)",
      summary:
        "Un mécanisme imprimé en 3D qui maintient repliés les panneaux solaires et les antennes d’un CubeSat pendant le lancement, conçu et validé sous fortes vibrations.",
      body: [
        "Les panneaux solaires et les antennes déployables doivent encaisser, repliés, les fortes vibrations du lancement, puis se libérer de façon fiable une fois en orbite. C’est le rôle d’un mécanisme de maintien et de libération (Hold-Down Release Mechanism, HDRM).",
        "Pour mon travail de fin d’études à l’UPC, j’ai conçu et validé un HDRM imprimé en 3D pour les panneaux solaires et les antennes d’un CubeSat. Le mécanisme a été testé sous des vibrations représentatives du lancement et vérifié à l’aide d’une matrice de conformité aux exigences.",
      ],
      highlights: [
        "Conception d’un mécanisme de maintien et de libération imprimé en 3D pour panneaux solaires et antennes",
        "Essais sous fortes vibrations représentatives du lancement",
        "Vérification à l’aide d’une matrice de conformité aux exigences",
        "Note : 10/10",
      ],
      resumeBullets: [
        "Conception et validation d’un mécanisme de maintien et de libération (HDRM) imprimé en 3D pour les panneaux solaires et les antennes d’un CubeSat, testé sous fortes vibrations de lancement selon une matrice de conformité.",
      ],
      tags: [
        "CubeSat",
        "Mécanismes",
        "Fabrication additive",
        "Essais vibratoires",
        "Vérification et validation",
      ],
      coverAlt: "Dessin au trait d’un CubeSat aux panneaux solaires déployés",
    },
    "rocket-avionics": {
      shortTitle: "Avionique de fusée.",
      title: "Avionique d’une fusée de compétition visant 9 000 m d’apogée",
      kind: "Supaero Space Section",
      role: "Ingénieure avionique",
      summary:
        "Ordinateur de bord, capteurs et télémesure pour une fusée étudiante de compétition conçue pour atteindre 9 000 m d’apogée.",
      body: [
        "Au sein de la Supaero Space Section, le club spatial étudiant de l’ISAE-SUPAERO, je fais partie de l’équipe qui construit une fusée de compétition conçue pour atteindre un apogée de 9 000 m.",
        "En tant qu’ingénieure avionique, j’ai conçu et testé le sous-système avionique (ordinateur de bord, capteurs et télémesure) et piloté son intégration matériel/logiciel, avec une attention particulière à la fiabilité sous les fortes accélérations du lancement.",
      ],
      highlights: [
        "Conception du sous-système avionique : ordinateur de bord, capteurs et télémesure",
        "Intégration matériel/logiciel",
        "Fiabilité sous les fortes accélérations du lancement",
        "Essais du sous-système",
      ],
      resumeBullets: [
        "Conception et essais du sous-système avionique (ordinateur de bord, capteurs, télémesure) d’une fusée de compétition visant 9 000 m d’apogée.",
        "Pilotage de l’intégration matériel/logiciel et de la fiabilité sous les fortes accélérations du lancement.",
      ],
      tags: ["Avionique", "Systèmes embarqués", "Télémesure", "Intégration HW/SW", "Essais"],
      coverAlt:
        "Dessin au trait d’une fusée-sonde avec une vue de détail de son ordinateur de bord",
    },
    "inoas-gnc": {
      shortTitle: "GNC de rendez-vous orbital.",
      title: "INOAS : navigation et contrôle pour le service en orbite en LEO",
      kind: "Student Aerospace Challenge",
      role: "Développement du système GNC (WP7)",
      summary:
        "Un système de navigation intégré pour le service en orbite basse, avec une estimation d’état par UKF et une commande MPC pour un rendez-vous orbital sûr.",
      body: [
        "Le service en orbite (inspecter, réparer ou ravitailler des satellites dans l’espace) exige qu’un véhicule s’approche de sa cible avec précision et sans aucun risque de collision. Dans le cadre du Student Aerospace Challenge, j’ai travaillé sur le guidage, la navigation et le contrôle (GNC) d’une telle mission (lot de travail 7).",
        "J’ai développé INOAS, un système de navigation intégré qui arbitre entre précision GNSS et efficacité énergétique. J’en ai construit l’estimation d’état avec un filtre de Kalman unscented (UKF) et la commande avec une commande prédictive (MPC), pour des manœuvres critiques de rendez-vous et d’évitement de collision, validées sous MATLAB/Simulink.",
      ],
      highlights: [
        "Navigation intégrée arbitrant entre précision GNSS et efficacité énergétique",
        "Estimation d’état par filtre de Kalman unscented (UKF)",
        "Commande prédictive (MPC) pour le rendez-vous et l’évitement de collision",
        "Validation sous MATLAB/Simulink",
      ],
      resumeBullets: [
        "Développement d’INOAS, un système de navigation intégré pour le service en orbite en LEO, arbitrant entre précision GNSS et efficacité énergétique.",
        "Réalisation de l’estimation d’état (filtre de Kalman unscented) et de la commande (commande prédictive) pour des manœuvres critiques de rendez-vous et d’évitement de collision, validées sous MATLAB/Simulink.",
      ],
      tags: ["GNC", "Filtrage de Kalman", "MPC", "MATLAB/Simulink", "Service en orbite"],
      coverAlt:
        "Dessin au trait d’un véhicule de service s’approchant d’un satellite en orbite terrestre basse",
    },
    "plasma-magnetospheres": {
      shortTitle: "Magnétosphères des planètes géantes.",
      title: "Fuite de plasma à travers les frontières magnétosphériques de Jupiter et Saturne",
      kind: "Projet de recherche de MSc",
      summary:
        "Comment le plasma s’échappe-t-il des magnétosphères de Jupiter et Saturne ? Un projet de recherche fondé sur des données multi-instruments de sondes spatiales.",
      body: [
        "Jupiter et Saturne sont entourés d’immenses magnétosphères : des régions dominées par le champ magnétique propre de la planète et protégées du vent solaire. Leurs frontières ne sont pourtant pas parfaitement étanches : une partie du plasma les traverse.",
        "Dans mon projet de recherche de MSc à l’ISAE-SUPAERO, j’étudie ce transport de plasma à travers les frontières magnétosphériques des deux planètes à partir de données multi-instruments de sondes spatiales, en m’appuyant sur l’analyse de signaux et la visualisation de données.",
      ],
      highlights: [
        "Analyse de données multi-instruments de sondes spatiales",
        "Analyse de signaux et visualisation de données",
        "Frontières magnétosphériques de Jupiter et de Saturne",
      ],
      resumeBullets: [
        "Étude du transport de plasma à travers les frontières magnétosphériques de Jupiter et Saturne à partir de données multi-instruments de sondes spatiales, par l’analyse de signaux et la visualisation de données.",
      ],
      tags: [
        "Physique spatiale",
        "Magnétosphères",
        "Analyse de signaux",
        "Visualisation de données",
      ],
      coverAlt:
        "Schéma de la magnétosphère d’une planète géante avec ses lignes de champ, l’onde de choc et la magnétopause",
    },
  },
};
