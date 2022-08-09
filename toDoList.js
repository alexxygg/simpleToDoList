let addTask = "add";
let removeTask = "remove";
let listAll = "list";
let quit = "quit";
let userSelection = prompt(
  "What do you want to do? Add task, Remove task, List all or Quit? Enter add, remove, list or quit."
).toLowerCase();
let userList = [];
while (userSelection !== quit) {
  if (userSelection === quit) break;
  else if (userSelection === addTask) {
    let addedTask = prompt("Enter the task!");
    userList.push(addedTask);
    alert("Done");
  } else if (userSelection === removeTask) {
    let indexToRemove = prompt(
      "Enter the index of the task you want to remove."
    );
    userList.splice(indexToRemove, 1);
    alert("Done");
  } else if (userSelection === listAll) {
    console.log(userList);
  }
  userSelection = prompt(
    "What do you want to do? Add task, Remove task, List all or Quit? Enter add, remove, list or quit."
  );
}
