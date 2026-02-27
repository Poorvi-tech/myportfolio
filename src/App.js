import Sidebar from "./components/Sidebar";
import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import GitHubStatsSection from "./sections/GitHubStatsSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationsSection from "./sections/CertificationsSection";
import BadgesSection from "./sections/BadgesSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { useEffect, useState, useCallback } from "react";
import "./App.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      document.body.setAttribute('data-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 300);
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      setScrollProgress((window.scrollY / totalHeight) * 100);
    }
  }, []);

  useEffect(() => {
    const loadingTimer = setTimeout(() => setIsLoading(false), 1200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadingTimer);
    };
  }, [handleScroll]);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <h2>Loading Portfolio...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="main-content">
        <HeroSection />
        <AboutMeSection />
        <EducationSection />
        <GitHubStatsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <BadgesSection />
        <SkillsSection />
        <ContactSection />
        <FooterSection />
      </main>

      {/* Back to Top */}
      <div
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Back to top"
      >
        ↑
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
    </div>
  );
}

export default App;