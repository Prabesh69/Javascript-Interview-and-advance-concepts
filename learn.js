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
