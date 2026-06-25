"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-semibold text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-200 rounded-sm"
        >
          Iniciar projeto
        </a>
      </nav>
    </header>
  );
}
