function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok.call(user);
  else fail.call(user);
}

let user = {
  name: "Вася",

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk, user.loginFail);
