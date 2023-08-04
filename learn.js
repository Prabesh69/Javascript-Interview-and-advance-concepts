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
      addon: increment,
      decrement: decrement
    };
  })();
  
  Counter.addon(); // Output: 1
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

console.log(max); //20

// Exporting/Importing data 
import problemSolving from "./Problemsolving.js";
problemSolving()

// Regexes :  In JavaScript, a regex (short for regular expression) is a powerful tool used for pattern matching within strings. It allows you to perform complex search and manipulation operations on text data. Regular expressions consist of a pattern defined by a sequence of characters that represent the search criteria.
// Regexes methods in js 

// 1. Pattern matching : Check if a string matches a specific pattern 
const pattern = "Hello, World";
const Regx = /Hello/;
console.log(Regx.test(pattern)); // true

// 2. matching different posibilities: search for Difference in a pattern use or (|);
const pattern2 = "This is a cat or dog may be a fish"
const Regx2 = /cat | dog | fish/ // match any of these
console.log(Regx2.test(pattern2)) //true;

// 3. Ignore the case while matching strings : use /pattern/i to ignore the case while matching use /.../i
const pattern3 = "PRABESH";
const Regx3 = /prabesh/i; // case do not matter now 
console.log(Regx3.test(pattern3)) //true 

// 4.Extract Matches : So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.
const pattern4 = "Hello world this is pattern4";
const Regx4 = /pattern4/ ;
console.log(pattern4.match(Regx4))
// or Honey
console.log("Hello, World ".match(/Hello/)) //if do not match it returns null

//5.Match different instances of repeted word/string use /..../g
const pattern5 = "world,World,worlD"
const Regx5 = /world/ig // use /..../g to search all global matches and i to ignore cases 
console.log(pattern5.match(Regx5))

//6.Match Anything with Wildcard Period(dot) : Sometimes you won't (or don't need to) know the exact characters in your patterns. Thinking of all words that match, say, a misspelling would take a long time. Luckily, you can save time using the wildcard character.
const pattern6 = "How are you, Honey"
const Regx6 = /ho./gi; // use /pattern./ (dot/period) (How and hon will be print . symbolize only one letter)
console.log(pattern6.match(Regx6))

//7.Match Single Character with Multi*ple Possibilities : You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.
const pattern7 = "Hey,hoy,huy"
const Rgex7 = /h[eou]y/ig
console.log(pattern7.match(Rgex7))

//8.Match Letters of the Alphabet
const pattern8 = "cat bat rat sat"
const Regx8 = /[a-z]at/ig
console.log(pattern8.match(Regx8))

//9.Match Numbers and Letters of the Alphabet
const pattern9 = "hello 987.6650"
const Regx9 = /[0-9]/g
console.log(pattern9.match(Regx9))
// both string and numbers can be matched together
const Regx9_1 = /[a-z0-9]/ig
console.log(pattern9.match(Regx9_1)) 

//10.Match Single Characters Not Specified : So far, you have created a set of characters that you want to match, but you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
const pattern10 = "3 blue man is very rich he can get what he wants 009"
const Regx10 = /[^0-9aeiou]/gi // it ignores 0-9 and vowels but special characters are also matched suc as :,{}, ,"",! etc
console.log(pattern10.match(Regx10))

//11.Match Characters that Occur One or More Times : Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
const pattern11 = "Hello world"
const Regx11 = /l+/g
console.log(pattern11.match(Regx11)) //lolipop will return ["l","l"];

//12. Match Characters that Occur Zero or More Times : use * same as 11 but returns null when no character matches 
const pattern12 = "goooooooal"
const pattern12_1 = "hello there"
const pattern12_2 = "Interstellar is my favourite movie"
const Regx12 = /go*/g
const Regx12_1 = /i[a-z]*r/gi
console.log(pattern12.match(Regx12),pattern12_1.match(Regx12),pattern12_2.match(Regx12_1))

//13. Find Characters with Lazy Matching : In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
const pattern13 = "gooooooal, Ronaldo scored in the very last minute"
const Regx13 = /go?/g
const  Regx13_1 = /r[a-z]*?n/gi
console.log(pattern13.match(Regx13),pattern13.match(Regx13_1)); // go is shortest instance

//14.Match Beginning String Pattern : you used the caret character (^) inside a character set to create a negated character set in the form [^thingsThatWillNotBeMatched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
const pattern14 = "Prabesh is a front end react developer with DSA knowledge"
const Regx14 = /^prabesh/i
console.log(Regx14.test(pattern14)) // string in the middle/last wont return true only first string 

//15.Match Ending String Patterns use /....$/
const pattern15 = "He is the one"
const Regx15 = /one$/
console.log(Regx15.test(pattern15))

