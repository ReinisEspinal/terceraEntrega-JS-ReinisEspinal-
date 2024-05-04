import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";
import selectComponent from "../components/selectComponent.js";
import clickSearchEvent from "../evenHandle/clickSearchEvent.js"
import counterLabelComponent from "../components/counterLabelComponent.js";

const productList = Product.getAllProducts();
const uniqueCategories = Product.getUniqueCategoriesInclude();

export default class RenderProductIndex {
  constructor() {
    
  }

  RenderProductIndex() {
    cardComponent("productContainer", productList);
    selectComponent("categorySelect", uniqueCategories);
   // console.log(Product.productCounter(productList));
    //counterLabelComponent(productList);
    clickSearchEvent();
  }
}
