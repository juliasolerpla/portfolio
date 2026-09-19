import "~/styles/globals.css";

import Link from "next/link";

// Only reached by URLs the proxy doesn't send to a language (files with an extension);
// every other missing page gets the translated app/[locale]/not-found.tsx.
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="grid min-h-dvh place-items-center bg-white px-4 text-center text-ink">
        <main>
          <h1 className="text-5xl font-bold">Out of orbit.</h1>
          <p className="mt-4 text-muted">The page you’re looking for doesn’t exist or has moved.</p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-[1rem_0] bg-navy px-8 py-2.5 text-[0.8125rem] font-semibold tracking-[0.08em] text-white uppercase"
          >
            Back to home
          </Link>
        </main>
      </body>
    </html>
  );
}
