import { Github, Linkedin, Instagram } from "lucide-react";

export function Team() {
  const team = [
    { 
      name: "Mridhul Krishna", 
      role: "CEO & Founder", 
      bio: "Highly experienced in Backend Development and AI Integration. ",
      initials: "MK", 
      color: "from-indigo-500 to-purple-500",
      instagram: "https://www.instagram.com/__.mridhul.____/",
      linkedin: "https://www.linkedin.com/in/mridhulkrishnatk/",
      github: "https://github.com/Mridhul2k03"
    },
    { 
      name: "Vipin Raj", 
      role: "Full Stack Developer", 
      bio: "Highly experienced in Full Stack Development and UI/UX Design.",
      initials: "VR", 
      color: "from-purple-500 to-pink-500",
      instagram: "https://www.instagram.com/_v_pin__/",
      linkedin: "https://www.linkedin.com/in/vipinraj26/",
      github: "https://github.com/VIPINRAJK26"
    },
    {
      name: "Abhinav",
      role: "Cloud Architect",
      bio: "Expertised in cloud based solutions and network security.",
      initials: "KS",
      color: "from-indigo-500 to-purple-500",
      instagram: "https://www.instagram.com/abhinav._.aks/",
      linkedin: "https://www.linkedin.com/in/abhinavks2002/",
      github: "https://github.com/Mridhul2k03"
    }
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
                <a href="https://www.instagram.com/thefifthbyte/"><Instagram className="w-4 h-4" /></a>
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-purple-400 transition-all text-gray-400">
                <a href="https://www.linkedin.com/company/the-fifth-byte/"><Linkedin className="w-4 h-4" /></a>
              </button>
              <button className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/20 hover:text-pink-400 transition-all text-gray-400">
                <a href="https://github.com/thefifthbyte"><Github className="w-4 h-4" /></a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
