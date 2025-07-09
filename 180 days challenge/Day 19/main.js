

let heading = document.querySelector(".name")
let para = document.querySelector("p")
let link = document.querySelector("a")

console.log(heading);
console.log(para);
heading.innerHTML ="Ayesha Siraj"
para.textContent="my name is not Areeba"


// link.setAttribute(
//     "href",
//     "https://www.example.com"
// )
// imageEl = document.querySelector("img")
// imageEl.setAttribute(
//     "src",
//     "https://www.example.com/image.jpg"
// )

// style css => direct style , css classes
// direct style   element.style.property = "value"
heading.style.color = "red"
// heading.style.backgroundColor = "black"
para.style.padding ="20px"

// css classes  => access all the classes classlist.remove or add
heading.classList.remove("test")

// Acces
//by class , by tags , by id

// Change 
// content(innerHTML) , texxtContent, attribute(setAttribute)

// Style Css
// direct style , css style


// Event and event listner

// event => action or interaction
// event lister => response to event

// choose element => on which event will occur
// add event listner to the element =>addEventListener("eventtype", function(){})
//type => which type event 
// action which function to execute


let button = document.querySelector("button")

function handleClick(){
    console.log("Button was clicked");
    button.textContent = "Clicked!";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    
}
button.addEventListener("click" , handleClick);
