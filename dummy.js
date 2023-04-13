//const users = ["Alice", "Dan", "Jessica"];
          // const query = "A";

          // const user = users.filter((item) => item.startsWith(query));

          // console.log(user);

          // // Function has a closure over a variable
          // // or
          // // A function closes over a variable

          // /************************************************/

          // // Lexical Scope

          // function outermost() {
          //   const user = "Deadpool";
          //   function inner() {
          //     function innerMost() {
          //       const score = 100;
          //     }
          //   }
          // }

          // /************************************************/

          // // Garbage Collector
          // function liveAday() {
          //   const food = "cheese";
          //   const one = 1;
          //   const two = 2;
          //   function eat() {
          //     console.log("Eating...", food);
          //   }
          //   return eat;
          // }

          // const innerFunction = liveAday();

          // /************************************************/


          // // Memory Efficiency
          // // function heavyDuty(index) {
          // //   const bigArray = new Array(7000).fill("🔥");
          // //   console.log("Array Created");
          // //   return bigArray[index];
          // // }

          // // console.log(heavyDuty(700));
          // // console.log(heavyDuty(100));
          // // console.log(heavyDuty(100));
          // // console.log(heavyDuty(100));
          // // console.log(heavyDuty(100));
          // // console.log(heavyDuty(100));

          // function heavyDuty2() {
          //   const bigArray = new Array(7000).fill("🔥");
          //   console.log("Array Created");
          //   return function (index) {
          //     return bigArray[index];
          //   };
          // }

          // const getHeavyDuty = heavyDuty2();
          // getHeavyDuty(1);
          // getHeavyDuty(87);
          // getHeavyDuty(99);

          // /************************************************/

          // // Closures

          // // Encapsulation & Abstraction

          // const rahulSalary = (function () {
          //   let salary = 60000;

          //   function changeBy(amount) {
          //     salary += amount;
          //   }

          //   return {
          //     raise: function () {
          //       changeBy(5000);
          //     },
          //     lower: function () {
          //       changeBy(-10000);
          //     },
          //     currentAmount: function () {
          //       return salary;
          //     },
          //   };
          // })();

          // console.log(rahulSalary.currentAmount());
          // rahulSalary.raise();
          // console.log(rahulSalary.currentAmount());
          // rahulSalary.lower();
          // console.log(rahulSalary.currentAmount());

          // // Callbacks
          // function getVideoDetails(videos, callback) {
          //   // Network Call to the backend with videos
          //   setTimeout(() => {
          //     callback({ id: 1, title: "Hey Jack!", duration: 10 });
          //   }, 1500);
          // }

          // function getUserVideos(email, callback, errorCallback) {
          //   // Network Call to the backend with email
          //   setTimeout(() => {
          //     callback(["video1", "video2", "video3"]);
          //   }, 1500);
          // }

          // function loginUser(email, password, successCallback, errorCallback) {
          //   // Network Call to the backend with email and password
          //   setTimeout(() => {
          //     let error = true;
          //     if (error) {
          //       errorCallback("Network call Unsuccessful!");
          //     } else {
          //       success({ userEmail: email });
          //     }
          //   }, 1500);
          // }

          // loginUser(
          //   "david@gmail.com",
          //   12345,
          //   (userObject) => {
          //     getUserVideos(
          //       userObject.email,
          //       (videos) => {
          //         getVideoDetails(
          //           videos,
          //           () => {
          //             console.log(videos);
          //           },
          //           () => {
          //             console.log("Error");
          //           }
          //         );
          //       },
          //       (error) => {
          //         console.log("Error");
          //       }
          //     );
          //   },
          //   (error) => {
          //     console.log("Error");
          //   }
          // );


          // let user = {

          // firstName: 'naman',

          // lastName: 'jindal',

          // age: 10,

          // courseList: [],

          // /* key value itself */

          // /*

          // arrow functions do not have their own binding of this ->

          // if we are usign arrow functions in that case it matters where the function defination

          // exists, we will be going up the heirarchy to find the parent having its own this and

          // that will act as the value of this for that arrow function

          // whereas in the case of normal functions it matter how that function is getting called.

          // */

          // buyCourse: (courseName) =>{

          // console.log(this) //window

          // this.courseList.push(courseName);

          // },

          // getCourse: function(){

          // //console.log(this) ->

          // console.log(this.courseList)

          // }

          // }

          // user.buyCourse('react'); //

          // user.getCourse(); //


