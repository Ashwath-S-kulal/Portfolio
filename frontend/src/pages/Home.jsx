import React from 'react';
import { Linkedin, Dribbble, Github, Twitter, ChevronRight, ExternalLink, ArrowRight, Mail } from 'lucide-react';
import NavBar from '../HomePages/NavBar';
import About from '../HomePages/About';
import Skills from '../HomePages/Skills';
import Projects from '../pages/Project';
import Contact from '../HomePages/Contact';
import ProfileImg from "../Images/profilepicture1.jpeg";
import ProfilePicture from "../Images/pto.png";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaCloudSun,
  FaHeartbeat,
  FaLock,
  FaShip,
  FaArrowRight
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from '../HomePages/Footer';
import { NavLink } from 'react-router-dom';

const PortfolioDashboard = () => {

  const projects = [
    {
      title: "Climate Resilient",
      desc: "Data-driven climate monitoring system.",
      link: "https://climate-resilient-agriculture.onrender.com",
      icon: <FaCloudSun />,
    },
    {
      title: "Health Care",
      desc: "Patient management and portal system.",
      link: "https://health-bridge-medical-website-n9ai.vercel.app/",
      icon: <FaHeartbeat />,
    },
    {
      title: "Authentication",
      desc: "Secure MERN stack security portal.",
      link: "https://mern-authentication-web.onrender.com",
      icon: <FaLock />,
    },
    {
      title: "Boat Advertising",
      desc: "Modern landing page for maritime tech.",
      link: "https://smartwatch-product-showcase-website.vercel.app/",
      icon: <FaShip />,
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#1e1e28] text-[#8c8c8e] font-sans">
      <aside className="lg:w-80 bg-[#20202a] flex flex-col lg:fixed lg:h-full shadow-2xl z-20 mx-3 md:mx-0 mt-24 md:mt-0">
        {/* Profile Header */}
        <div className="bg-[#24242f] p-8 text-center border-b border-gray-800">
          <div className="relative inline-block">
            <img
              src={ProfileImg}
              alt="Artur Carter"
              className="w-30 h-30 ring-3 ring-yellow-300 rounded-full mx-auto object-cover"
            />
            <span className="absolute bottom-1 right-2 w-4 h-4 bg-yellow-500 rounded-full border-2 border-[#24242f]"></span>
          </div>
          <h2 className="text-white mt-4 font-bold text-lg">Ashwath S</h2>
          <p className="text-xs mt-1">Computer Science Engineer</p>
        </div>

        {/* Info List */}
        <div className="p-6 space-y-3 text-sm overflow-y-auto flex-1">
          <p className='text-justify text-xs'>
            I have a strong foundation in software application development and enjoy creating meaningful web applications.
          </p>

          <hr className="border-gray-800 my-6" />

          {/* Languages */}
          <div className="flex justify-around text-center py-4">
            <CircularSkill label="Kannada" percent={100} />
            <CircularSkill label="English" percent={90} />
            <CircularSkill label="Hindi" percent={70} />
          </div>
          <hr className="border-gray-800 my-6" />
        </div>

        {/* Sidebar Footer - Socials */}
        <div className="bg-[#24242f] p-4 flex justify-around border-t border-gray-800">
          <NavLink to="https://www.linkedin.com/in/ashwath-s-56a5b2334/" target='blank'><Linkedin size={16} className="hover:text-white cursor-pointer" /></NavLink>
          <NavLink to="https://github.com/Ashwath-S-kulal" target='blank'><Github size={16} className="hover:text-white cursor-pointer" /></NavLink>
          <NavLink to="mailto:ashwathkulal2004@gmail.com" target='blank'><Mail size={16} className="hover:text-white cursor-pointer" /></NavLink>
          <NavLink to="https://wa.me/918431294514" target='blank'><FaWhatsapp size={16} className="hover:text-white cursor-pointer" /></NavLink>
        </div>
      </aside>

      {/* Main Content Area */}
      {/* Changed ml-80 to lg:ml-80 (0 on mobile). Added w-full */}
      <div className='flex-1 lg:ml-80 w-full overflow-hidden'>
        <NavBar />
        <main className="p-4 md:p-8 md:pt-5 pb-1 mb-10 shadow-2xl">
          {/* Banner Section */}
          <section className="relative rounded-lg overflow-hidden mt-6 lg:mt-18 min-h-[400px] lg:h-96 mb-12 flex items-center px-6 lg:px-12">
            {/* Background Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center grayscale opacity-30"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e28] via-transparent to-transparent"></div>

            <div className="relative z-10 max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Welcome to My Art  <br /> Portfolio!
              </h1>
              <div className="font-mono text-yellow-500 mb-8">
                &lt;code&gt; <span className="text-white">I build Websites</span> &lt;/code&gt;
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <a href="#projects">
                  <button className="bg-[#ffc107] text-black px-8 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-yellow-400 transition cursor-pointer">
                    Explore Now
                  </button>
                </a>
                <button className="text-white text-xs font-bold uppercase tracking-widest flex items-center hover:opacity-70 cursor-pointer">
                  Hire Me <ChevronRight size={14} className="ml-1" />
                </button>
              </div>
            </div>

            {/* Floating Person */}
            <img
              src={ProfilePicture}
              alt="Hero"
              className="absolute right-12 bottom-0 h-auto object-contain hidden lg:block"
            />
          </section>

          {/* Social Links Section */}
          <section className="mx-2 md:mx-5 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
              <SocialLink icon={<FaGithub />} label="GitHub" link="https://github.com/Ashwath-S-kulal" hoverColor="hover:text-white hover:bg-gray-700" />
              <SocialLink icon={<FaLinkedinIn />} label="LinkedIn" link="https://www.linkedin.com/in/ashwath-s-56a5b2334/" hoverColor="hover:text-white hover:bg-blue-600" />
              <SocialLink icon={<FaXTwitter />} label="Twitter" link="https://x.com/Ashwath52870943" hoverColor="hover:text-white hover:bg-black" />
              <SocialLink icon={<FaInstagram />} label="Instagram" link="https://www.instagram.com/ashwath.s.kulal/" hoverColor="hover:text-white hover:bg-pink-600" />
              <SocialLink icon={<FaWhatsapp />} label="WhatsApp" link="https://wa.me/918431294514" hoverColor="hover:text-white hover:bg-green-500" />
              <SocialLink icon={<FaFacebookF />} label="Facebook" link="https://www.facebook.com/ashwath.s.137135" hoverColor="hover:text-white hover:bg-blue-700" />
            </div>
          </section>

          {/* Latest Projects Section */}
          <section className="mx-2 md:mx-5 my-16">
            <h3 className="text-white font-bold text-xl mb-10 uppercase tracking-[3px] flex items-center gap-4">
              Latest Projects
              <div className="h-[2px] flex-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#24242f] border border-gray-800 p-8 rounded-sm overflow-hidden transition-all duration-500 hover:border-yellow-500/50 hover:-translate-y-2 block"
                >
                  <div className="absolute -right-4 -bottom-4 text-8xl text-white opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-yellow-500 transition-all duration-500 rotate-12 group-hover:rotate-0">
                    {project.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-yellow-500 text-2xl mb-6 transition-transform duration-500 group-hover:scale-110">
                      {project.icon}
                    </div>
                    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">{project.title}</h4>
                    <p className="text-[#8c8c8e] text-xs leading-relaxed mb-8">{project.desc}</p>
                    <div className="flex items-center text-white text-[10px] font-bold uppercase tracking-widest group-hover:text-yellow-500 transition-colors">
                      Explore Site <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

/* --- Helper Components --- */

const CircularSkill = ({ label, percent }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-12 h-12 flex items-center justify-center mb-2">
      <svg className="w-full h-full transform -rotate-90">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-gray-800" />
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="transparent"
          strokeDasharray={125.6} strokeDashoffset={125.6 - (125.6 * percent) / 100}
          className="text-yellow-500"
        />
      </svg>
      <span className="absolute text-[10px] text-white font-bold">{percent}%</span>
    </div>
    <span className="text-[11px] font-medium">{label}</span>
  </div>
);

const SocialLink = ({ icon, label, link, hoverColor }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center space-x-3 bg-[#24242f] border border-gray-800 p-4 rounded-sm transition-all duration-300 group ${hoverColor} w-full`}
  >
    <span className="text-yellow-500 group-hover:text-inherit text-xl transition-colors">
      {icon}
    </span>
    <span className="text-[#8c8c8e] group-hover:text-inherit text-[10px] font-bold uppercase tracking-widest">
      {label}
    </span>
  </a>
);

export default PortfolioDashboard;