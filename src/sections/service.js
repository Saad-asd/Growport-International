import { Link } from "react-router-dom";
import products from "../common/products";

function Service() {
    // const productNames = productData.products.map(product => Object.keys(product)[0]).sort();
    const productNames = ["leather","grocery","fruit&vegitable","fabric", "copper","furniture"];
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const elements = productNames.map((productName, index) => {
        const item = products.find(product => Object.keys(product)[0] === productName)[productName];
        return <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" key={index}>
            <Link className="service-item p-4 card" to={"/products/" + productName}>
                <div className="overflow-hidden mb-4 img-cntr">
                    <img className="img-fluid" src={item.productImage} alt="" />
                </div>
                <h4 className="mb-3">{capitalize(productName)}</h4>
                <p>{item.summary}</p>
                {/* <Link className="btn-slide mt-2" to={"/products/" + productName}><i className="fa fa-arrow-right"></i><span>Read More</span></Link> */}
            </Link>
        </div>;
    });

    return (
        <div id="service" className="container-xxl py-5">
            <div className="container py-5">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="text-primary text-uppercase red-head">What we export</h6>
                    <h1 className="mb-5">Explore Our Products</h1>
                </div>
                <div className="row g-4">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default Service;