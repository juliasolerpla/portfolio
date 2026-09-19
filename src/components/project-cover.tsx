import Image from "next/image";

import { ProjectIllustration } from "~/components/illustrations";
import type { ProjectEntry } from "~/content/types";

type Props = {
  project: ProjectEntry;
  alt: string;
  /** Width of the cover at each breakpoint, for responsive photos. */
  sizes: string;
  priority?: boolean;
  /** Size of the illustration inside the box. */
  artClassName?: string;
};

/** Fills its (relatively positioned) parent with the project photo, or its line drawing. */
export function ProjectCover({ project, alt, sizes, priority, artClassName }: Props) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    );
  }

  return (
    <div className="draw absolute inset-0 grid place-items-center dot-grid text-navy [--illo-bg:var(--color-paper)]">
      <ProjectIllustration
        id={project.illustration}
        label={alt}
        className={artClassName ?? "h-[80%] w-[84%]"}
      />
    </div>
  );
}
