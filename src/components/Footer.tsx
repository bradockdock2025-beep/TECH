const footerLinks = [
  {
    title: "Serviços",
    links: [
      { label: "Websites", href: "#servicos" },
      { label: "E-commerce", href: "#servicos" },
      { label: "Aplicativos", href: "#servicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Como trabalhamos", href: "#processo" },
      { label: "Projetos", href: "#projetos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hello@doja.tech", href: "mailto:hello@doja.tech" },
      { label: "WhatsApp", href: "https://wa.me/351910000000" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="text-white font-bold text-lg tracking-wide">
              DOJA<span className="text-[#1d6ff3]">.</span>TECH
            </a>
            <p className="text-sm text-white/30 leading-relaxed max-w-48">
              Software house especializada em websites, e-commerce e aplicativos.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} Doja Tech. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/25">
            Construído em Next.js · Optimizado para velocidade e conversão
          </p>
        </div>
      </div>
    </footer>
  );
}
