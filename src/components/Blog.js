import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";

const photos = [
banner1,banner2,banner3
];

const PhotoSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
  };

  const handleNextSlide = () => {
    setActiveSlideIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="photo-slider">
      <div className="slides">
        {photos.map((photo, index) => (
          <div key={index} className={index === activeSlideIndex ? "active" : "inactive"}>
            <img src={photo} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={handlePrevSlide}>Prev</button>
        <button onClick={handleNextSlide}>Next</button>
      </div>
      <div className="nav-buttons">
        {photos.map((photo, index) => (
          <NavLink key={index} to={`/${index}`} onClick={() => handleSlideChange(index)} activeClassName="active">
            <img src={photo} alt={`Slide ${index}`} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PhotoSlider;
