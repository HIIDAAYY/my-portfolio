import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Jeda dalam detik, untuk efek berjenjang */
  delay?: number;
  className?: string;
  as?: "div" | "p" | "h1" | "dl";
};

/**
 * Reveal versi CSS murni — TIDAK memakai JavaScript.
 *
 * Dipakai khusus untuk konten di atas lipatan layar (hero). Komponen `Reveal`
 * yang berbasis Framer Motion baru berjalan setelah React selesai hydrate, jadi
 * kalau dipakai di hero, headline sempat tidak terlihat selama beberapa ratus
 * milidetik pertama. Itu langsung menaikkan LCP dan menurunkan skor performa.
 *
 * Animasi CSS berjalan sejak paint pertama, tanpa menunggu JavaScript apa pun.
 * Aturan prefers-reduced-motion di globals.css otomatis mematikannya.
 */
export function RevealCss({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={`animate-fade-up ${className}`}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
