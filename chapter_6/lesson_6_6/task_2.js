const sum = (a) => {
  let current = a;

  function next(b) {
    current += b;
    return next;
  }

  next.showResult = function () {
    return current;
  };
  return next;
};

console.log(sum(1)(2)(4)(5).showResult());
