import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaCode, FaPaintBrush, FaMobileAlt, FaRocket, FaLock } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#1e1e28] px-8 py-16 pt-1 scroll-mt-24 my-10 rounded-lg shadow-2xl">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
          Contact & Services
          <span className="absolute -bottom-2 left-0 w-12 h-1 bg-yellow-500"></span>
        </h2>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Column: Contact Details */}
        <div className="lg:col-span-1 space-y-4">
          <ContactInfoCard
            icon={<FaMapMarkerAlt size={18} />}
            title="Location"
            detail="Udupi, Karnataka"
            subDetail="Available for Remote Work"
          />
          <ContactInfoCard
            icon={<FaPhoneAlt size={18} />}
            title="Call Me"
            detail="+91 8431294514"
            subDetail="Available "
          />
          <ContactInfoCard
            icon={<FaEnvelope size={18} />}
            title="Email Me"
            detail="ashwathkulal2004@gmail.com"
            subDetail="Open to internships and job opportunities"
          />

          <div className="h-48 w-full bg-[#24242f] border border-gray-800 rounded-sm overflow-hidden transition-all duration-500 relative group">
            {/* The Map iframe */}
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29485.619156297747!2d74.67282749693322!3d13.623610402299958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc8e067b158c71%3A0x3b3eb31736debdcb!2sKundapura%2C%20Karnataka!5e1!3m2!1sen!2sin!4v1769181145846!5m2!1sen!2sin"
              className="w-full h-full grayscale invert-[90%] contrast-[120%] opacity-60 group-hover:opacity-100 group-hover:invert-0 group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Technical Overlay Label */}
            <div className="absolute top-2 right-2 pointer-events-none">
              <span className="text-[9px] bg-black/60 text-yellow-500 px-2 py-1 font-mono uppercase tracking-widest backdrop-blur-sm border border-white/5">
                Loc: 13.34 N, 74.74 E
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Services Grid (Replaces the Form) */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <ServiceCard
            icon={<FaCode />}
            title="Web Development"
            desc="Building responsive, high-performance websites using the MERN stack and modern CSS frameworks."
          />
          <ServiceCard
            icon={<FaPaintBrush />}
            title="UI/UX Design"
            desc="Creating clean, user-centric interfaces with a focus on intuitive navigation and brand identity."
          />
          <ServiceCard
            icon={<FaMobileAlt />}
            title="Responsive Design"
            desc="Ensuring your application looks perfect on every screen size, from mobile to ultra-wide monitors."
          />
          <ServiceCard
            icon={<FaLock />}
            title="Authentication"
            desc="Implementing secure login and access control systems."
          />

          {/* Quick Connect CTA */}
          <div className="md:col-span-2 mt-2 bg-yellow-500 p-6 rounded-sm flex flex-col md:flex-row justify-between items-center">
            <div>
              <h4 className="text-black font-bold uppercase tracking-widest text-sm">Ready to start a project?</h4>
              <p className="text-black/70 text-xs font-medium">I am currently available for freelance opportunities.</p>
            </div>
            <a
              href="mailto:ashwathkulal2004@gmail.com"
              className="mt-4 md:mt-0 bg-black text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
            >
              Hire Me Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Helper Component for Contact Info */
const ContactInfoCard = ({ icon, title, detail, subDetail }) => (
  <div className="bg-[#24242f] border border-gray-800 p-5 rounded-sm flex items-center gap-5 group hover:border-yellow-500/30 transition-colors">
    <div className="bg-[#1e1e28] text-yellow-500 p-4 rounded-sm transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-1">{title}</h4>
      <p className="text-[#8c8c8e] text-xs font-medium">{detail}</p>
      <p className="text-[#646467] text-[10px] uppercase mt-1">{subDetail}</p>
    </div>
  </div>
);

/* Helper Component for Services */
const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-[#24242f] border border-gray-800 p-6 rounded-sm hover:bg-[#2b2b35] transition-all group">
    <div className="text-yellow-500 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">{title}</h4>
    <p className="text-[#8c8c8e] text-xs leading-relaxed">
      {desc}
    </p>
  </div>
);