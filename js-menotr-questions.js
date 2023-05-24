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
// console.log(3<2<1)

// let x = false;
// console.log(!!x)

// const numbers= [1,2,3]
// numbers.map(n => 2*n)
// console.log(numbers)

// const num = [1,2,3]
// console.log(num.push(5))

// const num = [1,2,3]
// console.log(num.pop())

// const obj1 = {name: 'Sachin'};
// const obj2 = {name: 'Kohli'};
// console.log({...obj1, ...obj2})

// function real(){
//   return "pussy";
// }
// function real(){
//   return "tussy";
// }
// function real(){
//   return "sussy";
// }
// real()

// console.log("var", varName)
// var varName;
// console.log("var", varName)
// varName = "Captain";
// console.log("var", varName)

// fn();
// var fn = function(){
//   return "hello";
// }
// fn();

// var a = 10;
// console.log("line 2" , a);//10
// function fn (){
//   console.log("line 4",a)//und
//   var a = 20;
//   a++;
//   console.log("line 7",a);//21
//   if(a){
//     var a = 30;
//     a++;
//     console.log("line 11", a);//31
//   }
//   console.log("line 13", a);//21
// }
// fn();
// console.log("line 16" , a);

// console.log("1" + 2 + 3);

// console.log(2 + 3 + "1");

// const a = [1, 2, 3];
// const b = [...a, 4, 5];
// console.log(b);

// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);

// const x = 10;
// const y = x--;
// console.log(x, y);

// const arr = [1, 2, 3];
// const [x, ...y] = arr;
// console.log(x, y);

// console.log(typeof null);

// const num = 10;
// console.log(num.toString().length);

// const arr = [1, 2, 3];
// arr.forEach(function(num) {
//   console.log(num * 2);
// });

// const a = { foo: "bar" };
// const b = { foo: "bar" };
// console.log(a === b);

// const arr = [1, 2, 3];
// const [x, y, z] = arr;
// console.log(x, y, z);

// console.log(x);
// var x = 5;

// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 5;
// }
// foo();

// function foo() {
//   return bar();
//   var bar = function() {
//     return "Hello";
//   };
// }
// console.log(foo());

// function outer() {
//   var x = 10;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }
// var closure = outer();
// closure();

// console.log(typeof x);
// console.log(typeof y);
// var x = 10;
// let y = 20;

// console.log(1 + -"1" + "2");

// console.log(1 + +"2" + "2");

// console.log("true" == true);

// console.log(+"1" + "1" + "2");

// console.log([] + []);

// console.log("1" - -"1");

// console.log("foo" + +"bar");