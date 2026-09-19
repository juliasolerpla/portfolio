import { CubeSat, Rocket, Saturn } from "~/components/illustrations";
import { LeafButton } from "~/components/leaf-button";
import { Portrait } from "~/components/portrait";
import { profile, type Dictionary } from "~/content";
import type { Locale } from "~/i18n/config";
import { localePath } from "~/i18n/routing";
import { cn } from "~/lib/cn";
import { riseDelay as delay } from "~/lib/reveal";

const sketch = "draw pointer-events-none absolute -z-10 hidden text-ink/80 md:block";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="container-page pt-4 pb-16 md:pt-10 md:pb-24">
      <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
        <Portrait alt={dict.hero.photoAlt} />

        <div className="relative isolate px-2 text-center md:py-16">
          {/* Technical sketches floating behind the text, like in an engineering notebook. */}
          <div
            aria-hidden
            className={cn(sketch, "-top-10 -right-2 w-28 rotate-6 lg:-top-14 lg:-right-8 lg:w-36")}
          >
            <div className="animate-float">
              <CubeSat strokeWidth={1.3} />
            </div>
          </div>
          <div
            aria-hidden
            className={cn(
              sketch,
              "bottom-10 -left-8 w-11 -rotate-[24deg] [--draw-delay:0.5s] lg:-left-12 lg:w-12",
            )}
          >
            <div className="animate-float [animation-delay:-3s]">
              <Rocket flame strokeWidth={1.7} />
            </div>
          </div>
          <div
            aria-hidden
            className={cn(sketch, "-right-2 -bottom-10 w-36 [--draw-delay:0.9s] lg:w-44")}
          >
            <div className="animate-float [animation-delay:-6s]">
              <Saturn strokeWidth={1.3} />
            </div>
          </div>

          <h1 className="animate-rise text-[2.5rem] leading-[1.05] font-bold tracking-[-0.01em] sm:text-5xl lg:text-[3.5rem]">
            <span className="block">{dict.hero.greeting}</span>
            <span className="block">{dict.hero.role}</span>
          </h1>
          <p
            className="mx-auto mt-6 max-w-[26rem] animate-rise text-[1.0625rem] leading-relaxed font-medium"
            style={delay(120)}
          >
            {dict.hero.intro}
          </p>
          <p
            className="mx-auto mt-4 max-w-[26rem] animate-rise text-[1.0625rem] leading-relaxed font-medium"
            style={delay(200)}
          >
            {dict.hero.outro}
          </p>
          <div className="mt-8 flex animate-rise flex-col items-center gap-3" style={delay(300)}>
            <LeafButton href={profile.linkedin} external>
              {dict.hero.linkedin}
            </LeafButton>
            <LeafButton href={localePath(locale, "/projects")}>{dict.hero.projects}</LeafButton>
            <LeafButton href={localePath(locale, "/resume")}>{dict.hero.resume}</LeafButton>
          </div>
        </div>
      </div>
    </section>
  );
}
