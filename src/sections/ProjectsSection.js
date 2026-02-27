import React, { useState, useMemo } from "react";
import { FaCode, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./ProjectsSection.css";

const projects = [
  {
    name: "ArtVista — AI-Powered Art Learning & Gallery",
    description: "Full-stack platform for art discovery, learning paths, and showcases with AI microservices for personalized recommendations and interactive tools.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Python", "Flask"],
    github: "https://github.com/Poorvi-tech/ArtVista.git",
    live: "https://art-vista-five.vercel.app/",
    category: "Full Stack",
    details: "Implemented authentication, gallery, social feed, e-commerce (cart/checkout), and progress tracking. Integrated AI microservices for personalized recommendations and game logic via Node/Express APIs. Built interactive tools and games including AI recommendations, art creation suggestions, drag-drop scene maker, and quizzes."
  },
  {
    name: "MelodicMart — Music Instruments Store",
    description: "A modern, full-featured e-commerce platform for musical instruments with advanced interactive features including sound customizer, instrument showcase, and rhythm builder.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Poorvi-tech/MelodicMart",
    live: "https://melodicmart.vercel.app/",
    category: "Full Stack",
    details: "Features an interactive sound customizer, visual showcase, rhythm builder, and musical quiz. Cutting-edge e-commerce designed for musical instruments."
  },
  {
    name: "Zero Print — Environmental Sustainability",
    description: "Built backend, MongoDB database, JWT/Firebase auth, APIs for activity logging, carbon footprint calculation, gamification, rewards & leaderboards.",
    tech: ["Node.js", "Express", "MongoDB", "Firebase Auth", "REST APIs"],
    github: "https://github.com/Poorvi-tech/ZeroPrint.git",
    category: "Backend",
    details: "Helps users track and reduce their carbon footprint with activity logging, gamification, rewards, leaderboards, and a comprehensive dashboard."
  },
  {
    name: "WomenLine — AI-Powered Wellness Platform",
    description: "Designed DB schemas, APIs for journals, period tracking, rewards, anonymous abuse reporting, PDF exports, forums & WhatsApp bot integration.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Twilio/Gupshup"],
    github: "https://github.com/Poorvi-tech/team5555-Womenline.git",
    category: "Backend",
    details: "AI-powered women's wellness platform with digital journals, period tracking, anonymous abuse reporting, PDF exports, community forums, and WhatsApp bot integration."
  },
  {
    name: "ResQnow — Ambulance Booking System",
    description: "Full-stack web app with login/signup auth, real-time ambulance booking, responsive dashboards for patients & drivers.",
    tech: ["ReactJS", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Poorvi-tech/ResQnow",
    live: "https://golden-fox-687708.netlify.app/login.html",
    category: "Full Stack",
    details: "Life-saving ambulance booking app with real-time tracking, secure auth, responsive dashboards for patients and drivers."
  },
  {
    name: "Amazon Clone",
    description: "Created responsive UI, product listings, navigation bar & homepage layout.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Poorvi-tech/Amazon-clone.git",
    live: "https://superlative-baklava-7505ec.netlify.app/",
    category: "Frontend",
    details: "Responsive recreation of Amazon's core UI elements including product listings, search navigation, and clean homepage layout."
  },
  {
    name: "Hospital Management System",
    description: "Patient & staff management, appointment scheduling, user-friendly interface.",
    tech: ["Java"],
    github: "https://github.com/Poorvi-tech/Hospital_Management_System.git",
    category: "Desktop App",
    details: "Comprehensive desktop app for hospital operations: patient registration, staff scheduling, appointment booking, medical records, and billing."
  },
  {
    name: "Realtime Weather App",
    description: "Fetches & displays live weather data using API, interactive & responsive UI.",
    tech: ["JavaScript", "API Integration"],
    github: "https://github.com/Poorvi-tech/Realtime_Weather_App.git",
    live: "https://shiny-tanuki-4aa639.netlify.app/",
    category: "Frontend",
    details: "Provides real-time weather information for any location with current conditions, temperature, humidity, wind speed, and forecasts."
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState({});

  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(p => p.category))];
    return ["All", ...cats];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(p => p.category === filter);
  }, [filter]);

  const toggleExpand = (index) => {
    setExpandedProjects(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="section" id="projects">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaCode /></span>
          <h2>Projects</h2>
          <span className="project-count">{projects.length} projects</span>
        </div>

        {/* Filters */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-chip ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div className="project-card card-hover" key={index}>
              <div className="project-card-header">
                <span className="tag">{project.category}</span>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>

              {/* Tech Tags */}
              <div className="project-tech">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              {/* Expand */}
              <button className="project-expand" onClick={() => toggleExpand(index)}>
                {expandedProjects[index] ? <>Less <FaChevronUp /></> : <>Details <FaChevronDown /></>}
              </button>

              {expandedProjects[index] && (
                <div className="project-details-box">
                  <p>{project.details}</p>
                </div>
              )}

              {/* Links */}
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> Code
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;