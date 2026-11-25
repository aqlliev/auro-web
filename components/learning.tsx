import { learning } from "@/content/site";
import { Section } from "@/components/section";

export function Learning() {
  return (
    <Section id="learning" title="Learning">
      <div className="space-y-5">
        {learning.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
