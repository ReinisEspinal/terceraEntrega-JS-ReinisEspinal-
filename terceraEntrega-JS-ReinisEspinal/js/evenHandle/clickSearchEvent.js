import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";
import counterLabelComponent from "../components/counterLabelComponent.js";
let lstProductCategory = [Product];

export default function clickSearchEvent() {

  const selectTag = document.getElementById("categorySelect");
  const inputSearchTag = document.getElementById("navSearchFilter");
  const imgSearchBtnTag = document.getElementById("searchCategoryBtn");
  imgSearchBtnTag.addEventListener("click", (evenHandle) => {
    if (selectTag.value !== "all") {
      lstProductCategory = Product.filterByProductsCategory(
        selectTag.value
      ).filter((p) => {
        return p.name.toLowerCase().match(inputSearchTag.value.toLowerCase());
      });
      inputSearchTag.value === ""
        ? counterLabelComponent(lstProductCategory, selectTag.value)
        : counterLabelComponent(lstProductCategory, inputSearchTag.value);

      cardComponent("productContainer", lstProductCategory);
    } else {
      //TODO CAMBIAR NOMBRE DEL METODO PARA HACER REFERENCIA A QUE RETORNA UNA LISTA DE PRODUCTOS Y NO UN SOLO PRODUCTO
      lstProductCategory = Product.getProductByName(inputSearchTag.value);
      cardComponent(
        "productContainer",
        Product.getProductByName(inputSearchTag.value)
      );
    }
  });

}