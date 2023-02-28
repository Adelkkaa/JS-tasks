function getLocalDay(day) {
  const local = [7, 1, 2, 3, 4, 5, 6];
  return local[day.getDate() - 1];
}

let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getLocalDay(date)); // вторник, нужно показать 2
