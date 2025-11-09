// src/sections/ProjectsSection.js
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./ProjectsSection.css";

const projects = [
  {
    name: "MelodicMart - Music Instruments Store",
    description: "A modern, full-featured e-commerce platform for musical instruments with advanced interactive features including sound customizer, instrument showcase, and rhythm builder.",
    tech: "Next.js, TypeScript, Tailwind CSS, Node.js, Express, MongoDB",
    github: "https://github.com/Poorvi-tech/MelodicMart",
    live: "https://melodicmart.vercel.app/",
    category: "Full Stack",
    image: "/assets/melodicmart.png",
    details: "MelodicMart is a cutting-edge e-commerce platform designed specifically for musical instruments. It features an interactive sound customizer that allows customers to try instruments before purchasing, a visual showcase for featured products, and a rhythm builder for creating and sharing musical patterns. The platform also includes a musical quiz to engage users and test their music knowledge."
  },
  {
    name: "Zero Print – Environmental Sustainability Platform",
    description: "Built backend, MongoDB database, JWT/Firebase auth, APIs for activity logging, carbon footprint calculation, gamification, rewards & leaderboards.",
    tech: "Node.js, Express, MongoDB, Firebase Auth, REST APIs",
    github: "https://github.com/Poorvi-tech/ZeroPrint.git",
    category: "Backend",
    image: "/assets/zero-print.png",
    details: "Zero Print is an environmental sustainability platform that helps users track and reduce their carbon footprint. The platform features activity logging, carbon footprint calculation algorithms, gamification elements with rewards and leaderboards, and a comprehensive dashboard for monitoring progress. It uses JWT and Firebase authentication for secure user access and MongoDB for efficient data storage."
  },
  {
    name: "WomenLine – AI-Powered Wellness Platform for Women",
    description: "Designed DB schemas, APIs for journals, period tracking, rewards, anonymous abuse reporting, PDF exports, forums & WhatsApp bot integration.",
    tech: "Node.js, Express, MongoDB, JWT, Twilio/Gupshup, REST APIs",
    github: "https://github.com/Poorvi-tech/team5555-Womenline.git",
    category: "Backend",
    image: "/assets/womenline.png",
    details: "WomenLine is an AI-powered wellness platform designed specifically for women's health and safety. It includes features like digital journals, period tracking with predictive analytics, reward systems, anonymous abuse reporting mechanisms, PDF export capabilities for health records, community forums, and integration with WhatsApp bots for instant support. The platform prioritizes user privacy and security."
  },
  {
    name: "Ambulance Booking: ResQnow",
    description: "Full-stack web app with login/signup auth, real-time ambulance booking, responsive dashboards for patients & drivers.",
    tech: "ReactJS, Node.js, Express, MongoDB",
    github: "https://github.com/Poorvi-tech/ResQnow",
    live: "https://golden-fox-687708.netlify.app/login.html",
    category: "Full Stack",
    image: "/assets/resqnow.png",
    details: "ResQnow is a life-saving ambulance booking application that connects patients with nearby ambulances in real-time. The platform features secure login/signup authentication, real-time ambulance tracking, responsive dashboards for both patients and drivers, and an efficient booking system. It ensures quick response times and provides critical information to medical personnel before arrival."
  },
  {
    name: "Amazon Clone",
    description: "Created responsive UI, product listings, navigation bar & homepage layout.",
    tech: "HTML, CSS",
    github: "https://github.com/Poorvi-tech/Amazon-clone.git",
    live: "https://superlative-baklava-7505ec.netlify.app/",
    category: "Frontend",
    image: "/assets/amazon-clone.png",
    details: "This Amazon clone project demonstrates my frontend development skills by recreating the core UI elements of one of the world's largest e-commerce platforms. The project features a responsive design that works on all device sizes, product listings with detailed information, a navigation bar with search functionality, and a homepage layout that mimics Amazon's clean and intuitive interface."
  },
  {
    name: "Hospital Management System",
    description: "Patient & staff management, appointment scheduling, user-friendly interface.",
    tech: "Java",
    github: "https://github.com/Poorvi-tech/Hospital_Management_System.git",
    category: "Desktop App",
    image: "/assets/hospital-system.png",
    details: "The Hospital Management System is a comprehensive desktop application built with Java that streamlines hospital operations. It includes patient registration and management, staff scheduling and management, appointment booking and tracking, medical record storage, billing system, and an intuitive user interface. The system improves efficiency and reduces paperwork in healthcare environments."
  },
  {
    name: "Realtime Weather App",
    description: "Fetches & displays live weather data using API, interactive & responsive UI.",
    tech: "JavaScript, API integration",
    github: "https://github.com/Poorvi-tech/Realtime_Weather_App.git",
    live: "https://shiny-tanuki-4aa639.netlify.app/",
    category: "Frontend",
    image: "/assets/weather-app.png",
    details: "The Realtime Weather App provides up-to-date weather information for any location worldwide. It fetches data from a weather API and displays current conditions, temperature, humidity, wind speed, and forecasts. The app features an interactive and responsive UI that adapts to different screen sizes, location search functionality, and visually appealing weather icons. It's a great example of API integration and frontend development skills."
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');
  const [expandedProjects, setExpandedProjects] = useState({});
  
  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(projects.map(project => project.category))];
    return ['All', ...cats];
  }, []);
  
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(project => project.category === filter);
  }, [filter]);
  
  // Toggle project expansion
  const toggleExpand = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <section className="projects-section" id="projects">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="projects-title"
      >
        My Projects
      </motion.h2>
      
      {/* Category Filters */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-container">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="project-category">{project.category}</div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            
            <div className="expand-toggle" onClick={() => toggleExpand(index)}>
              {expandedProjects[index] ? 'Show Less −' : 'Show More +'}
            </div>
            
            {expandedProjects[index] && (
              <div className="project-details">
                <p><strong>Tech Stack:</strong> {project.tech}</p>
                <p>{project.details}</p>
              </div>
            )}
            
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