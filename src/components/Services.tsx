const services = [
  {
    id: "websites",
    name: "Websites",
    tagline: "A presença online que representa o nível do seu negócio.",
    detail: "Next.js + TypeScript. Core Web Vitals acima de 90. CMS integrado se precisar.",
    accent: "#1d6ff3",
    visual: (
      <div className="w-full max-w-2xl mx-auto space-y-3">
        {/* Browser chrome */}
        <div className="bg-[#0f0f18] border border-[#1f1f2e] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(29,111,243,0.1)]">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0a0a12] border-b border-[#1f1f2e]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <div className="ml-3 flex-1 max-w-sm bg-[#1f1f2e] rounded h-4 flex items-center px-2">
              <span className="text-[10px] text-[#6b7280] font-mono">seunegocio.pt</span>
            </div>
          </div>
          <div className="p-5 space-y-3">
            {/* Full-width hero banner */}
            <div className="relative h-36 rounded-lg overflow-hidden bg-gradient-to-br from-[#0b0b0e] to-[#111827] border border-[#1f1f2e] flex items-center px-8">
              <div className="space-y-2 z-10">
                <div className="w-48 h-6 bg-white/12 rounded-sm" />
                <div className="w-32 h-4 bg-white/07 rounded-sm" />
                <div className="flex gap-2 mt-3">
                  <div className="w-24 h-8 bg-[#1d6ff3] rounded-sm" />
                  <div className="w-24 h-8 border border-white/20 rounded-sm" />
                </div>
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#1d6ff3]/10 to-transparent" />
            </div>
            {/* Content grid */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-[#0b0b0e] border border-[#1f1f2e] rounded-lg p-3 space-y-2">
                  <div className="w-full h-16 bg-[#1f1f2e] rounded-md" />
                  <div className="w-3/4 h-2.5 bg-white/08 rounded-sm" />
                  <div className="w-1/2 h-2 bg-white/05 rounded-sm" />
                </div>
              ))}
            </div>
            {/* Footer bar */}
            <div className="flex items-center justify-between px-2 py-2">
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => <div key={i} className="w-10 h-2 bg-white/06 rounded-sm" />)}
              </div>
              <div className="w-16 h-2 bg-[#1d6ff3]/30 rounded-sm" />
            </div>
          </div>
        </div>
        {/* Performance badge */}
        <div className="flex items-center justify-center gap-3">
          {[
            { label: "Performance", val: "98" },
            { label: "SEO", val: "100" },
            { label: "Accessibility", val: "95" },
          ].map((m) => (
            <div key={m.label} className="flex flex-col items-center bg-[#0f0f18] border border-[#1f1f2e] rounded-lg px-4 py-2">
              <span className="text-lg font-black text-[#1d6ff3]">{m.val}</span>
              <span className="text-[10px] text-[#6b7280] uppercase tracking-wide">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    tagline: "Lojas online que vendem enquanto dorme.",
    detail: "Stripe, MB Way, gestão de stock. Checkout testado em produção.",
    accent: "#1d6ff3",
    visual: (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-[#0f0f18] border border-[#1f1f2e] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(29,111,243,0.08)]">
          {/* Store header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#1f1f2e]">
            <div className="w-20 h-4 bg-[#1d6ff3]/60 rounded-sm" />
            <div className="flex gap-3">
              {[1, 2].map((i) => <div key={i} className="w-12 h-3 bg-white/08 rounded-sm" />)}
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white/08 rounded-full" />
              <div className="relative">
                <div className="w-6 h-6 bg-white/08 rounded-full" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1d6ff3] rounded-full flex items-center justify-center">
                  <span className="text-[7px] text-white font-bold">3</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 divide-x divide-[#1f1f2e]">
            {/* Product grid */}
            <div className="col-span-3 p-4">
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`bg-[#0b0b0e] border rounded-lg overflow-hidden ${i === 1 ? "border-[#1d6ff3]/40" : "border-[#1f1f2e]"}`}>
                    <div className="h-20 bg-gradient-to-br from-[#1f1f2e] to-[#0b0b0e]" />
                    <div className="p-2.5 space-y-1.5">
                      <div className="w-full h-2.5 bg-white/08 rounded-sm" />
                      <div className="flex justify-between items-center">
                        <div className="w-10 h-3 bg-[#1d6ff3]/50 rounded-sm" />
                        <div className="w-5 h-5 bg-[#1d6ff3]/30 rounded flex items-center justify-center">
                          <span className="text-[8px] text-[#1d6ff3]">+</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart sidebar */}
            <div className="col-span-2 p-4 space-y-3">
              <div className="text-[10px] text-[#6b7280] uppercase tracking-widest font-semibold">Carrinho</div>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-2 items-center">
                    <div className="w-8 h-8 bg-[#1f1f2e] rounded flex-shrink-0" />
                    <div className="flex-1 space-y-1">
                      <div className="w-full h-2 bg-white/08 rounded-sm" />
                      <div className="w-8 h-2 bg-[#1d6ff3]/40 rounded-sm" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#1f1f2e] pt-2 space-y-1.5">
                <div className="flex justify-between">
                  <div className="w-10 h-2.5 bg-white/06 rounded-sm" />
                  <div className="w-12 h-2.5 bg-white/10 rounded-sm" />
                </div>
                <div className="w-full h-8 bg-[#1d6ff3] rounded-md flex items-center justify-center">
                  <div className="w-16 h-2.5 bg-white/50 rounded-sm" />
                </div>
              </div>
              {/* Payment icons */}
              <div className="flex gap-1.5 flex-wrap">
                {["VISA", "MB", "PP"].map((p) => (
                  <div key={p} className="px-2 py-1 bg-[#1f1f2e] rounded text-[8px] text-[#6b7280] font-mono">{p}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "aplicativos",
    name: "Aplicativos",
    tagline: "Software à medida para os processos únicos do seu negócio.",
    detail: "React, Node.js, PostgreSQL. Deploy em Vercel ou infra própria. Código entregue no repositório.",
    accent: "#1d6ff3",
    visual: (
      <div className="w-full max-w-2xl mx-auto flex gap-4 items-center justify-center">
        {/* Mobile app */}
        <div className="w-36 bg-[#0f0f18] border border-[#1f1f2e] rounded-[20px] overflow-hidden flex-shrink-0 shadow-[0_0_40px_rgba(29,111,243,0.12)]">
          <div className="h-5 bg-[#0a0a12] flex items-center justify-center gap-1">
            <div className="w-10 h-1.5 bg-[#1f1f2e] rounded-full" />
          </div>
          <div className="p-3 space-y-2.5">
            {/* Status bar */}
            <div className="flex justify-between items-center">
              <div className="w-6 h-2 bg-white/10 rounded-sm" />
              <div className="w-2 h-2 rounded-full bg-[#1d6ff3]/60" />
            </div>
            {/* Big metric */}
            <div className="bg-gradient-to-b from-[#1d6ff3]/20 to-[#0b0b0e] border border-[#1d6ff3]/20 rounded-lg p-3 text-center">
              <div className="w-full h-6 bg-white/12 rounded-sm mb-1 mx-auto" />
              <div className="w-1/2 h-2 bg-white/06 rounded-sm mx-auto" />
            </div>
            {/* Menu items */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${i === 1 ? "bg-[#1d6ff3]/10 border border-[#1d6ff3]/20" : ""}`}>
                <div className={`w-5 h-5 rounded flex-shrink-0 ${i === 1 ? "bg-[#1d6ff3]/40" : "bg-[#1f1f2e]"}`} />
                <div className="flex-1 h-2.5 bg-white/08 rounded-sm" />
              </div>
            ))}
          </div>
          <div className="h-5 bg-[#0a0a12] flex items-center justify-center gap-3">
            {[1, 2, 3].map((i) => <div key={i} className={`w-3 h-3 rounded-sm ${i === 1 ? "bg-[#1d6ff3]/50" : "bg-[#1f1f2e]"}`} />)}
          </div>
        </div>

        {/* Dashboard */}
        <div className="flex-1 bg-[#0f0f18] border border-[#1f1f2e] rounded-xl overflow-hidden shadow-[0_0_60px_rgba(29,111,243,0.06)]">
          {/* Top bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1f1f2e] bg-[#0a0a12]">
            <div className="w-4 h-4 bg-[#1d6ff3]/40 rounded-sm" />
            <div className="flex-1 h-3 bg-white/06 rounded-sm" />
            <div className="w-6 h-6 rounded-full bg-[#1d6ff3]/20 border border-[#1d6ff3]/30" />
          </div>
          <div className="p-4 space-y-3">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { v: "2.4k", l: "Utilizadores" },
                { v: "98%", l: "Uptime" },
                { v: "12ms", l: "Resposta" },
              ].map((s) => (
                <div key={s.l} className="bg-[#0b0b0e] border border-[#1f1f2e] rounded-lg p-2.5 text-center">
                  <div className="text-xs font-bold text-white">{s.v}</div>
                  <div className="text-[9px] text-[#6b7280] mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div className="bg-[#0b0b0e] border border-[#1f1f2e] rounded-lg p-3">
              <div className="flex items-end gap-1 h-16">
                {[35, 55, 42, 78, 60, 90, 72, 85, 65, 95, 80, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: `rgba(29, 111, 243, ${0.3 + (h / 100) * 0.5})`,
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Table rows */}
            <div className="space-y-1.5">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-3 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1d6ff3]/60" />
                  <div className="flex-1 h-2.5 bg-white/08 rounded-sm" />
                  <div className="w-12 h-2.5 bg-[#1d6ff3]/30 rounded-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos">
      {services.map((service, idx) => (
        <div
          key={service.id}
          className="relative min-h-screen flex flex-col overflow-hidden"
          style={{
            background: idx % 2 === 0
              ? "linear-gradient(180deg, #0b0b0e 0%, #0d1117 50%, #0b0b0e 100%)"
              : "linear-gradient(180deg, #0b0b0e 0%, #0a0a10 50%, #0b0b0e 100%)",
          }}
        >
          {/* Subtle separator */}
          {idx > 0 && (
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1f1f2e] to-transparent" />
          )}

          {/* Ambient blue glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: "600px",
              height: "400px",
              background: `radial-gradient(ellipse at center, ${service.accent}10 0%, transparent 70%)`,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* === TEXT AT TOP — Tesla pattern === */}
          <div className="relative z-10 flex flex-col items-center text-center pt-28 pb-10 px-6">
            <span className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              0{idx + 1} — {service.name}
            </span>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-[-0.02em] max-w-2xl">
              {service.name}
            </h2>
            <p className="mt-3 text-xl text-[#9ca3af] max-w-lg leading-relaxed">
              {service.tagline}
            </p>
            <p className="mt-2 text-sm text-[#6b7280]">{service.detail}</p>
          </div>

          {/* === VISUAL CENTER — the "product photo" === */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8 w-full">
            {service.visual}
          </div>

          {/* === BUTTONS AT BOTTOM — Tesla pattern === */}
          <div className="relative z-10 flex flex-col items-center pb-12 px-6 gap-3">
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contacto"
                className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-sm hover:bg-white/90 transition-colors"
              >
                Pedir orçamento
              </a>
              <a
                href="#processo"
                className="px-8 py-3 border border-white/30 text-white font-semibold text-sm rounded-sm hover:bg-white/05 transition-colors"
              >
                Como trabalhamos
              </a>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0b0b0e] to-transparent pointer-events-none" />
        </div>
      ))}
    </section>
  );
}
