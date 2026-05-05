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
        className="text-center mb-20 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Works</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">Discover what we've been building. From open-source libraries to full-scale enterprise architectures, our work spans the entire digital spectrum.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group flex flex-col p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-500 overflow-hidden relative backdrop-blur-3xl"
          >
            
            {/* Ambient Background Glow */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${p.color} rounded-full mix-blend-screen filter blur-[80px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none`}></div>
            
            <div className="flex justify-between items-start mb-8 z-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-white/5 group-hover:scale-110 transition-transform duration-300`}>
                0{i+1}
              </div>
            </div>

            <div className="grow z-10">
              <h3 className="text-3xl font-bold mb-4 text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {p.title}
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                {p.desc}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8 border-t border-white/[0.05] z-10 mt-auto">
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-md border border-indigo-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
