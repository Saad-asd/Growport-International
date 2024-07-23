function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: 6+'rem'}}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Address</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><a href="tel:6260852048" style={{color: "unset"}}><i className="fa fa-phone-alt me-3"></i>+012 345 67890</a></p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" link=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" link=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" link=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social" link=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Services</h4>
                    <a className="btn btn-link" link="">Air Freight</a>
                    <a className="btn btn-link" link="">Sea Freight</a>
                    <a className="btn btn-link" link="">Road Freight</a>
                    <a className="btn btn-link" link="">Logistic Solutions</a>
                    <a className="btn btn-link" link="">Industry solutions</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Quick Links</h4>
                    <a className="btn btn-link" link="">About Us</a>
                    <a className="btn btn-link" link="">Contact Us</a>
                    <a className="btn btn-link" link="">Our Services</a>
                    <a className="btn btn-link" link="">Terms & Condition</a>
                    <a className="btn btn-link" link="">Support</a>
                </div>
                {/* <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Newsletter</h4>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxWidth: 400+'px'}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button"
                            className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div> */}
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" link="#">Your Site Name</a>, All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
    
                        Designed By <a className="border-bottom" link="https://htmlcodex.com">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Footer;
  