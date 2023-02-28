function truncate(str, maxlength) {
  return str.length < maxlength ? str.slice(0, maxlength - 1) : `${str.slice(0, maxlength - 1)}...`;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20)); // "Вот, что мне хотело…"

console.log(truncate('Всем привет!', 20)); // "Всем привет!"
