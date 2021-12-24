import { todoList, todos } from "./../helpers/elements";
import { updateCheckbox } from "./../helpers/update-checked";
import { itemsCount } from "./../app/items-count";
import { dragTodos } from "./drag-todos";

/**
 * Renders the todo list items and remove buttons to the HTML
 * @param      {array}  todos  The todo items
 */
export function displayTodos(todoListItems, filter) {
  // Clear the current content of the ul
  todoList.innerHTML = "";
  // Check if there are stored todoList, use that object if it exists
  if (localStorage.getItem("savedTodos")) {
    todoListItems = JSON.parse(localStorage.getItem("savedTodos"));
  }
  if (todoListItems.length === 0) {
    todoList.innerHTML = "<li>Nothing to see here, add some todos!</li>";
    return;
  }
  // If filters are being used then update todoListItems
  if (filter === "completed") {
    todoListItems = todoListItems.filter((todo) => todo.completed);
    if (todoListItems.length === 0) {
      todoList.innerHTML =
        "<li draggable='false' style='justify-content:center'>Nothing to see here. Complete some todos!</li>";
      return;
    }
  }
  if (filter === "remaining") {
    todoListItems = todoListItems.filter((todo) => !todo.completed);
    if (todoListItems.length === 0) {
      todoList.innerHTML = "<li draggable='false' style='justify-content:center'>Nothing to see here. Good job!</li>";
      return;
    }
  }

  if (todoListItems.length === 0) {
    todoList.innerHTML =
      "<li draggable='false' style='justify-content:center'>Nothing to see here. Add some todos!</li>";
    return;
  }
  // Create an li for each todo item
  for (const todo of todoListItems) {
    const todoLi = document.createElement("li");
    todoLi.setAttribute("draggable", true);
    todoLi.dataset.function = "drag";
    todoLi.dataset.id = todo.id;
    todoLi.innerHTML = `
      <label class="custom-input" for=${todo.id}>
        <input aria-labelledby="${todo.id}-label" type="checkbox" name=${todo.id} id=${
      todo.id
    } data-function="toggle" ${updateCheckbox(todo)}>
      </label>
      <span ${updateCheckbox(todo) ? "contenteditable='false'" : "contenteditable='true'"} id="${
      todo.id
    }-label" data-function="edit" data-id="${todo.id}" ${updateCheckbox(todo) ? "class='js-completed'" : ""}>${
      todo.todoText
    }</span>`;
    // Create a remove button for each todo item
    const removeButton = document.createElement("button");
    removeButton.dataset.function = "remove";
    removeButton.dataset.id = todo.id;
    removeButton.setAttribute("aria-label", "Remove toto");
    removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>`;
    todoLi.append(removeButton);
    todoList.append(todoLi);
  }
  // Update item count and re-add drag event listeners on new list items
  itemsCount();
  dragTodos();
}
