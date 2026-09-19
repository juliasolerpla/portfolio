import type { ReactNode } from "react";

// The real root layout, which sets <html lang>, is app/[locale]/layout.tsx.
// This pass-through only exists because app/not-found.tsx needs a layout above it.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
