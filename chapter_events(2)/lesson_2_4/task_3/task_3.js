const largeImg = document.querySelector("#largeImg");

document.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.alt === "") {
    largeImg.src = e.target.closest("a").href;
  }
});
