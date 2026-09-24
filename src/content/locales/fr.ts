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
    insetAlt: "Júlia Soler au travail",
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
      { value: "1", label: "Publications et présentations" },
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
    photoAlt: "Photo de Júlia Soler",
    summary:
      "Ingénieure issue d’un double cursus en aérospatial et en télécommunications, je termine actuellement un MSc en ingénierie des systèmes spatiaux à l’ISAE-SUPAERO. Cinq années d’études universitaires et de recherche en master m’ont apporté une large base technique couvrant tout le cycle de vie de l’ingénierie — de la conception et la modélisation au prototypage, aux essais et à la validation — ainsi que la rigueur analytique nécessaire pour aborder des problèmes complexes. Méthodique et sincèrement passionnée par l’espace, j’ai fait mes preuves aussi bien en entreprise qu’en recherche.",
    download: "Télécharger le PDF",
    sections: {
      education: "Formation",
      experience: "Expérience",
      research: "Projets académiques et de recherche",
      extracurricular: "Vie associative",
      publications: "Publications et présentations",
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
    problem: "Le problème",
    approach: "Ce que j’ai fait",
    highlights: "Points clés",
    results: "Résultats",
    outcome: "Résultat final",
    team: "Équipe",
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
  extracurricular: {
    upcOrchestra: {
      title: "Orchestre de l’UPC",
      role: "Saxophoniste",
      bullets: ["Saxophoniste dans l’orchestre universitaire."],
    },
  },
  publications: [
    {
      text: "F. Martin, J. Soler i Pla, N. André, « Plasma leakage through the magnetospheric boundaries of Jupiter and Saturn », poster à MOP 2026 (Magnetospheres of the Outer Planets), Toulouse.",
      href: "/images/projects/plasma/poster.jpg",
    },
  ],
  projects: {
    "cubesat-hdrm": {
      shortTitle: "Mécanisme de libération pour CubeSat.",
      title: "Mécanisme de maintien et de libération (HDRM) imprimé en 3D pour missions CubeSat",
      kind: "Travail de fin d’études (bachelor)",
      summary:
        "Un mécanisme imprimé en 3D, à usage unique, qui maintient fermés les panneaux solaires d’un CubeSat pendant le lancement et les libère avec un fil chauffant, testé jusqu’à 40 % au-delà de sa charge de dimensionnement.",
      body: [
        "Les panneaux solaires et les antennes déployables doivent encaisser, repliés, les charges du lancement, puis se libérer de façon fiable, une seule fois, en orbite, sans laisser le moindre débris. C’est le rôle d’un mécanisme de maintien et de libération (Hold-Down Release Mechanism, HDRM). Les mécanismes commerciaux coûtent cher ; mon travail de fin d’études cherchait à savoir si un mécanisme imprimé en 3D à faible coût pouvait remplir la même fonction.",
        "J’ai conçu un HDRM à usage unique imprimé en 3D en PLA : deux bras de libération sont maintenus fermés par un fil de nylon, qu’un fil de NiChrome fait fondre par effet Joule pour les libérer. Avec des simulations EF sous SolidWorks, j’ai comparé deux géométries d’articulation et retenu une articulation en soufflet de 1 mm, meilleur compromis entre souplesse et résistance, puis redessiné les bras avec une dent de retenue et des guides latéraux pour empêcher tout déplacement latéral du lien de retenue. J’ai imprimé, assemblé et testé le prototype.",
      ],
      highlights: [
        "HDRM à usage unique imprimé en 3D en PLA, libéré par un fil chauffant en NiChrome",
        "Redessin guidé par le calcul EF : une articulation en soufflet a surpassé une articulation simplement circulaire",
        "A tenu 140 N en traction, soit 40 % au-delà de la charge de dimensionnement de 100 N, sans déformation",
        "Toutes les exigences de la matrice d’évaluation vérifiées : environ TRL 4",
      ],
      resumeBullets: [
        "Conception et validation d’un mécanisme de maintien et de libération (HDRM) à usage unique imprimé en 3D pour les panneaux solaires d’un CubeSat, testé jusqu’à 140 N et libéré par un fil chauffant en environ 4 s ; toutes les exigences vérifiées.",
      ],
      tags: [
        "CubeSat",
        "Mécanismes",
        "Fabrication additive",
        "Calcul EF",
        "Vérification et validation",
      ],
      coverAlt: "Dessin au trait d’un CubeSat aux panneaux solaires déployés",
      stats: [
        { value: "15 g", label: "Masse du mécanisme" },
        { value: "140 N", label: "Charge tenue lors de l’essai de traction" },
        { value: "4 s", label: "Temps de libération moyen" },
        { value: "10/10", label: "Note du travail" },
      ],
      designCaption:
        "Modèle CAO du mécanisme : fermé pour le lancement (à gauche) et ouvert après libération (à droite).",
      results: [
        {
          alt: "Le prototype du HDRM imprimé en 3D, fermé et maintenu par son fil de nylon",
          caption: "Le prototype final en position fermée, maintenu par un fil de nylon.",
        },
        {
          alt: "Simulation EF du bras de libération montrant la contrainte, le déplacement et la déformation",
          caption:
            "Simulation EF du bras de libération (contrainte de Von Mises, déplacement et déformation), utilisée pour comparer les géométries d’articulation.",
        },
        {
          alt: "Essai de traction avec le mécanisme suspendu sous une charge de 140 N",
          caption:
            "Essai de traction : le mécanisme a tenu 140 N, soit 40 % au-delà de la charge de dimensionnement de 100 N, sans déformation.",
        },
        {
          alt: "Circuit de libération par fil chauffant en cours d’essai",
          caption:
            "Circuit de libération par fil chauffant : 1,15 A et 5,3 W, libérant en une moyenne de 4 s.",
        },
      ],
      outcome:
        "Toutes les exigences d’évaluation ont été vérifiées, ce qui situe le prototype autour du TRL 4. Les prochaines étapes seraient des matériaux de qualité spatiale, des essais en enceinte à vide thermique et une version réutilisable à base d’alliages à mémoire de forme.",
      outcomeLinks: [
        { label: "Voir la fiche technique", href: "/images/projects/hdrm/datasheet.png" },
      ],
    },
    "rocket-avionics": {
      shortTitle: "Avionique de fusée.",
      title: "Avionique du Sunspear, une fusée de compétition visant 9 000 m d’apogée",
      kind: "Supaero Space Section",
      role: "Ingénieure avionique",
      summary:
        "Ordinateur de bord, capteurs et télémesure pour le Sunspear, une fusée étudiante qui vise à devenir la première fusée supersonique construite par des étudiants en France, en vue de l’EuRoC 2026.",
      body: [
        "Au sein de la Supaero Space Section, le club spatial étudiant de l’ISAE-SUPAERO, je fais partie de l’équipe du Sunspear, une fusée de compétition qui vise à devenir la première fusée supersonique construite par des étudiants en France, dans la catégorie 9 000 m d’apogée de l’EuRoC 2026.",
        "En tant qu’ingénieure avionique, j’ai conçu et testé le sous-système avionique : une carte électronique maison à 4 couches construite autour d’un ordinateur de bord ESP32-S3, avec des domaines d’alimentation séparés pour la logique et pour les circuits pyrotechniques. Le logiciel de vol tourne sous FreeRTOS sous forme de machine à états — décollage, attente, propulsion, vol libre, parachute de freinage, parachute principal et atterrissage, plus un état d’abandon —, avec une altitude estimée par un filtre de Kalman combinant baromètre et centrale inertielle, des canaux pyrotechniques à détection de continuité, et une télémesure envoyée par une liaison LoRa à 868 MHz vers une station sol. J’ai piloté l’intégration matériel/logiciel, avec une attention particulière à la fiabilité sous les fortes accélérations du lancement, au sein d’une équipe de 33 personnes.",
      ],
      highlights: [
        "Carte électronique maison à 4 couches construite autour d’un ESP32-S3",
        "Machine à états de vol sous FreeRTOS, du décollage à l’atterrissage",
        "Estimation de l’altitude par un filtre de Kalman combinant baromètre et centrale inertielle",
        "Télémesure par une liaison LoRa à 868 MHz vers une station sol",
      ],
      resumeBullets: [
        "Conception et essais du sous-système avionique du Sunspear, une fusée de compétition visant 9 000 m d’apogée : une carte maison à 4 couches (ESP32-S3), un logiciel de vol sous FreeRTOS et une télémesure LoRa à 868 MHz.",
        "Pilotage de l’intégration matériel/logiciel et de la fiabilité sous les fortes accélérations du lancement, au sein d’une équipe de 33 personnes.",
      ],
      tags: [
        "Avionique",
        "Conception de cartes électroniques",
        "Systèmes embarqués",
        "Télémesure",
        "Intégration HW/SW",
      ],
      coverAlt:
        "Dessin au trait d’une fusée-sonde avec une vue de détail de son ordinateur de bord",
      stats: [
        { value: "9 000 m", label: "Apogée visé" },
        { value: "EuRoC 2026", label: "Compétition visée" },
        { value: "33", label: "Membres de l’équipe" },
        { value: "4 couches", label: "Carte maison de l’ordinateur de bord" },
      ],
      teamPhotoAlt: "Photo de groupe de l’équipe du Sunspear",
      teamCaption: "L’équipe du Sunspear.",
      outcome:
        "L’équipe prépare le Sunspear pour l’EuRoC 2026, avec l’objectif de devenir la première équipe étudiante française à faire voler une fusée supersonique.",
    },
    "cubesat-collision-avoidance": {
      shortTitle: "Évitement autonome de collision.",
      title: "Navigation GNSS économe et guidage MPC pour CubeSats en LEO",
      kind: "Student Aerospace Challenge",
      role: "Développement du système GNC (WP7)",
      summary:
        "Un système de navigation et de guidage qui maintient un CubeSat à l’écart des débris en orbite basse, en n’allumant le récepteur GNSS qu’en cas de besoin, pour économiser l’énergie.",
      body: [
        "L’orbite terrestre basse est de plus en plus encombrée, et les satellites doivent de plus en plus éviter les débris par eux-mêmes. Cela demande une bonne estimation de la position, mais faire fonctionner un récepteur GNSS en continu consomme une part importante du budget énergétique d’un CubeSat. Dans le cadre du Student Aerospace Challenge, j’ai travaillé sur le guidage, la navigation et le contrôle (GNC) d’une telle mission (lot de travail 7).",
        "J’ai développé un système de navigation intégré dans lequel un filtre de Kalman unscented (UKF) fusionne des mesures GNSS, prises seulement en cas de besoin, avec des capteurs auxiliaires, pendant qu’un superviseur décide quand allumer le récepteur. Par-dessus, j’ai construit un contrôleur prédictif (MPC) qui planifie les manœuvres d’évitement sur un horizon glissant et élargit la zone d’exclusion autour du débris à mesure que l’incertitude de navigation prévue augmente. J’ai validé toute la boucle sous MATLAB/Simulink face à des profils d’erreur GNSS réels de Sentinel-6A, au sein d’une équipe de six personnes.",
      ],
      highlights: [
        "Filtre de Kalman unscented fusionnant un GNSS à cycle d’utilisation réduit avec des capteurs auxiliaires",
        "Logique de supervision décidant quand le récepteur GNSS s’allume",
        "Commande prédictive élargissant la zone d’exclusion à mesure que l’incertitude augmente",
        "Validé face à des profils d’erreur GNSS réels de Sentinel-6A",
      ],
      resumeBullets: [
        "Développement de la navigation et du guidage pour l’évitement autonome de collision d’un CubeSat, arbitrant entre précision GNSS et efficacité énergétique.",
        "Réalisation de l’estimation d’état (filtre de Kalman unscented à GNSS économe) et du guidage (commande prédictive), validés sous MATLAB/Simulink face à des données GNSS réelles.",
      ],
      tags: [
        "GNC",
        "Filtrage de Kalman",
        "Commande prédictive",
        "MATLAB/Simulink",
        "Évitement de collision",
      ],
      coverAlt:
        "Dessin au trait d’un véhicule de service s’approchant d’un satellite en orbite terrestre basse",
      stats: [
        { value: "–69,8 %", label: "Énergie du récepteur GNSS économisée" },
        { value: "150 m", label: "Zone d’exclusion jamais violée" },
        { value: "~2 m/s", label: "Δv total pour l’évitement" },
      ],
      results: [
        {
          alt: "Schéma de l’architecture de navigation et de guidage intégrée",
          caption: "Architecture intégrée de navigation et de guidage.",
        },
        {
          alt: "Séparation entre le véhicule et le débris pendant la rencontre, avec le rayon de sécurité et la zone d’exclusion",
          caption:
            "Séparation sur une rencontre simulée de 6 743 s avec des données GNSS réelles de Sentinel-6A : le rayon de sécurité adaptatif maintient le débris hors de la zone d’exclusion de 150 m.",
        },
        {
          alt: "Effort de commande et Δv accumulé pendant la manœuvre d’évitement",
          caption:
            "Effort de commande et Δv accumulé pendant la manœuvre d’évitement : environ 2 m/s au total.",
        },
      ],
      outcome:
        "Nous avons présenté ce travail à la finale du Student Aerospace Challenge, à Paris.",
    },
    "plasma-magnetospheres": {
      shortTitle: "Magnétosphères des planètes géantes.",
      title:
        "Fuite de plasma à travers la frontière magnétosphérique de Jupiter (et, ensuite, Saturne)",
      kind: "Projet de recherche de MSc",
      summary:
        "Comment le plasma s’échappe-t-il de la magnétosphère de Jupiter ? Un projet de recherche fondé sur des données multi-instruments de Juno, qui s’étend maintenant à Saturne.",
      body: [
        "Jupiter est entourée de la plus grande magnétosphère du Système solaire, une région dominée par son propre champ magnétique et protégée du vent solaire. Sa lune volcanique Io y déverse des ions lourds comme l’oxygène et le soufre. Ce plasma s’échappe-t-il à travers la magnétopause vers la magnétogaine, et quand ?",
        "Je combine les données du magnétomètre de Juno (FGM) et de composition ionique (JADE-I) avec des catalogues de franchissements du choc et de la magnétopause. J’ai construit une chaîne de traitement qui propage le vent solaire jusqu’à Jupiter, détecte les événements de compression et les classe selon la position de Juno, validée face à un catalogue de franchissements publié. Des spectrogrammes en temps de vol montrent ensuite quels ions sont présents de chaque côté de la frontière.",
      ],
      highlights: [
        "Combinaison des données du magnétomètre (FGM) et de composition ionique (JADE-I) de Juno avec des catalogues de franchissements",
        "Chaîne de traitement construite et validée qui détecte et classe les événements de compression du vent solaire",
        "Analyse de composition en temps de vol à travers la magnétopause",
        "Événement candidat de fuite d’ions lourds identifié en octobre 2024",
      ],
      resumeBullets: [
        "Construction d’une chaîne de traitement sur données FGM et JADE-I de Juno qui catalogue et classe les événements de compression du vent solaire à Jupiter, validée face à un catalogue de franchissements publié.",
        "Identification d’un événement candidat de fuite d’ions lourds par analyse de composition en temps de vol ; présenté sous forme de poster à MOP 2026.",
      ],
      tags: [
        "Physique spatiale",
        "Magnétosphères",
        "Juno",
        "Analyse de signaux",
        "Visualisation de données",
      ],
      coverAlt:
        "Schéma de la magnétosphère d’une planète géante avec ses lignes de champ, l’onde de choc et la magnétopause",
      stats: [
        { value: "262", label: "Événements de compression catalogués" },
        { value: "32", label: "Classés haute priorité" },
        { value: "66,7 %", label: "Précision de détection" },
        { value: "MOP 2026", label: "Poster de conférence" },
      ],
      results: [
        {
          alt: "Observations multi-instruments de Juno pendant un événement de compression magnétosphérique",
          caption:
            "Observations multi-instruments de Juno pendant l’événement de compression du 28 juin 2017.",
        },
        {
          alt: "Carte des événements de compression prévus autour de Jupiter, par priorité",
          caption:
            "Événements de compression prévus autour de Jupiter, classés par priorité d’analyse.",
        },
        {
          alt: "Spectrogramme en temps de vol montrant des ions lourds dans la magnétogaine",
          caption:
            "Spectrogramme en temps de vol de l’événement d’octobre 2024 : des ions lourds sont visibles dans la magnétogaine, un indice de fuite.",
        },
      ],
      outcome:
        "Nous avons présenté ce travail sous forme de poster à MOP 2026 (Magnetospheres of the Outer Planets), à Toulouse, avec Fiona Martin, sous la supervision de Nicolas André (IRAP). Prochaines étapes : étendre l’analyse à l’instrument JEDI et, pour Saturne, aux données de Cassini.",
      outcomePhotoAlt:
        "Poster : Plasma leakage through the magnetospheric boundaries of Jupiter and Saturn, présenté à MOP 2026",
      outcomeCaption: "Poster présenté à MOP 2026, Toulouse.",
      outcomeLinks: [{ label: "Voir le poster", href: "/images/projects/plasma/poster.jpg" }],
    },
  },
};
