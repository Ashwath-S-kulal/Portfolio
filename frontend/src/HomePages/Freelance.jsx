import React, { useState, useEffect } from "react";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    CheckCircle2,
    Calendar,
    User,
    Smartphone,
    Globe,
    ShieldCheck,
    Clock,
    Zap,
    Layers,
    Cpu,
    ShoppingCart,
    Sliders,
    Bell
} from "lucide-react";

export default function FreelanceProjects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeViewerImage, setActiveViewerImage] = useState("");

    const project = {
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        extraImages: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        ],
        title: "E-Commerce Retail Ecosystem",
        client: "Commercial Freelance Contract",
        timeline: "Feb 2026 - May 2026",
        category: "Full Stack Web & Mobile",
        desc: "A production-grade retail infrastructure featuring a responsive web storefront, a cross-platform native mobile application, and a unified administrative control panel.",
        longDesc: "Designed and engineered a complete end-to-end commerce suite matching modern retail patterns. The ecosystem shares a centralized RESTful API backend and database layer, providing seamless synchronized state updates across both the browser and mobile native clients. Implemented structured global state management, media distribution, and automated transactional workflows.",

        webStack: ["React.js", "Tailwind CSS", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Brevo"],
        mobileStack: ["React Native", "Expo", "Tailwind CSS (NativeWind)", "Redux Toolkit", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Brevo"],

        userFeatures: [
            "Dynamic Homepage with tailored promotional grids and filtering",
            "Interactive Shopping Cart with persistent user state caching",
            "Wishlist Module for item tracking and product bookmarking",
            "Checkout & Secure Booking engine linked to order generation",
            "Real-time Order Tracking interface displaying fulfillment stages",
            "Comprehensive User Profile terminal managing account parameters"
        ],
        adminFeatures: [
            "Product Catalog Provisioning (Add new items with media ingestion)",
            "Dynamic Catalog Maintenance (Edit, update, or deprecate current items)",
            "User Account Management grid monitoring active buyer profiles",
            "Global Order Ledger showing fulfillment logs across all channels",
            "Instant Administrative Notification deck triggering on real-time user bookings"
        ],

        link: "https://example.com",
        GitLink: "https://github.com"
    };

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


    return (
        <div className="min-h-fit bg-[#1e1e28] text-white font-sans  shadow-2xl my-10 border border-gray-800/50">

            <header className=" bg-[#1e1e28]/40 sticky top-0 backdrop-blur-md z-40 px-4 md:px-12 py-5">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                            <span className="text-yellow-500">//</span> Freelance
                        </h1>
                        <p className="text-xs text-[#8c8c8e] font-mono mt-1 uppercase tracking-wider">Dual-Platform Product System</p>
                    </div>

                </div>

                <main className="max-w-7xl mx-auto py-6" onClick={() => setSelectedProject(project)}>
                    <section className="bg-[#14141b] border border-gray-800/60 rounded-sm p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all hover:border-gray-700/80">

                        <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="w-12 h-12 shrink-0 bg-[#14141b] rounded-sm border border-gray-800 overflow-hidden">
                                <img
                                    src={project.img}
                                    alt=""
                                    className="w-full h-full object-cover opacity-60"
                                />
                            </div>

                            <div className="min-w-0 space-y-2">
                                <h2 className="text-sm font-bold text-white truncate tracking-tight">
                                    {project.title}
                                </h2>

                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-[9px] font-mono font-bold text-yellow-500 bg-yellow-500/5 border border-yellow-500/10 px-1.5 py-0.5 rounded-sm uppercase tracking-wider flex items-center gap-1">
                                        <Globe size={10} /> Web App
                                    </span>
                                    <span className="text-[9px] font-mono font-bold text-emerald-500 bg-emerald-500/5 border border-emerald-500/10 px-1.5 py-0.5 rounded-sm uppercase tracking-wider flex items-center gap-1">
                                        <Smartphone size={10} /> Mobile App
                                    </span>
                                    <span className="text-[10px] text-[#8c8c8e] font-mono hidden md:inline-block border-l border-gray-800 pl-2">
                                        {project.timeline}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 justify-end border-t border-gray-800/40 pt-2 sm:pt-0 sm:border-0">

                            <button
                                onClick={() => setSelectedProject(project)}
                                className="bg-yellow-500 text-black font-mono font-bold text-[10px] px-3 py-2 uppercase tracking-wider hover:bg-white transition-all rounded-sm"
                            >
                                Blueprint
                            </button>
                        </div>
                    </section>
                </main>
            </header>


            {selectedProject && (
                <div className="fixed inset-0 bg-[#14141b] z-[9999] overflow-y-auto px-4 md:px-16 pb-12 pt-0 animate-in fade-in duration-200">
                    <div className="max-w-screen mx-auto relative">
                        <div className="sticky top-0 z-50 bg-[#14141b] pt-6 mb-10 flex items-center justify-between border-b border-gray-800 pb-4">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="flex items-center gap-2 px-5 py-2.5 bg-[#1e1e28] text-gray-400 hover:text-yellow-500 rounded-sm border border-gray-800 hover:border-yellow-500/30 transition-all text-xs font-bold uppercase tracking-wider"
                            >
                                <ArrowLeft size={16} /> Exit Technical Sheet
                            </button>
                            <div className="hidden md:inline text-[10px] font-mono text-gray-500 bg-[#1e1e28] px-3 py-1.5 rounded-sm border border-gray-800/80 uppercase tracking-widest">
                                System Mode: Deep Dive
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-12 items-start">
                            <div className="w-full lg:w-[42%] space-y-4 lg:sticky lg:top-[100px]">
                                <div className="relative rounded-sm overflow-hidden border border-gray-800 bg-[#1e1e28] shadow-2xl">
                                    <img
                                        src={activeViewerImage}
                                        alt="Active Ecosystem Snapshot"
                                        className="w-full h-auto object-cover"
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {selectedProject.extraImages && selectedProject.extraImages.map((screenshot, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setActiveViewerImage(screenshot)}
                                            className={`aspect-video rounded-sm overflow-hidden relative cursor-pointer border transition-all ${activeViewerImage === screenshot ? "border-yellow-500 opacity-100" : "border-gray-800 opacity-50 hover:opacity-100"
                                                }`}
                                        >
                                            <img src={screenshot} alt="Visual Record Layout" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-[#1e1e28] p-5 border border-gray-800 rounded-sm space-y-3 font-mono text-xs text-[#8c8c8e]">
                                    <div className="flex justify-between"><span className="text-gray-600">Client Profile:</span> <span className="text-white font-bold">{selectedProject.client}</span></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Production Term:</span> <span className="text-white font-bold">{selectedProject.timeline}</span></div>
                                </div>
                            </div>

                            <div className="w-full lg:w-[58%] space-y-10 pb-12">
                                <div>
                                    <span className="text-yellow-500 text-[10px] font-bold font-mono tracking-widest uppercase block mb-2">// Full Stack Pipeline Registry</span>
                                    <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                                        {selectedProject.title}
                                    </h1>
                                </div>

                                <section className="border-t border-gray-800/80 pt-6">
                                    <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px] mb-3">Architectural Concept</h4>
                                    <p className="text-[#8c8c8e] text-base leading-relaxed font-normal">
                                        {selectedProject.longDesc}
                                    </p>
                                </section>

                                <section className="border-t border-gray-800/80 pt-6 space-y-4">
                                    <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px]">Separated Technology Implementations</h4>

                                    <div className="space-y-3">
                                        <div className="text-xs text-yellow-500 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                                            <Globe size={13} /> Desktop Front-End & Core APIs
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedProject.webStack.map((tech) => (
                                                <span key={tech} className="bg-[#1e1e28] text-gray-300 text-[11px] px-3 py-1.5 border border-gray-800 font-mono rounded-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-2">
                                        <div className="text-xs text-emerald-500 font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                                            <Smartphone size={13} /> Mobile Native Application Layers
                                        </div>
                                        <div className="flex flex-wrap gap-1.5">
                                            {selectedProject.mobileStack.map((tech) => (
                                                <span key={tech} className="bg-[#1e1e28] text-gray-300 text-[11px] px-3 py-1.5 border border-gray-800 font-mono rounded-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </section>

                                <section className="border-t border-gray-800/80 pt-6 space-y-6">
                                    <h4 className="text-gray-500 text-[9px] font-bold uppercase tracking-[3px]">Ecosystem Feature Matrices</h4>
                                    <div className="space-y-3">
                                        <div className="text-xs text-gray-300 font-mono uppercase tracking-wider flex items-center gap-2 font-bold">
                                            <ShoppingCart size={14} className="text-yellow-500" /> Buyer Storefront Portal (App & Web)
                                        </div>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {selectedProject.userFeatures.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-[#8c8c8e] text-xs font-medium leading-relaxed">
                                                    <CheckCircle2 size={14} className="text-yellow-500/80 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3 pt-4">
                                        <div className="text-xs text-gray-300 font-mono uppercase tracking-wider flex items-center gap-2 font-bold">
                                            <Sliders size={14} className="text-emerald-500" /> Unified Administrative Management Dashboard
                                        </div>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {selectedProject.adminFeatures.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2.5 text-[#8c8c8e] text-xs font-medium leading-relaxed">
                                                    <CheckCircle2 size={14} className="text-emerald-500/80 shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}