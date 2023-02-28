let login = prompt('Введите ваш логин');
let password;

if (login === 'Админ') {
  password = prompt('Введите ваш пароль');
  if (password === 'Я Главный') {
    alert('Здравствуйте');
  } else if (password === '' || password == null) {
    alert('Отменено');
  } else {
    alert('Неверный пароль');
  }
} else if (login === '' || login === null) {
  alert('Отменено');
} else {
  alert('Я вас не знаю');
}
