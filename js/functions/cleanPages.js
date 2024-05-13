export default function cleanPages() {
  const index = document.getElementsByClassName("wrapper")[0];
  const shoppingCar = document.getElementsByClassName("wrapper")[0];
  index.innerHTML = "";
  shoppingCar.innerHTML = "";
}