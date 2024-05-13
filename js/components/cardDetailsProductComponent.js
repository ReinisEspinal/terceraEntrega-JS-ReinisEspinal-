import ShoppingCar from "../class/ShoppingCar.js";


const shopCar = new ShoppingCar("40224211418");
const elContainerCar = document.getElementById("proList");
const elContainerLabelSubtotal = document.getElementById(
  "totalPriceDetails-container"
);
const quiantityText = document.getElementsByClassName("textCounter")[0];
const elSubtotal = document.createElement("article");
elSubtotal.id = "subtotalText";
elSubtotal.className = "subtotalDetailLeft SubtotalText";


function cardDetailsProductComponent() {
  try {
    const amountProductInCar = quiantityText.innerHTML;
    const lstShoppingCar =
      ShoppingCar.getActiveShoppingCarByCustomerId("40224211418");
    elContainerCar.innerHTML = "";
    lstShoppingCar.map((product) => {
      const elCard = document.createElement("div");
      const urlImg = `http://127.0.0.1:5500/${product.urlImg}`;

      elCard.className = "modal-content-cardDetailsProducts";
      elCard.innerHTML = `
        <article class="imgContainer">
          <img class="rounded imgCardHeader" src=" ${urlImg}" alt="${product.name}" />
        </article>
        <article class="productInformation">
          <p>${product.productName}</p>
          <p class="descriptionText">
            ${product.productDescription}
          </p>
          <p>Cantidad: ${product.quantity}</p>
          <p class="leftPrice">Price: ${product.price}</p>
        </article>
        <hr>
      `;

      elSubtotal.textContent = `SubTotal (${amountProductInCar}) : ${shopCar.SubTotal}`;

      elContainerLabelSubtotal.appendChild(elSubtotal);
      elContainerCar.appendChild(elCard);
    });
  } catch (error) {
    console.error("Error fetching shopping cart:", error);
    // Handle error appropriately, e.g., display error message to user
  }
}

export default cardDetailsProductComponent;
