//setInterval

const printNumbers = (from, to) => {
  let current = from;
  const timerId = setInterval(() => {
    if (current <= to) {
      alert(current);
      current += 1;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
};

// printNumbers(1, 10);

const printNumbersTimeout = (from, to) => {
  let current = from;
  let timerId = setTimeout(function tick() {
    if (current <= to) {
      alert(current);
      current += 1;
      timerId = setTimeout(tick, 1000);
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
};

printNumbersTimeout(1, 10);
