import React, { Suspense, lazy, useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Resume = lazy(() => import("./components/Resume"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectsRef, skillsRef, resumeRef, contactRef }} />
      <Suspense fallback={<div className="loading"><h2>Loading...</h2></div>}>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={skillsRef}>
          <Skills />
        </div>
        <div ref={resumeRef}>
          <Resume />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </Suspense>
    </>
  );
}

export default App;