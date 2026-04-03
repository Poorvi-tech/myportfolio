import React from "react";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import "./CertificationsSection.css";

const recommend = "/assets/recommend.pdf";
const react = "/assets/react.pdf";
const dsa = "/assets/dsa.pdf";
const java = "/assets/java.pdf";
const data_analytics = "/assets/data_analytics.pdf";
const databricks = "/assets/databricks.pdf";
const gemini = "/assets/gemini.pdf";
const generative_AI = "/assets/generative_AI.pdf";
const prompt_engineering = "/assets/prompt_engineering.pdf";
const jintern4 = "/assets/j-intern4.pdf";

const certifications = [
  { name: "Programming in Java", provider: "NPTEL (IIT Kharagpur)", link: java, category: "Programming" },
  { name: "DSA with Java", provider: "Apna College", link: dsa, category: "Programming" },
  { name: "ReactJS", provider: "XCoders", link: react, category: "Web Dev" },
  { name: "Recommendation Letter", provider: "Jayadhi / Magorix Pvt. Ltd.", link: recommend, category: "Professional" },
  { name: "Data Analytics with Generative AI", provider: "Simplilearn", link: data_analytics, category: "AI/ML" },
  { name: "Databricks for Generative AI", provider: "Databricks", link: databricks, category: "AI/ML" },
  { name: "Gemini for Google Workspace", provider: "Google Cloud", link: gemini, category: "Cloud" },
  { name: "Introduction to Generative AI", provider: "Google Cloud", link: generative_AI, category: "AI/ML" },
  { name: "Prompt Engineering with GitHub Copilot", provider: "Microsoft", link: prompt_engineering, category: "AI/ML" },
  { name: "Internship Completion Certificate", provider: "Jayadhi Limited", link: jintern4, category: "Professional" },
];

const CertificationsSection = () => {
  return (
    <section className="section" id="certifications">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaAward /></span>
          <h2>Certifications</h2>
          <span className="cert-count">{certifications.length} certificates</span>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div className="cert-item" key={index}>
              <div className="cert-icon-col">
                <div className="cert-badge">
                  <FaAward />
                </div>
              </div>
              <div className="cert-info">
                <h4 className="cert-name">{cert.name}</h4>
                <p className="cert-provider">{cert.provider}</p>
                <span className="tag" style={{ marginTop: '6px' }}>{cert.category}</span>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-view-link">
                <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
