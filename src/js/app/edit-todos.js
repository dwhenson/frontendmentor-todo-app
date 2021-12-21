import { todos } from "./../helpers/elements";

/**
 * Captures the updated text of the todod
 * @param      {object}  event   The event object
 */
export function editTodos(event) {
  // Get items from localStorage if they exist, otherwise use todos
  const itemsToRender = JSON.parse(!!localStorage.getItem("savedTodos"))
    ? JSON.parse(localStorage.getItem("savedTodos"))
    : todos;
  // Find the todo being edited based on unique id
  const todoToEdit = itemsToRender.find((todo) => todo.id === event.target.dataset.id);
  // Capture the content when focus leaves input
  // Update local storage and rendered content
  event.target.addEventListener("blur", function (event) {
    todoToEdit.todoText = event.target.textContent;
    localStorage.setItem("savedTodos", JSON.stringify(itemsToRender));
  });
}
