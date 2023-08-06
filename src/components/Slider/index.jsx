import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images]);

  useEffect(() => {
    const sliderAuto = setInterval(nextSlide, 3000);

    return () => clearInterval(sliderAuto);
  }, [currentSlide, nextSlide]);
  return (
    <div className="slider__container">
      <div className="image__container">
        <img src={images[currentSlide]} alt="test" className="test" />
      </div>
    </div>
  );
};

export default Slider;
