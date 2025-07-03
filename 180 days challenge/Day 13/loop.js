/For loop

// pass 3 parameters first one is assignment of the iterator or variable ,
// condition ,increament
for (let i = 0 ; i< 10 ; i++ ){
    console.log(`for loop number:${i}`);
}


// for loop in array
const arr = [1, 2, 3, 4, 5];
for (let i = 0 ; i<arr.length ; i++){
    console.log(`For loop in array number: ${arr[i]}}}`)
}

// forOf loop
const todos = ['Buy groceries', 'Clean the house', 'Pay bills'];
for(let todo of todos){
    console.log(`For of loop number: ${todo}`)
}
const persons=[
    {
        id:1,
        name:"John",
        age: 30,
    },
       {
        id:2,
        name:"Areeba",
        age: 25,
    },
       {
        id:3,
        name:"Amna",
        age: 21,
    },
]
for(let person of persons){
    console.log(`For of loop in object number: ${person.name}, Age: ${person.age}`);
}

//High order array methods
// for each loop to iterate over an array

persons.forEach(function(person){
    console.log(`For each loop in object number: ${person.name}, Age: ${person.age}`);
})

// map => allow us to create a new array by applying a function 
// to each element of the original array

const personage =persons.map(function(person){
    return person.age;
     
})
console.log(`Map method to get ages: ${personage}`);
//Filter create new array based on a condition



// filter method

// const todocompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;

// }).map(function(todo)){
//     return todo.text
// }

// console.log(todocompleted)

// for loops are commonly used to run code a set number of times. Also, you can use break to exit the loop early, before the condition expression evaluates to false.


for (let i = 1; i<10 ; i +=2){
    if (i== 7){
        break;
    }
    console.log(i)
}

// continue Abhi ka kaam mat karo, seedha next step par chalo

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

// For in loop 
// The for...in loop iterates over the properties of an object. For each property, the code in the code block is executed.

const cities = {
  a: "islamabad",
  b: "Karachi",
  c: "Lahore"
};

console.log(cities); 

for (let key in cities) {
  console.log(key + ": " + cities[key]);
}


// not recommended to use for in with array 
const array = [1, 2, 3];

for (const i in array) {
  console.log(i);   //output 0,1,2
}

// for of =>The for...of loop iterates over the values of many types of iterables, including arrays, and special
collection types like Set and Map. For each value in the iterable object, the code in the code block is executed.

const arr=["beef", "Mutton" , "pulao"]
for(let i of arr){
    console.log(i)
}

// Iterate over a Map
const m = new Map()
m.set(1 , "blue")
m.set(2 , "white")

for(let i of m){
    console.log(i)
}

// Iterate over a Set:

const set = new Set()
set.add("1")
set.add(5)

for(let i of set){
    console.log(i)
}


// while loop
let i = 0;
while(i < 10){
    console.log(`while loop number:${i}`)
    i++;
}
console.log("#####################")
//  do...while loop is guaranteed to run at least once, even if the condition expression already evaluates to true.

let j= 0

do {
  console.log(j);
  j++;
} while (j < 10);

console.log("#####################")
// Push to an array, even if condition evaluates to true:
let myarray=[];
let k = 10

do {
    myarray.push(k);
    k++
}while(k < 10);

console.log(myarray)
