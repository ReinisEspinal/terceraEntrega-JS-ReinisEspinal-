import imgComponent from "./imgComponents.js";
import counterLabelComponent from "./counterLabelComponent.js";

function cardComponent(containerNode, lstObj = [Object]) {
  const container = document.getElementById(containerNode); // Suponiendo que tienes un contenedor con el id 'productContainer' donde deseas mostrar los productos

  // Limpia el contenedor antes de agregar nuevos productos
  container.innerHTML = "";
  // Recorre la lista de productos y crea elementos HTML para cada uno
  lstObj.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("card-product", "card"); // Agrega las clases 'card-product' y 'card' al contenedor del producto

    // Crea el encabezado del producto
    const headerCard = document.createElement("div");
    headerCard.classList.add("headerCard");

    const imgHeaderCard = imgComponent(
      "imgCardHeader",
      product.urlImg,
      product.name
    );
    const containerImg = document.createElement("div");
    containerImg.classList.add("containerImg");

    containerImg.appendChild(imgHeaderCard);
    headerCard.appendChild(containerImg);

    // Crea el cuerpo del producto
    const bodyCard = document.createElement("div");
    bodyCard.classList.add("bodyCard");

    const productName = document.createElement("h4");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.className = "priceText";
    productPrice.textContent = product.price;

    const addProductLink = document.createElement("a");
    addProductLink.classList.add("addProductoHyperlink");

    let button = document.createElement("input");
    // Establecer el tipo del input a "button"
    button.setAttribute("type", "button");
    button.setAttribute("value", "Agregar");
    button.className = "addBtn";
    button.onclick = function () {
      alert("¡Haz hecho clic en el botón!");
    };
    // Agregar el botón al cuerpo del documento

    addProductLink.appendChild(button);

    bodyCard.appendChild(productName);
    bodyCard.appendChild(productPrice);
    bodyCard.appendChild(addProductLink);

    // Agrega el encabezado y el cuerpo al contenedor del producto
    productCard.appendChild(headerCard);
    productCard.appendChild(bodyCard);

    // Agrega el contenedor del producto al contenedor principal
    container.appendChild(productCard);
  });
}

export default cardComponent;
