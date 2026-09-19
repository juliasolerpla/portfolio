import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactBand } from "~/components/contact-band";
import { Hero } from "~/components/hero";
import { ArrowIcon } from "~/components/icons";
import { ProjectCard } from "~/components/project-card";
import { ProjectCarousel } from "~/components/project-carousel";
import { getDictionary, projects } from "~/content";
import { isLocale } from "~/i18n/config";
import { localePath } from "~/i18n/routing";
import { pageMetadata } from "~/lib/metadata";
import { revealDelay } from "~/lib/reveal";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/",
    title: meta.title,
    description: meta.description,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <section aria-labelledby="projects-title" className="pb-24 md:pb-32">
        <ProjectCarousel
          labels={{ previous: dict.home.previous, next: dict.home.next }}
          heading={
            <div>
              <h2 id="projects-title" className="text-4xl font-bold tracking-[-0.02em] md:text-5xl">
                {dict.home.projectsTitle}
              </h2>
              <Link
                href={localePath(locale, "/projects")}
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
              >
                {dict.home.allProjects}
                <ArrowIcon className="size-4" />
              </Link>
            </div>
          }
        >
          {projects.map((project, index) => (
            <li
              key={project.slug}
              data-reveal
              style={revealDelay(index * 90)}
              className="w-[80vw] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]"
            >
              <ProjectCard
                href={localePath(locale, `/projects/${project.slug}`)}
                project={project}
                copy={dict.projects[project.slug]}
                learnMore={dict.home.learnMore}
              />
            </li>
          ))}
        </ProjectCarousel>
      </section>

      <section aria-labelledby="glance-title" className="container-page pb-24 md:pb-32">
        <h2 id="glance-title" className="text-4xl font-bold tracking-[-0.02em] md:text-5xl">
          {dict.home.glanceTitle}
        </h2>
        <dl className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {dict.home.stats.map((stat, index) => (
            <div
              key={stat.label}
              data-reveal
              style={revealDelay(index * 90)}
              className="flex flex-col-reverse border-t-2 border-ink pt-5"
            >
              <dt className="mt-3 max-w-[17rem] text-[0.9375rem] leading-snug text-muted">
                {stat.label}
              </dt>
              <dd className="text-5xl font-bold tracking-[-0.03em] md:text-6xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <ContactBand dict={dict} />
    </>
  );
}
