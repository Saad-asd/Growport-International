import { useParams } from 'react-router-dom';
function Product1() {
	const { id } = useParams();
	const products = [
		{
			grocery: {
				desc: 'All Types of grocery items can be tranported.',
				productImage: '/img/productImages/grocery/MainGrocery.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			furniture: {
				desc: 'All Types of furniture items can be tranported.',
				productImage: '/img/productImages/furniture/MainFurniture.jfif',
				subImages:[
					'/img/productImages/furniture/furniture.jfif',
					'/img/productImages/furniture/furniture2.jfif',
					'/img/productImages/furniture/furniture3.jfif',
					'/img/productImages/furniture/furniture4.jfif',
					'/img/productImages/furniture/furniture5.jfif',
					'/img/productImages/furniture/furniture6.jfif',
				]
			}
		},
		{
			garments: {
				desc: 'All Types of febric items can be tranported.',
				productImage: '/img/productImages/garments/MainGarments.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			jewellery: {
				desc: 'All Types of electronics items can be tranported.',
				productImage: '/img/productImages/jewellery/MainJewellery.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			leather: {
				desc: 'All Types of glass items can be tranported.',
				productImage: '/img/productImages/leather/MainLeatherProducts.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			packaging: {
				desc: 'All Types of glass items can be tranported.',
				productImage: '/img/productImages/packaging/MainPackagingProducts.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			ceramic: {
				desc: 'All Types of glass items can be tranported.',
				productImage: '/img/productImages/ceramic/MainCeramicProducts.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			copper: {
				desc: 'All Types of glass items can be tranported.',
				productImage: '/img/productImages/copper/MainCopperProducts.jfif',
				subImages:[
					'',
				]
			}
		},
		{
			fruitveggies: {
				desc: 'All Types of glass items can be tranported.',
				productImage: '/img/productImages/fruitveggies/MainFruitVeggies.jfif',
				subImages:[
					'',
				]
			}
		},
	]
	const elements = []
	let prdObj;
	for (let i in products) {
		if (Object.keys(products[i])[0] === id) {
			prdObj = products[i][id]
			let itemImages = prdObj['subImages'].map((imgPath)=>{
				return <div className="ImgDiv">
					<figure>
						<img src={imgPath} alt={'Product Item ' + id}></img>
						<figcaption className="CenterAlign">Your label goes here</figcaption>
					</figure>
				</div>
			});
			elements.push(<div className="ProductImages">
				{itemImages}
			</div>)
			break;
		}
	}

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

			<div className="MainCon">
				<h2>Product Details</h2>
				<div className="SubCon">
					<div className="Column2">
						<img src={prdObj['productImage']} alt={'main image ' + id} />
					</div>
					<div className="Column2">
						<p>{prdObj['desc']}</p>
					</div>
				</div>

			</div>
			{elements}
		</>
	)
}
export default Product1;