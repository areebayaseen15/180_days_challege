
//  Variable declaration
// var => global scope   can be reassigned and access from any where hoist  , can be redeclared
// let => block scope   can be reassigned also hoist but after initialization , canot be redeclared but reassighn(update)
//const => block scope, cannot be reassigned  also hoist but after initialization , cannot be redeclared


// primitive data types
// data is directly assigned to memory its nota a 
// resource so we have strings , numbers , booleans ,
// undefined , symbol 

const name ="Areeba";   //strings
const age = 25     //number
const isStudent = true;   //boolean
const yy = undefined; // undefined means no value assigned
 const city = null;  // null means empty or no value
const rating = 5.6;     //number
 console.log(typeof rating);    //typeof is an operator used to check dataa type
   


//  concatinating strings
console.log("My name is " + name + " and I am " + age);
// Template strings
const hello= My name is ${name} and I am ${age}

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

// some arrays properties
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





// objects in array
const todos = [
    {
        id:1,
        text:"Take out trash",
        iscompleted: true,
        
    },

    {
        id : 2 ,
        text:"Meeting with boss",
        isCompleted : true,

    },
     {
        id : 3 ,
        text:"Dentist appt",
        isCompleted : false,

    }
];

const todoJson= JSON.stringify(todos);
console.log(todoJson)
