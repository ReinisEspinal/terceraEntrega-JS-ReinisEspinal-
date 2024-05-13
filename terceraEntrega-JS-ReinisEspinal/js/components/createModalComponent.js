import modalClose from "../functions/modalClose.js";
import Product from "../class/Product.js";
import addProductToCar from "../functions/addProductToCar.js";
import imgComponent from "../components/imgComponents.js";

function createModalComponent(product = Product) {
  let modalTag = document.createElement("div");
  modalTag.className = "modal";
  modalTag.id = "modalProductDescription";
  const img = imgComponent(
    ["imgCardHeader"],
    product.urlImg,
    product.name
  );
  modalTag.innerHTML = `
    <!-- Modal content -->

    <div class="modal-content">
    <span class="close">&times;</span>
      <div class="left-container">
        <img class="rounded ${img.className}" src="${img.currentSrc}" />
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
    </div>`;

  document.body.appendChild(modalTag);

  addProductToCar(modalTag, product);
  modalClose(modalTag);
}

export default createModalComponent;
