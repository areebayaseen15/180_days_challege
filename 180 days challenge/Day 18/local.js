

//local storage => feature of web browser part of web api storage
//localStorage mein ek baar mein sirf ek key-value pair set hota hai.

// Save data   =>setItem =>in key value
localStorage.setItem("name", "Areeba");  

// Get data    getItem() with key
let username = localStorage.getItem("name");
console.log(username); // Output: Areeba

// Remove data  => removeItem() with key
localStorage.removeItem("name");  //=> //to remove single data 

// Clear all
localStorage.clear();   //to clear all data


// How to Store and Read Complex Data Values in Local Storage
// Local storage can only store strings. This means if you need to store values like objects or arrays,
//  you first need to get a string representation of the value. You do this using the 
//  JSON.stringify() method

const loginUser ={
    name :"areeba",
    email :"areebayaseen15@gmail.com"

}
localStorage.setItem("user" , JSON.stringify(loginUser))
// Now, when you want to retrieve the data back from local storage, you also need to change 
// it from its string representation back to the original form. And you do that using the 
// JSON.parse() method.

const storedloginUser = localStorage.getItem("user");
if(storedloginUser){
    const userData = JSON.parse(storedloginUser);
     console.log(userData);
     
}else{
    console.log("user data not found");
    
}
// In the example above, we first check if there is data for ‘user’ in local storage before
//  using the JSON.parse() method. This is important because if it does not exist in local 
// storage, JSON.parse() will be applied to a null value (which will result in an error).

// How to Get the Name of a Key in Local Storage
let key = localStorage.key(0)
console.log(key);  //user 

// The example above will return the name of the key at index 0. If there is no key at the
//  specified index, the method will return null.

// A Practical Example
document.addEventListener("DOMContentLoaded", () => {
  const userNameText = document.querySelector(".userName");
  const userAgeText = document.querySelector(".userAge");

  const saveNameButton = document.querySelector(".saveNameBtn");
  const saveAgeButton = document.querySelector(".saveAgeBtn");

  // Set buttons
  saveNameButton.addEventListener("click", () => {
    const userName = document.querySelector(".name").value;
    if (userName.trim() !== "") {
      userNameText.textContent = userName;
      localStorage.setItem("name", userName);
    }
  });

  saveAgeButton.addEventListener("click", () => {
    const userAge = document.querySelector(".age").value;
    if (userAge.trim() !== "") {
      userAgeText.textContent = userAge;
      localStorage.setItem("age", userAge);
    }
  });

  // Get saved data after reload
  function displayUserName() {
    const name = localStorage.getItem("name");
    userNameText.textContent = name ? name : "no user found";
  }

  function displayUserAge() {
    const age = localStorage.getItem("age");
    userAgeText.textContent = age ? age : "no age found";
  }

  displayUserName();
  displayUserAge();
});
