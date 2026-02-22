import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["JavaScript (ES6+)"]
    },
    {
      category: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Framework",
      skills: ["React"]
    },
    {
      category: "Technologies",
      skills: ["Bootstrap"]
    },
    {
      category: "Database",
      skills: ["MySQL"]
    },
    {
      category: "Tools & Platforms",
      skills: ["Git & GitHub", "VS Code"]
    }
  ];

  return (
    <section className="section">
      <h1>Skills</h1>
      <div className="skills-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category">
            <h3>{cat.category}</h3>
            <div className="skills-list">
              {cat.skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;