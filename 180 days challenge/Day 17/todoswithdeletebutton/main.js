let tasks = [];
let choice;

do {
  choice = prompt(
    "Console To-Do App\n\nChoose an option:\n1. Add Task\n2. View Tasks\n3. Delete a Task\n4. Exit"
  );

  if (choice === "1") {
    let task = prompt("Enter your task:");
    if (task) {
      tasks.push(task);
      console.log(`Task added: "${task}"`);
    } else {
      console.log("Empty task not added.");
    }

  } else if (choice === "2") {
    if (tasks.length === 0) {
      console.log("No tasks in your list.");
    } else {
      console.log("My Task List:");
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}              [Delete]`);
      });
    }

  } else if (choice === "3") {
    if (tasks.length === 0) {
      console.log("No tasks to delete.");
    } else {
      console.log("My Task List:");
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}              [Delete]`);
      });

      let del = parseInt(prompt("Enter task number to delete:")) - 1;
      if (del >= 0 && del < tasks.length) {
        console.log(`Deleted: "${tasks[del]}"`);
        tasks.splice(del, 1);
      } else {
        console.log("Invalid task number.");
      }
    }

  } else if (choice === "4") {
    console.log("Exiting app. Goodbye!");

  } else {
    console.log("Invalid choice. Please select 1-4.");
  }

} while (choice !== "4");
