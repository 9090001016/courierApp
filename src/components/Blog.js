import React, { useState, useEffect } from "react";
import "../css/slider.css";
import banner1 from "../image/banner1.png";
import banner2 from "../image/banner2.png";
import banner3 from "../image/banner3.png";
import img1 from "../image/image 1.png";
import img2 from "../image/image 2.png";

const photos = [banner3, banner2, img1, banner1, img2];

const Blog = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="photo-slider">
      {photos.map((pic, index) => {
        return (
          <div className="white_border">
            <img
              key={index}
              src={pic}
              alt="Current_photo"
              className={
                currentPhotoIndex === index ? "activePhoto" : "not_active"
              }
            />
            <p>We understand the importance of timely and safe delivery,which is why we have a strict screening.</p>
          </div>
        );
      })}

      <div className="dots">
        {photos.map((_, index) => (
          <button
            key={index}
            className={index === currentPhotoIndex ? "active" : ""}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
