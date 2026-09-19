import { Starfield } from "~/components/illustrations";
import { LeafButton } from "~/components/leaf-button";
import { profile, type Dictionary } from "~/content";

export function ContactBand({ dict }: { dict: Dictionary }) {
  return (
    <section
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-navy text-white"
    >
      <Starfield className="absolute inset-0 size-full text-white/70" />
      <div data-reveal className="relative container-page py-24 text-center md:py-32">
        <h2 id="contact-title" className="text-5xl font-bold tracking-[-0.02em] md:text-7xl">
          {dict.contact.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          {dict.contact.text}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block text-xl font-semibold break-all underline decoration-white/40 decoration-1 underline-offset-8 transition-colors hover:decoration-white md:text-3xl"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <LeafButton href={`mailto:${profile.email}`} variant="light">
            {dict.contact.email}
          </LeafButton>
          <LeafButton href={profile.linkedin} variant="outline" external>
            {dict.contact.linkedin}
          </LeafButton>
        </div>
      </div>
    </section>
  );
}
