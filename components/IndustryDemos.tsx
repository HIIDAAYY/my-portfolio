import { demos } from "@/lib/site";
import { DemoCard } from "./DemoCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function IndustryDemos() {
  return (
    <section id="demo" className="scroll-mt-24 py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Demo spesialisasi industri"
          counter="02 — 04"
          title="Studi kasus mandiri untuk tiga jenis bisnis"
          description="Ketiga situs di bawah ini saya bangun sendiri sebagai studi kasus, bukan pesanan klien. Merek dan datanya fiktif — yang nyata adalah kode, struktur halaman, dan cara tiap detailnya dirancang untuk industri tersebut. Anggap ini contoh konkret dari apa yang bisa saya bangun untuk bisnis Anda."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo, i) => (
            <Reveal as="li" key={demo.slug} delay={i * 0.08} className="h-full">
              <DemoCard demo={demo} index={i} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <p className="mt-8 text-sm text-muted">
            <span className="hidden md:inline">
              Arahkan kursor ke gambar untuk melihat situsnya bergerak langsung.{" "}
            </span>
            Butuh contoh untuk industri lain? Sebutkan bidang usaha Anda, saya
            buatkan gambarannya.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
