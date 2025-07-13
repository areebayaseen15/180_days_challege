

//parsing error  =>syntax and grammar error
//run time error  => syntax wise looks great but when programs run it gives you error

//What are exceptions in javascript?
exceptions are run time error that distrubs your progaram exeution

//exapmle 
console.log(x); //referenceError x is not defined


let obj = null;
console.log(obj.name);  //TypeError cannot read property of null

console.log("hi";  //UncaughtSyntaxerror missing ) after argument


let array =new Array(-1) //Uncaught Range error invalid array length
//Aray can have 0 or more eeror 


// decodeComponent =>URIError – Occurs when an incorrect URI function is used in encoding and decoding URIs.

//EvalError – Occurs when there is an issue with the eval() function.
//eval function one way in js to evaluting expression but it is bad part to use



// how to solve 
// by using try catch syntax 

try {
    logic
} catch (err){
    //handle error
}
// err is an instance of error obj

try{
    console.log("Execution starts here");
    abc
}catch(err){
    console.error("An Error has occured" , err)
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);  //gives you the current call stacks gives you sequence of call stacks
    
    
    
}
