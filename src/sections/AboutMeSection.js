import React from "react";
import { FaUser, FaGraduationCap, FaLaptopCode, FaPalette } from "react-icons/fa";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <section className="section" id="about">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaUser /></span>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <p className="about-intro">
            Hi, I'm <strong>Poorvi Sahu</strong> — a passionate and dedicated Computer Science
            student from Dr. Harisingh Gour Central University, Sagar. Currently in my 3rd year
            of B.Tech (CSE), I specialize in full-stack web development and enjoy creating
            applications that are responsive, secure, and user-friendly.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon"><FaGraduationCap /></div>
              <h4>Education</h4>
              <p>B.Tech CSE, 3rd Year<br />Dr. Harisingh Gour Central University</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaLaptopCode /></div>
              <h4>Tech Stack</h4>
              <p>Java, ReactJS, Node.js, Express, MongoDB, SQL</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon"><FaPalette /></div>
              <h4>Beyond Code</h4>
              <p>Painting, Singing, Designing Templates on Canva</p>
            </div>
          </div>

          <p className="about-text">
            My journey includes working on real-world projects and internships, contributing to
            scalable platforms like Ambulance Booking System, ZeroPrint, and WomenLine.
            I approach every project with creativity, curiosity, and a problem-solving mindset.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
