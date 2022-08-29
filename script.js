// variables, datatypes, use strict

"use strict";

const bool = true;
const num = 41;
const str = "Peter";
const obj = {
  cats: 2,
  cars: 1,
};
const nothing = null;
let undf;
const sym = Symbol("symbol");

console.log("bool", typeof bool);
console.log("num", typeof num);
console.log("str", typeof str);

// concatenation
const n1 = 1;
const n2 = 2;

const s1 = "1";
const s2 = "2";

console.log("n1 + n2", n1 + n2);
console.log("s1 + s2", s1 + s2);

console.log("n1 + s2", n1 + s2);
console.log("s1 + n2", s1 + n2);
