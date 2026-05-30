import React from "react";

const skillGroups = [
  {
    category: "Languages",
    description: "Foundational logic and syntax",
    skills: ["JavaScript", "Java", "C Programming", "Python (ML Basics)"],
    featured: false,
  },
  {
    category: "Frontend Development",
    description: "Building responsive & interactive UIs",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit"],
    featured: true,
  },
  {
    category: "Backend & Database",
    description: "Server-side logic and data persistence",
    skills: ["Node.js", "Express.js", "MongoDB", "SQL", "Cloudinary"],
    featured: false,
  },
  {
    category: "Core CS Fundamentals",
    description: "Theoretical foundations and systems engineering",
    skills: ["DBMS", "Operating Systems (OS)", "Computer Networks (CN)", "Data Structures & Algorithms (DSA)"],
    featured: false,
  },
  {
    category: "Tools & DevOps",
    description: "Deployment and version control",
    skills: ["Git", "GitHub", "Vercel", "Render", "Firebase", "Postman", "Brevo (SMTP)", "CI/CD Basics"],
    featured: true,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#1e1e28] p-6 md:p-12 shadow-2xl my-10 border border-gray-800/50 scroll-mt-16">
      <header className="border-b border-gray-800/80 bg-[#1e1e28]/40 sticky top-0 backdrop-blur-md z-40 pb-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span className="text-yellow-500">//</span> Technical Skills
            </h1>
            <p className="text-xs text-[#8c8c8e] font-mono mt-1 uppercase tracking-wider">My Technical Knowledge</p>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <div
            key={group.category}
            className={`
              relative overflow-hidden bg-[#24242f] p-8 border border-gray-800 
              hover:border-yellow-500/30 transition-all duration-500 group
              ${group.featured ? "md:col-span-2" : "md:col-span-1"}
            `}
          >
            <div className="absolute -right-4 -top-4 text-6xl font-black text-white/[0.02] group-hover:text-yellow-500/[0.05] transition-colors">
              0{idx + 1}
            </div>

            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">
              {group.category}
            </h3>
            <p className="text-[#8c8c8e] text-xs mb-6 font-medium uppercase tracking-tighter">
              {group.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-[#191923] text-white/70 text-[11px] font-bold rounded border border-gray-700/50 group-hover:border-gray-600 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-yellow-500 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </section>
  );
}