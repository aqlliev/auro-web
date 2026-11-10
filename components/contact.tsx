"use client";

import { useState } from "react";
import { site } from "@/content/site";

const channels = [
  { label: "LinkedIn", value: "LinkedIn profile", href: site.linkedin },
  { label: "CV", value: "Download PDF", href: site.cv },
  { label: "GitHub", value: site.githubLabel, href: site.github },
  { label: "Telegram", value: site.telegramLabel, href: site.telegram },
  { label: "X", value: site.xLabel, href: site.x },
].filter((channel) => channel.href);

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
    <section id="contact" className="bg-ink px-6 py-20 text-cream sm:px-8 md:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[12ch] font-serif text-4xl leading-[1.02] tracking-tight sm:text-6xl">
          A note is enough.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg">{site.lookingFor}</p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={`mailto:${site.email}`}
            className="font-serif text-3xl tracking-tight break-all underline decoration-orange decoration-1 underline-offset-[10px] sm:text-5xl"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={copyEmail}
            className="h-10 rounded-full bg-orange px-4 text-sm font-medium text-cream transition-opacity hover:opacity-85"
          >
            {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </div>

        <ul className="mt-12 divide-y divide-cream/20 border-y border-cream/20">
          {channels.map((channel) => (
            <li key={channel.label} className="grid grid-cols-[7rem_1fr] items-baseline gap-4 py-5 sm:grid-cols-[10rem_1fr]">
              <span className="text-[0.72rem] tracking-[0.18em] text-fog uppercase">{channel.label}</span>
              <a
                href={channel.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg underline decoration-transparent underline-offset-4 transition-colors hover:decoration-orange"
              >
                {channel.value}
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-14 flex flex-wrap items-end justify-between gap-4 text-sm text-fog">
          <p className="font-serif text-xl text-cream">{site.name}</p>
          <p>Seoul · {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
}
