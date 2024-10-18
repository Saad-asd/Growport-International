import React, { useState } from 'react';
import $ from 'jquery';

function Quote() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        freight: 'Select A Freight',
        specialNote: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/send-email', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Email sent successfully!");
        }
        else {
            alert("Failed to send email: ", response);
        }
    };
    return (
        <div id="contact" className="container-xxl py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="text-secondary text-uppercase mb-3">Get A Quote</h6>
                        <h1 className="mb-5">Request A Free Quote!</h1>
                        <p className="mb-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                            eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div className="d-flex align-items-center">
                            <i className="fa fa-headphones fa-2x flex-shrink-0 bg-primary p-3 text-white"></i>
                            <div className="ps-4">
                                <h6>Call for any query!</h6>
                                <h3 className="text-primary m-0"><a href="tel:9244566292" style={{color: "unset"}}>+91 92445 66292</a></h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bg-light text-center p-5 wow fadeIn" data-wow-delay="0.5s">
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Your Name"
                                        style={{ height: 55 + 'px' }}
                                        name="name" // Add the name attribute
                                        value={formData.name} // Set the value from state
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="email"
                                        className="form-control border-0"
                                        placeholder="Your Email"
                                        style={{ height: 55 + 'px' }}
                                        name="email" // Add the name attribute
                                        value={formData.email} // Set the value from state
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input
                                        type="text"
                                        className="form-control border-0"
                                        placeholder="Your Mobile"
                                        style={{ height: 55 + 'px' }}
                                        name="mobile" // Add the name attribute
                                        value={formData.mobile} // Set the value from state
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select
                                        className="form-select border-0"
                                        style={{ height: 55 + 'px' }}
                                        name="freight" // Add the name attribute
                                        value={formData.freight} // Set the value from state
                                        onChange={handleChange}
                                    >
                                        <option value="Select A Freight">Select A Freight</option>
                                        <option value="1">Freight 1</option>
                                        <option value="2">Freight 2</option>
                                        <option value="3">Freight 3</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea
                                        className="form-control border-0"
                                        placeholder="Special Note"
                                        name="specialNote" // Add the name attribute
                                        value={formData.specialNote} // Set the value from state
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quote;
