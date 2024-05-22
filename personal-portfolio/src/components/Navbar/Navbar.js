import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <Link to="/" className="logo">
            <p>
              My PortFolio <span>Crafting The Digital Realm</span>
            </p>
          </Link>

          <ul>
            <li>
              <Link to="/home" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/skills" className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/internship" className="menu-item">
                Internship
              </Link>
            </li>
            <li>
              <Link to="/projects" className="menu-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact Me
              </Link>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
