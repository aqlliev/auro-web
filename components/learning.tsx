import { learning } from "@/content/site";

export function Learning() {
  return (
    <section id="learning" className="px-6 py-20 sm:px-8 md:py-28 lg:px-12 xl:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="max-w-[12ch] font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
            {learning.heading}
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-sand">{learning.intro}</p>
        </div>
        <dl className="divide-y divide-line border-y border-line lg:col-span-6 lg:col-start-7">
          {learning.rows.map((row) => (
            <div key={row.label} className="py-5">
              <dt className="text-[0.72rem] font-medium tracking-[0.18em] text-sand uppercase">{row.label}</dt>
              <dd className="mt-2 font-serif text-2xl leading-snug tracking-tight text-ink">{row.value}</dd>
              <dd className="mt-1 text-sm leading-relaxed text-sand">{row.meta}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
