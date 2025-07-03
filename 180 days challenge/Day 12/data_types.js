

// var => global scope   can be reassigned and access from any where 
// let => block scope   can be reassigned 
//const => block scope, cannot be reassigned




// primitive data types
// data is directly assigned to memory its nota a 
// resource so we have strings , numbers , booleans ,
// undefined , symbol 

const name ="Areeba";
const age = 25
const isStudent = true;
const yy = undefined; // undefined means no value assigned
 const city = null;  // null means empty or no value
const rating = 5.6;
 console.log(typeof rating);



//  concatinating strings
console.log("My name is " + name + " and I am " + age);
// Template strings
const hello= `My name is ${name} and I am ${age}`

console.log(hello);


// sting properties

const s ="Hello world";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(''))

const z = "technology , computer , it , code";
console.log(z.split(', ')); // split by comma and space
console.clear()
console.time(10)



// Arrays => variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers)


const fruits = ["apples" , "oranges" , "pears: , 10 , true"]
fruits[1] = "grapes";
fruits.push("mangoes")
fruits.unshift("strawberries");
fruits.pop();
fruits.shift()
console.log(Array.isArray("hello"))
console.log(fruits.indexOf("oranges"))

console.log(fruits[1]);



// Object literls

const person={
    firstName : 'Areeba',
    lastName :"Yaseen",
    age:25,
    hobbies:["reading" , "movies" , "sports"],
    address:{
        street:'bheempura',
        city:"Boolean",
        state: "MA"
    },
}

console.log(person.firstName , person.lastName);
// destructuring object
const {firstName , lastName , address:{city}} = person;

console.log(firstName); 



