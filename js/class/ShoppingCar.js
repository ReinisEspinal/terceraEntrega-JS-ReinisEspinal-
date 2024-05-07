import { DataBase } from "../db/DataBase.js";
import Product from "./Product.js";
import shoppingCarStatus from "./ShopingCarStatus.js";
import ShoppingCarStatus from "./ShopingCarStatus.js";
import Status from "./Status.js";

const db = new DataBase();
const shoppingStatus = new ShoppingCarStatus();
const status = new Status();

let counter = 1;
export default class ShoppingCar {
  constructor(
    customerId = "",
    quantity = 0,
    productId = "",
    subTotal,
    status = ""
  ) {
    this.shoppingCarId = customerId.concat("-", counter++, "-", productId);
    this.customerId = customerId;
    this.quantity = quantity;
    this.productId = productId;
    this.datePurchase = this.CurrentDate;
    this.status = shoppingStatus.Active;
    this.subTotal = subTotal;
    this.status = status;
  }

  get SubTotal() {
    return ShoppingCar.productCarShoppingView(this.customerId).reduce(
      (acumulador, product) => {
        const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
        return acumulador + price * product.quantity;
      },
      0
    );
  }
  static productCarShoppingView(customerId = "") {
    let newlstProduct = [Product];
    const customerShoppingCar = db.lstShoppingCar.some(
      (car) => car.customerId === customerId
    );

    if (!customerShoppingCar) {
      return []; // No se encontró ningún carrito de compras para el cliente especificado
    } else {
      let shoppingCarsArray = db.lstShoppingCar;

      newlstProduct = shoppingCarsArray
        .map((car) => {
          const lstProduct = db.lstProducts.find(
            (product) => product.productId === car.productId
          );

          if (lstProduct) {
            return {
              shoppingCarId: car.shoppingCarId,
              productName: lstProduct.name,
              productDescription: lstProduct.description,
              brand: lstProduct.brand,
              quantity: car.quantity,
              price: lstProduct.price,
              urlImg: lstProduct.urlImg,
              subTotal: lstProduct.subTotal,
            };
          } else {
            return null; // Producto no encontrado en la lista de productos
          }
        })
        .filter((product) => product !== null);
    }
    return newlstProduct;
  }
  static updateStatusShoppingCar(shoppingCarId = "", status = "") {
    db.lstShoppingCar.forEach((e) => {
      if (shoppingCarId === e.shoppingCarId) {
        e.status = status;
        return;
      }
    });
  }
  static addNewProductToCar(shoppingCarObj) {
    const productQuantity = Product.editProductQuantity(
      shoppingCarObj.productId,
      shoppingCarObj.quantity
    );

    if (productQuantity <= 0) {
      Product.updateProductStatus(shoppingCarObj.productId, status.OutOFStock);
    } else {
      db.lstShoppingCar.push(
        new ShoppingCar(
          shoppingCarObj.customerId,
          shoppingCarObj.quantity,
          shoppingCarObj.productId,
          shoppingCarObj.subTotal,
          shoppingCarObj.status
        )
      );
      db.saveToLocalStorage();
    }
    return this.getActiveShoppingCarByCustomerId(shoppingCarObj.customerId); // Devolver el nuevo producto agregado
  }

  static getActiveShoppingCarByCustomerId(customerId = "") {
    const lstCars = db.lstShoppingCar.filter(
      (e) => e.customerId === customerId && e.status === shoppingStatus.Active
    );

    if (lstCars.length === 0) {
      return lstCars;
    } else {
      const car = {};

      lstCars.map((e) => {
        car.shoppingCarId = e.shoppingCarId;
        car.customerId = e.customerId;
        car.quantity = e.quantity;
        car.productId = e.productId;
        car.datePurchase = e.datePurchase;
        car.status = e.status;
        car.subTotal = e.subTotal;
      });
      return car;
    }
  }

  static getAllShoppingCar() {
    return db.lstShoppingCar;
  }

  get CurrentDate() {
    const fechaActual = new Date();
    //toLocaleString() con la zona horaria deseada, se obtiene la hora y la fecha actuales en la zona horaria específica
    const horaLocal = fechaActual.toLocaleString("es-DO", {
      timeZone: "America/Santo_Domingo",
    });
    return horaLocal;
  }
}
