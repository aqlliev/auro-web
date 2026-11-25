import Image from "next/image";
import { site } from "@/content/site";

const nav = [
  { href: "#background", label: "Background" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export function Hero() {
  return (
    <section id="top" className="relative bg-ink text-cream">
      {/* Phone: navigation sits above the photo on the same ink. */}
      <nav className="flex h-16 items-center gap-6 px-6 md:hidden" aria-label="Sections">
        {nav.map((link) => (
          <a key={link.href} href={link.href} className="py-3 text-sm text-cream/70 transition-colors hover:text-cream">
            {link.label}
          </a>
        ))}
      </nav>

      {/* The photo runs to the edge: full width on phones, the right side of the hero on larger screens. */}
      <div className="relative aspect-[5/4] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[42%]">
        <Image
          src={site.portrait}
          alt={site.portraitAlt}
          fill
          priority
          sizes="(min-width: 768px) 42vw, 100vw"
          className="object-cover object-[55%_30%] grayscale contrast-[1.05]"
        />
      </div>

      <div className="relative px-6 sm:px-10">
        <div className="mx-auto max-w-5xl">
          <nav className="hidden h-20 items-center gap-8 md:flex" aria-label="Sections">
            {nav.map((link) => (
              <a key={link.href} href={link.href} className="py-3 text-sm text-cream/70 transition-colors hover:text-cream">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-10 pb-16 md:w-[52%] md:pt-16 md:pb-28">
            <h1 className="signature font-serif text-[clamp(3.75rem,9vw,7rem)] leading-[0.9] tracking-[-0.045em]">
              {site.given}
              <br />
              <span className="font-light text-orange italic">{site.family}</span>
            </h1>
            <p className="mt-10 max-w-[28ch] text-2xl leading-snug">{site.line}</p>
            <p className="mt-4 text-sm text-cream/70">{site.study}</p>
            <a
              href="#contact"
              className="mt-9 inline-block rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
