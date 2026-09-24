import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { ArrowIcon, DownloadIcon, LinkedInIcon, MailIcon, MapPinIcon } from "~/components/icons";
import { LeafButton } from "~/components/leaf-button";
import { PhotoFrame } from "~/components/photo-frame";
import {
  byStartDesc,
  education,
  experience,
  getDictionary,
  languages,
  profile,
  projects,
  skills,
  type LanguageEntry,
} from "~/content";
import { isLocale } from "~/i18n/config";
import { formatDecimal, formatPeriod } from "~/i18n/format";
import { localePath } from "~/i18n/routing";
import { pageMetadata, withoutFullStop } from "~/lib/metadata";
import { riseDelay } from "~/lib/reveal";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/resume">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { resume } = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/resume",
    title: withoutFullStop(resume.title),
    description: resume.description,
  });
}

export default async function ResumePage({ params }: PageProps<"/[locale]/resume">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const r = dict.resume;
  const period = (entry: { start: string; end: string | null }) =>
    formatPeriod(locale, entry.start, entry.end, r.present);

  const projectEntries = (category: "research" | "extracurricular") =>
    byStartDesc(projects.filter((project) => project.category === category)).map((project) => {
      const copy = dict.projects[project.slug];
      return (
        <Entry
          key={project.slug}
          title={copy.kind}
          subtitle={category === "research" ? copy.title : copy.role}
          place={project.place ? dict.places[project.place] : undefined}
          period={period(project)}
        >
          <Bullets items={copy.resumeBullets} />
          {project.grade && <Chips items={[`${r.grade}: ${project.grade}`]} strong />}
          <Link
            href={localePath(locale, `/projects/${project.slug}`)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline"
          >
            {r.viewProject}
            <ArrowIcon className="size-4" />
          </Link>
        </Entry>
      );
    });

  return (
    <div className="container-page pt-8 pb-24 md:pt-14 md:pb-32">
      <header className="flex flex-wrap items-end justify-between gap-6 border-b-2 border-ink pb-6">
        <h1 className="animate-rise text-5xl font-bold tracking-[-0.02em] md:text-7xl">
          {r.title}
        </h1>
        {profile.resumePdf && (
          <LeafButton href={profile.resumePdf} download>
            <DownloadIcon className="size-4" />
            {r.download}
          </LeafButton>
        )}
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
        <div className="animate-rise" style={riseDelay(100)}>
          <p className="text-2xl font-bold md:text-3xl">{profile.name}</p>
          <p className="mt-2 text-lg font-semibold text-navy">{r.headline}</p>
          <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink/85">{r.summary}</p>
        </div>
        <PhotoFrame
          photo={profile.photoResume}
          alt={r.photoAlt}
          sizes="(min-width: 1024px) 19rem, (min-width: 640px) 18rem, 100vw"
          className="mx-auto aspect-[4/5] w-full max-w-[18rem] animate-rise rounded-[1.5rem] lg:mx-0 lg:max-w-none"
          style={riseDelay(200)}
        />
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-20">
        <div className="space-y-16">
          <Section title={r.sections.education}>
            {education.map((entry) => (
              <Entry
                key={entry.id}
                title={entry.school}
                subtitle={dict.education[entry.id].degree}
                place={dict.places[entry.place]}
                period={period(entry)}
              >
                <p className="text-ink/85">{dict.education[entry.id].detail}</p>
                <Chips items={[`${r.gpa} ${formatDecimal(locale, entry.gpa)}/4`]} strong />
              </Entry>
            ))}
          </Section>

          <Section title={r.sections.experience}>
            {experience.map((entry) => {
              const copy = dict.experience[entry.id];
              return (
                <Entry
                  key={entry.id}
                  title={copy.role}
                  subtitle={[entry.org, copy.type].filter(Boolean).join(" · ")}
                  place={dict.places[entry.place]}
                  period={copy.period ?? period(entry)}
                >
                  <Bullets items={copy.bullets} />
                  {entry.tools.length > 0 && <Chips items={entry.tools} />}
                </Entry>
              );
            })}
          </Section>

          <Section title={r.sections.research}>{projectEntries("research")}</Section>
          <Section title={r.sections.extracurricular}>{projectEntries("extracurricular")}</Section>
        </div>

        <aside className="space-y-14">
          <Section title={r.sections.contact}>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 break-all hover:text-navy hover:underline"
                >
                  <MailIcon className="size-[18px] shrink-0" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-navy hover:underline"
                >
                  <LinkedInIcon className="size-[18px] shrink-0" />
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="size-[18px] shrink-0" />
                {dict.places.toulouse}
              </li>
            </ul>
          </Section>

          <Section title={r.sections.languages}>
            <ul className="space-y-4">
              {languages.map((language) => (
                <li key={language.id} data-reveal>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-semibold">{dict.languages[language.id]}</span>
                    <span className="text-right text-sm text-muted">
                      {language.level === "native" ? r.native : language.level}
                      {language.certificate && ` (${language.certificate})`}
                    </span>
                  </div>
                  <LevelMeter level={language.level} />
                </li>
              ))}
            </ul>
          </Section>

          <Section title={r.sections.skills}>
            <div className="space-y-5">
              {skills.map((group) => (
                <div key={group.id} data-reveal>
                  <h3 className="text-sm font-semibold">{dict.skills[group.id]}</h3>
                  <Chips items={group.items} />
                </div>
              ))}
            </div>
          </Section>

          <Section title={r.sections.interests}>
            <Bullets items={dict.interests} />
          </Section>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="border-b border-ink pb-2 text-sm font-bold tracking-[0.14em] uppercase">
        {title}
      </h2>
      <div className="mt-6 space-y-9">{children}</div>
    </section>
  );
}

function Entry({
  title,
  subtitle,
  place,
  period,
  children,
}: {
  title: string;
  subtitle?: string;
  place?: string;
  period: string;
  children: ReactNode;
}) {
  return (
    <article data-reveal>
      <div className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_auto]">
        <h3 className="text-lg font-bold sm:col-start-1 sm:row-start-1">{title}</h3>
        {place && (
          <p className="text-sm text-muted sm:col-start-2 sm:row-start-1 sm:pt-1 sm:text-right">
            {place}
          </p>
        )}
        {subtitle && <p className="italic sm:col-start-1 sm:row-start-2">{subtitle}</p>}
        <p className="text-sm text-muted tabular-nums sm:col-start-2 sm:row-start-2 sm:pt-0.5 sm:text-right">
          {period}
        </p>
      </div>
      <div className="mt-3">{children}</div>
    </article>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="relative pl-5 leading-relaxed text-ink/85">
          <span
            aria-hidden
            className="absolute top-[0.6em] left-0 size-2 rounded-[0.35rem_0] bg-navy"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Chips({ items, strong = false }: { items: string[]; strong?: boolean }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={
            strong
              ? "rounded-[0.6rem_0] bg-navy px-3 py-1 text-xs font-semibold tracking-wide text-white"
              : "rounded-[0.6rem_0] bg-mist px-3 py-1 text-xs font-medium"
          }
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

const cefr = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;

/** Six segments, one per CEFR level; native speakers fill them all. */
function LevelMeter({ level }: { level: LanguageEntry["level"] }) {
  const filled = level === "native" ? cefr.length : cefr.indexOf(level) + 1;
  return (
    <div aria-hidden className="mt-2 grid grid-cols-6 gap-1">
      {cefr.map((step, index) => (
        <span key={step} className={index < filled ? "h-1.5 bg-navy" : "h-1.5 bg-mist"} />
      ))}
    </div>
  );
}
