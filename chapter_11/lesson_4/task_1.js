new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(console.log);

// Что вы думаете? Выполнится ли .catch?

// catch не выполнится!
