/**
 * Shape of the site content. The ids below tie the language-independent facts in `profile.ts`
 * to the translated texts in `locales/*.ts`: adding an id here makes TypeScript ask for its
 * texts in all four languages.
 */

export type PlaceId = "toulouse" | "barcelona" | "palafolls";
export type EducationId = "isae" | "upcAerospace" | "upcTelecom";
export type ExperienceId = "aimsun" | "iziRecord" | "summerCamps";
export type LanguageId = "catalan" | "spanish" | "english" | "french";
export type SkillGroupId = "design" | "programming" | "simulation" | "rf" | "tools";
export type ProjectSlug =
  "cubesat-hdrm" | "rocket-avionics" | "inoas-gnc" | "plasma-magnetospheres";
export type IllustrationId = "cubesat" | "rocket" | "rendezvous" | "magnetosphere";

/** Dates are `"YYYY-MM"`; `end: null` means "ongoing". */
type Period = { start: string; end: string | null };

export type EducationEntry = Period & {
  id: EducationId;
  school: string;
  place: PlaceId;
  gpa: number;
};

export type ExperienceEntry = Period & {
  id: ExperienceId;
  org: string;
  place: PlaceId;
  tools: string[];
};

export type ProjectEntry = Period & {
  slug: ProjectSlug;
  /** Which resume section the project is listed in. */
  category: "research" | "extracurricular";
  org: string;
  place: PlaceId | null;
  grade?: string;
  illustration: IllustrationId;
  /** Photo in `public/`, e.g. `"/images/projects/cubesat-hdrm.jpg"`. Without it the illustration is shown. */
  image?: string;
};

export type LanguageEntry = {
  id: LanguageId;
  /** CEFR level, or "native". */
  level: "native" | "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  certificate?: string;
};

export type SkillGroup = { id: SkillGroupId; items: string[] };

export type ProjectCopy = {
  /** Card and page heading. Ends with a full stop, like every heading on the site. */
  shortTitle: string;
  /** Full, descriptive title (resume entry and page subtitle). */
  title: string;
  /** E.g. "BSc Final Thesis" or the name of the student team. */
  kind: string;
  role?: string;
  /** One or two sentences: cards, page lead and meta description. */
  summary: string;
  body: string[];
  highlights: string[];
  /** Bullet points as they appear on the resume. */
  resumeBullets: string[];
  tags: string[];
  /** Alt text of the cover illustration. */
  coverAlt: string;
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    /** Second line of the social preview image. */
    ogRole: string;
    ogTagline: string;
  };
  nav: {
    home: string;
    resume: string;
    projects: string;
    openMenu: string;
    closeMenu: string;
    language: string;
    skipToContent: string;
    main: string;
  };
  hero: {
    greeting: string;
    role: string;
    intro: string;
    outro: string;
    photoAlt: string;
    linkedin: string;
    projects: string;
    resume: string;
  };
  home: {
    projectsTitle: string;
    allProjects: string;
    previous: string;
    next: string;
    learnMore: string;
    glanceTitle: string;
    stats: { value: string; label: string }[];
  };
  contact: {
    title: string;
    text: string;
    email: string;
    linkedin: string;
  };
  resume: {
    title: string;
    description: string;
    headline: string;
    summary: string;
    download: string;
    sections: {
      education: string;
      experience: string;
      research: string;
      extracurricular: string;
      languages: string;
      skills: string;
      interests: string;
      contact: string;
    };
    present: string;
    gpa: string;
    grade: string;
    native: string;
    viewProject: string;
  };
  projectsPage: {
    title: string;
    description: string;
    intro: string;
  };
  project: {
    back: string;
    highlights: string;
    tools: string;
    role: string;
    framework: string;
    period: string;
    location: string;
    result: string;
    previous: string;
    next: string;
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  places: Record<PlaceId, string>;
  education: Record<EducationId, { degree: string; detail: string }>;
  experience: Record<
    ExperienceId,
    {
      role: string;
      /** E.g. "Internship". */
      type?: string;
      /** Replaces the formatted dates, e.g. "Summers 2018–2022". */
      period?: string;
      bullets: string[];
    }
  >;
  languages: Record<LanguageId, string>;
  skills: Record<SkillGroupId, string>;
  interests: string[];
  projects: Record<ProjectSlug, ProjectCopy>;
};
