const random = (left, right) => {
  return Math.floor(left + Math.random() * (right - left + 1)); // + 1 потому что правая граница включительна
};
console.log(random(1, 6));
