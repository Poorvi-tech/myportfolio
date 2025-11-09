import React, { useState } from "react";
import "./ExperienceSection.css";

const jintern = "/assets/j-intern.pdf"; // ZeroPrint project certificate (June - July)
const jintern2 = "/assets/j-intern2.pdf";  // WomenLine project certificate (July - August)
const jintern3 = "/assets/j-intern3.pdf";  // Current internship offer/engagement
const xintern = "/assets/x-intern.pdf";

const experiences = [
  {
    company: "XCoders",
    role: "ReactJS Developer Intern",
    duration: "March 2025 - May 2025",
    description:
      "Worked on building responsive web applications using ReactJS, collaborating with a team to implement modern UI features and improve user experience.",
    certificate: xintern,
    skills: ["ReactJS", "JavaScript", "HTML/CSS", "UI/UX", "Team Collaboration"],
    achievements: ["Built 3 responsive web applications", "Improved user experience by 40%", "Collaborated with 5+ team members"]
  },
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "June 2025 - July 2025",
    description:
      "Worked as a Fullstack Developer on the ZeroPrint project, focusing on backend development with Node.js, Express, MongoDB, and integrating frontend APIs.",
    certificate: jintern,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Backend Development"],
    achievements: ["Developed 15+ REST APIs", "Implemented JWT authentication", "Reduced API response time by 30%"]
  },
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "July 2025 - August 2025",
    description:
      "Worked as a Fullstack Developer on the WomenLine project, focusing on backend development with Node.js, Express, MongoDB, and integrating frontend APIs.",
    certificate: jintern2,
    skills: ["Node.js", "Express", "MongoDB", "JWT", "Twilio/Gupshup"],
    achievements: ["Designed database schemas for 8 modules", "Integrated WhatsApp bot functionality", "Implemented anonymous reporting system"]
  },
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "September 2025 - Present",
    description:
      "Currently working as a Fullstack Developer Intern on company projects, handling both backend and frontend development. Remote stipend-based internship that started on September 15, 2025.",
    certificate: jintern3,
    skills: ["Fullstack Development", "Mentoring", "Code Reviews", "Project Management"],
    achievements: ["Mentoring 3 new interns", "Leading code reviews", "Contributing to 5+ projects"]
  },
];

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <section className="experience-section" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3 className="company-name">{exp.company}</h3>
            <p className="role">{exp.role}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
            
            <div className="expand-toggle" onClick={() => toggleExpand(index)}>
              {expandedIndex === index ? 'Show Less −' : 'Show More +'}
            </div>
            
            {expandedIndex === index && (
              <div className="experience-details">
                <p><strong>Key Skills:</strong> {exp.skills?.join(', ')}</p>
                <p><strong>Key Achievements:</strong> {exp.achievements?.join(', ')}</p>
              </div>
            )}
            
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