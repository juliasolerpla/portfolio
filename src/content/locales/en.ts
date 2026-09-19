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
      { value: "9,000 m", label: "Target apogee of the competition rocket I work on" },
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
    summary:
      "Dual-degree aerospace and telecommunications engineer, currently completing an MSc in Space Systems Engineering at ISAE-SUPAERO. Five years of combined undergraduate study and graduate research have given me a broad technical base across the full engineering lifecycle — from design and modelling to prototyping, testing and validation — along with the analytical rigour to tackle challenging problems. Methodical and genuinely passionate about space, with a proven ability to deliver in both professional and research settings.",
    download: "Download PDF",
    sections: {
      education: "Education",
      experience: "Experience",
      research: "Academic & research projects",
      extracurricular: "Extracurricular",
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
    highlights: "Highlights",
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
  projects: {
    "cubesat-hdrm": {
      shortTitle: "CubeSat Release Mechanism.",
      title: "3D-printed Hold-Down Release Mechanism for CubeSat missions",
      kind: "BSc Final Thesis",
      summary:
        "A 3D-printed mechanism that keeps a CubeSat’s solar panels and antennas stowed through launch, designed and validated under high-vibration conditions.",
      body: [
        "Deployable solar panels and antennas have to survive the violent vibrations of launch folded against the spacecraft, and then release reliably once in orbit. That is the job of a Hold-Down Release Mechanism (HDRM).",
        "For my bachelor’s thesis at UPC I designed and validated a 3D-printed HDRM for a CubeSat’s solar panels and antennas. The mechanism was tested under high-vibration launch conditions and checked against a requirements compliance matrix.",
      ],
      highlights: [
        "Design of a 3D-printed hold-down and release mechanism for solar panels and antennas",
        "Tests under high-vibration launch conditions",
        "Verification against a requirements compliance matrix",
        "Graded 10/10",
      ],
      resumeBullets: [
        "Designed and validated a 3D-printed Hold-Down Release Mechanism for a CubeSat’s solar panels and antennas, tested under high-vibration launch conditions against a compliance matrix.",
      ],
      tags: [
        "CubeSat",
        "Mechanisms",
        "Additive manufacturing",
        "Vibration testing",
        "Verification & validation",
      ],
      coverAlt: "Line drawing of a CubeSat with its solar panels deployed",
    },
    "rocket-avionics": {
      shortTitle: "Rocket Avionics.",
      title: "Avionics for a 9,000 m-apogee competition rocket",
      kind: "Supaero Space Section",
      role: "Avionics Engineer",
      summary:
        "Flight computer, sensors and telemetry for a student competition rocket designed to reach a 9,000 m apogee.",
      body: [
        "With the Supaero Space Section, the student space club at ISAE-SUPAERO, I’m part of the team building a competition rocket designed to reach an apogee of 9,000 m.",
        "As an avionics engineer I designed and tested the avionics subsystem — flight computer, sensors and telemetry — and managed its hardware/software integration, with a focus on reliability under high-g launch conditions.",
      ],
      highlights: [
        "Avionics subsystem design: flight computer, sensors and telemetry",
        "Hardware/software integration",
        "Reliability under high-g launch conditions",
        "Subsystem testing",
      ],
      resumeBullets: [
        "Designed and tested the avionics subsystem (flight computer, sensors, telemetry) for a 9,000 m-apogee competition rocket.",
        "Managed hardware/software integration and reliability under high-g launch conditions.",
      ],
      tags: ["Avionics", "Embedded systems", "Telemetry", "HW/SW integration", "Testing"],
      coverAlt: "Line drawing of a sounding rocket with a detail view of its flight computer",
    },
    "inoas-gnc": {
      shortTitle: "Rendezvous GNC.",
      title: "INOAS — navigation and control for orbital servicing in LEO",
      kind: "Student Aerospace Challenge",
      role: "GNC system development (WP7)",
      summary:
        "An integrated navigation system for orbital servicing in low Earth orbit, with UKF state estimation and MPC control for a safe rendezvous.",
      body: [
        "Orbital servicing — inspecting, repairing or refuelling satellites in orbit — requires a servicer to approach its target precisely and without any risk of collision. Within the Student Aerospace Challenge, I worked on the guidance, navigation and control (GNC) of such a mission (work package 7).",
        "I developed INOAS, an integrated navigation system that balances GNSS accuracy against energy efficiency. I built its state estimation with an Unscented Kalman Filter and its control with Model Predictive Control, for safety-critical rendezvous and collision avoidance, and validated them in MATLAB/Simulink.",
      ],
      highlights: [
        "Integrated navigation balancing GNSS accuracy against energy efficiency",
        "State estimation with an Unscented Kalman Filter (UKF)",
        "Model Predictive Control (MPC) for rendezvous and collision avoidance",
        "Validation in MATLAB/Simulink",
      ],
      resumeBullets: [
        "Developed INOAS, an integrated navigation system for LEO orbital servicing balancing GNSS accuracy against energy efficiency.",
        "Built the state estimation (Unscented Kalman Filter) and control (Model Predictive Control) for safety-critical rendezvous and collision avoidance, validated in MATLAB/Simulink.",
      ],
      tags: ["GNC", "Kalman filtering", "MPC", "MATLAB/Simulink", "Orbital servicing"],
      coverAlt: "Line drawing of a servicing spacecraft approaching a satellite in low Earth orbit",
    },
    "plasma-magnetospheres": {
      shortTitle: "Giant-Planet Magnetospheres.",
      title: "Plasma leakage through the magnetospheric boundaries of Jupiter and Saturn",
      kind: "MSc Research Project",
      summary:
        "How does plasma escape the magnetospheres of Jupiter and Saturn? A research project built on multi-instrument spacecraft data.",
      body: [
        "Jupiter and Saturn are wrapped in enormous magnetospheres: regions dominated by the planet’s own magnetic field and shielded from the solar wind. Their boundaries are not perfectly sealed, though — plasma leaks across them.",
        "In my MSc research project at ISAE-SUPAERO I study this plasma transport across the magnetospheric boundaries of both planets from multi-instrument spacecraft data, using signal analysis and data visualisation.",
      ],
      highlights: [
        "Analysis of multi-instrument spacecraft data",
        "Signal analysis and data visualisation",
        "Magnetospheric boundaries of both Jupiter and Saturn",
      ],
      resumeBullets: [
        "Studying plasma transport across Jupiter’s and Saturn’s magnetospheric boundaries from multi-instrument spacecraft data, using signal analysis and data visualisation.",
      ],
      tags: ["Space physics", "Magnetospheres", "Signal analysis", "Data visualisation"],
      coverAlt:
        "Diagram of a giant planet’s magnetosphere with its field lines, bow shock and magnetopause",
    },
  },
};
