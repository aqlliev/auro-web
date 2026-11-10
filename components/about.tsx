import { about } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-7">
          <SectionLabel index="02">About</SectionLabel>
          <h2 className="max-w-[16ch] font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            From the bank floor to the model.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/90 sm:text-lg">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.08}>
          <dl className="divide-y divide-line border-y border-line">
            {about.facts.map((fact) => (
              <div key={fact.label} className="py-5">
                <dt className="text-[0.72rem] font-medium tracking-[0.18em] text-sand uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-serif text-2xl leading-snug tracking-tight text-ink">
                  {fact.value}
                </dd>
                <dd className="mt-1 text-sm leading-relaxed text-sand">{fact.meta}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
