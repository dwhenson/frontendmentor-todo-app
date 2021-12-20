import { todoList } from "../helpers/elements";
import { updateCheckbox } from "./../helpers/update-checked";
import { itemsCount } from "./../app/items-count";
import { dragTodos } from "./drag-todos";

/**
 * Renders the todo list items and remove buttons to the HTML
 * @param      {array}  todos  The todo items
 */
export function displayTodos(todos, filter) {
  // Clear the current content of the ul
  todoList.innerHTML = "";
  // Check if there are stored todos, use that object if it exists
  if (localStorage.getItem("savedTodos")) {
    todos = JSON.parse(localStorage.getItem("savedTodos"));
  }
  // if (filter === "completed") {
  //   todos = todos.filter((todo) => todo.completed);
  // }
  // if (filter === "remaining") {
  //   todos = todos.filter((todo) => !todo.completed);
  // }

  // Create an li for each todo item
  for (const todo of todos) {
    const todoLi = document.createElement("li");
    todoLi.setAttribute("draggable", true);
    todoLi.dataset.function = "drag";
    todoLi.dataset.id = todo.id;
    todoLi.innerHTML = `
      <input type="checkbox" name=${todo.id} id=${todo.id} data-function="toggle" ${updateCheckbox(todo)}>
      <label class="visually-hidden" for=${todo.id}>${todo.todoText}</label>
      <span contenteditable="true" data-function="edit" data-id="${todo.id}">${todo.todoText}</span>
    `;
    // Create a remvoe button for each todo item
    const removeButton = document.createElement("button");
    removeButton.dataset.function = "remove";
    removeButton.dataset.id = todo.id;
    removeButton.textContent = "Remove";
    todoLi.append(removeButton);

    todoList.append(todoLi);
  }
  // Update todo count
  itemsCount();
  // Readd listeners to all todos
  dragTodos();
}
