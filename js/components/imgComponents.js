function imgComponent(className = "", pictureName = "", alt = "") {
  
  const addProductImg = document.createElement("img");
  addProductImg.classList.add(`${className}`);
  addProductImg.src = `${pictureName}`;
  addProductImg.alt = `${alt}`;
  return addProductImg;
}

export default imgComponent;