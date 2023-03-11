for (
  let i = 0;
  i < document.body.firstElementChild.firstElementChild.childElementCount;
  i++
) {
  let tr = document.body.firstElementChild.firstElementChild.children[i];
  for (let j = 0; j < tr.childElementCount; j++) {
    let td = tr.children[j].firstChild.data;
    if (td[0] === td[2]) {
      tr.children[j].style.backgroundColor = "red";
    }
  }
}
