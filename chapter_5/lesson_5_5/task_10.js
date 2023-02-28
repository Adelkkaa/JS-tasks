function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
