import { featured, waLink, waMessages } from "@/lib/site";
import { CheckIcon, ExternalIcon, GithubIcon, SparkIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { TechnicalLayer } from "./TechnicalLayer";
import { SectionHeading } from "./SectionHeading";

export function FeaturedProject() {
  return (
    <section id="karya" className="scroll-mt-24 border-t border-hairline bg-ink-800 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Karya terpilih"
          counter="01 — 04"
          title="Proyek yang paling menunjukkan cara saya bekerja"
        />

        <Reveal as="article">
          <div className="glow-ambient relative overflow-hidden rounded-3xl border border-hairline-strong bg-ink-700/60 p-7 shadow-glow sm:p-10 lg:p-12">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-3.5 py-1.5 text-xs font-medium text-white">
                  <SparkIcon className="h-3.5 w-3.5" />
                  Proyek unggulan
                </span>
                <span className="text-sm text-muted">{featured.kicker}</span>
              </div>

              <h3 className="mt-6 text-h1 font-medium tracking-tight">
                {featured.title}
              </h3>

              <p className="pretty mt-5 max-w-2xl text-lead text-muted">
                {featured.summary}
              </p>

              {/* LAYER BISNIS — selalu terlihat, ini yang dibaca calon klien */}
              <div className="mt-10">
                <h4 className="eyebrow mb-6">{featured.business.heading}</h4>
                <ul className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
                  {featured.business.points.map((point) => (
                    <li key={point.title} className="flex gap-3.5">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-400">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>
                        <span className="block text-[0.9375rem] font-medium text-paper">
                          {point.title}
                        </span>
                        <span className="pretty mt-1.5 block text-sm leading-relaxed text-muted">
                          {point.body}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href={waLink(waMessages.aiAgent)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px]" />
                  Tanya soal AI agent
                </a>
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  Coba demo
                  <ExternalIcon />
                </a>
                <a
                  href={featured.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted transition-colors duration-300 hover:text-paper"
                >
                  Dashboard admin
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href={featured.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kode sumber ${featured.title} di GitHub`}
                  className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted transition-colors duration-300 hover:text-paper"
                >
                  <GithubIcon className="h-[18px] w-[18px]" />
                  Source code
                </a>
              </div>

              {/* LAYER TEKNIS — accordion, untuk recruiter dan developer */}
              <TechnicalLayer />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
