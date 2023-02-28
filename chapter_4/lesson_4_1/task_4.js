let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const salariesSum = (obj) => {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
};

const emptyObj = {};

console.log(salariesSum(salaries)); // 390
console.log(salariesSum(emptyObj)); // 0
