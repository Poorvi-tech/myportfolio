// src/sections/BadgesSection.js
import React from "react";
import { motion } from "framer-motion";
import "./BadgesSection.css";

const shark = "/assets/shark.png";
const quickdraw = "/assets/quickdraw.png";
const yolo = "/assets/yolo.png";
const wariors = "/assets/wariors.png";
const fledging = "/assets/fledging.png";
const googlecloud = "/assets/googlecloud.png";

const badges = [
  {
    name: "Pull Shark-Github Achievements",
    image: shark, 
    link: "https://github.com/users/Poorvi-tech/achievements/pull-shark",
  },
  {
    name: "Quickdraw-Github Achievements",
    image: quickdraw,
    link: "https://github.com/users/Poorvi-tech/achievements/quickdraw",
  },
  {
    name: "YOLO-Github Achievements",
    image: yolo, 
    link: "https://github.com/users/Poorvi-tech/achievements/yolo",
  },
  {
      name: "Infosys Fledgling",
      image: fledging,
      link: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=836IW54LX3",
    },
    {
        name: "Infosys Warrior",
        image: wariors,
        link: "https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=TXEHMYSDEB",
    },
    {
      name: "Google Cloud Arcade & Skills Boost Achievements",
      image: googlecloud, 
      link: "https://www.cloudskillsboost.google/public_profiles/0e9cc29f-44f4-4467-aa9b-b1d057cc688a",
    },
];

const BadgesSection = () => {
  return (
    <section className="badges-section">
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="badges-title"
      >
        My Badges
      </motion.h2>

      <div className="badges-container">
        {badges.map((badge, index) => (
          <motion.div
            key={index}
            className="badge-card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
             <img src={badge.image} alt={badge.name} className="badge-image" />
      <p>
        <a href={badge.link} target="_blank" rel="noopener noreferrer">
          {badge.name}
        </a>
      </p>
    </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BadgesSection;
