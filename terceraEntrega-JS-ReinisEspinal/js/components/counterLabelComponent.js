import counterElementList from "../functions/counterElementList.js";

function counterLabelComponent(lstObjt = [Object], searchStringName = "") {
  const pTag = document.getElementById("pCounterContainer");
  pTag.innerHTML = "";
  let counter = 0;

  const textProductNumber = document.createElement("span");
  textProductNumber.className = "key-1";
  const textProductLabel = document.createElement("span");
  textProductLabel.className = "key-2";

  counter = counterElementList(lstObjt);

  textProductNumber.textContent = counter
    .toString()
    .concat(` results for ${searchStringName}`);

  pTag.appendChild(textProductNumber);
  pTag.appendChild(textProductLabel);
}

export default counterLabelComponent;
