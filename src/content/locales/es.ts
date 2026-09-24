import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "Júlia Soler — Ingeniera aeroespacial",
    description:
      "Portfolio de Júlia Soler i Pla, ingeniera aeroespacial y de telecomunicaciones que cursa un máster en Ingeniería de Sistemas Espaciales en el ISAE-SUPAERO de Toulouse.",
    ogRole: "Ingeniera aeroespacial.",
    ogTagline: "Máster en Ingeniería de Sistemas Espaciales · ISAE-SUPAERO",
  },
  nav: {
    home: "Inicio",
    resume: "Currículum",
    projects: "Proyectos",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
    main: "Navegación principal",
  },
  hero: {
    greeting: "Soy Júlia Soler,",
    role: "ingeniera aeroespacial.",
    intro:
      "Tengo una doble titulación en ingeniería aeroespacial y de telecomunicaciones, y ahora estoy terminando un máster en Ingeniería de Sistemas Espaciales en el ISAE-SUPAERO, en Toulouse.",
    outro:
      "Baja para ver en qué he estado trabajando: desde mecanismos para CubeSats hasta la aviónica de un cohete.",
    photoAlt: "Retrato de Júlia Soler",
    insetAlt: "Júlia Soler trabajando",
    linkedin: "LinkedIn",
    projects: "Proyectos",
    resume: "Currículum",
  },
  home: {
    projectsTitle: "Proyectos destacados.",
    allProjects: "Todos los proyectos",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
    learnMore: "Saber más",
    glanceTitle: "De un vistazo.",
    stats: [
      { value: "3,9/4", label: "Nota media (GPA) en el máster del ISAE-SUPAERO" },
      { value: "10/10", label: "Calificación de mi trabajo de fin de grado" },
      { value: "9.000 m", label: "Apogeo objetivo del cohete de competición en el que trabajo" },
      { value: "4", label: "Idiomas: catalán, castellano, inglés y francés" },
    ],
  },
  contact: {
    title: "Hablemos.",
    text: "¿Quieres hablar de sistemas espaciales, de un proyecto o de una oportunidad? La forma más rápida de contactar conmigo es por correo electrónico.",
    email: "Escríbeme",
    linkedin: "LinkedIn",
  },
  resume: {
    title: "Currículum.",
    description:
      "Formación, experiencia, proyectos y competencias de Júlia Soler i Pla, ingeniera aeroespacial y de telecomunicaciones.",
    headline: "Máster en Ingeniería Aeroespacial — ISAE-SUPAERO",
    photoAlt: "Foto de Júlia Soler",
    summary:
      "Ingeniera aeroespacial y de telecomunicaciones con doble titulación, actualmente cursando un máster en Ingeniería de Sistemas Espaciales en el ISAE-SUPAERO. Cinco años de formación universitaria y de investigación de posgrado me han dado una base técnica amplia que abarca todo el ciclo de vida de la ingeniería —del diseño y la modelización al prototipado, los ensayos y la validación—, junto con el rigor analítico para abordar problemas complejos. Metódica y con una pasión genuina por el espacio, con una capacidad demostrada para cumplir objetivos tanto en entornos profesionales como de investigación.",
    download: "Descargar el PDF",
    sections: {
      education: "Formación",
      experience: "Experiencia",
      research: "Proyectos académicos y de investigación",
      extracurricular: "Actividades extracurriculares",
      languages: "Idiomas",
      skills: "Competencias",
      interests: "Intereses",
      contact: "Contacto",
    },
    present: "actualidad",
    gpa: "GPA",
    grade: "Calificación",
    native: "Lengua materna",
    viewProject: "Ver el proyecto",
  },
  projectsPage: {
    title: "Proyectos.",
    description:
      "Proyectos de ingeniería e investigación de Júlia Soler: mecanismos para CubeSats, aviónica de cohetes, GNC orbital y magnetosferas de planetas gigantes.",
    intro:
      "Una selección de lo que he diseñado, construido y estudiado, tanto en la universidad como en equipos de estudiantes.",
  },
  project: {
    back: "Todos los proyectos",
    highlights: "Puntos clave",
    tools: "Herramientas y métodos",
    role: "Rol",
    framework: "Marco",
    period: "Periodo",
    location: "Lugar",
    result: "Resultado",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
  },
  notFound: {
    title: "Fuera de órbita.",
    text: "La página que buscas no existe o se ha movido.",
    back: "Volver al inicio",
  },
  places: {
    toulouse: "Toulouse, Francia",
    barcelona: "Barcelona",
    palafolls: "Palafolls",
  },
  education: {
    isae: {
      degree: "Máster en Ingeniería Aeroespacial (MSc)",
      detail: "Especialización en sistemas espaciales.",
    },
    upcAerospace: {
      degree: "Grado en Ingeniería Aeroespacial",
      detail:
        "Base sólida en mecánica de vuelo, ingeniería de sistemas y estructuras aeroespaciales.",
    },
    upcTelecom: {
      degree: "Grado en Ingeniería de Telecomunicación",
      detail: "Base sólida en procesado de señal, diseño de RF, antenas y electrónica.",
    },
  },
  experience: {
    aimsun: {
      role: "Ingeniera de QA de software",
      type: "Prácticas",
      bullets: [
        "Diseño y ejecución de planes de pruebas funcionales, de regresión y de integración para Aimsun Next; registro y seguimiento de defectos en Jira.",
        "Mejora de los pipelines de integración continua (CI), con versiones más estables y una detección más rápida de los errores críticos.",
      ],
    },
    iziRecord: {
      role: "Ingeniera multimedia",
      type: "Prácticas",
      bullets: [
        "Desarrollo de un servicio backend de edición de vídeo integrado en flujos de trabajo de procesamiento multimedia en producción.",
      ],
    },
    summerCamps: {
      role: "Monitora de campamentos de verano",
      period: "Veranos 2018–2022",
      bullets: [
        "Organización y dirección de actividades educativas y de ocio para niños y adolescentes.",
      ],
    },
  },
  languages: {
    catalan: "Catalán",
    spanish: "Castellano",
    english: "Inglés",
    french: "Francés",
  },
  skills: {
    design: "Diseño mecánico y aerodinámico",
    programming: "Programación",
    simulation: "Modelización y simulación",
    rf: "RF y electrónica",
    tools: "Herramientas",
  },
  interests: [
    "Castells (torres humanas catalanas)",
    "Deporte: triatlón, escalada y buceo (licencia Open Water)",
    "Música: piano y saxofón",
    "Astronomía amateur",
  ],
  projects: {
    "cubesat-hdrm": {
      shortTitle: "Mecanismo de liberación para CubeSat.",
      title: "Mecanismo de retención y liberación (HDRM) impreso en 3D para misiones CubeSat",
      kind: "Trabajo de fin de grado",
      summary:
        "Un mecanismo impreso en 3D que mantiene plegados los paneles solares y las antenas de un CubeSat durante el lanzamiento, diseñado y validado en condiciones de vibración elevada.",
      body: [
        "Los paneles solares y las antenas desplegables deben soportar plegados las fuertes vibraciones del lanzamiento y, una vez en órbita, liberarse de forma fiable. Esa es la función de un mecanismo de retención y liberación (Hold-Down Release Mechanism, HDRM).",
        "En mi trabajo de fin de grado en la UPC diseñé y validé un HDRM impreso en 3D para los paneles solares y las antenas de un CubeSat. El mecanismo se ensayó en condiciones de vibración elevada propias del lanzamiento y se verificó con una matriz de cumplimiento de requisitos.",
      ],
      highlights: [
        "Diseño de un mecanismo de retención y liberación impreso en 3D para paneles solares y antenas",
        "Ensayos en condiciones de vibración elevada propias del lanzamiento",
        "Verificación con una matriz de cumplimiento de requisitos",
        "Calificación: 10/10",
      ],
      resumeBullets: [
        "Diseño y validación de un mecanismo de retención y liberación (HDRM) impreso en 3D para los paneles solares y las antenas de un CubeSat, ensayado en condiciones de vibración elevada de lanzamiento según una matriz de cumplimiento.",
      ],
      tags: [
        "CubeSat",
        "Mecanismos",
        "Fabricación aditiva",
        "Ensayos de vibración",
        "Verificación y validación",
      ],
      coverAlt: "Dibujo lineal de un CubeSat con los paneles solares desplegados",
    },
    "rocket-avionics": {
      shortTitle: "Aviónica de cohete.",
      title: "Aviónica para un cohete de competición con un apogeo de 9.000 m",
      kind: "Supaero Space Section",
      role: "Ingeniera de aviónica",
      summary:
        "Ordenador de vuelo, sensores y telemetría para un cohete de competición de estudiantes diseñado para alcanzar 9.000 m de apogeo.",
      body: [
        "Con la Supaero Space Section, el club espacial de estudiantes del ISAE-SUPAERO, formo parte del equipo que construye un cohete de competición diseñado para alcanzar un apogeo de 9.000 m.",
        "Como ingeniera de aviónica, diseñé y probé el subsistema de aviónica (ordenador de vuelo, sensores y telemetría) y gestioné su integración hardware/software, con especial atención a la fiabilidad bajo las fuertes aceleraciones del lanzamiento.",
      ],
      highlights: [
        "Diseño del subsistema de aviónica: ordenador de vuelo, sensores y telemetría",
        "Integración hardware/software",
        "Fiabilidad bajo las altas aceleraciones del lanzamiento",
        "Pruebas del subsistema",
      ],
      resumeBullets: [
        "Diseño y pruebas del subsistema de aviónica (ordenador de vuelo, sensores, telemetría) de un cohete de competición con un apogeo de 9.000 m.",
        "Gestión de la integración hardware/software y de la fiabilidad bajo las altas aceleraciones del lanzamiento.",
      ],
      tags: ["Aviónica", "Sistemas embebidos", "Telemetría", "Integración HW/SW", "Pruebas"],
      coverAlt:
        "Dibujo lineal de un cohete sonda con una vista de detalle de su ordenador de vuelo",
    },
    "inoas-gnc": {
      shortTitle: "GNC para encuentro orbital.",
      title: "INOAS: navegación y control para el servicio en órbita en LEO",
      kind: "Student Aerospace Challenge",
      role: "Desarrollo del sistema GNC (WP7)",
      summary:
        "Un sistema de navegación integrado para el servicio en órbita terrestre baja, con estimación de estado mediante un UKF y control MPC para un encuentro orbital seguro.",
      body: [
        "El servicio en órbita (inspeccionar, reparar o repostar satélites en el espacio) exige que una nave se aproxime a su objetivo con precisión y sin ningún riesgo de colisión. En el marco del Student Aerospace Challenge trabajé en el guiado, la navegación y el control (GNC) de una misión de este tipo (paquete de trabajo 7).",
        "Desarrollé INOAS, un sistema de navegación integrado que equilibra la precisión del GNSS y la eficiencia energética. Implementé su estimación de estado con un filtro de Kalman unscented (UKF) y su control con control predictivo basado en modelo (MPC), para maniobras críticas de encuentro y de evitación de colisiones, y los validé en MATLAB/Simulink.",
      ],
      highlights: [
        "Navegación integrada que equilibra la precisión del GNSS y la eficiencia energética",
        "Estimación de estado con un filtro de Kalman unscented (UKF)",
        "Control predictivo basado en modelo (MPC) para el encuentro y la evitación de colisiones",
        "Validación en MATLAB/Simulink",
      ],
      resumeBullets: [
        "Desarrollo de INOAS, un sistema de navegación integrado para el servicio en órbita en LEO que equilibra la precisión del GNSS y la eficiencia energética.",
        "Implementación de la estimación de estado (filtro de Kalman unscented) y del control (control predictivo basado en modelo) para maniobras críticas de encuentro y de evitación de colisiones, validadas en MATLAB/Simulink.",
      ],
      tags: ["GNC", "Filtrado de Kalman", "MPC", "MATLAB/Simulink", "Servicio en órbita"],
      coverAlt:
        "Dibujo lineal de una nave de servicio que se aproxima a un satélite en órbita terrestre baja",
    },
    "plasma-magnetospheres": {
      shortTitle: "Magnetosferas de planetas gigantes.",
      title: "Fuga de plasma a través de las fronteras magnetosféricas de Júpiter y Saturno",
      kind: "Proyecto de investigación de máster",
      summary:
        "¿Cómo escapa el plasma de las magnetosferas de Júpiter y Saturno? Un proyecto de investigación basado en datos multiinstrumento de sondas espaciales.",
      body: [
        "Júpiter y Saturno están envueltos en magnetosferas enormes: regiones dominadas por el propio campo magnético del planeta y protegidas del viento solar. Sus fronteras, sin embargo, no son del todo estancas: parte del plasma las atraviesa.",
        "En mi proyecto de investigación de máster en el ISAE-SUPAERO estudio este transporte de plasma a través de las fronteras magnetosféricas de ambos planetas a partir de datos multiinstrumento de sondas espaciales, mediante análisis de señales y visualización de datos.",
      ],
      highlights: [
        "Análisis de datos multiinstrumento de sondas espaciales",
        "Análisis de señales y visualización de datos",
        "Fronteras magnetosféricas de Júpiter y de Saturno",
      ],
      resumeBullets: [
        "Estudio del transporte de plasma a través de las fronteras magnetosféricas de Júpiter y Saturno a partir de datos multiinstrumento de sondas espaciales, mediante análisis de señales y visualización de datos.",
      ],
      tags: ["Física espacial", "Magnetosferas", "Análisis de señales", "Visualización de datos"],
      coverAlt:
        "Esquema de la magnetosfera de un planeta gigante con sus líneas de campo, el choque de proa y la magnetopausa",
    },
  },
};
