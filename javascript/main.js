//loader
const preLoader = document.getElementById("loading-screen");

function loadFunc() {
  preLoader.style.display = "none";
}

//navbar
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

//backToTop
function backToTop() {
  window.scroll(0, 0);
}
