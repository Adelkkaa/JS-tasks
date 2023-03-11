// const fib = (n) => {
//   const arr = [1, 1];
//   for (let i = 2; arr.length < n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr[n - 1];
// }; --- Такое решение занимает 0.45 sec, это не удовлетворяет условию

const fib = (n) => {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }

  return second;
};
// Это решение уже удовлетворяет условиям задачи
console.log(fib(77));
