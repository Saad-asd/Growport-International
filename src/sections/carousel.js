/* global $ */
import React, { useEffect } from "react";
import './carousel.css';
import 'owl.carousel/dist/owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Import Owl Carousel CSS

function Carousel() {
    useEffect(() => {
        $(".header-carousel").owlCarousel({
            autoplay: true,
            autoplayTimeout:5000,
            items: 1,
            loop: true,
            nav: true,
            navText: [
                '<i class="bi bi-chevron-left" ></i>',
                '<i class="bi bi-chevron-right" ></i>'
              ]
        });
    }, []);

    return (
        <div className="container-fluid p-0 pb-5">
            <div className="owl-carousel header-carousel position-relative mb-5">
                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-1.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: 'rgba(6, 3, 21, .5)' }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">Growport<span
                                        className="text-primary"> International</span> LLM</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Bridging Borders, Creating Opportunities,
                                        Your Best Gateway to Global Trade Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-3.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: 'rgba(6, 3, 21, .5)' }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Growport International
                                        LLM</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span
                                        className="text-primary">Import and Export </span> Services</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">Where Every Shipment is a Testament to
                                        Seamless Trade and Boundless Opportunities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="owl-carousel-item position-relative">
                    <img className="img-fluid" src="img/carousel-2.jpg" alt="" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                        style={{ background: 'rgba(6, 3, 21, .5)' }}>
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-10 col-lg-8">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Growport International
                                        LLM</h5>
                                    <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span
                                        className="text-primary">Import and Export</span> Services</h1>
                                    <p className="fs-5 fw-medium text-white mb-4 pb-2">We Navigate Global Markets, Fostering
                                        Connections, and Deliver Excellence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;
