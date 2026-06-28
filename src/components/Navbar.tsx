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
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route/hash change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white ${
          scrolled
            ? "shadow-sm border-b border-black/[0.08]"
            : "border-b border-black/[0.06]"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-8 h-11 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="hover:opacity-75 transition-opacity">
            <img src="/images/logo.png" alt="Techdoja" className="h-8 w-auto" />
          </a>

          {/* Desktop links */}
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

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
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
            <a
              href="#contacto"
              className="inline-flex items-center px-4 py-1.5 text-xs font-semibold text-white bg-black hover:bg-black/80 transition-all duration-200 rounded-sm"
            >
              {dict.startProject}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-11 left-0 right-0 z-40 bg-white border-b border-black/[0.08] transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          {/* Nav links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-black hover:text-black/60 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-px bg-black/[0.06]" />

          {/* Language switcher */}
          <div className="flex items-center gap-3">
            {locales.map((locale) => (
              <a
                key={locale}
                href={switchLocale(locale)}
                className={`text-xs font-bold tracking-widest transition-colors ${
                  locale === lang
                    ? "text-black"
                    : "text-black/30 hover:text-black/60"
                }`}
              >
                {locale.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="w-full flex items-center justify-center py-3 text-sm font-semibold text-white bg-black hover:bg-black/80 transition-colors rounded-sm"
          >
            {dict.startProject}
          </a>
        </div>
      </div>
    </>
  );
}
