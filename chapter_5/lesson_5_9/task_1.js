let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries)); // 650

function sumSalaries(obj) {
  const values = Object.values(obj);
  return values.length > 0 ? values.reduce((acc, cur) => acc + cur) : 0;
}
