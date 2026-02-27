import React, { useState, useEffect } from "react";
import { FaUser, FaBriefcase, FaCode, FaAward, FaMedal, FaChartBar, FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes, FaGraduationCap, FaMoon, FaSun } from "react-icons/fa";
import "./Sidebar.css";

const profilePic = "/assets/poorvi.jpg";

const navItems = [
  { id: "hero", label: "Profile", icon: <FaUser /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "github", label: "GitHub Stats", icon: <FaGithub /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaCode /> },
  { id: "certifications", label: "Certifications", icon: <FaAward /> },
  { id: "badges", label: "Badges", icon: <FaMedal /> },
  { id: "skills", label: "Skills", icon: <FaChartBar /> },
  { id: "contact", label: "Contact", icon: <FaEnvelope /> },
];

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      })).filter(s => s.element);

      let current = "hero";
      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();
        if (rect.top <= 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile header */}
      <div className="mobile-header">
        <div className="mobile-header-content">
          <div className="mobile-brand">
            <img src={profilePic} alt="Poorvi Sahu" className="mobile-avatar" />
            <span>Poorvi Sahu</span>
          </div>
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${mobileOpen ? "open" : ""}`}>
        {/* Profile snippet */}
        <div className="sidebar-profile">
          <img src={profilePic} alt="Poorvi Sahu" className="sidebar-avatar" />
          <h3 className="sidebar-name">Poorvi Sahu</h3>
          <p className="sidebar-role">Full Stack Developer</p>
          <div className="sidebar-status">
            <span className="status-dot"></span>
            Open to Work
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {activeSection === item.id && <span className="nav-indicator" />}
            </button>
          ))}
        </nav>

        {/* Dark Mode Toggle */}
        <div className="sidebar-theme-toggle">
          <button className="theme-toggle-btn" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="sidebar-footer">
          <div className="sidebar-socials">
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
          <p className="sidebar-copyright">© 2026 Poorvi Sahu</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
