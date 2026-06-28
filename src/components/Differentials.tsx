import type { Dict } from "@/app/[lang]/dictionaries";

interface DifferentialsProps {
  dict: Dict["differentials"];
}

const icons = [
  <svg key="clock" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="team" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>,
  <svg key="code" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
  </svg>,
];

export default function Differentials({ dict }: DifferentialsProps) {
  return (
    <section className="py-24 bg-[#111118] border-t border-white/[0.06]">
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

        <div className="grid md:grid-cols-3 gap-6">
          {dict.items.map((diff, i) => (
            <div
              key={diff.title}
              className="group p-8 rounded-xl border border-white/[0.06] hover:border-[#1d6ff3]/30 bg-[#0b0b0e] hover:bg-[#0f0f18] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#1d6ff3]/10 rounded-xl flex items-center justify-center text-[#1d6ff3] mb-6 group-hover:bg-[#1d6ff3]/20 transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-xl font-black text-white mb-1">{diff.title}</h3>
              <p className="text-xs text-[#1d6ff3] uppercase tracking-wide font-semibold mb-4">
                {diff.proof}
              </p>
              <p className="text-sm text-white/50 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
