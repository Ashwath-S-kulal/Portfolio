import React from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 80 },
  { name: "C programming", level: 75 },
  { name: "Java", level: 50 },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#1e1e28] p-8 md:p-12 shadow-2xl scroll-mt-24 my-10 mt-10 rounded-lg">
      {/* Header matching the About section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          Technical Skills
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500"></span>
        </h2>
        <p className="text-[#8c8c8e] mt-6 text-sm max-w-2xl uppercase tracking-widest font-semibold">
          Proficiency in web technologies and core programming languages.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            {/* Label Row */}
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-white uppercase tracking-tighter group-hover:text-yellow-500 transition-colors">
                {skill.name}
              </span>
              <span className="text-[#8c8c8e] text-xs font-mono">{skill.level}%</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#191923] rounded-full h-1.5 overflow-hidden border border-gray-800">
              <div
                className="bg-yellow-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(255,193,7,0.3)]"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Knowledge Tags */}
      <div className="mt-16 flex flex-wrap gap-3">
        {['Tailwind CSS', 'Git/GitHub', 'UI Design', 'Responsive Layouts'].map((tag) => (
          <span key={tag} className="px-4 py-1 bg-[#24242f] text-[#8c8c8e] text-[10px] uppercase font-bold tracking-widest border border-gray-800 rounded-sm">
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}