// onditionals

const x= "10";

// not true
if (x===10){
    console.log('x is 10')
}else if(x > 10){
    console.log("x is greater than 10 ")
}else{
    console.log("x is not 10")
}

// == compare only value not data type
// === compare also data type
const z= 4;
const y= 10;

// not true
if (z>5 && y > 10){
    console.log('z is more than 5 or y is more tahn 10')
}else if(z<5 || y > 10){
    console.log("z is less than 5 or y is greater than 10 ")
}else{
    console.log("happy coding")
}



// Ternary operator  (Short handed of condition)
const a = 10;
const color = a > 10 ? "red" : "blue";
console.log(color)


// Switch Case
// JavaScript mein switch case statement ek single expression ki value ko multiple cases ke against check
//  karta hai. Yeh expression kisi bhi type ka ho sakta hai, jaise string, number, boolean, etc.
switch(color){
    case " red":
        console.log("color is red")
    case "blue" :
        console.log("Color is blue")
    break;
    default:
        console.log("Color is not red or blue")    
}
