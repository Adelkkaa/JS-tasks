function copySorted(arr) {
  return [...arr].sort((x1, x2) => {
    if (x1.toLowerCase() < x2.toLowerCase()) {
      return -1;
    } else if (x1.toLowerCase() > x2.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
}

let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
