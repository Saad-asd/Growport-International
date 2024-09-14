const products = [
	{
		"grocery": {
			"summary": 'Just a simple description about the product.',
			"category": [
					{"Flour": [
						{ "Brown Rice Flour": "/img/productImages/grocery/riceflour1.jpeg" },
						{ "Rice Flour": "/img/productImages/grocery/riceflour2.jpeg" }
					]},
					{"Pulses": [
						{ "toor": "/img/productImages/grocery/pulses.avif" }
					]}
			],
			"desc": 'We offer a wide variety of high-quality groceries for import and export, ensuring your business has access to the ingredients and staples needed to thrive. From aromatic Basmati rice and wholesome whole wheat to seasonal fruits and vegetables, our extensive selection caters to diverse dietary needs and culinary preferences.  We handle the logistics of international trade, so you can focus on delivering delicious options to your customers.',
			"productImage": '/img/productImages/grocery/MainGrocery.avif',
			"subImages": [
				'/img/productImages/grocery/grocery1.webp',
			],
			"subItems": ['Rice', 'Wheat', 'Pulses', 'Flour']
		}
	},
	{
		"furniture": {
			"summary": "Just a simple description about the product.",
			"category": [
				{
					"Sofa": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				},
				{
					"Couch": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "All Types of furniture items can be transported.",
			"productImage": "/img/productImages/furniture/MainFurniture.jfif",
			"subImages": [
				"/img/productImages/furniture/furniture.jfif",
				"/img/productImages/furniture/furniture2.jfif",
				"/img/productImages/furniture/furniture3.jfif",
				"/img/productImages/furniture/furniture4.jfif",
				"/img/productImages/furniture/furniture5.jfif",
				"/img/productImages/furniture/furniture6.jfif"
			],
			"subItems": ["Chairs", "Tables", "Stules", "Bed", "Dining set", "Wardrobe"]
		}},{
		"fabric": {
			"summary": "Just a simple description about the product.",
			"category": [
				{
					"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "All Types of fabric items can be transported.",
			"productImage": "/img/productImages/garments/MainGarments.jfif",
			"subImages": [
				"/img/productImages/garments/garments1.jpg",
				"/img/productImages/garments/garments2.webp",
				"/img/productImages/garments/garments3.webp"
			],
			"subItems": ["Raw Fabrics", "Readymade Garments", "Stitched suits"]
		}},{
		"Other Products": {
			"summary": "Just a simple description about the product.",
			"category": [
				{
					"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "All Types of electronics items can be transported.",
			"productImage": "/img/productImages/jewellery/MainJewellery.jfif",
			"subImages": [],
			"subItems": ["Eggs", "Handicraft items", "Imitation jewellery", "Leather products", "Copper bottle and items", "Ceramic tiles and stones", "Surgical equipment", "Pharmaceutical", "Alkaline water / Minerals water", "Herbal, skin & health products"]
		}},{
		"fruitveggies": {
			"summary": "Just a simple description about the product.",
			"category": [
				{
					"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "All Types of glass items can be transported.",
			"productImage": "/img/productImages/fruitveggies/MainFruitVeggies.jfif",
			"subImages": [
				"/img/productImages/fruitveggies/fruitesveggies1.webp",
				"/img/productImages/fruitveggies/fruitesveggies2.webp",
				"/img/productImages/fruitveggies/fruitesveggies3.webp",
				"/img/productImages/fruitveggies/fruitesveggies4.jpg"
			],
			"subItems": ["Onion", "Green Chilly", "Suran", "Ginger", "Coconuts", "Mango", "Cavendish", "Banana", "Grapes", "Pomegranate"]
		}
	}
	
	// {
	// 	furniture: {
	// 		summary: 'Just a simple description about the product.',
	// 		category: [
	// 			{ Sofa: "/img/productImages/grocery/rice.avif" },
	// 			{ Couch: "/img/productImages/grocery/rice.avif" }
	// 		],
	// 		desc: 'All Types of furniture items can be tranported.',
	// 		productImage: '/img/productImages/furniture/MainFurniture.jfif',
	// 		subImages: [
	// 			'/img/productImages/furniture/furniture.jfif',
	// 			'/img/productImages/furniture/furniture2.jfif',
	// 			'/img/productImages/furniture/furniture3.jfif',
	// 			'/img/productImages/furniture/furniture4.jfif',
	// 			'/img/productImages/furniture/furniture5.jfif',
	// 			'/img/productImages/furniture/furniture6.jfif',
	// 		],
	// 		subItems: ['Chairs', 'Tables', 'Stules', 'Bed', 'Dining set', 'Wardrobe']
	// 	}
	// },
	// {
	// 	fabric: {
	// 		summary: 'Just a simple description about the product.',
	// 		category: [
	// 			{ Rice: "/img/productImages/grocery/rice.avif" }
	// 		],
	// 		desc: 'All Types of febric items can be tranported.',
	// 		productImage: '/img/productImages/garments/MainGarments.jfif',
	// 		subImages: [
	// 			'/img/productImages/garments/garments1.jpg',
	// 			'/img/productImages/garments/garments2.webp',
	// 			'/img/productImages/garments/garments3.webp',
	// 		],
	// 		subItems: ['Raw Fabrics', 'Radimade Garments', 'Stiched suites']
	// 	}
	// },
	// {
	// 	"Other Products": {
	// 		summary: 'Just a simple description about the product.',
	// 		category: [
	// 			{ Rice: "/img/productImages/grocery/rice.avif" }
	// 		],
	// 		desc: 'All Types of electronics items can be tranported.',
	// 		productImage: '/img/productImages/jewellery/MainJewellery.jfif',
	// 		subImages: [
	// 		],
	// 		subItems: ['Eggs', 'Handicraft items', 'Imitation jewellery', 'Leather products', 'Copper bottle and items', 'Ceramic tiles and stones', 'Surgical equipment', 'Pharmaceutical', 'Alkaline water / Minerals water', 'Herbal, skin & health products'],

	// 	}
	// },
	// {
	// 	fruitveggies: {
	// 		summary: 'Just a simple description about the product.',
	// 		category: [
	// 			{ Rice: "/img/productImages/grocery/rice.avif" }
	// 		],
	// 		desc: 'All Types of glass items can be tranported.',
	// 		productImage: '/img/productImages/fruitveggies/MainFruitVeggies.jfif',
	// 		subImages: [
	// 			'/img/productImages/fruitveggies/fruitesveggies1.webp',
	// 			'/img/productImages/fruitveggies/fruitesveggies2.webp',
	// 			'/img/productImages/fruitveggies/fruitesveggies3.webp',
	// 			'/img/productImages/fruitveggies/fruitesveggies4.jpg'
	// 		],
	// 		subItems: ['Onion', 'Green Chilly', 'Suran', 'Ginger', 'Coconuts', 'Mango', 'Cavendish', 'Banana', 'Grapes', 'Pomegranate']
	// 	}
	// }
]
export default products;