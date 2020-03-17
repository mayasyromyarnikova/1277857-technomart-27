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
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (modalLogin.classList.contains("modal-show-form")) {
        evt.preventDefault();
        modalLogin.classList.remove("modal-show-form");
      }
    }
});

form.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value || !mailText.value) {
      evt.preventDefault();
      console.log("Нужно ввести логин и пароль");
    }
});
