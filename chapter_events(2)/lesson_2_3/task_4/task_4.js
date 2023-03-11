const btns = document.querySelectorAll("button[data-tooltip]");

btns.forEach((btn) => {
  const attr = btn.dataset.tooltip;
  const div = document.createElement("div");
  div.innerHTML = attr;
  div.classList.add("tooltip");
  btn.append(div);
});

document.addEventListener("mouseover", (e) => {
  if (!e.target.dataset.tooltip) return;
  e.target.firstElementChild.classList.add("show");
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.dataset.tooltip) return;
  e.target.firstElementChild.classList.remove("show");
});
