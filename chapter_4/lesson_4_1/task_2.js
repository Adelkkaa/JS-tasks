const isEmpty = (obj) => {
  let emptyBool = true;
  for (key in obj) {
    emptyBool = false;
  }
  return emptyBool;
};

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule)); // false
