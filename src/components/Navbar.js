import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (ref, e) => {
    e.preventDefault();      
    scrollToSection(ref);
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Portfolio</h2>

    
        <button
          className={`hamburger ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        
        <ul className={`nav-menu ${mobileOpen ? "active" : ""}`}>
          <li>
            <a
              href="/#about"
              onClick={(e) => handleNavClick(refs.aboutRef, e)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/#projects"
              onClick={(e) => handleNavClick(refs.projectsRef, e)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/#skills"
              onClick={(e) => handleNavClick(refs.skillsRef, e)}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="/#resume"
              onClick={(e) => handleNavClick(refs.resumeRef, e)}
            >
              Resume
            </a>
          </li>

          <li>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(refs.contactRef, e)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;