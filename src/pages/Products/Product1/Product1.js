import { useParams } from 'react-router-dom';
import products from '../../../common/products';
import { isEmptyObject } from 'jquery';

function Product1() {
	const { id } = useParams();

	const elements = []
	let prdObj;
	for (let i in products) {
		if (Object.keys(products[i])[0] === id) {
			prdObj = products[i][id]
			let itemImages = prdObj['subImages'].map((imgPath) => {
				return <div className="col">
					<div className="card">
						<img src={imgPath} alt={'Product Item ' + id} />
						<div className="card-footer">
							<small className="text-muted">Last updated 3 mins ago</small>
						</div>
					</div>
				</div>
			});
			elements.push(itemImages)
			break;
		}
	}
	alert(isEmptyObject(prdObj))

	return (
		<>
			<div className="container-fluid page-header py-5" style={{ marginBottom: 6 + "rem" }}>
				<div className="container py-5">
					<h1 className="display-3 text-white mb-3 animated slideInDown">Product Details</h1>
					<nav aria-label="breadcrumb animated slideInDown">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
							<li className="breadcrumb-item"><a className="text-white" href="#">Product</a></li>
							<li className="breadcrumb-item text-white active" aria-current="page">{id}</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className="container">
				<h2>Product Details</h2>
				<div class="card mb-3">
					<img src={prdObj['productImage']} alt={'main image ' + id} maxWidth={'600px'} class="image-fluid" />
						<div class="card-body">
							<h5 class="card-title">{id.toUpperCase()}</h5>
							<p class="card-text">{prdObj['desc']}</p>
						</div>
				</div>

			</div>


			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 g-4">
					{elements}
				</div>
			</div>


			{/* {elements} */}
		</>
	)
}
export default Product1;