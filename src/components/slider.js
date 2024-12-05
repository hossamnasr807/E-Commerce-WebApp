import React, { useState } from 'react';
import './slider.css';

const Slider = () => {
    const images = [
        "images/offer.png",
        "images/offer 2.png",
        "images/offer 3.png",
        // Add more image URLs as needed
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="prev-btn" onClick={prevSlide}>
          &#8592;
        </button>
        <div className="slider-images">
          <img
            src={images[currentIndex]}
            alt={`Offer ${currentIndex + 1}`}
            className="slider-image"
          />
        </div>
        <button className="next-btn" onClick={nextSlide}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Slider;

