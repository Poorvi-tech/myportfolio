// src/sections/SkillsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./SkillsSection.css";

const technicalSkills = [
  { name: "JavaScript", level: 90 },
  { name: "ReactJS", level: 85 },
  { name: "Node.js & Express", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "HTML & CSS", level: 95 },
  { name: "SQL", level: 80 },
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
  return (
    <section className="skills-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="skills-title"
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-bar-container">
              <p>{skill.name}</p>
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
