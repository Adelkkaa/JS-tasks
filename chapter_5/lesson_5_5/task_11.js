function getAverageAge(arr) {
  const sumAge = arr.map((item) => item.age).reduce((acc, cur) => acc + cur);
  return sumAge / arr.length;
}

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
