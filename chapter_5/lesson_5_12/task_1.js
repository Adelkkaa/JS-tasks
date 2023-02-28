let user = {
  name: 'Василий Иванович',
  age: 35,
};

let fullCopy = JSON.parse(JSON.stringify(user));

console.log(fullCopy);
