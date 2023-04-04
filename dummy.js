// normal function
// functions are first clas citizens
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
// let obj={
//   id:1,
//   name:"Trinay",
//   age:22,
// }
// // let id = obj.id;
// // let name = obj.name;
// // let age = obj.age;
// let { id:identity,name:naam, age:umar, height = 56} = obj;
// identity;
// naam;
// umar;
// height;
// destructuting in arrays
// let name =["trinay", "shourya", ];
// // let myName = name[0];
// // let broName = name[1];
// let [myName , broName , anothername = "no clue"] = name;
// myName;
// broName;
// anothername;
// let name =["trinay", "shourya", ];
// let [,broName] = name;
// broName;
// function fullName(item){
//   // console.log(item.name, item.age);
//   let {name, age} = item;
//   console.log(name);
//   console.log(age);
// }
// let properties = {
//   name : "trinay",
//   age : 22,
// }
// fullName(properties);
// function greet(){
//   console.log("HELLO");
// }
// let obj = {
//   // greet :greet,
//   greet, // this is called shorthand way same as above, same example below for a function
//   // smile : function(){
//   //   console.log("hehe");
//   // }
//   smile(){
//     console.log("hehe");
//   }
// }
// obj.smile();
// obj.greet();
// greet();
// greet === obj.greet;

//this keyword
// to reuse a function using different objects
// this -> object, this -> inside the function, look at function invocation to see where it is refering to
// implicit binding -> whatever is on the left of the dot while invocation
//expliciti biinding -> when the function is called we us e.call and the thing inside call () is where this is refering to.
// lexical binding -> arrow function has the same this of it's parent.
// arrow function borrow the this keyword from it's immediete parent scope
// when defining a var variable in global scope it always get added to the windows object, it polluttes the global name space.

//prototype
// let person = {};
// person.name = "luffy";
// person.age = 18;
// person.namee = function(){
//   console.log(this.name);
// }
// person.namee();

// let person ={
// 	name : "lkhj",
// 	age:22,
// 	yo(){
// 		console.log(`waddup ${this.name}`);
// 	},
// }
// person.yo();
// function Person(name, age){
// 	let person = {};
// 	person.name = name;
// 	person.age = age;
// 	person.work = function () {
// 	console.log(`hello ${this.name}`);
// }
// 	return person; 
// //generic method below
// // 	let person = {
// // 		name : name,
// // 		age : age,
// // 		work : function(){
// // 			console.log(`hello ${this.name}`);
// // 		}
// // 	}
// // 	return person;
// }
// let personOne = Person("Trinay", 22);
// console.log(personOne)
// personOne.work();

// let sharedMethods = {
// 		work : function () {
// 			console.log(`hello ${this.name}`);
//     }
// }
// function Person(name, age) {

// 		let person = {}
// 		person.name = name;
// 		person.age = age;
// 		person.work = sharedMethods.work;
// 		return person;

// 		//generic method

// 		// let person = {
// 		// 	name : name,
// 		// age : age,
// 		// work : sharedMethods.work,
// 		// }
// 		// return person;
// 	}
// 	let personOne = Person("Papu",22);
// 	personOne.work();


// let Parent = {
// 		name : "idk",
// 		age : 12,
//   //work(){	console.log(` ${this}.name is working`),}
// 		work : function(){
// 			console.log(`${this}.name is working`),
// 		},
// 	};
// 	let child = Object.create(Parent);  // creates a new empty object
// // delegates failed look ups to parent
// 	console.log(child);

// prototype is an object which is present in every function main funcction is to have the collection of all the methods which can be used by the object which was created by this function
function Person(name, age){
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person
}
Person.prototype.work = function(){
  console.log(`${this.name} is working`);
}

// event loop
// single threaded language -> js can do only one thing at a time.
// synchronous ->




























const users = ["Alice", "Dan", "Jessica"];
const query = "A";

const user = users.filter((item) => item.startsWith(query));

console.log(user);

// Function has a closure over a variable
// or
// A function closes over a variable

/************************************************/

// Lexical Scope

function outermost() {
  const user = "Deadpool";
  function inner() {
    function innerMost() {
      const score = 100;
    }
  }
}

/************************************************/

// Garbage Collector
function liveAday() {
  const food = "cheese";
  const one = 1;
  const two = 2;
  function eat() {
    console.log("Eating...", food);
  }
  return eat;
}

const innerFunction = liveAday();

/************************************************/


// Memory Efficiency
// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("🔥");
//   console.log("Array Created");
//   return bigArray[index];
// }

// console.log(heavyDuty(700));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));
// console.log(heavyDuty(100));

function heavyDuty2() {
  const bigArray = new Array(7000).fill("🔥");
  console.log("Array Created");
  return function (index) {
    return bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(1);
getHeavyDuty(87);
getHeavyDuty(99);

/************************************************/

// Closures

// Encapsulation & Abstraction

const rahulSalary = (function () {
  let salary = 60000;

  function changeBy(amount) {
    salary += amount;
  }

  return {
    raise: function () {
      changeBy(5000);
    },
    lower: function () {
      changeBy(-10000);
    },
    currentAmount: function () {
      return salary;
    },
  };
})();

console.log(rahulSalary.currentAmount());
rahulSalary.raise();
console.log(rahulSalary.currentAmount());
rahulSalary.lower();
console.log(rahulSalary.currentAmount());
















// Callbacks
function getVideoDetails(videos, callback) {
  // Network Call to the backend with videos
  setTimeout(() => {
    callback({ id: 1, title: "Hey Jack!", duration: 10 });
  }, 1500);
}

function getUserVideos(email, callback, errorCallback) {
  // Network Call to the backend with email
  setTimeout(() => {
    callback(["video1", "video2", "video3"]);
  }, 1500);
}

function loginUser(email, password, successCallback, errorCallback) {
  // Network Call to the backend with email and password
  setTimeout(() => {
    let error = true;
    if (error) {
      errorCallback("Network call Unsuccessful!");
    } else {
      success({ userEmail: email });
    }
  }, 1500);
}

loginUser(
  "david@gmail.com",
  12345,
  (userObject) => {
    getUserVideos(
      userObject.email,
      (videos) => {
        getVideoDetails(
          videos,
          () => {
            console.log(videos);
          },
          () => {
            console.log("Error");
          }
        );
      },
      (error) => {
        console.log("Error");
      }
    );
  },
  (error) => {
    console.log("Error");
  }
);