import { process } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Process() {
  return (
    <section
      id="proses"
      className="scroll-mt-24 border-y border-hairline bg-ink-800 py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Proses kerja"
          counter="03 — 04"
          title="Empat langkah, tanpa kejutan di tengah jalan"
          description="Anda tahu persis apa yang terjadi di setiap tahap dan kapan harus memberi masukan. Tidak ada fase gelap di mana Anda cuma menunggu kabar."
        />

        <ol className="relative grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal as="li" key={item.step} delay={i * 0.08}>
              <div className="group relative h-full bg-ink-800 p-7 transition-colors duration-500 ease-snap hover:bg-ink-700 sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-sm text-violet-400">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-violet-500/[0.08] px-2.5 py-1 text-[0.6875rem] text-muted">
                    {item.duration}
                  </span>
                </div>

                <h3 className="mt-5 text-h3 font-medium">{item.title}</h3>

                <p className="pretty mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>

                {/* Garis aksen yang tumbuh saat hover */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-violet-500 transition-all duration-500 ease-snap group-hover:w-full"
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
