import createModalComponent from "./createModalComponent.js";
import imgComponent from "./imgComponents.js";
import selectPriceProductSort from "../evenHandle/selectPriceProductSort.js";

export default function cardComponent(containerNode, lstObj = [Object]) {
  const container = document.getElementById(containerNode);

  if (container != null) {
    container.innerHTML = "";
   
    lstObj.forEach((product) => {
    
      const productCard = document.createElement("div");
      productCard.classList.add("card-product", "card");

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

      button.setAttribute("id", product.name);
      button.setAttribute("class", "addBtn");
      button.setAttribute("type", "button");
      button.setAttribute("value", "Agregar");
      button.addEventListener("click", () => {
        createModalComponent(product);
      });

      addProductLink.appendChild(button);

      bodyCard.appendChild(productName);
      bodyCard.appendChild(productPrice);
      bodyCard.appendChild(addProductLink);

      productCard.appendChild(headerCard);
      productCard.appendChild(bodyCard);

      container.appendChild(productCard);
    });
    selectPriceProductSort(lstObj);
  }
}
