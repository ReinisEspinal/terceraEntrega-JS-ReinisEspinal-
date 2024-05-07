import Product from "../class/Product.js";
import ShoppingCart from "../class/ShoppingCar.js";
import ShoppingCarStatus from "../class/ShopingCarStatus.js";
import cardShoppingDetailsComponent from "../components/cardShoppingDetailsComponent.js";

//TODO: SYSTEM LOGIN IN ORDER TO GET THE CUSTOMERID
const customerTest = { id: "40224211418" };
const shoppingCarStatus = new ShoppingCarStatus();
function addProductToCar(modalTag, product = Product) {
  let btnModal = document.getElementsByClassName("btnModal")[0];

  btnModal.addEventListener("click", () => {
    var quantityAvailable = document.getElementById("quantityAvailable").value;
    const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));

    const shoppingObj = {
      productId: product.productId,
      quantity: quantityAvailable,
      customerId: customerTest.id,
      status: shoppingCarStatus.Active,
      subTotal: price * quantityAvailable,
    };

    ShoppingCart.addNewProductToCar(shoppingObj);
    cardShoppingDetailsComponent();
  });

  close(modalTag);
}

export default addProductToCar;

function close(modalTag) {
  var modal = document.getElementById(modalTag.id);
  let btnModal = document.getElementsByClassName("btnModal")[0];
  btnModal.addEventListener("click", () => {
    modal.parentNode.removeChild(modal);
  });
}
