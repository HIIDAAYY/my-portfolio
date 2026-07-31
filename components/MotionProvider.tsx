"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * LazyMotion + domAnimation memuat hanya fitur animasi DOM yang benar-benar dipakai
 * (~15kb, bukan ~40kb bundel penuh framer-motion). Semua komponen turunan memakai
 * <m.div> alih-alih <motion.div> agar tree-shaking bekerja.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
