const styles = ['Джаз', 'Блюз'];
console.log(styles);
styles.push('Рок-н-ролл');
console.log(styles);
const index = Math.floor(styles.length / 2); // Написал только для случая, где длина нечетная, потому что не сказано где середина у массива с четной длиной
styles.splice(1, index, 'Классика');
console.log(styles);
const firstElem = styles.shift();
console.log(firstElem, styles);
styles.unshift('Рэп', 'Рэгги');
console.log(styles);
