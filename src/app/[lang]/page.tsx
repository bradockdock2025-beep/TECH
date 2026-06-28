import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Differentials from "@/components/Differentials";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }, { lang: "pt" }];
}

export default async function LangPage({ params }: PageProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <main>
      <Hero dict={dict.hero} />
      <TrustBand dict={dict.trust} />
      <Services dict={dict.services} />
      <Process dict={dict.process} />
      <Differentials dict={dict.differentials} />
      <Projects dict={dict.projects} />
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} />
    </main>
  );
}
