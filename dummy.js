// normal function
// functions are first class citizens
function speak (){
  console.log("speaking");
}
speak();

// arrow function
let speak = () =>{
  console.log("speaking");
}
speak();

// function inside an object
// a function which is part of an object is called a method
const object = {
  speak: function () {
    console.log("speaking");
  },
  id: 123,
  name: "trinay",
};
object.speak();
object.name;

const object = {
  speak : () =>{
    console.log("LFG");
  },
}
object.speak();
// functions are cricketers
// methods are like batsmen or bowlers

// arrays, objects, functions are all considered as objects.. but when we do typeOf a function it shows function but it is function object

// when comparing two different arrays, objects or functions we're doing it by reference
const one = [1,2,3];
const two = [1,2,3];
console.log(one == two);
function one () {
  console.log("yo");
}
function two () {
  console.log("yo");
}
one();
const two = one;// passing the reference of the function to a new variable
two();
one == two;

function speak(){
  console.log("LFG");
}
const object = {
  id : 1,
  speak : speak,
}
const another = speak;
another();

speak();
speak = function(){
  console.log("WHOO");
}
speak();

object.speak();
object.speak = function(){
  console.log("WHOO");
}
object.speak();

let randomColor = () =>{
         let r = Math.floor(Math.random()*255);
         let g = Math.floor(Math.random()*255);
         let b = math.floor(math.random()*255);
     }
     randomColor();

// event propagation
// <div id="grandParent">
//      <div id="parent">
//          <div id="child">
//          </div>
//      </div>
//  </div>
// event bubbling - bubble up - child parent grandParent
// event capture - capture up - opposite of bubbling - grandParent parent child
// addEventListener is an object can take multiple properties
// target is original target
// currentTarget is currect one

// async - parallely, defer - wait then execute
// incase of multiple script files the smallest one is downloaded first in case of async, order of script may or may not be same
// in case of defer it'll run in the same order
// using defer in the head tag is better

// local storage - browser storage
// session storage - local storage

// default parameters
function one (a, b = 1, c = 1, d = 1){
  return a+b+c+d;
}
one(2);

// spread operator
// copy array
let arr = [1,2,3,4,5];
let newArr = arr.slice();// slice always returns a brand new array
newArr;
let array = arr;// not copying array just passing the reference
array;
let anotherArr = ['starting',...arr, "ending", 9, 10];// three dots copies and spreads the array into a new array
anotherArr;
let obj = {
  id : 1,
  name : "lkj"
};
let obj2 = {
  ...obj, age : 23, id: 22,
}
obj2;

let ans = Math.pow(2, 3);
ans;
let random = Math.floor(Math.random() * 5);
random;
// let max = Math.max(2,3,6,12,99);
let arr =[2,98,544,17];
let max = Math.max(...arr);
max;
function sum (a,b){
  return a+b;
}
let arr = [1,2,3,4,5];
sum(...arr);

rest operator
function run (a,b,...arr){// collecting the rest arguments, defined in function declaration
  console.log(arr);
}
run(2,3,4,5,6,7,);
function bum (...array){
  let sum = 0;
  for(let num of array){
    sum += num;
  }
  return sum;
}
bum(2,3,4,5,8,123);

// destructuring
let obj={
  id:1,
  name:"Trinay",
  age:22,
}
// let id = obj.id;
// let name = obj.name;
// let age = obj.age;
let { id:identity,name:naam, age:umar, height = 56} = obj;
identity;
naam;
umar;
height;

// destructuting in arrays
let name =["trinay", "shourya", ];
// let myName = name[0];
// let broName = name[1];
let [myName , broName , anothername = "no clue"] = name;
myName;
broName;
anothername;
let name =["trinay", "shourya", ];
let [,broName] = name;
broName;
function fullName(item){
  // console.log(item.name, item.age);
  let {name, age} = item;
  console.log(name);
  console.log(age);
}
let properties = {
  name : "trinay",
  age : 22,
}
fullName(properties);
function greet(){
  console.log("HELLO");
}
let obj = {
  // greet :greet,
  greet, // this is called shorthand way same as above, same example below for a function
  // smile : function(){
  //   console.log("hehe");
  // }
  smile(){
    console.log("hehe");
  }
}
obj.smile();
obj.greet();
greet();
greet === obj.greet;

