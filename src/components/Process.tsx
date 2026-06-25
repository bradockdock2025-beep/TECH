const steps = [
  {
    number: "01",
    name: "Diagnóstico",
    duration: "1–2 dias",
    description:
      "Percebemos o negócio, os objetivos reais e os constrangimentos. Nenhuma linha de código antes de haver clareza sobre o que precisa de existir.",
  },
  {
    number: "02",
    name: "Arquitectura",
    duration: "2–4 dias",
    description:
      "Estrutura técnica, stack e plano de entrega. Documento claro com o que vai ser construído, prazo e custo — sem surpresas a meio.",
  },
  {
    number: "03",
    name: "Desenvolvimento",
    duration: "2–5 semanas",
    description:
      "Ciclos curtos com visibilidade contínua. Versões intermédias para validação antes de avançar. Sem desaparecimentos.",
  },
  {
    number: "04",
    name: "Lançamento e suporte",
    duration: "1–3 dias + 30 dias grátis",
    description:
      "Deploy, testes, documentação. Disponíveis nos 30 dias seguintes para corrigir qualquer problema sem custo adicional.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 bg-[#0b0b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Como trabalhamos
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-white tracking-[-0.02em] leading-tight">
            Processo previsível.
            <br />
            <span className="text-white/40">Entrega garantida.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group bg-[#0b0b0e] p-8 hover:bg-[#111118] transition-colors relative"
            >
              {/* Accent line hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1d6ff3] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <div className="text-[#1d6ff3] text-xs font-bold tracking-[0.2em] mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-black text-white mb-1">{step.name}</h3>
              <div className="flex items-center gap-1.5 mb-4">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs text-white/30">{step.duration}</span>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
