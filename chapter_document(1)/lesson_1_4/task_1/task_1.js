// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

const table = document.querySelector("#age-table"); // Таблица с id="age-table".
const labels = document.querySelectorAll("#age-table label"); // Все элементы label внутри этой таблицы (их три).
const td = document.querySelector("#age-table td"); // Первый td в этой таблице (со словом «Age»).
const form = document.querySelector("form[name='search']"); // Форму form с именем name="search".
const input = document.querySelector("form[name='search'] input[type='text']"); // Первый input в этой форме.
const lastInput = document.querySelector(
  "form[name='search'] input[type='submit']"
); // Последний input в этой форме.

console.log(input);
