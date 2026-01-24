import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationData = [
    {
      title: 'Bachelor of Engineering',
      sub: 'Computer Science & Engineering',
      school: 'Shree Dharmasthala Manjunatheshwara Institute of Technology',
      location: 'Ujire, Dakshinakannada, Karnataka',
      result: '8.48 CGPA',
      period: '2022 — Present',
      current: true,
    },
    {
      title: 'Pre-University Course (PUC)',
      sub: 'PCMB (Physics, Chem, Math, Biology)',
      school: 'Karnataka Public School Bidkalkatte',
      location: 'Kundapura, Karnataka',
      result: '92.8%',
      period: '2020 — 2022',
      current: false,
    },
    {
      title: 'Secondary School (SSLC)',
      sub: 'General Education',
      school: 'Morarji Desai Residential School',
      location: 'Koteshwara, Kundapura',
      result: '90.4%',
      period: '2019 — 2020',
      current: false,
    },
  ];

  return (
    <section id="education" className="bg-[#1e1e28] py-16 px-6 lg:px-12 relative overflow-hidden scroll-mt-16 mt-6 shadow-2xl">
      {/* Header */}
        <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          Education
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500"></span>
        </h2>
        <p className="text-[#8c8c8e] mt-3 text-sm max-w-2xl uppercase tracking-widest font-semibold">
          My Educational details
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500 via-gray-800 to-transparent"></div>
        <div className="space-y-12">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-12 group">
              {/* Timeline Node (The Circle) */}
              <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-4 border-[#1e1e28] z-10 flex items-center justify-center transition-all duration-500 ${
                edu.current ? 'bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]' : 'bg-gray-800 group-hover:bg-gray-700'
              }`}>
                {edu.current ? (
                   <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                ) : (
                  <CheckCircle2 size={12} className="text-gray-500 group-hover:text-yellow-500" />
                )}
              </div>

              {/* Content Card */}
              <div className="bg-[#24242f] border border-gray-800 p-6 rounded-sm transition-all duration-300 group-hover:border-yellow-500/30 group-hover:bg-[#282835]">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{edu.title}</h3>
                    <p className="text-yellow-500 text-xs font-mono mt-1">{edu.sub}</p>
                  </div>
                  <div className="flex items-center gap-2 text-[#8c8c8e] font-mono text-xs bg-[#1e1e28] px-3 py-1 border border-gray-800 rounded-full w-fit">
                    <Calendar size={12} className="text-yellow-500" />
                    {edu.period}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-2 border-t border-gray-800/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-sm text-gray-400">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Institution</p>
                      <p className="text-white text-sm leading-tight">{edu.school}</p>
                      <p className="text-gray-500 text-[11px]">{edu.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-500/10 rounded-sm text-yellow-500 font-mono text-xs font-bold">
                      {edu.result.includes('CGPA') ? 'CGPA' : 'percent %'}
                    </div>
                    <div>
                      <p className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">Achievement</p>
                      <p className="text-white text-lg font-black font-mono leading-none">{edu.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}