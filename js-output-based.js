// hoisting
// temporaoal deadzone
// truthy/falsy
// functions -> arrow, fxn definition, normal fxn, higher order fxn
// event loop
// undefined
// Coercion and Type Conversion
// array methods -> map, filter, reduce, splice, slice, find methods

// function foo() {
//   let x = (y = 0);
//   x++;
//   y++;
//   return x;
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
//   return "stussy";
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

// function fruit (){
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruit();

// for(var i = 0; i<3 ; i++){
//   setTimeout(()=>console.log(i), 1);
// }

// for(let i = 0; i<3 ; i++){
//   setTimeout(()=>console.log(i), 1);
// }

// console.log(+true)
// console.log(typeof +true)
// console.log(+false)

// console.log(!"trinay");
// console.log(typeof (!"trinay"))

// let data = "size";
// const bird = {
//   size : "small",
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

// let c = { name : "peter"};
// let d ;
// d = c;
// d.name;
// c.name = "bruce";
// d.name;

// var x;
// var x = 10;
// console.log(x);

// let x;
// let x = 10;
// console.log(x);

// let a = 3;
// let b = new Number(3);
// a==b
// a===b
// typeof(a)
// typeof(b)

// let name;
// nmae = {};
// console.log(name)

// function fruit(){
//   console.log("woof");
// }
// fruit.name = "apple";
// fruit();

// function sum(a,b){
//   return a+b;
// }
// sum(1, "2")
// sum("2", 1)
// sum(2,2)

// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number)

// function getAge(...args){
//   console.log(typeof args)
// }
// getAge(21)

// function getAge(){
//   'use strict';
//   age = 21;
//   console.log(age);
// }
// getAge();

// const sum = eval("10*10+5");
// sum;

// const obj = {1 : "a" , 2 : "b" , 3 : "c" };
// obj.hasOwnProperty("2")
// obj.hasOwnProperty(3)

// const obj = {a : "one", b : "two", a : "three"};
// obj;

// for(let i = 1; i<5 ; i++){
//   if(i === 3) continue;
//   console.log(i);
// }

// const foo = () => console.log("first");
// const boo = () => setTimeout(()=>console.log("second"));
// const zoo = () =>console.log("third");
// foo()
// boo() // first third then second
// zoo()

// const person = {name : "messi"};
// function hi (age){
//   return `${this.name} and ${age}`;
// }
// hi.call(person,22)
// hi.bind(person, 22)()

// function boom(){
//   return(()=>0)();
// }
// boom();

// (()=>0)();

// function hi(){
//   return ()=> 0;
// }
// hi()()
// typeof(hi())
// typeof(hi()())

// typeof(typeof(1));

// const numbers = [1, 2, 3];
// numbers[9] = 11;
// numbers;

// const numbers = [1, 2, 3];
// numbers[3] = numbers;
// numbers;

// null;
// !null;
// !!null;
// !"";
// !!"";
// !1;
// !!1;

// let id = setInterval(()=>console.log("Hi"), 1000);
// setTimeout(()=>clearInterval(id), 5000);

// [..."Trinay"];
// [...[3, 4, 6, 8]];

// let data = 3 + 4 + 5 + "6";
// data;
// typeof(data);

// typeof 3 + 4 +5 +"5";

// typeof( +"5")

// let data = [1, 2, 3, 4]
// data.map((num)=>{
//   if(typeof num === "number")
//     return num *2;
// })
// data;

// function getInfo(member){
//   member.name = "lana"
// };
// const person = {name :"dwayne"};
// getInfo(person);
// person;

//  function car(){
//   this.make = "Tata";
//   return {make : "Kia"};
// }
// const myCar = new car();
// myCar.make;

// (()=>{
//   let x = (y = 10);
// })();
// typeof x;
// typeof y;
// (()=>{
//   let x = 10;
// })();

// let x = 100;
// (()=>{
//   var x = 10;
// })();
// x;

// !true - true;

// true + + "10";

// var a = 10;
// (function(){
//   console.log(a); // undefined due to hoisting
//   var a = 20;
// })();

// console.log(1 + "2" + "2")//122
// console.log(1 + + "2" + "2")//32
// console.log(1 + - "1" + "2")//02
// console.log( + "1" + "2" + "2")//122
// console.log("A" - "B")//NaN
// console.log("A" - "B"+2)//NaN

// let num = 10;
// const obj = {
//   num : 20,
//   inner : {
//   num :30,
//     print : function (){
//       console.log(this.num); //30
//     }
// }
// };
// obj.inner.print();
// const print = obj.inner.print;
// print();//umndefimned

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   fullName : function(){
//     return this.firstName + "" + this.lastName;
//   }
// };
// const person2 = {
//   firstName : "Jane",
//   lastName : "Smith",
// };
// person.fullName(); //JohnDoe
