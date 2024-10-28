function Feature() {
    return (
        <div className="container-fluid overflow-hidden py-5 px-lg-0">
            <div className="container feature py-5 px-lg-0">
                <div className="row g-5 mx-lg-0">
                    <div className="col-lg-6 feature-text wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className=" text-center text-primary text-uppercase mb-3" >Why You Choose Us</h6>
                        <h1 className="mb-5">We Are Trusted Import Export Company</h1>
                            <div className="d-flex mb-5 wow fadeInUp" data-wow-delay="0.3s">
                                <i className="fa fa-globe text-primary fa-3x flex-shrink-0"></i>
                                <div><div className="ms-4">
                                    <h5>Worldwide Service</h5>
                                    <p className="mb-0">We offer seamless import-export solutions across the globe, ensuring your business reaches every corner of the world.</p>
                                </div></div>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-shipping-fast text-primary fa-3x flex-shrink-0"></i>
                                <div><div className="ms-4">
                                    <h5>On Time Delivery</h5>
                                    <p className="mb-0">With our reliable logistics, we guarantee timely delivery, keeping your supply chain efficient and dependable.</p>
                                </div></div>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fas fa-hand-holding-usd text-primary fa-3x flex-shrink-0"></i>
                                <div className="ms-4">
                                    <h5>Price Benefits</h5>
                                    <p className="mb-0">Competitive pricing that enhances your profit margins without compromising on quality or service.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-5 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-solid fa-handshake text-primary fa-3x flex-shrink-0"></i>
                                <div className="ms-4">
                                    <h5>We Build Relations</h5>
                                    <p className="mb-0">We believe in fostering long-term partnerships, prioritizing trust and transparency in every transaction.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-0 wow fadeIn" data-wow-delay="0.5s">
                                <i className="fa fa-solid fa-user-check text-primary fa-3x flex-shrink-0"></i>
                                <div className="ms-4">
                                    <h5>Complete Customer Satisfaction</h5>
                                    <p className="mb-0">Dedicated to exceeding your expectations, we tailor our services to meet all your import-export needs perfectly.</p>
                                </div>
                            </div>

                    </div>
                    <div className="col-lg-6 pe-lg-0 wow fadeInRight" data-wow-delay="0.1s" style={{ minHeight: 400 + 'px' }}>
                        <div className="position-relative h-100">
                            <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg"
                                style={{ objectFit: 'cover' }} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature;
