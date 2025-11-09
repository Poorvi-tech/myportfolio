// src/sections/CertificationsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./CertificationsSection.css";

const recommend = "/assets/recommend.pdf";
const react = "/assets/react.pdf";
const dsa = "/assets/dsa.pdf";
const java = "/assets/java.pdf";
const data_analytics = "/assets/data_analytics.pdf";
const databricks = "/assets/databricks.pdf";
const gemini = "/assets/gemini.pdf";
const generative_AI = "/assets/generative_AI.pdf";
const prompt_engineering = "/assets/prompt_engineering.pdf";

const certifications = [
  {
    name: "Programming in Java",
    provider: "NPTEL (IIT Kharagpur)",
    link: java,
  },
  {
    name: "DSA with Java",
    provider: "Apna College",
    link: dsa,
  },
  {
    name: "ReactJS",
    provider: "XCoders",
    link: react,
  },
  {
    name: "Recommendation Letter",
    provider: "Jayadhi Limited / Magorix Pvt. Ltd.",
    link: recommend,
  },
  {
    name: "Data Analytics with Generative AI",
    provider: "JSimplilearn",
    link: data_analytics,
  },
  {
    name: "Get Started with Databricks for GenerativeAI",
    provider: "databrics",
    link: databricks,
  },
  {
    name: "Gemini for Google Workspace",
    provider: "Google Cloud",
    link: gemini,
  },
  {
    name: "Introduction to Generative AI",
    provider: "Google Cloud",
    link: generative_AI,
  },
  {
    name: "Introduction to Prompt Engineering withGitHub Copilot",
    provider: "Microsoft",
    link: prompt_engineering,
  },
];

const CertificationsSection = () => {
  return (
    <section className="certifications-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="certifications-title"
      >
        Certifications & Badges
      </motion.h2>

      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-provider">{cert.provider}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate 
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
