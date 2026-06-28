import type { Dict } from "@/app/[lang]/dictionaries";

interface ServicesProps {
  dict: Dict["services"];
}

const servicesMeta = [
  {
    id: "ecommerce",
    accent: "#1d6ff3",
    image: "/images/services/marcheplus.png",
    url: "marcheplus.fr",
    metrics: null,
  },
  {
    id: "aplicativos",
    accent: "#1d6ff3",
    image: "/images/services/novexa-dashboard.png",
    url: "app.novexa.io",
    metrics: null,
  },
  {
    id: "pastelaria-gastronomia",
    accent: "#1d6ff3",
    image: "/images/services/pastelaria.png",
    url: "douceur-patisserie.fr",
    metrics: null,
  },
  {
    id: "websites",
    accent: "#1d6ff3",
    image: "/images/services/electronics.png",
    url: "technova.fr",
    metrics: ["98", "100", "95"],
  },
  {
    id: "moda-lifestyle",
    accent: "#1d6ff3",
    image: "/images/services/maison-k-paris.png",
    url: "maisonkparis.com",
    metrics: null,
  },
] as const;

export default function Services({ dict }: ServicesProps) {
  const metricLabels = [
    dict.metrics.performance,
    dict.metrics.seo,
    dict.metrics.accessibility,
  ];

  return (
    <section id="servicos">
      {servicesMeta.map((meta, idx) => {
        const t = dict.items[meta.id as keyof typeof dict.items];
        return (
          <div
            key={meta.id}
            className="relative min-h-screen flex flex-col overflow-hidden"
            style={{
              background:
                idx % 2 === 0
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
                background: `radial-gradient(ellipse at center, ${meta.accent}10 0%, transparent 70%)`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />

            {/* === TEXT AT TOP — Tesla pattern === */}
            <div className="relative z-10 flex flex-col items-center text-center pt-28 pb-10 px-6">
              <span className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                0{idx + 1} — {t.name}
              </span>
              <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-[-0.02em] max-w-2xl">
                {t.name}
              </h2>
              <p className="mt-3 text-xl text-[#9ca3af] max-w-lg leading-relaxed">
                {t.tagline}
              </p>
              <p className="mt-2 text-sm text-[#6b7280]">{t.detail}</p>
            </div>

            {/* === VISUAL CENTER — screenshot real em chrome frame === */}
            <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-8 w-full">
              <div className="w-full max-w-3xl mx-auto space-y-4">
                {/* Browser chrome */}
                <div className="rounded-xl overflow-hidden shadow-[0_0_80px_rgba(29,111,243,0.12)] border border-[#1f1f2e]">
                  {/* Chrome bar */}
                  <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#0a0a12] border-b border-[#1f1f2e] flex-shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    <div className="ml-3 flex items-center gap-1.5 flex-1 max-w-xs bg-[#1a1a28] rounded h-5 px-2">
                      <svg
                        className="w-2.5 h-2.5 text-[#6b7280] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span className="text-[10px] text-[#6b7280] font-mono truncate">
                        {meta.url}
                      </span>
                    </div>
                  </div>
                  {/* Screenshot */}
                  <div className="relative h-72 lg:h-96 bg-[#0b0b0e] overflow-hidden">
                    <img
                      src={meta.image}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: "top" }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0b0b0e] to-transparent" />
                  </div>
                </div>

                {/* Métricas Lighthouse — só no serviço Websites */}
                {meta.metrics && (
                  <div className="flex items-center justify-center gap-3">
                    {meta.metrics.map((val, i) => (
                      <div
                        key={metricLabels[i]}
                        className="flex flex-col items-center bg-[#0f0f18] border border-[#1f1f2e] rounded-lg px-4 py-2"
                      >
                        <span className="text-lg font-black text-[#1d6ff3]">{val}</span>
                        <span className="text-[10px] text-[#6b7280] uppercase tracking-wide">
                          {metricLabels[i]}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* === BUTTONS AT BOTTOM — Tesla pattern === */}
            <div className="relative z-10 flex flex-col items-center pb-12 px-6 gap-3">
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#contacto"
                  className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-sm hover:bg-white/90 transition-colors"
                >
                  {dict.cta1}
                </a>
                <a
                  href="#processo"
                  className="px-8 py-3 border border-white/30 text-white font-semibold text-sm rounded-sm hover:bg-white/05 transition-colors"
                >
                  {dict.cta2}
                </a>
              </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0b0b0e] to-transparent pointer-events-none" />
          </div>
        );
      })}
    </section>
  );
}
