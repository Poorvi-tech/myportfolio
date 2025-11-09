import React, { useState, useEffect, useRef } from "react";
import "./HeroSection.css";

const profilePic = "/assets/poorvi.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroCardRef = useRef(null);
  
  const roles = [
    "B.Tech CSE Student",
    "Aspiring Full Stack Developer",
    "React Enthusiast",
    "Problem Solver"
  ];
  
  const currentRole = roles[currentIndex % roles.length];
  
  // Handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    if (!heroCardRef.current) return;
    
    const rect = heroCardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = ((centerY - y) / centerY) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting text
        setTypedText(currentRole.substring(0, typedText.length - 1));
        setTypingSpeed(50);
      } else {
        // Typing text
        setTypedText(currentRole.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }
      
      // Check if typing is complete
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => prev + 1);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRole, typingSpeed]);
  
  return (
    <section className="hero-section" id="hero">
      <div 
        className="hero-content"
        ref={heroCardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        style={{
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`,
          transition: 'transform 0.1s ease'
        }}
      >
        {/* Profile Photo */}
        <div className="hero-photo-wrapper">
          <img src={profilePic} alt="Poorvi Sahu" className="hero-photo" />
        </div>

        {/* Name & Designation */}
        <h1 className="hero-name">Poorvi Sahu</h1>
        <h2 className="hero-designation">
          {typedText}
          <span className="cursor">|</span>
        </h2>

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
        
        {/* Scroll Down Indicator */}
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
