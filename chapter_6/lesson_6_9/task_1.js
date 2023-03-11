function work(a, b) {
  console.log(a + b); // произвольная функция или метод
}

function spy(func) {
  spyWrapper.calls = [];
  function spyWrapper(...args) {
    spyWrapper.calls.push(args);
    return func.apply(this, args);
  }
  return spyWrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}
