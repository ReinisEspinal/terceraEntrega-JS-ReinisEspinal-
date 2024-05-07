import { DataBase } from "./db/DataBase.js";
import RenderProductIndex from "./pages/RenderProducts.js";
const db = new DataBase(); // Crear una única instancia de la base de datos
const r = new RenderProductIndex();


// Llama a la función para renderizar los productos cuando la página cargue
window.addEventListener('load', r.RenderProductIndex());