export class DataBase {
  constructor() {
    if (DataBase.instance) {
      return DataBase.instance;
    }

    this.dataBaseShop = [
      (this.lstShoppingCar = [
        {
          shoppingCarId: "40224211418-PRD011-04302024",
          customerId: "40224211418",
          quantity: 5,
          productId: "PRD011",
          datePurchase: "04302024",
          status: "ACTIVE",
          subTotal: 4040
        },
        {
          shoppingCarId: "40224211418-PRD012-04302024",
          customerId: "40224211418",
          quantity: 2,
          productId: "PRD012",
          datePurchase: "04302024",
          status: "ACTIVE",
          subTotal: 4040
        }, 
      ]),
      (this.lstProducts = [
          {
            productId: "PRD001",
            name: "Wireless Headphones",
            description:
              "High-quality headphones with noise-canceling technology.",
            warehouse: "ElectroMart",
            brand: "SoundBliss",
            category: "Electronics",
            price: "$99.99",
            quantity: 50,
            status: "AVAILABLE",
            urlImg: "assets/key001.png",
          },
          {
            productId: "PRD002",
            name: "Leather Wallet",
            description:
              "Genuine leather wallet with multiple card slots and a coin pocket.",
            warehouse: "FashionTrends",
            brand: "LeatherCraft",
            category: "Accessories",
            price: "$39.99",
            quantity: 100,
            status: "AVAILABLE",
            urlImg: "assets/key002.png",
          },
          {
            productId: "PRD003",
            name: "Stainless Steel Water Bottle",
            description:
              "Durable water bottle with double-wall insulation to keep drinks hot or cold.",
            warehouse: "OutdoorGear",
            brand: "AdventurePro",
            category: "Sports & Outdoors",
            price: "$19.99",
            quantity: 75,
            status: "AVAILABLE",
            urlImg: "assets/key003.png",
          },
          {
            productId: "PRD004",
            name: "Smartphone Case",
            description:
              "Slim and lightweight case for protecting your smartphone from scratches and bumps.",
            warehouse: "TechAccessories",
            brand: "GuardShield",
            category: "Electronics",
            price: "$14.99",
            quantity: 120,
            status: "AVAILABLE",
            urlImg: "assets/key004.png",
          },
          {
            productId: "PRD005",
            name: "Coffee Maker",
            description:
              "Programmable coffee maker with a built-in grinder for freshly ground coffee beans.",
            warehouse: "HomeAppliances",
            brand: "BrewMaster",
            category: "Kitchen",
            price: "$79.99",
            quantity: 30,
            status: "AVAILABLE",
            urlImg: "assets/key005.png",
          },
          {
            productId: "PRD006",
            name: "Yoga Mat",
            description:
              "Eco-friendly yoga mat with non-slip surface for improved grip during workouts.",
            warehouse: "FitnessEssentials",
            brand: "EcoYogi",
            category: "Sports & Outdoors",
            price: "$29.99",
            quantity: 60,
            status: "AVAILABLE",
            urlImg: "assets/key006.png",
          },
          {
            productId: "PRD007",
            name: "Denim Jeans",
            description:
              "Classic denim jeans with a relaxed fit and distressed finish.",
            warehouse: "FashionEmporium",
            brand: "BlueDenim",
            category: "Apparel",
            price: "$49.99",
            quantity: 80,
            status: "AVAILABLE",
            urlImg: "assets/key007.png",
          },
          {
            productId: "PRD008",
            name: "Wireless Mouse",
            description:
              "Ergonomic wireless mouse with adjustable DPI and customizable buttons.",
            warehouse: "TechGadgets",
            brand: "TechPro",
            category: "Electronics",
            price: "$24.99",
            quantity: 90,
            status: "AVAILABLE",
            urlImg: "assets/key008.png",
          },
          {
            productId: "PRD009",
            name: "Backpack",
            description:
              "Spacious backpack with padded straps and multiple compartments for organization.",
            warehouse: "OutdoorGear",
            brand: "TrailBlazer",
            category: "Travel & Luggage",
            price: "$49.99",
            quantity: 40,
            status: "AVAILABLE",
            urlImg: "assets/key009.png",
          },
          {
            productId: "PRD010",
            name: "Sunglasses",
            description:
              "Polarized sunglasses with UV protection and stylish design.",
            warehouse: "FashionTrends",
            brand: "SunGuard",
            category: "Accessories",
            price: "$29.99",
            quantity: 110,
            status: "AVAILABLE",
            urlImg: "assets/key010.png",
          },
          {
            productId: "PRD011",
            name: "Portable Charger",
            description:
              "Compact portable charger with fast charging capability for smartphones and tablets.",
            warehouse: "TechAccessories",
            brand: "PowerUp",
            category: "Electronics",
            price: "$34.99",
            quantity: 5,
            status: "Out of stock",
            urlImg: "assets/key011.png",
          },
          {
            productId: "PRD012",
            name: "Travel Mug",
            description:
              "Insulated travel mug with spill-proof lid, perfect for hot beverages on the go.",
            warehouse: "HomeAppliances",
            brand: "TravelMate",
            category: "Kitchen",
            price: "$12.99",
            quantity: 0,
            status: "Out of stock",
            urlImg: "assets/key012.png",
          },
          {
            productId: "PRD013",
            name: "Digital Watch",
            description:
              "Digital watch with alarm, stopwatch, and backlight functions.",
            warehouse: "FashionTrends",
            brand: "TimeMaster",
            category: "Accessories",
            price: "$29.99",
            quantity: 0,
            status: "Out of stock",
            urlImg: "assets/key013.png",
          },
          {
            productId: "PRD014",
            name: "Bluetooth Speaker",
            description: "Portable Bluetooth speaker with high-fidelity sound.",
            warehouse: "TechAccessories",
            brand: "SoundWave",
            category: "Electronics",
            price: "$59.99",
            quantity: 25,
            status: "AVAILABLE",
            urlImg: "assets/key014.png",
          },
          {
            productId: "PRD015",
            name: "Wireless Earbuds",
            description:
              "True wireless earbuds with long battery life and water-resistant design.",
            warehouse: "ElectroMart",
            brand: "TunePods",
            category: "Electronics",
            price: "$79.99",
            quantity: 40,
            status: "AVAILABLE",
            urlImg: "assets/key015.png",
          },
          {
            productId: "PRD016",
            name: "Running Shoes",
            description:
              "Lightweight and breathable running shoes for enhanced performance.",
            warehouse: "SportsGear",
            brand: "RunFlex",
            category: "Sports & Outdoors",
            price: "$79.99",
            quantity: 25,
            status: "AVAILABLE",
            urlImg: "assets/key016.png",
          },
          {
            productId: "PRD017",
            name: "Stainless Steel Watch",
            description:
              "Classic stainless steel watch with quartz movement and date display.",
            warehouse: "FashionTrends",
            brand: "SteelTime",
            category: "Accessories",
            price: "$99.99",
            quantity: 30,
            status: "AVAILABLE",
            urlImg: "assets/key017.png",
          },
          {
            productId: "PRD018",
            name: "Inline Skates",
            description:
              "High-performance inline skates for recreational and fitness skating.",
            warehouse: "SportsGear",
            brand: "SkatePro",
            category: "Sports & Outdoors",
            price: "$129.99",
            quantity: 20,
            status: "AVAILABLE",
            urlImg: "assets/key018.png",
          },
      ]),
      (this.lstCustomer = [
        {
          customerId: "40224211413",
          firstName: "Reinis",
          lastName: "Espinal Cruz",
          userName: "40224211413",
          password: "coderHouse1",
        },
        {
          customerId: "00119446300",
          firstName: "Stefany Del Carmen",
          lastName: "Muñoz Duran",
          userName: "00119446300",
          password: "coderHouse2",
        },
        {
          customerId: "00107349943",
          firstName: "Rafael Antonio",
          lastName: "Castillo Felox",
          userName: "00107349943",
          password: "coderHouse1",
        },
      ]),
      (this.lstUser = [
        { userName: "00119446300", password: "coderhouse2", isLogin: false },
        { userName: "40224211413", password: "coderhouse1", isLogin: false },
      ]),
      (this.lstLog = [
        {
          logId: "40224211413-1-LOGIN",
          userName: "40224211413",
          customerId: "40224211413",
          status: "LOGIN",
          date: "10/2/2024, 2:23:15 p. m",
        },
      ]),
    ];
    // Almacena las listas en el local storage
    this.saveToLocalStorage();

    DataBase.instance = this;
  }

  saveToLocalStorage() {
    localStorage.setItem("dataBaseShop", JSON.stringify(this.dataBaseShop));
  }

  static loadFromLocalStorage() {

    const dataBaseShop =
      JSON.parse(localStorage.getItem("dataBaseShop")) || [];
    return {
      dataBaseShop,
    };
  }
}

// Cargar datos del local storage al iniciar la aplicación
const { dataBaseShop } = DataBase.loadFromLocalStorage();

//const databaseInstance = new DataBase(); // Esto garantiza que los datos cargados del local storage se mantengan en la instancia actual de la base de datos