import { Target, Zap, Shield, Users } from "lucide-react";

export function About() {
  const values = [
    { icon: <Target className="w-6 h-6 text-indigo-400" />, title: "Precision", desc: "We measure twice and cut once. Every line of code serves a specific business purpose." },
    { icon: <Zap className="w-6 h-6 text-purple-400" />, title: "Velocity", desc: "Startup speed with enterprise reliability. We ship fast without breaking things." },
    { icon: <Shield className="w-6 h-6 text-pink-400" />, title: "Integrity", desc: "Security and stability aren't afterthoughts; they are the foundation of our work." },
    { icon: <Users className="w-6 h-6 text-rose-400" />, title: "Collaboration", desc: "We don't work for you; we work with you as an extension of your own team." },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Hero Section */}
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10">
          The <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">Fifth Byte</span> Story
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed relative z-10">
          We are a collective of digital craftsmen, engineers, and designers obsessed with pushing the boundaries of what's possible on the web.
        </p>
      </div>

      {/* Origin Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
        <div className="order-2 md:order-1 relative group">
          <div className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-600 rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-50 blur-lg"></div>
          <div className="relative aspect-square md:aspect-auto md:h-[500px] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center p-8">
             <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950 rounded-2xl border border-white/5 flex items-center justify-center text-center p-8 shadow-2xl">
               <span className="text-4xl font-light text-white/50 italic font-serif">"The fifth byte of any data packet contains its soul."</span>
             </div>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6">Our Origins</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            Founded in 2026, The Fifth Byte emerged from a shared frustration with the status quo. We saw too many products that functioned well but felt lifeless, and too many beautiful designs that crumbled under load.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            We built this company to bridge that exact gap. Our mission is to empower innovative startups and forward-thinking enterprises by providing world-class design engineering perfectly married to bleeding-edge technical architecture.
          </p>
          <div className="pt-6 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Why The Name?</h3>
            <p className="text-gray-400">In computing, protocols are structured rigidly. We believe true innovation happens precisely when you understand the rules well enough to invent the soul within them.</p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 border border-white/5 shadow-inner group-hover:scale-110 group-hover:bg-white/10 transition-all">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
