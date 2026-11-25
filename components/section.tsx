import type { ReactNode } from "react";

export function Section({
  id,
  title,
  tone = "cream",
  divider = true,
  children,
}: {
  id: string;
  title: string;
  tone?: "cream" | "paper";
  /** Hairline above the section; off where the section directly follows the hero. */
  divider?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={tone === "paper" ? "bg-paper px-6 sm:px-10" : "px-6 sm:px-10"}>
      <div
        className={`mx-auto grid max-w-5xl gap-6 py-14 md:grid-cols-12 md:gap-8 md:py-20 ${
          tone === "paper" || !divider ? "" : "border-t border-line"
        }`}
      >
        <h2 className="font-serif text-2xl tracking-tight sm:text-3xl md:col-span-4">{title}</h2>
        <div className="max-w-[60ch] md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
