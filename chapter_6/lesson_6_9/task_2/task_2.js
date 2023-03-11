function delay(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

function f(x) {
  alert(x);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 15000);

f1000("test"); // показывает "test" после 1000 мс
f1500("Hello"); // показывает "test" после 1500 мс
