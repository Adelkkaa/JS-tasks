let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

const multiplyNumeric = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] = obj[key] * 2;
    }
  }
};

multiplyNumeric(menu);

console.log(menu);
// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };
