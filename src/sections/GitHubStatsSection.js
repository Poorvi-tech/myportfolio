import React, { useState, useEffect } from "react";
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBookOpen, FaExternalLinkAlt } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import "./GitHubStatsSection.css";

const GITHUB_USERNAME = "Poorvi-tech";

const GitHubStatsSection = () => {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch user profile
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userRes.json();

        // Fetch repos
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        const reposData = await reposRes.json();

        // Calculate stats
        const totalStars = reposData.reduce((sum, r) => sum + (r.stargazers_count || 0), 0);
        const totalForks = reposData.reduce((sum, r) => sum + (r.forks_count || 0), 0);

        setStats({
          publicRepos: userData.public_repos || reposData.length,
          followers: userData.followers || 0,
          following: userData.following || 0,
          totalStars,
          totalForks,
          avatar: userData.avatar_url,
          bio: userData.bio,
          profileUrl: userData.html_url,
        });

        // Top repos by stars/activity
        const topRepos = [...reposData]
          .sort((a, b) => (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count))
          .slice(0, 6)
          .map(r => ({
            name: r.name.length > 16 ? r.name.substring(0, 16) + "…" : r.name,
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url,
          }));
        setRepos(topRepos);

        // Language breakdown
        const langCount = {};
        reposData.forEach(r => {
          if (r.language) {
            langCount[r.language] = (langCount[r.language] || 0) + 1;
          }
        });
        const langData = Object.entries(langCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, value]) => ({ name, value }));
        setLanguages(langData);

      } catch (err) {
        console.error("GitHub API error:", err);
        // Fallback data
        setStats({
          publicRepos: 15,
          followers: 5,
          following: 10,
          totalStars: 3,
          totalForks: 2,
          profileUrl: `https://github.com/${GITHUB_USERNAME}`,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const LANG_COLORS = ["#0A66C2", "#2D87D4", "#50A8E6", "#73C9F8", "#96DAFF", "#B9EBFF"];

  if (loading) {
    return (
      <section className="section" id="github">
        <div className="section-card">
          <div className="section-header">
            <span className="section-icon"><FaGithub /></span>
            <h2>GitHub Activity</h2>
          </div>
          <div className="github-loading">
            <div className="loading-spinner" style={{ width: 28, height: 28 }}></div>
            <p>Fetching live GitHub data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="github">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaGithub /></span>
          <h2>GitHub Activity</h2>
          <a href={stats?.profileUrl} target="_blank" rel="noreferrer" className="github-profile-link">
            View Profile <FaExternalLinkAlt />
          </a>
        </div>

        {/* Stats Grid */}
        <div className="github-stats-grid">
          <div className="github-stat-card">
            <FaBookOpen className="github-stat-icon" />
            <span className="github-stat-number">{stats?.publicRepos}</span>
            <span className="github-stat-label">Repositories</span>
          </div>
          <div className="github-stat-card">
            <FaStar className="github-stat-icon" />
            <span className="github-stat-number">{stats?.totalStars}</span>
            <span className="github-stat-label">Total Stars</span>
          </div>
          <div className="github-stat-card">
            <FaCodeBranch className="github-stat-icon" />
            <span className="github-stat-number">{stats?.totalForks}</span>
            <span className="github-stat-label">Total Forks</span>
          </div>
          <div className="github-stat-card">
            <FaUsers className="github-stat-icon" />
            <span className="github-stat-number">{stats?.followers}</span>
            <span className="github-stat-label">Followers</span>
          </div>
        </div>

        {/* Charts Row */}
        <div className="github-charts-row">
          {/* Top Repos Bar Chart */}
          <div className="github-chart-box">
            <h4>Top Repositories</h4>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={repos} margin={{ left: -10, right: 10, top: 10, bottom: 40 }}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "var(--text-tertiary)", fontSize: 11, fontFamily: "var(--font-family)" }}
                  axisLine={false}
                  tickLine={false}
                  angle={-25}
                  textAnchor="end"
                  interval={0}
                />
                <YAxis hide />
                <Tooltip
                  contentStyle={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-light)",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-family)",
                  }}
                />
                <Bar dataKey="stars" fill="var(--primary)" radius={[4, 4, 0, 0]} barSize={24} name="Stars" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Languages Pie Chart */}
          <div className="github-chart-box">
            <h4>Languages Used</h4>
            <div className="github-pie-wrapper">
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={languages}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    dataKey="value"
                    stroke="var(--bg-surface)"
                    strokeWidth={2}
                  >
                    {languages.map((_, i) => (
                      <Cell key={i} fill={LANG_COLORS[i % LANG_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border-light)",
                      borderRadius: "8px",
                      fontSize: "0.8rem",
                      fontFamily: "var(--font-family)",
                    }}
                    formatter={(value, name) => [`${value} repos`, name]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="github-legend">
                {languages.map((lang, i) => (
                  <div key={i} className="legend-item">
                    <span className="legend-dot" style={{ background: LANG_COLORS[i % LANG_COLORS.length] }}></span>
                    <span className="legend-label">{lang.name}</span>
                    <span className="legend-count">{lang.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Image */}
        <div className="github-contrib-box">
          <h4>Contribution Activity</h4>
          <img
            src={`https://ghchart.rshah.org/0A66C2/${GITHUB_USERNAME}`}
            alt="GitHub Contributions"
            className="github-contrib-img"
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStatsSection;
