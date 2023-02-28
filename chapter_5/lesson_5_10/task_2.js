let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let nameOfMax = null;
  for ([name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameOfMax = name;
    }
  }
  return nameOfMax;
}

console.log(topSalary(salaries));
