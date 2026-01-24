import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ExternalLink,
  Github,
  Info,
  Code2,
  Layers,
  Cpu,
  Globe,
  CheckCircle2,
  Leaf,
  HeartPulse
} from "lucide-react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: "https://content.wotr.org/climate-resilient-agriculture/assets/0Y7zHIZCHJ/c0923_compressed_frame-0ms-720x405.jpg",
      title: "Climate Resilient Agriculture",
      category: "Full Stack Development",
      desc: "The bridge between complex climate science and practical agricultural execution",
      longDesc: "To provide farmers, large and small, with unparalleled predictive intelligence necessary to combat the unpredictability of climate change. We aim to secure global food systems by making sustainable, high-yield farming accessible through technology.",
      techStack: ["React", "tailwind CSS", "Nodejs", "Express", "MongoDB", "Python", "Machine Learning", "Render"],
      features: [
        "Agri Knowledge core", "Climate Risk Prediction", "Crop Recommendation", "Weather Prediction", "Disease Prediction", "Chatbot", "Google OAuth Integration",
        "Secure JWT Authentication",
        "Real-time Profile Updates"
      ],
      link: "https://climate-resilient-agriculture.onrender.com/",
      GitLink: "https://github.com/Ashwath-S-kulal/Climate-Resilient-Agriculture",
      icon: <Leaf size={18} />
    },
    {
      img: "https://www.idfy.com/wp-content/uploads/2021/05/Healthcare-BGV-scaled.jpg",
      title: "Health Care Website",
      category: "Full Stack Development",
      desc: "Combining world-class clinical expertise to patients to provide personalized health journeys.",
      longDesc: "A full-stack healthcare platform designed to connect patients with nearby hospitals and medical experts. The application focuses on accessibility, responsiveness, and efficient healthcare discovery through a clean and intuitive user experience.",
      techStack: ["React", "tailwind CSS", "Nodejs", "Express", "MongoDB", "vercel"],
      features: [
        "Nearby Medical Fetch",
        "Nearby Hospital Fetch",
        "Expertise Doctor Consultant",
        "Responsive Admin Panel"
      ],
      link: "https://health-bridge-medical-website-n9ai.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Health-Bridge-Medical-Website",
      icon: <HeartPulse size={18} />
    }
    ,
    {
      img: "https://material.dahuasecurity.com/uploads/image/20240516/news0516300200.png",
      title: "MERN Authentication",
      category: "Full Stack Development",
      desc: "Secure user management system with Google OAuth and JWT.",
      longDesc: "A robust authentication gateway designed for scalability. It implements secure password hashing with Bcrypt, state management via Redux Toolkit, and persistent sessions using JWT stored in HTTP-only cookies to prevent XSS attacks.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Firebase"],
      features: ["Google OAuth Integration", "Secure JWT Authentication", "Real-time Profile Updates"],
      link: "https://mern-authentication-web.onrender.com",
      GitLink: "https://github.com/Ashwath-S-kulal/MERN-Authentication-Web",
      icon: <Cpu size={18} />
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/lR_Radiant.png?v=1734949919",
      title: "Boat Advertising App",
      category: "Frontend Engineering",
      desc: "Modern product showcase with high-fidelity UI and animations.",
      longDesc: "A high-conversion landing page mockup focusing on modern UI trends. It uses Tailwind CSS for rapid styling and responsive design principles to ensure a seamless experience across all device types.",
      techStack: ["React.js", "Tailwind CSS", "Vite"],
      features: ["Mobile-First Design", "Optimized Asset Loading", "Modern Color Palette"],
      link: "https://smartwatch-product-showcase-website.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Boat-product-advertising-frontend",
      icon: <Globe size={18} />
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*Onh9cW9KtGjDrlf5NzGYMw.jpeg",
      title: "Static Portfolio Website",
      category: "Personal project",
      desc: "The central hub for professional experience and skills.",
      longDesc: "A lightweight, SEO-optimized portfolio built with core web technologies. It showcases clean code structure and semantic HTML practices, serving as my primary digital identity.",
      techStack: ["HTML", "CSS", "JavaScript", "Netlify"],
      features: ["Semantic HTML Structure", "Custom CSS Grid/Flexbox", "Responsive Breakpoints", "Fast Load Times"],
      link: "https://ashwath-s-kulal.github.io/Porfolio-web/",
      GitLink: "https://github.com/Ashwath-S-kulal/Porfolio-web",
      icon: <Code2 size={18} />
    },
  ];

  return (
    <section id="projects" className="bg-[#1e1e28] px-4 md:px-8 py-20 mt-0 rounded-lg shadow-2xl relative overflow-hidden scroll-mt-16">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] pointer-events-none"></div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          Projects
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500"></span>
        </h2>
        <p className="text-[#8c8c8e] mt-6 text-sm max-w-2xl uppercase tracking-widest font-semibold">
          Proficiency in web technologies and core programming languages.
        </p>
      </div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col md:flex-row bg-[#24242f] border border-gray-800/60 rounded-sm overflow-hidden hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl"
          >
            {/* 1. Visual Column */}
            <div className="md:w-[35%] relative bg-[#1e1e28] overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 min-h-[220px]"
              />
              <div className="absolute top-4 left-4 text-[9px] font-mono text-yellow-500/40 group-hover:text-yellow-500 font-bold bg-black/40 px-2 py-1 rounded-sm backdrop-blur-md">
                Project {index + 1}
              </div>
            </div>

            {/* 2. Data Column */}
            <div className="md:w-[65%] p-7 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white text-lg font-bold tracking-tight group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-gray-600 group-hover:text-yellow-500 transition-colors">
                    {project.icon}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[9px] bg-[#1e1e28] text-[#8c8c8e] px-2 py-0.5 rounded-sm border border-gray-800 uppercase tracking-widest group-hover:border-yellow-500/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-[#8c8c8e] text-xs leading-relaxed mb-6 line-clamp-2 italic">
                  {project.desc}
                </p>
              </div>

              {/* Action Bar */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800/60">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#1e1e28] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-yellow-500 hover:text-black transition-all"
                >
                  Live View <ExternalLink size={12} />
                </a>
                <a
                  href={project.GitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-[#1e1e28] text-gray-500 hover:text-white border border-transparent hover:border-gray-700 transition-all"
                >
                  <Github size={16} />
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="p-2.5 bg-[#1e1e28] text-gray-500 hover:text-yellow-500 border border-transparent hover:border-yellow-500/20 transition-all"
                >
                  <Info size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0e0e12]/95 z-[100] backdrop-blur-xl px-4 py-6">
          <div className="bg-[#24242f] border border-gray-800 rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] w-full max-w-5xl relative animate-in zoom-in fade-in duration-300 flex flex-col md:flex-row overflow-hidden max-h-[90vh]">

            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-[110] p-2 bg-black/50 text-white rounded-full hover:bg-yellow-500 hover:text-black transition-all"
            >
              <X size={20} />
            </button>

            {/* Modal Left: Visuals */}
            <div className="md:w-[45%] p-8 bg-[#1e1e28]/50 flex flex-col border-b md:border-b-0 md:border-r border-gray-800">
              <div className="relative rounded-sm overflow-hidden border border-gray-800 group shadow-2xl">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-yellow-500/5 mix-blend-overlay"></div>
              </div>

              <div className="mt-auto space-y-4 hidden md:block">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-[3px] opacity-40">Deployment Status</h4>
                <div className="flex items-center gap-3 text-green-500 text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Active on Production
                </div>
              </div>
            </div>

            {/* Modal Right: Technical Specs */}
            <div className="md:w-[55%] p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <span className="text-yellow-500 text-[10px] font-bold uppercase tracking-[4px] mb-3 block">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl font-black text-white mb-8 tracking-tighter">
                {selectedProject.title}
              </h2>

              <div className="space-y-10">
                {/* Tech Badges */}
                <section>
                  <h4 className="text-white/50 text-[9px] font-bold uppercase tracking-[3px] mb-4">Core Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="bg-[#1e1e28] text-white text-[10px] px-4 py-1.5 border border-gray-800 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                {/* Description */}
                <section>
                  <h4 className="text-white/50 text-[9px] font-bold uppercase tracking-[3px] mb-4">Project Overview</h4>
                  <p className="text-[#8c8c8e] text-sm leading-relaxed font-medium">
                    {selectedProject.longDesc}
                  </p>
                </section>

                {/* Feature Checkmarks */}
                <section>
                  <h4 className="text-white/50 text-[9px] font-bold uppercase tracking-[3px] mb-4">Technical Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#8c8c8e] text-xs font-semibold">
                        <CheckCircle2 size={14} className="text-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Mobile Links */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-800">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-500 text-black text-center py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={selectedProject.GitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-700 text-white text-center py-4 text-[10px] font-bold uppercase tracking-widest hover:border-yellow-500 transition-all flex items-center justify-center gap-2"
                  >
                    <Github size={14} /> Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}