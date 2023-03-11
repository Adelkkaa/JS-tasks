let table = document.getElementById("bagua-table");

table.addEventListener("click", select);

function select(event) {
  let td = event.target.closest("td");
  if (!td) return;
  if (!this.contains(td)) return;

  table.removeEventListener("click", select);

  let textarea = document.createElement("textarea");
  let coords = td.getBoundingClientRect();

  textarea.value = td.innerHTML;
  textarea.classList = "edit";
  textarea.style.width = coords.right - coords.left + "px";
  textarea.style.height = coords.bottom - coords.top + "px";

  td.replaceWith(textarea);
  textarea.focus();

  let wrapper = document.createElement("div");
  let ok = document.createElement("button");
  let cancel = document.createElement("button");

  ok.innerHTML = "OK";
  cancel.innerHTML = "CANCEL";

  cancel.style.marginLeft = "5px";

  wrapper.style.position = "absolute";
  wrapper.style.left = coords.left + "px";
  wrapper.style.top = coords.bottom + "px";

  document.body.append(wrapper);
  wrapper.append(ok);
  wrapper.append(cancel);

  wrapper.addEventListener("click", confirmClick);

  function confirmClick(event) {
    if (event.target !== cancel && event.target !== ok) return;

    if (event.target === ok) {
      td.innerHTML = textarea.value;
    }

    wrapper.remove();
    textarea.replaceWith(td);
    table.addEventListener("click", select);
  }
}
