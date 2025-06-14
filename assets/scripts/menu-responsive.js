const BUTTON_MENU = document.querySelector(".btn-menu");
const NAV_RESPONSIVE = document.querySelector(".nav-responsive");

BUTTON_MENU.addEventListener("click", () => {
  NAV_RESPONSIVE.classList.toggle("nav-responsive-active");
});

const checkWindowSize = () => {
  if (window.innerWidth >= 620) {
    NAV_RESPONSIVE.classList.remove("nav-responsive-active");
  }
};

checkWindowSize();

window.addEventListener("resize", checkWindowSize);
