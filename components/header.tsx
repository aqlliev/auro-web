import { site } from "@/content/site";

const links = [
  { href: "#background", label: "Background" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream">
      <div className="flex h-16 items-center justify-between gap-4 px-6 sm:px-8 lg:px-12 xl:px-16">
        <a href="#top" className="font-serif text-lg tracking-tight text-ink">
          {site.given}
          <span className="hidden text-sand sm:inline"> {site.family}</span>
        </a>
        <nav className="flex items-center gap-5 sm:gap-7" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-sand transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
