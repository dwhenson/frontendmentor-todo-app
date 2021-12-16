import { updateCheckbox } from "./../helpers/update-checked";
import { itemsCount } from "./../app/items-count";

export function displayTodos(todoList) {
  const todoUl = document.querySelector("#todos-ul");
  todoUl.innerHTML = "";

  for (const todo of todoList) {
    const todoLi = document.createElement("li");
    todoLi.innerHTML = `
      <input type="checkbox" name=${todo.id} id=${
      todo.id
    } data-function="toggle" ${updateCheckbox(todo)}>
      <label for=${todo.id}>${todo.todoText}</label>
    `;

    const removeButton = document.createElement("button");
    removeButton.dataset.function = "remove";
    removeButton.dataset.id = todo.id;
    removeButton.textContent = "Remove";
    todoLi.append(removeButton);

    todoUl.append(todoLi);
  }
  itemsCount();
}
