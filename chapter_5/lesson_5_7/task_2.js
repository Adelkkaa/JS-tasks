function aclean(arr) {
  let obj = {};

  for (value of arr) {
    let sorted = value.toLowerCase().split('').sort().join('');
    obj[sorted] = value;
  }

  return Object.values(obj);
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"
