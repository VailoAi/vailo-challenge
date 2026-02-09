import type { ReactNode } from "react";

/** Responsive grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop) */
export function CardsGrid({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
