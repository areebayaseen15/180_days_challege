
// Console is an object and there are lots of methods of this object like cosole.log(), Console.warn()etc

// Console.log
// Debugging	Agar koi code kaam nahi kar raha, console.log se check karte hain ke variables expected values hold kar rahe hain ya nahi.
// Tracking Flow	Kabhi kabhi hum multiple jagah console.log lagate hain taake dekhen ke code kis path se guzra.
//  Testing	Quick testing ke liye output ko inspect karne ke liye.


// Examples:
console.log("Hello world");               // Normal log in console
console.warn("This is a warning");        // Yellow warning message
console.error("This is an error");        // Red error message
console.info("This is some info");        // Informational message
console.debug("Debugging here");          // Debug message (same as log)
console.clear();                          // Clears the console
console.table(["HTML", "CSS", "JS"]);     // Displays array as table
console.count("Click");                   // Counts how many times it runs
console.time("Timer");                    // Starts a timer
console.timeEnd("Timer");                 // Ends timer & shows duration
console.group("Group Start");             // Start a group
console.log("Inside group");              // Message inside group
console.groupEnd();                       // End the group
console.trace("Trace Example");           // Shows the call stack trace
console.dir({ name: "Areeba", age: 21 }); // Shows object properties in detail


let user = {
  name: "Areeba",
  skill: "JavaScript",
};

console.log("User Details:");
console.table(user);


