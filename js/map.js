var mapOpen = document.querySelector(".map-open");
var mapPopup = document.querySelector(".modal-map");
var mapCloses = document.querySelectorAll(".modal-close");

mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

for (var mapClose of mapCloses) {
  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
      }
    }
});
