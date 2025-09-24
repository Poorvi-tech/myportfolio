import React from "react";
import "./ExperienceSection.css";

const jintern = "/assets/j-intern.pdf"; // Project certificate (June - Sept)
const jintern2 = "/assets/j-intern2.pdf";  // Internship certificate (current)
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
    duration: "June 2025 - July 2025",
    description:
      "Completed a project as Fullstack Intern, focusing on backend development with Node.js, Express, MongoDB, and integrating frontend APIs.",
    certificate: jintern,
  },
  {
    company: "Jyadahi",
    role: "Fullstack Intern",
    duration: "July 2025 - Present",
    description:
      "Currently working as a Fullstack Intern, completed another project, and improving fullstack functionalities. Also involved in mentoring new interns and code reviews.",
    certificate: jintern2,
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
