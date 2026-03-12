import { CheckCircle2 } from "lucide-react";

export function Technologies() {
  const categories = [
    {
      title: "Frontend Experience",
      desc: "Creating pixel-perfect, highly interactive user interfaces.",
      color: "text-pink-400",
      bgHover: "hover:bg-pink-500/10 hover:border-pink-500/30",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      title: "Backend Architecture",
      desc: "Scalable, secure, and robust server-side engineering.",
      color: "text-indigo-400",
      bgHover: "hover:bg-indigo-500/10 hover:border-indigo-500/30",
      items: ["Python", "Django", "PostgreSQL", "MySQL", "Redis","Celery"]
    },
    {
      title: "Cloud & DevOps",
      desc: "Automated deployments and resilient infrastructure.",
      color: "text-purple-400",
      bgHover: "hover:bg-purple-500/10 hover:border-purple-500/30",
      items: ["AWS", "Railway", "Render", "GitHub Actions", "Cpanel", "Vercel"]
    },
    {
      title: "AI & Data",
      desc: "Intelligent pipelines and large language model integration.",
      color: "text-emerald-400",
      bgHover: "hover:bg-emerald-500/10 hover:border-emerald-500/30",
      items: ["OpenAI", "Gemini", "OpenClaw", "Cloud", "Lovable", "Antigravity"]
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Our Tech Stack</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">We don't chase every new framework. We master the modern tools required to build fast, scalable, and maintainable applications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, idx) => (
          <div key={idx} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-2">{category.title}</h2>
            <p className="text-gray-400 mb-8 pb-6 border-b border-white/5">{category.desc}</p>
            
            <div className="grid grid-cols-2 gap-4 grow">
              {category.items.map((tech, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-slate-900/50 transition-colors duration-300 cursor-default ${category.bgHover}`}>
                  <CheckCircle2 className={`w-5 h-5 ${category.color}`} />
                  <span className="font-semibold text-gray-200">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Banner */}
      <div className="mt-20 p-10 rounded-[2rem] bg-linear-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiLz48L3N2Zz4=')]"></div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-4">Tech Agnostic Problem Solvers</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">While we have our preferred stack, we believe in using the right tool for the job. We seamlessly integrate into existing monorepos, legacy systems, and client-mandated architectures.</p>
        </div>
      </div>
    </div>
  );
}
