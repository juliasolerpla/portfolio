import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactBand } from "~/components/contact-band";
import { Figure } from "~/components/figure";
import { ArrowIcon } from "~/components/icons";
import { ProjectCover } from "~/components/project-cover";
import { getDictionary, getProject, projects } from "~/content";
import { isLocale } from "~/i18n/config";
import { formatPeriod } from "~/i18n/format";
import { localePath } from "~/i18n/routing";
import { pageMetadata, withoutFullStop } from "~/lib/metadata";
import { revealDelay, riseDelay } from "~/lib/reveal";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) return {};
  const copy = getDictionary(locale).projects[project.slug];
  return pageMetadata({
    locale,
    path: `/projects/${project.slug}`,
    title: withoutFullStop(copy.shortTitle),
    description: copy.summary,
  });
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) notFound();

  const dict = getDictionary(locale);
  const copy = dict.projects[project.slug];
  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length]!;
  const next = projects[(index + 1) % projects.length]!;

  const facts = [
    { label: dict.project.framework, value: copy.kind },
    copy.role && { label: dict.project.role, value: copy.role },
    {
      label: dict.project.period,
      value: formatPeriod(locale, project.start, project.end, dict.resume.present),
    },
    project.place && { label: dict.project.location, value: dict.places[project.place] },
    project.grade && {
      label: dict.project.result,
      value: `${dict.resume.grade}: ${project.grade}`,
    },
  ].filter((fact) => !!fact);

  return (
    <>
      <article>
        <div className="relative h-[42vh] max-h-[34rem] min-h-72 overflow-hidden">
          <ProjectCover
            project={project}
            alt={copy.coverAlt}
            sizes="100vw"
            priority
            artClassName="h-[84%] w-[90%] max-w-4xl"
          />
        </div>

        <div className="container-page pt-10 pb-20 md:pt-14 md:pb-28">
          <Link
            href={localePath(locale, "/projects")}
            className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
          >
            <ArrowIcon direction="left" className="size-4" />
            {dict.project.back}
          </Link>

          <header className="mt-8 max-w-4xl">
            <p className="animate-rise text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              {copy.kind}
            </p>
            <h1
              className="mt-3 animate-rise text-4xl leading-[1.05] font-bold tracking-[-0.02em] md:text-6xl"
              style={riseDelay(60)}
            >
              {copy.shortTitle}
            </h1>
            <p
              className="mt-4 animate-rise text-lg text-muted italic md:text-xl"
              style={riseDelay(120)}
            >
              {copy.title}
            </p>
          </header>

          {/* Key numbers, right under the header — the same idea as "At a glance" on the home page. */}
          <dl className="mt-10 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {copy.stats.map((stat, i) => (
              <div
                key={stat.label}
                data-reveal
                style={revealDelay(i * 90)}
                className="flex flex-col-reverse border-t-2 border-ink pt-4"
              >
                <dt className="mt-2 text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="text-3xl font-bold tracking-[-0.02em] md:text-4xl">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20">
            <div className="max-w-3xl">
              <p className="text-xl leading-snug font-medium md:text-2xl">{copy.summary}</p>

              <h2 className="mt-10 text-2xl font-bold">{dict.project.problem}</h2>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink/85">{copy.body[0]}</p>

              <h2 className="mt-10 text-2xl font-bold">{dict.project.approach}</h2>
              {copy.body.slice(1).map((paragraph) => (
                <p key={paragraph} className="mt-4 text-[1.0625rem] leading-relaxed text-ink/85">
                  {paragraph}
                </p>
              ))}

              {project.designImages && (
                <figure className="mt-8">
                  <div className="grid grid-cols-2 gap-3">
                    {project.designImages.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden rounded-[1rem] bg-white ring-1 ring-line"
                      >
                        <Image
                          src={src}
                          alt={copy.designCaption ?? copy.coverAlt}
                          fill
                          sizes="(min-width: 1024px) 18rem, 45vw"
                          className="object-contain p-2"
                        />
                      </div>
                    ))}
                  </div>
                  {copy.designCaption && (
                    <figcaption className="mt-3 text-sm text-muted">
                      {copy.designCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              <h2 className="mt-14 text-2xl font-bold">{dict.project.highlights}</h2>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {copy.highlights.map((highlight, i) => (
                  <li key={highlight} data-reveal className="flex gap-5 py-4">
                    <span className="w-6 shrink-0 pt-0.5 text-sm font-bold text-navy tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ol>

              {copy.results && project.resultImages && (
                <div className="mt-14">
                  <h2 className="text-2xl font-bold">{dict.project.results}</h2>
                  <div className="mt-6 grid gap-8 sm:grid-cols-2">
                    {project.resultImages.map((src, i) => {
                      const result = copy.results![i];
                      return (
                        <div
                          key={src}
                          data-reveal
                          style={revealDelay(i * 100)}
                          className={project.wideResults?.includes(i) ? "sm:col-span-2" : undefined}
                        >
                          <Figure
                            src={src}
                            alt={result?.alt ?? copy.coverAlt}
                            caption={result?.caption}
                            sizes="(min-width: 1024px) 22rem, (min-width: 640px) 20rem, 90vw"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-14 border-t-2 border-ink pt-8">
                <h2 className="text-2xl font-bold">{dict.project.outcome}</h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink/85">{copy.outcome}</p>
                {project.outcomePhoto && (
                  <div className="mt-6 max-w-sm">
                    <Figure
                      src={project.outcomePhoto}
                      alt={copy.outcomePhotoAlt ?? copy.coverAlt}
                      caption={copy.outcomeCaption}
                      sizes="(min-width: 640px) 24rem, 90vw"
                    />
                  </div>
                )}
                {copy.outcomeLinks && copy.outcomeLinks.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-3">
                    {copy.outcomeLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-[0.6rem_0] bg-mist px-4 py-2 text-sm font-semibold transition-colors hover:bg-navy hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <aside>
              <dl className="border-t-2 border-ink">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-b border-line py-4">
                    <dt className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 font-semibold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <h2 className="mt-10 text-xs font-semibold tracking-[0.12em] text-muted uppercase">
                {dict.project.tools}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {copy.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-[0.6rem_0] bg-mist px-3 py-1 text-sm font-medium"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>

        <nav aria-label={dict.nav.projects} className="border-t border-line">
          <div className="container-page grid sm:grid-cols-2">
            {[
              { project: previous, label: dict.project.previous, direction: "left" as const },
              { project: next, label: dict.project.next, direction: "right" as const },
            ].map(({ project: other, label, direction }) => (
              <Link
                key={direction}
                href={localePath(locale, `/projects/${other.slug}`)}
                className={
                  direction === "left"
                    ? "group py-10 sm:pr-8"
                    : "group border-t border-line py-10 sm:border-t-0 sm:border-l sm:pl-8 sm:text-right"
                }
              >
                <span
                  className={
                    direction === "left"
                      ? "flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted uppercase"
                      : "flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-muted uppercase sm:justify-end"
                  }
                >
                  {direction === "left" && <ArrowIcon direction="left" className="size-4" />}
                  {label}
                  {direction === "right" && <ArrowIcon className="size-4" />}
                </span>
                <span className="mt-2 block text-2xl font-bold underline-offset-4 group-hover:underline md:text-3xl">
                  {dict.projects[other.slug].shortTitle}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </article>
      <ContactBand dict={dict} />
    </>
  );
}
