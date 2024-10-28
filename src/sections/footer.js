function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 wow fadeIn" data-wow-delay="0.1s" style={{marginTop: 6+'rem'}}>
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-6 col-md-12">
                    <h4 className="text-light mb-4">Information</h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Ashoka Garden, MP, India. 462023</p>
                    <p className="mb-2"><a href="tel:9244566292" style={{color: "unset"}}><i className="fa fa-phone-alt me-3"></i>+91 92445 66292</a></p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@growportinternational.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href="https://x.com/shahwazkha649?t=acpvSQa3fDtgWwjZc6z64A&s=08" target="blank"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.facebook.com/profile.php?id=100039421230023&mibextid=ZbWKwL" target="blank"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://wa.me/qr/G6I3FWZ7GDDYD1" target="blank"><i className="fab fa-whatsapp"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/growportinternational/profilecard/?igsh=anQyYzNna29jOHZ2" target="blank"><i className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/shahwaz-merchant-877a5a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                {/* <div className="col-lg-3 col-md-6">
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
                </div> */}
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
                        &copy; <a className="border-bottom" link="#">Growport International</a>, All Right Reserved.
                    </div>
                    {/* <div className="col-md-6 text-center text-md-end">
                        Designed By <a className="border-bottom" link="https://htmlcodex.com">HTML Codex</a>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Footer;
  