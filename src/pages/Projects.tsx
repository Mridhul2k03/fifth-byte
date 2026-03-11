import { ExternalLink, ArrowRight } from "lucide-react";

export function Projects() {
  const projects = [
    { 
      title: "Project Alpha", 
      desc: "A revolutionary AI tool designed to automate complex data analysis pipelines for enterprise clients. Currently processing petabytes of data daily.", 
      color: "from-blue-500 to-cyan-500",
      image: "bg-slate-900",
      tags: ["React", "Python", "TensorFlow"],
      status: "Live"
    },
    { 
      title: "Beta Platform", 
      desc: "Next-gen e-commerce storefront supporting high-throughput transactions. Features include dynamic cart generation and real-time inventory syncing.", 
      color: "from-purple-500 to-pink-500",
      image: "bg-slate-900",
      tags: ["Next.js", "GraphQL", "Stripe"],
      status: "Beta"
    },
    { 
      title: "Gamma System", 
      desc: "Enterprise data visualization solution. Allows executives to slice and dice their company's analytics on a secure, beautiful dashboard.", 
      color: "from-indigo-500 to-purple-500",
      image: "bg-slate-900",
      tags: ["TypeScript", "D3.js", "PostgreSQL"],
      status: "In Development"
    },
    { 
      title: "Delta Engine", 
      desc: "A powerful physics engine for web applications, enabling 3D simulations directly in the browser with near-native performance.", 
      color: "from-rose-500 to-orange-500",
      image: "bg-slate-900",
      tags: ["WebGL", "Rust", "WASM"],
      status: "Open Source"
    },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover what we've been building. From open-source libraries to full-scale enterprise architectures, our work spans the entire digital spectrum.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group flex flex-col p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden relative">
            
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${p.color} rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}></div>
            
            <div className="flex justify-between items-start mb-6 z-10">
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${p.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300`}>
                0{i+1}
              </div>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gray-300 border border-white/5 backdrop-blur-md">
                  {p.status}
                </span>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </button>
              </div>
            </div>

            <div className="grow z-10">
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {p.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {p.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t border-white/10 z-10 mt-auto">
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-sm font-bold text-white flex items-center gap-2 group/btn hover:text-purple-400 transition-colors">
                View Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
