let n = 10;

for (let i = 2; i <= n; i++) {
  let primeNumber = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) primeNumber = false;
  }
  if (primeNumber) {
    console.log(i);
  }
}
