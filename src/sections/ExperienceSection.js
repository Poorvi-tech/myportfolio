import React from "react";
import "./ExperienceSection.css";

const jintern = "/assets/j-intern.pdf";
const xintern = "/assets/x-intern.pdf";

const experiences = [
  {
    company: "XCoders",
    role: "ReactJS Developer Intern",
    duration: "March 2025 - May 2025",
    description:
      "Worked on building responsive web applications using ReactJS, collaborating with a team to implement modern UI features and improve user experience.",
    certificate: xintern,
  },
  {
    company: "Jyadahi",
    role: "Fullstack Intern",
    duration: "June 2025 - Present",
    description:
      "Working as a Fullstack Intern with a focus on backend development using Node.js, Express, and MongoDB, while also integrating APIs with the frontend for seamless functionality.",
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
