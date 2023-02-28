function getLastDayOfMonth(year, month) {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2023, 10)); // 30
console.log(getLastDayOfMonth(2023, 3)); // 30
console.log(getLastDayOfMonth(2023, 4)); // 31
