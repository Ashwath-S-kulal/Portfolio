import React, { useState, useEffect } from "react";
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
  HeartPulse,
  Briefcase,
  ArrowLeft
} from "lucide-react";

import serviceMatePic1 from "../Images/Servicemate/Screenshot 2026-05-20 124911.png";
import serviceMatePic2 from "../Images/Servicemate/Screenshot 2026-05-20 124835.png";
import serviceMatePic3 from "../Images/Servicemate/Screenshot 2026-05-20 124821.png";

import CRAPic1 from "../Images/CRA/Screenshot 2026-05-20 125446.png";
import CRAPic2 from "../Images/CRA/Screenshot 2026-05-20 125422.png";
import CRAPic3 from "../Images/CRA/Screenshot 2026-05-20 125359.png";

import healthCarePic1 from "../Images/HealthCare/Screenshot 2026-05-20 125310.png";
import healthCarePic2 from "../Images/HealthCare/Screenshot 2026-05-20 125118.png";
import healthCarePic3 from "../Images/HealthCare/Screenshot 2026-05-20 125052.png";

import mernAuthPic1 from "../Images/Auth/Screenshot 2026-05-20 125604.png";
import mernAuthPic2 from "../Images/Auth/Screenshot 2026-05-20 125617.png";
import mernAuthPic3 from "../Images/Auth/Screenshot 2026-05-20 125630.png";

