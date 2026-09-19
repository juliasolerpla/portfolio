import { notFound } from "next/navigation";

// Any unknown URL inside a language shows the translated not-found page.
export default function CatchAll() {
  notFound();
}