// this keyword
// to reuse a function using different objects
// this -> object, this -> inside the function, look at function invocation to see where it is refering to
// implicit binding -> whatever is on the left of the dot while invocation
// expliciti biinding -> when the function is called we us e.call and the thing inside call () is where this is refering to.
// lexical binding -> arrow function has the same this of it's parent.
// arrow function borrow the this keyword from it's immediete parent scope
// when defining a var variable in global scope it always get added to the windows object, it polluttes the global name space.

// prototype
let person = {};
person.name = "luffy";
person.age = 18;
person.namee = function(){
  console.log(this.name);
}
person.namee();

let person ={
 name : "lkhj",
 age:22,
 yo(){
     console.log(`waddup ${this.name}`);
 },
}
person.yo();
function Person(name, age){
 let person = {};
 person.name = name;
 person.age = age;
 person.work = function () {
 console.log(`hello ${this.name}`);
}
 return person;
//generic method below
//   let person = {
//       name : name,
//       age : age,
//       work : function(){
//           console.log(`hello ${this.name}`);
//       }
//   }
//   return person;
}
let personOne = Person("Trinay", 22);
console.log(personOne)
personOne.work();

let sharedMethods = {
     work : function () {
         console.log(`hello ${this.name}`);
    }
}
function Person(name, age) {

     let person = {}
     person.name = name;
     person.age = age;
     person.work = sharedMethods.work;
     return person;

     //generic method

     // let person = {
     //  name : name,
     // age : age,
     // work : sharedMethods.work,
     // }
     // return person;
 }
 let personOne = Person("Papu",22);
 personOne.work();

let Parent = {
     name : "idk",
     age : 12,
  //work(){  console.log(` ${this}.name is working`),}
     work : function(){
         console.log(`${this}.name is working`),
     },
 };
 let child = Object.create(Parent);  // creates a new empty object
// delegates failed look ups to parent
 console.log(child);

// prototype is an object which is present in every function main function is to have the collection of all the methods which can be used by the object which was created by this function
function Person(name, age){
  let person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person
}
Person.prototype.work = function(){
  console.log(`${this.name} is working`);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};
var person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice


// event loop
// single threaded language -> js can do only one thing at a time.
// synchronous

// closure
// when a function uses a variable declared outside is called closure
const users = ["Alice", "Dan", "Pop"];
const query = "D";
const user = users.filter((item) => item.startsWith(query));
console.log(user);
// function has a closure over a variable
// a function
// once we make a variable inside a function so what happens is that when we return from that function the garbage collector removes the variables from storage.
// but if another function is being closed on that variable then it won't be removed as it's being used by another variable

// memory efficiency
function heavyDuty(){
  let bigArray = new Array(7000).fill("LFG");
  console.log("Array Created");
  return bigArray(index);
}
console.log(heavyDuty(700));
console.log(heavyDuty(4000));
// what this is doing is creating a big array every time and removing it which is not efficient

// IIFY -> Immedietly invoked function expression
(function(){
  console.log("greet");
})();
// incase of arguments
((name)=>{
  console.log("hello " + name);
})("Trinay");

let froot = (arr)=>{
  let num = Math.floor(Math.random()*4);
  return array[num]
}
let array = ["rock", "paper", "scissor"]
froot(array);
function getComputerChoice() {
  let num = Math.floor(Math.random()*3);
  let array = ["rock", "paper", "scissors"];
  return array[num];
}
getComputerChoice();
function getResult(playerChoice, computerChoice) {
  if(playerChoice == "rock"&& computerChoice == "scissors"){
    return 1;
  }
  else{
    return -1
  }
}
getResult("rock", "scissors")

