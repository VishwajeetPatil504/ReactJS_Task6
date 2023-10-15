import React from 'react';
import Slider from "react-slick";
import './Projects.css';

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <Slider {...settings}>
        <div>
          <h3>Project 1</h3>
          <p>This is a brief description of Project 1.</p>
        </div>
        <div>
          <h3>Project 2</h3>
          <p>This is a brief description of Project 2.</p>
        </div>
        {/* Add more projects as needed */}
      </Slider>
    </div>
  );
}

export default Projects;
