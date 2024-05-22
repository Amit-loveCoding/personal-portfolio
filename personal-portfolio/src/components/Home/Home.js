import React, { useEffect, useRef } from "react";
import pdf from "../../amit.pdf";
import "./Home.css";
import amit from "../../Asset/image/amitk.jpg";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Hey there! Welcome to my profile.",
        "I'm Amit Kumar Mahto.",
        "A passionate front-end web developer.",
        "Excited to embark on my journey as a fresher in the tech world!",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      onComplete: function (self) {
        const colors = ["#086418 ", "#E0E50F", "#DD130", "#436E96", "#A80CD9"];
        const colorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[colorIndex];
        self.el.style.color = color;
      },
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home-container">
      <div
        className="home-content"
        data-aos="fade-up-right"
        data-aos-duration="1000"
      >
        <div
          className="home-img"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <img src={amit} alt="Amit Kumar Mahto" />
        </div>
        <h1 ref={typedRef}></h1>
        <p>
          I specialize in creating dynamic and beautiful web pages. I'm looking
          forward to starting my career and learning more every day.
        </p>
        <a href={pdf} download="Resume.pdf" className="resume-button">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