function getResult(playerChoice, computerChoice) {

  if(playerChoice == computerChoice){
    return 0;
  }
  else if((playerChoice == "rock" && computerChoice =="scissors") || (playerChoice == "paper" && computerChoice =="rock") || (playerChoice == "scissors" && computerChoice =="paper") ){
    return 1;
  }
  else{
    return -1;
  }
}
getResult( "paper","rock");

// promises
// promise is an object
// have 3 states -> pending, fullfilled, rejected
// pending intitial stage
// pending can change from fullfilled or rejected
// why we need promises?
// to avoid callback hell
// when we use new on a constructor function it returns to us an object
let promise = new Promise((resolve, reject)=>{
  //asunchronous code
  //setTimeout
  //Network calls
  setTimeout(()=>{
    let noodlesAvailable = false;
    if(noodlesAvailable){
      resolve("Noodles recieved"); // pending -> fullfill
    }
    else{
      reject("Noodles not available");// pending -> rejected
    }
  },3000);
});
      // console.log(promise);
      // setTimeout(()=>{
      //   console.log(promise);
      // },4000);
// if the promise is successfull then we run this
// .then is a method on promise
promise.then((message)=>{
  console.log("setting table", message);
}).catch((message)=>{ // catch if the promise is not true unsuccessful
  console.log("prepare maggi", message);
})

// fetch
// used for network and api calls
// https://jsonplaceholder.typicode.com/todos/1
// JSON -> javascript object notation
fetch("https://jsonplaceholder.typicode.com/todos/1").then(response =>{
  let full = response.json()
  full.then((data)=>{
    console.log(data);
  });
});

// fetch("https://api.example.com/data").then(response =>)
fetch("https://jsonplaceholder.typicode.com/todos/5").then(response =>{
  return response.json();
}).then((data)=>{
  console.log(data);
});

// async and await
async function stuff(){ // an async function always gives us a promise wrapping the returned thing
  return 2;
}
let result = stuff();
result; // in this case it is a fullfilled promise, bc when you return a value it's fulfilled resolved promise already
async function arr(){
  return [1,2,3,4,5];
}
let promise = arr();
promise.then((data)=>{
  console.log(data);
});
async function stuff(){
  // return Promise.resolve("Success");
   return Promise.reject("Failed");
}
let promise = stuff();
promise.then((data)=>{
  console.log(data);
}).catch((error)=>{
  console.log("error");
});

async function getTodo(){
  // fetch("https://jsonplaceholder.typicode.com/todos/5").then((response)=>{
  //   response.json()
  // .then((data)=>{
  //   console.log(data);
  // });
  // });

  // now we can use await keyword
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  let data = await response.json();
}
getTodo();
// await returns the resolved value of the fulfilled function
async function stuff(){
  try {
    console.log("LFG");
  }
  catch(){
  }
}

// error handling in fetch
async function todo(){
  try{
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  // console.log(response);
    if(!response.ok){
      let message = "error";
      throw new Error(message);
    }
  let data = await response.json();
  console.log(data);
  }
  catch(error){
    console.log(message);
  }
}
todo();

function checkCanIVote( delay , age) {
  let promise = new Promise((resolve, reject)=>{
    if(age>18){
      setTimeout(()=>{
        resolve("You can vote")
      }, delay);
    }
    else{
      setTimeout(()=>{
        resolve("You can not vote")
      }, delay);
    }
  })
    return promise;

}
class Account {
    static accounts = 0;
    static totalBalance = 0;
   constructor(accountNum, balance) {
     this.accountNum = accountNum;
     this.balance = balance;
     Account.accounts ++;
     Account.totalBalance += balance;
    }
    static returnTotalAccounts(){
      return Account.accounts;
    }
    static returnTotalBalance(){
      return Account.totalBalance;
    }
}
let newAccount = new Account("a112", 1000);
Account.returnTotalAccounts();
console.log(Account.returnTotalAccounts());
console.log(Account.returnTotalBalance());

// type= module in script makes it importable and exportable
// import(sum as add) export(sum, city) 
//export default hobbies import dumm import * as user from "./location.js" now it'll give user object use it as user.smthn

