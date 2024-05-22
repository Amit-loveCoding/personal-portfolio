import React from "react";
import "./Hero.css";
import icon1 from "../../Asset/image/react.png";
import hero from "../../Asset/image/hero.jpg";
import icon2 from "../../Asset/image/html.png";
import icon3 from "../../Asset/image/javascript.png";
import icon4 from "../../Asset/image/css.png";
import icon5 from "../../Asset/image/nodejs.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Bringing Fresh and Creative Ideas to the Web</h2>
        <p>
          Frontend Web Developer | Java Developer - Crafting Seamless and
          Efficient Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={icon1} alt="react" />
          </div>
          <img src={hero} alt="hero" className="hero-image" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={icon2} alt="html" />
          </div>
          <div className="tech-icon">
            <img src={icon3} alt="javascript" />
          </div>
          <div className="tech-icon">
            <img src={icon4} alt="css" />
          </div>
          <div className="tech-icon">
            <img src={icon5} alt="html" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
