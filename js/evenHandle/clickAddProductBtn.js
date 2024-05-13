//TODO: LLAMAR AL METODO Y PASAR LOS ATRIBUTOS CADA VEZ QUE SE HAGA CLICK
//TODO: CREAR LA LOGICA PARA AGREGAR AL CARRITO
import cardDetailsProductComponent from "../components/cardDetailsProductComponent.js";
function clickAddProductBtn() {
  const carBtn = document.getElementsByClassName("shoppingCarAmount")[0];
  const sectionCarProductsDetails = document.getElementById(
    "main-container-cardDetails"
  );
  const products = document.getElementById("main-container-products");

  carBtn.addEventListener("click", () => {
    sectionCarProductsDetails.className = "main-container-cardDetailsProducts";
    sectionCarProductsDetails.style.display = "grid";
    products.className = "products";
    products.style.display = "none";
    cardDetailsProductComponent();
  });
}

export default clickAddProductBtn;
