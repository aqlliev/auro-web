import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="border-b border-line px-6 pt-28 pb-20 sm:px-8 lg:px-12 lg:pt-36 lg:pb-28 xl:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
        <div>
          <p className="mb-8 flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-sand uppercase">
            <span className="size-2 rounded-full bg-orange" aria-hidden />
            {site.eyebrow}
          </p>
          <h1 className="signature font-serif text-[clamp(4.2rem,8.6vw,8rem)] leading-[0.88] tracking-[-0.05em] text-ink">
            {site.given}
            <br />
            <span className="font-light text-orange italic">{site.family}.</span>
          </h1>
          <p className="mt-9 max-w-[29ch] text-xl leading-relaxed text-ink sm:text-2xl">{site.line}</p>
          <p className="mt-4 max-w-sm text-base text-sand">{site.study}</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-orange"
            >
              Get in touch <span aria-hidden>↗</span>
            </a>
            <a href="#background" className="border-b border-ink pb-1 text-sm font-medium text-ink">
              My background <span aria-hidden>↓</span>
            </a>
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-[420px] lg:mx-0">
          <div className="absolute top-0 left-0 aspect-[4/5] w-full translate-x-3 translate-y-3 rounded-t-[46%] bg-orange" aria-hidden />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[46%] border border-ink bg-ink">
            <Image
              src={site.portrait}
              alt={site.portraitAlt}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-[64%_20%]"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
