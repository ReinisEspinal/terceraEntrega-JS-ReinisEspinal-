import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";
import selectComponent from "../components/selectComponent.js";
import clickSearchEvent from "../evenHandle/clickSearchEvent.js"

const productList = Product.getAllProducts();
const uniqueCategories = Product.getUniqueCategoriesInclude();

export default class RenderProductIndex {
  constructor() {
    
  }

  RenderProductIndex() {
    cardComponent("productContainer", productList);
    selectComponent("categorySelect", uniqueCategories);
    clickSearchEvent();
  }
}