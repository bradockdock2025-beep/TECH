import type { Dict } from "@/app/[lang]/dictionaries";

interface ProcessProps {
  dict: Dict["process"];
}

export default function Process({ dict }: ProcessProps) {
  return (
    <section id="processo" className="py-24 bg-[#0b0b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {dict.label}
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-white tracking-[-0.02em] leading-tight">
            {dict.title}
            <br />
            <span className="text-white/40">{dict.title2}</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {dict.steps.map((step) => (
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
