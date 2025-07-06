
//objects
let person={
    name : "Areeba",
    age :25,
    greet:function(){
        console.log("hello");
        
    },
    
}
// update/modify object using dot notaion
person.isTeacher = true;  //add new property
person.name = "Amna";  //modify name
console.log(person);

// Delete Properties in an Object
delete person.greet;
console.log(person);


// How to Use Special Keys in Objects
let person2 = {
  "first name": "Areeba",   //allowed space character ko quotes ma enclose krna 
//    last name: "Areeba"    //dont allow js will consider we are using two separate variables withoyt coma
};

console.log(person2["first name"]); //use [] notation for space key cant use dot notation


//Dynamically Set Properties
const key = 'level';
let obj = {
  [key]: 'value'   //jb hum braket ma [key] likhtay hain to wo key varaible ki value "level" ko as akey uthaiga
};
console.log(obj); // { level: 'value' }


// wrong literal key
// const key = 'level';
// let obj = {
//   key: 'value'
// };
// console.log(obj);
// // Output: { key: 'value' }

// Method Shorthand Syntax
let person1={
    name : "Areeba",
    age :25,
    speak(){
        return this.name;
    
    },
}
console.log(person1.speak());

// Object Spread Operator
//jb hamay object ki copy bnanai ho different memory address pr
let person3 = {...person1}
person3.age = 30
console.log(person3.age);  //30
console.log(person1.age)  //25

//normaly ya hota ha 
let person4 = person1
person4.age = 26;
console.log(person4.age);  //26
console.log(person1.age) //26 which can be dangerous sometimes because JavaScript me objects reference-based hote hain

// #################################################################################
// Object Destructuring
const student ={
    name : "Ali",
    level : "4th",
}

const {name, level} = student
console.log(name);




// this us object ko refer karta hai jisme wo code chal raha hota hai.
let student2 = {
  name: 'hafsa',
  greet: function() {
    return `My name is ${this.name}, and I am ${this.age} years old.`;
  }
};

console.log(student2.greet());

//this in Arrow Functions
let person6 = {
  name: 'Kamal',
  greet: () => {
    return `Hi, my name is ${this.name}`;
  }
};

console.log(person6.greet()); // Output: "Hi, my name is undefined"
//  Arrow functions me this object ke sath bind nahi hota
//  Arrow function this ko global scope ya outer context se leta hai — not from person


//this outside any object
console.log(this);
// Output: Window { ... }
// kyun? Kyun ke this global scope me hai — aur browser me global object = window
//output {}
// Kyunki Node.js me top-level this refers to module.exports, jo start me ek empty object hota hai.