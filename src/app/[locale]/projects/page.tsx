import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactBand } from "~/components/contact-band";
import { ProjectCover } from "~/components/project-cover";
import { getDictionary, projects } from "~/content";
import { isLocale } from "~/i18n/config";
import { localePath } from "~/i18n/routing";
import { cn } from "~/lib/cn";
import { pageMetadata, withoutFullStop } from "~/lib/metadata";
import { riseDelay } from "~/lib/reveal";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { projectsPage } = getDictionary(locale);
  return pageMetadata({
    locale,
    path: "/projects",
    title: withoutFullStop(projectsPage.title),
    description: projectsPage.description,
  });
}

/** Collage: each card gets its own proportions and a label overlapping a different corner. */
const collage = [
  { aspect: "aspect-[4/5]", label: "md:-bottom-8 md:-left-6 lg:-left-10" },
  { aspect: "aspect-square", label: "md:-top-8 md:-right-6 lg:-right-10" },
  { aspect: "aspect-[5/4]", label: "md:-top-8 md:-left-6 lg:-left-10" },
  { aspect: "aspect-[6/5]", label: "md:-right-6 md:-bottom-8 lg:-right-10" },
];

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <>
      <div className="container-page pt-8 pb-24 md:pt-14 md:pb-32">
        <header className="max-w-2xl">
          <h1 className="animate-rise text-5xl font-bold tracking-[-0.02em] md:text-7xl">
            {dict.projectsPage.title}
          </h1>
          <p
            className="mt-5 animate-rise text-lg leading-relaxed text-ink/80"
            style={riseDelay(100)}
          >
            {dict.projectsPage.intro}
          </p>
        </header>

        <ul className="mt-14 grid gap-x-16 gap-y-20 md:mt-20 md:grid-cols-2 md:gap-y-36 md:pb-32 lg:gap-x-24">
          {projects.map((project, index) => {
            const copy = dict.projects[project.slug];
            const layout = collage[index % collage.length]!;
            return (
              <li key={project.slug} className={cn(index % 2 === 1 && "md:translate-y-32")}>
                <Link
                  href={localePath(locale, `/projects/${project.slug}`)}
                  data-reveal
                  className="group relative block"
                >
                  <div className={cn("relative overflow-hidden", layout.aspect)}>
                    <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                      <ProjectCover
                        project={project}
                        alt={copy.coverAlt}
                        sizes="(min-width: 768px) 45vw, 100vw"
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "relative -mt-10 ml-5 w-[min(24rem,88%)] bg-mist px-6 py-5 transition-colors duration-300 group-hover:bg-navy group-hover:text-white md:absolute md:mt-0 md:ml-0",
                      layout.label,
                    )}
                  >
                    <p className="text-xs font-semibold tracking-[0.12em] uppercase opacity-70">
                      {copy.kind}
                    </p>
                    <h2 className="mt-1.5 text-2xl leading-tight font-bold">{copy.shortTitle}</h2>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ContactBand dict={dict} />
    </>
  );
}
