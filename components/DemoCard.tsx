"use client";

import { useRef, useState } from "react";
import type { Demo } from "@/lib/site";
import { waLink, waMessages } from "@/lib/site";
import { ExternalIcon, GithubIcon, WhatsAppIcon } from "./Icons";

/**
 * Kartu demo dengan dua perilaku berbeda:
 *
 * Desktop  — saat kursor masuk, <iframe> situs asli dimuat di dalam thumbnail
 *            (pointer-events: none, jadi tidak ada scroll trap) dan kursor
 *            menggerakkan sorotan cahaya halus.
 * Mobile   — iframe TIDAK PERNAH dimuat. Alasannya dua: iframe di layar sempit
 *            menyandera scroll pengguna, dan memuat tiga situs sekaligus di
 *            koneksi seluler merusak performa. Yang tampil hanya thumbnail
 *            ringan berbasis warna brand aslinya.
 */
export function DemoCard({ demo, index }: { demo: Demo; index: number }) {
  const [showPreview, setShowPreview] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isDesktop = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (min-width: 768px)").matches;

  const onEnter = () => {
    if (isDesktop()) setShowPreview(true);
  };

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    // Variabel CSS dibaca oleh .spotlight — lebih murah daripada re-render React
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={() => setShowPreview(false)}
      onMouseMove={onMove}
      className="card spotlight group flex h-full flex-col overflow-hidden"
    >
      {/* Thumbnail */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{ backgroundColor: demo.swatch.bg }}
      >
        {/* Lapisan statis: selalu ada, jadi tidak pernah ada kotak kosong */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <span
            className="text-lg font-medium tracking-tight"
            style={{ color: demo.swatch.fg }}
          >
            {demo.title}
          </span>
          <span
            className="h-px w-10"
            style={{ backgroundColor: demo.swatch.accent }}
          />
          <span
            className="text-[0.6875rem] uppercase tracking-[0.14em]"
            style={{ color: demo.swatch.accent }}
          >
            {demo.industry}
          </span>
        </div>

        {/* Pratinjau langsung — hanya desktop, hanya setelah hover */}
        {showPreview && (
          <iframe
            src={demo.live}
            title={`Pratinjau situs ${demo.title}`}
            loading="lazy"
            tabIndex={-1}
            aria-hidden="true"
            scrolling="no"
            className="pointer-events-none absolute left-0 top-0 h-[250%] w-[250%] origin-top-left scale-[0.4] border-0 opacity-0 transition-opacity duration-500 ease-snap group-hover:opacity-100"
          />
        )}

        <span className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
      </div>

      {/* Isi kartu */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-xs text-violet-400">
            0{index + 2}
          </span>
          <span className="text-xs text-muted">{demo.industry}</span>
        </div>

        <h3 className="mt-3 text-h3 font-medium">{demo.title}</h3>

        <p className="pretty mt-3 text-sm leading-relaxed text-muted">
          {demo.summary}
        </p>

        <ul className="mt-5 space-y-2">
          {demo.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted">
              <span
                aria-hidden="true"
                className="mt-[0.5625rem] h-1 w-1 shrink-0 rounded-full bg-violet-500"
              />
              <span className="pretty">{h}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {demo.stack.map((t) => (
            <li
              key={t}
              className="rounded-md bg-violet-500/[0.08] px-2.5 py-1 text-[0.6875rem] text-muted"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-hairline pt-5">
          <a
            href={demo.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-violet-400 transition-colors duration-300 hover:text-magenta-400"
          >
            Buka demo
            <ExternalIcon className="h-3.5 w-3.5" />
          </a>
          <a
            href={demo.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Kode sumber ${demo.title} di GitHub`}
            className="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-paper"
          >
            <GithubIcon className="h-4 w-4" />
            Kode
          </a>
          <a
            href={waLink(waMessages.demo(demo.industry))}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Diskusi via WhatsApp soal demo ${demo.title}`}
            className="ml-auto inline-flex min-h-[44px] items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-paper"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Mau yang begini
          </a>
        </div>
      </div>
    </article>
  );
}
