import React from 'react';
import About from "../HomePages/About";
import Contact from "../HomePages/Contact";
import Homepage from "../HomePages/Homepage";
import NavBar from "../HomePages/NavBar";
import PortProjects from "../HomePages/PortProjects";
import Footer from './Footer';
import Skills from './Skills';
import Education from './Education';

export default function Portfollio() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
                <NavBar />
                <div className="flex flex-1 flex-col">
                    <section id="home">
                        <Homepage />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="skills">
                        <Skills />
                    </section>
                    <section id="projects">
                        <PortProjects />
                    </section>
                    <section id="education">
                        <Education />
                    </section>
                    <section id="contact">
                        <Contact />
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
}
