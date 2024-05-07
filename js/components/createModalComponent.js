import modalClose from "../functions/modalClose.js";
import Product from "../class/Product.js";
import addProductToCar from "../functions/addProductToCar.js";

function createModalComponent(product = Product) {
  let modalTag = document.createElement("div");
  modalTag.className = "modal";
  modalTag.id = "modalProductDescription";

  modalTag.innerHTML = `
    <!-- Modal content -->
    <div class="modal-content">
      <div class="left-container">
        <img class="imgCardHeader rounded" src="./${product.urlImg}" />
        <p class="productName">${product.name}</p>
      </div>
      <div class="right-container">
        <p class="textDescription">
        ${product.description}
        </p>
        <hr style="background-color: gray" />
        <div class="shoppingDetails">
          <p class="priceTextModal">Price: ${product.price}</p>
          <p class="cantidad">Cantidad:</p>
          <input type="number" id="quantityAvailable" class="selectQuantity" title="0">
        </div>
        <input type="button" class="addBtn btnModal" value="Agregar" />
      </div>
      <div class="firstContenModalContainer">
        <span class="close">&times;</span>
      </div>
    </div>`;



  document.body.appendChild(modalTag);

  addProductToCar(modalTag, product);
  modalClose(modalTag);
}

export default createModalComponent;
