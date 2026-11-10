import { experience } from "@/content/site";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";

export function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-24 sm:px-8 md:py-32 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel index="03">Experience</SectionLabel>
        <div className="grid gap-8 lg:grid-cols-12">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:col-span-5">
            Training data.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-sand lg:col-span-6 lg:col-start-7 lg:pt-3">
            Every model is shaped by what it learned from. These are the jobs I learned from,
            before the MBA.
          </p>
        </div>

        <ol className="mt-14 border-t border-line">
          {experience.map((job, i) => (
            <li key={job.id} className="border-b border-line py-8 sm:py-10">
              <Reveal delay={i * 0.05}>
                <div className="grid gap-4 sm:grid-cols-12 sm:gap-8">
                  <div className="sm:col-span-3">
                    <p className="text-[0.72rem] font-medium tracking-[0.18em] text-sand uppercase">
                      {job.org}
                      <span className="px-2 text-line">/</span>
                      {job.place}
                    </p>
                    {job.dates ? (
                      <p className="mt-2 text-sm tabular-nums text-sand">{job.dates}</p>
                    ) : null}
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
                      {job.role}
                    </h3>
                    <ul className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-ink/90">
                      {job.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span aria-hidden className="mt-[0.7em] size-1 shrink-0 rounded-full bg-orange" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[0.72rem] tracking-[0.16em] text-sand uppercase">
                      {job.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
