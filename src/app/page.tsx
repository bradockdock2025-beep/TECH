import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBand />
      <Services />
      <Process />
      <Differentials />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
