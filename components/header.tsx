const links = [
  { href: "#background", label: "Background" },
  { href: "#learning", label: "Learning" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="px-6 sm:px-10">
      <nav className="mx-auto flex h-20 max-w-5xl items-center justify-end gap-6 sm:gap-8" aria-label="Sections">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="py-3 text-sm text-sand transition-colors hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
