// 'use strict';
let str = 'Привет';

str.test = 5; // (*)

console.log(str.test); // undefined, если включить 'use strict' - Cannot create property 'test' on string 'Привет'
