/** Joins class names, skipping falsy ones: `cn("a", isOpen && "b")`. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