// npm install or i lodash
// npm run dev

indexOf() //whatever we give inside this it returns the index of it's first occurence
 // step1:
    fetch()
    // step2:
    fetch().then()
    // step3:
    fetch().then(()=>{

    })
    // step4:
    fetch().then((response)=>{
      return response.json();
    })
    // step5:
    fetch().then((response)=>{
      return response.json();
    }).then((res)=>{
      console.log(res);
    })
// arrow functions does not have a binding of this keyword
// function is kinda method in general
// a function that is a property of an object is a method
// this refers to the owner object

var x = "a";
const obj = {
  x : "b",
  // f : () =>{
  //   console.log(this.x);
  // }
  // f : function(){
  //   console.log(this.x);
  // }
}
obj.f();

// if we create smthn using let or const those identifier does not get connected to window object
// api - application programming interface

// folicals 
Array.prototype.myForEach = function(cb){
  for(var i = 0; i<this.length ; i++){
    cb(this[i], i, this)
  }
}
let arr = [1,2,3,4,5,6];
arr.myForEach((elem)=>{
  console.log(elem);
})
 
// when alone this refers window
// in object method this referes owner
// in normal funtion this refers window 
// in function in strict mode this refers to nothing
// in event this referes to the element

/*const getDog = async ()=>{
	const url = "";
	const response = await fetch(url);
	const data = await response.json();
}*/
// rules for async await, gotta use in a function, must use keyword await n async

//only have methods inside of classes 

Array.prototype.myPush = function(){
	return this.length;
}
let froots = ["apple", "banana", "berries"];
console.log(froots.myPush());

// class Bank{
   constructor(balance){
    this.balance = balance;
  }
  withdraw(amount){
    // if(amount >= this.balance){
       if(this.balance - amount <= 0){ 
       console.log("can't withdraw");
      return;
       }
    else{
      this.balance -= amount;
    }
    
  }
  deposit(amount){
    this.balance += amount;
  }
//}

const checking = new Bank(100);
// console.log(checking.balance);
// checking.deposit(20);
// console.log(checking.balance);
// checking.withdraw(10);
// console.log(checking.balance);
checking.withdraw(100);
// console.log(checking.balance);

const obj = undefined
obj && obj.class;
obj?.class;
const object = {};
object.location?.id;

let count = 0;
let id = setInterval(() => {
  console.log(count);
  count++;
  if(count == 11){
    clearInterval(id)
  }
}, 500);

// new promise : basic 1
const myPromise = new Promise((resolve, reject) => {
  //Asynchronous task here
  setTimeout(() => {
    const random = Math.random();
    if (random < 0.5) {
      resolve(random);
    } else {
      reject(new Error('Number greater than expected'));
    }
  }, 2000);
});
myPromise
  .then((result) => {
    console.log('Resolved', result);
  })
  .catch((error) => {
    const newLocal = 'Rejected';
    console.log(newLocal, error.message);
  });2

// example 2
  function getData() {
    return new Promise((resolve, reject) => {
      fetch('https://api.example.com/data')
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  getData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

//example 3
    function delay(ms) {
      return new Promise((resolve) => {
        if (ms < 0) {
          reject(new Error('Invalid delay time'));
        } else {
          setTimeout(resolve, ms);
        }
      });
    }
    let random = Math.floor(Math.random() * 10000);
    delay(random)
      .then(() => console.log('Delay completed'))
      .catch((error) => console.log(error));

//example 4
      function readFileAsPromise(file) {
        return new Promise((resolve, reject) => {
          fs.readFile(file, 'utf8', (error, data) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
            }
          });
        });
      }
      readFileAsPromise('notes.txt')
        .then(data => console.log(data))
        .catch(error => console.log(error));

// true && "one" => "one"
// false && true => false
// null && true => null
// "hey" && false => false
// true && true => true
// true && false && true => false && true => false
// "hey" && "what" && "are" && false => "what" && "are" && false => "are" && false => false
