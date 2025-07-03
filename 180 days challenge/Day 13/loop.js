

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

console.log(cities); // 👈 ye check karein ke structure sahi hai

for (let key in cities) {
  console.log(key + ": " + cities[key]);
}


// not recommended to use for in with array 
const array = [1, 2, 3];

for (const i in array) {
  console.log(i);   //output 0,1,2
}

// for of =>The for...of loop iterates over the values of many types of iterables, including arrays, and special collection types like Set and Map. For each value in the iterable object, the code in the code block is executed.

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

// While loop

let i = 2

while(i<10){
    console.log(i);
    i++
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