import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./TestimonialsSection.css";

const testimonials = [
  {
    name: "Jayadhi / Magorix Team",
    role: "Internship Supervisor",
    company: "Jayadhi Limited",
    text: "Poorvi demonstrated exceptional dedication during her internship. Her ability to quickly grasp complex backend architecture and deliver production-quality REST APIs was remarkable. She consistently went above and beyond expectations.",
    rating: 5,
  },
  {
    name: "XCoders Team",
    role: "Internship Mentor",
    company: "XCoders",
    text: "Poorvi showed outstanding skills in ReactJS development. Her attention to UI/UX details and her collaborative approach made her a valuable team member. She built 3 responsive web applications during her tenure.",
    rating: 5,
  },
  {
    name: "Academic Faculty",
    role: "B.Tech CSE Department",
    company: "Dr. Harisingh Gour University",
    text: "Poorvi is one of the most driven students in our program. Her passion for coding, combined with her creative thinking and problem-solving skills, sets her apart. She consistently performs well in both academics and practical projects.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section" id="testimonials">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaQuoteLeft /></span>
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-quote">
                <FaQuoteLeft className="quote-icon" />
                <p>{t.text}</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
