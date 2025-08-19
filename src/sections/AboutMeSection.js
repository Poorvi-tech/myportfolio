// src/sections/AboutMeSection.js
import React from "react";
import { motion } from "framer-motion";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="aboutme-title"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="aboutme-text"
        >
          Hi, I’m <strong>Poorvi Sahu</strong> — a passionate and dedicated Computer Science
          student from Dr. Harisingh Gour Central University, Sagar. Currently in my 3rd year
          of B.Tech (CSE), I specialize in full-stack web development and enjoy creating
          applications that are responsive, secure, and user-friendly.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="aboutme-text"
        >
          I have hands-on experience with <strong>Java, ReactJS, Node.js, Express, MongoDB, and SQL</strong>.
          My journey includes working on real-world projects and internships, contributing to
          scalable platforms like Ambulance Booking System, ZeroPrint, and WomenLine.
        </motion.p>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="aboutme-text"
        >
          Beyond coding, I love <strong>painting, singing, and designing templates on Canva</strong>.
          I approach every project with creativity, curiosity, and a problem-solving mindset.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMeSection;
