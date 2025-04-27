import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';




export default function App () {
    return (
        <div>
            <Navbar />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
                  </div>
    );
}