import boatAdPic1 from "../Images/Boat/Screenshot 2026-05-20 125523.png";
import boatAdPic2 from "../Images/Boat/Screenshot 2026-05-20 125516.png";
import boatAdPic3 from "../Images/Boat/Screenshot 2026-05-20 125508.png";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeViewerImage, setActiveViewerImage] = useState("");


  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = "unset";
      return;
    }

    const initialImage = selectedProject.extraImages && selectedProject.extraImages.length > 0
      ? selectedProject.extraImages[0]
      : selectedProject.img;

    const frameId = requestAnimationFrame(() => {
      setActiveViewerImage(initialImage);
    });

    document.body.style.overflow = "hidden";

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);


  const projects = [
    {
      img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
      extraImages: [serviceMatePic3, serviceMatePic2, serviceMatePic1],
      title: "ServiceMate – Local Service Booking Platform",
      category: "Full Stack Development",
      desc: "A complete service booking platform connecting users with service providers",
      longDesc: "Service Mate is a multi-role service marketplace platform where users can explore, book, and review services while providers manage offerings, handle bookings, and assign workers. The system includes a powerful admin panel for monitoring users, approving services, and maintaining platform integrity. Designed with scalability and real-world workflows in mind, it ensures smooth interaction between users, providers, and administrators.",
      techStack: ["React (Vite)", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Brevo", "Vercel"],
      features: [
        "User, Provider, and Admin role-based system",
        "OTP-based authentication using email",
        "Service browsing and booking with preferred date",
        "Provider approval system by admin",
        "Providers can create and manage multiple services",
        "Booking accept/reject with reason",
        "Worker assignment and real-time status updates",
        "Review and rating system after service completion",
        "Admin dashboard to manage users, services, and reviews",
        "Cloudinary integration for media uploads",
        "Secure JWT Authentication"
      ],
      link: "https://servicemate-ashwathskulal.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/MERN_INTERNSHIP_2026_ASHWATH_S",
      icon: <Briefcase size={18} />
    },
    {
      img: "https://content.wotr.org/climate-resilient-agriculture/assets/0Y7zHIZCHJ/c0923_compressed_frame-0ms-720x405.jpg",
      extraImages: [CRAPic1, CRAPic2, CRAPic3],
      title: "Climate Resilient Agriculture Using Machine Learning",
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
      extraImages: [healthCarePic3, healthCarePic1, healthCarePic2],
      title: "Health Care - Smart Healthcare Assistance Platform",
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
      link: "https://health-bridge-medical-website.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Health-Bridge-Medical-Website",
      icon: <HeartPulse size={18} />
    },
    {
      img: "https://material.dahuasecurity.com/uploads/image/20240516/news0516300200.png",
      extraImages: [mernAuthPic1, mernAuthPic2, mernAuthPic3],
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
      extraImages: [boatAdPic1, boatAdPic2, boatAdPic3],
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
      extraImages: [],
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
    <div>
      <section id="projects" className="bg-[#1e1e28] px-4 md:px-8 py-20 mt-0 rounded-lg shadow-2xl relative overflow-hidden scroll-mt-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 blur-[120px] pointer-events-none"></div>

        <header className="border-b border-gray-800/80 bg-[#1e1e28]/40 sticky top-0 backdrop-blur-md z-40 pb-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                <span className="text-yellow-500">//</span> Projects
              </h1>
              <p className="text-xs text-[#8c8c8e] font-mono mt-1 uppercase tracking-wider">Proficiency in web technologies and core programming languages.</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row bg-[#24242f] border border-gray-800/60 rounded-sm overflow-hidden hover:border-yellow-500/40 transition-all duration-500 hover:shadow-2xl"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="md:w-[35%] relative bg-[#1e1e28] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 min-h-[220px]"
                />
                <div className="absolute top-4 left-4 text-[9px] font-mono text-yellow-500/40 group-hover:text-yellow-500 font-bold bg-black/40 px-2 py-1 rounded-sm backdrop-blur-md">
                  Project {index + 1}
                </div>
              </div>

              <div className="md:w-[65%] p-7 flex flex-col justify-between">
                <div onClick={() => setSelectedProject(project)} className="cursor-pointer">
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
      </section>

      {selectedProject && (
        <div className="fixed inset-0 bg-[#14141b] z-[9999] overflow-y-auto px-4 md:px-16 pb-12 pt-0 animate-in fade-in duration-300">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/[0.03] blur-[150px] pointer-events-none"></div>

          <div className="max-w-screen mx-auto relative">
            <div className="sticky top-0 z-50 bg-[#14141b] pt-6 mb-10 flex items-center justify-between border-b border-gray-800 pb-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1e1e28] text-gray-400 hover:text-yellow-500 rounded-sm border border-gray-800 hover:border-yellow-500/30 transition-all text-xs font-bold uppercase tracking-wider"
              >
                <ArrowLeft size={16} /> Back to Projects
              </button>

              <div className="flex items-center gap-3 text-green-500 text-[10px] font-bold uppercase tracking-widest bg-[#1e1e28] px-4 py-2 rounded-sm border border-gray-800">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Active on Production
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="w-full lg:w-[45%] space-y-4 lg:sticky lg:top-[100px]">
                <div className="relative rounded-sm overflow-hidden border border-gray-800 bg-[#1e1e28] shadow-2xl transition-all duration-300">
                  <img
                    src={activeViewerImage}
                    alt="Active Snapshot View"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14141b]/40 to-transparent"></div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {selectedProject.extraImages && selectedProject.extraImages.slice(0, 3).map((screenshot, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveViewerImage(screenshot)}
                      className={`aspect-video rounded-sm overflow-hidden relative cursor-pointer border transition-all ${activeViewerImage === screenshot ? "border-yellow-500 scale-[0.97]" : "border-gray-800 opacity-60 hover:opacity-100"
                        }`}
                    >
                      <img src={screenshot} alt={`Snapshot Layout ${idx + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute bottom-1 right-1 bg-black/60 px-1 text-[7px] text-gray-400 font-mono">0{idx + 1}</div>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1e1e28] p-5 border border-gray-800 rounded-sm mt-4">
                  <span className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] block mb-2">Category Assignment</span>
                  <div className="text-white font-bold text-sm flex items-center gap-2">
                    {selectedProject.icon} {selectedProject.category}
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[55%] space-y-10 pb-12">
                <div>
                  <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
                    {selectedProject.title}
                  </h1>
                  <p className="text-yellow-500 italic text-sm font-medium tracking-wide">
                    "{selectedProject.desc}"
                  </p>
                </div>

                <section className="border-t border-gray-800 pt-6">
                  <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] mb-4">Project Architecture Summary</h4>
                  <p className="text-[#8c8c8e] text-base leading-relaxed font-normal">
                    {selectedProject.longDesc}
                  </p>
                </section>

                <section className="border-t border-gray-800 pt-6">
                  <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] mb-4">Core Engineering Stack</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="bg-[#1e1e28] text-white text-xs px-4 py-2 border border-gray-800 font-mono tracking-wide rounded-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="border-t border-gray-800 pt-6">
                  <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] mb-4">Functional & Technical Deliverables</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#8c8c8e] text-xs font-medium leading-normal">
                        <CheckCircle2 size={15} className="text-yellow-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-800">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-yellow-500 text-black text-center py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 rounded-sm shadow-lg shadow-yellow-500/10"
                  >
                    <ExternalLink size={14} /> Launch Live Deployment
                  </a>
                  <a
                    href={selectedProject.GitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-800 text-white text-center py-4 text-xs font-bold uppercase tracking-widest hover:border-yellow-500 transition-all flex items-center justify-center gap-2 bg-[#1e1e28]"
                  >
                    <Github size={14} /> Open Git Repository
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}