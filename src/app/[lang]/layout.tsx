import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import Navbar from "@/components/Navbar";

interface LangLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      {children}
    </>
  );
}
