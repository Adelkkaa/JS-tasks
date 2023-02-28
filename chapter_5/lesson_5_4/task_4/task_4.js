function sumInput() {
  const arr = [];
  let value;
  do {
    value = +prompt('Введите число');
    arr.push(value);
  } while (isFinite(value));
  arr.pop(); // Удаляем последний элемент, чтобы строковое значение не попало в массив
  return arr.reduce((acc, cur) => acc + cur);
}

alert(`Сумма = ${sumInput()}`);
