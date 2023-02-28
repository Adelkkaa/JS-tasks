function getSecondsToTomorrow() {
  let date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  let diff = date - today;
  return 86400 - Math.round(diff / 1000);
}

console.log(getSecondsToTomorrow());
