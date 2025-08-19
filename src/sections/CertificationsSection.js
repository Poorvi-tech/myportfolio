// src/sections/CertificationsSection.js
import React from "react";
import { motion } from "framer-motion";
import "./CertificationsSection.css";

const recommend = "/assets/recommend.pdf";
const react = "/assets/react.pdf";
const dsa = "/assets/dsa.pdf";
const java = "/assets/java.pdf";

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
              View Certificate / Recommendation
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
