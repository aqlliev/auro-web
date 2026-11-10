import { site } from "@/content/site";
import { Section } from "@/components/section";

const links = [
  { label: "LinkedIn", href: site.linkedin },
  { label: "CV (PDF)", href: site.cv },
  { label: "GitHub", href: site.github },
  { label: "Telegram", href: site.telegram },
  { label: "X", href: site.x },
].filter((link) => link.href);

export function Contact() {
  return (
    <Section id="contact" title="Contact" tone="paper">
      <p>{site.lookingFor}</p>
      <a
        href={`mailto:${site.email}`}
        className="link mt-6 inline-block font-serif text-2xl tracking-tight break-all sm:text-3xl"
      >
        {site.email}
      </a>
      <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer" className="link inline-block py-2">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-16 text-sm text-sand">
        {site.name} · Seoul · {new Date().getFullYear()}
      </p>
    </Section>
  );
}
