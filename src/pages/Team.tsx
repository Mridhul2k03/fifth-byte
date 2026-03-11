import { Github, Linkedin, Twitter } from "lucide-react";

export function Team() {
  const team = [
    { 
      name: "Alex Turing", 
      role: "CEO & Founder", 
      bio: "Former distinguished engineer at big tech. Alex guides the architectural vision and business strategy.",
      initials: "AT", 
      color: "from-indigo-500 to-purple-500" 
    },
    { 
      name: "Sarah Connor", 
      role: "Lead Designer", 
      bio: "Award-winning creative director specializing in immersive web experiences and glassmorphism aesthetics.",
      initials: "SC", 
      color: "from-purple-500 to-pink-500" 
    },
    { 
      name: "Jane Doe", 
      role: "Frontend Engineer", 
      bio: "React and Tailwind wizard. If it animates on the screen, Jane probably wrote the code for it.",
      initials: "JD", 
      color: "from-pink-500 to-rose-500" 
    },
    { 
      name: "John Smith", 
      role: "Backend Architect", 
      bio: "Obsessed with latency, throughput, and perfectly normalized databases. Keeps the servers humming.",
      initials: "JS", 
      color: "from-blue-500 to-indigo-500" 
    },
    { 
      name: "Elena Rostova", 
      role: "AI Specialist", 
      bio: "PhD in Machine Learning. Elena builds custom LLM pipelines that give our clients their competitive edge.",
      initials: "ER", 
      color: "from-emerald-500 to-teal-500" 
    },
    { 
      name: "David Chen", 
      role: "DevOps Engineer", 
      bio: "Automates everything. David ensures our CI/CD pipelines are flawless and deployments are boring.",
      initials: "DC", 
      color: "from-orange-500 to-red-500" 
    },
  ];

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative z-10">Meet The Experts</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto relative z-10">We form specialized strike teams of senior talent to solve your hardest problems without the overhead.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center">
            
            {/* Top Glow */}
            <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-linear-to-b ${member.color} rounded-full mix-blend-screen filter blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`}></div>

            <div className={`w-28 h-28 rounded-full bg-linear-to-br ${member.color} mb-6 flex items-center justify-center text-4xl font-extrabold text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 border-4 border-slate-900 relative z-10`}>
              {member.initials}
            </div>
            
            <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
            <p className={`text-sm font-semibold text-transparent bg-clip-text bg-linear-to-r ${member.color} mb-4`}>{member.role}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 grow">
              {member.bio}
            </p>

            <div className="flex justify-center gap-4 mt-auto">
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-indigo-400 transition-all text-gray-400">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-purple-400 transition-all text-gray-400">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-pink-400 transition-all text-gray-400">
                <Github className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
