import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";
import handleSelectChange from "./handleSelectChange.js";

export default function selectPriceProductSort(lstProduct = [Product]) {
  const selectPriceSort = document.getElementsByClassName(
    "nav-sortFilter-container-right"
  )[0];

  selectPriceSort.addEventListener("change", function (event)
   {
    const optionValue = Number(handleSelectChange(event));

    if (optionValue === 0) 
      {
      lstProduct = Product.sortByProductPriceDSC(lstProduct);
    } 
    else
     {
      lstProduct = Product.sortByProductPriceASC(lstProduct);
    }
    cardComponent("productContainer", lstProduct);
  });
}
