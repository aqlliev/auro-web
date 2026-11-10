import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="px-6 sm:px-10">
      <div className="mx-auto grid max-w-5xl items-start gap-12 pt-8 pb-16 md:grid-cols-12 md:gap-8 md:pt-14 md:pb-24">
        <div className="md:col-span-7">
          <h1 className="signature font-serif text-[clamp(3.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.045em]">
            {site.given}
            <br />
            <span className="font-light text-orange italic">{site.family}</span>
          </h1>
          <p className="mt-10 max-w-[28ch] text-2xl leading-snug">{site.line}</p>
          <p className="mt-4 text-sm text-sand">{site.study}</p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-opacity hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
        <div className="md:col-span-4 md:col-start-9 md:pt-4">
          <div className="relative aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-sm bg-paper">
            <Image
              src={site.portrait}
              alt={site.portraitAlt}
              fill
              priority
              sizes="(min-width: 768px) 380px, 90vw"
              className="portrait object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
