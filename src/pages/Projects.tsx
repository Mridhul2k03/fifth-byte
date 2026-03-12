import { motion } from "framer-motion";

export function Projects() {
  const projects = [
    { 
      title: "E commerce Platform", 
      desc: "High performance e-commerce platform with AI integration and real-time inventory syncing.", 
      color: "from-blue-500 to-cyan-500",
      image: "bg-slate-900",
      tags: ["React", "Python", "Redis"],
      status: "Live"
    },
    { 
      title: "Job Portals", 
      desc: "Job portals for various industries with AI integration and real-time job matching.", 
      color: "from-purple-500 to-pink-500",
      image: "bg-slate-900",
      tags: ["React", "PostgreSQL", "Python"],
      status: "Live"
    },
    { 
      title: "Static Website", 
      desc: "Static website for a local business with AI integration and real-time job matching.", 
      color: "from-indigo-500 to-purple-500",
      image: "bg-slate-900",
      tags: ["React", "Next.js"],
      status: "Live"
    },
    { 
      title: "CRMS & Dashboard", 
      desc: "Customer Relationship Management System for small businesses with AI integration and real-time job matching.", 
      color: "from-rose-500 to-orange-500",
      image: "bg-slate-900",
      tags: ["React", "Python", "MySQL"],
      status: "Live"
    },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Projects</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Discover what we've been building. From open-source libraries to full-scale enterprise architectures, our work spans the entire digital spectrum.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group flex flex-col p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 overflow-hidden relative"
          >
            
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${p.color} rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}></div>
            
            <div className="flex justify-between items-start mb-6 z-10">
              <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${p.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300`}>
                0{i+1}
              </div>
              {/* <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-gray-300 border border-white/5 backdrop-blur-md">
                  {p.status}
                </span>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </button>
              </div> */}
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
              {/* <button className="text-sm font-bold text-white flex items-center gap-2 group/btn hover:text-purple-400 transition-colors">
                View Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
