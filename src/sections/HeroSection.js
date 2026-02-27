import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
import "./HeroSection.css";

const profilePic = "/assets/poorvi.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Enthusiast",
    "Backend Engineer",
    "Problem Solver"
  ];

  const currentRole = roles[currentIndex % roles.length];

  useEffect(() => {
    const speed = isDeleting ? 40 : 120;
    const timer = setTimeout(() => {
      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }

      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRole]);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-card section-card">
        {/* Cover */}
        <div className="hero-cover">
          <div className="hero-cover-pattern"></div>
        </div>

        {/* Profile */}
        <div className="hero-body">
          <div className="hero-avatar-wrapper">
            <img src={profilePic} alt="Poorvi Sahu" className="hero-avatar" />
            <span className="hero-online-dot"></span>
          </div>

          <div className="hero-info">
            <h1 className="hero-name">Poorvi Sahu</h1>
            <p className="hero-typed">
              {typedText}
              <span className="typed-cursor">|</span>
            </p>
            <p className="hero-tagline">
              B.Tech CSE · Dr. Harisingh Gour Central University, Sagar
            </p>
            <div className="hero-meta">
              <span className="meta-item">
                <FaMapMarkerAlt /> Sagar, MP, India
              </span>
              <span className="meta-item meta-link">
                <a href="mailto:poorvisahu975@gmail.com">
                  <FaEnvelope /> poorvisahu975@gmail.com
                </a>
              </span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9+</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="mailto:poorvisahu975@gmail.com" className="hero-btn hero-btn-primary">
              <FaEnvelope /> Get in Touch
            </a>
            <a href="/assets/resume.pdf" download className="hero-btn hero-btn-secondary">
              <FaDownload /> Resume
            </a>
            <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306" target="_blank" rel="noreferrer" className="hero-btn hero-btn-outline">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/Poorvi-tech" target="_blank" rel="noreferrer" className="hero-btn hero-btn-outline">
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
