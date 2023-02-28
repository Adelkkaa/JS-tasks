const simpleObj = {
  name: 'Alex',
  surname: 'Griffin',
};
function A() {
  return simpleObj;
}
function B() {
  return simpleObj;
}

let a = new A();
let b = new B();

console.log(a == b); // true
