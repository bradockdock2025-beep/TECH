import type { Dict } from "@/app/[lang]/dictionaries";

interface TrustBandProps {
  dict: Dict["trust"];
}

export default function TrustBand({ dict }: TrustBandProps) {
  return (
    <div className="border-y border-white/[0.06] bg-[#111118]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/[0.06]">
          {dict.stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <p className="text-4xl font-black text-white tracking-tight tabular-nums">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-white/40 uppercase tracking-widest leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
