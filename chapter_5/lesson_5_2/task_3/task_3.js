let num;
do {
  num = prompt('Введите число');
} while (!isFinite(num));

alert(`Вы ввели число: ${num}`);
