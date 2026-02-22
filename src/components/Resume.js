import React from "react";

const Resume = () => {
  return (
    <section className="section">
      <h1>Resume</h1>
      <div className="resume-container">
        <div className="resume-section">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Science in Laboratory Technologies</h4>
            <p className="resume-detail">Devi Mahalaxmi College, Vikhroli • Graduate: 2022</p>
          </div>
        </div>

        <div className="resume-section">
          <h3>Certifications</h3>
          <div className="resume-item">
            <p> Web Development Essentials - IT-Vedant, Kalyan(2025)</p>
            <p> JavaScript Essentials - IT-Vedant, Kalyan(2025)</p>
          </div>
        </div>

        <a href="c:\Users\SUPER-COMPUTERS\OneDrive\Documents\Arfat_Shaikh_Resume.pdf" download className="download-btn">
           Download Full Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;