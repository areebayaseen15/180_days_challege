
// Array
let myFriends = ["amna" , "alveena" , "khizra"]
console.log(myFriends[2]);

for(let i= 0; i< myFriends.length; i++){
    console.log(myFriends[i].toLowerCase());
    
}

// update array
myFriends[2] = 'aina';


// Array length property

let myArray = [1,3,4,5,7]
console.log(myArray.length); 


//array with the use of constructor
let fruits = new Array("Mango" , "Orange" , "Pineapple")
console.log(fruits);

//#####################################################################################
// Array methods
let array = ["areeba" , "amna" , "aina"]
array.push("Alishba")    // add at last index
array.unshift("Alveena")  //add at firdt index
array.pop()          //remove last one
array.shift()      //remove first one
//using slice to add or re,ove from specific positions
array.splice(1,2)   //remove value frome index 1 and 2   output only ["areeba"]
array.splice(1,2 ,"Ahmed" , "Ali")     // output [ 'areeba', 'Ahmed', 'Ali' ] in this case there are no two elemnt 
//left at index 1 so it just insert we can write it also like
// array.splice(1,0 ,"Ahmed" , "Ali")  
console.log(array);
console.log(array.toString());   //convert array to string
console.log(array.join());     //join also convert array to string
console.log(array.join("/"));
console.log(array.join(""));

//#####################################################################################

// Check if a Variable is an Array
let string = "hello"
let str = ["hello"]
console.log(Array.isArray(string));
console.log(Array.isArray(str));

//#####################################################################################
// loop over an arry
//for loop
for(let i=0 ; i<array.length; i++){
    console.log(array[i]);
    
}
//while loop
let i=0;
while(i <array.length){
    console.log(i);
    i++;
    
}

//for in
let languages = ["js" , "ts" , "python"]
for(let i in languages){
     console.log(i);    //give indexes
    console.log(languages[i]);   //give properties
    
}

//for of
for(let i of languages){
    console.log(i);   //direct name
    
}

//for each
array.forEach((element , index)=>{
    console.log(`${index} : ${element}`);
    
})
//first parameter for elemnt and second for index
array.forEach(function(element , index){
    console.log(`${index} : ${element}`);
    
})

//#####################################################################################
//Compare two arrays
//in js arrays are treated as object so when we compare two arrays it means it wiil look to the reference the memory 
// location that stores that array not the actual value

let a = [1,2,3]
let b= [1,2,3]
console.log(a===b);  //false  because both are stored at different memeory address

let c = a
console.log(c===a); //true because c is refereing the memory address of a


// Compare arrays by converting them to JSON object
console.log(JSON.stringify(a)===JSON.stringify(b));   //true but change in order result in false

//  compare arrays with the every() method
//in this first we have to compare length then every method with 
let result=a.length===b.length && a.every((element , index) => {
      // compare if the element matches in the same index
    return element ===b[index]
})
console.log(result); // true


//include
//compare two elements whoes elements are out of order
let compare = [4,5,6,7]
let compare2= [7,6,5,4]

let results = compare.length===compare2.length && compare.every(function(elem, index){
    return compare2.includes(elem)
})
console.log(results);


//Index of to compare
let result2 = compare.length===compare2.length && compare.every(function(elem, index){
    return compare2.indexOf(elem) !== -1;
})
console.log(result2); //true

//Copy Array
//Slice method => returns shallow copy
// Jo copy banti hai wo original array ke top-level elements ka naya reference leti hai.
// Lekin agar array ke andar objects ya nested arrays hon, to unka same reference hota hai — 
// yani unki copy nahi banti, link ban jata hai.
let arr1 = ["a" , "b" ,"c"]
let arr2 = arr1.slice()
console.log(arr2);   //shallow copy of arr
arr2[1] = "z"    //only update arr2
console.log(arr1);

// A shallow copy won't cause a problem when your array contains primitive values like strings,
//  numbers, or booleans. But it might become an issue when you copy an array of objects.

let arrOfobj = [{name:'areeba' , age: 25}]
let shallowCopy = arrOfobj.slice()
console.log(shallowCopy);   //[{name:'areeba' , age: 25}]

shallowCopy[0].name ="adiyan"
console.log(arrOfobj);  //[{name:'adiyan' , age: 25}]

console.log(shallowCopy); //[{name:'adiyan ' , age: 25}]
//in this case we need to do deep copy


let colors = ["red", "blue", "green", "yellow", "purple"];

let sliced = colors.slice(1, 4);

console.log(sliced);     // Output: ["blue", "green", "yellow"]
console.log(colors);     // Original array is unchanged


