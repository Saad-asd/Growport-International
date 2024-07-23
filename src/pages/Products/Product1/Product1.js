import { useParams } from 'react-router-dom';
import products from '../../../common/products';
import './Product.css';

function Product1() {
	const { id } = useParams();

	const category = [];
	let itemObj;
	for (let i in products) {
		if (Object.keys(products[i])[0] === id) {
			itemObj = products[i][id];
			itemObj['category'].forEach((subObject) => {
				Object.keys(subObject).forEach((subCategory) => {
					const rowItems = [];
					rowItems.push(<h2 style={{ textAlign: 'center' }}>{subCategory.toString().toUpperCase()}</h2>);
					const itemList = subObject[subCategory].map((item, index) => {
						const itemName = Object.keys(item)[0];
						const itemImage = item[itemName];
						return (
							<div className="col-6 col-sm-3 col-md-3 col-lg-4" key={index}>
								<div className="card">
									<div className="img-cntr">
										<img src={itemImage} alt={'Product Item ' + itemName} />
									</div>
									<div className="card-footer" style={{ textAlign: 'center' }}>
										<small className="text-muted">{itemName}</small>
									</div>
								</div>
							</div>
						);
					});
					rowItems.push(<div className="row">{itemList}</div>);
					category.push(<div className="col-12">{rowItems}</div>);
				});
			});
			break;
		}
	}
	
	const elements = [];
	let prdObj;
	for (let i in products) {
		if (Object.keys(products[i])[0] === id) {
			prdObj = products[i][id]
			let itemImages = prdObj['subImages'].map((imgPath) => {
				return <div className="col-sm-3 col-md-3 col-lg-4">
					<div className="card">
						<div className="img-cntr">
							<img src={imgPath} alt={'Product Item ' + id} />
						</div>
						<div className="card-footer" style={{ textAlign: "center" }} >
							<small className="text-muted">Last transport 3 months ago</small>
						</div>
					</div>
				</div>;
			});
			elements.push(itemImages)
			break;
		}
	}


	return (
		<>
			<div className="container-fluid page-header py-5" style={{ marginBottom: 6 + "rem" }}>
			<h2>{id[0].toUpperCase()+id.slice(1,id.length)}</h2>
			</div>

			<div className="container">
				<h2>Product Details</h2>
				<div className="row mb-3" style={{direction: "row",padding: "20px 10px",border: "1px solid #DFDDDE"}}>
					<img src={prdObj['productImage']} alt={'main image ' + id} className="col-sm-12 col-md-7 image-fluid" />
					<div className="card-body col-md-3 col-sm-12">
						<h5 className="card-title">{id.toUpperCase()}</h5>
						<p className="card-text" style={{overflow: "auto",maxHeight: "300px"}}>{prdObj['desc']}</p>
					</div>
				</div>

			</div>

			<div className="container">
				<div className="row mb-3 g-4">
					{elements}
				</div>
			<h1 style={{color:"#FF3E41",textAlign:"center"}}>Few types of {id} mentioned below</h1>
				<div className="row g-4">
					{category}
				</div>
			</div>

		</>
	)
}
export default Product1;