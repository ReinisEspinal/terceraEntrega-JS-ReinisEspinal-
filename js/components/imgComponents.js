function imgComponent(className = "", pictureName = "", alt = "") {
  
  const addProductImg = document.createElement("img");
  addProductImg.classList.add(`${className}`);
  addProductImg.src = `http://127.0.0.1:5500/${pictureName}`;
  addProductImg.alt = `${alt}`;
  return addProductImg;
}

export default imgComponent;