import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {year} Next-Gen Developer</p>
        </div>
        <div className="footer-right">
          <p>Made with ❤️ by Amit Kumar Mahto</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
