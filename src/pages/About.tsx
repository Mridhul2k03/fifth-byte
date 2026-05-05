import { Target, Zap, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const values = [
    { icon: <Target className="w-8 h-8 text-indigo-400" />, title: "Precision", desc: "We measure twice and cut once. Every line of code serves a specific business purpose." },
    { icon: <Zap className="w-8 h-8 text-purple-400" />, title: "Velocity", desc: "Startup speed with enterprise reliability. We ship fast without breaking things." },
    { icon: <Shield className="w-8 h-8 text-pink-400" />, title: "Integrity", desc: "Security and stability aren't afterthoughts; they are the foundation of our work." },
    { icon: <Users className="w-8 h-8 text-rose-400" />, title: "Collaboration", desc: "We don't work for you; we work with you as an extension of your own team." },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-32 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none"></div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 relative z-10 tracking-tighter leading-none">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Fifth Byte</span> <br/>Story
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed relative z-10">
          We are a collective of digital craftsmen, engineers, and designers obsessed with pushing the boundaries of what's possible on the web.
        </p>
      </motion.div>

      {/* Origin Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-40">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="order-2 md:order-1 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-700 blur-2xl"></div>
          <div className="relative aspect-square md:aspect-auto md:h-[600px] bg-black border border-white/5 rounded-[3rem] overflow-hidden flex items-center justify-center p-12 backdrop-blur-xl">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white/[0.05] via-transparent to-transparent rounded-2xl border border-white/[0.05] flex items-center justify-center text-center p-8 shadow-2xl">
               <span className="text-3xl md:text-5xl font-light text-white/70 italic font-serif leading-tight">"The fifth byte of any data packet contains its soul."</span>
             </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 space-y-8"
        >
          <h2 className="text-5xl font-bold text-white mb-8 tracking-tight">Our Origins</h2>
          <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
            <p>
              Founded in 2026, The Fifth Byte emerged from a shared frustration with the status quo. We saw too many products that functioned well but felt lifeless, and too many beautiful designs that crumbled under load.
            </p>
            <p>
              We built this company to bridge that exact gap. Our mission is to empower innovative startups and forward-thinking enterprises by providing world-class design engineering perfectly married to bleeding-edge technical architecture.
            </p>
          </div>
          <div className="pt-8 border-t border-white/10 mt-12">
            <h3 className="text-2xl font-bold text-white mb-4">Why The Name?</h3>
            <p className="text-lg text-gray-400 font-light leading-relaxed">In computing, protocols are structured rigidly. We believe true innovation happens precisely when you understand the rules well enough to invent the soul within them.</p>
          </div>
        </motion.div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tighter"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">Core Values</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all duration-500 group backdrop-blur-md"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] flex items-center justify-center mb-8 border border-white/[0.05] shadow-inner group-hover:scale-110 group-hover:bg-white/[0.1] transition-all duration-500">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{v.title}</h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
