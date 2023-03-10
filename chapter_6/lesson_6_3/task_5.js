let arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (a, b) => {
  return function (item) {
    return item >= a && item <= b;
  };
};

const inArray = (arr) => {
  return function (item) {
    return arr.indexOf(item) >= 0;
  };
};

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));
