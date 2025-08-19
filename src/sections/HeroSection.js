import React from "react";
import "./HeroSection.css";

const profilePic = "/assets/poorvi.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Profile Photo */}
        <div className="hero-photo-wrapper">
          <img src={profilePic} alt="Poorvi Sahu" className="hero-photo" />
        </div>

        {/* Name & Designation */}
        <h1 className="hero-name">Poorvi Sahu</h1>
        <h2 className="hero-designation">B.Tech CSE Student | Aspiring Full Stack Developer</h2>

        {/* Tagline */}
        <p className="hero-tagline">
          Code. Create. Improve — building technology that makes life simpler.
        </p>

        {/* Contact Buttons */}
        <div className="hero-contacts">
          <a href="mailto:poorvisahu975@gmail.com" className="contact-btn" target="_blank" rel="noreferrer">
            📧 Email
          </a>
          <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="contact-btn" target="_blank" rel="noreferrer">
            🔗 LinkedIn
          </a>
          <a href="https://github.com/Poorvi-tech" className="contact-btn" target="_blank" rel="noreferrer">
            🖥 GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
