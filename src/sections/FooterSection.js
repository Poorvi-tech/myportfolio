import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Poorvi Sahu. All Rights Reserved.</p>
        <p>Designed & Developed with ❤️ by me</p>
        <div className="footer-decor">
          {/* Optional decorative elements */}
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
