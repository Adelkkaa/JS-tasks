// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.

const sumToFirst = (n) => {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
};
console.log(sumToFirst(3));

const sumToSecond = (n) => {
  if (n === 1) return 1;
  else return n + sumToSecond(n - 1);
};

console.log(sumToSecond(3));

const sumToThird = (n) => {
  return (n * (n + 1)) / 2;
};

console.log(sumToThird(3));
