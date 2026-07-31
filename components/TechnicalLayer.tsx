"use client";

import { useState } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { featured } from "@/lib/site";
import { PlusIcon } from "./Icons";

/**
 * Layer teknis: tersembunyi secara default supaya pemilik bisnis tidak
 * kebanjiran istilah, tapi tetap bisa dibuka recruiter atau developer.
 * Memakai <button aria-expanded> + region, bukan <details>, agar animasinya
 * bisa dikontrol dan tetap lolos audit aksesibilitas.
 */
export function TechnicalLayer() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <div className="mt-10 border-t border-hairline pt-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="detail-teknis"
        className="group flex w-full items-center justify-between gap-4 text-left"
      >
        <span>
          <span className="block text-base font-medium text-paper">
            {featured.technical.heading}
          </span>
          <span className="mt-1 block text-sm text-muted">
            Arsitektur, keputusan teknis, dan stack — untuk yang ingin melihat
            isi mesinnya
          </span>
        </span>
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline-strong text-violet-400 transition-all duration-300 ease-snap group-hover:bg-violet-500/10 ${
            open ? "rotate-45" : ""
          }`}
        >
          <PlusIcon className="h-4 w-4" />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <m.div
            id="detail-teknis"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="grid gap-8 pt-8 lg:grid-cols-2">
              <div>
                <h4 className="eyebrow mb-4">Arsitektur</h4>
                <ul className="space-y-5">
                  {featured.technical.architecture.map((item) => (
                    <li key={item.label}>
                      <p className="text-sm font-medium text-paper">
                        {item.label}
                      </p>
                      <p className="pretty mt-1.5 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="eyebrow mb-4">Keputusan teknis</h4>
                <ul className="space-y-5">
                  {featured.technical.decisions.map((item) => (
                    <li key={item.label}>
                      <p className="text-sm font-medium text-paper">
                        {item.label}
                      </p>
                      <p className="pretty mt-1.5 text-sm leading-relaxed text-muted">
                        {item.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-hairline pt-6">
              <h4 className="eyebrow mb-4">Tech stack</h4>
              <ul className="flex flex-wrap gap-2">
                {featured.technical.stack.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
