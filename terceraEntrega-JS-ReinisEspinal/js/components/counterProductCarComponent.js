function counterProductCarComponent(number) {

  const textCounterTag = document.getElementsByClassName("textCounter")[0];
  const counter = document.getElementsByClassName("counter")[0];

  if (number <= 0) {
    textCounterTag.className = "";
    textCounterTag.innerHTML = "";
    counter.className = "";
  } else {
    textCounterTag.innerHTML = `${number}`;
    textCounterTag.className ="textCounter";
  }
}

export default counterProductCarComponent;