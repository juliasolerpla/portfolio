import type { Dictionary } from "../types";

export const en: Dictionary = {
  meta: {
    title: "Júlia Soler — Aerospace Engineer",
    description:
      "Portfolio of Júlia Soler i Pla, aerospace and telecommunications engineer completing an MSc in Space Systems Engineering at ISAE-SUPAERO in Toulouse.",
    ogRole: "Aerospace Engineer.",
    ogTagline: "MSc Space Systems Engineering · ISAE-SUPAERO",
  },
  nav: {
    home: "Home",
    resume: "Resume",
    projects: "Projects",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    skipToContent: "Skip to content",
    main: "Main navigation",
  },
  hero: {
    greeting: "I’m Júlia Soler,",
    role: "an Aerospace Engineer.",
    intro:
      "Dual-degree aerospace and telecommunications engineer, currently completing an MSc in Space Systems Engineering at ISAE-SUPAERO in Toulouse.",
    outro:
      "Scroll down to see what I’ve been working on — from CubeSat mechanisms to rocket avionics.",
    photoAlt: "Portrait of Júlia Soler",
    insetAlt: "Júlia Soler at work",
    linkedin: "LinkedIn",
    projects: "Projects",
    resume: "Resume",
  },
  home: {
    projectsTitle: "Selected projects.",
    allProjects: "All projects",
    previous: "Previous project",
    next: "Next project",
    learnMore: "Learn more",
    glanceTitle: "At a glance.",
    stats: [
      { value: "3.9/4", label: "GPA in my MSc at ISAE-SUPAERO" },
      { value: "10/10", label: "Grade for my bachelor’s thesis" },
      { value: "1", label: "Publications & presentations" },
      { value: "4", label: "Languages: Catalan, Spanish, English and French" },
    ],
  },
  contact: {
    title: "Let’s talk.",
    text: "Want to talk about space systems, a project or an opportunity? The quickest way to reach me is by email.",
    email: "Email me",
    linkedin: "LinkedIn",
  },
  resume: {
    title: "Resume.",
    description:
      "Education, experience, projects and skills of Júlia Soler i Pla, aerospace and telecommunications engineer.",
    headline: "MSc Aerospace Engineering — ISAE-SUPAERO",
    photoAlt: "Photo of Júlia Soler",
    summary:
      "Dual-degree aerospace and telecommunications engineer, currently completing an MSc in Space Systems Engineering at ISAE-SUPAERO. Five years of combined undergraduate study and graduate research have given me a broad technical base across the full engineering lifecycle — from design and modelling to prototyping, testing and validation — along with the analytical rigour to tackle challenging problems. Methodical and genuinely passionate about space, with a proven ability to deliver in both professional and research settings.",
    download: "Download PDF",
    sections: {
      education: "Education",
      experience: "Experience",
      research: "Academic & research projects",
      extracurricular: "Extracurricular",
      publications: "Publications & presentations",
      languages: "Languages",
      skills: "Skills",
      interests: "Interests",
      contact: "Contact",
    },
    present: "Present",
    gpa: "GPA",
    grade: "Grade",
    native: "Native",
    viewProject: "View project",
  },
  projectsPage: {
    title: "Projects.",
    description:
      "Engineering and research projects by Júlia Soler: CubeSat mechanisms, rocket avionics, orbital GNC and giant-planet magnetospheres.",
    intro:
      "A selection of what I’ve designed, built and studied — for my degrees and with student teams.",
  },
  project: {
    back: "All projects",
    problem: "The problem",
    approach: "What I did",
    highlights: "Highlights",
    results: "Results",
    outcome: "Outcome",
    team: "Team",
    tools: "Tools & methods",
    role: "Role",
    framework: "Framework",
    period: "Period",
    location: "Location",
    result: "Result",
    previous: "Previous project",
    next: "Next project",
  },
  notFound: {
    title: "Out of orbit.",
    text: "The page you’re looking for doesn’t exist or has moved.",
    back: "Back to home",
  },
  places: {
    toulouse: "Toulouse, France",
    barcelona: "Barcelona, Spain",
    palafolls: "Palafolls, Spain",
  },
  education: {
    isae: {
      degree: "Master of Science in Aerospace Engineering",
      detail: "Specialised in Space Systems.",
    },
    upcAerospace: {
      degree: "Bachelor’s in Aerospace Engineering",
      detail:
        "Strong foundation in flight mechanics, systems engineering and aerospace structures.",
    },
    upcTelecom: {
      degree: "Bachelor’s in Telecommunications Engineering",
      detail: "Strong foundation in signal processing, RF design, antennas and electronics.",
    },
  },
  experience: {
    aimsun: {
      role: "QA Software Engineer",
      type: "Internship",
      bullets: [
        "Designed and ran functional, regression and integration test plans for Aimsun Next; logged and tracked defects in Jira.",
        "Strengthened CI pipelines, improving release stability and cutting time-to-detection of critical bugs.",
      ],
    },
    iziRecord: {
      role: "Multimedia Engineer",
      type: "Internship",
      bullets: [
        "Built a backend video-editing service integrated into production media-processing workflows.",
      ],
    },
    summerCamps: {
      role: "Summer Camp Instructor",
      period: "Summers 2018–2022",
      bullets: [
        "Organised and led educational and recreational activities for children and teenagers.",
      ],
    },
  },
  languages: {
    catalan: "Catalan",
    spanish: "Spanish",
    english: "English",
    french: "French",
  },
  skills: {
    design: "Mechanical & aero design",
    programming: "Programming",
    simulation: "Modelling & simulation",
    rf: "RF & electronics",
    tools: "Tools",
  },
  interests: [
    "Castellers (Catalan human towers)",
    "Sport — triathlon, climbing and diving (Open Water licence)",
    "Music — piano and saxophone",
    "Amateur astronomy",
  ],
  extracurricular: {
    upcOrchestra: {
      title: "UPC Orchestra",
      role: "Saxophonist",
      bullets: ["Saxophonist in the university orchestra."],
    },
  },
  publications: [
    {
      text: "F. Martin, J. Soler i Pla, N. André, “Plasma leakage through the magnetospheric boundaries of Jupiter and Saturn”, poster at MOP 2026 (Magnetospheres of the Outer Planets), Toulouse.",
      href: "/images/projects/plasma/poster.jpg",
    },
  ],
  projects: {
    "cubesat-hdrm": {
      shortTitle: "CubeSat Release Mechanism.",
      title: "3D-printed Hold-Down Release Mechanism for CubeSat missions",
      kind: "BSc Final Thesis",
      summary:
        "A 3D-printed, single-shot mechanism that holds a CubeSat’s solar panels closed through launch and releases them with a burn wire, load-tested to 40% above its design case.",
      body: [
        "Deployable solar panels and antennas have to stay folded against a CubeSat through the loads of launch, then release reliably, once, in orbit, without leaving any debris behind. That is the job of a Hold-Down Release Mechanism (HDRM). Commercial ones are expensive, so my thesis asked whether a low-cost, 3D-printed mechanism could do the same job.",
        "I designed a single-shot HDRM 3D-printed in PLA: two releasing arms are held closed by a nylon line, and a NiChrome wire melts through that line by the Joule effect to release them. I used SolidWorks FEA to compare two joint geometries and picked a 1 mm accordion joint for the best balance of flexibility and strength, then redesigned the arms with a retaining tooth and lateral guides so the retention link can’t move sideways. I 3D-printed, assembled and tested the prototype.",
      ],
      highlights: [
        "Single-shot HDRM 3D-printed in PLA, released by a NiChrome burn wire",
        "FEA-driven redesign: an accordion joint outperformed a simple circular one",
        "Held 140 N in traction, 40% above the 100 N design case, with no deformation",
        "Every requirement in the evaluation matrix verified — about TRL 4",
      ],
      resumeBullets: [
        "Designed and validated a 3D-printed, single-shot Hold-Down Release Mechanism for a CubeSat’s solar panels, load-tested to 140 N and released by a NiChrome burn wire in about 4 s; every requirement verified.",
      ],
      tags: ["CubeSat", "Mechanisms", "Additive manufacturing", "FEA", "Verification & validation"],
      coverAlt: "Line drawing of a CubeSat with its solar panels deployed",
      stats: [
        { value: "15 g", label: "Mechanism mass" },
        { value: "140 N", label: "Load held in traction testing" },
        { value: "4 s", label: "Average burn-wire release time" },
        { value: "10/10", label: "Thesis grade" },
      ],
      designCaption:
        "CAD model of the mechanism: closed for launch (left) and open after release (right).",
      results: [
        {
          alt: "The 3D-printed HDRM prototype, closed and held by its nylon line",
          caption: "The final prototype in its closed position, held by a nylon line.",
        },
        {
          alt: "FEA of the releasing arm showing stress, displacement and strain",
          caption:
            "FEA of the releasing arm — von Mises stress, displacement and strain — used to compare joint geometries.",
        },
        {
          alt: "Traction test with the mechanism suspended under a 140 N load",
          caption:
            "Traction test: the mechanism held 140 N, 40% above the 100 N design case, with no deformation.",
        },
        {
          alt: "Burn-wire release circuit under test",
          caption: "Burn-wire release circuit: 1.15 A, 5.3 W, releasing in an average of 4 s.",
        },
      ],
      outcome:
        "Every evaluation parameter was verified, which places the prototype at roughly TRL 4. Next steps would be space-grade materials, thermal-vacuum testing, and a reusable version based on shape-memory alloys.",
      outcomeLinks: [{ label: "View datasheet", href: "/images/projects/hdrm/datasheet.png" }],
    },
    "rocket-avionics": {
      shortTitle: "Rocket Avionics.",
      title: "Avionics for Sunspear, a 9,000 m-apogee competition rocket",
      kind: "Supaero Space Section",
      role: "Avionics Engineer",
      summary:
        "Flight computer, sensors and telemetry for Sunspear, a student rocket aiming to become France’s first student-built supersonic rocket, targeting EuRoC 2026.",
      body: [
        "With the Supaero Space Section, the student space club at ISAE-SUPAERO, I’m part of the Sunspear team building a competition rocket that aims to become France’s first student-built supersonic rocket, targeting the 9,000 m-apogee category at EuRoC 2026.",
        "As an avionics engineer, I designed and tested the avionics subsystem: a custom four-layer PCB built around an ESP32-S3 flight computer, with separate power domains for the logic and the pyrotechnic circuits. The flight software runs on FreeRTOS as a finite-state machine — startup, idle, boost, coast, drogue, main and landed, plus an abort state — with altitude estimated by a Kalman filter fusing barometer and IMU data, pyrotechnic channels with continuity sensing, and telemetry sent over an 868 MHz LoRa link to a ground station. I managed the hardware/software integration, with a focus on reliability under high-g launch conditions, within a 33-person student team.",
      ],
      highlights: [
        "Custom four-layer flight-computer PCB built around an ESP32-S3",
        "Flight software finite-state machine on FreeRTOS, from startup through landing",
        "Altitude estimation via a Kalman filter fusing barometer and IMU data",
        "Telemetry over an 868 MHz LoRa link to a ground station",
      ],
      resumeBullets: [
        "Designed and tested the avionics subsystem for Sunspear, a 9,000 m-apogee competition rocket: a custom four-layer PCB (ESP32-S3), FreeRTOS flight software and an 868 MHz LoRa telemetry link.",
        "Managed hardware/software integration and reliability under high-g launch conditions, within a 33-person student team.",
      ],
      tags: ["Avionics", "PCB design", "Embedded systems", "Telemetry", "HW/SW integration"],
      coverAlt: "Line drawing of a sounding rocket with a detail view of its flight computer",
      stats: [
        { value: "9,000 m", label: "Target apogee" },
        { value: "EuRoC 2026", label: "Target competition" },
        { value: "33", label: "Team members" },
        { value: "4-layer", label: "Custom flight-computer PCB" },
      ],
      teamPhotoAlt: "Group photo of the Sunspear team",
      teamCaption: "The Sunspear team.",
      outcome:
        "The team is preparing Sunspear for EuRoC 2026, aiming to become France’s first student team to fly a supersonic rocket.",
    },
    "cubesat-collision-avoidance": {
      shortTitle: "Autonomous Collision Avoidance.",
      title: "Power-aware GNSS navigation and MPC guidance for LEO CubeSats",
      kind: "Student Aerospace Challenge",
      role: "GNC system development (WP7)",
      summary:
        "A navigation and guidance system that keeps a CubeSat safely clear of debris in low Earth orbit while switching its GNSS receiver on only when needed, to save power.",
      body: [
        "Low Earth orbit is getting crowded, and satellites increasingly need to avoid debris on their own. That takes an accurate position estimate, but running a GNSS receiver continuously uses a large share of a CubeSat’s power budget. Within the Student Aerospace Challenge, I worked on the guidance, navigation and control (GNC) of such a mission (work package 7).",
        "I developed an integrated navigation system in which an Unscented Kalman Filter fuses GNSS readings, taken only when needed, with auxiliary sensors, while a supervisor decides when to switch the receiver on. On top of it, I built a Model Predictive Controller that plans avoidance manoeuvres over a rolling horizon and widens the keep-out zone around the debris as the predicted navigation uncertainty grows. I validated the full loop in MATLAB/Simulink against real GNSS error profiles from Sentinel-6A, as part of a six-person team.",
      ],
      highlights: [
        "Unscented Kalman Filter fusing duty-cycled GNSS with auxiliary sensors",
        "Supervisor logic deciding when the GNSS receiver switches on",
        "Model Predictive Control widening the keep-out zone as uncertainty grows",
        "Validated against real Sentinel-6A GNSS error profiles",
      ],
      resumeBullets: [
        "Developed the navigation and guidance for autonomous CubeSat collision avoidance, balancing GNSS accuracy against energy efficiency.",
        "Built the state estimation (duty-cycled Unscented Kalman Filter) and the guidance (Model Predictive Control), validated in MATLAB/Simulink against real GNSS data.",
      ],
      tags: [
        "GNC",
        "Kalman filtering",
        "Model Predictive Control",
        "MATLAB/Simulink",
        "Collision avoidance",
      ],
      coverAlt: "Line drawing of a servicing spacecraft approaching a satellite in low Earth orbit",
      stats: [
        { value: "–69.8%", label: "GNSS receiver energy saved" },
        { value: "150 m", label: "Keep-out zone never violated" },
        { value: "~2 m/s", label: "Total Δv for avoidance" },
      ],
      results: [
        {
          alt: "Diagram of the integrated navigation and guidance architecture",
          caption: "Integrated navigation and guidance architecture.",
        },
      ],
      outcomeFigures: [
        { alt: "Part of the project team standing in front of an aircraft", caption: "The team." },
        {
          alt: "Presenting the Unscented Kalman Filter block diagram on stage",
          caption: "Presenting our navigation filter at the Student Aerospace Challenge final.",
        },
      ],
      outcome: "We presented this work at the Student Aerospace Challenge final in Paris.",
    },
    "plasma-magnetospheres": {
      shortTitle: "Giant-Planet Magnetospheres.",
      title: "Plasma leakage through the magnetospheric boundaries of Jupiter (and, next, Saturn)",
      kind: "MSc Research Project",
      summary:
        "How does plasma escape Jupiter’s magnetosphere? A research project built on multi-instrument Juno data, extending next to Saturn.",
      body: [
        "Jupiter is wrapped in the largest magnetosphere in the Solar System, a region dominated by its own magnetic field and shielded from the solar wind. Its volcanic moon Io fills it with heavy ions such as oxygen and sulphur. Does this plasma leak out across the magnetopause into the magnetosheath, and when?",
        "I combine Juno magnetometer (FGM) data and JADE-I ion composition data with catalogues of bow-shock and magnetopause crossings. I built a pipeline that propagates the solar wind out to Jupiter, detects compression events and ranks them by where Juno was, validated against a published crossing catalogue. Time-of-flight spectrograms then show which ions are present on each side of the boundary.",
      ],
      highlights: [
        "Combined Juno magnetometer (FGM) and ion composition (JADE-I) data with boundary-crossing catalogues",
        "Built and validated a pipeline that detects and ranks solar-wind compression events",
        "Time-of-flight composition analysis across the magnetopause",
        "Identified a candidate heavy-ion leakage event in October 2024",
      ],
      resumeBullets: [
        "Built a pipeline on Juno FGM and JADE-I data that catalogues and ranks solar-wind compression events at Jupiter, validated against a published crossing catalogue.",
        "Identified a candidate heavy-ion leakage event using time-of-flight composition analysis; presented as a poster at MOP 2026.",
      ],
      tags: ["Space physics", "Magnetospheres", "Juno", "Signal analysis", "Data visualisation"],
      coverAlt:
        "Diagram of a giant planet’s magnetosphere with its field lines, bow shock and magnetopause",
      stats: [
        { value: "262", label: "Compression events catalogued" },
        { value: "32", label: "Ranked high-priority" },
        { value: "66.7%", label: "Detection precision" },
        { value: "MOP 2026", label: "Conference poster" },
      ],
      results: [
        {
          alt: "Juno multi-instrument observations during a magnetospheric compression event",
          caption: "Juno multi-instrument observations during the 28 June 2017 compression event.",
        },
        {
          alt: "Map of predicted compression events around Jupiter, colour-coded by priority",
          caption:
            "Predicted compression events around Jupiter, ranked by priority for follow-up analysis.",
        },
        {
          alt: "Time-of-flight spectrogram showing heavy ions in the magnetosheath",
          caption:
            "Time-of-flight spectrogram of the October 2024 event: heavy ions are visible in the magnetosheath, a candidate leakage signature.",
        },
      ],
      outcome:
        "We presented this work as a poster at MOP 2026 (Magnetospheres of the Outer Planets), in Toulouse, with Fiona Martin, supervised by Nicolas André (IRAP). Next steps: extend the analysis to the JEDI instrument, and to Saturn with Cassini data.",
      outcomeFigures: [
        {
          alt: "Two people standing beside the poster at MOP 2026",
          caption: "With Fiona Martin at MOP 2026, Toulouse.",
        },
        {
          alt: "Poster: Plasma leakage through the magnetospheric boundaries of Jupiter and Saturn, presented at MOP 2026",
          caption: "Poster presented at MOP 2026, Toulouse.",
        },
      ],
      outcomeLinks: [{ label: "View poster", href: "/images/projects/plasma/poster.jpg" }],
    },
  },
};
