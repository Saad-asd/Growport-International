import React, { useState, useEffect } from 'react';

function License() {
  const slidesData = [
    'https://www.shutterstock.com/image-photo/world-logistics-background-transportation-industry-260nw-1666881946.jpg',
    'https://cdn.corporatefinanceinstitute.com/assets/imports-and-exports.jpeg',
    'https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/steelexport1.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="text-center">
          <h6 className="text-primary text-uppercase red-head">
            Licences & Certificates
          </h6>
        </div>
        <div id="slider-container">
          <div id="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slidesData.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button id="prevBtn" onClick={prevSlide}></button>
          <button id="nextBtn" onClick={nextSlide}></button>
        </div>
      </div>
    </div>
  );
}

export default License;
