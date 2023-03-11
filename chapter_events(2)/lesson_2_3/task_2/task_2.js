const list = document.querySelector(".tree");

for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

list.addEventListener("click", (e) => {
  if (e.target.tagName != "SPAN") {
    return;
  }

  let childrenContainer = e.target.parentNode.querySelector("ul");
  if (!childrenContainer) return; // нет детей

  childrenContainer.hidden = !childrenContainer.hidden;
});
