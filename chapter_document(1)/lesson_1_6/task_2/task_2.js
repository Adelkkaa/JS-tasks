const manyLi = document.querySelectorAll("li");

manyLi.forEach((item) => {
  console.log(item.firstElementChild);
  if (
    item.firstElementChild.innerHTML.includes("://") &&
    !item.firstElementChild.innerHTML.includes("http://internal.com")
  ) {
    item.firstElementChild.style.color = "orange";
  }
});
