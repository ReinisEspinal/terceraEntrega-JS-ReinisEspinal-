import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";

const productList = Product.getAllProducts();

export default class RenderProductIndex {
  constructor() {}

  RenderProductIndex() {

    cardComponent("productContainer",productList);
   
  }
}
