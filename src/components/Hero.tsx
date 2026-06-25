export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex flex-col items-center overflow-hidden bg-[#0b0b0e]">
      {/* Atmosphere: full-bleed dark gradient with blue depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0e] via-[#0d1117] to-[#0b0b0e]" />

      {/* Radial glow — like Tesla's light on the car */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[500px] bg-[#1d6ff3] opacity-[0.06] rounded-full blur-[160px]" />
      </div>

      {/* Thin grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#e8e8ed 1px, transparent 1px), linear-gradient(90deg, #e8e8ed 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating nav is in layout. Content fills below */}

      {/* === TEXT AT TOP — Tesla pattern === */}
      <div className="relative z-10 flex flex-col items-center text-center pt-36 px-6 flex-1">
        <span className="inline-flex items-center gap-2 text-[#1d6ff3] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d6ff3] animate-pulse" />
          Software House — Portugal
        </span>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-[1] tracking-[-0.03em] max-w-4xl">
          Software que
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #1d6ff3 0%, #60a5fa 60%, #1d6ff3 100%)",
            }}
          >
            sustenta
          </span>
          <br />
          negócios reais.
        </h1>

        <p className="mt-8 text-lg text-[#9ca3af] max-w-md leading-relaxed">
          Construímos websites, e-commerce e aplicativos — para negócios, marcas e projetos pessoais. Do briefing ao deploy.
        </p>
      </div>

      {/* === VISUAL: Abstract tech composition center === */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full px-6 max-w-3xl mx-auto">
        <div className="relative w-full">
          {/* Main browser window */}
          <div className="relative bg-[#0f0f18]/80 border border-[#1f1f2e]/80 rounded-xl overflow-hidden backdrop-blur-sm shadow-[0_0_80px_rgba(29,111,243,0.08)]">
            {/* Chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 bg-[#0a0a12] border-b border-[#1f1f2e]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 max-w-xs bg-[#1f1f2e] rounded h-5 flex items-center px-3">
                <div className="w-2 h-2 text-[#6b7280] mr-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <span className="text-xs text-[#6b7280] font-mono">seuprojeto.com</span>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="w-16 h-4 bg-[#1d6ff3]/30 rounded-sm" />
              </div>
            </div>

            {/* Page content */}
            <div className="p-6 pb-4">
              {/* Nav */}
              <div className="flex items-center justify-between mb-5">
                <div className="w-16 h-3 bg-[#1d6ff3]/70 rounded-sm" />
                <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-2.5 bg-[#e8e8ed]/10 rounded-sm" />
                  ))}
                </div>
                <div className="w-20 h-6 bg-[#1d6ff3]/50 rounded-sm" />
              </div>

              {/* Hero banner */}
              <div className="relative h-32 rounded-lg overflow-hidden mb-4 bg-gradient-to-br from-[#0d1117] to-[#111827] border border-[#1f1f2e]">
                <div className="absolute inset-0 flex flex-col justify-center px-6">
                  <div className="w-1/2 h-5 bg-white/15 rounded-sm mb-2" />
                  <div className="w-1/3 h-3 bg-white/08 rounded-sm mb-4" />
                  <div className="flex gap-2">
                    <div className="w-20 h-7 bg-[#1d6ff3]/80 rounded-sm" />
                    <div className="w-20 h-7 border border-white/20 rounded-sm" />
                  </div>
                </div>
                {/* Glow in banner */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-20 h-20 bg-[#1d6ff3]/10 rounded-full blur-2xl" />
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-4 gap-2.5">
                {[
                  { h: "bg-[#1d6ff3]/20", accent: true },
                  { h: "bg-[#1f1f2e]", accent: false },
                  { h: "bg-[#1f1f2e]", accent: false },
                  { h: "bg-[#1f1f2e]", accent: false },
                ].map((card, i) => (
                  <div key={i} className={`rounded ${card.h} border border-[#1f1f2e] p-3 space-y-2`}>
                    <div className={`w-5 h-5 rounded-sm ${card.accent ? "bg-[#1d6ff3]/60" : "bg-white/10"}`} />
                    <div className="w-full h-2 bg-white/08 rounded-sm" />
                    <div className="w-3/4 h-2 bg-white/05 rounded-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side floating panels */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
            {[60, 85, 45, 70].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-4 bg-[#1d6ff3]/40 rounded-full" />
                <div
                  className="h-6 bg-[#111118] border border-[#1f1f2e] rounded flex items-center px-2 gap-1.5"
                  style={{ width: `${w}px` }}
                >
                  <div className="w-1.5 h-1.5 bg-[#1d6ff3]/60 rounded-full" />
                  <div className="flex-1 h-1.5 bg-white/08 rounded-sm" />
                </div>
              </div>
            ))}
          </div>

          <div className="absolute -right-6 top-4 hidden lg:block space-y-2">
            {[40, 55, 35].map((w, i) => (
              <div key={i} className="h-5 bg-[#111118] border border-[#1f1f2e] rounded flex items-center px-2 gap-1.5" style={{ width: `${w + 20}px` }}>
                <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-[#28c840]" : "bg-[#1f1f2e]"}`} />
                <div className="flex-1 h-1.5 bg-white/05 rounded-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* === BUTTONS AT BOTTOM — Tesla pattern === */}
      <div className="relative z-10 w-full flex flex-col items-center pb-10 px-6 gap-4">
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contacto"
            className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-sm hover:bg-white/90 transition-colors"
          >
            Iniciar projeto
          </a>
          <a
            href="#servicos"
            className="px-8 py-3 border border-white/30 text-white font-semibold text-sm rounded-sm hover:bg-white/05 transition-colors"
          >
            Ver serviços
          </a>
        </div>

        {/* Scroll cue */}
        <div className="flex flex-col items-center gap-1.5 mt-2 opacity-40">
          <span className="text-[10px] text-white uppercase tracking-[0.15em]">Scroll</span>
          <svg className="w-4 h-4 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0b0b0e] to-transparent pointer-events-none" />
    </section>
  );
}