//16.Match All Letters and Numbers :The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).
const pattern16 = "The Mt.Everest is the tallest mountain in the world"
const Regx16 = /\w/ig
console.log(pattern16.match(Regx16).length)

//17.Match Everything But Letters and Numbers: You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_]
const pattern17 = "I got 84% in my exam, Now iam planning to go to USA!"
const Regx17 = /\W/g
console.log(pattern17.match(Regx17))

//18.Match All Numbers : The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
const pattern18 = "I got over 3.25 GPA in my 12th exam,And got 1520 in my SAT "
const Regx18 = /\d/g
console.log(pattern18.match(Regx18))

//19.Match all non numbers : The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
const pattern19 = "2004 05 01 what a day man "
const Regx19 = /\D/g
console.log(pattern19.match(Regx19))

//Practise :Restrict Possible Usernames : You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username:
// 1)Usernames can only use alpha-numeric characters.
// 2)The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// 3)Username letters can be lowercase and uppercase.
// 4)Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
console.log(userCheck.test(username));

//20.Find spaces : use \s to find spaces 
let pattern20 = "Hello there, How it is going ?" // 6 spaces 
let Regx20 = /\s/g
console.log(pattern20.match(Regx20))

// 21. Ignore spaces : use \S to ignore spaces in your data 
let pattern21 = "Hello world is the quote for programmers"
let Regx21 = /\S/gi
console.log(pattern21.match(Regx21)) // spaces are now ignored.`

// 22.Specify Upper and Lower Number of Matches : You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.
let pattern22 = "aaaaaah"
let Regx22 = /a{3,5}h/
console.log(Regx22.test(pattern22))  // true it includes 3-5 letters of "a"

// 23. Specify Only the Lower Number of Matches: You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.
const pattern23 = "ahhhhhhhhhhh"
const Regx23 = /ah{3,}/ // above 3 "a"
console.log(Regx23.test(pattern23))

//24.Specify Exact Number of Matches : You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want a specific number of matches.
const pattern24 = "ahhh"
const Regx24 = /ah{3}/
console.log(Regx24.test(pattern24))

//25.Check for All or None : You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
const pattern25 = "favorite" //american english
const pattern25_1 = "favourite" //british english
const Regx25 = /favou?rite/ // u might or might not exist (optional)
console.log(Regx25.test(pattern25),Regx25.test(pattern25_1)) // true true

//26.Positive and Negative Lookahead : Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string
//There are two kinds of lookaheads: positive lookahead and negative lookahead.
//A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
// A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.
//On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

// A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

//  Other example 
const pattern26 = " Qui"
const Regx26 = /Qu(?=i)/  //will return true cuz there is "i"
const Regx26_1 = /Qu(?!i)/ // will return false cuz there is "i"
console.log(Regx26.test(pattern26),Regx26_1.test(pattern26))


//27.Check For Mixed Grouping of Characters use ()
const pattern27 = "Penguin"
const Regx27 = /P(engu|umpk)in/
console.log(Regx27.test(pattern27))

//28.Use Capture Groups to Search and Replace : use .replace to replace and $ to replace/change the index
let pattern28 = "one two three";
let Regx28 = /(\w+) (\w+) (\w+)/i; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = pattern28.replace(Regx28, replaceText);
console.log(result)

//29.Reuse Patterns Using Capture Groups : Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. In this case, the goal is to capture a word consisting of alphanumeric characters so the capture group will be \w+ enclosed by parentheses: /(\w+)/.
//Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces.
let pattern29 = "42 42 42";
let Regx29 = /^(\d+) \1 \1$/; 
console.log(Regx29.test(pattern29));

//Remove Whitespace from Start and End : Sometimes whitespace characters around strings are not wanted but are there. Typical processing of strings is to remove the whitespace at the start and end of it.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; 
let result1 = hello.replace(wsRegex, "") 
console.log(result1)

// 🎉🎉 CONGRATULATIONS 🎉🎉 
// YOU HAVE COMPLETED THE 90% OF INTERMIDIATE-ADVANCE JS WITH INTERVIEWS PERPERATIONS NOTE THAT STILL MANY TOPICS ARE STILL NOT AVAILABLE HERE I WILL PUSH THEM SHORTLY.
// NOW WHAT ? NOW LET'S LEARN  CONCEPTS THAT MAKES YOU BETTER THAN 90% OF THE PROGRAMMERS
// LET'S START WITH DEBUGGING :

// DEBUGGING 
import DEBUG from "./Debug.js";
// Learning debugging requires a seperate console to make that please un-commit the line below
DEBUG()
