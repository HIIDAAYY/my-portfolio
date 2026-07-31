import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { IndustryDemos } from "@/components/IndustryDemos";
import { Process } from "@/components/Process";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MotionProvider } from "@/components/MotionProvider";

export default function Home() {
  return (
    <MotionProvider>
      <Nav />
      <main id="konten">
        <Hero />
        <FeaturedProject />
        <IndustryDemos />
        <Process />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </MotionProvider>
  );
}
