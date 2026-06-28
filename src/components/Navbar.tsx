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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0b0b0e]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-white font-bold text-base tracking-wide hover:opacity-80 transition-opacity"
        >
          DOJA<span className="text-[#1d6ff3]">.</span>TECH
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors tracking-wide"
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
                {i > 0 && <span className="text-white/20 text-xs">·</span>}
                <a
                  href={switchLocale(locale)}
                  className={`text-xs font-bold tracking-widest transition-colors ${
                    locale === lang
                      ? "text-white"
                      : "text-white/30 hover:text-white/60"
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
            className="inline-flex items-center px-5 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-200 rounded-sm"
          >
            {dict.startProject}
          </a>
        </div>
      </nav>
    </header>
  );
}
