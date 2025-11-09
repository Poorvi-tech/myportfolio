import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationsSection from "./sections/CertificationsSection";
import BadgesSection from "./sections/BadgesSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";
import { useEffect, useState } from "react";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Handle scroll for back to top button and active section
  useEffect(() => {
    const handleScroll = () => {
      // Back to top button
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Loading simulation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(loadingTimer);
    };
  }, []);

  // Loading screen
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
    <div>
      {/* Animated Bubbles */}
      <div className="bubbles-container">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              '--size': `${Math.random() * 100 + 50}px`,
              '--left': `${Math.random() * 100}%`,
              '--top': `${Math.random() * 100}%`,
              '--delay': `${Math.random() * 10}s`,
              '--duration': `${Math.random() * 20 + 10}s`,
              '--color': i % 3 === 0 ? '66, 165, 245' : i % 3 === 1 ? '108, 99, 255' : '255, 105, 180'
            }}
          />
        ))}
      </div>
      
      <HeroSection id="hero" />
      <AboutMeSection id="about" />
      <ExperienceSection id="experience" />
      <ProjectsSection id="projects" />
      <CertificationsSection id="certifications" />
      <BadgesSection id="badges" />
      <SkillsSection id="skills" />
      <ContactSection id="contact" />
      <FooterSection />
      
      {/* Back to Top Button */}
      <div 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        role="button"
        aria-label="Back to top"
      >
        ↑
      </div>
      
      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{
            width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;