import React from 'react';
// import React, { useState, useEffect } from 'react';

function License() {
  const slidesData = [
    'https://www.shutterstock.com/image-photo/world-logistics-background-transportation-industry-260nw-1666881946.jpg',
    'https://cdn.corporatefinanceinstitute.com/assets/imports-and-exports.jpeg',
    'https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/steelexport1.jpg'
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const sliderInterval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(sliderInterval);
  // }, [currentIndex]);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="text-center">
          <h6 className="text-primary text-uppercase red-head">
            Licences & Certificates
          </h6>
        </div>
        {/* <div id="slider-container">
          <div id="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slidesData.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
          <button id="prevBtn" onClick={prevSlide}></button>
          <button id="nextBtn" onClick={nextSlide}></button>
        </div> */}


        {/* <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel"> */}
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          </div>


          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.shutterstock.com/image-photo/world-logistics-background-transportation-industry-260nw-1666881946.jpg" alt="Los Angeles" class="d-block" style={{ width: "100%" }} />
              <div class="carousel-caption">
                <h3>Los Angeles</h3>
                <p>We had such a great time in LA!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://cdn.corporatefinanceinstitute.com/assets/imports-and-exports.jpeg" alt="Chicago" class="d-block" style={{ width: "100%" }} />
              <div class="carousel-caption">
                <h3>Chicago</h3>
                <p>Thank you, Chicago!</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/steelexport1.jpg" alt="New York" class="d-block" style={{ width: "100%" }} />
              <div class="carousel-caption">
                <h3>New York</h3>
                <p>We love the Big Apple!</p>
              </div>
            </div>
          </div>
          {/* <div className="carousel-inner">
            {slidesData.map((slide, index) => (
              // <div key={index} className="slide">
              //   <img src={slide} alt={`Slide ${index + 1}`} />
              // </div>
              <div key={index} className="carousel-item active">
                <img src={slide} className="d-block w-100" alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div> */}
          {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button> */}
          <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
          </button>
        </div>



      </div>
    </div>
  );
}


// `<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-inner">
//   <div className="carousel-item active" data-bs-interval="10000">
//     <img src="..." className="d-block w-100" alt="...">
//   </div>
//   <div className="carousel-item" data-bs-interval="2000">
//     <img src="..." className="d-block w-100" alt="...">
//   </div>
//   <div className="carousel-item">
//     <img src="..." className="d-block w-100" alt="...">
//   </div>
// </div>
// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
//   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span className="visually-hidden">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
//   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//   <span className="visually-hidden">Next</span>
// </button>
// </div>`

export default License;
