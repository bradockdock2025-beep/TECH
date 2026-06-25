const projects = [
  {
    category: "E-commerce",
    name: "Doja Paris",
    result: "Plataforma de moda online lançada em 4 semanas, com checkout integrado e gestão de inventário.",
    tags: ["Next.js", "Stripe", "Shopify headless"],
  },
  {
    category: "Website Institucional",
    name: "Studio Arquitetura",
    result: "Site institucional com portfólio visual, 95+ no Lighthouse e integração com Google Analytics.",
    tags: ["Next.js", "Sanity CMS", "SEO técnico"],
  },
  {
    category: "Aplicativo",
    name: "Gestão de Equipas",
    result: "Dashboard interno com autenticação por roles, gestão de tarefas e relatórios exportáveis.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-[#0b0b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Projetos
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-white tracking-[-0.02em] leading-tight">
            Trabalho entregue.
            <br />
            <span className="text-white/40">Não prometido.</span>
          </h2>
        </div>

        {/* Note */}
        <div className="flex items-center justify-center gap-2 text-sm text-white/30 mb-12 mt-6">
          <svg className="w-4 h-4 text-[#1d6ff3]/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Imagens reais em preparação — secção atualizada em breve.
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group border border-white/[0.06] hover:border-[#1d6ff3]/30 bg-[#111118] hover:bg-[#0f0f18] rounded-xl overflow-hidden transition-all duration-300"
            >
              {/* Placeholder visual */}
              <div className="relative h-52 bg-[#0b0b0e] overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: "linear-gradient(#e8e8ed 1px, transparent 1px), linear-gradient(90deg, #e8e8ed 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Abstract UI sketch */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 space-y-2 opacity-20">
                    <div className="w-full h-3 bg-white rounded-sm" />
                    <div className="w-4/5 h-2 bg-white rounded-sm" />
                    <div className="flex gap-2 mt-3">
                      <div className="w-16 h-7 bg-[#1d6ff3] rounded-sm" />
                      <div className="w-16 h-7 border border-white rounded-sm" />
                    </div>
                  </div>
                </div>
                {/* Corner badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-[#1f1f2e] rounded text-[9px] text-white/30 font-mono">
                  imagem real em breve
                </div>
                {/* Hover blue glow */}
                <div className="absolute inset-0 bg-[#1d6ff3]/0 group-hover:bg-[#1d6ff3]/03 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <span className="text-[#1d6ff3] text-[10px] font-bold uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-lg font-black text-white">{project.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{project.result}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] text-white/40 bg-white/[0.04] border border-white/[0.06] rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
