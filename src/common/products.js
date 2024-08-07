const products = [
	{
		"grocery": {
			"summary": 'Just a simple description about the product.',
			"category": [
					{"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]},
					{"Pulses": [
						{ "toor": "/img/productImages/grocery/rice.avif" },
						{ "masoor": "/img/productImages/grocery/rice.avif" }
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
			"summary": "Soft and breathable fabric, perfect for all-day comfort. Durable, stylish, and available in various colors.",
			"category": [
				{
					"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "A versatile and durable fabric made from high-quality materials, ideal for clothing, home textiles, and crafts. Its soft texture and breathable properties ensure comfort, while its strength and easy-care features make it perfect for everyday use. Available in various colors and patterns to suit any style or project.",
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
			"summary": "Fresh, colorful fruit and veggies in a convenient line – packed with vitamins, flavor, and crunch. Perfect for a healthy snack or meal!",
			"category": [
				{
					"Rice": [
						{ "galexy": "/img/productImages/grocery/rice.avif" },
						{ "basmati": "/img/productImages/grocery/rice.avif" }
					]
				}
			],
			"desc": "Our selection of fresh fruits and vegetables offers a vibrant variety of colors, flavors, and nutrients. Each item is carefully sourced to ensure peak freshness and quality, perfect for enhancing your meals with natural goodness.
 Packed with essential vitamins, minerals, and antioxidants to support overall health.",
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
	// 		desc: '',
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
