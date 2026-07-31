"use client";

import { m, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Jeda dalam detik — dipakai untuk efek berjenjang antar kartu */
  delay?: number;
  /** Jarak geser awal dalam piksel */
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "header";
};

/**
 * Pembungkus scroll-reveal. Animasi hanya berjalan sekali (`once: true`) supaya
 * scroll ke atas tidak memicu ulang, dan otomatis dinonaktifkan bila pengguna
 * mengaktifkan "reduce motion" di sistemnya.
 */
export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = m[as];

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
