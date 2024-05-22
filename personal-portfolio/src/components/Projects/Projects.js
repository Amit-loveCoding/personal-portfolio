import React, { useRef } from "react";
import Slider from "react-slick";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRight = () => {
    sliderRef.current.slickNext();
  };

  const sliderLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="projects-container">
      <h5>Projects</h5>
      <div className="project-content">
        <div className="arrow-right" onClick={sliderRight}>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>
        <div className="arrow-left" onClick={sliderLeft}>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
