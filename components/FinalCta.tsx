import { site, waLink, waMessages } from "@/lib/site";
import { MailIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="kontak" className="scroll-mt-24 py-24 sm:py-32">
      <div className="shell">
        <Reveal>
          <div className="glow-ambient relative overflow-hidden rounded-3xl border border-hairline-strong bg-ink-700/50 px-7 py-16 text-center shadow-glow-strong sm:px-12 sm:py-20">
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="eyebrow mb-6">04 — 04 · Mulai di sini</p>

              <h2 className="balance text-h1 font-medium">
                Siap menaikkan kelas{" "}
                <span className="text-gradient">bisnismu?</span>
              </h2>

              <p className="pretty mx-auto mt-6 max-w-xl text-lead text-muted">
                Ceritakan dulu bisnis Anda dan kendala yang paling sering
                muncul. Konsultasi awal gratis dan tidak mengikat — kalau
                ternyata Anda belum butuh website, saya akan bilang apa adanya.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waLink(waMessages.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full sm:w-auto"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Diskusi via WhatsApp
                </a>
                <a
                  href={`mailto:${site.contact.email}?subject=${encodeURIComponent(
                    "Diskusi project website"
                  )}`}
                  className="btn-ghost w-full sm:w-auto"
                >
                  <MailIcon className="h-[18px] w-[18px]" />
                  Kirim email
                </a>
              </div>

              <p className="mt-8 text-sm text-muted">
                Biasanya saya balas dalam beberapa jam di hari kerja.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
