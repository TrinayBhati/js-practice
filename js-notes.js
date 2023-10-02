// primitive data types are immutable
// primitive data types can only hold one value
============================== Array ==============================
//everything in js is primitive or object
//typeof arrays is object
const sounds = [];
sounds[0] = "kaboom";
sounds[1] = "poof";
sounds[2] = "badum";
sounds;
let boom = sounds[0];
typeof(sounds)// arrays are objects
// array and object
// let name = [elem1, elem2]; let name = {key1: value1, key2 : value2};
// we can have objects, functions, array anything inside an array
sounds.length;
sounds.sort();// sorts on string basis
let sound = sounds[sounds.length -1];// accessing last element
for(let i = 0; i<sounds.length ; i++){
  
}
sounds.forEach((voice)=>{
  
})
Array.isArray(sounds);// checks if array or not

==============================Array Method==============================
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");// returns string with seperation
fruits.toString(); // returns array elements to string
fruits.pop(); // returns and pops the last element from array
fruits;
fruits.push("Mango");// returns new array length
// array.push pushes element to last of array
fruits;
fruits.shift();//returns and pops the first element form array
fruits.unshift("Lemon"); //returns new array length
//array.unshift pushes element to the begening of array
fruits;
fruits[3]
fruits.length;
let veggies = ["potato", "carrot", "tomato" , "spinach"];
const fruitsAndVeggies = fruits.concat(veggies);
fruitsAndVeggies; // concat can be used on more arrays then one and on strings as args
let poof = fruits.concat("kaboom");
poof;
const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat(); // makes the more than 1d array 1d
newArr;
newArr.splice(2, 0, 5, 8);// changes the original array 
//first param -> index where we want new elem, second param -> how many to delete, third param -> elems to add
// splice returns deleted elements n changes the og array
newArr;
let slicedArr = newArr.slice(5); // returns new array removing the elements upto the count given
slicedArr;
newArr;
let arr = [1,2,3,4,5,6,7,8,];
arr.indexOf("a"); // -1 // returns index of the element if not then -1
arr.lastIndexOf("a"); // -1 // returns index of the element last seen in array if not then -1
arr.includes(3); // true // returns true or false depending the array has the element
/// all the searching methods have second optional argument, giving which we can start the search from that index
// for arrays with reference types use find method
// arr.find({any object or array}); // find method takes a function as parameter
// findIndex returns the index works same as find
arr.slice(0,2); //[ 1, 2 ]
arr.slice(0,7); //[ 1, 2, 3, 4, 5, 6, 7 ]
arr.slice(3,5); //[ 4, 5 ]
// mutate the og array -> splice / push
  // append at the end of array -> push
  // can append anywhere -> splice
// do not mutate og array -> spread / concat
const arr = [1,2,3,4];
const brr = arr;
brr === arr // true
brr[1] = "Trinay"
arr; // [1,"Trinay",3, 4 ]
// if we update new brr it also mutates arr not advisable
//spread operator just copies the value n pass it to a different memory 
const arr = [1,2,3,4];
const brr = [...arr]
brr === arr; //false
brr[1] = "Trinay";
arr; // [1,2,3,4] can copy objects as well
//rest just takes extra paramaters and stores themm in array
function sum (a,b,...rest){
  console.log(a+b);// 3
  console.log(rest); // [3,4,5,6,7,8]
}
sum(1,2,3,4,5,6,7,8,);
//looping on rest
function sum (...rest){
  let sum = 0;
  for(let num of rest){
    sum += num;
  }
  return sum;
}
sum(1,2,3,4,5,6,7,8,); // 36

