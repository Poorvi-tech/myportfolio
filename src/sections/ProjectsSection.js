// src/sections/ProjectsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const projects = [
  {
    name: "Zero Print – Environmental Sustainability Platform",
    description: "Built backend, MongoDB database, JWT/Firebase auth, APIs for activity logging, carbon footprint calculation, gamification, rewards & leaderboards.",
    tech: "Node.js, Express, MongoDB, Firebase Auth, REST APIs",
    github: "https://github.com/Poorvi-tech/ZeroPrint.git",
  },
  {
    name: "WomenLine – AI-Powered Wellness Platform for Women",
    description: "Designed DB schemas, APIs for journals, period tracking, rewards, anonymous abuse reporting, PDF exports, forums & WhatsApp bot integration.",
    tech: "Node.js, Express, MongoDB, JWT, Twilio/Gupshup, REST APIs",
    github: "https://github.com/Poorvi-tech/team5555-Womenline.git",
  },
  {
    name: "Ambulance Booking: ResQnow",
    description: "Full-stack web app with login/signup auth, real-time ambulance booking, responsive dashboards for patients & drivers.",
    tech: "ReactJS, Node.js, Express, MongoDB",
    github: "https://github.com/Poorvi-tech/ResQnow",
    live: "https://golden-fox-687708.netlify.app/login.html",
  },
  {
    name: "Amazon Clone",
    description: "Created responsive UI, product listings, navigation bar & homepage layout.",
    tech: "HTML, CSS",
    github: "https://github.com/Poorvi-tech/Amazon-clone.git",
    live: "https://superlative-baklava-7505ec.netlify.app/",
  },
  {
    name: "Hospital Management System",
    description: "Patient & staff management, appointment scheduling, user-friendly interface.",
    tech: "Java",
    github: "https://github.com/Poorvi-tech/Hospital_Management_System.git",
  },
  {
    name: "Realtime Weather App",
    description: "Fetches & displays live weather data using API, interactive & responsive UI.",
    tech: "JavaScript, API integration",
    github: "https://github.com/Poorvi-tech/Realtime_Weather_App.git",
    live: "https://shiny-tanuki-4aa639.netlify.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="projects-title"
      >
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Tech Stack:</strong> {project.tech}</p>
            <div className="project-links">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  )}
  {project.live && (
    <a href={project.live} target="_blank" rel="noopener noreferrer">
      Live
    </a>
  )}
  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      Demo
    </a>
  )}
</div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
