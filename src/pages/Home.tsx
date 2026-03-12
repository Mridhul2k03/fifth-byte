import { ArrowRight, Code2, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Home() {
  const services = [
    { icon: <Globe className="w-8 h-8 text-indigo-400" />, title: "Web Architecture", description: "Scalable, high-performance web applications built on modern frameworks." },
    { icon: <Cpu className="w-8 h-8 text-purple-400" />, title: "AI Integration", description: "Infusing large language models and machine learning into business workflows." },
    { icon: <Code2 className="w-8 h-8 text-pink-400" />, title: "System Engineering", description: "Backend infrastructure designed for extreme reliability and throughput." }
  ];

  const stats = [
    { value: "10+", label: "Advanced Technologies" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" },
    { value: "10x", label: "Performance Gain" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[100vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] max-w-7xl opacity-30 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
              The Fifth Byte
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10">
            Transforming ideas into digital reality. We build enterprise-grade software with startup-level execution speed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/about" className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-shadow hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
              Our Story <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50 border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">Our Expertise</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Delivering full-stack solutions tailored to scale.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 shadow-inner border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-purple-900/10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-3xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10"
              >
                <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-pink-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-semibold tracking-wide uppercase text-sm">
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
