const p = document.querySelector("p");
const textArea = document.createElement("textarea");

document.addEventListener("click", (e) => {
  if (e.target.className === "view") {
    const text = e.target.textContent;
    e.target.remove();
    textArea.append(text);
    textArea.classList.add("edit");
    p.insertAdjacentElement("afterend", textArea);
    textArea.focus();
  }
});

textArea.addEventListener("blur", (e) => {
  const value = e.target.value;
  e.target.remove();
  const div = document.createElement("div");
  div.classList.add("view");
  div.append(value);
  p.insertAdjacentElement("afterend", div);
});
