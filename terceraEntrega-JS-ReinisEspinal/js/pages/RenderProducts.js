import Product from "../class/Product.js";
import cardComponent from "../components/cardComponent.js";
import selectComponent from "../components/selectComponent.js";
import clickSearchEvent from "../evenHandle/clickSearchEvent.js";
import ShoppingCart from "../class/ShoppingCar.js";
import clickAddProductBtn from "../evenHandle/clickAddProductBtn.js";
import clickProducts from "../evenHandle/clickProducts.js";
import cardDetailsProductComponent from "../components/cardDetailsProductComponent.js"
import counteProductCarComponent from "../components/counterProductCarComponent.js";
const productList = Product.getAllProducts();
const uniqueCategories = Product.getUniqueCategoriesInclude();

export default class RenderProductIndex {
  constructor() {}

  RenderProductIndex() {
    cardComponent("productContainer", productList);
    selectComponent("categorySelect", uniqueCategories);
    clickSearchEvent();
    clickAddProductBtn();
    clickProducts();

    counteProductCarComponent(
      ShoppingCart.getQuantityProductsInCar("40224211418")
    );
  }
}
