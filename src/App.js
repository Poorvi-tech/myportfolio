import HeroSection from "./sections/HeroSection";
import AboutMeSection from "./sections/AboutMeSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import CertificationsSection from "./sections/CertificationsSection";
import BadgesSection from "./sections/BadgesSection";
import SkillsSection from "./sections/SkillsSection";
import FooterSection from "./sections/FooterSection";

function App() {
  return (
    <div>
      <HeroSection />
      <AboutMeSection />
       <ExperienceSection />
       <ProjectsSection />
        <CertificationsSection />
        <BadgesSection />
        <SkillsSection />
         <FooterSection />
    </div>
  );
}

export default App;
