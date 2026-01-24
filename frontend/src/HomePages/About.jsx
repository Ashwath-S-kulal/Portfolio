import React from 'react';
import { ChevronRight } from 'lucide-react';
import ProfileImg from "../Images/1-removebg-preview.png";

export default function About() {
  const details = [
    { label: "Birthday", value: "19 Sep 2004" },
    { label: "Age", value: "22" },
    { label: "Degree", value: "Engineering" },
    { label: "City", value: "Kundapura, Karnataka" },
    { label: "Phone", value: "+91 8431294514" },
    { label: "Email", value: "ashwathkulal2004@gmail.com" },
    { label: "Language", value: "Kannada" },
    { label: "Website", value: "www.ashwath.com" },
  ];

  return (
    <section id="about" className="bg-[#1e1e28] text-[#8c8c8e] px-8 py-16 scroll-mt-24 rounded-lg shadow-2xl">
      {/* Section Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500"></span>
        </h2>
        <p className="mt-6 leading-relaxed text-justify">
          Hi, I am <span className="text-white font-semibold">Ashwath S</span>, currently studying Computer Science Engineering at S D M Institute of Technology, Ujire. 
          I am deeply interested in frontend development, focusing on creating proactive and versatile digital experiences. 
          With strong problem-solving abilities and a dedication to achieving positive results, I am devoted to giving every 
          user a memorable experience through clean code and intuitive design.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Profile Image with Dashboard Styling */}
        <div className="relative group w-full lg:w-1/3 flex justify-center">
          <div className="absolute inset-0 bg-yellow-500 rounded-lg transform translate-x-3 translate-y-3 -z-10 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
          <div className="bg-[#24242f] p-4 rounded-lg border border-gray-800">
            <img
              src={ProfileImg}
              alt="Ashwath"
              className="rounded-lg w-full "
            />
          </div>
        </div>

        {/* Professional Details Section */}
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl font-bold text-white mb-2">
            Computer Science Engineer & <span className="text-yellow-500">Frontend Developer</span>
          </h3>
          <p className="italic text-sm mb-8 text-gray-400">
            "Turning complex problems into elegant, user-friendly digital solutions."
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
            {details.map((item, index) => (
              <div key={index} className="flex items-center space-x-2 border-b border-gray-800 pb-2">
                <ChevronRight size={16} className="text-yellow-500" />
                <span className="font-bold text-white text-xs uppercase tracking-widest w-24">
                  {item.label}:
                </span>
                <span className="text-sm">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex gap-4">
            <a href="https://ashwathskulalportfolio.vercel.app/public/pdfs/Resumes (Ashwath S).pdf" download="RESUME_Ashwath_S.pdf">
            <button className="bg-yellow-500 text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors cursor-pointer">
              Download CV
            </button>
            </a>
            <a href="mailto:ashwathkulal2004@gmail.com">
            <button className="border border-gray-700 text-white px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all cursor-pointer">
              Contact Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}