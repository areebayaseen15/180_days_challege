
//                     Some important Array methods

// The Array.forEach Method
//use to iterate over an array
let array = ["To do list" , "Food website" , "Ecommerce website"]
array.forEach(function(arr){
    console.log(arr);
    
})

//forEach_ is only used to loop through the array and perform some processing if you explicitly return 
// a value from the callback function (this means that the returned value comes as undefined in the above example).
let returnValue =array.forEach(function(arr){
    return arr;
    
})
console.log(returnValue);  //undefined

//it can take 3 parameter 
//1st is for valye , 2nd index and 3rd complete array
array.forEach(function(arr , index , array){
    console.log(`${index}: ${arr} \n complete array: [${array}]`);
    
})
//###########################################################################
//The Array.map Method
// map method is to vreate new array from the existing array
let myskills =["HTMl" , "CSS" , "Js" , "TS" , "Python"]
let mapSkills= myskills.map((skill)=> {return skill.toLowerCase()})
console.log(mapSkills);
console.log(myskills);


console.log(myskills.map((skill)=> {return skill}))

// The difference between the forEach and map methods is that forEach is only used for looping 
// and does not return anything back. On the other hand, the map method returns a new array that 
// is of the exact same length as the original array.

let students = [
  { name: "Ali", skill: "js" },
  { name: "Usman", skill: "ts" },
  { name: "Mubashir", skill: "ts" }
];

let tsStudents = students
  .filter(student => student.skill === "ts")
  .map(student => student.name);

console.log(tsStudents); // ["Usman", "Ali"]

// using all 3 parameters

let newStudents = students.map(function(currentValue, index, array) {
  console.log("Full Array:", array)
  return {
    rollNumber: index + 1,
    name: currentValue
  };
});

console.log(newStudents);

// ############################################################################
//The Array.find Method
//return the value which saatifies the condition first and if condition didnt match it returns undefine
let findStudent = students.find((student) => student.name === "Ali");
    
console.log(findStudent.skill);

//#######################################################################
//The Array.findIndex Method
//to find index of an element but returns -1 if it doesnt find
let findStudent2 = students.findIndex((student) => student.name.indexOf("Mubashir")> -1);
    
console.log(findStudent2);

//########################################################################
//The Array.every Method
//every methhods check if all elements in the array pass the provided test so it returns true else false
let numbers =[2,4,6,8,10]
let isEven = numbers.every((num)=> num%2 === 0)
console.log(isEven);   //true

let number =[2,4,6,8,10 , 1 ,5]
let isOdd = number.every((num)=> num%2 != 0)
console.log(isOdd);   //fasle


// const fields = ['first_name', 'last_name', 'email', 'city'];

// const allFieldsEntered = fields.every(function (fieldId) {
//   const input = document.getElementById(fieldId);
//   return input && input.value.trim() !== "";
// });

// if (allFieldsEntered) {
//   console.log('All the fields are entered');
// } else {
//   alert('Please, fill out all the field values.');
// }

//##############################################
//Array.some()
// The some method stops looping through the array once it finds a particular match
numbers = [-10, 5, -20, -50];
let containsPositive = numbers.some(function (number) {
  return number > 0;
});
console.log(containsPositive); // true 

//#####################################################
// The Array.reduce Method
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in 
// a single output value.

const num = [1, 2, 3, 4, 5];

const sum = num.reduce(function(acc, number) {
  return acc + number; 
}, 0);

console.log(sum); // 15
// Here, the accumulator will contain the first element of the array and number will contain the next element of the array
const sum1 = num.reduce(function(acc, number) {
  return acc + number; 
}, 2);
console.log(sum1); // 17


const sum3 = num.reduce(function(acc, number) {
  return acc + number; 
});
console.log(sum3); // 15


//##############################################################
// 3. How to find elements that meet certain criteria in an array
let numb = [4,5,7,8,0]
let filter = numb.filter(function(currentNumber){
    return currentNumber <5   //return new array of only those element which pass condition
})
console.log(filter); //[4,0]

//filter even number
let even = numbers.filter((num)=>num % 2===0);
console.log(even);


//filter string that contain a
let names = ["Areeba", "Amna", "Fatima", "Zoya"];

let result3 = names.filter(name => name.includes("m") || name.includes("M"));

console.log(result3); // [ "Amna", "Fatima"]


//filter array of object
let myStudents = [
  { name: "Areeba", marks: 45 },
  { name: "Amna", marks: 80 },
  { name: "Zara", marks: 60 }
];

let passed = myStudents.filter(student => student.marks >= 50);

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
let number1 = [10, 20, 30, 40, 50];

let result4 = number1.filter(function(currentElement, index, array) {
  console.log("Element:", currentElement, "Index:", index, "Array:", array);

  // Filter only those numbers whose index is even and value is greater than 25
  return index % 2 === 0 && currentElement > 25;
});

console.log("Filtered Result:", result4);
