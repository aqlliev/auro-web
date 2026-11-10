"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#study", label: "Study" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: site.timezone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23",
      }).format(new Date());

    setTime(format());
    const id = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const marker = window.innerHeight * 0.32;
      let current = "";
      for (const link of links) {
        const node = document.querySelector(link.href);
        if (!(node instanceof HTMLElement)) continue;
        if (node.getBoundingClientRect().top <= marker) current = link.href;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-[background-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-[#F3EEE3]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="flex h-16 items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16">
        <a href="#top" className="font-serif text-lg tracking-tight text-ink">
          {site.given}
          <span className="text-sand"> {site.family}</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sections">
          {links.map((link) => {
            const current = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "relative text-sm tracking-wide transition-colors",
                  current ? "text-ink" : "text-sand hover:text-ink",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px bg-orange transition-all duration-300",
                    current ? "w-full" : "w-0",
                  )}
                  aria-hidden
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <p className="hidden items-baseline gap-2 text-sm tabular-nums text-sand sm:flex">
            <span className="text-[0.68rem] tracking-[0.18em] uppercase">Seoul</span>
            <span className="text-ink">{time ?? "--:--"}</span>
          </p>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-3 md:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </Button>
        </div>
      </div>
    </header>

      {open ? (
        <nav
          id="site-menu"
          className="fixed inset-0 z-[70] overflow-y-auto bg-cream px-6 pt-24 pb-16 md:hidden"
          aria-label="Sections"
        >
          <ul className="flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-serif text-5xl tracking-tight text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-12 flex flex-col gap-3 text-sm text-sand">
            <li>
              <a className="hover:text-ink" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.telegram} target="_blank" rel="noreferrer">
                {site.telegramLabel}
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.github} target="_blank" rel="noreferrer">
                {site.githubLabel}
              </a>
            </li>
            <li>
              <a className="hover:text-ink" href={site.x} target="_blank" rel="noreferrer">
                {site.xLabel}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
}
