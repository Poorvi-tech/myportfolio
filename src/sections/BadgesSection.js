import React from "react";
import { FaMedal, FaExternalLinkAlt } from "react-icons/fa";
import "./BadgesSection.css";

const shark = "/assets/shark.png";
const quickdraw = "/assets/quickdraw.png";
const yolo = "/assets/yolo.png";
const wariors = "/assets/wariors.png";
const fledging = "/assets/fledging.png";
const googlecloud = "/assets/googlecloud.png";

const badges = [
  { name: "Pull Shark", platform: "GitHub Achievement", image: shark, link: "https://github.com/users/Poorvi-tech/achievements/pull-shark" },
  { name: "Quickdraw", platform: "GitHub Achievement", image: quickdraw, link: "https://github.com/users/Poorvi-tech/achievements/quickdraw" },
  { name: "YOLO", platform: "GitHub Achievement", image: yolo, link: "https://github.com/users/Poorvi-tech/achievements/yolo" },
  { name: "Infosys Fledgling", platform: "Infosys Springboard", image: fledging, link: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=836IW54LX3" },
  { name: "Infosys Warrior", platform: "Infosys Springboard", image: wariors, link: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=TXEHMYSDEB" },
  { name: "Google Cloud Arcade", platform: "Google Cloud Skills Boost", image: googlecloud, link: "https://www.cloudskillsboost.google/public_profiles/0e9cc29f-44f4-4467-aa9b-b1d057cc688a" },
];

const BadgesSection = () => {
  return (
    <section className="section" id="badges">
      <div className="section-card">
        <div className="section-header">
          <span className="section-icon"><FaMedal /></span>
          <h2>Badges & Achievements</h2>
        </div>

        <div className="badges-grid">
          {badges.map((badge, index) => (
            <a
              key={index}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-card card-hover"
            >
              <div className="badge-img-wrapper">
                <img src={badge.image} alt={badge.name} className="badge-img" />
              </div>
              <div className="badge-info">
                <h4 className="badge-name">{badge.name}</h4>
                <p className="badge-platform">{badge.platform}</p>
              </div>
              <FaExternalLinkAlt className="badge-ext-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;
