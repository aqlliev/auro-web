import type { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="mb-6 flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-sand">
      <span className="size-1.5 shrink-0 rounded-full bg-orange" aria-hidden />
      <span className="text-ink">{index}</span>
      <span>{children}</span>
    </p>
  );
}
