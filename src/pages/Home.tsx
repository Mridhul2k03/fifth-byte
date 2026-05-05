import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Cpu, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const services = [
    { icon: <Globe className="w-10 h-10 text-indigo-400" />, title: "Web Architecture", description: "Scalable, high-performance web applications built on modern frameworks." },
    { icon: <Cpu className="w-10 h-10 text-purple-400" />, title: "AI Integration", description: "Infusing large language models and machine learning into business workflows." },
    { icon: <Code2 className="w-10 h-10 text-pink-400" />, title: "System Engineering", description: "Backend infrastructure designed for extreme reliability and throughput." }
  ];

  const stats = [
    { value: "10+", label: "Advanced Technologies" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "10x", label: "Performance Gain" }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          {/* Abstract glowing shapes */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">The Next Generation of Web</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] sm:text-[8vw] font-black tracking-tighter leading-[0.85] text-center mb-8"
          >
            <span className="block text-white text-shadow-sm">THE FIFTH</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              BYTE.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg sm:text-2xl text-gray-400 max-w-2xl text-center mb-12 font-light tracking-wide leading-relaxed"
          >
            Transforming ideas into digital reality. We build enterprise-grade software with startup-level execution speed.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link 
              to="/contact" 
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden flex items-center gap-2 transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section with 3D Glassmorphism Cards */}
      <section className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Expertise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <div className="mb-8 p-4 bg-white/5 inline-block rounded-2xl backdrop-blur-md border border-white/10">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Stats Section */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-5xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-4 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium tracking-widest uppercase text-xs sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
