import { DataBase } from "../db/DataBase.js";
import Product from "./Product.js";
import ShoppingCarStatus from "./ShopingCarStatus.js";
import Status from "./Status.js";

const db = new DataBase();
const shoppingStatus = new ShoppingCarStatus();
const status = new Status();

let counter = 0;
export default class ShoppingCar {
  constructor(
    customerId = "",
    quantity = 0,
    productId = "",
    datePurchase = "",
    status = "ACTIVE"
  ) {
    this.shoppingCarId = customerId.concat(
      "-",
      counter++,
      "-",
      datePurchase,
      "-",
      productId
    );
    this.customerId = customerId;
    this.quantity = quantity;
    this.productId = productId;
    this.datePurchase = datePurchase;
    this.status = status;
    this.subtotal = this.Subtotal;
  }
  get Subtotal() {
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
  static addNewProductToCar(shoppingCarObj = ShoppingCar) {
    const newProduct = new ShoppingCar(
      shoppingCarObj.customerId,
      shoppingCarObj.quantity,
      shoppingCarObj.productId,
      shoppingCarObj.datePurchase,
      shoppingStatus.Active // Asignar el estado activo por defecto
    );

    const productQuantity = Product.editProductQuantity(
      shoppingCarObj.productId,
      shoppingCarObj.quantity
    );

    if (productQuantity <= 0) {
      Product.updateProductStatus(shoppingCarObj.productId, status.OutOFStock);
    } else {
      db.lstShoppingCar.push(newProduct);
    }
    return newProduct; // Devolver el nuevo producto agregado
  }

  static getActiveShoppingCarByCustomerId(customerId = "") {
    return db.lstShoppingCar.filter(
      (e) => e.customerId === customerId && e.status === shoppingStatus.Active
    );
  }
}
