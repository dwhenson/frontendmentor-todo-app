export const todoList = document.querySelector("#todos-ul");
export const itemsLeft = document.querySelector("#items-left");
export const addInput = document.querySelector("#add-input");
// export const todos = [];
// Default to values
export const todos = [
  { todoText: "Click on the left to complete the todo", completed: false, id: "aaaaaa" },
  { todoText: "Click on the right to delete the todo", completed: false, id: "bbbbbb" },
  { todoText: "Click on the text to edit the todo", completed: false, id: "cccccc" },
  { todoText: "Drag and drop to reorder the list", completed: false, id: "dddddd" },
  { todoText: "Use the buttons below to filer the list", completed: false, id: "eeeeee" },
];
