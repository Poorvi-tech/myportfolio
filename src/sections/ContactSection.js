import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import "./ContactSection.css";

const ContactSection = () => {

  return (
    <section className="section" id="contact">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaEnvelope /></span>
          <h2>Get in Touch</h2>
        </div>

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info-panel">
            <p className="contact-intro">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <FaEnvelope className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Email</span>
                  <a href="mailto:poorvisahu975@gmail.com" className="contact-detail-value">poorvisahu975@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="contact-detail-icon" />
                <div>
                  <span className="contact-detail-label">Location</span>
                  <span className="contact-detail-value">Sagar, MP, India</span>
                </div>
              </div>
            </div>

            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306" target="_blank" rel="noreferrer" className="contact-social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com/Poorvi-tech" target="_blank" rel="noreferrer" className="contact-social-btn">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