==============================Array loops==============================
const numbers = [45, 4, 6, 16, 25];
// for in used to iterate over properties of object, n iterates over indexes in arrays 
const person = {
  name : "Trinay", age : "22",
}
for(let key in person){
  console.log(key, person[key]); // name Trinay then age 22
}
// in case of arrays key is index of the array elements
const arr = ["red", "blue", "green"];
for(let index in arr){
  console.log(index, arr[index]); // 0 red then 1 blue then 2 green
}
// for of iterates over arrays normally
const arr = ["red", "blue", "green"];
for(let color of arr){
  console.log(color); // red then blue then green
let sum = 0;
}
//foreach takes in 3 arguments value, index, array
// numbers.forEach(func);
// function func(value, index, array) {
//   sum  += value;
// }
numbers.forEach((num) => {
  sum += num;
});
sum;
//map creates a new array, doesn't affect og array
numbers.map((num) => {
  // also takes in 3 arguments
  return num * 2; // performs a task on every element
});
numbers.flatMap((x) => x * 2); // es2019
//filter creates new array, doens't affect og array
numbers.filter((nums) => {
  return nums > 20; // returns the elements satisfying the condition
});
// reduce runs n provides single value
// takes 4 arguments 1 initial value and value itself rest same
numbers.reduce((a, b) => {
  return a + b;
});
numbers.every((num) => {
  // checks if every element passes a certain condition, returns boolean, takes in 3 arguments
  return num > 2;
});
numbers.some((num) => {
  // checks if some element passes a certain condition, returns boolean, takes in 3 arguments
  return num > 220;
});
numbers.indexOf(25); // returns the index of the value in the array, -1 if not present, takes in 2 arguments 1st itme to search 2nd from where to start the search
numbers.lastIndexOf(4); // same as indexOf
numbers.find((num) => {
  return num > 18; // returns first number that satisfies the condition like filter
});
numbers.findIndex((num) => {
  return num > 18; // returns index of first number that satisfies the condition like filter
});
Array.from('asdfghjk'); // returns any iterable object to array
numbers.includes(22); // checks n returns the value is present or not, returns boolean
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];
const year = [...q1, ...q2, ...q3, ...q4];
year; //spreads all the arrays in one copies to be specific
==============================Array Sort==============================
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // returns original sorted array
fruits.reverse(); // returns original array but reversed
// sort function sort values as strings
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
}); // compare function
points.sort(function (a, b) {
  return b - a;
}); // sorts numeric values
points.sort((a, b) => a - b); // can be written as this also arrow function
points.sort((a, b) => 0.5 - Math.random()); // sorts array in random order
points.sort((a, b) => a - b);
points[points.length - 1]; // how to get max number
points[0]; // min number
Math.max.apply(null, points); // first argument pass by apply to function is the value of this the next is the array here it's null so nothing
Math.min.apply(null, points);
// finding max function
const myMax = (arr) => {
  let i = 0;
  let max = -Infinity;
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
};
myMax(points);
//sort
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "BMW", year: 2000 },
  { type: "Audi", year: 2021 },
];
// while sorting array of objects we can take the sub element
cars.sort((a, b) => a.year - b.year);
==============================Object Creation==============================
// object constructor 
var obj = new Object(); 
// object create 
var obj = Object.create(null); 
// Basic
var obj = {
  name : "Sudheer",
  age : 34,
};
// function constructor
function Person(name, age){
  this.name = name;
  this.age = age;
}
var obj = new Person("Shourya", 22);
// function constructor using prototype
function Person(){}; 
Person.prototype.name = "DUMBO";
var obj = new Person();
// using es6 class
class user { 
  constructor(name){
    this.name = name;
  }
}
var object = new user("Heisenberg");
==============================Object Basic==============================
//name : value
const person = { firstName: 'Trinay', age: 22 }; // we cannot reassign const but we can change methods n properties inside the obj
//dot notation
person.lastName = 'Bhati';
person.eyeColor = 'black';
person;
// const person2 = new Object();
// person2.firstName = "Shourya";
// person2.lastName = "Bhati";
// person2; // no need to use this new
//objects are mutable not passed by reference but by value
person.age; // ways to access js properties
//bracket notation
person['age'];
let x = 'firstName';
person[x]; //via expression
let txt = '';
for (let x in person) {
  // looping through objects
  txt += person[x] + ' ';
}
person.age = 23;
delete person.age; // deletes age property from person obj
delete person.eyeColor; // delete person["eyeColor"] // let x = "eyeColor"; delete person[x];
person;
const myObj = {
  car1: 'audi',
  car2: 'bmw',
  car3: 'bugatti',
  yourObj: {
    bike1: 'ninja',
    bike2: 'bullet',
  },
};
myObj.yourObj.bike2;
myObj.yourObj['bike1'];
const user = {
  name: 'john',
  lastName: 'doe',
  age: 32,
  cars: [
    { name: 'Ford', model: ['Fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', model: ['320', 'X3', 'X5'] },
  ],
};
user.cars[0].name; // object -> array -> object
user.cars[1].model[2]; // object -> array -> object -> array
==============================Object methods==============================
const person = {
  firstName : "Trinay",
  lastName : "Bhati",
  age : 22,
  info : function(){ // this refers to an object
    return this.firstName + " " 
+ this.lastName + " is " + this.age + " years old";
  }
}
person.info();
// in object method this -> object
// alone this -> global object
// function this -> global object
// event this -> element with event
person.kaboom = function(){
  return "LFG";
}
person.kaboom();
Object.keys() // returns a string array
if("radius" in obj) cosole.log("yes"); // in operator checks if property exists inside the object and returns true false accordingly
==============================Object strings==============================
const person = {
  name :"John",
  age : 30,
  today : new Date(),
}
person;
let txt = "";
for(let x in person){
   txt += person[x] + " ";
}
const myArray =Object.values(person);// any object can be converted to array using Object.value()
myArray;
const myString = JSON.stringify(person);// converts to string format, can convert dates to strings as well but not functions
myString;
const arr =  ["John", "Peter", "Sally", "Jane"];
let str = JSON.stringify(arr);
str;
==============================Object constructors==============================
//getters and setters
const person = {
  firstName: 'John',
  lastName: 'Doe',
  language: 'en',
  get lang() {
    return this.language;
  },
  get bang() {
    return this.language.toUpperCase();
  },
  get tang() {
    return this.firstName + ' ' + this.lastName;
  },
  set dang(dang) {
    this.language = dang.toUpperCase();
  },
};

// Display data from the object using a getter:
person.lang; // using get we can access it as property instead of function
person.bang;
person.tang;
person.dang = 'hindi'; // sets the language to ten
person.language;
person.speaks = function () {
  return this.firstName + ' ' + this.language;
};
person.speaks();
==============================Object Prorotypes==============================
function person(first, last, age, eyeColor){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyeColor;
}
const me = new person("Trinay" ,"Bhati", 22, "black");
me;
//prototypes - adding properties or methods to existing objects
person.prototype.nationality = "Indian";
me.nationality;
person.prototype.name = function(){
  return (this.firstName + " " + this.lastName);
}
me.name();
==============================Object Cloning==============================
//basic approach
const circle = {
  radius: 1,
  draw() {
    console.log('Draw');
  },
};

const anotherCircle = {};

for (let key in circle) {
  anotherCircle[key] = circle[key];
}
anotherCircle; // { radius: 1, draw: ƒ draw() }

// modern efficient approach
const circle = {
  radius: 1,
  draw() {
    console.log('Draw');
  },
};

const anotherCircle = Object.assign({}, circle); // the target object can be filled as well, and it'll fill it keeping previous properties as is.

anotherCircle; // { radius: 1, draw: ƒ draw() }
==============================Spread Rest==============================

==============================Strings==============================
// strings are primitive types, but js internally wraps it to String object so we can access all these properties and methods. altough type of this string remains string.
const objString = new String("Trinay"); // this is how we create String object but we don't have to. type of this remains object.
let str = "Rabert sit down";
str.length // 6
str.toLowerCase(); // rabert sit down
str.toUpperCase(); // RABERT SIT DOWN
str.indexOf("sit"); // 7 //the first occurance of the string in str
str.substring(2, 6); // bert // extracts the strings in between the index given 
str.split(" "); //['Rabert', 'sit', 'down'] // divides str into array of substrings based on what we specify to be divided on here basedon space seperation
str.replace("sit", "stand"); // Rabert stand down // replaces word given with another one provided. returns a new string doesn't update og string
str.trim(); // Rabert sit down // trims the spaces at the begening and end of the string
str.startsWith() // checks if the string starts with given args, case senstive.
==============================Storage==============================
// sessionStorage would be cleared once the browser is closed, localStorage would remain there
==============================call, apply, bind==============================
let name = {
  firstName : "monkey . D . ", 
  secondname :"Luffy",
  fullName  : function(){
    console.log(this.firstName + this.secondname);
  }
}
name.fullName();
//function borrowing - .call 
let name2 = {
  firstName : "Roronoa ", 
  secondname :"Zoro",
}
name.fullName.call(name2); // in parenthesis is what we want the this to be pointed to
function printName (homeTown, verse){
  console.log(this.firstName + this.secondname + " from " + homeTown + " in " + verse)
}
printName.call(name2, "Konoha", "ninja verse"); // first argument is reference to this keyword later are the args to function
// in applpy method we pass the args in arraylist
printName.apply(name2, ["Konoha", "ninja verse"]); 
// all bind does is binds the method with the object and keeps the copy in a variable so that it can be invoked later
let print = printName.bind(name2, "Konoha", "ninja verse");
print(); 
print; // this is a function
// call, apply, bind
var employee1 = {firstName : "Shourya", lastName : " Bhati"}
var employee2 = {firstName : "Trinay" , lastName : " Bhati"}
function invite(greeting1 , greeting2){
  console.log(greeting1 + "" + this.firstName + "" + this.lastName + "," + greeting2);
};
//call
invite.call(employee1, "Hello " , " How are you?" );
invite.call(employee2, "Hello " , " How are you?" );
// apply
invite.apply(employee1, ["Hello" , "How are you?"]);
invite.apply(employee2, ["Hello" , "How are you?"]);
//bind
const inviteEmployee1 = invite.bind(employee1);
const inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?");
inviteEmployee2("Hello", "How are you?");
==============================truthy falsy==============================
//falsy values
  // 0 either +0 or -0
  // undefined
  // false
  // null 
  // NaN
  // ""
// rest is truthy values
==============================closures==============================
function a(){
  var x = 99;
  function b(){
    console.log(x); // 99
  }
  b();
}
a();
// We also use closures for data hiding
function createCounter() {
    let count = 0; // Private variable

    function increment() {
        count++;
        console.log("Count:", count);
    }

    return increment; // Returning the inner function
}

const counter = createCounter();
counter(); // Output: Count: 1
counter(); // Output: Count: 2
// tricky timeout
function x(){
  for(var i = 0; i<=5; i++){
    setTimeout(function(){
      console.log(i);
    }, i*1000);
  }
  console.log("sup");
}
x(); // 6 6 6 6 6 
// tricky timeout
function x(){
  for(let i = 0; i<=5; i++){
    setTimeout(function(){
      console.log(i);
    }, i*1000);
  }
  console.log("sup");
}
x();
// 0 1 2 3 4 5

==============================misceleneous==============================

// hoisting
// temporaoal deadzone
// truthy/falsy
// functions -> arrow, fxn definition, normal fxn, higher order fxn
// event loop
// undefined
// Coercion and Type Conversion
// array methods -> map, filter, reduce, splice, slice, find methods

// js can be run inside a browser or inside node (that is a c++ program that has google's v8 js engine embeded in it).
//browser and node provide a run time environment for js code
// ecmascript is just a specification and javascript is programming language
