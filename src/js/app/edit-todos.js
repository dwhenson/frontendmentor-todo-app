import { todos } from "./../helpers/elements";

/**
 * Captures the updated text of the todod
 * @param      {object}  event   The event object
 */
export function editTodos(event) {
  // Find the todo being edited based on unique id
  const todoToEdit = todos.find((todo) => todo.id === event.target.dataset.id);
  // Capture the content when focus leaves input
  // Update local storage and rendered content
  event.target.addEventListener("blur", function (event) {
    todoToEdit.todoText = event.target.textContent;
  });
}
