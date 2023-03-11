function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function (ms) {
  return (...args) => {
    setTimeout(() => this(...args), ms);
  };
};

f.defer(3000)(1, 2); // выведет 3 через 3 секунды.
