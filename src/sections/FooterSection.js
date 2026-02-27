import React from "react";
import { FaHeart, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <h3>Poorvi Sahu</h3>
            <p>Full Stack Developer · B.Tech CSE</p>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/poorvi-sahu-406aaa306" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Poorvi-tech" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:poorvisahu975@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Poorvi Sahu. All Rights Reserved.</p>
          <p className="footer-credit">
            Designed & Developed with <FaHeart className="footer-heart" /> by Poorvi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
