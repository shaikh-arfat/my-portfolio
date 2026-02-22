import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a personal portfolio website featuring a sticky sidebar and overlay hero section..",
      tech: "HTML, CSS",
      link: "https://github.com/shaikh-arfat/My-Portfolio-Project"
    },
    {
      title: "To-Do-List",
      description: "Built a dynamic task management application using JavaScript for real-time interactivity..",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/shaikh-arfat/js-project"
    },
   
  ];

  return (
    <section className="section">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="card project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> {project.tech}
            </p>
            <a href={project.link}>View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;