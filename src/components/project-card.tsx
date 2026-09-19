import Link from "next/link";

import { ProjectCover } from "~/components/project-cover";
import type { ProjectCopy, ProjectEntry } from "~/content";
import { yearOf } from "~/i18n/format";

type Props = {
  href: string;
  project: ProjectEntry;
  copy: ProjectCopy;
  learnMore: string;
};

/** Card of the home-page carousel. The title link covers the whole card. */
export function ProjectCard({ href, project, copy, learnMore }: Props) {
  return (
    <article className="group relative">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <ProjectCover
            project={project}
            alt={copy.coverAlt}
            sizes="(min-width: 1024px) 24rem, (min-width: 640px) 22rem, 80vw"
          />
        </div>
      </div>
      <p className="mt-5 text-xs font-semibold tracking-[0.12em] text-muted uppercase">
        {copy.kind} · {yearOf(project.start)}
      </p>
      <h3 className="mt-2 text-[1.75rem] leading-[1.1] font-bold tracking-[-0.01em]">
        <Link href={href} className="after:absolute after:inset-0">
          {copy.shortTitle}
        </Link>
      </h3>
      <span
        aria-hidden
        className="mt-5 inline-flex rounded-[1rem_0] bg-navy px-7 py-2 text-[0.75rem] font-semibold tracking-[0.1em] text-white uppercase transition-[border-radius,background-color] duration-300 group-hover:rounded-[0_1rem] group-hover:bg-navy-deep"
      >
        {learnMore}
      </span>
    </article>
  );
}
