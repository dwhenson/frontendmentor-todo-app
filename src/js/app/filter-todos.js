import { todos, todoList } from "./../helpers/elements";
import { updateCheckbox } from "./../helpers/update-checked";
import { displayTodos } from "./display-todos";

function showCompleted(todos) {
  todoList.innerHTML = "";

  if (localStorage.getItem("savedTodos")) {
    todos = JSON.parse(localStorage.getItem("savedTodos"));
  }
  const completed = todos.filter((todo) => todo.completed);
  for (const todo of completed) {
    const todoLi = document.createElement("li");
    todoLi.setAttribute("draggable", true);
    todoLi.dataset.function = "drag";
    todoLi.dataset.id = todo.id;
    todoLi.innerHTML = `
      <input type="checkbox" name=${todo.id} id=${todo.id} data-function="toggle" ${updateCheckbox(todo)}>
      <label class="visually-hidden" for=${todo.id}>${todo.todoText}</label>
      <span contenteditable="true" data-function="edit" data-id="${todo.id}">${todo.todoText}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.dataset.function = "remove";
    removeButton.dataset.id = todo.id;
    removeButton.textContent = "Remove";
    todoLi.append(removeButton);

    todoList.append(todoLi);
  }
}

function showRemaining(todos) {
  todoList.innerHTML = "";

  if (localStorage.getItem("savedTodos")) {
    todos = JSON.parse(localStorage.getItem("savedTodos"));
  }
  const remaining = todos.filter((todo) => !todo.completed);
  for (const todo of remaining) {
    const todoLi = document.createElement("li");
    todoLi.setAttribute("draggable", true);
    todoLi.dataset.function = "drag";
    todoLi.dataset.id = todo.id;
    todoLi.innerHTML = `
      <input type="checkbox" name=${todo.id} id=${todo.id} data-function="toggle" ${updateCheckbox(todo)}>
      <label class="visually-hidden" for=${todo.id}>${todo.todoText}</label>
      <span contenteditable="true" data-function="edit" data-id="${todo.id}">${todo.todoText}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.dataset.function = "remove";
    removeButton.dataset.id = todo.id;
    removeButton.textContent = "Remove";
    todoLi.append(removeButton);

    todoList.append(todoLi);
  }
}

export function filterTodos(target) {
  if (target === "completed") {
    // const completed = todos.filter((todo) => todo.completed);
    displayTodos(todos, "completed");
    // showCompleted(todos);
  }
  if (target === "remaining") {
    // const remaining = todos.filter((todo) => !todo.completed);
    displayTodos(todos, "remaining");
    // showRemaining(todos);
  }
}
