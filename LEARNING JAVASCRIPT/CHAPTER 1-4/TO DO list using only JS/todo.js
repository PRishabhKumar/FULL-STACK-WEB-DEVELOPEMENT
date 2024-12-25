let command = prompt("Enter the choice of action : ");
let todo = [];
let counter = 0;
while (command != "Quit") {
  if (command == "Add") {
    let action = prompt("Enter the target you want to add to the list : ");
    todo.push(action);
  } else if (command == "Remove") {
    let completed_task = prompt("Enter the task that you have completed : ");
    let completed_index = 0;
    for (let i = 0; i < todo.length; i++) {
      if (todo[i] == completed_task) {
        completed_index = i;
      }
    }
    console.log(`You have successfully completed the task : ${completed_task}`);
    todo.splice(completed_index1, 1);
  } else if (command == "List") {
    console.log("Here is your TO-DO list : ");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i + 1}. ${todo[i]}`);
    }
  } else {
    console.log("Invalid choice of action. Enter again.");
  }
  command = prompt("Enter the next choice of action : ");
}
