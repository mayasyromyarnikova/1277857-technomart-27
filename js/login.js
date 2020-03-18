var modalOpen = document.querySelector(".modal-open");
var modalLogin = document.querySelector(".modal-login");
var modalClose = modalLogin.querySelector(".modal-close");

var form = modalLogin.querySelector(".login-form");
var userName = modalLogin.querySelector("#user-name");
var userEmail = modalLogin.querySelector("#user-email");
var mailText = modalLogin.querySelector("#user-mail");

modalOpen.addEventListener("click", function (evt){
  evt.preventDefault();
    modalLogin.classList.add("modal-show-form");
    userName.focus();
});

modalClose.addEventListener("click", function (evt){
  evt.preventDefault();
  modalLogin.classList.remove("modal-show-form");
  modalLogin.classList.remove("modal-error");
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalLogin.classList.contains("modal-show-form")) {
        evt.preventDefault();
        modalLogin.classList.remove("modal-show-form");
        modalLogin.classList.remove("modal-error");
      }
    }
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !mailText.value) {
      evt.preventDefault();
      modalLogin.classList.remove("modal-error");
      modalLogin.offsetWidth = modalLogin.offsetWidth;
      modalLogin.classList.add("modal-error");
    }
});
