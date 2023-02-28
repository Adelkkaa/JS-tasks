function checkSpam(str) {
  const normalizedStr = str.toLowerCase();
  return normalizedStr.indexOf('viagra') == -1 && normalizedStr.indexOf('xxx') == -1 ? false : true;
}

console.log(checkSpam('buy ViAgRA now')); // true
console.log(checkSpam('free xxxxx')); // true
console.log(checkSpam('innocent rabbit')); // false
