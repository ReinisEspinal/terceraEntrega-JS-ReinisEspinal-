function clickProducts() {
  const productsNav = document.getElementById("productsNav");
  const sectionCarProductsDetails = document.getElementById(
    "main-container-cardDetails"
  );
  const products = document.getElementsByClassName(
    "main-container-products"
  )[0];

  productsNav.addEventListener("click", () => {
    sectionCarProductsDetails.style.display = "none";
    products.style.display = "grid";
  });
}

export default clickProducts;
