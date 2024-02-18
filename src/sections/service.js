import products from "../common/products";

function Service() {
    const elements = []
	for (let i in products) {
        let productName = Object.keys(products[i])[0]
			let item = Object.values(products[i])[0];
            elements.push(<div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item p-4">
                <div className="overflow-hidden mb-4">
                    <img className="img-fluid" src={item.productImage} alt="" />
                </div>
                <h4 className="mb-3">{productName}</h4>
                <p>{item.desc}</p>
                <a className="btn-slide mt-2" href="/products/furniture"><i className="fa fa-arrow-right"></i><span>Read More</span></a>
            </div>
        </div>)
	}

    return (
        <div id="service" className="container-xxl py-5">
            <div className="container py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase red-head">Our Services</h6>
                    <h1 className="mb-5">Explore Our Services</h1>
                </div>
                <div className="row g-4">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default Service;
