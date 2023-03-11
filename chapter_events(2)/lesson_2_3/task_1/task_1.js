const container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  if (e.target.className === "remove-button") {
    e.target.parentNode.style.display = "none";
  }
});