//============= practice =====================

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
//          let r = Math.floor(Math.random()*255);
//          let g = Math.floor(Math.random()*255);
//          let b = math.floor(math.random()*255);
//      }
//      randomColor();

//event propagation
// <div id="grandParent">
//      <div id="parent">
//          <div id="child">
//          </div>
//      </div>
//  </div>
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
//  name : "lkhj",
//  age:22,
//  yo(){
//      console.log(`waddup ${this.name}`);
//  },
// }
// person.yo();
// function Person(name, age){
//  let person = {};
//  person.name = name;
//  person.age = age;
//  person.work = function () {
//  console.log(`hello ${this.name}`);
// }
//  return person; 
// //generic method below
// //   let person = {
// //       name : name,
// //       age : age,
// //       work : function(){
// //           console.log(`hello ${this.name}`);
// //       }
// //   }
// //   return person;
// }
// let personOne = Person("Trinay", 22);
// console.log(personOne)
// personOne.work();

// let sharedMethods = {
//      work : function () {
//          console.log(`hello ${this.name}`);
//     }
// }
// function Person(name, age) {

//      let person = {}
//      person.name = name;
//      person.age = age;
//      person.work = sharedMethods.work;
//      return person;

//      //generic method

//      // let person = {
//      //  name : name,
//      // age : age,
//      // work : sharedMethods.work,
//      // }
//      // return person;
//  }
//  let personOne = Person("Papu",22);
//  personOne.work();


// let Parent = {
//      name : "idk",
//      age : 12,
//   //work(){  console.log(` ${this}.name is working`),}
//      work : function(){
//          console.log(`${this}.name is working`),
//      },
//  };
//  let child = Object.create(Parent);  // creates a new empty object
// // delegates failed look ups to parent
//  console.log(child);

// prototype is an object which is present in every function main funcction is to have the collection of all the methods which can be used by the object which was created by this function
// function Person(name, age){
//   let person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;
//   return person
// }
// Person.prototype.work = function(){
//   console.log(`${this.name} is working`);
// }

// event loop
// single threaded language -> js can do only one thing at a time.
// synchronous 



// closure
// when a function uses a variable declared outside is called closure
    // const users = ["Alice", "Dan", "Pop"];
    // const query = "D";
    // const user = users.filter((item) => item.startsWith(query));
    // console.log(user);
//function has a closure over a variable
// a function
// once we mak ea variable inside a function so what happens is that when we return from that function the garbage collector removes the variables from storage.
// but if another function is being closed on that variable then it won't be removed as it's being used by another variable

//memory efficiency
    // function heavyDuty(){
    //   let bigArray = new Array(7000).fill("LFG");
    //   console.log("Array Created");
    //   return bigArray(index);
    // }
    // console.log(heavyDuty(700));
    // console.log(heavyDuty(4000));
// what this is doing is creating a big array every time and removing it which is not efficient

//IIFY -> Immedietly invoked function expression
    // (function(){
    //   console.log("greet");
    // })();
// incase of arguments
    // ((name)=>{
    //   console.log("hello " + name);
    // })("Trinay");

// let froot = (arr)=>{
//   let num = Math.floor(Math.random()*4);
//   return array[num]
// }
// let array = ["rock", "paper", "scissor"]
// froot(array);
// function getComputerChoice() {
//   let num = Math.floor(Math.random()*3);
//   let array = ["rock", "paper", "scissors"];
//   return array[num];
// }
// getComputerChoice();
// function getResult(playerChoice, computerChoice) {
//   if(playerChoice == "rock"&& computerChoice=="scissors"){
//     return 1;
//   }
//   else{
//     return -1
//   }
// }
// getResult("rock", "scissors")

// function getResult(playerChoice, computerChoice) {
  
//   if(playerChoice == computerChoice){
//     return 0;
//   }
//   else if((playerChoice == "rock" && computerChoice =="scissors") || (playerChoice == "paper" && computerChoice =="rock") || (playerChoice == "scissors" && computerChoice =="paper") ){
//     return 1;
//   }
//   else{
//     return -1;
//   }
// }
// getResult( "paper","rock");

