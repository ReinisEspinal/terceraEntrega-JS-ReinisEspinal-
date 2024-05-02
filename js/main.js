import { DataBase } from "./db/DataBase.js";
import ShoppingCar from "./class/ShoppingCar.js";
import Product from "./class/Product.js";
import CustomerLog from "./class/CustomerLog.js";
import User from "./class/User.js";
import { Customer } from "./class/Customer.js";
import RenderProductIndex from "./pages/RenderProducts.js";
const db = new DataBase(); // Crear una única instancia de la base de datos
const r = new RenderProductIndex();
/*
let shoppingCar;

let newShoppingCar = {
  customerId: "40224211413",
  
  quantity: 1,
  productId: "PRD011",
  datePurchase: "04302024",
  
};

shoppingCar = new ShoppingCar(
  newShoppingCar.customerId,
  newShoppingCar.quantity,
  newShoppingCar.productId,
  newShoppingCar.datePurchase
);

alert("RUNNING JS-");
ShoppingCar.addNewProductToCar(shoppingCar);
ShoppingCar.addNewProductToCar(shoppingCar);
ShoppingCar.addNewProductToCar(shoppingCar);
ShoppingCar.addNewProductToCar(shoppingCar);
ShoppingCar.addNewProductToCar(shoppingCar);



console.table(ShoppingCar.productCarShoppingView("40224211413"));


console.table(db.lstProducts);*/

let newCustomer = {
  customerId: "001284444",
  firstName: "Pedro",
  lastName: "Montez Maria",
};

let newUser = {
  customerId: "001284444",
  userName: "usernamecorreo",
  password: "coderHouse4",
};

Customer.addNewCustomer(newCustomer);
db.saveToLocalStorage();
console.log(db.lstCustomer);

console.log("------------USER-------------");
console.log(db.lstUser);

console.log("----------REGISTER USER--------------");
User.registerUser(newUser);
db.saveToLocalStorage();
User.logIn(newUser.userName,newUser.password);
db.saveToLocalStorage();
console.log(db.lstLog)




// Llama a la función para renderizar los productos cuando la página cargue
window.addEventListener('load', r.RenderProductIndex());