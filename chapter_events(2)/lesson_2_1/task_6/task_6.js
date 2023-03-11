const panes = document.querySelectorAll(".pane");

for (let pane of panes) {
  pane.insertAdjacentHTML(
    "beforeend",
    '<button class="remove-button">[x]</button>'
  );
  pane.lastChild.onclick = () => pane.remove();
}
