import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import EmailIcon from "../../Asset/image/email.jpg";
import GithubIcon from "../../Asset/image/github.png";
import LinkedinIcon from "../../Asset/image/linkedin.jpeg";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={EmailIcon}
            text="amit.mahto3097@gmail.com"
            link="mailto:amit.mahto3097@gmail.com"
          />
          <ContactInfoCard
            iconUrl={GithubIcon}
            text="https://github.com/Amit-loveCoding"
            link="https://github.com/Amit-loveCoding"
          />
          <ContactInfoCard
            iconUrl={LinkedinIcon}
            text="https://www.linkedin.com/in/amit-kumar-mahto-25437a295/"
            link="https://www.linkedin.com/in/amit-kumar-mahto-25437a295/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