//promises
// // promise is an object
// // have 3 states -> pending, fullfilled, rejected
// // pending intitial stage
// // pending can change from fullfilled or rejected
// // why we need promises?
// // to avoid callback hell
// // when we use new on a constructor function it retuirns to us an object
// let promise = new Promise((resolve, reject)=>{
//   //asunchronous code
//   //setTimeout
//   //Network calls
//   setTimeout(()=>{
//     let noodlesAvailable = false;
//     if(noodlesAvailable){
//       resolve("Noodles recieved"); // pending -> fullfill
//     }
//     else{
//       reject("Noodles not available");// pending -> rejected 
//     }
//   },3000);
// });
//       // console.log(promise);
//       // setTimeout(()=>{
//       //   console.log(promise);
//       // },4000);
// // if the promise is successfull then we run this 
// // .then is a method on promise
// promise.then((message)=>{
//   console.log("setting table", message);
// }).catch((message)=>{ // catch if the promise is not true unsuccessful 
//   console.log("prepare maggi", message);
// })

//fetch
//used for network and api calls
// https://jsonplaceholder.typicode.com/todos/1
// JSON -> javascript object notation
  // fetch("https://jsonplaceholder.typicode.com/todos/1").then(response =>{
  //   let full = response.json()
  //   full.then((data)=>{
  //     console.log(data);
  //   });
  // });

//fetch("https://api.example.com/data").then(response =>)
// fetch("https://jsonplaceholder.typicode.com/todos/5").then(response =>{
//   return response.json();
// }).then((data)=>{
//   console.log(data);
// });

//async and await
  // async function stuff(){ // an async function always gives us a promise wrapping the returned thing
  //   return 2;
  // }
  // let result = stuff();
  // result; // in this case it is a fullfilled promise, bc when you return a value it's fulfilled resolved promise already
// async function arr(){
//   return [1,2,3,4,5];
// }
// let promise = arr();
// promise.then((data)=>{
//   console.log(data);
// });
// async function stuff(){
//   // return Promise.resolve("Success");
//    return Promise.reject("Failed");
// }
// let promise = stuff();
// promise.then((data)=>{
//   console.log(data);
// }).catch((error)=>{
//   console.log("error");
// }); 

// async function getTodo(){
//   // fetch("https://jsonplaceholder.typicode.com/todos/5").then((response)=>{
//   //   response.json()
//   // .then((data)=>{
//   //   console.log(data);
//   // });
//   // });
  
//   // now we can use await keyword
//   let rresponse = await fetch("https://jsonplaceholder.typicode.com/todos/5");
//   let data = await response.json();
// }
// getTodo();
// await returns the resolved value of the fulfilled function
// async function stuff(){
//   try {
//     console.log("LFG");
//   }
//   catch(){
//   }
// }

//error handling in fetch
  // async function todo(){
  //   try{
  //     let response = await fetch("https://jsonplaceholder.typicode.com/todos/5");
  //   // console.log(response);
  //     if(!response.ok){
  //       let message = "error";
  //       throw new Error(message);
  //     }
  //   let data = await response.json();
  //   console.log(data);
  //   }
  //   catch(error){
  //     console.log(message);
  //   }
  // }
  // todo();
  

// function checkCanIVote( delay , age) {
//   let promise = new Promise((resolve, reject)=>{
//     if(age>18){
//       setTimeout(()=>{
//         resolve("You can vote")
//       }, delay);
//     }
//     else{
//       setTimeout(()=>{
//         resolve("You can not vote")
//       }, delay);
//     }
//   })
//     return promise;

// }
// class Account {
//     static accounts = 0;
//     static totalBalance = 0;
//    constructor(accountNum, balance) {
//      this.accountNum = accountNum;
//      this.balance = balance;
//      Account.accounts ++;
//      Account.totalBalance += balance;
//     }
//     static returnTotalAccounts(){
//       return Account.accounts;
//     }
//     static returnTotalBalance(){
//       return Account.totalBalance;
//     }
// }
// let newAccount = new Account("a112", 1000);
// Account.returnTotalAccounts();
// console.log(Account.returnTotalAccounts());
// console.log(Account.returnTotalBalance());

// type= module in script makes it importable and exportable
