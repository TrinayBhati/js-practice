============================== Array ==============================
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

==============================Array Methods==============================
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");//returns string with seperation
fruits.toString(); // returns array elements to string
fruits.pop(); // returns and pops the last element from array
fruits;
fruits.push("Mango");// returns new array length
fruits;
fruits.shift();//returns and pops the first element form array
fruits.unshift("Lemon"); //returns new array length
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
newArr;
let slicedArr = newArr.slice(5); // returns new array removing the elements upto the count given
slicedArr;
newArr;
==============================Array Iterations==============================
const numbers = [45, 4, 6, 16, 25];
let sum = 0;
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
Array.from('asdfghjk'); // makturns any iterable object to array
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
//===============================================
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
//===============================================
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "BMW", year: 2000 },
  { type: "Audi", year: 2021 },
];
// while sorting array of objects we can take the sub element
cars.sort((a, b) => a.year - b.year);














