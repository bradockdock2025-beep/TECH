"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import type { Dict } from "@/app/[lang]/dictionaries";

const locales = ["fr", "en", "pt"] as const;

interface NavbarProps {
  dict: Dict["nav"];
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  };

  const navLinks = [
    { label: dict.services, href: "#servicos" },
    { label: dict.process, href: "#processo" },
    { label: dict.projects, href: "#projetos" },
    { label: dict.contact, href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
        scrolled
          ? "shadow-sm border-b border-black/[0.08]"
          : "border-b border-black/[0.06]"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-11 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:opacity-75 transition-opacity">
          <img src="/images/logo.png" alt="Techdoja" className="h-8 w-auto" />
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-black hover:text-black/60 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {locales.map((locale, i) => (
              <span key={locale} className="flex items-center gap-1">
                {i > 0 && <span className="text-black/20 text-[10px]">·</span>}
                <a
                  href={switchLocale(locale)}
                  className={`text-[10px] font-bold tracking-widest transition-colors ${
                    locale === lang
                      ? "text-black"
                      : "text-black/30 hover:text-black/60"
                  }`}
                >
                  {locale.toUpperCase()}
                </a>
              </span>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-flex items-center px-4 py-1.5 text-xs font-semibold text-white bg-black hover:bg-black/80 transition-all duration-200 rounded-sm"
          >
            {dict.startProject}
          </a>
        </div>
      </nav>
    </header>
  );
}
