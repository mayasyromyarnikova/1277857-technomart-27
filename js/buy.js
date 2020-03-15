var modalOpens = document.querySelectorAll(".buy");
var modalBasket = document.querySelector(".modal-basket");
var modalCloses = document.querySelectorAll(".modal-close");

for (var modalOpen of modalOpens) {
  modalOpen.addEventListener("click", function (evt){
    evt.preventDefault();
    modalBasket.classList.add("modal-show");
  });
};

for (var modalClose of modalCloses) {
  modalClose.addEventListener("click", function (evt){
    evt.preventDefault();
    modalBasket.classList.remove("modal-show");
  });
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalBasket.classList.contains("modal-show")) {
        evt.preventDefault();
        modalBasket.classList.remove("modal-show");
      }
    }
});
