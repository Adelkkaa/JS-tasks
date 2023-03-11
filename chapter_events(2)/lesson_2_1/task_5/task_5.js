const title = document.querySelector("p");
const menu = document.querySelector(".menu");

title.addEventListener("click", () => {
  menu.classList.toggle("menu_active");
});
