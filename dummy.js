// normal function
// function speak (){
//   console.log("speaking");
// }
// speak();

// arrow function
// let speak = () =>{
//   console.log("speaking");
// }
// speak();

//function inside an object
// a function which is part of an object is called a method
// const object = {
//   speak: function () {
//     console.log("speaking");
//   },
//   id: 123,
//   name: "trinay",
// };
// object.speak();
// object.name;

// const object = {
//   speak : () =>{
//     console.log("LFG");
//   },
// }
// object.speak();
//functions are cricketers
// methods are like batsmen or bowlers

// arrays, objects, functions are all considered as objects.. but when we do typeOf a function it shows function but it is function object

// when comparing two different arrays, objects or functions we're doing it by reference
// const one = [1,2,3];
// const two = [1,2,3];
// console.log(one == two);
// function one () {
//   console.log("yo");
// }
// // function two () {
// //   console.log("yo");
// // }
// one();
// const two = one;// passing the reference of the function to a new variable
// two();
// one == two;

// function speak(){
//   console.log("LFG");
// }
// const object = {
//   if : 1,
//   speak : speak,
// }
// const another = speak;
// another();

// speak();
// speak = function(){
//   console.log("WHOO");
// }
// speak();

// object.speak();
// object.speak = function(){
//   console.log("WHOO");
// }
// object.speak();

// let randomColor = () =>{
// 			let r = Math.floor(Math.random()*255);
// 			let g = Math.floor(Math.random()*255);
// 			let b = math.floor(math.random()*255);
// 		}
// 		randomColor();

//event propagation
// <div id="grandParent">
// 		<div id="parent">
// 			<div id="child">
// 			</div>
// 		</div>
// 	</div>
// event bubbling - bubble up - child parent grandParent
// event capture - capture up - opposite of bubbling - grandParent parent child
//addEventListener is an object can take multiple properties
//target is original target
// currentTarget is currect one

// async - paralely, defer - wait then execute
// incase of multiple script files the smallest one is downloaded first in case of async, order of script may or may not be same
// in case of defer it'll run in the same order
// using defer in the head tag is better

//local storage - browser storage
//session storage - local storage

//default parameters
// function one (a, b = 1, c = 1, d = 1){
//   return a+b+c+d;
// }
// one(2);

// spread operator
//copy array
// let arr = [1,2,3,4,5];
// let newArr = arr.slice();// slice always returns a brand new array
// newArr;
// let array = arr;// not copying array just passing the reference
// array;
// let anotherArr = ['starting',...arr, "ending", 9, 10];// three dots copies and spreads the array into a new array
// anotherArr;
// let obj = {
//   id : 1,
//   name : "lkj"
// };
// let obj2 = {
//   ...obj, age : 23, id: 22,
// }
// obj2;
// let ans = Math.pow(2, 3);
// ans;
// let random = Math.floor(Math.random() * 5);
// random;
// // let max = Math.max(2,3,6,12,99);
// let arr =[2,098,544,17];
// let max = Math.max(...arr);
// max;
// function sum (a,b){
//   return a+b;  
// }
// let arr = [1,2,3,4,5];
// sum(...arr);

//rest operator
// function run (a,b,...arr){// collecting the rest arguments, defined in function declaration
//   console.log(arr);  
// }
// run(2,3,4,5,6,7,);
// function bum (...array){
//   let sum = 0;
//   for(let num of array){
//     sum += num;
//   }
//   return sum;
// }
// bum(2,3,4,5,8,123);

// destructuring
let obj={
  id:1,
  name:"Trinay",
  age:22,
}
// let id = obj.id;
// let name = obj.name;
// let age = obj.age;
let { id,name, age} = obj;
id;
name;
age;

 






