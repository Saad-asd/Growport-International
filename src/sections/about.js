function About() {
    return (
      <div className="container-fluid overflow-hidden py-5 px-lg-0">
        <div className="container about py-5 px-lg-0">
            <div className="row g-5 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeInLeft" data-wow-delay="0.1s" style={{minHeight: 400+'px'}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/about.jpg"
                            style={{objectFit: "cover"}} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="text-uppercase red-head">About Us</h6>
                    <h1 className="mb-5">Best Import And Export Services</h1>
                    <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                        eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="row g-4 mb-5">
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                            <i className="fa fa-globe fa-3x text-primary mb-3"></i>
                            <h5>Global Coverage</h5>
                            <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                            </p>
                        </div>
                        <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                            <i className="fa fa-shipping-fast fa-3x text-primary mb-3"></i>
                            <h5>On Time Delivery</h5>
                            <p className="m-0">Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam justo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default About;
  