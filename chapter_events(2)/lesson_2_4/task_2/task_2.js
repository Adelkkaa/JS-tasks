const contents = document.querySelector("#contents");

contents.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.closest("a") && contents.contains(e.target.closest("a"))) {
    return goToLink(e.target.closest("a").getAttribute("href"));
  }
});

function goToLink(href) {
  let isLeaving = confirm(`Вы хотите перейти по ссылке ${href}?`);
  if (!isLeaving) return false;
}
