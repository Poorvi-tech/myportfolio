import React, { useState } from "react";
import { FaBriefcase, FaChevronDown, FaChevronUp, FaExternalLinkAlt } from "react-icons/fa";
import "./ExperienceSection.css";

const jintern = "/assets/j-intern.pdf";
const jintern2 = "/assets/j-intern2.pdf";
const jintern3 = "/assets/j-intern3.pdf";
const jintern4 = "/assets/j-intern4.pdf";
const xintern = "/assets/x-intern.pdf";

const experiences = [
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "Sep 2025 – March 2026",
    type: "Remote · Stipend-based",
    description: "Completed a 6-month internship as a Fullstack Developer, handling both backend and frontend development. Earned a monthly stipend of ₹5,000.",
    certificate: jintern4,
    skills: ["Fullstack Development", "Mentoring", "Code Reviews", "Project Management"],
    achievements: ["Mentoring 3 new interns", "Leading code reviews", "Contributing to 5+ projects"],
    isCurrent: false,
  },
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "Jul 2025 – Aug 2025",
    type: "Remote",
    description: "Worked as a Fullstack Developer on the WomenLine project, focusing on backend development with Node.js, Express, MongoDB.",
    certificate: jintern2,
    skills: ["Node.js", "Express", "MongoDB", "JWT", "Twilio/Gupshup"],
    achievements: ["Designed database schemas for 8 modules", "Integrated WhatsApp bot functionality", "Implemented anonymous reporting system"],
  },
  {
    company: "Jayadhi",
    role: "Fullstack Developer Intern",
    duration: "Jun 2025 – Jul 2025",
    type: "Remote",
    description: "Worked as a Fullstack Developer on the ZeroPrint project, focusing on backend development with Node.js, Express, MongoDB.",
    certificate: jintern,
    skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Backend Development"],
    achievements: ["Developed 15+ REST APIs", "Implemented JWT authentication", "Reduced API response time by 30%"],
  },
  {
    company: "XCoders",
    role: "ReactJS Developer Intern",
    duration: "Mar 2025 – May 2025",
    type: "Remote",
    description: "Worked on building responsive web applications using ReactJS, collaborating with a team to implement modern UI features.",
    certificate: xintern,
    skills: ["ReactJS", "JavaScript", "HTML/CSS", "UI/UX", "Team Collaboration"],
    achievements: ["Built 3 responsive web applications", "Improved user experience by 40%", "Collaborated with 5+ team members"],
  },
];

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="section" id="experience">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaBriefcase /></span>
          <h2>Experience</h2>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <div className={`exp-item ${exp.isCurrent ? 'exp-current' : ''}`} key={index}>
              <div className="exp-dot-line">
                <div className={`exp-dot ${exp.isCurrent ? 'exp-dot-active' : ''}`}></div>
                {index < experiences.length - 1 && <div className="exp-line"></div>}
              </div>

              <div className="exp-content">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company} · <span>{exp.type}</span></p>
                    <p className="exp-duration">{exp.duration}</p>
                  </div>
                  {exp.isCurrent && <span className="tag tag-green">Current</span>}
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-skills">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>

                <button
                  className="exp-toggle"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {expandedIndex === index ? (
                    <>Less <FaChevronUp /></>
                  ) : (
                    <>Achievements <FaChevronDown /></>
                  )}
                </button>

                {expandedIndex === index && (
                  <div className="exp-details">
                    <ul>
                      {exp.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <a href={exp.certificate} target="_blank" rel="noreferrer" className="exp-cert-link">
                  <FaExternalLinkAlt /> View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;