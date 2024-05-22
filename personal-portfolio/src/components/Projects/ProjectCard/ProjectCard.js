import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ details }) => {
  return (
    <div className="project-card">
      <h6>{details.title}</h6>
      <div className="links">
        <a href={details.github} target="_blank" rel="noopener noreferrer">
          <span>Code</span>
        </a>
        <a href={details.view} target="_blank" rel="noopener noreferrer">
          <span>Demo</span>
        </a>
      </div>
      <ul>
        {details.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
