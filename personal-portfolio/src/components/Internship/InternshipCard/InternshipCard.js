import React from "react";
import "./InternshipCard.css";

const InternshipCard = ({ details }) => {
  return (
    <div className="internship-card">
      <div className="detali-top">
        <h6>{details.company}</h6>
        <h6>{details.date}</h6>
      </div>

      <div className="detail-bottom">
        <h6>{details.position}</h6>
        <h6>{details.location}</h6>
      </div>

      <ul>
        {details.desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipCard;
