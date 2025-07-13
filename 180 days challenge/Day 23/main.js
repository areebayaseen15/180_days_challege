

//real world use case


function divideNumbers(a , b){
    try{
        if(b===0){
            const err =new Error("Division by zero is not allowed") //to throw intentional error and Error is a constructor function
            throw  err;
        }
        const result = a/b
        console.log(`The result is ${result}`);
        
    } catch(err){
        console.log("Got a Math error:", err.message);
    
    }
}

divideNumbers(15, 0)


const person ={
    name:"Areeba",
    address: {
        city:"Karachi"
    },
    
}

function getPostalCode(user){
    try{
        console.log(user.address.postalCode);//undefine
        console.log(user.address.country.postalCode);// error
        
    }catch(err){
        console.error("Error acessing property:" , err.message);
    }
}
getPostalCode(person)  //undefine


//////////////////////////////////////////////

function validateAge(age){
    try{
        if(isNaN(age)){
            throw new Error("Invalid input:Age is not a number.Ypur input is ${age")
        }
        console.log(`User's age is ${age}`);
        
    } catch (err){
        console.error("Validation Error:" , err.message)
    }
}

validateAge("25")  //convert strings into number
validateAge(25)
validateAge("areeba") //error


function validateForm(formData){
    try{
        if(!formData.username) throw new Error("Username is Mandatory")
        if (!formData.email.includes("@")) throw new Error("Invalid email formate")
    
        }catch(error){
            console.error("Validation issues found" , error.message)
             throw error;  //rethrow error  ki waja sa call fi]unction bhi try catch ma likho
        }
}

try{
   validateForm({username:"Areeba", email:"areebayseen15gmail.com"})
   
}catch (err){
    console.error("Showing error message for user creation" , err.message);
    
}  //show this meessages to ui 



//finally
function processInformation(information){
  try{
    console.log("Processing Information.....");
    if(!information) throw new Error("No information available to process")
    console.log("Information processed");
    
} catch(err){
    console.log("Error:", err.message);
    
} finally{
    console.log("Cleanup:Closing database connection");
    //use finally if u working with data base io memory etc
}
}

processInformation("Areeba is learning Js")
processInformation() // error



//custom Error
//we can make our own contructor function for custom error

function ValidationError(message){
    this.name = "ValidationError"
    this.message = message;
    this.stack = new Error().stack;
}
valdateCitizen.prototype = Object.create(Error.prototype);
function valdateCitizen(age){
    if (age < 60){
        throw new ValidationError("You are not a senior citizen")
    }
    return "You are a senior citizen"
}
try{
    const message =valdateCitizen(45)
    console.log(message);
    
}catch(err){
    console.error(`${err.name}:${err.message}`)
}


// // self assignment operator ?=  not available rightnow in js but might be possible in future

// let x;
// let y = 10

// x ?= 5;   //x is undefined so x becomes 5
// y ?=10;  // y is already 10 so it remains 10

// console.log(x);
// console.log(y);

//Handling Json