import type { Dict } from "@/app/[lang]/dictionaries";

interface FooterProps {
  dict: Dict["footer"];
}

export default function Footer({ dict }: FooterProps) {
  const footerLinks = [
    {
      title: dict.servicesTitle,
      links: [
        { label: "Websites", href: "#servicos" },
        { label: "E-commerce", href: "#servicos" },
        { label: "Applications", href: "#servicos" },
      ],
    },
    {
      title: dict.companyTitle,
      links: [
        { label: dict.howWeWork, href: "#processo" },
        { label: dict.projects, href: "#projetos" },
        { label: dict.contact, href: "#contacto" },
      ],
    },
    {
      title: dict.contactTitle,
      links: [
        { label: "hello@doja.tech", href: "mailto:hello@doja.tech" },
        { label: "WhatsApp", href: "https://wa.me/351910000000" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-black/[0.08] bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#">
              <img src="/images/logo-text.png" alt="Techdoja" className="h-7 w-auto" />
            </a>
            <p className="text-sm text-black/40 leading-relaxed max-w-48">
              {dict.description}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h4 className="text-[10px] font-bold text-black/40 uppercase tracking-[0.2em]">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-black/60 hover:text-black transition-colors"
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
        <div className="mt-16 pt-6 border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-black/40">
            © {new Date().getFullYear()} Tech Doja. {dict.allRights}
          </p>
          <p className="text-xs text-black/40">{dict.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
