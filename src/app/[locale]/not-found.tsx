import { NotFoundMessage } from "~/components/not-found-message";
import { getDictionary } from "~/content";

export default function NotFound() {
  return (
    <NotFoundMessage
      copies={{
        en: getDictionary("en").notFound,
        fr: getDictionary("fr").notFound,
        ca: getDictionary("ca").notFound,
        es: getDictionary("es").notFound,
      }}
    />
  );
}
