import RenderProductIndex from "./pages/RenderProducts.js";
const r = new RenderProductIndex();

// Función para renderizar en función de la URL
function renderProducts() {
    r.RenderProductIndex();

}

window.addEventListener("load", renderProducts);
