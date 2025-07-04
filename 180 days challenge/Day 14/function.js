
// Function declaration
//IsEven
function isEven(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const number = isEven(123574785)
console.log(number)


//Arrow function
// Reverse string
const reverseString= (str)=>{
      return str.split('').reverse().join('')
}

console.log(reverseString("Areeba"));


// Anonymous function or function expression
//Convert Temperature
 let convertToFehrenheit =function(C){
       f = (C * 9/5) +32
       return f
}
tempInFehrenheit = convertToFehrenheit(72)
console.log(tempInFehrenheit)



// Arrow function with default parameter
// CountVowels
const countVowel = (str ="Areeba Yaseen")=>{
    str = str.toLowerCase();
    let count = 0
      for(let i =0; i< str.length; i++ ){
        if (str[i] === "a" ||
            str[i] === "e" ||
             str[i] === "i" ||
              str[i] === "o" ||
              str[i] === "u" ){
            count = count + 1
        }
      }
      return count  
}
let Vowel = countVowel();
console.log(Vowel)


// Or
const countVowelAlt = (str) => {
  const vowels = "aeiou";
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowelAlt("Areeba Yaseen")); // Output: 7


// Arrow Functions and Their Impact on "this"
// In JavaScript, the value of "this" in an arrow function is lexically bound,
// meaning it retains the value of "this" from the surrounding context where the arrow function is defined.
//this is different from regular functions, where "this" is determined by how the function is called.

const person ={
  name :"Areeba",
  age : 25,
  greet:function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    
  }
}
person.greet(); // Output: Hello, my name is Areeba and I am 25 years old.


// this in normal function this refers to the object that calls the function
function showThis() {
  console.log(this);
}
showThis(); // Output:global object 

const arrowFunction = () => {
  console.log(this);
}
arrowFunction(); // Output:{}


// Hoisting in javascript
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of
//  their containing scope during the compilation phase before the code runs.

greet();    //works fine due to hoisting
function greet(){
    console.log("Hello, World!");
}

//  Function Expressions are Hoisted (Lekin kaam nahi karte):
// sayHello(); // Throws TypeError: sayHello is not a function
// const sayHello = function(){
//     console.log("Hello, World!");
// }

//  IIFE (Immediately Invoked Function Expression)?
(function greetImmediately(name) {
     console.log("hello" + name);
     
}) ("Areeba");

// Rest Parameters and the Spread Operator in JavaScript Functions
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
//  Rest → “Bikhrey huay values ko jama karo array mein”
function sum(...numbers){
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    return numbers.join(',');  
}
console.log(sum(1, 2, 3, 4, 5)); 

//Spread operator allows an iterable (like an array) to be expanded in places where zero or more 
// arguments are expected.
//  Spread → “Array ya object ko bikhra do”
function multiply(x , y, x){
    return x * y * z;
}
const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // Output: 24

//
function joinAll(...words) {
  return words.join(" ");
}

const sentence = ["I", "love", "JavaScript"];
console.log(joinAll(...sentence));  


// Function destruring
// Function ke parameters mein hi object ya array ke andar ke values direct nikaal lena 
// without writing extra code inside the function.

//destructuring of array in obj
function printUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const user = {
  name: "Areeba",
  age: 22,
  city: "Karachi"
};

printUser(user);

//destructuring of array in func
function sum([a, b]) {
  return a + b;
}

console.log(sum([5, 7]));  



//Recursive function =? function which calls itself
// factorial
const factorial = function(num){
      if(num == 0|| num==1){
         return 1
      }else{
        return num * factorial(num - 1)
      }
}
console.log(factorial(5)); // Output: 120
