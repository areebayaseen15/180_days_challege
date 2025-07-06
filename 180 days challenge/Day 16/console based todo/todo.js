let tasks = [];

let choice;

do {
  choice = prompt(
    "Welcome to console based todo app\n What do you want to do?\n1. Add Task\n2. View Tasks list\n3. Delete Task\n4. Exit"
  );

  if (choice === "1") {
    let task = prompt("Enter your task");
    tasks.push(task);
    console.log(" Task added successfully:", task);

  } else if (choice === "2") {
    console.log(" Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });

  } else if (choice === "3") {
    let delTask = parseInt(prompt("Enter task number to delete")) - 1;
    if (delTask >= 0 && delTask < tasks.length) {
      console.log("Task deleted:", tasks[delTask]);
      tasks.splice(delTask, 1);
    } else {
      console.log("Invalid task number");
    }

  } else if (choice === "4") {
    console.log("Exiting...");

  } else {
    console.log("Invalid choice. Try again.");
  }

} while (choice !== "4");
