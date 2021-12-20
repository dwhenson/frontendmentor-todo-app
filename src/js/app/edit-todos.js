import { todos } from "./../helpers/elements";

export function editTodos(event) {
  const todoToEdit = todos.find((todo) => todo.id === event.target.dataset.id);
  event.target.addEventListener("blur", function (event) {
    todoToEdit.todoText = event.target.textContent;
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  });
}
