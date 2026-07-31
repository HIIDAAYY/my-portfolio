import { navLinks, site } from "@/lib/site";
import { GithubIcon, MailIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline bg-ink-800">
      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="text-base font-medium text-paper">
              {site.name}
              <span className="text-violet-400">.</span>
            </p>
            <p className="pretty mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {site.role}. Berbasis di Indonesia, bekerja jarak jauh untuk
              klien di mana pun.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <p className="eyebrow mb-4">Jelajahi</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-300 hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow mb-4">Hubungi</p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={site.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-paper"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 break-all text-sm text-muted transition-colors duration-300 hover:text-paper"
                >
                  <MailIcon className="h-4 w-4" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-paper"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-hairline pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {year} {site.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-xs text-muted">
            Dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
