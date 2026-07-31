"use client";

import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { navLinks, site, waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    // passive: true — listener scroll tidak memblokir thread utama
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-snap ${
        scrolled
          ? "border-b border-hairline bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="shell flex h-[4.5rem] items-center justify-between gap-4"
      >
        <a
          href="#konten"
          className="text-[0.9375rem] font-medium tracking-tight text-paper"
        >
          {site.shortName}
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-2">
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-medium text-paper transition-all duration-300 ease-snap hover:border-violet-500 hover:bg-violet-500/10 sm:inline-flex"
          >
            Diskusi gratis
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-full bg-paper transition-all duration-300 ease-snap ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-paper transition-all duration-300 ease-snap ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <m.div
          id="menu-mobile"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="border-t border-hairline bg-ink/95 backdrop-blur-xl md:hidden"
        >
          <ul className="shell flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-hairline py-4 text-base text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Diskusi via WhatsApp
              </a>
            </li>
          </ul>
        </m.div>
      )}
    </header>
  );
}
