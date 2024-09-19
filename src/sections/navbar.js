import { NavLink } from 'react-router-dom';
import products from '../common/products';

function Navbar() {
    const productNames = products.map(product => Object.keys(product)[0]).sort();
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    const elements = productNames.map(productName => {
        const item = products.find(product => Object.keys(product)[0] === productName)[productName];
        return <NavLink activeClassName="active" className="dropdown-item" to={"/products/" + productName}>{ capitalize(productName)}</NavLink>;
    });

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="/" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
                <h2 className="mb-2 text-white">Growport_Int</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink exact activeClassName="active" to="/" className="nav-item nav-link">Home</NavLink>
                    <a href="/#about" className="nav-item nav-link">About</a>
                    <a href="/#service" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                        <div className="dropdown-menu fade-up m-0">
                            {elements}
                        </div>
                    </div>
                    <a href="#contact" className="nav-item nav-link">Contact</a>
                </div>
                <h4 className="m-0 pe-lg-5 d-none d-lg-block"><a href="tel:6260852048" style={{color: "unset"}}><i className="fa fa-phone-alt me-3 text-primary me-3"></i>+91 999 395 6153</a></h4>
            </div>
        </nav>
    );
}

export default Navbar;
