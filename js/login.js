var modalOpen = document.querySelector(".modal-open");
var modalLogin = document.querySelector(".modal-login");
var modalClose = document.querySelector(".modal-close");

modalOpen.addEventListener("click", function (evt){
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modalLogin.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalLogin.classList.contains("modal-show")) {
        evt.preventDefault();
        modalLogin.classList.remove("modal-show");
      }
    }
});
