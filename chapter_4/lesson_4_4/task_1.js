function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref); // Каким будет результат? - Ошибка
