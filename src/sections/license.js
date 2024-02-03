function License() {
    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="text-center">
                <h6 className="text-primary text-uppercase red-head">Licences & Certificates</h6>
            </div>
            <div id="slider-container">
                <div id="slider">
                    <div className="slide"><img src="https://www.shutterstock.com/image-photo/world-logistics-background-transportation-industry-260nw-1666881946.jpg" alt="Slide 1"/></div>
                    <div className="slide"><img src="https://cdn.corporatefinanceinstitute.com/assets/imports-and-exports.jpeg" alt="Slide 2"/></div>
                    <div className="slide"><img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/06/steelexport1.jpg" alt="Slide 3"/></div>
                </div>
                <button id="prevBtn" onclick="prevSlide()"></button>
                <button id="nextBtn" onclick="nextSlide()"></button>
            </div>
        </div>
    </div>
    );
  }
  
  export default License;
  