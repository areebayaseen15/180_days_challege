
//template literals

let name = "Areeba Yaseen"
let job = "Frontend developer"

let intro = `Hello! , My name Areeba and I am a ${job}`


// Destructuring Objects

let person ={
    personName:"Areeba",
    skills:["html" , "Css" , "Ts"]
}
console.log(person.personName);

let {personName, skills} = person
console.log(personName);
console.log(skills);

// Destructuring Arrays
const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // red
console.log(secondColor); // green
console.log(thirdColor); // blue


const user = ['Areeba', 25, 'Pakistan'];

const [myName, age, country] = user;

console.log(myName);    // Areeba
console.log(age);     // 25
console.log(country); // Pakistan

//Object Literal
let firstName = 'Dylan';  
let information = { firstName };
console.log(information);   //{ firstName: 'Dylan' }


// Object Literal (Challenge)

function addressMaker(address) {  
   const newAddress = {  
      city: address.city,  
      state: address.state,  
      country: 'United States'  
   };  
}

//solve
function addressMaker(address) {
  // Destructuring the address object
  const { city, state } = address;

  // Creating a new object using shorthand property names and adding country
  const newAddress = {
    city,
    state,
    country: 'United States'
  };

  // Logging the values using template literals
  console.log(`City: ${newAddress.city}`);
  console.log(`Full Address: ${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
  console.log(`Country: ${newAddress.country}`);
}

// Example usage:
addressMaker({ city: 'New York', state: 'NY' });


// For…Of Loop
let str = 'hello';

for (let char of str) {  
    console.log(char);
}

//For…Of Loop challenge
let incomes = [62000, 67000, 75000];

for (const income of incomes) {
console.log(income);
   
}  


//Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);


//Rest Operator
function findLength(...args) {  
    console.log(args.length);
}

findLength();  // 0
findLength(1); // 1
findLength(2, 3, 4); // 3



//Arrow Function
const square = num => num * num;
square(2); // 4


//Default Parameter
function sum (a, b = 1) {    
  return a + b;
}

sum(5); // 6


//Includes()
// let str = 'Hello World';

console.log(str.includes('hello')); // true


//Let and Cost
let greet = 'Hello World';

const num = 12345;


// Import and Export
// exports function 
// export function double(num) {   
//  return num * num;  
// }


// imports function  
// import { double } from '..filepath/filename


//padStart() and padEnd()
//padStart and padEnd will simply add padding at the start and end of the string.


let s= 'Hello';  
s.padStart(3); // '   Hello'

s.padEnd(3); // 'Hellp   '


//padStart() and padEnd() challenge
let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(100));  
console.log(example.padEnd(1));



//Class
class Car {
   constructor(wheels, doors) {
      this.wheels = wheels;
      this.doors = doors;
   }
   describeMe() {
     console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
   }}


const car1 = new Car(4, 2);  
car1.describeMe(); // Doors: 2 and Wheels: 4



// Trailing Commas
let arr = [  1,   2,   3, ];arr.length; // 3

// Async & Await
let response = await fetch('https://example.com/books');
console.log('response');


//Part #21: Async & Await (Challenge)
function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

async function asyncCall() {
  console.log('calling...');
  const result = await resolveAfter3Seconds(); // waits 3 seconds
  console.log(result); // logs 'resolved'
}

asyncCall();



//Sets
const set1 = new Set([1, 2, 2, 3, 4, 4, 5]);

console.log(set1); // Set(5) {1, 2, 3, 4, 5}