//negative index
let fruits1 = ["apple", "banana", "cherry", "mango"];

let lastTwo = fruits1.slice(-2); // -2 means second last element se le kar end tak

console.log(lastTwo); // ["cherry", "mango"]

//copy entire array
let original = [1, 2, 3, 4];

let copy = original.slice();

console.log(copy);     // [1, 2, 3, 4]
console.log(copy === original); // false (different reference)

//Deep copy
// The JSON.stringify() transforms the array into a JSON string, and JSON.parse() converts that 
// string back into an array.

let deepCopy = JSON.parse(JSON.stringify(arrOfobj))
console.log(deepCopy);  //[ { name: 'adiyan', age: 25 } ]

//#####################################################################################
//  Merge Two Arrays into One
let x=["a" , "b"];
let y =["c" , "d"]
console.log(x.concat(y));  //[ 'a', 'b', 'c', 'd' ]
let z= [].concat(x , y)
console.log(z);  //[ 'a', 'b', 'c', 'd' ]


// merge arrays with the spread operator
let spread = [...x , ...y]
console.log(spread);  //[ 'a', 'b', 'c', 'd' ]


//#####################################################################################
//How to Search an Array
//3 ways 
//  How to find whether an element exists in an array  
let search = [1,2,3,4,5,6]
console.log(search.includes(5));  //true
console.log(search.includes(6,1)) //first vlaue for search and second to start the check from


// How to find the index position of an element in an array
let arr = ["a", "b", "c"];
console.log(arr.indexOf("b")); // 1
console.log(arr.indexOf("x")); // -1

//#####################################################################################
// 3. How to find elements that meet certain criteria in an array
let numbers = [4,5,7,8,0]
let filter = numbers.filter(function(currentNumber){
    return currentNumber <5   //return new array of only those element which pass condition
})
console.log(filter);

//filter even number
let even = numbers.filter((num)=>num % 2===0);
console.log(even);


//filter string that contain a
let names = ["Areeba", "Amna", "Fatima", "Zoya"];

let result3 = names.filter(name => name.includes("m") || name.includes("M"));

console.log(result3); // [ "Amna", "Fatima"]


//filter array of object
let students = [
  { name: "Areeba", marks: 45 },
  { name: "Amna", marks: 80 },
  { name: "Zara", marks: 60 }
];

let passed = students.filter(student => student.marks >= 50);

console.log(passed); //[ { name: 'Amna', marks: 80 }, { name: 'Zara', marks: 60 } ]

// filter using this context
let person = {
  minAge: 18,
  isAdult: function(age) {
    return age >= this.minAge;
  }
};

let ages = [12, 18, 20, 15, 30];

let filteredAges = ages.filter(function(age) {
  return this.isAdult(age);
}, person);  // passing person as thisContext

console.log(filteredAges); // Output: [18, 20, 30]

//example using all 3 parameters
// array.filter(callback(currentElement, index, array))
let number = [10, 20, 30, 40, 50];

let result4 = number.filter(function(currentElement, index, array) {
  console.log("Element:", currentElement, "Index:", index, "Array:", array);

  // Filter only those numbers whose index is even and value is greater than 25
  return index % 2 === 0 && currentElement > 25;
});

console.log("Filtered Result:", result4);

//   Find method only returns the element who first satisfies the condition
let findNumber= [3, 6, 9, 12, 15];

let find = findNumber.find(function(num) {
  return num > 10;
});

console.log(findNumber); // Output: 12

//#####################################################################################
//Sorting of an array in ascending order
let num = [5, 2, 4, 1];
num.sort();
console.log(num); // [ 1, 2, 4, 5 ]

//Sorting of an array in descending order
num.sort().reverse();
console.log(num); //[ 5, 4, 2, 1 ]

// sorting of strings
// By default, sort() strings ko alphabetical order (ASCII/Unicode) ke mutabiq sort karta hai.
let name = ["Zoya", "Areeba", "Amna", "Fatima"];

name.sort();

console.log(name); // ["Amna", "Areeba", "Fatima", "Zoya"]

// reverse order
name.sort().reverse();

console.log(name);

//case sensitive
let items = ["banana", "Apple", "cherry", "apple"];

items.sort();

console.log(items);// ["Apple", "apple", "banana", "cherry"]

//#####################################################################################
//Multi dimensional array

let matrix = [
  [1, 2, 3],    
  [4, 5, 6],   
  [7, 8, 9] 
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8


//loop through multidimensinal arary
for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
        console.log(`Element at [${i}][${j}] is ${matrix[i][j]}`);
  }
}
    
