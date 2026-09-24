/**
 * Facts that are the same in every language: contact details, dates, grades, tools…
 * The texts (titles, descriptions, bullet points) live in `./locales/<language>.ts`.
 */
import type {
  EducationEntry,
  ExtracurricularEntry,
  ExperienceEntry,
  LanguageEntry,
  ProjectEntry,
  SkillGroup,
} from "./types";

export const profile: {
  name: string;
  shortName: string;
  email: string;
  linkedin: string;
  /** Portrait on the home page, e.g. `"/images/julia.jpg"` (file in `public/images/`). `null` shows an illustration. */
  photo: string | null;
  /** Smaller photo overlapping the portrait on the home page. `null` shows a placeholder. */
  photoInset: string | null;
  /** Photo next to the summary on the resume page. `null` shows a placeholder. */
  photoResume: string | null;
  /** PDF offered on the resume page, e.g. `"/julia-soler-cv.pdf"` (file in `public/`). `null` hides the button. */
  resumePdf: string | null;
} = {
  name: "Júlia Soler i Pla",
  shortName: "Júlia Soler",
  email: "juliasolerpla@gmail.com",
  linkedin: "https://www.linkedin.com/in/j%C3%BAlia-soler-b9543a266/",
  photo: null,
  photoInset: "/images/julia.jpg",
  photoResume: "/images/julia.jpg",
  resumePdf: null,
};

export const education: EducationEntry[] = [
  {
    id: "isae",
    school: "ISAE-SUPAERO",
    place: "toulouse",
    start: "2025-09",
    end: "2027-03",
    gpa: 3.9,
  },
  {
    id: "upcAerospace",
    school: "Universitat Politècnica de Catalunya",
    place: "barcelona",
    start: "2020-09",
    end: "2025-06",
    gpa: 2.82,
  },
  {
    id: "upcTelecom",
    school: "Universitat Politècnica de Catalunya",
    place: "barcelona",
    start: "2020-09",
    end: "2025-06",
    gpa: 2.94,
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "aimsun",
    org: "Aimsun",
    place: "barcelona",
    start: "2024-06",
    end: "2025-07",
    tools: ["Python", "Jira", "GitLab", "Linux"],
  },
  {
    id: "iziRecord",
    org: "La Rumba de Barcelona S.L. · IZI Record",
    place: "barcelona",
    start: "2023-06",
    end: "2023-09",
    tools: [],
  },
  {
    id: "summerCamps",
    org: "ANNCON & Xatrac",
    place: "palafolls",
    start: "2018-06",
    end: "2022-08",
    tools: [],
  },
];

export const extracurricular: ExtracurricularEntry[] = [
  { id: "upcOrchestra", place: "barcelona", start: "2020-09", end: "2025-06" },
];

/** Shown in this order on the home page and the projects page. */
export const projects: ProjectEntry[] = [
  {
    slug: "cubesat-hdrm",
    category: "research",
    org: "Universitat Politècnica de Catalunya",
    place: "barcelona",
    start: "2025-01",
    end: "2025-07",
    grade: "10/10",
    illustration: "cubesat",
    designImages: [
      "/images/projects/hdrm/design-closed.png",
      "/images/projects/hdrm/design-open.png",
    ],
    resultImages: [
      "/images/projects/hdrm/hero.jpg",
      "/images/projects/hdrm/fea.png",
      "/images/projects/hdrm/traction-test.jpg",
      "/images/projects/hdrm/burn-wire-test.jpg",
    ],
  },
  {
    slug: "rocket-avionics",
    category: "extracurricular",
    org: "Supaero Space Section",
    place: "toulouse",
    start: "2025-09",
    end: null,
    illustration: "rocket",
  },
  {
    slug: "cubesat-collision-avoidance",
    category: "extracurricular",
    org: "Student Aerospace Challenge",
    place: null,
    start: "2025-11",
    end: "2026-06",
    illustration: "rendezvous",
    wideResults: [0],
    resultImages: [
      "/images/projects/collision-avoidance/hero.png",
      "/images/projects/collision-avoidance/separation.png",
      "/images/projects/collision-avoidance/delta-v.png",
    ],
  },
  {
    slug: "plasma-magnetospheres",
    category: "research",
    org: "ISAE-SUPAERO",
    place: "toulouse",
    start: "2026-03",
    end: null,
    illustration: "magnetosphere",
    wideResults: [0],
    resultImages: [
      "/images/projects/plasma/hero.png",
      "/images/projects/plasma/compression-events.png",
      "/images/projects/plasma/spectrogram.png",
    ],
    outcomePhoto: "/images/projects/plasma/poster.jpg",
  },
];

export const languages: LanguageEntry[] = [
  { id: "catalan", level: "native" },
  { id: "spanish", level: "native" },
  { id: "english", level: "C1", certificate: "Cambridge CAE" },
  { id: "french", level: "B1" },
];

export const skills: SkillGroup[] = [
  { id: "design", items: ["SolidWorks", "XFLR5"] },
  { id: "programming", items: ["Python", "C", "C#", "Java", "VHDL"] },
  { id: "simulation", items: ["MATLAB", "Simulink"] },
  { id: "rf", items: ["Proteus", "ADS", "4nec2", "ViStumbler"] },
  { id: "tools", items: ["GitHub", "GitLab", "Jira", "LaTeX", "Microsoft Office"] },
];
