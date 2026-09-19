import { LinkedInIcon, MailIcon } from "~/components/icons";
import { profile } from "~/content";
import { cn } from "~/lib/cn";

export function SocialLinks({ className }: { className?: string }) {
  const linkClass =
    "grid size-10 place-items-center rounded-full transition-colors hover:bg-mist hover:text-navy";

  return (
    <ul className={cn("flex items-center", className)}>
      <li>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={linkClass}
        >
          <LinkedInIcon />
        </a>
      </li>
      <li>
        <a href={`mailto:${profile.email}`} aria-label={profile.email} className={linkClass}>
          <MailIcon />
        </a>
      </li>
    </ul>
  );
}
