import { background, education, experience } from "@/content/site";
import { Section } from "@/components/section";

export function Background() {
  return (
    <>
      <Section id="background" title="Background" divider={false}>
        <div className="space-y-5">
          {background.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="work" title="Work">
        <ol className="space-y-7">
          {experience.map((job) => (
            <li key={job.id}>
              <p className="font-medium">{job.role}</p>
              <p className="text-sm text-sand">
                {job.org} · {job.dates}
              </p>
              {job.note ? <p className="mt-2">{job.note}</p> : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="education" title="Education">
        <ol className="space-y-7">
          {education.map((item) => (
            <li key={item.id}>
              <p className="font-medium">{item.program}</p>
              <p className="text-sm text-sand">
                {item.school} · {item.dates}
              </p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
