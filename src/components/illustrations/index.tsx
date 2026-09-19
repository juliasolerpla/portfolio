import type { IllustrationId } from "~/content/types";

import { CubeSat } from "./cubesat";
import { Magnetosphere } from "./magnetosphere";
import { Rendezvous } from "./rendezvous";
import { RocketAvionics } from "./rocket";
import type { IllustrationProps } from "./svg";

export { CubeSat } from "./cubesat";
export { Magnetosphere } from "./magnetosphere";
export { Rendezvous } from "./rendezvous";
export { Rocket, RocketAvionics } from "./rocket";
export { Saturn } from "./saturn";
export { Starfield } from "./starfield";

/** Cover drawing of each project, used until a photo is added. */
export function ProjectIllustration({ id, ...props }: IllustrationProps & { id: IllustrationId }) {
  switch (id) {
    case "cubesat":
      return <CubeSat detailed {...props} />;
    case "rocket":
      return <RocketAvionics {...props} />;
    case "rendezvous":
      return <Rendezvous {...props} />;
    case "magnetosphere":
      return <Magnetosphere {...props} />;
  }
}
