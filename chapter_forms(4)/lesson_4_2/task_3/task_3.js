const mouse = document.querySelector("#mouse");

mouse.addEventListener("click", () => {
  mouse.setAttribute("tabindex", "0");
  mouse.focus();
  mouse.style.position = "absolute";

  mouse.addEventListener("keydown", (e) => {
    switch (e.code) {
      case "ArrowUp":
        mouse.style.top = mouse.getBoundingClientRect().top - 10 + "px";
        break;
      case "ArrowRight":
        mouse.style.left = mouse.getBoundingClientRect().left + 10 + "px";
        break;
      case "ArrowDown":
        mouse.style.top = mouse.getBoundingClientRect().top + 10 + "px";
        break;
      case "ArrowLeft":
        mouse.style.left = mouse.getBoundingClientRect().left - 10 + "px";
        break;
    }
  });
});
