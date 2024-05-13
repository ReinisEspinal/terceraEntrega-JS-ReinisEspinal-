function modalClose(modalTag) {
  var modal = document.getElementById(modalTag.id);

  const modalCloseFunction = function () {
    modal.parentNode.removeChild(modal);
  };
  const closeBtn = modalTag.querySelector(".close");
  closeBtn.onclick = modalCloseFunction;
}

export default modalClose;
