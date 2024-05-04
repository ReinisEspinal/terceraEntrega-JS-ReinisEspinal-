import { DataBase } from "./db/DataBase.js";
import ShoppingCar from "./class/ShoppingCar.js";
import Product from "./class/Product.js";
import CustomerLog from "./class/CustomerLog.js";
import User from "./class/User.js";
import { Customer } from "./class/Customer.js";
import RenderProductIndex from "./pages/RenderProducts.js";
const db = new DataBase(); // Crear una única instancia de la base de datos
const r = new RenderProductIndex();


// Llama a la función para renderizar los productos cuando la página cargue
window.addEventListener('load', r.RenderProductIndex());