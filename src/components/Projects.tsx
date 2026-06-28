import type { Dict } from "@/app/[lang]/dictionaries";

interface ProjectsProps {
  dict: Dict["projects"];
}

const projectsMeta = [
  {
    tags: ["Next.js", "Stripe", "Shopify headless"],
    image: "/images/projects/doja-paris.png",
    imagePosition: "top",
  },
  {
    tags: ["Next.js", "Sanity CMS", "SEO técnico"],
    image: "/images/projects/nova-studio.png",
    imagePosition: "top",
  },
  {
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/images/projects/novexa-app.png",
    imagePosition: "top",
  },
  {
    tags: ["Next.js", "Stripe", "Redis", "PostgreSQL"],
    image: "/images/projects/marcheplus.png",
    imagePosition: "top",
  },
];

export default function Projects({ dict }: ProjectsProps) {
  return (
    <section id="projetos" className="py-24 bg-[#0b0b0e] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#1d6ff3] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            {dict.label}
          </p>
          <h2 className="text-5xl lg:text-6xl font-black text-white tracking-[-0.02em] leading-tight">
            {dict.title}
            <br />
            <span className="text-white/40">{dict.title2}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {dict.items.map((project, i) => {
            const meta = projectsMeta[i];
            return (
              <div
                key={project.name}
                className="group border border-white/[0.06] hover:border-[#1d6ff3]/30 bg-[#111118] hover:bg-[#0f0f18] rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Screenshot thumbnail */}
                <div className="relative h-52 bg-[#0b0b0e] overflow-hidden">
                  <img
                    src={meta.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: meta.imagePosition }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111118] to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#0b0b0e]/80 backdrop-blur-sm border border-white/[0.08] rounded text-[9px] text-[#1d6ff3] font-bold uppercase tracking-[0.15em]">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-black text-white">{project.name}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{project.result}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {meta.tags.map((tag) => (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
