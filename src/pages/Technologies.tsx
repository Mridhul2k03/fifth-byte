import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Our Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Stack</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">We don't chase every new framework. We master the modern tools required to build fast, scalable, and maintainable applications.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] flex flex-col backdrop-blur-xl transition-all duration-500"
          >
            <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">{category.title}</h2>
            <p className="text-gray-400 mb-8 pb-6 border-b border-white/[0.05] text-lg font-light">{category.desc}</p>
            
            <div className="grid grid-cols-2 gap-4 grow">
              {category.items.map((tech, i) => (
                <div key={i} className={`flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-black/50 transition-colors duration-300 cursor-default ${category.bgHover}`}>
                  <CheckCircle2 className={`w-5 h-5 ${category.color}`} />
                  <span className="font-medium text-gray-300 tracking-wide">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Banner */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-500/20 text-center relative overflow-hidden backdrop-blur-2xl"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">Tech Agnostic Problem Solvers</h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">While we have our preferred stack, we believe in using the right tool for the job. We seamlessly integrate into existing monorepos, legacy systems, and client-mandated architectures.</p>
        </div>
      </motion.div>
    </div>
  );
}
