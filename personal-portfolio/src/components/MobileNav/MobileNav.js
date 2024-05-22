import React from "react";
import "./MobileNav.css";
import { Link } from "react-router-dom";
import pdf from "../../amit.pdf";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <Link to="/" className="logo">
            <p>
              My PortFolio <span>Crafting The Digital Realm</span>
            </p>
          </Link>
          <ul>
            <li>
              <a href="/home" className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a className="menu-item" href="/skills">
                Skills
              </a>
            </li>

            <li>
              <a className="menu-item" href="/internship">
                Internship
              </a>
            </li>

            <li>
              <a className="menu-item" href="/projects">
                Projects
              </a>
            </li>

            <li>
              <a className="menu-item" href="/contact">
                Contact Me
              </a>
            </li>

            <a href={pdf} download="Resume.pdf">
              <button className="contact-btn" download onClick={() => {}}>
                Hire Me
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
