// hoisting
// temporaoal deadzone
// truthy/falsy
// functions -> arrow, fxn definition, normal fxn, higher order fxn
// event loop
// undefined
// Coercion and Type Conversion
// array methods -> map, filter, reduce, splice, slice, find methods


// function foo() {
// let x = (y = 0);
// x++;
// y++;
// return x;
// }
// console.log(foo(), typeof x, typeof y);

// function main() {
// console.log("A");
// setTimeout(function print() {
// console.log("B");
// }, 0);
// console.log("C");
// }
// main();

// console.log(0.1 + 0.2 === 0.3);

// var y = 1;
// if (function f() {}) {
// y += typeof f;
// }
// console.log(y);

// var y = 1;
// if ("") {
// y += typeof f;
// }
// console.log(y);

// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

// var array1 = new Array(3);
// console.log(array1);
// var array2 = [];
// array2[2] = 100;
// console.log(array2);
// var array3 = [, , ,];
// console.log(array3);

// const obj = {
// prop1: function () {
// return 0;
// },
// prop2() {
// return 1;
// },
// ["prop" + 3]() {
// return 2;
// },
// };
// console.log(obj.prop1());
// console.log(obj.prop2());
// console.log(obj.prop3());

// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);