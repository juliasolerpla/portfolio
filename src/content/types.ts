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
  "cubesat-hdrm" | "rocket-avionics" | "cubesat-collision-avoidance" | "plasma-magnetospheres";
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
  /** Hero photo in `public/`, e.g. `"/images/projects/hdrm/hero.jpg"`. Without it the illustration is shown. */
  image?: string;
  /** A "before / after" or "closed / open" pair shown side by side under "What I did". */
  designImages?: readonly [string, string];
  /** Figures for the Results section, in order; each needs a matching entry in `ProjectCopy.results`. */
  resultImages?: readonly string[];
  /** Indexes of `resultImages` shown across both columns (wide diagrams, time series). */
  wideResults?: readonly number[];
  /** Photo for the Outcome block (e.g. a poster, or a photo at an event). */
  outcomePhoto?: string;
  /** Team or event photo, shown near the end of the page. */
  teamPhoto?: string;
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
  /** Two paragraphs: `[0]` is "The problem", the rest is "What I did". */
  body: string[];
  highlights: string[];
  /** Bullet points as they appear on the resume. */
  resumeBullets: string[];
  tags: string[];
  /** Alt text of the cover illustration or hero photo. */
  coverAlt: string;
  /** A short row of 3–4 headline figures, shown right under the hero image. */
  stats: { value: string; label: string }[];
  /** Caption under `ProjectEntry.designImages`, when set. */
  designCaption?: string;
  /** One entry per `ProjectEntry.resultImages`, in the same order. */
  results?: { alt: string; caption: string }[];
  /** What came of the work: grade, competition, conference, paper… */
  outcome: string;
  outcomePhotoAlt?: string;
  outcomeCaption?: string;
  outcomeLinks?: { label: string; href: string }[];
  teamPhotoAlt?: string;
  teamCaption?: string;
};

export type PublicationEntry = {
  text: string;
  href?: string;
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
    /** Alt text of the second photo, the one overlapping the portrait. */
    insetAlt: string;
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
    /** Alt text of the photo next to the summary. */
    photoAlt: string;
    download: string;
    sections: {
      education: string;
      experience: string;
      research: string;
      extracurricular: string;
      publications: string;
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
    problem: string;
    approach: string;
    highlights: string;
    results: string;
    outcome: string;
    team: string;
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
  publications: PublicationEntry[];
  projects: Record<ProjectSlug, ProjectCopy>;
};
