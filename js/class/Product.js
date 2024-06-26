import Status from "./Status.js";
import { DataBase } from "../db/DataBase.js";
import counterElementList from "../functions/counterElementList.js";
const status = new Status();
const db = new DataBase();

export default class Product {
  constructor(
    productId,
    name,
    description,
    warehouse,
    brand,
    category,
    price,
    quantity,
    status,
    urlImg
  ) {
    this.productId = productId;
    this._name = name;
    this._description = description;
    this._warehouse = warehouse;
    this._brand = brand;
    this._category = category;
    this._price = price;
    this._quantity = quantity;
    this._status = status;
    this._urlImg = urlImg;
  }

  static async addNewProduct(apiUrl) {
    try {
      let newProducto;
      let counter = 19;
      axios
        .get(apiUrl)
        .then(function (response) {
          // handle success
          response.data.forEach((product) => {
            newProducto = {
              productId: "PROD" + counter++,
              name: product.title,
              description: product.description,
              warehouse: "WAREHOUSE",
              brand: "BRAND",
              category: product.category,
              price: product.price,
              quantity: 40,
              status: "AVAILABLE",
              urlImg: product.image,
            };

            console.log(newProducto);
            db.lstProducts.push(newProducto);
          });
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
          console.log(db.lstProducts);
        });
      db.saveToLocalStorage();
    } catch (error) {
      console.error("Error adding new product:", error);
    }
  }

  static getUniqueCategoryCollection() {
    const lstProductsCategory = db.lstProducts.map(
      (productObj) => productObj.category
    );
    const uniqueCategory = [...new Set(lstProductsCategory)];

    return uniqueCategory;
  }

  static getUniqueCategoriesInclude() {
    const categories = [];
    db.lstProducts.forEach((productObj) => {
      const existingCaterogy = categories.includes(productObj.category);
      existingCaterogy ? null : categories.push(productObj.category);
    });

    return categories;
  }

  static productView(lstProductsCarShopping) {
    const newlstProduct = db.lstProductsCarShopping.map((productObj) => ({
      name: productObj.name,
      description: productObj.description,
      brand: productObj.brand,
      price: productObj.price,
      urlImg: productObj.urlImg,
    }));

    return newlstProduct;
  }

  static filterByProductsBrand(brand = "") {
    return db.lstProducts.filter((e) => {
      return e.brand === brand;
    });
  }

  static filterByProductsCategory(category = "") {
    return db.lstProducts.filter((e) => {
      return e.category === category;
    });
  }

  static sortByProductPriceASC(lstProducts) {
    lstProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, "")); // Convertir precio de cadena a número
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, "")); // Convertir precio de cadena a número

      return priceA - priceB;
    });
    return lstProducts;
  }

  static sortByProductPriceDSC(lstProducts) {
    lstProducts.sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
      const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));

      return priceB - priceA;
    });
    return lstProducts;
  }

  static getAvailableProduct() {
    let newProductList = db.lstProducts.filter(
      (productObjt) => productObjt.status === status.Available
    );

    return newProductList.length > 0
      ? newProductList
      : "No hay productos disponibles";
  }

  static getProductsAmount(amount = 0) {
    let newProductList = db.lstProducts
      .filter((productObjt) => productObjt.status === status.Available)
      .splice(0, amount);

    return newProductList;
  }
  static updateProductStatus(productId = 0, status = Status) {
    const product = db.lstProducts.find((e) => e.productId === productId);
    product.status = status;
  }

  static getProductById(productId) {
    return db.lstProducts.find((e) => e.productId === productId);
  }
  // const categoryValue = option.toLowerCase().replace("/\s/g", "")"
  static getProductByName(name = "") {
    let x = db.lstProducts.filter((p) =>
      p.name.toLowerCase().match(name.toLowerCase())
    );
    return x;
  }
  static editProductQuantity(id = "", quantityProduct = 0) {
    let product = this.getProductById(id);

    product ? (product.quantity -= quantityProduct) : null;
    product.quantity < 0 ? (product.quantity = 0) : product.quantity;

    return product.quantity;
  }
  static productCounter(lstProduct = [Product]) {
    return counterElementList(lstProduct);
  }
  static getAllProducts() {
    return db.lstProducts;
  }
}
