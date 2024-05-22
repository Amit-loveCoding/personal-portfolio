import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => typeof onClick === "function" && onClick()} // Check if onClick is a function
    >
      <div className="skills-icon">
        <img src={iconUrl} alt={title} />
      </div>

      <span>{title}</span>
    </div>
  );
};

export default SkillCard;
