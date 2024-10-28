import { NavLink } from 'react-router-dom';
// import products from '../common/products';

function Navbar() {
    // const productNames = products.map(product => Object.keys(product)[0]).sort();
    // const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    // const elements = productNames.map(productName => {
    //     const item = products.find(product => Object.keys(product)[0] === productName)[productName];
    //     return <NavLink activeClassName="active" className="dropdown-item" to={"/products/" + productName}>{ capitalize(productName)}</NavLink>;
    // });

    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
            <a href="/" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"><h6 className="mb-2 text-white" style={{lineHeight:.56}}>
                <div style={{fontFamily: 'Montserrat', transformOrigin: 'left', transform: 'scaleY(1.6) scaleX(0.8)', fontSize: '20px', letterSpacing: '6px'}}>
      GROWPORT
    </div><br/>
            <span style={{fontFamily: 'Montserrat', color: "#060315",fontSize:"16px",textDecorationLine: "underline"}}>INTERNATIONAL</span></h6>

            </a>
            <button type="button" className="navbar-toggler me-4" style={{fontSize:"1rem", borderWidth:"0px"}} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <NavLink exact="true" activeclassname="active" to="/" className="nav-item nav-link">Home</NavLink>
                    <a href="/#about" className="nav-item nav-link">About</a>
                    <a href="/#service" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                        <div className="dropdown-menu fade-down m-0">
                            {/* {elements} */}
                            <NavLink className="dropdown-item" to="/products/leather">Leather</NavLink>
                            <NavLink className="dropdown-item" to="/products/grocery">Grocery</NavLink>
                            <NavLink className="dropdown-item" to="/products/fruit&vegitable">Fruit&Vegitable</NavLink>
                            <NavLink className="dropdown-item" to="/products/fabric">Fabric</NavLink>
                            <NavLink className="dropdown-item" to="/products/copper">Copper</NavLink>
                            <NavLink className="dropdown-item" to="/products/furniture">Furniture</NavLink>
                        </div>
                    </div>
                    <a href="/#contact" className="nav-item nav-link">Contact</a>
                </div>
                <h4 className="m-0 pe-lg-5 d-none d-lg-block"><a href="tel:9244566292" style={{color: "unset"}}><i className="fa fa-phone-alt me-3 text-primary me-3"></i>+91 92445 66292</a></h4>
            </div>
        </nav>
    );
}

export default Navbar;
