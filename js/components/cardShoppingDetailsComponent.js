import ShoppingCar from "../class/ShoppingCar.js";
//import Product from "../class/Product.js";

//TODO: UPDATE THE CUSTOMER WITH THE LOGIN USER

const customerTest = { id: "40224211418" };

function cardShoppingDetailsComponent() {
  let shoppingCarObj =
    ShoppingCar.getActiveShoppingCarByCustomerId("40224211418");

 
  if (shoppingCarObj != null) {
    let productInCarUl = document.getElementsByClassName("productInCarUl")[0];
    let productInCarLi = document.createElement("li");
    productInCarLi.className = "productInCarLi";

    productInCarLi.innerHTML = `         
    <li class="productInCarLi">
<article class="productsInCar">
  <!--<img
    class="imgCardHeader rounded imgDetail"
    src="./${shoppingCarObj.imgUrl}"
    alt="${shoppingCarObj.name}"
  />-->
  <p class="quantityCarText text-details">Cantidad: ${shoppingCarObj.quantity}</p>
  <p class="text-add text-details">Producto ${shoppingCarObj.productId} agregado</p>
  SubTotal:<span class="subtotal">${shoppingCarObj.subTotal}</span>
</article>
</li>
<hr>`;

    productInCarUl.appendChild(productInCarLi);
  } else {
  }
}

export default cardShoppingDetailsComponent;
