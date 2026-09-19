import { MapPinIcon } from "~/components/icons";
import { SocialLinks } from "~/components/social-links";
import { profile, type Dictionary } from "~/content";

// Evaluated when the site is built.
const year = new Date().getFullYear();

export function SiteFooter({ dict }: { dict: Dictionary }) {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col items-center gap-3 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name}
        </p>
        <p className="flex items-center gap-1.5 text-muted">
          <MapPinIcon className="size-4" />
          {dict.places.toulouse}
        </p>
        <SocialLinks className="-mr-2" />
      </div>
    </footer>
  );
}
