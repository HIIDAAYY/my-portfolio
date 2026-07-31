import { site, stats, waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon, ArrowIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* Ambient glow — dua radial statis, tidak dianimasikan agar tidak membebani paint */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-14rem] h-[36rem] w-[46rem] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute right-[-10rem] top-[6rem] h-[26rem] w-[26rem] rounded-full bg-magenta-500/10 blur-[120px]" />
      </div>

      <div className="shell">
        <Reveal>
          <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-violet-500/[0.06] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>
            <span className="text-xs text-muted">
              Tersedia untuk project baru
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="balance max-w-4xl text-display font-medium">
            Website cepat &amp; AI agent cerdas untuk bisnis yang{" "}
            <span className="text-gradient">ingin naik kelas.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="pretty mt-7 max-w-xl text-lead text-muted">
            Saya {site.name.split(" ")[1]} — saya bangun website yang cepat dan
            AI agent yang melayani pelanggan 24 jam untuk bisnis dan UMKM
            Indonesia. Rapi dibuka dari HP, terhubung langsung ke WhatsApp
            Anda.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Diskusi via WhatsApp
            </a>
            <a href="#karya" className="btn-ghost group">
              Lihat projects
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 ease-snap group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-ink px-5 py-6 sm:px-6">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block text-xl font-medium tracking-tight text-paper sm:text-2xl">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 block text-sm text-paper/80">
                    {stat.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted">
                    {stat.detail}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
