let head = {
  glasses: 1,
};

let table = {
  __proto__: head,
  pen: 3,
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2,
};

let pockets = {
  __proto__: bed,
  money: 2000,
};

console.log(pockets.money); // 2000
console.log(pockets.sheet); // 1
console.log(pockets.pillow); // 2
console.log(pockets.pen); // 3
console.log(pockets.glasses); // 1
