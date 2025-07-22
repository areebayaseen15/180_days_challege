
//Promise example
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
makeServerRequest.catch(error => {
  console.log(error);
});



function getData1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data mil gaya!");
    }, 2000);
  });
}

getData1().then((result) => {
  console.log(result); // Output after 2 seconds: "Data mil gaya!"
});


function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async/Await se data mila!");
    }, 2000);
  });
}

async function showData() {
  const result = await getData();
  console.log(result); // Output after 2 seconds: "Async/Await se data mila!"
}

showData();


function getUser3(isSuccess) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        resolve("User data mil gaya");
      } else {
        reject("Error: User data nahi mila");
      }
    }, 1500);
  });
}

async function fetchUser() {
  try {
    const data = await getUser3(true); // try false to test error
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchUser();




async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    console.log("Setup:", data.setup);
    console.log("Punchline:", data.punchline);
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
}

getJoke();


async function fetchMultiple() {
  try {
    const [res1, res2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/posts/1"),
      fetch("https://jsonplaceholder.typicode.com/users/1")
    ]);

    const data1 = await res1.json();
    const data2 = await res2.json();

    console.log("Post Title:", data1.title);
    console.log("User Name:", data2.name);
  } catch (err) {
    console.error("Error:", err);
  }
}

fetchMultiple();
