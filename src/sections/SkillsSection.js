import React, { useState, useEffect, useRef } from "react";
import { FaChartBar } from "react-icons/fa";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";
import "./SkillsSection.css";

const technicalSkills = [
  { name: "JavaScript", level: 90 },
  { name: "ReactJS", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "HTML/CSS", level: 95 },
  { name: "SQL", level: 80 },
];

const radarData = technicalSkills.map(s => ({
  subject: s.name,
  value: s.level,
  fullMark: 100,
}));

const softSkills = [
  "Problem Solving", "Teamwork", "API Documentation",
  "Agile Workflow", "Creativity", "Leadership",
  "Adaptability", "Attention to Detail",
  "Communication", "Continuous Learning",
];

const barColors = ["#0A66C2", "#1179D3", "#1B8CE4", "#3A9CE8", "#5AADEC", "#7ABEF0"];

const SkillsSection = () => {
  const [chartType, setChartType] = useState("radar");
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaChartBar /></span>
          <h2>Skills</h2>
        </div>

        <div className="skills-layout">
          {/* Technical Skills */}
          <div className="skills-tech-panel">
            <div className="skills-tech-header">
              <h3>Technical Skills</h3>
              <div className="chart-toggle">
                <button
                  className={`toggle-chip ${chartType === "radar" ? "active" : ""}`}
                  onClick={() => setChartType("radar")}
                >
                  Radar
                </button>
                <button
                  className={`toggle-chip ${chartType === "bar" ? "active" : ""}`}
                  onClick={() => setChartType("bar")}
                >
                  Bar
                </button>
              </div>
            </div>

            {/* Chart */}
            <div className="chart-container">
              {chartType === "radar" ? (
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={radarData} outerRadius="70%">
                    <PolarGrid stroke="var(--border-light)" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fill: "var(--text-secondary)", fontSize: 12, fontFamily: "var(--font-family)" }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={{ fill: "var(--text-tertiary)", fontSize: 10 }}
                    />
                    <Radar
                      name="Proficiency"
                      dataKey="value"
                      stroke="var(--primary)"
                      fill="var(--primary)"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={technicalSkills} layout="vertical" margin={{ left: 20, right: 20, top: 10, bottom: 10 }}>
                    <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 11 }} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      width={80}
                      tick={{ fill: "var(--text-secondary)", fontSize: 12, fontFamily: "var(--font-family)" }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border-light)",
                        borderRadius: "8px",
                        fontFamily: "var(--font-family)",
                        fontSize: "0.82rem",
                      }}
                    />
                    <Bar dataKey="level" radius={[0, 6, 6, 0]} barSize={20}>
                      {technicalSkills.map((_, i) => (
                        <Cell key={i} fill={barColors[i % barColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>

            {/* Animated Progress Bars */}
            <div className="progress-bars" ref={progressRef}>
              {technicalSkills.map((skill, i) => (
                <div key={i} className="progress-item">
                  <div className="progress-label">
                    <span>{skill.name}</span>
                    <span className="progress-pct">{skill.level}%</span>
                  </div>
                  <div className="progress-track">
                    <div
                      className={`progress-fill ${isVisible ? "animate" : ""}`}
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        background: barColors[i % barColors.length],
                        transitionDelay: `${i * 0.12}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="skills-soft-panel">
            <h3>Soft Skills</h3>
            <div className="soft-skills-grid">
              {softSkills.map((skill, i) => (
                <div key={i} className={`soft-skill-item ${isVisible ? "animate" : ""}`} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <span className="soft-check">✓</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
