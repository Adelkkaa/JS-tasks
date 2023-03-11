// prettier-ignore
const container = document.querySelector('.prompt-form-container')
const form = document.forms[0];
const btn = document.querySelector("button");

const submitForm = (e) => {
  const message = form.text.value;
  e.preventDefault();
  alert(`Вы ввели: ${message !== "" && e.target === form ? message : null}`);
  form.text.value = "";
  container.classList.remove("active");
};

form.addEventListener("submit", submitForm);

document.addEventListener("click", (e) => {
  if (e.target === form.cancel) {
    submitForm(e);
  }
  if (container.classList.value === "prompt-form-container active") {
    return;
  }
  if (e.target === btn) {
    container.classList.add("active");
  }
});

document.addEventListener("keydown", (e) => {
  if (
    e.code === "Escape" &&
    container.classList.value === "prompt-form-container active"
  ) {
    submitForm(e);
  }
});
