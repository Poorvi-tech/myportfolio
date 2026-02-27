import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, ReferenceLine } from "recharts";
import "./EducationSection.css";

const semesterData = [
  { name: "Sem I", sgpa: 7.26, credits: 23 },
  { name: "Sem II", sgpa: 7.61, credits: 23 },
  { name: "Sem III", sgpa: 9.45, credits: 22 },
  { name: "Sem IV", sgpa: 9.55, credits: 22 },
  { name: "Sem V", sgpa: 8.89, credits: 19 },
];

const cgpa = 8.52;

const getBarColor = (sgpa) => {
  if (sgpa >= 9.0) return "#057642";
  if (sgpa >= 8.0) return "#0A66C2";
  return "#2D87D4";
};

const EducationSection = () => {
  return (
    <section className="section" id="education">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaGraduationCap /></span>
          <h2>Education</h2>
        </div>

        {/* University Info */}
        <div className="edu-university">
          <div className="edu-uni-info">
            <h3>Dr. Harisingh Gour Central University, Sagar</h3>
            <p className="edu-degree">B.Tech in Computer Science & Engineering</p>
            <p className="edu-year">2023 – 2027 (Expected)</p>
          </div>
          <div className="edu-cgpa-badge">
            <span className="cgpa-number">{cgpa}</span>
            <span className="cgpa-label">CGPA</span>
          </div>
        </div>

        {/* Key Stats */}
        <div className="edu-stats-row">
          <div className="edu-stat">
            <span className="edu-stat-value">8.52</span>
            <span className="edu-stat-label">CGPA</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-value">78.98%</span>
            <span className="edu-stat-label">WAM</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-value">B+</span>
            <span className="edu-stat-label">Grade</span>
          </div>
          <div className="edu-stat">
            <span className="edu-stat-value">5/8</span>
            <span className="edu-stat-label">Semesters</span>
          </div>
        </div>

        {/* SGPA Chart */}
        <div className="edu-chart-box">
          <h4>Semester-wise SGPA</h4>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={semesterData} margin={{ top: 10, right: 10, bottom: 5, left: -10 }}>
              <XAxis
                dataKey="name"
                tick={{ fill: "var(--text-tertiary)", fontSize: 12, fontFamily: "var(--font-family)" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 10]}
                tick={{ fill: "var(--text-tertiary)", fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  fontFamily: "var(--font-family)",
                }}
                formatter={(value, name) => {
                  if (name === "sgpa") return [value.toFixed(2), "SGPA"];
                  return [value, name];
                }}
              />
              <ReferenceLine
                y={cgpa}
                stroke="var(--primary)"
                strokeDasharray="5 5"
                strokeWidth={1.5}
                label={{ value: `CGPA ${cgpa}`, position: "right", fill: "var(--primary)", fontSize: 11, fontWeight: 600 }}
              />
              <Bar dataKey="sgpa" radius={[6, 6, 0, 0]} barSize={40} name="sgpa">
                {semesterData.map((entry, i) => (
                  <Cell key={i} fill={getBarColor(entry.sgpa)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Semester Table */}
        <div className="edu-table-wrapper">
          <table className="edu-table">
            <thead>
              <tr>
                <th>Semester</th>
                <th>SGPA</th>
                <th>Credits</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {semesterData.map((sem, i) => (
                <tr key={i}>
                  <td className="edu-sem-name">{sem.name}</td>
                  <td>
                    <span className={`sgpa-pill ${sem.sgpa >= 9 ? "sgpa-high" : sem.sgpa >= 8 ? "sgpa-mid" : "sgpa-normal"}`}>
                      {sem.sgpa.toFixed(2)}
                    </span>
                  </td>
                  <td>{sem.credits}</td>
                  <td><span className="status-pass">PASS</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coursework */}
        <div className="edu-coursework">
          <h4>Relevant Coursework</h4>
          <div className="coursework-tags">
            {["Data Structures", "Analysis & Design of Algorithms", "Database Management System", "Operating System", "Computer Networks", "Software Engineering", "Theory of Computation", "Discrete Structures", "Computer Organization & Architecture", "Digital Electronics", "Data Communication", "Cyber Security"].map((course, i) => (
              <span key={i} className="tag">{course}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
