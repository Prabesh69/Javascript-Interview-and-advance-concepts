console.log("hello world")

// Hoisting - Variable and function are automatically declared at the top of the code 
// Example :
console.log(a)
var a = 7; // undefined (Note : it do not says not declared rather says undefined both are different)


// Primitives and reference

// primitives = null,string,bollean,undefined (it can be copied directly)
var b = 7;
let c = b;
console.log(c) // 7 

// refrences = {},[],()  (it can't be copied directly)
let d = [1,2,3,4]
let obj = {name:"Prabesh"}
let e = d;
e.pop(); // remove a digit form last place of a array
console.log(d); // 1,2,3 (it is beacuse the value in e is not it's own [1,2,3,4] but the value i.e [1,2,3,4]  of d so any changes in both d and e will result in change in both variables hence not copied directly)
let obj1 = obj;
obj1.name = "Sam";
console.log(obj.name); // sam (obj is changed even tho we never chnaged it directly that might create a problem)

// Then how to copy the refrences ? Luckly we have the solution i.e :
// Spread Operator (...) it is the right way  for copying a refrence value it basically includes three dots
// Example

let arr1 = [1,2,3,4,5]
let arr2 = [...arr1] // spread operator is used 
arr2.pop();
console.log(arr1,arr2); //[1,2,3,4,5],[1,2,3,4]
let obj2 = {name:"Prabesh"}
let obj3 = {...obj2}
obj3.name = "sam"
console.log(obj2.name); // prabesh (line 24's problem is fixed )



//push pop shift unshift splice

//push
let arr = [1,2,3,4,5,6]
arr.push(7) //add in the end of the arry [1,2,3,4,5,6,7]
console.log(arr)
// pop
arr.pop() // remove  a digit from last place of arry [1,2,3,4,5,6]
console.log(arr)
//shift
arr.shift() //remove  a digit from first place of arry [2,3,4,5,6]
console.log(arr)
//unshift
arr.unshift(1) //add a digit in th first palce of the arry [1,2,3,4,5,6] 
console.log(arr)
//splice
arr.splice(2,1) // removes 1 digit from index = 2 [1,2,4,5,6] i.e splice(index,how many values from that index)
console.log(arr)

// window (There are many features that are provided by a browser and js acceses them with the window i.e when js has to interact with browser elements it uses window )

console.log(window) //these are all the elements of window
// note var adds itself to window but not let and const (major differnce between them) so above line will also show a and b ;
// we don't use var because it exposes itself to window;

// Heap memory(Heap is a location where the created variables or data in a program are stored)

// Execution context (It is a container created whenever a function is called . It will have 3 elements that are variables used in functions , functions used in that function and Lexical environment of that function)
// Lexcial environment (It is data structue used by js that manages the scope of varisbles and functions inside a function or a block of code i.e it shows how much a function can access)  

// Truthy and Falsy (Every value in js is either truthy or falsy ) 
// Note : it is different than true or false 
// Falsy : 0,NaN,undefined,null,false,document.all (every value except falsy is truthy)
// Example 
if(0){ // falsy value is given so it won't satisfy the condition
    console.log("it won't be printed")
}else{
    console.log("it will be printed")
}

if("prabesh"){ // value is truthy
    console.log("it will be printed")
}else{
    console.log("it won't be printed")
}

// foreach (It is used to loop through an array and perform some action through it's elements)
//Example
// syntax: 
// array1.forEach(function(currentValue, index, array) {
//     // Code to be executed for each element
//   });


let arr4 = [1,2,3,4,5]
arr4.forEach((e,i)=>{
    if(i===2){
        e = e*1;
    }else{
        e = e*2;
    }
    console.log(e) // 2,4,3,8,10;

})

