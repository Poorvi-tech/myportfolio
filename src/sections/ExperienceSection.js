import React from "react";
import "./ExperienceSection.css";

const jintern = "/assets/j-intern.pdf";
const xintern = "/assets/x-intern.pdf";

const experiences = [
  {
    company: "XCoders",
    role: "ReactJS Developer Intern",
    duration: "Jun 2025 - Aug 2025",
    description:
      "Worked on building responsive web applications using ReactJS, collaborating with a team to implement modern UI features and improve user experience.",
    certificate: xintern,
  },
  {
    company: "JYadahi",
    role: "Current Intern",
    duration: "Aug 2025 - Present",
    description:
      "Currently contributing to frontend development projects, enhancing components with ReactJS, and learning advanced state management and performance optimization.",
    certificate: jintern,
  },
];

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="company-name">{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
            <a
              href={exp.certificate}
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              📄 View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
