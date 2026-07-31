"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Tombol WhatsApp mengambang.
 * - Baru muncul setelah pengguna menggulir ~60% tinggi layar, supaya tidak
 *   menutupi hero saat halaman baru dibuka.
 * - Label teks otomatis melebar di desktop, tetap lingkaran di mobile agar
 *   tidak menghalangi konten.
 * - Cincin pulse dimatikan bila pengguna memilih "reduce motion".
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={reduce ? false : { opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.85, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 right-5 z-40 sm:bottom-7 sm:right-7"
        >
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tanya Adit via WhatsApp"
            className="group relative flex items-center gap-0 overflow-hidden rounded-full bg-violet-500 py-4 pl-4 pr-4 text-white shadow-[0_14px_44px_-10px_rgba(139,92,246,0.85)] transition-all duration-300 ease-snap hover:bg-violet-400 sm:hover:pr-6"
          >
            {/* Cincin pulse — berada di belakang tombol, tidak menangkap klik */}
            {!reduce && (
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-violet-500/60"
              />
            )}

            <WhatsAppIcon className="h-6 w-6 shrink-0" />

            <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 ease-snap group-hover:max-w-[13rem] group-hover:pl-2.5 sm:inline-block">
              Tanya Adit via WhatsApp
            </span>
          </a>
        </m.div>
      )}
    </AnimatePresence>
  );
}
