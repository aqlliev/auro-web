"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { SectionLabel } from "@/components/section-label";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
  {
    label: "Telegram",
    value: site.telegramLabel,
    href: site.telegram,
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubLabel,
    href: site.github,
    external: true,
  },
  {
    label: "X",
    value: site.xLabel,
    href: site.x,
    external: true,
  },
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="border-t border-line px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="06">Contact</SectionLabel>
        <h2 className="max-w-[12ch] font-serif text-4xl leading-[1.02] tracking-tight text-ink sm:text-6xl">
          A note is enough.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-sand sm:text-lg">
          Email is the direct line. Telegram, GitHub and X are open as well.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={`mailto:${site.email}`}
            className="font-serif text-3xl tracking-tight break-all text-ink underline decoration-orange/70 decoration-1 underline-offset-[10px] transition-colors hover:decoration-orange sm:text-5xl"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button className="h-10 rounded-full px-4" onClick={copyEmail}>
            {copied ? "Copied" : "Copy email"}
          </Button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {channels.map((channel) => (
            <li key={channel.label} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[10rem_1fr]">
              <span className="text-[0.72rem] tracking-[0.18em] text-sand uppercase">
                {channel.label}
              </span>
              <a
                href={channel.href}
                className="text-lg text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-orange"
                {...(channel.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                {channel.value}
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-16 flex flex-wrap items-end justify-between gap-4 text-sm text-sand">
          <p className="font-serif text-xl text-ink">{site.name}</p>
          <p>Seoul · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
