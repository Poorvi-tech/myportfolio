// src/sections/SkillsSection.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";

const technicalSkills = [
  { name: "JavaScript", level: 90, experience: "4+ years" },
  { name: "ReactJS", level: 85, experience: "3+ years" },
  { name: "Node.js & Express", level: 80, experience: "3+ years" },
  { name: "MongoDB", level: 75, experience: "2+ years" },
  { name: "HTML & CSS", level: 95, experience: "5+ years" },
  { name: "SQL", level: 80, experience: "3+ years" },
];

const softSkills = [
  "Problem-solving",
  "Teamwork",
  "API documentation",
  "Agile workflow",
  "Creativity",
  "Leadership",
  "Adaptability",
  "Attention to Detail",
  "Effective Communication",
  "Continuous Learning",
];

const SkillsSection = () => {
  const [showExperience, setShowExperience] = useState(false);
  
  return (
    <section className="skills-section" id="skills">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="skills-title"
      >
        My Skills
      </motion.h2>
      
      <div className="skills-toggle">
        <button 
          className={`toggle-btn ${showExperience ? 'active' : ''}`}
          onClick={() => setShowExperience(!showExperience)}
        >
          {showExperience ? 'Hide Experience' : 'Show Experience'}
        </button>
      </div>

      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-bar-container">
              <div className="skill-header">
                <p>{skill.name}</p>
                <p className="skill-level">{skill.level}%</p>
              </div>
              {showExperience && (
                <p className="skill-experience">Experience: {skill.experience}</p>
              )}
              <motion.div
                className="skill-bar"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: index * 0.2 }}
              >
                <span>{skill.level}%</span>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="soft-skill-badge"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
