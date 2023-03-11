function makeCounter() {
  let count = 0;
  function counter() {
    return ++count;
  }
  counter.set = (value) => (count = value);
  counter.decrease = () => --count;
  return counter;
}

let counter = makeCounter();

console.log(counter.set(10)); // 10
console.log(counter()); // 11
console.log(counter()); // 12
console.log(counter.decrease()); // 11
