import { background, education, experience, otherWork } from "@/content/site";

const label = "text-[0.72rem] font-medium tracking-[0.18em] text-sand uppercase";

export function Background() {
  return (
    <section id="background" className="bg-paper px-6 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {background.heading}
        </h2>
        <div className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-ink/90 sm:text-lg">
          {background.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-14 grid gap-12 border-t border-line pt-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className={label}>Work</h3>
            <ol className="mt-6 space-y-8">
              {experience.map((job) => (
                <li key={job.id}>
                  <p className="font-serif text-2xl tracking-tight text-ink">{job.role}</p>
                  <p className="mt-1 text-sm text-sand">
                    {job.org}, {job.place}
                    {job.dates ? ` · ${job.dates}` : ""}
                  </p>
                  <ul className="mt-3 max-w-xl space-y-2 text-base leading-relaxed text-ink/90">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <ul className="mt-8 max-w-xl divide-y divide-line border-y border-line text-sm">
              {otherWork.map((job) => (
                <li key={job.id} className="flex flex-wrap justify-between gap-x-6 gap-y-1 py-3">
                  <span className="text-ink/90">
                    {job.role}, {job.org}
                  </span>
                  <span className="text-sand tabular-nums">{job.dates}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <h3 className={label}>Education</h3>
            <ol className="mt-6 space-y-8">
              {education.map((item) => (
                <li key={item.id}>
                  <p className="font-serif text-2xl tracking-tight text-ink">{item.program}</p>
                  <p className="mt-1 text-sm text-sand">{item.level}</p>
                  <p className="mt-1 text-base text-ink/90">{item.school}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