//map (It also loops through an array but returns a performing some actions but it returns an array )
// syntax is same as for each 
//Exampe
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(num) {
  return num * 2; // Transform each element and create a new array
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// forin (It is used to loop through an object)
let obj4={ 
name:"prabesh",
age:19,
city:"Butwal"
}
for(let key in obj4){ // key is the storage where value is stored in an object
console.log(key) //name,age,city
// to get the value :
console.log(obj4[key]) //prabesh,19,Butwal
// to get both key and boject :
console.log(key,":" ,obj4[key])
}
delete obj4.city; //This is how you delete the object prop 
console.log(obj4)

// First class function (The ability to use a function as a variable in js is known as first class function)
// Example 
let f = function(){
    console.log("Hello World");
}
f();


// Higher order function (The ability of a function to accept or return another function as a parameter is called Higher order function)
// example (foreach,map)
function ret(e){
    e();
}
ret(function(){
    console.log("hello world")
})

//Constructor function (The function used to construct similar type of other functions/elements is constructor function)
// Example (this and new keyword is used in this function)
function construct(id){
this.name = "Box";
this.width = 14;
this.height = 20;
this.id = id;
}

let box1 = new construct(1); // Created new object
console.log(box1)

// IIFE (immediately invoked function expression : As name suggest this function is immediately invoked after creating it)
// we can create a private function with this feature 
// Example 
var Counter = (function() {
    var privateCount = 0;
  
    function increment() {
      privateCount++;
      console.log(privateCount);
    }
  
    function decrement() {
      privateCount--;
      console.log(privateCount);
    }
  
    return {
      increment: increment,
      decrement: decrement
    };
  })();
  
  Counter.increment(); // Output: 1
  Counter.increment(); // Output: 2
  Counter.decrement(); // Output: 1

// Prototype (Every object contain their own pre build features they are called prototype they are not only limited to object but also to arrays)
// Example :
console.log(obj1) // check [[prototype]]
console.log(arr1.length) // .length is a prototype 

// Prototypal Inheritance (The method of passing features to a component from another component with the help of prototype feature is called prototypal inheritance)
// Example : 
 let Human = {
    Havelegs : true,
    Haveemotions : true,
    immortal : false
 }

 let Doctor = {
    DoSurgery: true,
    MbbsDegree : true
 } // In this example a doctor is also a human so it should also include it's properties so we are going to pass it with the help of prototypal inheritance

 Doctor.__proto__ = Human;
 console.log(Doctor) // click on [[prototype]] the features are stored there
 console.log(Doctor.Havelegs); // true

 // this (this is a reserved keyword of Js whose value changes depending on the contex/scope)
 //Example 

// this in the global and function scope will act as window 
 console.log(this) // window
 function checkthis(){
    console.log(this)
 }
checkthis(); // window

// this is method(function inside an object) acts as the parent object
// Example 

let obj5 = {
    Checkthis : function(){
      console.log(this)
    }
}
obj5.Checkthis()

// this keyword in event listner refers to the value whose event is being listned
// Example 

let h1 = document.querySelector("h1")
h1.addEventListener("click",function(){
    console.log(this) // click the h1 tag and see the console result : <h1>{what's inside}</h1>
})

// call (If you have a function and object and want to make "this" keyword in function as it's local scope then we use call)
// Example 
function abcd(){
    console.log(this.name)
}
let obj6 = {
    name : "Prabesh"
}
abcd.call(obj6) //obj6
// What if we have to pass other parameter to that function
function abcde(value1,value2){
    console.log(this.name,value1,value2)
}

abcde.call(obj6,1,2) // pass object as first parameter than other parmeters

// Apply (It is same as call but we pass the other parameters in an arry)
// Example
function abcdef(value1,value2){
    console.log(this.name,value1,value2)
}
abcdef.apply(obj6,[3,4]) //use array to pass parameters 


// Bind (It is also like call and apply but it is not decalred instantly rather creates a seperate function binding both function and object mostly used in frameworks such as react js)
// Example (it's like map where as call and apply are like foreach)
function Bind(vl,vl1){
    console.log(this.name,vl,vl1)
}
var bindfun = Bind.bind(obj6,1,2)
bindfun()


// Pure and impure functions 


// Pure function (Pure functions produce the same output for the same input consistently. They do not rely on any external factors that could introduce non-determinism, such as the current time, random number generators, or network requests.)
// Example
function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(4, 3)); // 12
  console.log(multiply(2, 3)); // 6
//   Pure functions do not modify variables outside their scope, modify data structures, or perform I/O operations. They operate solely on the inputs provided and return a new value without altering anything in the program's state.
 

// Impure functions (An impure function may produce different outputs for the same set of input parameters. It can rely on external factors such as the current time, random number generators, or the state of external resources.)
function getRandomNumber() {
    return Math.random()*6; // Generate random number(float value) from 0-6
  }
  
  console.log(getRandomNumber()); 
  console.log(getRandomNumber()); 
//   Impure functions can modify variables outside their scope, alter data structures, perform I/O operations, or have observable effects on the program's state.
// Example 
let counter = 0;

function increment() {
  counter++;
}

increment();
console.log(counter); //  1

// reduce function (It is used to apply a callback function to each element of the array in order to reduce it to a single value. The callback function takes four arguments: an accumulator, the current value, the current index, and the entire array)
// Example 
const number = [1, 2, 3, 4, 5];

const sum = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // return the value to the accumulator 
}, 1);// initial value of the accumulator

console.log(sum);  16 // only returns single value
// irl use
// one example of it's irl use is to find the maximum number in an array
const number1 = [10, 5, 8, 20, 3, 15];

const max = number1.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
});// no accumulator is given so it is declared as the first value of the array i.e 10 until some number greater than it comes;

console.log(max);  20


