import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
  );
};

export default ContactInfoCard;
